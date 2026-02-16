"use client"
import { useEffect, useRef } from 'react';

const CardList = () => {
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardsContainerRef.current) {
        for (const card of cardsContainerRef.current.getElementsByClassName("card")) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      }
    };

    const container = cardsContainerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => {  
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cardData = [
    {
      icon: 'fa-gavel',
      title: 'Statutes and Judgments Library',
      subtitle: 'Access a comprehensive library of statutes, regulations, and judicial decisions, all at your fingertips.',
    },
    {
      icon: 'fa-file-alt',
      title: 'Document Management',
      subtitle: 'Streamline your document workflow with our intuitive document management system.',
    },
    {
      icon: 'fa-robot',
      title: 'Research AI',
      subtitle: 'Leverage our powerful research AI to quickly find relevant information and insights from our extensive library.',
    },
    {
      icon: 'fa-search',
      title: 'Document Review and Analysis',
      subtitle: 'Automate your document review and analysis with our advanced AI capabilities.',
    },
    {
      icon: 'fa-users',
      title: 'Organization Accounts',
      subtitle: 'Manage your team\'s legal workflow with our organization-level accounts.',
    },
    {
      icon: 'fa-lock',
      title: 'Secure and Compliant',
      subtitle: 'Rest assured that your data is safe and secure with our industry-leading security and compliance measures.',
    },
  ];

  return (
    <section id="cardSection" className="py-8">
      <div
        ref={cardsContainerRef}
        id="cards"
        className="flex flex-wrap justify-center gap-4 bg-background transition-colors duration-300"
      >
        {cardData.map(({ icon, title, subtitle }) => (
          <div
            key={title}
            className="card relative bg-white dark:bg-[#1a1b1e] border border-gray-200 dark:border-white/10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-72 m-2"
          >
            <div className="card-content p-6 flex flex-col items-center">
              <div className="card-image mb-4 text-3xl text-red-600 dark:text-red-400">
                <i className={`fa-duotone ${icon}`}></i>
              </div>
              <div className="card-info-wrapper w-full">
                <div className="card-info flex flex-col items-center">
                  <div className="card-info-title text-center">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                    <h4 className="text-sm text-gray-600 dark:text-gray-400">{subtitle}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6 mt-8">
        <a
          id="source-link"
          className="link flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
          href="https://linear.app/features"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-link"></i>
          <span className="roboto-mono">Source</span>
        </a>

        <a
          id="youtube-link"
          className="link flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
          href="https://youtu.be/htGfnF1zN4g"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-youtube"></i>
          <span>5 min Tutorial</span>
        </a>
      </div>
    </section>
  );
};

export default CardList;