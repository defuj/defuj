import { FaLinkedin, FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa'

const Hero = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/defuj', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/defuj', label: 'GitHub' },
    { icon: FaInstagram, url: 'https://www.instagram.com/defuj17', label: 'Instagram' },
    { icon: FaTiktok, url: 'https://www.tiktok.com/@defuj.dev', label: 'TikTok' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary-500/20 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            Hi, I'm <span className="text-gradient">Dede Fuji Abdul</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Front-End Developer
          </p>
          <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Crafting Seamless Experiences Across Web & Mobile Platforms
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-4 rounded-full hover:bg-primary-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-300 hover:text-primary-400 transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-500 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 glass-effect rounded-lg font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
