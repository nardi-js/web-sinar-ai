import { Link } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';

export default function AdminDashboard() {
  const sections = [
    { 
      path: '/admin/hero', 
      label: 'Hero Section', 
      icon: '🎯',
      description: 'Manage homepage hero content',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      path: '/admin/about', 
      label: 'About Section', 
      icon: '📝',
      description: 'Edit about us content',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      path: '/admin/divisions', 
      label: 'Divisions', 
      icon: '🏢',
      description: 'Manage company divisions',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      path: '/admin/portfolio', 
      label: 'Portfolio', 
      icon: '💼',
      description: 'Update portfolio projects',
      color: 'from-orange-500 to-red-500'
    },
    { 
      path: '/admin/testimonials', 
      label: 'Testimonials', 
      icon: '💬',
      description: 'Manage client testimonials',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      path: '/admin/workflow', 
      label: 'Workflow', 
      icon: '⚙️',
      description: 'Edit workflow steps',
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      path: '/admin/templates', 
      label: 'Templates', 
      icon: '📄',
      description: 'Manage template library',
      color: 'from-teal-500 to-green-500'
    },
    { 
      path: '/admin/faq', 
      label: 'FAQ', 
      icon: '❓',
      description: 'Update FAQ content',
      color: 'from-pink-500 to-rose-500'
    },
    { 
      path: '/admin/team', 
      label: 'AI Employees', 
      icon: '👥',
      description: 'Manage AI team members',
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      path: '/admin/case-studies', 
      label: 'Case Studies', 
      icon: '📚',
      description: 'Edit case study content',
      color: 'from-violet-500 to-purple-500'
    },
    { 
      path: '/admin/founders', 
      label: 'Founders', 
      icon: '👔',
      description: 'Update founders info',
      color: 'from-red-500 to-pink-500'
    },
    { 
      path: '/admin/tech-stack', 
      label: 'Tech Stack', 
      icon: '💻',
      description: 'Manage technology stack',
      color: 'from-green-500 to-teal-500'
    },
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-white mb-2">
            Content Management <span className="text-sinar-gold">Dashboard</span>
          </h1>
          <p className="text-gray-400">
            Manage all website content from this centralized dashboard
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">📄</span>
              <span className="text-2xl font-bold text-white">12</span>
            </div>
            <p className="text-sm text-gray-400">Content Sections</p>
          </div>

          <div className="bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">✅</span>
              <span className="text-2xl font-bold text-green-400">Live</span>
            </div>
            <p className="text-sm text-gray-400">Website Status</p>
          </div>

          <div className="bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">🔥</span>
              <span className="text-2xl font-bold text-sinar-gold">Active</span>
            </div>
            <p className="text-sm text-gray-400">Firebase Status</p>
          </div>

          <div className="bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">🔐</span>
              <span className="text-2xl font-bold text-blue-400">Secure</span>
            </div>
            <p className="text-sm text-gray-400">Auth Status</p>
          </div>
        </div>

        {/* Content Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link
              key={section.path}
              to={section.path}
              className="group relative bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6 hover:border-sinar-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-sinar-gold/10 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-sinar-gold/10 rounded-lg flex items-center justify-center text-2xl">
                    {section.icon}
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-600 group-hover:text-sinar-gold transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sinar-gold transition-colors duration-300">
                  {section.label}
                </h3>
                <p className="text-sm text-gray-400">
                  {section.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-sinar-gold hover:bg-sinar-gold-light text-sinar-dark font-semibold rounded-lg transition-colors duration-300">
              Backup All Data
            </button>
            <button className="px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg transition-colors duration-300">
              Export Content
            </button>
            <button className="px-6 py-3 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/30 rounded-lg transition-colors duration-300">
              Import Content
            </button>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-lg transition-colors duration-300"
            >
              Preview Website
            </a>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
