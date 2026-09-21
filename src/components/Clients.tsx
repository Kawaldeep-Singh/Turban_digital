import Image from "next/image";

export default function Clients() {
  const clients = [
    { name: "ATS Studio", src: "/our clients/ATS Studio.png" },
    { name: "Agminfraproject", src: "/our clients/Agminfraproject.webp" },
    { name: "De Devine", src: "/our clients/De Devine.webp" },
    { name: "ETR ground", src: "/our clients/ETR ground.png" },
    { name: "Tesoro", src: "/our clients/Wordmark_Style_Logo_for_Tesoro_3.webp" },
    { name: "Gadget Grid", src: "/our clients/gadget grid.webp" },
    { name: "M Realty", src: "/our clients/m readlty.png" },
    { name: "Navbhoomi", src: "/our clients/navbhoomi.jpg" },
    { name: "Old Skull Fitness", src: "/our clients/old skull fitnes.png" },
  ];

  // We duplicate the array to create a seamless infinite scrolling effect
  const marqueeClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 text-center relative z-10">
        <p className="font-label-md text-slate-500 uppercase tracking-widest font-bold">
          Trusted by Innovative Brands
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        {/* Left fade gradient */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
        
        {/* The scrolling container */}
        <div className="flex gap-16 md:gap-24 animate-marquee w-max items-center pl-16 md:pl-24">
          {marqueeClients.map((client, idx) => (
            <div key={idx} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-105">
              <div className="relative h-16 w-32 md:h-20 md:w-40 flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right fade gradient */}
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
      </div>
    </section>
  );
}
