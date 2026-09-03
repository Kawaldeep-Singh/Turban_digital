export default function Team() {
  const teamMembers = [
    {
      name: "Lovedeep",
      role: "Founder",
      department: "Leadership",
      description: "Visionary leader driving the agency's growth and client success strategies.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      name: "Kawaldeep",
      role: "Co-Founder",
      department: "Leadership",
      description: "Expert in operations and building long-term client partnerships.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      name: "Gurwinder",
      role: "IT Manager & Co-Founder",
      department: "Technology",
      description: "Leading the technical team to deliver high-performance web and app solutions.",
      gradient: "from-purple-500 to-fuchsia-500"
    },
    {
      name: "Prabhjot Singh",
      role: "Video & Graphic Designer",
      department: "Creative",
      description: "Crafting visually stunning content that captures attention and drives engagement.",
      gradient: "from-fuchsia-500 to-rose-500"
    },
  ];

  return (
    <section id="team" className="py-24 bg-slate-50 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="font-label-sm text-[14px] font-bold text-primary uppercase tracking-widest mb-4">Our Experts</p>
          <h2 className="font-headline-lg text-4xl md:text-4xl font-bold text-slate-900 mb-6">
            Meet the Minds Behind Your Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col p-6 bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Subtle top gradient bar */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${member.gradient} opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="mb-6 flex justify-between items-start">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${member.gradient} p-[2px] shadow-sm`}>
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px] bg-clip-text text-transparent bg-gradient-to-tr from-slate-700 to-slate-900">
                      person
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {member.department}
                </span>
              </div>
              
              <h3 className="font-headline-sm text-2xl font-bold text-slate-900 mb-1">
                {member.name}
              </h3>
              <p className="font-label-md text-primary font-semibold mb-5">{member.role}</p>
              <p className="font-body-md text-slate-500 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Join Our Team Card */}
        <div className="mt-16 p-1 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-[2.5rem]">
          <div className="p-6 bg-white rounded-[2.4rem] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-headline-sm text-2xl font-bold text-slate-900 mb-2">
                Join the Mission ðŸš€
              </h3>
              <p className="text-slate-600 text-lg">
                We&apos;re always looking for passionate digital marketers & developers.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full md:w-auto whitespace-nowrap"
            >
              View Open Roles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
