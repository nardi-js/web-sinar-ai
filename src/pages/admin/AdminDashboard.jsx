import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import AdminLayout from '../../components/admin/AdminLayout';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    templates: 0,
    portfolio: 0,
    testimonials: 0,
    faq: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [templatesSnap, portfolioSnap, testimonialsSnap, faqSnap] = await Promise.all([
          getDocs(collection(db, 'templates')),
          getDocs(collection(db, 'portfolio')),
          getDocs(collection(db, 'testimonials')),
          getDocs(collection(db, 'faq'))
        ]);
        
        setStats({
          templates: templatesSnap.size,
          portfolio: portfolioSnap.size,
          testimonials: testimonialsSnap.size,
          faq: faqSnap.size
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statsCards = [
    { 
      label: 'Templates', 
      value: stats.templates, 
      icon: '📄',
      color: 'text-sinar-gold',
      bgColor: 'bg-sinar-gold/10',
      path: '/admin/templates'
    },
    { 
      label: 'Portfolio', 
      value: stats.portfolio, 
      icon: '💼',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      path: '/admin/portfolio'
    },
    { 
      label: 'Testimonials', 
      value: stats.testimonials, 
      icon: '💬',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      path: '/admin/testimonials'
    },
    { 
      label: 'FAQ', 
      value: stats.faq, 
      icon: '❓',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      path: '/admin/faq'
    }
  ];

  const quickLinks = [
    { 
      path: '/admin/templates', 
      label: 'Templates', 
      icon: '📄',
      description: 'Manage product templates',
      badge: 'Dynamic',
      badgeColor: 'bg-sinar-gold/20 text-sinar-gold'
    },
    { 
      path: '/admin/hero', 
      label: 'Hero Section', 
      icon: '🎯',
      description: 'Edit homepage hero'
    },
    { 
      path: '/admin/about', 
      label: 'About Section', 
      icon: '📝',
      description: 'Update company info'
    },
    { 
      path: '/admin/portfolio', 
      label: 'Portfolio', 
      icon: '💼',
      description: 'Showcase projects'
    },
    { 
      path: '/admin/testimonials', 
      label: 'Testimonials', 
      icon: '💬',
      description: 'Client feedback'
    },
    { 
      path: '/admin/workflow', 
      label: 'Workflow', 
      icon: '⚙️',
      description: 'Edit process steps'
    },
    { 
      path: '/admin/faq', 
      label: 'FAQ', 
      icon: '❓',
      description: 'Manage questions'
    },
    { 
      path: '/admin/initialize', 
      label: 'Initialize DB', 
      icon: '🚀',
      description: 'Setup database',
      badge: 'Setup',
      badgeColor: 'bg-purple-500/20 text-purple-300'
    }
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">
            Dashboard
          </h1>
          <p className="text-gray-400">
            Manage all website content from this centralized dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsCards.map((stat) => (
            <Link
              key={stat.label}
              to={stat.path}
              className="group bg-sinar-dark-light/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-sinar-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-sinar-gold/5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110`}>
                  {stat.icon}
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
              <div>
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                  {loading ? '...' : stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </Link>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group bg-sinar-dark-light/50 backdrop-blur-sm border border-gray-800 rounded-xl p-5 hover:border-sinar-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-sinar-gold/5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-3xl">{link.icon}</div>
                  {link.badge && (
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${link.badgeColor}`}>
                      {link.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-base font-semibold text-white mb-1 group-hover:text-sinar-gold transition-colors duration-300">
                  {link.label}
                </h3>
                <p className="text-xs text-gray-400">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-4">System Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-sinar-dark-light/50 backdrop-blur-sm border border-gray-800 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-400">Website Live</span>
              </div>
              <p className="text-xs text-gray-400 mb-3">All systems operational</p>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                <span>View Live Website</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-sinar-dark-light/50 backdrop-blur-sm border border-gray-800 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-sinar-gold rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-sinar-gold">Firebase Connected</span>
              </div>
              <p className="text-xs text-gray-400 mb-3">Database synchronized</p>
              <a
                href="/templates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-sinar-gold hover:text-sinar-gold-light transition-colors duration-300"
              >
                <span>View Templates Demo</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-sinar-dark-light/50 backdrop-blur-sm border border-gray-800 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-400">Auth Secure</span>
              </div>
              <p className="text-xs text-gray-400">Protected admin area</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
