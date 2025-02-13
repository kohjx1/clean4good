import { useState, useEffect } from 'react';

export default function PWAInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    });

    window.addEventListener('appinstalled', () => {
      setDeferredPrompt(null);
      setIsInstallable(false);
      console.log('PWA was installed');
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', () => {});
      window.removeEventListener('appinstalled', () => {});
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  if (!isInstallable) return null;

  return (
    <div className="relative inline-block">
      {/* Desktop and Mobile version combined */}
      <button
        onClick={handleInstallClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 
                 border border-transparent text-base font-medium rounded-full
                 text-primary-600 bg-white/90 hover:bg-white
                 dark:bg-gray-800/90 dark:hover:bg-gray-800 dark:text-primary-400
                 shadow-lg hover:shadow-xl
                 backdrop-blur-sm
                 transform transition-all duration-200 hover:scale-105
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        aria-label="Install App"
      >
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        <span className="whitespace-nowrap">Install App</span>
      </button>

      {/* Tooltip */}
      <div
        className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2
                   bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg whitespace-nowrap
                   transition-opacity duration-200 pointer-events-none
                   ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        Get the app on your device
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1">
          <div className="border-8 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
        </div>
      </div>
    </div>
  );
}
