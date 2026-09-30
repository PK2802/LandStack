import React from 'react';
import type { PilotRegion, UserRole } from '../types';
import { PILOT_CONFIGS } from '../data/parcelsData';
import { Layers, FileText, Shield, Scale, Globe, Compass, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  currentView: 'map' | 'technical-docs' | 'privacy-policy' | 'terms';
  setCurrentView: (view: 'map' | 'technical-docs' | 'privacy-policy' | 'terms') => void;
  selectedPilot: PilotRegion;
  setSelectedPilot: (pilot: PilotRegion) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  onOpenCustomDomain: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  setCurrentView,
  selectedPilot,
  setSelectedPilot,
  userRole,
  setUserRole,
  onOpenCustomDomain,
}) => {
  return (
    <header className="border-b border-borderMuted bg-white shadow-sm sticky top-0 z-30">
      {/* Topmost Official Institutional Ribbon */}
      <div className="bg-navy-900 text-white text-xs px-4 py-1.5 flex flex-wrap items-center justify-between border-b border-navy-800">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 font-medium tracking-wide">
            {/* Ashoka Lion Crest representation */}
            <span className="inline-block w-2.5 h-2.5 rounded-sm bg-saffron-500"></span>
            <span>GOVERNMENT OF INDIA</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">Ministry of Rural Development</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-200">Department of Land Resources (DoLR)</span>
          </div>
          <span className="hidden md:inline-flex items-center text-[10px] px-2 py-0.5 rounded-sm bg-navy-800 text-emerald-400 font-mono border border-navy-700">
            <CheckCircle2 className="w-3 h-3 mr-1 inline" /> DPI Pilot Live
          </span>
        </div>
        <div className="flex items-center space-x-4 text-[11px] text-slate-300 font-mono">
          <span className="hidden sm:inline">Datum: WGS-84 (EPSG:4326)</span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="hidden lg:inline">OGC Features v1.0.1</span>
          <span className="text-slate-500 hidden lg:inline">•</span>
          <button 
            onClick={onOpenCustomDomain}
            className="text-amber-300 hover:text-amber-200 underline flex items-center font-sans font-medium"
          >
            <Globe className="w-3 h-3 mr-1" /> Custom Domain: landstack.gov.in
          </button>
        </div>
      </div>

      {/* Primary Navigation & Control Bar */}
      <div className="px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 bg-white">
        {/* Brand & Project Identity */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentView('map')}>
          <div className="w-9 h-9 rounded-sm bg-navy-800 flex items-center justify-center text-white font-bold text-lg border border-navy-700 shadow-sm">
            <Compass className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg tracking-tight text-navy-900">Bhu-Setu</span>
              <span className="text-xs px-2 py-0.5 rounded-sm bg-blue-50 text-navy-800 font-semibold border border-blue-200">
                National Land Stack
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium -mt-0.5">
              Unified Geospatial Land Administration Engine (ULPIN / Bhu-Aadhaar)
            </p>
          </div>
        </div>

        {/* Pilot Region Selector & Role Selector */}
        <div className="flex items-center flex-wrap gap-2.5">
          {/* Pilot Dropdown */}
          <div className="flex items-center space-x-1.5 bg-slate-50 border border-slate-300 rounded-sm px-2.5 py-1 text-xs">
            <span className="text-slate-500 font-medium">Pilot Region:</span>
            <select
              aria-label="Pilot Region"
              value={selectedPilot}
              onChange={(e) => setSelectedPilot(e.target.value as PilotRegion)}
              className="bg-transparent font-semibold text-navy-900 focus:outline-none cursor-pointer"
            >
              <option value="chandigarh">Chandigarh Urban (Sector 17 & 18)</option>
              <option value="tamilnadu">Tamil Nadu Rural (Kanchipuram - Nemili)</option>
            </select>
          </div>

          {/* User Role Switcher */}
          <div className="flex items-center space-x-1 bg-slate-100 border border-slate-300 rounded-sm p-0.5 text-xs">
            <span className="text-[10px] uppercase font-bold text-slate-500 px-1.5 hidden sm:inline">Role:</span>
            <button
              onClick={() => setUserRole('citizen')}
              className={`px-2 py-1 rounded-sm font-medium transition-colors ${
                userRole === 'citizen'
                  ? 'bg-navy-800 text-white shadow-xs'
                  : 'text-slate-700 hover:text-navy-900 hover:bg-slate-200'
              }`}
            >
              Citizen Access
            </button>
            <button
              onClick={() => setUserRole('patwari')}
              className={`px-2 py-1 rounded-sm font-medium transition-colors ${
                userRole === 'patwari'
                  ? 'bg-navy-800 text-white shadow-xs'
                  : 'text-slate-700 hover:text-navy-900 hover:bg-slate-200'
              }`}
            >
              Patwari (Revenue)
            </button>
            <button
              onClick={() => setUserRole('planner')}
              className={`px-2 py-1 rounded-sm font-medium transition-colors ${
                userRole === 'planner'
                  ? 'bg-navy-800 text-white shadow-xs'
                  : 'text-slate-700 hover:text-navy-900 hover:bg-slate-200'
              }`}
            >
              Town Planner
            </button>
          </div>
        </div>

        {/* View State Navigation */}
        <nav className="flex items-center space-x-1 text-xs font-medium">
          <button
            onClick={() => setCurrentView('map')}
            className={`px-3 py-1.5 rounded-sm flex items-center space-x-1.5 transition-colors border ${
              currentView === 'map'
                ? 'bg-navy-50 text-navy-900 border-navy-600 font-semibold'
                : 'text-slate-600 hover:text-navy-900 border-transparent hover:bg-slate-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-navy-800" />
            <span>GIS Map</span>
          </button>

          <button
            onClick={() => setCurrentView('technical-docs')}
            className={`px-3 py-1.5 rounded-sm flex items-center space-x-1.5 transition-colors border ${
              currentView === 'technical-docs'
                ? 'bg-navy-50 text-navy-900 border-navy-600 font-semibold'
                : 'text-slate-600 hover:text-navy-900 border-transparent hover:bg-slate-100'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-navy-800" />
            <span>Technical Docs</span>
          </button>

          <button
            onClick={() => setCurrentView('privacy-policy')}
            className={`px-3 py-1.5 rounded-sm flex items-center space-x-1.5 transition-colors border ${
              currentView === 'privacy-policy'
                ? 'bg-navy-50 text-navy-900 border-navy-600 font-semibold'
                : 'text-slate-600 hover:text-navy-900 border-transparent hover:bg-slate-100'
            }`}
          >
            <Shield className="w-3.5 h-3.5 text-navy-800" />
            <span>DPDP Privacy</span>
          </button>

          <button
            onClick={() => setCurrentView('terms')}
            className={`px-3 py-1.5 rounded-sm flex items-center space-x-1.5 transition-colors border ${
              currentView === 'terms'
                ? 'bg-navy-50 text-navy-900 border-navy-600 font-semibold'
                : 'text-slate-600 hover:text-navy-900 border-transparent hover:bg-slate-100'
            }`}
          >
            <Scale className="w-3.5 h-3.5 text-navy-800" />
            <span>Terms</span>
          </button>
        </nav>
      </div>

      {/* Sub-bar showing active pilot status */}
      <div className="bg-slate-100 border-t border-slate-200 px-4 py-1 text-[11px] text-slate-700 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-navy-900">Active Sector:</span>
          <span>{PILOT_CONFIGS[selectedPilot].name}</span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-600 italic">{PILOT_CONFIGS[selectedPilot].badge}</span>
        </div>
        <div className="hidden md:flex items-center space-x-3 text-slate-600">
          <span>Authority: {PILOT_CONFIGS[selectedPilot].state} Land Administration</span>
          <span>•</span>
          <span className="font-mono">Coordinates: {PILOT_CONFIGS[selectedPilot].center[0].toFixed(4)}°N, {PILOT_CONFIGS[selectedPilot].center[1].toFixed(4)}°E</span>
        </div>
      </div>
    </header>
  );
};
