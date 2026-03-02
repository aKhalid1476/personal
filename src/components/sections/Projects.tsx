import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "ClipCraft AI",
      description: "An AI-powered video generator — enter a prompt and get a polished promo video. Claude AI writes the copy and Remotion renders the motion graphics, all automated end-to-end.",
      imageUrl: "/placeholder-clipcraft.jpg", // We will deal with images later or use external UI placeholders
      websiteUrl: "#",
      githubUrl: "#",
      techStack: ["Next.js", "TypeScript", "Python"],
    },
    {
      title: "Nova AI",
      description: "Nova AI is an advanced multi-modal assistant that can read webpages, research live information, run Python code, and interact through natural voice conversations.",
      imageUrl: "/placeholder-nova.jpg",
      websiteUrl: "#",
      githubUrl: "#",
      techStack: ["Next.js", "TypeScript", "Node.js"],
    }
  ];

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      
      <div className="flex justify-center">
        <button className="px-6 py-2.5 bg-[#1a1a1a] text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors border border-gray-800">
          View all projects
        </button>
      </div>
    </section>
  );
}
