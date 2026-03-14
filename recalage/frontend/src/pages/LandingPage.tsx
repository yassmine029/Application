import React from 'react';
import {
  ArrowDown,
  Activity,
  GitMerge,
  Scissors,
  Layers,
  TrendingUp,
  FileImage,
  Shield,
  Zap,
  Users,
  Award,
  ChevronRight,
  LogOut,
  Target
} from 'lucide-react';
type Page = string;

interface User {
  username: string;
  fullName?: string;
  full_name?: string;
  speciality?: string;
  specialty?: string;
}

interface LandingPageProps {
  user: User;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

export function LandingPage({ user, onNavigate, onLogout }: LandingPageProps) {
  const scrollToModules = () => {
    document.getElementById('modules-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const modules = [
    {
      id: 'registration',
      title: 'Recalage d\'images',
      description: 'Alignez et fusionnez deux images médicales avec précision. Comparez avant/après avec notre nouvel outil de superposition.',
      icon: <GitMerge className="w-6 h-6" />,
      gradient: 'from-blue-600 to-indigo-600',
      page: 'registration',
      features: ['Superposition Temps Réel', 'Transformation Rigide', 'Mesure RMSE'],
      colSpan: 'md:col-span-2',
      bgPattern: 'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'
    },
    {
      id: 'segmentation',
      title: 'Segmentation IA',
      description: 'Délimitation automatique de l\'hippocampe et structures cérébrales.',
      icon: <Scissors className="w-6 h-6" />,
      gradient: 'from-violet-600 to-purple-600',
      page: 'segmentation' as Page,
      features: ['Deep Learning', 'Outils Manuels', 'Export Mask'],
      colSpan: 'md:col-span-1',
      bgPattern: ''
    },
    {
      id: 'analysis',
      title: 'Volumétrie',
      description: 'Analyse quantitative précise pour le suivi longitudinal des patients.',
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-teal-500',
      page: 'dashboard' as Page,
      features: ['Courbes d\'évolution', 'Rapports PDF'],
      colSpan: 'md:col-span-1',
      bgPattern: ''
    },
    {
      id: 'multimodal',
      title: 'Fusion Multimodale',
      description: 'Combinaison PET/IRM/CT pour une aide au diagnostic complète et intégrée.',
      icon: <Layers className="w-6 h-6" />,
      gradient: 'from-orange-500 to-amber-500',
      page: 'dashboard' as Page,
      features: ['Recalage 3D', 'Color Mapping'],
      colSpan: 'md:col-span-2',
      bgPattern: 'bg-[linear-gradient(45deg,#f3f4f6_25%,transparent_25%,transparent_50%,#f3f4f6_50%,#f3f4f6_75%,transparent_75%,transparent)] [background-size:20px_20px]'
    },
    {
      id: 'viewer',
      title: 'Visualisation 3D',
      description: 'Exploration volumique interactive.',
      icon: <FileImage className="w-6 h-6" />,
      gradient: 'from-cyan-500 to-blue-500',
      page: 'dashboard' as Page,
      features: ['Rendu MPR', 'Raycasting'],
      colSpan: 'md:col-span-1 md:row-span-1',
      bgPattern: ''
    },
    {
      id: 'exploration',
      title: 'Exploration Corticale',
      description: 'Identifiez dynamiquement les aires cérébrales sur vos images recalées.',
      icon: <Target className="w-6 h-6" />,
      gradient: 'from-pink-600 to-rose-600',
      page: 'exploration',
      features: ['Atlas MNI152', 'Labels Brodmann'],
      colSpan: 'md:col-span-1',
      bgPattern: ''
    }
  ];

  return (
    <div className="min-h-screen bg-blue-50/20 font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f612_1px,transparent_1px),linear-gradient(to_bottom,#3b82f612_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
      </div>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-xl shadow-sm border-b border-blue-100/50 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-blue-900 tracking-tight">VisionMed</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-medium text-blue-900">Dr. {user.fullName || user.full_name || user.username}</span>
              <span className="text-[10px] text-blue-500 uppercase tracking-wider">{user.speciality || user.specialty || 'Radiologie'}</span>
            </div>
            <button
              onClick={onLogout}
              className="p-2 text-blue-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
              title="Déconnexion"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div className="space-y-8 animate-in slide-in-from-left-4 duration-700 fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-xs font-semibold tracking-wide uppercase">


            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-blue-900 tracking-tighter leading-[1.1]">
              Précision Clinique <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Absolue.
              </span>
            </h1>

            <p className="text-xl text-blue-700 max-w-lg leading-relaxed">
              La plateforme d'imagerie médicale qui allie puissance de l'IA et simplicité d'usage.
              Gagnez du temps sur vos recalages et segmentations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('dashboard')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-900 text-white font-medium rounded-xl hover:bg-blue-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-blue-900/20"
              >
                Démarrer une analyse
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToModules}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 font-medium rounded-xl border border-blue-100 hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300"
              >
                Explorer les modules
              </button>
            </div>

            <div className="pt-8 flex items-center gap-8 text-sm font-medium text-blue-500">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-emerald-500" />
                <span>Validé Cliniquement</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <span>Conforme HIPAA</span>
              </div>
            </div>
          </div>

          {/* Right: Cortical Analysis Image */}
          <div className="relative group perspective-[2000px] animate-in slide-in-from-right-8 duration-1000 fade-in hidden lg:block">
            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            {/* The Floating Image Card */}
            <div className="relative transform transition-all duration-500 hover:scale-[1.02] preserve-3d rotate-y-[-12deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0">
              <div className={`absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200`}></div>
              <div className="relative bg-blue-950 rounded-xl shadow-2xl overflow-hidden border border-blue-800/50 aspect-[16/10]">
                {/* Placeholder for Cortical Analysis Image */}
                <div className="w-full h-full bg-blue-950 flex flex-col items-center justify-center text-blue-400 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-blue-950 to-blue-950"></div>
                  <Activity className="w-16 h-16 mb-4 text-blue-500/50" />
                  <span className="text-sm font-medium uppercase tracking-widest">Visualisation Corticale</span>
                  {/* Simulation of a heatmap overlay */}
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-blue-500/10 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Section (Restored) */}
      <section className="py-24 px-6 bg-white relative z-10 border-b border-blue-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              <Users className="w-4 h-4" />
              Notre Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 tracking-tight">
              L'Intelligence Artificielle <br /> au service du Diagnostic.
            </h2>
            <p className="text-lg text-blue-700/80 mb-6 leading-relaxed">
              VisionMed est née de la collaboration entre radiologues, neurologues et experts en Deep Learning.
              Notre mission est de simplifier l'analyse d'images médicales complexes.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-900">Sécurité Maximale</h4>
                  <p className="text-blue-600/70 text-sm">Chiffrement de bout en bout et conformité aux normes médicales.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-900">Performance Temps Réel</h4>
                  <p className="text-blue-600/70 text-sm">Algorithmes optimisés pour un traitement instantané au cabinet.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg shadow-blue-900/5 border border-blue-50 flex flex-col items-center text-center">
                  <div className="flex -space-x-3 mb-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden`}>
                        <img
                          src={`https://i.pravatar.cc/100?img=${i + 10}`}
                          alt="Expert"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">
                      +
                    </div>
                  </div>
                  <div className="font-bold text-2xl text-blue-900">500+</div>
                  <div className="text-xs text-blue-400 uppercase tracking-wide">Experts</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg shadow-blue-900/5 border border-blue-50 flex flex-col items-center text-center">
                  <Award className="w-8 h-8 text-indigo-600 mb-3" />
                  <div className="font-bold text-2xl text-blue-900">99.9%</div>
                  <div className="text-xs text-blue-400 uppercase tracking-wide">Disponibilité</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-600 p-6 rounded-2xl shadow-lg shadow-blue-500/20 flex flex-col items-center text-center text-white">
                  <Activity className="w-8 h-8 text-white mb-3" />
                  <div className="font-bold text-2xl">15k</div>
                  <div className="text-xs text-blue-100 uppercase tracking-wide">Analyses</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg shadow-blue-900/5 border border-blue-50 flex flex-col items-center text-center">
                  <Shield className="w-8 h-8 text-emerald-600 mb-3" />
                  <div className="font-bold text-2xl text-blue-900">ISO</div>
                  <div className="text-xs text-blue-400 uppercase tracking-wide">Certifié 27001</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Modules Section */}
      <section id="modules-section" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 tracking-tight">
              Suite Complète d'Analyse
            </h2>
            <p className="text-blue-700/80 text-lg">
              Des outils puissants, interconnectés et conçus pour la performance clinique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
            {modules.map((module, index) => (
              <div
                key={module.id}
                className={`group relative overflow-hidden bg-white rounded-3xl border border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col justify-between ${module.colSpan || ''}`}
              >
                {/* Decorative Background Pattern */}
                <div className={`absolute inset-0 opacity-[0.03] pointer-events-none bg-blue-900 ${module.bgPattern}`} />

                <div className="relative z-10 mb-8">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${module.gradient} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{module.title}</h3>
                  <p className="text-blue-600/70 text-sm leading-relaxed max-w-sm">{module.description}</p>
                </div>

                <div className="relative z-10 flex items-end justify-between mt-auto">
                  <div className="flex gap-2">
                    {module.features.slice(0, 2).map((feat, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-semibold uppercase tracking-wider rounded-md border border-blue-100">
                        {feat}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => onNavigate(module.page)}
                    className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-900 group-hover:bg-blue-600 group-hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats Strip */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Analyses/Mois", value: "2.4k+", icon: <Zap className="w-4 h-4 text-amber-500" /> },
              { label: "Précision Moyenne", value: "98.5%", icon: <Activity className="w-4 h-4 text-emerald-500" /> },
              { label: "Temps Gagné", value: "-45%", icon: <TrendingUp className="w-4 h-4 text-blue-500" /> },
              { label: "Support", value: "24/7", icon: <Users className="w-4 h-4 text-purple-500" /> }
            ].map((stat, i) => (
              <div key={i} className="bg-white/50 backdrop-blur rounded-2xl border border-blue-100 p-6 flex flex-col items-center justify-center text-center">
                <div className="mb-2 p-2 bg-white rounded-full shadow-sm">{stat.icon}</div>
                <div className="text-2xl font-bold text-blue-900">{stat.value}</div>
                <div className="text-xs text-blue-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Simple Clean Footer */}
      <footer className="bg-white border-t border-blue-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-900" />
            <span className="font-bold text-blue-900">VisionMed</span>
          </div>
          <div className="text-sm text-blue-400">
            © 2026 VisionMed. All Clinical Protocols Reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-blue-400 hover:text-blue-900 transition-colors">Privacy</a>
            <a href="#" className="text-sm text-blue-400 hover:text-blue-900 transition-colors">Terms</a>
            <a href="#" className="text-sm text-blue-400 hover:text-blue-900 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper icon
function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
  )
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
  )
}
