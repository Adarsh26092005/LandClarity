import { ShieldCheck, MapPin, FileSearch, Layers, Database } from 'lucide-react';
import { ParcelVerificationStatus } from '@landclarity/shared';

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-emerald-500/10 text-emerald-400 p-2 rounded-lg border border-emerald-500/20">
            <Layers className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              LandClarity
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Phase 1 Ready
              </span>
            </h1>
            <p className="text-xs text-slate-400">Team bruteforce • Digital Land Ecosystem</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Core Systems Initialized
          </span>
        </div>
      </header>

      {/* Hero / Overview Section */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight mb-4">
            Unified, AI-Powered, GIS-Enabled Land Records Platform
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            "Land records are too unclear to sell, inherit or borrow against."
            LandClarity reconciles cadastral geometry, registered deeds, mutation ledgers, and encumbrance records into a single verified Digital Land Parcel Profile.
          </p>
        </div>

        {/* Modular Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-colors">
            <div className="text-emerald-400 mb-4 bg-emerald-950/50 w-12 h-12 rounded-lg flex items-center justify-center border border-emerald-800/40">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">GIS & Cadastral Engine</h3>
            <p className="text-sm text-slate-400">
              PostGIS-backed spatial queries, boundary overlap detection, and MapLibre cadastral mapping.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-colors">
            <div className="text-cyan-400 mb-4 bg-cyan-950/50 w-12 h-12 rounded-lg flex items-center justify-center border border-cyan-800/40">
              <FileSearch className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">AI Document Intelligence</h3>
            <p className="text-sm text-slate-400">
              PaddleOCR + Layout analysis extracting survey numbers and flagging deed vs. RoR discrepancies.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-colors">
            <div className="text-indigo-400 mb-4 bg-indigo-950/50 w-12 h-12 rounded-lg flex items-center justify-center border border-indigo-800/40">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Integrity & Audit Ledger</h3>
            <p className="text-sm text-slate-400">
              SHA-256 document hashing and permissioned Hyperledger Fabric audit trails for tamper evidence.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-colors">
            <div className="text-amber-400 mb-4 bg-amber-950/50 w-12 h-12 rounded-lg flex items-center justify-center border border-amber-800/40">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Connected Workflows</h3>
            <p className="text-sm text-slate-400">
              Sale due diligence, inheritance mutation tracking, and bank mortgage search packs.
            </p>
          </div>
        </div>

        {/* Foundation Status Box */}
        <div className="p-6 rounded-xl bg-emerald-950/20 border border-emerald-900/50 text-slate-300">
          <h4 className="text-emerald-400 font-semibold mb-2 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" /> Monorepo Foundation Active
          </h4>
          <p className="text-sm">
            Shared domain types linked successfully. Sample domain status: <code className="bg-slate-900 px-2 py-0.5 rounded text-emerald-300">{ParcelVerificationStatus.OFFICIALLY_CONFIRMED}</code>.
            Ready for Phase 2 database modeling and backend API implementation.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-4 text-center text-xs text-slate-500">
        LandClarity • Team bruteforce (Kumar Adarsh, Harsh Kumar, Ankit Singh, Awanish Kumar)
      </footer>
    </div>
  );
}

export default App;
