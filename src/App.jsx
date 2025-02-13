import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import ProcessFlow from './components/ProcessFlow';
import FAQ from './components/FAQ';
import Register from './components/Register';
import PWAInstallButton from './components/PWAInstallButton';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen gradient-bg transition-colors duration-300 flex flex-col">
        <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                  Clean4Good
                </Link>
              </div>
              <div className="flex items-center justify-end flex-1">
                <div className="hidden sm:flex sm:space-x-8">
                  <Link to="/" className="nav-link text-center min-w-[100px]">Home</Link>
                  <Link to="/process" className="nav-link text-center min-w-[100px]">Our Process</Link>
                  <Link to="/faq" className="nav-link text-center min-w-[100px]">FAQ</Link>
                  <Link to="/register" className="primary-button text-center min-w-[100px]">
                    Get Started
                  </Link>
                </div>
                <div className="ml-4 sm:ml-8 flex items-center space-x-4">
                  <ThemeToggle />
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="ml-4 sm:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Mobile menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden pb-3`}>
              <div className="flex flex-col space-y-2">
                <Link to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/process" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                  Our Process
                </Link>
                <Link to="/faq" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </Link>
                <Link to="/register" className="primary-button text-center" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-1 flex items-center justify-center pb-16">
          <div className="container mx-auto p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-8rem)] flex flex-col justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/process" element={<Process />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </main>

        <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm fixed bottom-0 left-0 right-0 z-50 shadow-[0_-1px_2px_0_rgba(0,0,0,0.05)]">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Clean4Good. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="w-full space-y-8 sm:space-y-12 animate-fade-in">
      <div className="relative py-8 sm:py-12 hero-pattern rounded-xl sm:rounded-2xl overflow-hidden">
        <div className="relative text-center px-3 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Welcome to Clean4Good
          </h1>
          <p className="mt-3 sm:mt-4 max-w-md mx-auto text-sm sm:text-base md:text-lg text-gray-800 font-medium">
            Supporting those with <span className="font-bold text-primary-600 dark:text-primary-400">physical</span>, <span className="font-bold text-primary-600 dark:text-primary-400">mental</span>, or <span className="font-bold text-primary-600 dark:text-primary-400">financial</span> challenges in maintaining a clean living environment.
          </p>
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Link to="/process" className="w-full sm:w-auto primary-button text-center inline-flex items-center justify-center">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <div className="w-full sm:w-auto">
              <PWAInstallButton />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white">
          Who We Help
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="modern-card p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary-100 dark:bg-primary-900 rounded-lg sm:rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Physical Disabilities</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-800 dark:text-white/90 font-medium">Support for individuals with mobility challenges or physical limitations.</p>
          </div>
          <div className="modern-card p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary-100 dark:bg-primary-900 rounded-lg sm:rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Mental Health</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-800 dark:text-white/90 font-medium">Assistance for those dealing with mental health conditions affecting daily tasks.</p>
          </div>
          <div className="modern-card p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary-100 dark:bg-primary-900 rounded-lg sm:rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">Financial Hardship</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-800 dark:text-white/90 font-medium">Help for individuals and families facing financial difficulties.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Process() {
  return (
    <div className="w-full space-y-6 sm:space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
          Our Process
        </h2>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-gray-800 dark:text-white/90 font-medium">
          From application to cleaning service in approximately 2 weeks
        </p>
      </div>
      <div className="modern-card p-3 sm:p-4 md:p-6">
        <ProcessFlow />
      </div>
    </div>
  );
}

export default App;
