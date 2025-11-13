import { useState } from 'react';
import { initializeFirestore, verifyFirestoreData } from '../../utils/initializeFirestore';
import AdminLayout from '../../components/admin/AdminLayout';

export default function AdminInitialize() {
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [result, setResult] = useState(null);
  const [verification, setVerification] = useState(null);

  const handleInitialize = async () => {
    if (!window.confirm('⚠️ This will populate Firestore with initial data. Continue?')) {
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const response = await initializeFirestore();
      setResult(response);
    } catch (error) {
      setResult({ success: false, error: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    setVerifying(true);
    setVerification(null);

    try {
      const results = await verifyFirestoreData();
      setVerification(results);
    } catch (error) {
      setVerification({ error: error.message });
    } finally {
      setVerifying(false);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-white mb-2">
            Database <span className="text-sinar-gold">Initialization</span>
          </h1>
          <p className="text-gray-400">
            Initialize Firestore with all static data from the frontend
          </p>
        </div>

        {/* Warning Banner */}
        <div className="mb-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
          <div className="flex items-start gap-4">
            <span className="text-3xl">⚠️</span>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">Important Notice</h3>
              <ul className="space-y-1 text-sm text-yellow-300">
                <li>• Run this ONCE to populate your database with initial data</li>
                <li>• This will create all collections and documents in Firestore</li>
                <li>• Make sure Firebase is properly configured before running</li>
                <li>• Existing data with same IDs will be overwritten</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Overview */}
        <div className="mb-8 bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Data to be Initialized</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-sinar-dark rounded-lg">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-sm text-gray-400 mb-1">Hero Section</div>
              <div className="text-white font-semibold">1 document</div>
            </div>
            <div className="p-4 bg-sinar-dark rounded-lg">
              <div className="text-2xl mb-2">📝</div>
              <div className="text-sm text-gray-400 mb-1">About Section</div>
              <div className="text-white font-semibold">1 document</div>
            </div>
            <div className="p-4 bg-sinar-dark rounded-lg">
              <div className="text-2xl mb-2">🏢</div>
              <div className="text-sm text-gray-400 mb-1">Divisions</div>
              <div className="text-white font-semibold">4 documents</div>
            </div>
            <div className="p-4 bg-sinar-dark rounded-lg">
              <div className="text-2xl mb-2">💼</div>
              <div className="text-sm text-gray-400 mb-1">Portfolio</div>
              <div className="text-white font-semibold">4 documents</div>
            </div>
            <div className="p-4 bg-sinar-dark rounded-lg">
              <div className="text-2xl mb-2">💬</div>
              <div className="text-sm text-gray-400 mb-1">Testimonials</div>
              <div className="text-white font-semibold">3 documents</div>
            </div>
            <div className="p-4 bg-sinar-dark rounded-lg">
              <div className="text-2xl mb-2">⚙️</div>
              <div className="text-sm text-gray-400 mb-1">Workflow</div>
              <div className="text-white font-semibold">6 documents</div>
            </div>
            <div className="p-4 bg-sinar-dark rounded-lg">
              <div className="text-2xl mb-2">❓</div>
              <div className="text-sm text-gray-400 mb-1">FAQ</div>
              <div className="text-white font-semibold">6 documents</div>
            </div>
            <div className="p-4 bg-sinar-dark rounded-lg">
              <div className="text-2xl mb-2">👥</div>
              <div className="text-sm text-gray-400 mb-1">AI Employees</div>
              <div className="text-white font-semibold">4 documents</div>
            </div>
            <div className="p-4 bg-sinar-dark rounded-lg">
              <div className="text-2xl mb-2">📚</div>
              <div className="text-sm text-gray-400 mb-1">Case Studies</div>
              <div className="text-white font-semibold">2 documents</div>
            </div>
            <div className="p-4 bg-sinar-dark rounded-lg">
              <div className="text-2xl mb-2">👔</div>
              <div className="text-sm text-gray-400 mb-1">Founders</div>
              <div className="text-white font-semibold">2 documents</div>
            </div>
            <div className="p-4 bg-sinar-dark rounded-lg">
              <div className="text-2xl mb-2">💻</div>
              <div className="text-sm text-gray-400 mb-1">Tech Stack</div>
              <div className="text-white font-semibold">1 document</div>
            </div>
            <div className="p-4 bg-sinar-dark rounded-lg">
              <div className="text-2xl mb-2">📄</div>
              <div className="text-sm text-gray-400 mb-1">Templates</div>
              <div className="text-white font-semibold">3 documents</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={handleInitialize}
            disabled={loading}
            className="flex-1 px-6 py-4 bg-sinar-gold hover:bg-sinar-gold-light text-sinar-dark font-semibold rounded-lg transition-colors duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <div className="w-6 h-6 border-2 border-sinar-dark border-t-transparent rounded-full animate-spin"></div>
                <span>Initializing Database...</span>
              </>
            ) : (
              <>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span>Initialize Firestore</span>
              </>
            )}
          </button>

          <button
            onClick={handleVerify}
            disabled={verifying}
            className="px-6 py-4 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg transition-colors duration-300 disabled:opacity-50 flex items-center gap-3"
          >
            {verifying ? (
              <>
                <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                <span>Verifying...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <span>Verify Data</span>
              </>
            )}
          </button>
        </div>

        {/* Result Message */}
        {result && (
          <div className={`p-6 rounded-xl mb-8 ${
            result.success 
              ? 'bg-green-500/10 border border-green-500/30' 
              : 'bg-red-500/10 border border-red-500/30'
          }`}>
            <div className="flex items-start gap-4">
              <span className="text-3xl">{result.success ? '✅' : '❌'}</span>
              <div className="flex-1">
                <h3 className={`text-lg font-semibold mb-2 ${
                  result.success ? 'text-green-400' : 'text-red-400'
                }`}>
                  {result.success ? 'Success!' : 'Error'}
                </h3>
                <p className={result.success ? 'text-green-300' : 'text-red-300'}>
                  {result.message || result.error}
                </p>
                {result.success && (
                  <div className="mt-4 text-sm text-green-400">
                    <p>✓ All collections created successfully</p>
                    <p>✓ Static data migrated to Firestore</p>
                    <p>✓ Ready to connect frontend components</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Verification Results */}
        {verification && (
          <div className="bg-sinar-dark-light border border-sinar-gold/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Verification Results</h3>
            <div className="space-y-2">
              {Object.entries(verification).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-3 bg-sinar-dark rounded-lg">
                  <span className="text-gray-300">{key}</span>
                  <span className={value.includes('✅') ? 'text-green-400' : 'text-red-400'}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Next Steps After Initialization</h3>
          <ol className="space-y-2 text-sm text-blue-300">
            <li>1. Click "Initialize Firestore" to populate the database</li>
            <li>2. Wait for success message</li>
            <li>3. Click "Verify Data" to confirm all collections were created</li>
            <li>4. Go to Firebase Console to view the data</li>
            <li>5. Update frontend components to fetch from Firestore</li>
            <li>6. Remove static data from components</li>
            <li>7. Test all pages with dynamic data</li>
          </ol>
        </div>
      </div>
    </AdminLayout>
  );
}
