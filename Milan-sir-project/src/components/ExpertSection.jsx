
const cardData = [
  {
    icon: "/setting.png",
    text: "You're an architect looking to build a sustainable, full-time practice through skill, strategy, and execution."
  },
  {
    icon: "/graph.png",
    text: "You're an architect ready to scale your practice through clarity, systems, and a trusted professional identity."
  },
  {
    icon: "/people.png",
    text: "You're an architect seeking a supportive community that understands practice, process, and growth."
  }
];

const ExpertSection = () => {
  return (
    <section className="py-8 md:py-16 px-4 lg:px-0 text-white text-center">
      <h2 className="text-4xl md:text-5xl lora-700 text-white text-center mb-12">
        Expert Design Blueprint is for you, if :
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#ECD4AA] p-5 rounded-[10px] flex flex-col items-start text-left  transition-transform hover:scale-105 duration-300"
          >
            <div className="mb-4">
         <img className="w-10 h-10" src= {item.icon} />    
            </div>
            <p className="text-black sora font-light">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertSection;