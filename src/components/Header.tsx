import React from 'react';
import type { PilotRegion, UserRole } from '../types';
import { Layers, FileText, Shield, Scale, Globe, Compass } from 'lucide-react';

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
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-saffron-500"></span>
          <span className="font-semibold tracking-wide">GOVERNMENT OF INDIA</span>
          <span className="text-slate-400">·</span>
          <span className="text-slate-300">Department of Land Resources (DoLR)</span>
        </div>
        <div className="flex items-center space-x-3 text-[11px] text-slate-300">
          <button 
            onClick={onOpenCustomDomain}
            className="text-amber-300 hover:text-amber-200 underline flex items-center font-sans font-medium"
          >
            <Globe className="w-3 h-3 mr-1" /> landstack.gov.in
          </button>
        </div>
      </div>

      {/* Primary Navigation & Control Bar */}
      <div className="px-4 py-2 flex flex-wrap items-center justify-between gap-3 bg-white">
        {/* Brand & Project Identity */}
        <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => setCurrentView('map')}>
          <div className="w-8 h-8 rounded-sm bg-navy-800 flex items-center justify-center text-white font-bold text-base border border-navy-700 shadow-sm">
            <Compass className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-bold text-base tracking-tight text-navy-900">Bhu-Setu</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-blue-50 text-navy-800 font-semibold border border-blue-200">
                National Land Stack
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-medium">
              Geospatial Land Registry
            </p>
          </div>
        </div>

        {/* Pilot Region Selector & Role Selector */}
        <div className="flex items-center flex-wrap gap-2">
          {/* Pilot Dropdown */}
          <div className="flex items-center space-x-1 bg-slate-50 border border-slate-300 rounded-sm px-2 py-1 text-xs">
            <span className="text-slate-500 font-medium text-[11px]">Pilot:</span>
            <select
              aria-label="Pilot Region"
              value={selectedPilot}
              onChange={(e) => setSelectedPilot(e.target.value as PilotRegion)}
              className="bg-transparent font-semibold text-navy-900 focus:outline-none cursor-pointer text-xs"
            >
              <option value="chandigarh">Chandigarh (Sector 17 & 18)</option>
              <option value="tamilnadu">Tamil Nadu (Kanchipuram - Nemili)</option>
            </select>
          </div>

          {/* User Role Switcher */}
          <div className="flex items-center bg-slate-100 border border-slate-300 rounded-sm p-0.5 text-xs">
            <button
              onClick={() => setUserRole('citizen')}
              className={`px-2 py-1 rounded-sm font-medium text-[11px] transition-colors ${
                userRole === 'citizen'
                  ? 'bg-navy-800 text-white shadow-xs'
                  : 'text-slate-700 hover:text-navy-900'
              }`}
            >
              Citizen
            </button>
            <button
              onClick={() => setUserRole('patwari')}
              className={`px-2 py-1 rounded-sm font-medium text-[11px] transition-colors ${
                userRole === 'patwari'
                  ? 'bg-navy-800 text-white shadow-xs'
                  : 'text-slate-700 hover:text-navy-900'
              }`}
            >
              Patwari
            </button>
            <button
              onClick={() => setUserRole('planner')}
              className={`px-2 py-1 rounded-sm font-medium text-[11px] transition-colors ${
                userRole === 'planner'
                  ? 'bg-navy-800 text-white shadow-xs'
                  : 'text-slate-700 hover:text-navy-900'
              }`}
            >
              Planner
            </button>
          </div>
        </div>

        {/* View State Navigation */}
        <nav className="flex items-center space-x-1 text-xs font-medium">
          <button
            onClick={() => setCurrentView('map')}
            className={`px-2.5 py-1 rounded-sm flex items-center space-x-1.5 transition-colors border ${
              currentView === 'map'
                ? 'bg-navy-50 text-navy-900 border-navy-600 font-semibold'
                : 'text-slate-600 hover:text-navy-900 border-transparent hover:bg-slate-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-navy-800" />
            <span>Map</span>
          </button>

          <button
            onClick={() => setCurrentView('technical-docs')}
            className={`px-2.5 py-1 rounded-sm flex items-center space-x-1.5 transition-colors border ${
              currentView === 'technical-docs'
                ? 'bg-navy-50 text-navy-900 border-navy-600 font-semibold'
                : 'text-slate-600 hover:text-navy-900 border-transparent hover:bg-slate-100'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-navy-800" />
            <span>Docs</span>
          </button>

          <button
            onClick={() => setCurrentView('privacy-policy')}
            className={`px-2.5 py-1 rounded-sm flex items-center space-x-1.5 transition-colors border ${
              currentView === 'privacy-policy'
                ? 'bg-navy-50 text-navy-900 border-navy-600 font-semibold'
                : 'text-slate-600 hover:text-navy-900 border-transparent hover:bg-slate-100'
            }`}
          >
            <Shield className="w-3.5 h-3.5 text-navy-800" />
            <span>Privacy</span>
          </button>

          <button
            onClick={() => setCurrentView('terms')}
            className={`px-2.5 py-1 rounded-sm flex items-center space-x-1.5 transition-colors border ${
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
    </header>
  );
};
