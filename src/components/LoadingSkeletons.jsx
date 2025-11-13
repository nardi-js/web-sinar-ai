// Reusable loading skeleton components

export const HeroSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center px-6 animate-pulse">
    <div className="max-w-6xl w-full text-center space-y-8">
      <div className="inline-block h-8 w-48 bg-gray-700/50 rounded-full"></div>
      <div className="space-y-4">
        <div className="h-20 bg-gray-700/50 rounded-lg mx-auto w-3/4"></div>
        <div className="h-20 bg-gray-700/50 rounded-lg mx-auto w-2/3"></div>
      </div>
      <div className="h-6 bg-gray-700/50 rounded mx-auto w-4/5"></div>
      <div className="flex gap-4 justify-center">
        <div className="h-14 w-48 bg-gray-700/50 rounded-lg"></div>
        <div className="h-14 w-48 bg-gray-700/50 rounded-lg"></div>
      </div>
    </div>
  </div>
);

export const SectionSkeleton = () => (
  <div className="py-20 px-6 animate-pulse">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <div className="h-6 w-32 bg-gray-700/50 rounded-full mx-auto"></div>
        <div className="h-12 w-96 bg-gray-700/50 rounded-lg mx-auto"></div>
        <div className="h-6 w-full max-w-2xl bg-gray-700/50 rounded mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-gray-700/20 rounded-xl p-6 space-y-4">
            <div className="h-12 w-12 bg-gray-700/50 rounded-lg"></div>
            <div className="h-6 w-3/4 bg-gray-700/50 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-700/50 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-700/50 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const CardSkeleton = () => (
  <div className="bg-gray-700/20 rounded-xl p-6 space-y-4 animate-pulse">
    <div className="h-48 bg-gray-700/50 rounded-lg"></div>
    <div className="h-6 w-3/4 bg-gray-700/50 rounded"></div>
    <div className="space-y-2">
      <div className="h-4 w-full bg-gray-700/50 rounded"></div>
      <div className="h-4 w-5/6 bg-gray-700/50 rounded"></div>
    </div>
  </div>
);

export const StatsSkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-pulse">
    {[1, 2, 3, 4].map(i => (
      <div key={i} className="text-center space-y-2">
        <div className="h-12 w-24 bg-gray-700/50 rounded mx-auto"></div>
        <div className="h-4 w-32 bg-gray-700/50 rounded mx-auto"></div>
      </div>
    ))}
  </div>
);

export const TestimonialSkeleton = () => (
  <div className="bg-gray-700/20 rounded-xl p-6 space-y-4 animate-pulse">
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 bg-gray-700/50 rounded-full"></div>
      <div className="flex-1 space-y-2">
        <div className="h-5 w-32 bg-gray-700/50 rounded"></div>
        <div className="h-4 w-48 bg-gray-700/50 rounded"></div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-4 w-full bg-gray-700/50 rounded"></div>
      <div className="h-4 w-full bg-gray-700/50 rounded"></div>
      <div className="h-4 w-3/4 bg-gray-700/50 rounded"></div>
    </div>
  </div>
);

export const WorkflowSkeleton = () => (
  <div className="space-y-12 animate-pulse">
    {[1, 2, 3].map(i => (
      <div key={i} className="flex items-start gap-6">
        <div className="w-16 h-16 bg-gray-700/50 rounded-full flex-shrink-0"></div>
        <div className="flex-1 space-y-4">
          <div className="h-6 w-48 bg-gray-700/50 rounded"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-700/50 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-700/50 rounded"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
