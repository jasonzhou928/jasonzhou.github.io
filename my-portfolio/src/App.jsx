import React from 'react';
import { Github, Twitter, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';

/**
 * ------------------------------------------------------------------
 * USER CONFIGURATION - EDIT THIS SECTION WITH YOUR INFO
 * ------------------------------------------------------------------
 */

const PROFILE = {
  name: "Sixu Zhou",
  role: "Researcher",
  department: "EPIC Lab", 
  university: "Georgia Institute of Technology",
  bio: [
    "I am a researcher at the Georgia Institute of Technology, focusing on the intersection of robotics and biomechanics.",
    "My primary research interests include Prosthetics, Machine Learning, Locomotion, Control, and Biomechanics. I work on developing intelligent control systems for robotic lower-limb prostheses to improve user mobility and quality of life.",
    "My work involves using deep learning for intent recognition and analyzing the biomechanics of powered prosthetic devices."
  ],
  email: "sixu.zhou@gatech.edu",
  links: {
    googleScholar: "https://scholar.google.com/citations?user=QGegWe4AAAAJ&hl=en",
    github: "https://github.com/jasonzhou928", 
    twitter: "#",
    linkedin: "#"
  },
  // CHANGED: This now correctly points to the public folder
  image: "/headshot.png" 
};

const NEWS = [
  { date: "2025", content: "Multiple papers accepted to IROS, RA-L, and IEEE Transactions on Medical Robotics and Bionics." },
  { date: "2024", content: "Research on Power Knee biomechanics published in the Journal of Biomechanics." },
  { date: "2022", content: "Presented work on OpenSim models at ISMR 2022." }
];

const PUBLICATIONS = [
  {
    title: "Continuous-Context, User-Independent, Real-Time Intent Recognition for Powered Lower-Limb Prostheses",
    authors: ["K Bhakta", "J Maldonado-Contreras", "J Camargo", "S Zhou", "W Compton", "et al."],
    venue: "Journal of Biomechanical Engineering, 2025",
    description: "Proposed a continuous-context intent recognition system for powered prostheses to improve real-time performance.",
    links: [{ label: "Paper", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&citation_for_view=QGegWe4AAAAJ:u-x6o8ySG0sC" }]
  },
  {
    title: "Mode-Unified Intent Estimation of a Robotic Prosthesis using Deep-Learning",
    authors: ["H Kim", "D Lee", "JY Maldonado-Contreras", "Sixu Zhou", "KR Herrin", "AJ Young"],
    venue: "IEEE Robotics and Automation Letters (RA-L), 2025",
    description: "Developed a deep learning approach for unified intent estimation in robotic prostheses to enhance control transitions.",
    links: [{ label: "Paper", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&citation_for_view=QGegWe4AAAAJ:UebtZRa9Y70C" }]
  },
  {
    title: "Real-time Adaptation of Deep Learning Walking Speed Estimators Enables Biomimetic Assistance Modulation in an Open-Source Bionic Leg",
    authors: ["J Maldonado-Contreras", "C Johnson", "S Zhou", "H Kim", "I Knight", "KR Herrin", "et al."],
    venue: "IEEE Transactions on Medical Robotics and Bionics, 2025",
    description: "Enabled biomimetic assistance through real-time adaptive speed estimation algorithms.",
    links: [{ label: "Paper", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&citation_for_view=QGegWe4AAAAJ:roLk4NBZSpQC" }]
  },
  {
    title: "An anthropometry-based personalization of powered knee prosthesis for metabolic efficiency",
    authors: ["S Zhou", "H Kim", "JY Maldonado-Contreras", "AÖ Sverrisson", "D Langlois", "et al."],
    venue: "IEEE Transactions on Medical Robotics and Bionics, 2025",
    description: "Studied anthropometry-based personalization methods for improving metabolic efficiency in powered knee users.",
    links: [{ label: "Paper", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&citation_for_view=QGegWe4AAAAJ:Y0pCki6q_DkC" }]
  },
  {
    title: "Comparing the biomechanical response of users of an open-source powered knee and ankle prosthesis versus a passive prosthesis during ramp and stair ambulation",
    authors: ["S Zhou", "S Kestur", "J Maldonado", "K Herrin", "N Fey", "A Young"],
    venue: "Journal of Biomechanics, 2025",
    description: "Comparative biomechanical analysis of powered vs. passive prostheses on complex terrains like ramps and stairs.",
    links: [{ label: "Paper", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&citation_for_view=QGegWe4AAAAJ:eQOLeE2rZwMC" }]
  },
  {
    title: "Biomechanical and energetic effects of knee flexion control during incline walking for users of the Power Knee",
    authors: ["S Zhou", "H Kim", "J Maldonado-Contreras", "AÖ Sverrisson", "D Langlois", "et al."],
    venue: "Clinical Biomechanics, 2025",
    description: "Investigated energetic effects of specific knee flexion control strategies in the Power Knee during incline walking.",
    links: [{ label: "Paper", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&citation_for_view=QGegWe4AAAAJ:9yKSN-GCB0IC" }]
  },
  {
    title: "Transfer Learning for Walking Speed Estimation Across Novel Prosthetic Devices and Populations",
    authors: ["J Maldonado-Contreras", "C Johnson", "IJ Knight", "A Sawant", "S Zhou", "H Kim", "et al."],
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2025",
    description: "Applied transfer learning to robustly estimate walking speed across different devices and user populations.",
    links: [{ label: "Paper", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&citation_for_view=QGegWe4AAAAJ:Tyk-4Ss8FVUC" }]
  },
  {
    title: "Comparing the lower limb joint biomechanics of the Power Knee, C-Leg and Rheo Knee during ramp and stair ambulation",
    authors: ["S Kestur", "S Zhou", "G O'Sullivan", "A Young", "K Herrin"],
    venue: "Journal of Biomechanics, 2024",
    description: "Comparative study of lower limb biomechanics across three different microprocessor knees.",
    links: [{ label: "Paper", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&citation_for_view=QGegWe4AAAAJ:YsMSGLbcyi4C" }]
  },
  {
    title: "Opensim model for biomechanical analysis with the open-source bionic leg",
    authors: ["J Camargo", "K Bhakta", "J Maldonado-Contreras", "Sixu Zhou", "K Herrin", "A Young"],
    venue: "International Symposium on Medical Robotics (ISMR), 2022",
    description: "Created an Opensim model to analyze biomechanics with the open-source bionic leg.",
    links: [{ label: "Paper", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=QGegWe4AAAAJ&citation_for_view=QGegWe4AAAAJ:u5HHmVD_uO8C" }]
  }
];

const SERVICE = [
  "Reviewer: IEEE Robotics and Automation Letters (RA-L)",
  "Reviewer: IEEE Transactions on Medical Robotics and Bionics",
  "Reviewer: IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)"
];

/**
 * ------------------------------------------------------------------
 * MAIN COMPONENT - (Logic & Layout)
 * ------------------------------------------------------------------
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header / Intro Section */}
        <section className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 mb-16">
          <div className="flex-1">
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              {PROFILE.name}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {PROFILE.role} at {PROFILE.department}, {PROFILE.university}
            </p>
            
            <div className="space-y-4 text-gray-600 leading-relaxed mb-6 text-justify">
              {PROFILE.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <a href={`mailto:${PROFILE.email}`} className="hover:text-blue-600 hover:underline transition-colors flex items-center gap-1">
                <Mail size={16} /> Email
              </a>
              <a href={PROFILE.links.googleScholar} className="hover:text-blue-600 hover:underline transition-colors flex items-center gap-1" target="_blank" rel="noreferrer">
                <FileText size={16} /> Google Scholar
              </a>
              <a href={PROFILE.links.github} className="hover:text-blue-600 hover:underline transition-colors flex items-center gap-1" target="_blank" rel="noreferrer">
                <Github size={16} /> Github
              </a>
              <a href={PROFILE.links.twitter} className="hover:text-blue-600 hover:underline transition-colors flex items-center gap-1" target="_blank" rel="noreferrer">
                <Twitter size={16} /> Twitter
              </a>
              <a href={PROFILE.links.linkedin} className="hover:text-blue-600 hover:underline transition-colors flex items-center gap-1" target="_blank" rel="noreferrer">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="md:w-64 flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full md:rounded-lg overflow-hidden shadow-sm mx-auto md:mx-0 bg-gray-100">
              <img 
                src={PROFILE.image} 
                alt={PROFILE.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Main Content Column */}
          <div className="md:col-span-4 space-y-16">
            
            {/* News Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">News</h2>
              <div className="space-y-3">
                {NEWS.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-gray-700">
                    <span className="font-mono text-sm font-semibold min-w-[100px] text-gray-500 whitespace-nowrap">
                      [{item.date}]
                    </span>
                    <span>{item.content}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Publications Section */}
            <section>
              <h2 className="text-2xl font-bold mb-8 border-b pb-2">Publications</h2>
              <div className="space-y-10">
                {PUBLICATIONS.map((pub, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold mb-1 leading-tight">
                      <a href={pub.links[0]?.url} className="hover:text-blue-600 hover:underline text-gray-900" target="_blank" rel="noreferrer">
                        {pub.title}
                      </a>
                    </h3>
                    
                    <div className="text-gray-600">
                      {pub.authors.map((author, i) => (
                        <React.Fragment key={i}>
                          <span className={author.includes("Sixu Zhou") || author === "S Zhou" ? "font-semibold text-gray-900" : "font-normal"}>
                            {author}
                          </span>
                          {i < pub.authors.length - 1 && ", "}
                        </React.Fragment>
                      ))}
                    </div>
                    
                    <div className="text-sm font-medium text-gray-500 italic">
                      {pub.venue}
                    </div>
                    
                    <div className="flex gap-3 text-sm mt-1">
                      {pub.links.map((link, i) => (
                        <a 
                          key={i} 
                          href={link.url}
                          className="text-blue-600 hover:text-blue-800 hover:underline font-medium inline-flex items-center gap-0.5"
                          target="_blank" rel="noreferrer"
                        >
                          [{link.label}]
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Service Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">Academic Service</h2>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700">
                {SERVICE.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Footer */}
            <footer className="pt-12 pb-8 text-center text-sm text-gray-400">
              <p>
                © {new Date().getFullYear()} {PROFILE.name}. 
                <br className="md:hidden" />
                Designed with a focus on simplicity and readability.
              </p>
            </footer>

          </div>
        </div>

      </main>
    </div>
  );
}