export default function TechMarquee() {
  // Susunan tech stack andalan lu
  const techStack = [
    "Playwright", "Postman", "Jira Software", "GitLab", 
    "Trello", "AWS Back-End", "Next.js", "Tailwind CSS", "TypeScript"
  ];
  
  // Gandakan array agar animasinya memutar tanpa putus (seamless loop)
  const displayTech = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <div className="w-full bg-slate-900 border-y border-slate-800 py-6 overflow-hidden flex items-center relative">
      {/* Efek gradasi bayangan di pinggir agar teks seolah muncul dari dalam */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
      
      <div className="flex w-max animate-marquee gap-12 md:gap-24 items-center">
        {displayTech.map((tech, idx) => (
          <div key={idx} className="flex-none text-lg md:text-xl font-bold tracking-widest uppercase text-slate-700 hover:text-slate-400 transition-colors">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}