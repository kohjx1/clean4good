import { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    situation: '',
    cleaningType: '',
    acceptFilming: false,
    acceptPrivacy: false,
    description: '',
    images: []
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 2) {
      alert('Please select a maximum of 2 photos');
      return;
    }
    
    const validFiles = files.filter(file => {
      const isValid = file.size <= 10 * 1024 * 1024; // 10MB
      if (!isValid) {
        alert(`File ${file.name} is too large. Maximum size is 10MB`);
      }
      return isValid;
    });

    setFormData(prev => ({
      ...prev,
      images: validFiles
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full space-y-8 sm:space-y-12 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Start Your Journey to a Fresh Beginning
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
          Everyone deserves a clean and comfortable living space. Tell us about your situation, 
          and let us help you create a fresh start for your life and home.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 
                      shadow-sm hover:shadow-md transition-shadow duration-200
                      border border-gray-200 dark:border-gray-700">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name or tag <span className="text-primary-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-800 px-4 py-2.5 text-sm 
                           focus:border-primary-500 focus:ring-primary-500 dark:text-white
                           transition-colors duration-200"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email or phone <span className="text-primary-600">*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-800 px-4 py-2.5 text-sm 
                           focus:border-primary-500 focus:ring-primary-500 dark:text-white
                           transition-colors duration-200"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                City <span className="text-primary-600">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-800 px-4 py-2.5 text-sm 
                         focus:border-primary-500 focus:ring-primary-500 dark:text-white
                         transition-colors duration-200"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Type of Service Needed <span className="text-primary-600">*</span>
              </label>
              <div className="mt-2 space-y-3">
                <label className="flex items-center p-3 rounded-lg border border-gray-200 
                                dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 
                                cursor-pointer transition-colors duration-200">
                  <input
                    type="radio"
                    name="cleaningType"
                    value="spot"
                    className="text-primary-600 focus:ring-primary-500"
                    onChange={handleInputChange}
                    required
                  />
                  <span className="ml-3">
                    <span className="block text-sm font-medium text-gray-900 dark:text-white">
                      Specific Area Cleaning
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">
                      Focus on particular problem areas in your home
                    </span>
                  </span>
                </label>
                
                <label className="flex items-center p-3 rounded-lg border border-gray-200 
                                dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 
                                cursor-pointer transition-colors duration-200">
                  <input
                    type="radio"
                    name="cleaningType"
                    value="whole"
                    className="text-primary-600 focus:ring-primary-500"
                    onChange={handleInputChange}
                  />
                  <span className="ml-3">
                    <span className="block text-sm font-medium text-gray-900 dark:text-white">
                      Complete Home Cleaning
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">
                      Thorough cleaning of your entire living space
                    </span>
                  </span>
                </label>
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-center p-3 rounded-lg border border-gray-200 
                              dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 
                              cursor-pointer transition-colors duration-200">
                <input
                  type="checkbox"
                  name="acceptFilming"
                  className="text-primary-600 focus:ring-primary-500"
                  checked={formData.acceptFilming}
                  onChange={handleInputChange}
                />
                <span className="ml-3">
                  <span className="block text-sm font-medium text-gray-900 dark:text-white">
                    Documentation Permission
                  </span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">
                    I allow documentation of the cleaning process (your identity will remain private)
                  </span>
                </span>
              </label>

              <label className="flex items-center p-3 rounded-lg border border-gray-200 
                              dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 
                              cursor-pointer transition-colors duration-200">
                <input
                  type="checkbox"
                  name="acceptPrivacy"
                  className="text-primary-600 focus:ring-primary-500"
                  checked={formData.acceptPrivacy}
                  onChange={handleInputChange}
                  required
                />
                <span className="ml-3">
                  <span className="block text-sm font-medium text-gray-900 dark:text-white">
                    Privacy Agreement <span className="text-primary-600">*</span>
                  </span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">
                    I agree to the temporary storage of my information for processing. 
                    All data will be deleted after application review.
                  </span>
                </span>
              </label>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Situation <span className="text-primary-600">*</span>
              </label>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Please share your story to help us understand how we can best assist you.
              </p>
              <textarea
                id="description"
                name="description"
                rows={4}
                required
                className="mt-2 block w-full rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-800 px-4 py-2.5 text-sm 
                         focus:border-primary-500 focus:ring-primary-500 dark:text-white
                         transition-colors duration-200"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Home Photos <span className="text-primary-600">*</span>
              </label>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Upload 1-2 photos of the areas needing attention (max 10MB per photo)
              </p>
              <input
                type="file"
                name="images"
                accept="image/*"
                multiple
                required
                className="mt-2 block w-full text-sm text-gray-500 dark:text-gray-300
                         file:mr-4 file:py-2.5 file:px-4
                         file:rounded-lg file:border-0
                         file:text-sm file:font-medium
                         file:bg-primary-50 file:text-primary-700
                         hover:file:bg-primary-100
                         dark:file:bg-primary-900 dark:file:text-primary-400
                         transition-colors duration-200"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 text-base font-medium text-white 
                     bg-primary-600 hover:bg-primary-700 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-offset-2 
                     focus:ring-primary-500 transition-all duration-200
                     shadow-sm hover:shadow-md"
          >
            Submit Application
          </button>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            We typically respond within 2-3 business days
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
