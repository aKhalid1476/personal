import { Github, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mb-24">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl text-white font-serif font-bold tracking-tight">Abdullah Khalid</h1>
        <div className="flex gap-4 text-gray-400">
          <Link href="#" className="hover:text-white transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-white transition-colors" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="hover:text-white transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
      
      <ul className="space-y-2 text-gray-400 text-lg">
        <li className="flex gap-2">
          <span>□</span>
          <span>'30 Software Engineering @ UWaterloo'.</span>
        </li>
        <li className="flex gap-2">
          <span>□</span>
          <span>SWE @ Orbital and WARG.</span>
        </li>
        <li className="flex gap-2">
          <span>□</span>
          <span>Building the next big Muslim startup.</span>
        </li>
      </ul>
    </section>
  );
}
