import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import ProcessFlow from './components/ProcessFlow';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen gradient-bg transition-colors duration-300">
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
                </div>
                <div className="ml-4 sm:ml-8 flex items-center">
                  <ThemeToggle />
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="ml-4 sm:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
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
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/process" element={<Process />} />
          </Routes>
        </main>

        <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm mt-12">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 dark:text-gray-400">
              {new Date().getFullYear()} Clean4Good. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="space-y-12 sm:space-y-16 animate-fade-in">
      <div className="relative py-12 sm:py-16 -mt-8 sm:-mt-12 hero-pattern rounded-2xl sm:rounded-3xl overflow-hidden">
        <div className="relative text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Welcome to Clean4Good
          </h1>
          <p className="mt-4 sm:mt-6 max-w-md mx-auto text-sm sm:text-base md:text-lg text-gray-800 dark:text-white/90 font-medium">
            Supporting those with <span className="font-bold text-primary-600 dark:text-primary-400">physical</span>, <span className="font-bold text-primary-600 dark:text-primary-400">mental</span>, or <span className="font-bold text-primary-600 dark:text-primary-400">financial</span> challenges in maintaining a clean living environment.
          </p>
          <div className="mt-6 sm:mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
            <Link to="/process" className="primary-button w-full sm:w-auto">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white">
          Who We Help
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="modern-card p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Physical Disabilities</h3>
            <p className="text-sm sm:text-base text-gray-800 dark:text-white/90 font-medium">Support for individuals with mobility challenges or physical limitations.</p>
          </div>
          <div className="modern-card p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Mental Health</h3>
            <p className="text-sm sm:text-base text-gray-800 dark:text-white/90 font-medium">Assistance for those dealing with mental health conditions affecting daily tasks.</p>
          </div>
          <div className="modern-card p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Financial Hardship</h3>
            <p className="text-sm sm:text-base text-gray-800 dark:text-white/90 font-medium">Help for individuals and families facing financial difficulties.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Process() {
  return (
    <div className="space-y-8 sm:space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
          Our Process
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-800 dark:text-white/90 font-medium">
          From application to cleaning service in approximately 2 weeks
        </p>
      </div>
      <div className="modern-card p-4 sm:p-8">
        <ProcessFlow />
      </div>
    </div>
  );
}

export default App;
