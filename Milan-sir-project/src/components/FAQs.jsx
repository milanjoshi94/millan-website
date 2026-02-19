import React from 'react';

const faqData = [
  {
    question: "How is this different from other architecture courses?",
    answer: "This program focuses on real-world architectural practice, not just theory. It combines design thinking, execution workflows, client handling, and studio growth systems—taught from actual project experience."
  },
  {
    question: "Is this course suitable if I want to start my own architecture studio?",
    answer: "Yes. This course is designed for architects who want to build, manage, and grow their own studio with clarity, confidence, and structured systems."
  },
  {
    question: "Will this help me get better architecture clients?",
    answer: "You’ll learn how to position your work professionally, improve communication, and build systems that attract serious, quality clients—not quick or random projects."
  },
  {
    question: "Is this only for experienced architects?",
    answer: "No. It’s suitable for architecture students, fresh graduates, and practicing architects who want to understand how real-world practice actually works."
  },
  {
    question: "Do I get direct guidance from the mentor?",
    answer: "You’ll receive structured guidance, proven frameworks, and curated insights based on real architectural practice, along with community learning and shared experiences."
  },
  {
    question: "Is there a refund or trial period?",
    answer: "This is a long-term learning program built for committed architects. Please review the course details carefully before enrolling."
  }
];

const FAQs = () => {
  return (
    <section className="text-white pb-10 px-4 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lora-700  mb-6 ">
            FAQs
          </h2>
          <p className="ext-5xl lora-700  text-xl">
            Here you will find the answers to the frequently asked questions.
          </p>
        </div>

        <div className="">
          {faqData.map((item, index) => (
            <div key={index} className="border-t border-white pt-4 pb-3 first:pt-8 ">
              <h3 className="text-[18px] font-bold  mb-4 text-center">
                {item.question}
              </h3>
              <p className=" text-base lora-400 px-4">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;