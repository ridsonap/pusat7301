import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ActiveTab, SuratUmum, SuratTugas, SKKegiatan, BAST, FormPermintaan, SuratPPK, SKPItem, Pegawai } from './types';
import { loadAllState, saveStoredData, resetAllData, STORAGE_KEYS } from './utils/storage';
import type { GasModuleData } from './utils/gasSync';
import {
  DbStatus,
  fetchRemoteRecords,
  saveRecordRemote,
  deleteRecordRemote,
  onMultiUserSync,
  checkServerStatus
} from './utils/api';
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
import { SyncModal } from './components/SyncModal';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [isQuickNumberOpen, setIsQuickNumberOpen] = useState(false);
  const [isSyncModalOpen, setIsSyncModalOpen] = useState(false);
  const [dbStatus, setDbStatus] = useState<DbStatus | undefined>();

  // Application Data States
  const [state, setState] = useState(() => loadAllState());
  const [globalSearch, setGlobalSearch] = useState('');

  // Sinkronisasi Multi-User Remote (Postgres / API)
  const syncWithRemote = useCallback(async () => {
    const status = await checkServerStatus();
    setDbStatus(status);

    const remote = await fetchRemoteRecords();
    if (remote.success && remote.data) {
      setState(prev => ({
        pegawai: Array.isArray(remote.data?.pegawai) && remote.data.pegawai.length > 0 ? remote.data.pegawai : prev.pegawai,
        suratUmum: Array.isArray(remote.data?.suratUmum) && remote.data.suratUmum.length > 0 ? remote.data.suratUmum : prev.suratUmum,
        suratTugas: Array.isArray(remote.data?.suratTugas) && remote.data.suratTugas.length > 0 ? remote.data.suratTugas : prev.suratTugas,
        skKegiatan: Array.isArray(remote.data?.skKegiatan) && remote.data.skKegiatan.length > 0 ? remote.data.skKegiatan : prev.skKegiatan,
        bast: Array.isArray(remote.data?.bast) && remote.data.bast.length > 0 ? remote.data.bast : prev.bast,
        formPermintaan: Array.isArray(remote.data?.formPermintaan) && remote.data.formPermintaan.length > 0 ? remote.data.formPermintaan : prev.formPermintaan,
        suratPPK: Array.isArray(remote.data?.suratPPK) && remote.data.suratPPK.length > 0 ? remote.data.suratPPK : prev.suratPPK,
        skp: Array.isArray(remote.data?.skp) && remote.data.skp.length > 0 ? remote.data.skp : prev.skp,
      }));
    }
  }, []);

  useEffect(() => {
    syncWithRemote();
    const unsub = onMultiUserSync(() => {
      syncWithRemote();
    });
    return () => unsub();
  }, [syncWithRemote]);

  // Save to localStorage when state changes (debounced agar tidak 8x serialize tiap ketik)
  useEffect(() => {
    const t = setTimeout(() => {
      saveStoredData(STORAGE_KEYS.PEGAWAI, state.pegawai);
      saveStoredData(STORAGE_KEYS.SURAT_UMUM, state.suratUmum);
      saveStoredData(STORAGE_KEYS.SURAT_TUGAS, state.suratTugas);
      saveStoredData(STORAGE_KEYS.SK_KEGIATAN, state.skKegiatan);
      saveStoredData(STORAGE_KEYS.BAST, state.bast);
      saveStoredData(STORAGE_KEYS.FORM_PERMINTAAN, state.formPermintaan);
      saveStoredData(STORAGE_KEYS.SURAT_PPK, state.suratPPK);
      saveStoredData(STORAGE_KEYS.SKP, state.skp);
    }, 400);
    return () => clearTimeout(t);
  }, [state]);

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
    saveRecordRemote('suratUmum', newSurat, false);
  };

  const handleDeleteSuratUmum = (id: string) => {
    setState(prev => ({
      ...prev,
      suratUmum: prev.suratUmum.filter(s => s.id !== id)
    }));
    deleteRecordRemote('suratUmum', id);
  };

  // Handlers for Surat Tugas
  const handleAddSuratTugas = (newSurat: SuratTugas) => {
    setState(prev => ({
      ...prev,
      suratTugas: [newSurat, ...prev.suratTugas]
    }));
    saveRecordRemote('suratTugas', newSurat, false);
  };

  const handleDeleteSuratTugas = (id: string) => {
    setState(prev => ({
      ...prev,
      suratTugas: prev.suratTugas.filter(s => s.id !== id)
    }));
    deleteRecordRemote('suratTugas', id);
  };

  // Handlers for SK Kegiatan
  const handleAddSK = (newSK: SKKegiatan) => {
    setState(prev => ({
      ...prev,
      skKegiatan: [newSK, ...prev.skKegiatan]
    }));
    saveRecordRemote('skKegiatan', newSK, false);
  };

  const handleDeleteSK = (id: string) => {
    setState(prev => ({
      ...prev,
      skKegiatan: prev.skKegiatan.filter(s => s.id !== id)
    }));
    deleteRecordRemote('skKegiatan', id);
  };

  // Handlers for BAST
  const handleAddBAST = (newBAST: BAST) => {
    setState(prev => ({
      ...prev,
      bast: [newBAST, ...prev.bast]
    }));
    saveRecordRemote('bast', newBAST, false);
  };

  const handleDeleteBAST = (id: string) => {
    setState(prev => ({
      ...prev,
      bast: prev.bast.filter(s => s.id !== id)
    }));
    deleteRecordRemote('bast', id);
  };

  // Handlers for Form Permintaan
  const handleAddForm = (newForm: FormPermintaan) => {
    setState(prev => ({
      ...prev,
      formPermintaan: [newForm, ...prev.formPermintaan]
    }));
    saveRecordRemote('formPermintaan', newForm, false);
  };

  const handleDeleteForm = (id: string) => {
    setState(prev => ({
      ...prev,
      formPermintaan: prev.formPermintaan.filter(s => s.id !== id)
    }));
    deleteRecordRemote('formPermintaan', id);
  };

  // Handlers for Surat PPK
  const handleAddPPK = (newPPK: SuratPPK) => {
    setState(prev => ({
      ...prev,
      suratPPK: [newPPK, ...prev.suratPPK]
    }));
    saveRecordRemote('suratPPK', newPPK, false);
  };

  const handleDeletePPK = (id: string) => {
    setState(prev => ({
      ...prev,
      suratPPK: prev.suratPPK.filter(s => s.id !== id)
    }));
    deleteRecordRemote('suratPPK', id);
  };

  // Handlers for Pegawai
  const handleAddPegawai = (newPegawai: Pegawai) => {
    setState(prev => ({
      ...prev,
      pegawai: [...prev.pegawai, newPegawai]
    }));
    saveRecordRemote('pegawai', newPegawai, false);
  };

  const handleUpdatePegawai = (updated: Pegawai) => {
    setState(prev => ({
      ...prev,
      pegawai: prev.pegawai.map(p => p.id === updated.id ? updated : p)
    }));
    saveRecordRemote('pegawai', updated, true);
  };

  const handleDeletePegawai = (id: string) => {
    setState(prev => ({
      ...prev,
      pegawai: prev.pegawai.filter(p => p.id !== id)
    }));
    deleteRecordRemote('pegawai', id);
  };

  // Handlers for SKP
  const handleUpdateSKP = (updated: SKPItem) => {
    setState(prev => ({
      ...prev,
      skp: prev.skp.map(s => s.id === updated.id ? updated : s)
    }));
    saveRecordRemote('skp', updated, true);
  };

  const handleResetData = () => {
    if (confirm('Apakah Anda yakin ingin mengembalikan semua data ke data awal resmi?')) {
      resetAllData();
      setState(loadAllState());
    }
  };

  const handleDataSynced = (syncedData: Partial<GasModuleData>) => {
    if (!syncedData || typeof syncedData !== 'object') return;
    setState(prev => ({
      ...prev,
      suratUmum: Array.isArray(syncedData.suratUmum) ? syncedData.suratUmum : prev.suratUmum,
      suratTugas: Array.isArray(syncedData.suratTugas) ? syncedData.suratTugas : prev.suratTugas,
      skKegiatan: Array.isArray(syncedData.skKegiatan) ? syncedData.skKegiatan : prev.skKegiatan,
      bast: Array.isArray(syncedData.bast) ? syncedData.bast : prev.bast,
      formPermintaan: Array.isArray(syncedData.formPermintaan) ? syncedData.formPermintaan : prev.formPermintaan,
      suratPPK: Array.isArray(syncedData.suratPPK) ? syncedData.suratPPK : prev.suratPPK,
      pegawai: Array.isArray(syncedData.pegawai) ? syncedData.pegawai : prev.pegawai,
    }));
  };

  // Update handlers (edit tanpa hapus+buat ulang)
  const makeUpdate = <T extends { id: string }>(key: 'suratUmum' | 'suratTugas' | 'skKegiatan' | 'bast' | 'formPermintaan' | 'suratPPK') =>
    (updated: T) => {
      setState(prev => ({ ...prev, [key]: (prev[key] as unknown as T[]).map(i => i.id === updated.id ? updated : i) }));
      saveRecordRemote(key, updated, true);
    };

  const handleUpdateSuratUmum = makeUpdate<SuratUmum>('suratUmum');
  const handleUpdateSuratTugas = makeUpdate<SuratTugas>('suratTugas');
  const handleUpdateSK = makeUpdate<SKKegiatan>('skKegiatan');
  const handleUpdateBAST = makeUpdate<BAST>('bast');
  const handleUpdateForm = makeUpdate<FormPermintaan>('formPermintaan');
  const handleUpdatePPK = makeUpdate<SuratPPK>('suratPPK');

  const handleGlobalSearch = (query: string) => {
    setGlobalSearch(query);
    setActiveTab('surat-umum');
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col">
      
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuickNumber={() => setIsQuickNumberOpen(true)}
        onOpenSyncModal={() => setIsSyncModalOpen(true)}
        onResetData={handleResetData}
        dbStatus={dbStatus}
        counts={counts}
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
            onUpdateSurat={handleUpdateSuratUmum}
            onDeleteSurat={handleDeleteSuratUmum}
            initialSearch={globalSearch}
          />
        )}

        {activeTab === 'surat-tugas' && (
          <SuratTugasView
            suratTugasList={state.suratTugas}
            pegawaiList={state.pegawai}
            onAddSuratTugas={handleAddSuratTugas}
            onUpdateSuratTugas={handleUpdateSuratTugas}
            onDeleteSuratTugas={handleDeleteSuratTugas}
          />
        )}

        {activeTab === 'sk-kegiatan' && (
          <SKKegiatanView
            skList={state.skKegiatan}
            onAddSK={handleAddSK}
            onUpdateSK={handleUpdateSK}
            onDeleteSK={handleDeleteSK}
          />
        )}

        {activeTab === 'bast' && (
          <BASTView
            bastList={state.bast}
            onAddBAST={handleAddBAST}
            onUpdateBAST={handleUpdateBAST}
            onDeleteBAST={handleDeleteBAST}
          />
        )}

        {activeTab === 'form-permintaan' && (
          <FormPermintaanView
            formList={state.formPermintaan}
            onAddForm={handleAddForm}
            onUpdateForm={handleUpdateForm}
            onDeleteForm={handleDeleteForm}
          />
        )}

        {activeTab === 'surat-ppk' && (
          <SuratPPKView
            ppkList={state.suratPPK}
            onAddPPK={handleAddPPK}
            onUpdatePPK={handleUpdatePPK}
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
        itemsMap={{
          suratUmum: state.suratUmum,
          suratTugas: state.suratTugas,
          skKegiatan: state.skKegiatan,
          bast: state.bast,
          formPermintaan: state.formPermintaan,
          suratPPK: state.suratPPK
        }}
        counts={counts}
        onNavigateToTab={(tab) => {
          setActiveTab(tab);
          setIsQuickNumberOpen(false);
        }}
      />

      {/* Google Apps Script Sync Modal */}
      <SyncModal
        isOpen={isSyncModalOpen}
        onClose={() => setIsSyncModalOpen(false)}
        onDataSynced={handleDataSynced}
      />

    </div>
  );
};
