
export default function Team() {
  // te
  const teamMembers = [
    {
      name: "Lovedeep",
      role: "Founder & CEO",
      department: "Leadership",
      description: "Visionary leader driving the agency's growth and crafting winning client strategies.",
      initials: "L",
      bgClass: "bg-slate-900",
      linkedin: "https://www.linkedin.com/in/lovedeep-singh-532380186/",
      email: "777singhlovedeep@gmail.com"
    },
    {
      name: "Kawaldeep Singh",
      role: "Co-Founder",
      department: "Operations",
      description: "Operations mastermind focused on scaling the agency and ensuring flawless execution.",
      initials: "KS",
      bgClass: "bg-slate-900",
      linkedin: "https://www.linkedin.com/in/kawaldeepsingh8395",
      email: "kawaldeep8395@gmail.com"
    },
    {
      name: "Prabhjot Singh",
      role: "Lead Creative Designer",
      department: "Creative",
      description: "The creative genius behind our scroll-stopping designs and cinematic video edits.",
      initials: "PS",
      bgClass: "bg-slate-900",
      linkedin: "#",
      email: "hello@turbandigitalstudio.in"
    },
  ];

  return (
    <section id="team" className="py-32 bg-white relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute -left-40 top-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-primary font-bold text-[13px] uppercase tracking-widest mb-6 shadow-sm">
            <span className="material-symbols-outlined text-[16px]">groups</span>
            Our Experts
          </div>
          <h2 className="font-headline-lg text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Meet the Minds Behind <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-creative-purple">Your Growth</span>
          </h2>
          <p className="font-body-lg text-lg text-slate-500">
            We are a tight-knit team of marketers, developers, and creatives obsessed with scaling your business to new heights.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-[2.5rem] p-3 shadow-md hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 border border-slate-100 flex flex-col"
            >
              {/* Top Banner with Initials */}
              <div className={`relative h-48 rounded-[2rem] overflow-hidden ${member.bgClass} flex items-center justify-center mb-6`}>
                {/* Decorative overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 to-black/20"></div>

                {/* Frosted Glass Avatar */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                  <span className="font-headline-md text-3xl font-bold text-white tracking-wider">{member.initials}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="px-6 pb-8 flex-grow flex flex-col items-center text-center">
                <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">
                  {member.department}
                </span>
                <h3 className="font-headline-sm text-2xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-[15px] text-creative-purple font-bold mb-4">{member.role}</p>
                <p className="font-body-md text-slate-500 leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="mt-auto flex items-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${member.name}'s LinkedIn profile`}
                    className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0077B5] hover:bg-blue-50 transition-all hover:scale-110"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Send email to ${member.name}`}
                    className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all hover:scale-110"
                  >
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">mail</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team Banner */}
        <div className="relative p-1 bg-gradient-to-r from-slate-200 via-primary/20 to-creative-purple/20 rounded-[3rem] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-creative-purple opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative p-8 md:p-12 bg-white rounded-[2.9rem] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left transition-colors duration-700 group-hover:bg-slate-900">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-[12px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-400 transition-colors">We are hiring</span>
              </div>
              <h3 className="font-headline-sm text-3xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">
                Join the Mission 🚀
              </h3>
              <p className="text-slate-500 group-hover:text-slate-300 text-lg max-w-xl transition-colors">
                We're always looking for passionate digital marketers, elite developers, and creative minds to join our growing team.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full md:w-auto whitespace-nowrap group-hover:bg-white group-hover:text-slate-900 group-hover:-translate-y-1"
            >
              View Open Roles
              <span className="material-symbols-outlined ml-2 text-[20px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
