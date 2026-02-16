"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ContactUs from "@/components/ContactUs";
import { useSearchParams } from "next/navigation";
import { MainteamMembers, GameteamMembers, DevteamMembers, AIteamMembers, ExteamMembers } from "@/lib/teamData";
import MorphingDialogComponent from "@/components/MorphingDialog";

// Dynamic title and description
const getMetaData = (activeTab) => {
  switch (activeTab) {
    case "About Us":
      return {
        title: "About Us | UET Game Studio",
        description: "Learn more about who we are and our mission in game development.",
      };
    case "Team":
      return {
        title: "Meet Our Team | UET Game Studio",
        description: "Get to know the talented individuals behind UET Game Studio.",
      };
    case "Contacts":
      return {
        title: "Contact Us | UET Game Studio",
        description: "Get in touch with UET Game Studio for inquiries and collaboration.",
      };
    default:
      return {
        title: "UET Game Studio",
        description: "Welcome to UET Game Studio, where we craft the future of gaming."
      };
  }
};

export default function Page() {
  const [activeTab, setActiveTab] = useState("About Us");
  const searchParam = useSearchParams();

  useEffect(() => {
    const tab = searchParam.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, []);

  useEffect(() => {
    const { title, description } = getMetaData(activeTab);
    document.title = title;
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }
  }, [activeTab]);

  const tabs = ["About Us", "Team", "Contacts"];

  return (
    <div className="min-h-screen bg-[#0f1012] pt-24 pb-12 px-4 md:px-8 lg:px-16 xl:px-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-800 pb-6"
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6 md:mb-0"
          >
            {getMetaData(activeTab).title.split(" | ")[0]}
          </motion.h1>

          <nav className="flex space-x-2 bg-[#1a1b1e] p-1.5 rounded-xl border border-gray-800">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${activeTab === tab
                  ? "text-white bg-gradient-to-r from-red-600 to-red-800 shadow-lg shadow-red-900/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </motion.div>

        {/* Tab Content */}
        <div className="min-h-[60vh]">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === "About Us" && <WhoWeAre />}
            {activeTab === "Team" && <Team />}
            {activeTab === "Contacts" && <Contacts />}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function WhoWeAre() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-red-500 font-bold tracking-widest uppercase text-sm">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Crafting the Future of <span className="text-red-600">Gaming</span>
          </h2>
        </div>

        <p className="text-gray-400 text-lg leading-relaxed">
          At UET Game Studio, we’ve been pushing the boundaries of game
          development since 2016. Spearheaded by Dr. Muhammad Usman Ghani Khan
          at KICS, we are dedicated to creating cross-platform games that
          captivate and engage players on mobile devices.
        </p>

        <div className="bg-[#1a1b1e] border border-gray-800 rounded-2xl p-8 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Icon icon="mdi:star-four-points" className="text-red-500" />
            What Sets Us Apart
          </h3>
          <ul className="space-y-4">
            {[
              "Developing industrial-strength commercial games with cutting-edge technology.",
              "Offering a unique platform for mobile game design and development at UET.",
              "Providing comprehensive training in Game Design and Development.",
              "Utilizing state-of-the-art game engines like Unity 3D.",
              "Fostering innovation through Final Year Projects supervision."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-400">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-2xl transform rotate-3 scale-105 blur-lg"></div>
        <img
          src="/logo.png"
          alt="Game Characters"
          className="relative rounded-2xl w-full h-auto shadow-2xl border border-gray-800 bg-[#1a1b1e]"
        />
      </div>
    </div>
  );
}

function Team() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const teamSections = [
    { id: "main-team", title: "Leadership", data: MainteamMembers },
    { id: "game-team", title: "Game Team", data: GameteamMembers },
    { id: "dev-team", title: "Dev Team", data: DevteamMembers },
    { id: "ai-team", title: "AI Team", data: AIteamMembers },
  ];

  return (
    <div className="space-y-16">
      {/* Quick Navigation */}
      <div className="flex flex-wrap justify-center gap-3 sticky top-24 z-30 bg-[#0f1012]/80 backdrop-blur-md p-4 rounded-xl border border-gray-800 w-fit mx-auto">
        {teamSections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="px-4 py-1.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
          >
            {section.title}
          </button>
        ))}
        <button
          onClick={() => scrollToSection("alumni")}
          className="px-4 py-1.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
        >
          Alumni
        </button>
      </div>

      {/* Active Team Sections */}
      {teamSections.map((section) => (
        <div key={section.id} id={section.id} className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white">{section.title}</h3>
            <div className="h-px bg-gray-800 flex-grow"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {section.data.map((member, index) => (
              <MorphingDialogComponent
                key={index}
                imageSrc={member.image}
                title={member.name}
                subtitle={member.position}
                // Adding generic description since data is missing it, to prevent empty dialogs looking broken
                description={`A key member of our ${section.title} contributing to the success of UET Game Studio.`}
                link={member.linkedin}
                altText={member.name}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Alumni Section */}
      <section id="alumni" className="scroll-mt-32 pt-8 border-t border-gray-800">
        <div className="text-center mb-12">
          <span className="text-red-500 font-bold tracking-widest uppercase text-sm">Legacy</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">Our <span className="text-red-600">Alumni</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ExteamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-[#1a1b1e] rounded-xl border border-gray-800 hover:border-red-500/30 p-6 flex flex-col items-center text-center transition-all duration-300 group"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-red-500/50 mb-4 transition-colors">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-bold text-lg">{member.name}</h3>
              <p className="text-gray-500 text-sm mb-1">{member.position}</p>
              {member.company && (
                <span className="text-xs text-red-500 font-medium bg-red-500/10 px-2 py-0.5 rounded mb-3">
                  @{member.company}
                </span>
              )}
              {member.linkedin && (
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-gray-400 hover:text-white transition-colors"
                >
                  <Icon icon="mdi:linkedin" className="text-xl" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Contacts() {
  return (
    <div className="max-w-5xl mx-auto">
      <ContactUs />
    </div>
  );
}
