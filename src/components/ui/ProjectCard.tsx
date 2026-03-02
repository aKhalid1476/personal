import Image from "next/image";
import Link from "next/link";
import { Globe, GitBranch } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  websiteUrl?: string;
  githubUrl?: string;
  techStack: string[];
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  websiteUrl,
  githubUrl,
  techStack,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col border border-[#1a1a1a] rounded-xl overflow-hidden bg-[#0a0a0a] transition-colors hover:border-gray-800">
      <div className="relative w-full h-48 sm:h-56 bg-gradient-to-br from-gray-800 to-gray-900">
        {/* Placeholder image representation matching the dark aesthetic */}
        <div className="absolute inset-x-2 top-2 bottom-0 bg-black rounded-t-xl border border-gray-800 border-b-0 overflow-hidden shadow-2xl">
           <Image
            src={imageUrl}
            alt={`${title} screenshot`}
            fill
            className="object-cover object-top opacity-80"
          />
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-serif font-bold text-white">{title}</h3>
          <div className="flex gap-3 text-gray-400">
            {websiteUrl && (
              <Link href={websiteUrl} className="hover:text-white transition-colors" aria-label={`Visit ${title} website`}>
                <Globe className="w-5 h-5" />
              </Link>
            )}
            {githubUrl && (
              <Link href={githubUrl} className="hover:text-white transition-colors" aria-label={`${title} source code`}>
                <GitBranch className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="space-y-3">
          <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
            Tech Stack
          </span>
          <div className="flex gap-2 isolate">
            {techStack.map((tech) => (
              <div 
                key={tech} 
                className="w-8 h-8 rounded-full bg-gray-200 text-black flex items-center justify-center text-xs font-bold leading-none"
                title={tech}
              >
                {/* Simplifying icons to text initials since we don't have SVGs */}
                {tech.substring(0, 2).toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
