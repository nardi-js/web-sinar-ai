import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import AdminLayout from '../../components/admin/AdminLayout';

export default function AdminAboutSection() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    badge: 'About Us',
    title: 'Who We Are',
    description: 'We are a team of passionate innovators dedicated to transforming businesses through AI technology.',
    stats: [
      { number: '500+', label: 'Projects Completed' },
      { number: '98%', label: 'Client Satisfaction' },
      { number: '50+', label: 'AI Models Deployed' },
      { number: '24/7', label: 'Support Available' }
    ]
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const docRef = doc(db, 'content', 'about');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFormData(docSnap.data());
      }
    } catch (error) {
      console.error('Error fetching about data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStatChange = (index, field, value) => {
    const newStats = [...formData.stats];
    newStats[index] = { ...newStats[index], [field]: value };
    setFormData(prev => ({ ...prev, stats: newStats }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);

    try {
      await setDoc(doc(db, 'content', 'about'), {
        ...formData,
        updatedAt: new Date().toISOString()
      });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error saving:', error);
      alert('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="w-12 h-12 border-4 border-sinar-gold border-t-transparent rounded-full animate-spin"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-white mb-2">
            About Section <span className="text-sinar-gold">Manager</span>
          </h1>
          <p className="text-gray-400">Edit the about us section content</p>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-green-400 font-medium">Changes saved successfully!</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
            <label className="block text-sm font-semibold text-sinar-gold mb-2">Badge Text</label>
            <input
              type="text"
              name="badge"
              value={formData.badge}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none"
            />
          </div>

          <div className="bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
            <label className="block text-sm font-semibold text-sinar-gold mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none"
            />
          </div>

          <div className="bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
            <label className="block text-sm font-semibold text-sinar-gold mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none"
            />
          </div>

          <div className="bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Statistics</h3>
            <div className="space-y-4">
              {formData.stats.map((stat, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 p-4 bg-sinar-dark rounded-lg">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Number</label>
                    <input
                      type="text"
                      value={stat.number}
                      onChange={(e) => handleStatChange(index, 'number', e.target.value)}
                      className="w-full px-3 py-2 bg-sinar-dark-light border border-gray-700 rounded text-white focus:border-sinar-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Label</label>
                    <input
                      type="text"
                      value={stat.label}
                      onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                      className="w-full px-3 py-2 bg-sinar-dark-light border border-gray-700 rounded text-white focus:border-sinar-gold focus:outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={saving}
              className="flex-1 px-6 py-3 bg-sinar-gold hover:bg-sinar-gold-light text-sinar-dark font-semibold rounded-lg transition-colors duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {saving ? (
                <>
                  <div className="w-5 h-5 border-2 border-sinar-dark border-t-transparent rounded-full animate-spin"></div>
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Save Changes</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={fetchData}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
            >
              Reset
            </button>
          </div>
        </form>

        <div className="mt-8 bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Preview</h3>
          <div className="bg-sinar-dark rounded-lg p-8 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full">
              <span className="text-sm text-sinar-gold-light">{formData.badge}</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white">{formData.title}</h2>
            <p className="text-gray-400">{formData.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {formData.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-sinar-gold mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
