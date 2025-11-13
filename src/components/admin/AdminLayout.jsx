import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const menuItems = [
    { path: '/admin', label: 'Dashboard', icon: '📊' },
    { path: '/admin/initialize', label: 'Initialize DB', icon: '🚀', highlight: true },
    { path: '/admin/hero', label: 'Hero Section', icon: '🎯' },
    { path: '/admin/about', label: 'About Section', icon: '📝' },
    { path: '/admin/divisions', label: 'Divisions', icon: '🏢' },
    { path: '/admin/portfolio', label: 'Portfolio', icon: '💼' },
    { path: '/admin/testimonials', label: 'Testimonials', icon: '💬' },
    { path: '/admin/workflow', label: 'Workflow', icon: '⚙️' },
    { path: '/admin/templates', label: 'Templates', icon: '📄' },
    { path: '/admin/faq', label: 'FAQ', icon: '❓' },
    { path: '/admin/team', label: 'AI Employees', icon: '👥' },
    { path: '/admin/case-studies', label: 'Case Studies', icon: '📚' },
    { path: '/admin/founders', label: 'Founders', icon: '👔' },
    { path: '/admin/tech-stack', label: 'Tech Stack', icon: '💻' },
  ];

  return (
    <div className="min-h-screen bg-sinar-dark">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-sinar-dark-light border-b border-sinar-gold/20">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo & Menu Toggle */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 text-sinar-gold hover:bg-sinar-gold/10 rounded-lg transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-xl font-display font-bold text-white">
                Sinar AI <span className="text-sinar-gold">Admin</span>
              </h1>
            </div>

            {/* User Info & Actions */}
            <div className="flex items-center gap-4">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-sinar-gold transition-colors duration-300"
              >
                View Site →
              </a>
              <div className="flex items-center gap-3 px-4 py-2 bg-sinar-dark rounded-lg border border-sinar-gold/20">
                <img
                  src={currentUser?.photoURL}
                  alt={currentUser?.displayName}
                  className="w-8 h-8 rounded-full"
                />
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-white">{currentUser?.displayName}</p>
                  <p className="text-xs text-gray-400">{currentUser?.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors duration-300 text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 bottom-0 bg-sinar-dark-light border-r border-sinar-gold/20 transition-all duration-300 z-40 ${
          sidebarOpen ? 'w-64' : 'w-0'
        } overflow-hidden`}
      >
        <div className="p-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-sinar-gold text-sinar-dark font-semibold'
                    : item.highlight
                    ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 hover:text-white hover:from-purple-500/30 hover:to-blue-500/30 border border-purple-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-sinar-dark'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
                {item.highlight && !isActive && (
                  <span className="ml-auto text-xs px-2 py-0.5 bg-purple-500/30 rounded-full">New</span>
                )}
              </Link>
            );
          })}
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-16 transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
