import React, { useState, useEffect } from 'react';
import type { PilotRegion, UserRole, Parcel } from './types';
import { PARCELS_DATA } from './data/parcelsData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GISPortal } from './components/GISPortal';
import { PropertyPassport } from './components/PropertyPassport';
import { PassportPrintModal } from './components/PassportPrintModal';
import { SpatialSimulatorModal } from './components/SpatialSimulatorModal';
import { SatelliteDriftModal } from './components/SatelliteDriftModal';
import { TechnicalDocsPage } from './components/TechnicalDocsPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsPage } from './components/TermsPage';
import { CustomDomainModal } from './components/CustomDomainModal';
import { OfficialGovRecordModal } from './components/OfficialGovRecordModal';

export const App: React.FC = () => {
  // Navigation / View State
  const [currentView, setCurrentView] = useState<'map' | 'technical-docs' | 'privacy-policy' | 'terms'>('map');

  // Pilot Region State
  const [selectedPilot, setSelectedPilot] = useState<PilotRegion>('chandigarh');

  // User Role State
  const [userRole, setUserRole] = useState<UserRole>('citizen');

  // Active Selected Parcel
  const [selectedParcel, setSelectedParcel] = useState<Parcel | null>(null);

  // Modals
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [isSimulatorModalOpen, setIsSimulatorModalOpen] = useState(false);
  const [isEncroachmentModalOpen, setIsEncroachmentModalOpen] = useState(false);
  const [isCustomDomainModalOpen, setIsCustomDomainModalOpen] = useState(false);
  const [isGovRecordModalOpen, setIsGovRecordModalOpen] = useState(false);

  // Synchronize browser history / URL path
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/technical-docs') {
        setCurrentView('technical-docs');
      } else if (path === '/privacy-policy') {
        setCurrentView('privacy-policy');
      } else if (path === '/terms') {
        setCurrentView('terms');
      } else {
        setCurrentView('map');
      }
    };

    // Check initial pathname
    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (view: 'map' | 'technical-docs' | 'privacy-policy' | 'terms') => {
    setCurrentView(view);
    const path = view === 'map' ? '/' : `/${view}`;
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Switch pilot and clear selected parcel if it belongs to other pilot
  const handleSelectPilot = (pilot: PilotRegion) => {
    setSelectedPilot(pilot);
    if (selectedParcel && selectedParcel.pilot !== pilot) {
      setSelectedParcel(null);
    }
  };

  const handleOpenExportPDF = (parcel: Parcel) => {
    setSelectedParcel(parcel);
    setIsPrintModalOpen(true);
  };

  const handleOpenSimulator = (parcel: Parcel) => {
    setSelectedParcel(parcel);
    setIsSimulatorModalOpen(true);
  };

  const handleOpenEncroachment = (parcel: Parcel) => {
    setSelectedParcel(parcel);
    setIsEncroachmentModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-navy-800 selection:text-white">
      {/* Header */}
      <Header
        currentView={currentView}
        setCurrentView={handleNavigate}
        selectedPilot={selectedPilot}
        setSelectedPilot={handleSelectPilot}
        userRole={userRole}
        setUserRole={setUserRole}
        onOpenCustomDomain={() => setIsCustomDomainModalOpen(true)}
      />

      {/* Main Content Area based on View State */}
      <main className="flex-1 flex flex-col relative">
        {currentView === 'map' && (
          <div className="relative flex-1 flex flex-col">
            <GISPortal
              selectedPilot={selectedPilot}
              selectedParcel={selectedParcel}
              onSelectParcel={(p) => setSelectedParcel(p)}
              onOpenSimulator={handleOpenSimulator}
              onOpenEncroachment={handleOpenEncroachment}
              userRole={userRole}
              onSelectPilot={handleSelectPilot}
            />

            {/* Slide-over Digital Property Passport */}
            {selectedParcel && (
              <PropertyPassport
                parcel={selectedParcel}
                onClose={() => setSelectedParcel(null)}
                onExportPDF={handleOpenExportPDF}
                onRunSimulator={handleOpenSimulator}
                onOpenEncroachment={handleOpenEncroachment}
                userRole={userRole}
                onOpenGovRecord={(p) => {
                  setSelectedParcel(p);
                  setIsGovRecordModalOpen(true);
                }}
              />
            )}
          </div>
        )}

        {currentView === 'technical-docs' && <TechnicalDocsPage />}
        {currentView === 'privacy-policy' && <PrivacyPolicyPage />}
        {currentView === 'terms' && <TermsPage />}
      </main>

      {/* Institutional Departmental Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      {isPrintModalOpen && selectedParcel && (
        <PassportPrintModal
          parcel={selectedParcel}
          onClose={() => setIsPrintModalOpen(false)}
        />
      )}

      {isGovRecordModalOpen && selectedParcel && (
        <OfficialGovRecordModal
          parcel={selectedParcel}
          onClose={() => setIsGovRecordModalOpen(false)}
        />
      )}

      {isSimulatorModalOpen && (
        <SpatialSimulatorModal
          initialParcel={selectedParcel || PARCELS_DATA[0]}
          onClose={() => setIsSimulatorModalOpen(false)}
          onSelectParcel={(p) => setSelectedParcel(p)}
        />
      )}

      {isEncroachmentModalOpen && selectedParcel && (
        <SatelliteDriftModal
          parcel={selectedParcel}
          onClose={() => setIsEncroachmentModalOpen(false)}
        />
      )}

      <CustomDomainModal
        isOpen={isCustomDomainModalOpen}
        onClose={() => setIsCustomDomainModalOpen(false)}
      />
    </div>
  );
};

export default App;
