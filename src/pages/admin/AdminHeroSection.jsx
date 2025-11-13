import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import AdminLayout from '../../components/admin/AdminLayout';

export default function AdminHeroSection() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    badge: 'Welcome to Sinar AI',
    title: 'Building the Future with',
    highlightedText: 'AI Innovation',
    description: 'Transform your business with cutting-edge AI solutions. We combine artificial intelligence with human creativity to deliver exceptional results.',
    ctaPrimaryText: 'Start Your Project',
    ctaPrimaryLink: '/contact',
    ctaSecondaryText: 'View Portfolio',
    ctaSecondaryLink: '/portfolio'
  });

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    try {
      const docRef = doc(db, 'content', 'hero');
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setFormData(docSnap.data());
      }
    } catch (error) {
      console.error('Error fetching hero data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);

    try {
      const docRef = doc(db, 'content', 'hero');
      await setDoc(docRef, {
        ...formData,
        updatedAt: new Date().toISOString()
      });
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error saving hero data:', error);
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
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-white mb-2">
            Hero Section <span className="text-sinar-gold">Manager</span>
          </h1>
          <p className="text-gray-400">
            Edit the homepage hero section content
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-green-400 font-medium">Changes saved successfully!</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Badge */}
          <div className="bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
            <label className="block text-sm font-semibold text-sinar-gold mb-2">
              Badge Text
            </label>
            <input
              type="text"
              name="badge"
              value={formData.badge}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none transition-colors duration-300"
              placeholder="e.g. Welcome to Sinar AI"
            />
            <p className="mt-2 text-xs text-gray-500">Small badge text above the main title</p>
          </div>

          {/* Title */}
          <div className="bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
            <label className="block text-sm font-semibold text-sinar-gold mb-2">
              Main Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none transition-colors duration-300"
              placeholder="e.g. Building the Future with"
            />
            <p className="mt-2 text-xs text-gray-500">Main headline text</p>
          </div>

          {/* Highlighted Text */}
          <div className="bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
            <label className="block text-sm font-semibold text-sinar-gold mb-2">
              Highlighted Text (Gold)
            </label>
            <input
              type="text"
              name="highlightedText"
              value={formData.highlightedText}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none transition-colors duration-300"
              placeholder="e.g. AI Innovation"
            />
            <p className="mt-2 text-xs text-gray-500">Text that appears in gold color</p>
          </div>

          {/* Description */}
          <div className="bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
            <label className="block text-sm font-semibold text-sinar-gold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none transition-colors duration-300"
              placeholder="Enter hero description..."
            />
            <p className="mt-2 text-xs text-gray-500">Supporting text below the title</p>
          </div>

          {/* CTA Buttons */}
          <div className="bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Call-to-Action Buttons</h3>
            
            {/* Primary CTA */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Primary Button Text
                </label>
                <input
                  type="text"
                  name="ctaPrimaryText"
                  value={formData.ctaPrimaryText}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Primary Button Link
                </label>
                <input
                  type="text"
                  name="ctaPrimaryLink"
                  value={formData.ctaPrimaryLink}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none transition-colors duration-300"
                  placeholder="/contact"
                />
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Secondary Button Text
                </label>
                <input
                  type="text"
                  name="ctaSecondaryText"
                  value={formData.ctaSecondaryText}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Secondary Button Link
                </label>
                <input
                  type="text"
                  name="ctaSecondaryLink"
                  value={formData.ctaSecondaryLink}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-sinar-dark border border-gray-700 rounded-lg text-white focus:border-sinar-gold focus:outline-none transition-colors duration-300"
                  placeholder="/portfolio"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={saving}
              className="flex-1 px-6 py-3 bg-sinar-gold hover:bg-sinar-gold-light text-sinar-dark font-semibold rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
              onClick={fetchHeroData}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
            >
              Reset
            </button>
          </div>
        </form>

        {/* Preview */}
        <div className="mt-8 bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Preview</h3>
          <div className="bg-sinar-dark rounded-lg p-8 space-y-4">
            <div className="inline-block px-4 py-1.5 bg-sinar-gold/10 border border-sinar-gold/30 rounded-full">
              <span className="text-sm text-sinar-gold-light">{formData.badge}</span>
            </div>
            <h1 className="text-4xl font-display font-bold text-white">
              {formData.title} <span className="text-sinar-gold">{formData.highlightedText}</span>
            </h1>
            <p className="text-gray-400">{formData.description}</p>
            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 bg-sinar-gold text-sinar-dark font-semibold rounded-lg">
                {formData.ctaPrimaryText}
              </button>
              <button className="px-6 py-3 border border-sinar-gold text-sinar-gold rounded-lg">
                {formData.ctaSecondaryText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
