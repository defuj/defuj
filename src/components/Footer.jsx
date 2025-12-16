import { FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/defuj', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/defuj', label: 'GitHub' },
    { icon: FaInstagram, url: 'https://www.instagram.com/defuj17', label: 'Instagram' },
    { icon: FaTiktok, url: 'https://www.tiktok.com/@defuj.dev', label: 'TikTok' },
  ]

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">defuj.dev</h3>
            <p className="text-gray-400 mb-4">
              Crafting Seamless Experiences Across Web & Mobile Platforms
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass-effect rounded-lg hover:bg-primary-500/20 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-primary-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>Jakarta, Indonesia</p>
              <a 
                href="mailto:contact@defuj.dev"
                className="block hover:text-primary-400 transition-colors"
              >
                contact@defuj.dev
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Dede Fuji Abdul. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by defuj
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
