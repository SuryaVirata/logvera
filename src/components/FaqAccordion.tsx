import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FaqItem[] = [
  {
    question: "Is Logvera publicly available?",
    answer: (
      <p><strong>No.</strong> Logvera is a personal software engineering project. It is currently under active local development, runs strictly within a local development environment, and is not publicly accessible as a commercial product or web service.</p>
    )
  },
  {
    question: "Does it download YouTube videos?",
    answer: (
      <p><strong>No.</strong> Logvera never downloads, stores, or caches YouTube video files, audio streams, or media binaries. It processes only text-based metadata and comment threads retrieved via official API endpoints.</p>
    )
  },
  {
    question: "Does it modify YouTube content?",
    answer: (
      <p><strong>No.</strong> Logvera operates on a strictly read-only basis. It never posts, comments, likes, subscribes, edits, or modifies any content or user accounts on YouTube.</p>
    )
  },
  {
    question: "Does it use the official YouTube Data API?",
    answer: (
      <p><strong>Yes.</strong> Logvera accesses public data exclusively using authorized YouTube Data API v3 endpoints with developer API keys, adhering strictly to official developer policies and quota limits.</p>
    )
  },
  {
    question: "What kind of data is analyzed?",
    answer: (
      <p>Logvera analyzes only publicly accessible video metadata (titles, descriptions, channel names) and public comment threads related to technical software discussion topics.</p>
    )
  }
];

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-container">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => toggleFaq(idx)}>
              <span>{faq.question}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            {isOpen && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
