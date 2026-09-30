import React, { useState } from 'react';
import type { Parcel } from '../types';
import { X, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';

interface SatelliteDriftModalProps {
  parcel: Parcel;
  onClose: () => void;
}

export const SatelliteDriftModal: React.FC<SatelliteDriftModalProps> = ({ parcel, onClose }) => {
  const [viewMode, setViewMode] = useState<'overlay' | 'cadastral_only' | 'satellite_only'>('overlay');
  const [noticeGenerated, setNoticeGenerated] = useState(false);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-sm shadow-2xl border border-slate-300 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="bg-navy-900 text-white px-5 py-3 flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-rose-400" />
            <div>
              <h3 className="font-bold text-sm tracking-wide">
                AI Encroachment & Satellite Drift Detection Engine
              </h3>
              <p className="text-[11px] text-slate-300">
                Temporal Analysis: 2024 DGPS Cadastral Survey vs 2026 High-Resolution Satellite Footprint
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-sm hover:bg-navy-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Anomaly Overview Card */}
        <div className="bg-rose-50 border-b border-rose-200 p-4">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-rose-200 text-rose-900">
                Boundary Anomaly Flagged
              </span>
              <h4 className="text-base font-bold text-rose-950 mt-1">
                {parcel.khasraOrPlotNo} ({parcel.ulpin})
              </h4>
              <p className="text-xs text-rose-900 mt-0.5 font-medium">
                {parcel.encroachment.breachDescription}
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-500 block uppercase font-mono">Breach Area</span>
              <span className="text-xl font-bold font-mono text-rose-700">
                {parcel.encroachment.anomalyAreaSqMeters} m²
              </span>
              <span className="text-[10px] text-slate-500 block">
                ({(parcel.encroachment.anomalyAreaSqMeters * 10.7639).toFixed(1)} sq.ft)
              </span>
            </div>
          </div>
        </div>

        {/* View Mode Controls */}
        <div className="px-5 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-slate-600">Comparison Layer:</span>
            <div className="flex items-center space-x-1 bg-white p-0.5 rounded-sm border border-slate-300">
              <button
                onClick={() => setViewMode('overlay')}
                className={`px-2.5 py-1 rounded-sm font-medium transition-colors ${
                  viewMode === 'overlay'
                    ? 'bg-navy-800 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                Dual Temporal Overlay
              </button>
              <button
                onClick={() => setViewMode('cadastral_only')}
                className={`px-2.5 py-1 rounded-sm font-medium transition-colors ${
                  viewMode === 'cadastral_only'
                    ? 'bg-navy-800 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                2024 Legal Cadastre
              </button>
              <button
                onClick={() => setViewMode('satellite_only')}
                className={`px-2.5 py-1 rounded-sm font-medium transition-colors ${
                  viewMode === 'satellite_only'
                    ? 'bg-navy-800 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                2026 Satellite Footprint
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-[11px]">
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 border-2 border-navy-800 bg-navy-100/40 inline-block"></span>
              <span className="text-slate-700">Legal Boundary (2024)</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 border-2 border-slate-600 bg-slate-300/60 inline-block"></span>
              <span className="text-slate-700">Built Structure (2026)</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-3 h-3 border border-rose-600 bg-rose-500 inline-block"></span>
              <span className="font-semibold text-rose-700">Encroachment Sliver (28.4 m²)</span>
            </div>
          </div>
        </div>

        {/* Visual Vector Comparison Viewport */}
        <div className="flex-1 p-6 overflow-y-auto bg-slate-50 flex flex-col items-center justify-center">
          <div className="w-full max-w-xl bg-white border border-slate-300 rounded-sm shadow-sm p-4 relative">
            <div className="text-center font-mono text-[10px] text-slate-400 mb-2">
              NORTH AZIMUTH 0.0° • COORDINATE PROJECTION: UTM 43N
            </div>

            {/* SVG Cadastral & Footprint Vector Canvas */}
            <div className="relative w-full h-72 border border-slate-200 bg-slate-100/70 rounded-sm flex items-center justify-center overflow-hidden">
              {/* Background Cadastral Grid lines */}
              <svg className="absolute inset-0 w-full h-full stroke-slate-200" strokeWidth="0.5">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Public Right-of-Way Corridor Indicator */}
              <div className="absolute top-2 left-6 right-6 text-center py-1 bg-amber-100 border border-amber-300 rounded-xs text-[10px] text-amber-900 font-mono">
                PUBLIC PWD PEDESTRIAN ARCADE RIGHT-OF-WAY (ROW)
              </div>

              {/* Main SVG Geometry */}
              <svg viewBox="0 0 400 240" className="w-full h-full relative z-10">
                {/* Legal Cadastral Boundary (2024 Survey) */}
                {(viewMode === 'overlay' || viewMode === 'cadastral_only') && (
                  <g>
                    <rect
                      x="100"
                      y="70"
                      width="200"
                      height="140"
                      fill="#EFF6FF"
                      fillOpacity="0.4"
                      stroke="#0F294A"
                      strokeWidth="2.5"
                    />
                    <text x="105" y="85" fill="#0F294A" fontSize="9" fontFamily="monospace" fontWeight="bold">
                      Legal Parcel Boundary (450.0 m²)
                    </text>
                  </g>
                )}

                {/* Built Structure Footprint (2026 High-Res Satellite) */}
                {(viewMode === 'overlay' || viewMode === 'satellite_only') && (
                  <g>
                    {/* Legal portion of building */}
                    <rect
                      x="105"
                      y="70"
                      width="190"
                      height="135"
                      fill="#94A3B8"
                      fillOpacity="0.5"
                      stroke="#475569"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                    />
                    
                    {/* Encroaching Cantilever / Overhang structure extending North */}
                    <rect
                      x="105"
                      y="35"
                      width="190"
                      height="35"
                      fill="#EF4444"
                      fillOpacity="0.85"
                      stroke="#B91C1C"
                      strokeWidth="2"
                    />
                    <text x="110" y="55" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">
                      VIOLATION: 28.4 m² BREACH
                    </text>
                  </g>
                )}

                {/* Dimension Arrows */}
                <line x1="305" y1="35" x2="305" y2="70" stroke="#DC2626" strokeWidth="1.5" />
                <line x1="300" y1="35" x2="310" y2="35" stroke="#DC2626" strokeWidth="1.5" />
                <line x1="300" y1="70" x2="310" y2="70" stroke="#DC2626" strokeWidth="1.5" />
                <text x="315" y="56" fill="#DC2626" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  +2.4m Overhang
                </text>
              </svg>
            </div>

            {/* Metrics Breakdown Table */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="bg-slate-50 p-2 border border-slate-200 rounded-sm">
                <span className="text-[10px] text-slate-500 font-sans block">Sanctioned Area</span>
                <span className="font-bold text-navy-900">{parcel.recordedDeedAreaSqM.toFixed(1)} m²</span>
              </div>
              <div className="bg-slate-50 p-2 border border-slate-200 rounded-sm">
                <span className="text-[10px] text-slate-500 font-sans block">Satellite Plinth</span>
                <span className="font-bold text-slate-800">{parcel.georeferencedAreaSqM.toFixed(1)} m²</span>
              </div>
              <div className="bg-rose-50 p-2 border border-rose-200 rounded-sm text-rose-900">
                <span className="text-[10px] text-rose-700 font-sans block">Encroachment</span>
                <span className="font-bold text-rose-700">+{parcel.encroachment.anomalyAreaSqMeters} m² (+6.3%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Patwari Notice Generation Block */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex items-center justify-between text-xs">
          <div>
            <div className="font-semibold text-navy-900">Statutory Administrative Action</div>
            <p className="text-[11px] text-slate-600">
              Notice under Section 24 of Punjab Land Revenue Act / Tamil Nadu Land Encroachment Act, 1905.
            </p>
          </div>
          <div>
            {!noticeGenerated ? (
              <button
                onClick={() => setNoticeGenerated(true)}
                className="px-3.5 py-1.5 bg-rose-700 hover:bg-rose-800 text-white font-semibold rounded-sm flex items-center space-x-1.5 transition-colors shadow-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Issue Field Verification Notice</span>
              </button>
            ) : (
              <div className="flex items-center space-x-1.5 text-emerald-700 font-semibold bg-emerald-50 px-3 py-1.5 rounded-sm border border-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Notice #REV-ENC-2026-091 Dispatched to Patwari Field Diary</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
