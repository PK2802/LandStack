import React, { useEffect, useRef, useState, useMemo } from 'react';
import L from 'leaflet';
import type { Parcel, LayerState, PilotRegion, UserRole } from '../types';
import { PARCELS_DATA, RESTRICTION_LAYERS, PILOT_CONFIGS } from '../data/parcelsData';
import { 
  Layers, 
  Search, 
  X, 
  Cpu, 
  Play, 
  ZoomIn, 
  ZoomOut, 
  Maximize2
} from 'lucide-react';

interface GISPortalProps {
  selectedPilot: PilotRegion;
  selectedParcel: Parcel | null;
  onSelectParcel: (parcel: Parcel) => void;
  onOpenSimulator: (parcel: Parcel) => void;
  onOpenEncroachment: (parcel: Parcel) => void;
  userRole: UserRole;
}

export const GISPortal: React.FC<GISPortalProps> = ({
  selectedPilot,
  selectedParcel,
  onSelectParcel,
  onOpenSimulator,
  onOpenEncroachment,
  userRole: _userRole,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const layersGroupRef = useRef<L.FeatureGroup | null>(null);
  const restrictionGroupRef = useRef<L.FeatureGroup | null>(null);

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Layer Visibility State (3-Tier Engine)
  const [layers, setLayers] = useState<LayerState>({
    cadastralBoundaries: true,
    clearTitles: true,
    encumberedTitles: true,
    revenueDisputes: true,
    waterBodyBuffer: true,
    powerlineEasement: true,
    masterPlanZoning: true,
    satelliteFootprintComparison: false,
  });

  const [isLayerDrawerOpen, setIsLayerDrawerOpen] = useState(true);

  // Filtered parcels for current pilot
  const currentPilotParcels = useMemo(() => {
    return PARCELS_DATA.filter((p) => p.pilot === selectedPilot);
  }, [selectedPilot]);

  // Search filter
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return currentPilotParcels.filter(
      (p) =>
        p.ulpin.toLowerCase().includes(q) ||
        p.khasraOrPlotNo.toLowerCase().includes(q) ||
        p.ror.ownerName.toLowerCase().includes(q)
    );
  }, [searchQuery, currentPilotParcels]);

  // Base Map Tile State (100% Free - No API Key Required)
  const [baseMapType, setBaseMapType] = useState<'osm' | 'satellite' | 'gray'>('osm');
  const baseTileLayerRef = useRef<L.TileLayer | null>(null);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const config = PILOT_CONFIGS[selectedPilot];
      const map = L.map(mapContainerRef.current, {
        center: config.center,
        zoom: config.zoom,
        zoomControl: false,
        attributionControl: false,
      });

      // Attribution
      L.control.attribution({ position: 'bottomright', prefix: false })
        .addAttribution('&copy; OpenStreetMap &copy; Esri | National Land Stack PostGIS')
        .addTo(map);

      layersGroupRef.current = L.featureGroup().addTo(map);
      restrictionGroupRef.current = L.featureGroup().addTo(map);

      mapInstanceRef.current = map;
    }
  }, []);

  // Manage Dynamic Basemap Provider (No API Key Required)
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (baseTileLayerRef.current) {
      map.removeLayer(baseTileLayerRef.current);
    }

    let tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
    let maxZoom = 19;

    if (baseMapType === 'satellite') {
      tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
      maxZoom = 19;
    } else if (baseMapType === 'gray') {
      tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';
      maxZoom = 16;
    }

    baseTileLayerRef.current = L.tileLayer(tileUrl, {
      maxZoom,
    }).addTo(map);

    baseTileLayerRef.current.bringToBack();
  }, [baseMapType]);

  // Update map view on pilot change
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    const config = PILOT_CONFIGS[selectedPilot];
    mapInstanceRef.current.flyTo(config.center, config.zoom, { duration: 1.2 });
  }, [selectedPilot]);

  // Render Vector Polygons for Parcels and Restrictions
  useEffect(() => {
    const map = mapInstanceRef.current;
    const parcelGroup = layersGroupRef.current;
    const restrictGroup = restrictionGroupRef.current;

    if (!map || !parcelGroup || !restrictGroup) return;

    parcelGroup.clearLayers();
    restrictGroup.clearLayers();

    // 1. Render Extended / Restriction Layers first (Background)
    const activeRestrictions = RESTRICTION_LAYERS.filter((r) => r.pilot === selectedPilot);

    activeRestrictions.forEach((item) => {
      if (item.type === 'water_buffer' && layers.waterBodyBuffer) {
        const poly = L.polygon(item.coordinates as L.LatLngExpression[], {
          color: '#0284C7',
          weight: 1.5,
          dashArray: '4, 4',
          fillColor: '#38BDF8',
          fillOpacity: 0.22,
        }).addTo(restrictGroup);

        poly.bindTooltip(`<b>${item.name}</b><br/><span style="font-size:10px;">${item.description}</span>`, {
          sticky: true,
          className: 'parcel-label-tooltip',
        });
      }

      if (item.type === 'powerline_easement' && layers.powerlineEasement) {
        const poly = L.polygon(item.coordinates as L.LatLngExpression[], {
          color: '#CA8A04',
          weight: 2,
          dashArray: '6, 6',
          fillColor: '#FEF08A',
          fillOpacity: 0.25,
        }).addTo(restrictGroup);

        poly.bindTooltip(`<b>${item.name}</b><br/><span style="font-size:10px;">${item.description}</span>`, {
          sticky: true,
          className: 'parcel-label-tooltip',
        });
      }

      if (item.type === 'master_plan_zone' && layers.masterPlanZoning) {
        const isCommercial = item.zoneClassification === 'Commercial';
        const isGreen = item.zoneClassification === 'Green_Belt';
        const color = isCommercial ? '#2563EB' : isGreen ? '#16A34A' : '#D97706';

        const poly = L.polygon(item.coordinates as L.LatLngExpression[], {
          color: color,
          weight: 1,
          dashArray: '3, 5',
          fillColor: color,
          fillOpacity: 0.08,
        }).addTo(restrictGroup);

        poly.bindTooltip(`<b>${item.name}</b>`, {
          sticky: true,
          className: 'parcel-label-tooltip',
        });
      }
    });

    // 2. Render Cadastral Parcels
    currentPilotParcels.forEach((parcel) => {
      // Determine visibility based on Layer Filter
      if (!layers.cadastralBoundaries) return;
      if (parcel.titleStatus === 'CLEAR' && !layers.clearTitles) return;
      if (parcel.titleStatus === 'ENCUMBERED' && !layers.encumberedTitles) return;
      if (parcel.titleStatus === 'DISPUTED' && !layers.revenueDisputes) return;

      const isSelected = selectedParcel?.id === parcel.id;

      // Color coding
      let strokeColor = '#15803D'; // Forest green
      let fillColor = '#DCFCE7';

      if (parcel.titleStatus === 'ENCUMBERED') {
        strokeColor = '#B91C1C'; // Crimson red
        fillColor = '#FEE2E2';
      } else if (parcel.titleStatus === 'DISPUTED') {
        strokeColor = '#D97706'; // Amber gold
        fillColor = '#FEF3C7';
      }

      const parcelPoly = L.polygon(parcel.polygon as L.LatLngExpression[], {
        color: isSelected ? '#0F294A' : strokeColor,
        weight: isSelected ? 3.5 : 2,
        fillColor: fillColor,
        fillOpacity: isSelected ? 0.65 : 0.45,
      }).addTo(parcelGroup);

      // Centroid Marker & ULPIN Label
      const label = `
        <div class="font-sans leading-tight">
          <div class="font-mono font-bold text-[11px] text-navy-900">${parcel.ulpin}</div>
          <div class="text-[10px] text-slate-700 font-semibold">${parcel.khasraOrPlotNo}</div>
          <div class="text-[9px] text-slate-500">${parcel.ror.ownerName}</div>
          <div class="text-[9px] mt-0.5">
            ${parcel.titleStatus === 'CLEAR' ? '<span class="text-emerald-700 font-bold">● Title Clear</span>' : ''}
            ${parcel.titleStatus === 'ENCUMBERED' ? `<span class="text-rose-700 font-bold">● Lien: ₹${((parcel.encumbrance.lienAmountINR || 0)/100000).toFixed(1)}L (${parcel.encumbrance.bankName})</span>` : ''}
            ${parcel.titleStatus === 'DISPUTED' ? '<span class="text-amber-700 font-bold">● Injunction Stay</span>' : ''}
          </div>
        </div>
      `;

      parcelPoly.bindTooltip(label, {
        permanent: false,
        direction: 'top',
        className: 'parcel-label-tooltip',
      });

      // Permanent Centroid Badge so every plot is instantly identifiable at a glance
      const statusDot = parcel.titleStatus === 'CLEAR' ? '🟢' : parcel.titleStatus === 'ENCUMBERED' ? '🔴' : '🟡';
      const shortTitle = parcel.khasraOrPlotNo.split(',')[0].replace('Survey No. ', 'Sy. ').replace('Plot No. ', 'Plot ');

      L.marker(parcel.centroid, {
        icon: L.divIcon({
          className: 'parcel-permanent-label',
          html: `<div style="display:flex;align-items:center;gap:3px;"><span style="font-size:8px;">${statusDot}</span><span style="font-weight:600;">${shortTitle}</span></div>`,
          iconSize: [80, 18],
          iconAnchor: [40, 9],
        }),
        interactive: false,
      }).addTo(parcelGroup);

      // Click to inspect
      parcelPoly.on('click', () => {
        onSelectParcel(parcel);
      });

      // Hover emphasis
      parcelPoly.on('mouseover', () => {
        if (!isSelected) {
          parcelPoly.setStyle({ weight: 3, fillOpacity: 0.6 });
        }
      });
      parcelPoly.on('mouseout', () => {
        if (!isSelected) {
          parcelPoly.setStyle({ weight: 2, fillOpacity: 0.45 });
        }
      });

      // 3. Render Satellite Drift Footprint if enabled
      if (layers.satelliteFootprintComparison && parcel.encroachment.hasAnomaly) {
        // Encroachment Building Footprint
        L.polygon(parcel.encroachment.satelliteBuildingFootprint as L.LatLngExpression[], {
          color: '#475569',
          weight: 1.5,
          dashArray: '3, 3',
          fillColor: '#94A3B8',
          fillOpacity: 0.4,
        }).addTo(parcelGroup);

        // Highlight sliver in bright red
        if (parcel.encroachment.encroachmentSliver.length > 0) {
          const sliver = L.polygon(parcel.encroachment.encroachmentSliver as L.LatLngExpression[], {
            color: '#DC2626',
            weight: 2,
            fillColor: '#EF4444',
            fillOpacity: 0.85,
          }).addTo(parcelGroup);

          sliver.bindTooltip(`<b>ENCROACHMENT ANOMALY</b><br/>${parcel.encroachment.anomalyAreaSqMeters} m² outside boundary!`, {
            permanent: true,
            direction: 'center',
            className: 'parcel-label-tooltip',
          });

          sliver.on('click', () => {
            onOpenEncroachment(parcel);
          });
        }
      }
    });
  }, [selectedPilot, currentPilotParcels, layers, selectedParcel]);

  // Pan to selected parcel if changed from outside
  useEffect(() => {
    if (!selectedParcel || !mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo(selectedParcel.centroid, 17, { duration: 0.8 });
  }, [selectedParcel]);

  const handleZoomIn = () => mapInstanceRef.current?.zoomIn();
  const handleZoomOut = () => mapInstanceRef.current?.zoomOut();
  const handleResetBounds = () => {
    if (!mapInstanceRef.current) return;
    const config = PILOT_CONFIGS[selectedPilot];
    mapInstanceRef.current.flyTo(config.center, config.zoom, { duration: 0.8 });
  };

  return (
    <div className="relative w-full h-[calc(100vh-132px)] bg-slate-200 overflow-hidden flex">
      {/* Search Toolbar (Floating Top Left) */}
      <div className="absolute top-4 left-4 z-20 w-80 sm:w-96 shadow-md">
        <div className="relative">
          <div className="relative bg-white border border-slate-300 rounded-sm flex items-center px-3 py-2 text-xs">
            <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
            <input
              type="text"
              aria-label="Search cadastral registry"
              placeholder="Search by ULPIN, Survey No, or Owner Name..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchResults(true);
              }}
              onFocus={() => setShowSearchResults(true)}
              className="w-full bg-transparent text-navy-900 focus:outline-none font-medium placeholder-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setShowSearchResults(false);
                }}
                className="text-slate-400 hover:text-slate-600 ml-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Search Results Dropdown */}
          {showSearchResults && searchResults.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-slate-300 rounded-sm shadow-xl max-h-72 overflow-y-auto z-30 divide-y divide-slate-100 text-xs">
              <div className="px-3 py-1.5 bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Matching Cadastral Records ({searchResults.length})
              </div>
              {searchResults.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectParcel(p);
                    setShowSearchResults(false);
                  }}
                  className="p-2.5 hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-navy-900">{p.khasraOrPlotNo}</span>
                    <span className="font-mono text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded-xs border border-amber-200">
                      {p.ulpin}
                    </span>
                  </div>
                  <div className="text-slate-600 text-[11px] mt-0.5">
                    Owner: {p.ror.ownerName}
                  </div>
                  <div className="text-[10px] text-slate-500 flex items-center justify-between mt-1">
                    <span>{p.villageOrSector}</span>
                    <span className={`font-semibold ${
                      p.titleStatus === 'CLEAR' ? 'text-emerald-700' :
                      p.titleStatus === 'ENCUMBERED' ? 'text-rose-700' : 'text-amber-700'
                    }`}>
                      {p.titleStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Layer Control Drawer (Floating Right) */}
      <div className={`absolute top-4 right-4 z-20 transition-all duration-200 ${
        isLayerDrawerOpen ? 'w-72' : 'w-auto'
      }`}>
        <div className="bg-white border border-slate-300 rounded-sm shadow-md overflow-hidden text-xs">
          {/* Layer Header */}
          <div 
            onClick={() => setIsLayerDrawerOpen(!isLayerDrawerOpen)}
            className="bg-navy-900 text-white px-3 py-2 flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center space-x-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-bold tracking-wide">Map Layers</span>
            </div>
            <button className="text-slate-400 hover:text-white text-[11px]">
              {isLayerDrawerOpen ? 'Collapse' : 'Expand'}
            </button>
          </div>

          {/* Layer Checkboxes */}
          {isLayerDrawerOpen && (
            <div className="p-3 space-y-3.5 max-h-[calc(100vh-230px)] overflow-y-auto">
              {/* BASEMAP PROVIDER SELECTOR */}
              <div className="space-y-1.5 pb-2.5 border-b border-slate-200">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Base Map
                </div>
                <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-sm text-[10px] font-medium">
                  <button
                    onClick={() => setBaseMapType('osm')}
                    className={`py-1 px-1 rounded-xs text-center transition-colors ${
                      baseMapType === 'osm' ? 'bg-navy-800 text-white font-bold shadow-xs' : 'text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Street Map
                  </button>
                  <button
                    onClick={() => setBaseMapType('satellite')}
                    className={`py-1 px-1 rounded-xs text-center transition-colors ${
                      baseMapType === 'satellite' ? 'bg-navy-800 text-white font-bold shadow-xs' : 'text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Satellite
                  </button>
                  <button
                    onClick={() => setBaseMapType('gray')}
                    className={`py-1 px-1 rounded-xs text-center transition-colors ${
                      baseMapType === 'gray' ? 'bg-navy-800 text-white font-bold shadow-xs' : 'text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Light Gray
                  </button>
                </div>
              </div>

              {/* TIER 1: BASE LAYER */}
              <div className="space-y-1.5">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Cadastral Base
                </div>
                <label className="flex items-center space-x-2 text-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={layers.cadastralBoundaries}
                    onChange={(e) => setLayers({ ...layers, cadastralBoundaries: e.target.checked })}
                    className="rounded-xs border-slate-300 text-navy-800 focus:ring-0"
                  />
                  <span>Cadastral Plot Boundaries ({currentPilotParcels.length})</span>
                </label>
              </div>

              {/* TIER 2: ESSENTIAL GOVERNANCE & RIGHTS */}
              <div className="space-y-1.5 pt-2 border-t border-slate-200">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Governance & Rights
                </div>
                <label className="flex items-center space-x-2 text-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={layers.clearTitles}
                    onChange={(e) => setLayers({ ...layers, clearTitles: e.target.checked })}
                    className="rounded-xs border-slate-300 text-navy-800 focus:ring-0"
                  />
                  <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600 inline-block shrink-0"></span>
                  <span>Clear Titles (Unencumbered)</span>
                </label>

                <label className="flex items-center space-x-2 text-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={layers.encumberedTitles}
                    onChange={(e) => setLayers({ ...layers, encumberedTitles: e.target.checked })}
                    className="rounded-xs border-slate-300 text-navy-800 focus:ring-0"
                  />
                  <span className="w-2.5 h-2.5 rounded-xs bg-rose-600 inline-block shrink-0"></span>
                  <span>Active Bank Mortgage Liens</span>
                </label>

                <label className="flex items-center space-x-2 text-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={layers.revenueDisputes}
                    onChange={(e) => setLayers({ ...layers, revenueDisputes: e.target.checked })}
                    className="rounded-xs border-slate-300 text-navy-800 focus:ring-0"
                  />
                  <span className="w-2.5 h-2.5 rounded-xs bg-amber-500 inline-block shrink-0"></span>
                  <span>Revenue Disputes / Court Stays</span>
                </label>
              </div>

              {/* TIER 3: USE-CASE RESTRICTIONS & INFRASTRUCTURE */}
              <div className="space-y-1.5 pt-2 border-t border-slate-200">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Restrictions & Zoning
                </div>
                <label className="flex items-center space-x-2 text-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={layers.waterBodyBuffer}
                    onChange={(e) => setLayers({ ...layers, waterBodyBuffer: e.target.checked })}
                    className="rounded-xs border-slate-300 text-navy-800 focus:ring-0"
                  />
                  <span className="w-2.5 h-2.5 rounded-xs bg-sky-500 inline-block shrink-0"></span>
                  <span>Water Body Buffer (50m Zone)</span>
                </label>

                <label className="flex items-center space-x-2 text-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={layers.powerlineEasement}
                    onChange={(e) => setLayers({ ...layers, powerlineEasement: e.target.checked })}
                    className="rounded-xs border-slate-300 text-navy-800 focus:ring-0"
                  />
                  <span className="w-2.5 h-2.5 rounded-xs bg-yellow-500 inline-block shrink-0"></span>
                  <span>HT Powerline Easement</span>
                </label>

                <label className="flex items-center space-x-2 text-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={layers.masterPlanZoning}
                    onChange={(e) => setLayers({ ...layers, masterPlanZoning: e.target.checked })}
                    className="rounded-xs border-slate-300 text-navy-800 focus:ring-0"
                  />
                  <span className="w-2.5 h-2.5 rounded-xs bg-blue-600 inline-block shrink-0"></span>
                  <span>Master Plan 2031 Zoning</span>
                </label>
              </div>

              {/* AI SATELLITE DRIFT TOGGLE */}
              <div className="pt-2 border-t border-slate-200">
                <button
                  onClick={() => setLayers({
                    ...layers,
                    satelliteFootprintComparison: !layers.satelliteFootprintComparison
                  })}
                  className={`w-full py-1.5 px-2 rounded-sm text-left flex items-center justify-between font-semibold border transition-colors ${
                    layers.satelliteFootprintComparison
                      ? 'bg-rose-50 border-rose-400 text-rose-900'
                      : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="flex items-center space-x-1.5">
                    <Cpu className="w-3.5 h-3.5 text-rose-600" />
                    <span>AI Drift / Encroachment</span>
                  </span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-xs font-mono font-bold ${
                    layers.satelliteFootprintComparison ? 'bg-rose-600 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {layers.satelliteFootprintComparison ? 'ON' : 'OFF'}
                  </span>
                </button>
              </div>

              {/* MAP LEGEND (COMPACT) */}
              <div className="pt-2.5 border-t border-slate-200">
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  Legend
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-700">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600 shrink-0"></span>
                    <span>Clear Title</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-rose-600 shrink-0"></span>
                    <span>Bank Lien</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-amber-500 shrink-0"></span>
                    <span>Disputed</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-sky-500 shrink-0"></span>
                    <span>Water Buffer</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Map Control Buttons (Bottom Right) */}
      <div className="absolute bottom-6 right-4 z-20 flex flex-col space-y-1.5 shadow-md">
        <button
          onClick={handleZoomIn}
          title="Zoom In"
          className="w-8 h-8 bg-white border border-slate-300 hover:bg-slate-100 text-navy-900 font-bold rounded-sm flex items-center justify-center transition-colors shadow-xs"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={handleZoomOut}
          title="Zoom Out"
          className="w-8 h-8 bg-white border border-slate-300 hover:bg-slate-100 text-navy-900 font-bold rounded-sm flex items-center justify-center transition-colors shadow-xs"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleResetBounds}
          title="Reset Pilot Bounds"
          className="w-8 h-8 bg-white border border-slate-300 hover:bg-slate-100 text-navy-900 font-bold rounded-sm flex items-center justify-center transition-colors shadow-xs"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Action Button (Bottom Left) */}
      <div className="absolute bottom-6 left-4 z-20">
        <button
          onClick={() => onOpenSimulator(selectedParcel || currentPilotParcels[0])}
          className="px-3.5 py-2 bg-navy-900 hover:bg-navy-800 text-white font-medium text-xs rounded-sm shadow-md flex items-center space-x-2 transition-colors border border-navy-700"
        >
          <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>Cross-Departmental Simulator</span>
        </button>
      </div>

      {/* The Leaflet Canvas */}
      <div ref={mapContainerRef} className="w-full h-full z-10" />
    </div>
  );
};
