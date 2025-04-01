import React from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'WHAT IS ONLINE LEGAL CONSULTATION?',
    answer: 'Online legal consultation is a modern way to get professional legal advice through digital platforms. It allows you to connect with qualified lawyers remotely, saving time and making legal services more accessible. You can discuss your legal matters, get advice, and even share documents securely through our platform.',
  },
  {
    question: 'ARE YOUR ONLINE LAWYERS QUALIFIED?',
    answer: 'Yes, all lawyers on our platform are fully qualified and verified. Each lawyer undergoes a strict verification process, including checking their bar council registration, years of experience, and specialization. We only partner with lawyers who have a minimum of 5 years of experience in their respective fields.',
  },
  {
    question: 'WHAT HAPPENS IF I DON\'T GET A RESPONSE FROM A LAWYER?',
    answer: 'We guarantee a response within 24 hours. If you don\'t receive a response within this timeframe, you\'ll receive a full refund and a priority consultation with another lawyer of your choice. Our customer support team is available 24/7 to handle any issues with lawyer responses.',
  },
  {
    question: 'HOW DO I START ONLINE CONSULTATION WITH LAWYER ON LEGALCART?',
    answer: 'Starting a consultation is simple: 1) Create an account 2) Select your legal category 3) Choose a lawyer based on expertise and reviews 4) Schedule a consultation time 5) Make the payment 6) Connect with your lawyer through our secure platform. The entire process takes less than 5 minutes.',
  },
  {
    question: 'IS ONLINE LAWYER CONSULTATION SAFE AND SECURE ON LEGALCART?',
    answer: 'Absolutely. We use bank-grade encryption to protect all communications and document sharing. Our platform is compliant with global data protection regulations. All consultations are confidential and protected by lawyer-client privilege. We never share your information with third parties.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Questions?</h2>
            <h3 className="text-xl font-bold text-blue-900 mb-8">We're here to help</h3>
            <p className="text-gray-600">
              Check out our FAQs or talk to a live customer care specialist by phone, chat, or email
            </p>
          </div>
          <div className="w-full md:w-2/3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 text-left hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{faq.question}</span>
                    <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`}>
                      {openIndex === index ? (
                        <ChevronDown className="h-5 w-5 text-blue-900 transition-transform duration-300 transform rotate-0" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-blue-900 transition-transform duration-300 transform" />
                      )}
                    </div>
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}