import React, { useState } from 'react';
import type { PilotRegion, UserRole } from '../types';
import { Layers, FileText, Shield, Scale, Globe, Compass, ExternalLink, ChevronDown, Landmark } from 'lucide-react';
import { OFFICIAL_GOV_PORTALS } from '../data/govPortals';

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
  const [isGovPortalsOpen, setIsGovPortalsOpen] = useState(false);

  return (
    <header className="border-b border-borderMuted bg-white shadow-sm sticky top-0 z-30">
      {/* Topmost Official Institutional Ribbon */}
      <div className="bg-navy-900 text-white text-xs px-4 py-1.5 flex flex-wrap items-center justify-between border-b border-navy-800">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-saffron-500"></span>
          <a
            href="https://www.india.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold tracking-wide hover:underline hover:text-amber-200 transition-colors"
            title="National Portal of India"
          >
            GOVERNMENT OF INDIA
          </a>
          <span className="text-slate-400">·</span>
          <a
            href="https://dolr.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white hover:underline transition-colors flex items-center space-x-1"
            title="Department of Land Resources Official Portal"
          >
            <span>Department of Land Resources (DoLR)</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-70" />
          </a>
        </div>
        <div className="flex items-center space-x-3 text-[11px] text-slate-300">
          {/* Official Gov Portals Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsGovPortalsOpen(!isGovPortalsOpen)}
              aria-label="Official Government Portals"
              className="bg-navy-800 hover:bg-navy-700 text-amber-300 hover:text-amber-200 px-2 py-0.5 rounded-xs border border-navy-700 flex items-center space-x-1 font-sans font-medium transition-colors"
            >
              <Landmark className="w-3 h-3 text-amber-400" />
              <span>Gov Portals</span>
              <ChevronDown className="w-3 h-3 ml-0.5" />
            </button>

            {isGovPortalsOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsGovPortalsOpen(false)}
                />
                <div className="absolute right-0 top-full mt-1.5 w-80 sm:w-96 bg-white text-slate-800 rounded-sm shadow-2xl border border-slate-300 z-50 overflow-hidden divide-y divide-slate-100 text-xs">
                  <div className="bg-navy-900 text-white px-3 py-2 flex items-center justify-between font-bold text-xs">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-xs bg-saffron-500"></span>
                      <span>Indian Land Administration Portals</span>
                    </div>
                    <button 
                      onClick={() => setIsGovPortalsOpen(false)} 
                      className="text-slate-400 hover:text-white text-xs p-0.5"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <div className="max-h-80 overflow-y-auto p-2 space-y-2">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-1">
                      National & Central Portals
                    </div>
                    {OFFICIAL_GOV_PORTALS.filter(p => p.category === 'National / Ministry' || p.category === 'Cadastral & Geospatial' || p.category === 'Deeds & Mortgages').map(portal => (
                      <a
                        key={portal.id}
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-2 rounded-sm hover:bg-slate-50 border border-slate-200/70 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-navy-900 group-hover:text-blue-700">{portal.title}</span>
                          <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-700 shrink-0 ml-1" />
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{portal.authority}</div>
                        <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">{portal.description}</p>
                      </a>
                    ))}

                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-1 pt-1">
                      State & Pilot Registries
                    </div>
                    {OFFICIAL_GOV_PORTALS.filter(p => p.category === 'State Land Records').map(portal => (
                      <a
                        key={portal.id}
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-2 rounded-sm hover:bg-slate-50 border border-slate-200/70 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1.5">
                            <span className="font-bold text-navy-900 group-hover:text-blue-700">{portal.title}</span>
                            {portal.badge && (
                              <span className="text-[9px] px-1 py-0.2 rounded-xs bg-amber-50 text-amber-800 border border-amber-200 font-semibold font-mono">
                                {portal.badge}
                              </span>
                            )}
                          </div>
                          <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-700 shrink-0 ml-1" />
                        </div>
                        <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">{portal.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

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
