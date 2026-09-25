import React, { useState, useEffect } from 'react';
import { ActiveTab, SuratUmum, SuratTugas, SKKegiatan, BAST, FormPermintaan, SuratPPK, SKPItem, Pegawai } from './types';
import { loadAllState, saveStoredData, resetAllData } from './utils/storage';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { SuratUmumView } from './components/SuratUmumView';
import { SuratTugasView } from './components/SuratTugasView';
import { SKKegiatanView } from './components/SKKegiatanView';
import { BASTView } from './components/BASTView';
import { FormPermintaanView } from './components/FormPermintaanView';
import { SuratPPKView } from './components/SuratPPKView';
import { SKPBulananView } from './components/SKPBulananView';
import { DatabasePegawaiView } from './components/DatabasePegawaiView';
import { DokumentasiView } from './components/DokumentasiView';
import { SPMDigitalView } from './components/SPMDigitalView';
import { QuickNumberModal } from './components/QuickNumberModal';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [isQuickNumberOpen, setIsQuickNumberOpen] = useState(false);

  // Application Data States
  const [state, setState] = useState(() => loadAllState());

  // Save to localStorage when state changes
  useEffect(() => {
    saveStoredData('pusat7301_pegawai', state.pegawai);
  }, [state.pegawai]);

  useEffect(() => {
    saveStoredData('pusat7301_surat_umum', state.suratUmum);
  }, [state.suratUmum]);

  useEffect(() => {
    saveStoredData('pusat7301_surat_tugas', state.suratTugas);
  }, [state.suratTugas]);

  useEffect(() => {
    saveStoredData('pusat7301_sk_kegiatan', state.skKegiatan);
  }, [state.skKegiatan]);

  useEffect(() => {
    saveStoredData('pusat7301_bast', state.bast);
  }, [state.bast]);

  useEffect(() => {
    saveStoredData('pusat7301_form_permintaan', state.formPermintaan);
  }, [state.formPermintaan]);

  useEffect(() => {
    saveStoredData('pusat7301_surat_ppk', state.suratPPK);
  }, [state.suratPPK]);

  useEffect(() => {
    saveStoredData('pusat7301_skp', state.skp);
  }, [state.skp]);

  // Counts for Badges
  const counts = {
    suratUmum: state.suratUmum.length,
    suratTugas: state.suratTugas.length,
    skKegiatan: state.skKegiatan.length,
    bast: state.bast.length,
    formPermintaan: state.formPermintaan.length,
    suratPPK: state.suratPPK.length,
    pegawai: state.pegawai.length,
  };

  // Handlers for Surat Umum
  const handleAddSuratUmum = (newSurat: SuratUmum) => {
    setState(prev => ({
      ...prev,
      suratUmum: [newSurat, ...prev.suratUmum]
    }));
  };

  const handleDeleteSuratUmum = (id: string) => {
    setState(prev => ({
      ...prev,
      suratUmum: prev.suratUmum.filter(s => s.id !== id)
    }));
  };

  // Handlers for Surat Tugas
  const handleAddSuratTugas = (newSurat: SuratTugas) => {
    setState(prev => ({
      ...prev,
      suratTugas: [newSurat, ...prev.suratTugas]
    }));
  };

  const handleDeleteSuratTugas = (id: string) => {
    setState(prev => ({
      ...prev,
      suratTugas: prev.suratTugas.filter(s => s.id !== id)
    }));
  };

  // Handlers for SK Kegiatan
  const handleAddSK = (newSK: SKKegiatan) => {
    setState(prev => ({
      ...prev,
      skKegiatan: [newSK, ...prev.skKegiatan]
    }));
  };

  const handleDeleteSK = (id: string) => {
    setState(prev => ({
      ...prev,
      skKegiatan: prev.skKegiatan.filter(s => s.id !== id)
    }));
  };

  // Handlers for BAST
  const handleAddBAST = (newBAST: BAST) => {
    setState(prev => ({
      ...prev,
      bast: [newBAST, ...prev.bast]
    }));
  };

  const handleDeleteBAST = (id: string) => {
    setState(prev => ({
      ...prev,
      bast: prev.bast.filter(s => s.id !== id)
    }));
  };

  // Handlers for Form Permintaan
  const handleAddForm = (newForm: FormPermintaan) => {
    setState(prev => ({
      ...prev,
      formPermintaan: [newForm, ...prev.formPermintaan]
    }));
  };

  const handleDeleteForm = (id: string) => {
    setState(prev => ({
      ...prev,
      formPermintaan: prev.formPermintaan.filter(s => s.id !== id)
    }));
  };

  // Handlers for Surat PPK
  const handleAddPPK = (newPPK: SuratPPK) => {
    setState(prev => ({
      ...prev,
      suratPPK: [newPPK, ...prev.suratPPK]
    }));
  };

  const handleDeletePPK = (id: string) => {
    setState(prev => ({
      ...prev,
      suratPPK: prev.suratPPK.filter(s => s.id !== id)
    }));
  };

  // Handlers for Pegawai
  const handleAddPegawai = (newPegawai: Pegawai) => {
    setState(prev => ({
      ...prev,
      pegawai: [...prev.pegawai, newPegawai]
    }));
  };

  const handleUpdatePegawai = (updated: Pegawai) => {
    setState(prev => ({
      ...prev,
      pegawai: prev.pegawai.map(p => p.id === updated.id ? updated : p)
    }));
  };

  const handleDeletePegawai = (id: string) => {
    setState(prev => ({
      ...prev,
      pegawai: prev.pegawai.filter(p => p.id !== id)
    }));
  };

  // Handlers for SKP
  const handleUpdateSKP = (updated: SKPItem) => {
    setState(prev => ({
      ...prev,
      skp: prev.skp.map(s => s.id === updated.id ? updated : s)
    }));
  };

  const handleResetData = () => {
    if (confirm('Apakah Anda yakin ingin mengembalikan semua data ke data awal resmi?')) {
      resetAllData();
      setState(loadAllState());
    }
  };

  const handleGlobalSearch = (query: string) => {
    setActiveTab('surat-umum');
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col">
      
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuickNumber={() => setIsQuickNumberOpen(true)}
        onResetData={handleResetData}
      />

      {/* Tab Navigation */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        counts={counts}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {activeTab === 'dashboard' && (
          <Dashboard
            setActiveTab={setActiveTab}
            counts={counts}
            onGlobalSearch={handleGlobalSearch}
            onOpenQuickNumber={() => setIsQuickNumberOpen(true)}
          />
        )}

        {activeTab === 'surat-umum' && (
          <SuratUmumView
            suratList={state.suratUmum}
            onAddSurat={handleAddSuratUmum}
            onDeleteSurat={handleDeleteSuratUmum}
          />
        )}

        {activeTab === 'surat-tugas' && (
          <SuratTugasView
            suratTugasList={state.suratTugas}
            pegawaiList={state.pegawai}
            onAddSuratTugas={handleAddSuratTugas}
            onDeleteSuratTugas={handleDeleteSuratTugas}
          />
        )}

        {activeTab === 'sk-kegiatan' && (
          <SKKegiatanView
            skList={state.skKegiatan}
            onAddSK={handleAddSK}
            onDeleteSK={handleDeleteSK}
          />
        )}

        {activeTab === 'bast' && (
          <BASTView
            bastList={state.bast}
            onAddBAST={handleAddBAST}
            onDeleteBAST={handleDeleteBAST}
          />
        )}

        {activeTab === 'form-permintaan' && (
          <FormPermintaanView
            formList={state.formPermintaan}
            onAddForm={handleAddForm}
            onDeleteForm={handleDeleteForm}
          />
        )}

        {activeTab === 'surat-ppk' && (
          <SuratPPKView
            ppkList={state.suratPPK}
            onAddPPK={handleAddPPK}
            onDeletePPK={handleDeletePPK}
          />
        )}

        {activeTab === 'skp-bulanan' && (
          <SKPBulananView
            skpList={state.skp}
            pegawaiList={state.pegawai}
            onUpdateSKP={handleUpdateSKP}
          />
        )}

        {activeTab === 'pegawai' && (
          <DatabasePegawaiView
            pegawaiList={state.pegawai}
            onAddPegawai={handleAddPegawai}
            onUpdatePegawai={handleUpdatePegawai}
            onDeletePegawai={handleDeletePegawai}
          />
        )}

        {activeTab === 'dokumentasi' && (
          <DokumentasiView />
        )}

        {activeTab === 'spm-digital' && (
          <SPMDigitalView />
        )}

      </main>

      {/* Footer */}
      <footer className="no-print bg-white border-t border-slate-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-800">PUSAT 7301</span>
            <span>•</span>
            <span>Badan Pusat Statistik Kabupaten Kepulauan Selayar</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleResetData}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              Reset Data Awal
            </button>
            <span>•</span>
            <span>Jl. WR. Supratman No. 20, Benteng, Kepulauan Selayar 92812</span>
          </div>
        </div>
      </footer>

      {/* Quick Number Generator Modal */}
      <QuickNumberModal
        isOpen={isQuickNumberOpen}
        onClose={() => setIsQuickNumberOpen(false)}
        counts={counts}
        onNavigateToTab={(tab) => {
          setActiveTab(tab);
          setIsQuickNumberOpen(false);
        }}
      />

    </div>
  );
};
