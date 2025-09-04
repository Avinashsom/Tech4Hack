import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/TECH4HACK.png"
                alt="Tech4Hack Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-bold text-xl text-foreground">Tech4Hack</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering the next generation of developers and innovators through community,
              collaboration, and cutting-edge hackathons.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/tech4hack/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              </a>
              <a  target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/tech4hack.community/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              </a>
              <a href="mailto:tech4hack.community@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              </a>
            </div>

          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="/team" className="text-muted-foreground hover:text-foreground transition-colors">Team</a></li>
              <li><a href="/hackathons" className="text-muted-foreground hover:text-foreground transition-colors">Hackathons</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Discord</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Slack</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Newsletter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Events</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Tech4Hack. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}