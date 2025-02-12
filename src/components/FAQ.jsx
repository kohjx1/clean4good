import { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden 
                    border border-gray-200 dark:border-gray-700 transition-all duration-200 
                    hover:shadow-md">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center 
                   hover:bg-gray-50 dark:hover:bg-gray-700/80 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white pr-4">{question}</span>
        <div className={`flex-shrink-0 ml-2 transform transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`}>
          <svg
            className="w-6 h-6 text-primary-600 dark:text-primary-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`transition-all duration-200 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 py-4 bg-gray-50/50 dark:bg-gray-700/50">
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "What services does Clean4Good provide?",
      answer: "Clean4Good specializes in transformative cleaning services for individuals facing physical, mental, or financial challenges. Our comprehensive service includes deep cleaning of living spaces, organizing cluttered areas, and providing essential supplies for maintaining a clean environment. We focus on creating a fresh start for those who need it most."
    },
    {
      question: "How does the cleaning process work?",
      answer: "Our process begins with a thorough assessment of your space. We focus on restoring your home to a comfortable, livable condition by cleaning floors, surfaces, and fixtures. While we don't sort through personal items, we carefully set these aside during cleaning. We provide all cleaning supplies and can even supply new bedding items when necessary. The end result is a clean, fresh living space that promotes well-being."
    },
    {
      question: "What areas of my home will be cleaned?",
      answer: "We prioritize essential living spaces including kitchens, bathrooms, living rooms, and bedrooms. Our team focuses on surfaces, floors, and fixtures to ensure a healthy living environment. We'll tackle problem areas while respecting your privacy and personal belongings. Special attention is given to high-traffic areas and spaces that impact daily living."
    },
    {
      question: "How do you handle personal belongings?",
      answer: "We understand the importance of privacy and personal space. During cleaning, we respectfully set aside personal items without sorting through them. Documents, private belongings, and valuables are treated with utmost care. Our focus remains on cleaning visible surfaces and spaces while maintaining your privacy and dignity."
    },
    {
      question: "What cleaning supplies are provided?",
      answer: "Through our network of generous sponsors, we provide all necessary cleaning supplies and equipment. This includes professional-grade cleaning products, tools, and when needed, new household items such as bedding, pillows, and basic cleaning supplies to help maintain your space afterward. All products are selected for their effectiveness and safety."
    },
    {
      question: "How long does a typical cleaning service take?",
      answer: "The duration varies depending on your specific situation and home size. After our initial assessment, we'll provide a time estimate. Most services are completed within one day, though larger projects may require additional time. We ensure thorough cleaning while being mindful of your schedule and comfort."
    },
    {
      question: "Is there any cost for your services?",
      answer: "Clean4Good operates through sponsorships and donations to provide services to those in need. While there's no direct cost to qualified individuals, we do require an application and assessment to ensure we can best serve those who need our help most. Our goal is to make professional cleaning services accessible to everyone facing challenges."
    },
    {
      question: "What happens after the cleaning is complete?",
      answer: "After cleaning, we provide guidance on maintaining your refreshed space. We'll leave you with basic cleaning supplies and tips for keeping your home clean. We also offer follow-up support if needed. Our goal is not just to clean but to help you maintain a healthy living environment long-term."
    },
    {
      question: "How do you ensure privacy and confidentiality?",
      answer: "Your privacy is our top priority. We maintain strict confidentiality regarding your personal information and situation. While we may document our work for quality assurance, we never share identifying details. All team members sign confidentiality agreements, and we handle all information according to privacy best practices."
    },
    {
      question: "Can I request specific areas to be prioritized?",
      answer: "Absolutely! We understand that each situation is unique. During the application process, you can indicate specific areas of concern or priority. We'll work with you to create a cleaning plan that addresses your most pressing needs while ensuring comprehensive care for your entire living space."
    }
  ];

  return (
    <div className="w-full space-y-8 sm:space-y-12 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium">
          Find answers to common questions about our cleaning services. 
          Can't find what you're looking for? Feel free to reach out to us directly.
        </p>
      </div>
      <div className="max-w-3xl mx-auto px-4 space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
