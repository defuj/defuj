const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="glass-effect rounded-2xl p-8 sm:p-12 space-y-6 hover:bg-white/10 transition-all duration-300">
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Hello! I'm <span className="text-primary-400 font-semibold">Dede Fuji Abdul</span>, 
                also known as <span className="text-primary-400 font-semibold">defuj</span> across various platforms. 
                I'm a passionate Front-End Developer with a keen eye for creating seamless and engaging user experiences.
              </p>
              
              <p className="text-lg">
                Since <span className="text-primary-400 font-semibold">2016</span>, I've been crafting web and mobile 
                applications that not only look great but also provide intuitive and efficient user interactions. 
                My journey in development has allowed me to master modern frameworks and technologies that power 
                today's digital experiences.
              </p>
              
              <p className="text-lg">
                I specialize in building responsive web applications using <span className="text-primary-400 font-semibold">ReactJS</span> and{' '}
                <span className="text-primary-400 font-semibold">VueJS</span>, styled with{' '}
                <span className="text-primary-400 font-semibold">TailwindCSS</span>. For mobile development, 
                I leverage <span className="text-primary-400 font-semibold">Flutter</span> and{' '}
                <span className="text-primary-400 font-semibold">Kotlin with Android Studio</span> to create 
                native-feeling applications that run smoothly across devices.
              </p>
              
              <p className="text-lg">
                My approach to development is centered around clean code, performance optimization, and creating 
                delightful user experiences. I believe that great software is not just about functionality—it's 
                about creating something that users love to interact with every day.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-700">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient">9+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient">50+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient">30+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient">100%</div>
                  <div className="text-sm text-gray-400">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
