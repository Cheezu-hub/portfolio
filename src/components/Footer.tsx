import { Mail } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";

export function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-black mt-20">
      <div className="max-w-7xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-neutral-400 font-medium tracking-wide">
            © {new Date().getFullYear()} Rajana Chaitanya. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6 items-center">
          <Magnetic>
            <a 
              href="https://github.com/Cheezu-hub" 
              target="_blank" 
              rel="noreferrer" 
              className="text-neutral-400 hover:text-white transition-colors p-2 flex items-center justify-center"
            >
              <i className="fa-brands fa-github text-2xl"></i>
              <span className="sr-only">GitHub</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a 
              href="https://www.linkedin.com/in/rajana-chaitanya/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-neutral-400 hover:text-white transition-colors p-2 flex items-center justify-center"
            >
              <i className="fa-brands fa-linkedin-in text-2xl"></i>
              <span className="sr-only">LinkedIn</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rajanachaitanya29@gmail.com&su=Contact%20from%20Portfolio" 
              target="_blank"
              rel="noreferrer"
              className="text-neutral-400 hover:text-white transition-colors p-2 flex items-center justify-center"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
