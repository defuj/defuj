import { FaBriefcase, FaCalendar } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Front-End Developer',
      company: 'Tech Innovations Inc.',
      period: '2021 - Present',
      location: 'Remote',
      description: [
        'Lead front-end development team of 5 developers',
        'Architected and implemented scalable React applications',
        'Improved application performance by 40% through optimization',
        'Mentored junior developers and conducted code reviews',
      ],
      technologies: ['ReactJS', 'TypeScript', 'TailwindCSS', 'Redux'],
    },
    {
      title: 'Front-End Developer',
      company: 'Digital Solutions Ltd.',
      period: '2019 - 2021',
      location: 'Jakarta, Indonesia',
      description: [
        'Developed responsive web applications using Vue.js and React',
        'Collaborated with UX designers to implement pixel-perfect designs',
        'Integrated RESTful APIs and third-party services',
        'Participated in agile development processes',
      ],
      technologies: ['VueJS', 'ReactJS', 'SCSS', 'REST API'],
    },
    {
      title: 'Mobile Developer',
      company: 'AppTech Solutions',
      period: '2018 - 2019',
      location: 'Jakarta, Indonesia',
      description: [
        'Built native Android applications using Kotlin',
        'Developed cross-platform mobile apps with Flutter',
        'Implemented complex UI animations and transitions',
        'Worked closely with backend team for API integration',
      ],
      technologies: ['Flutter', 'Kotlin', 'Android Studio', 'Firebase'],
    },
    {
      title: 'Junior Web Developer',
      company: 'Creative Web Studio',
      period: '2016 - 2018',
      location: 'Jakarta, Indonesia',
      description: [
        'Created responsive websites and landing pages',
        'Maintained and updated existing web applications',
        'Learned modern JavaScript frameworks and best practices',
        'Collaborated with designers and backend developers',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="glass-effect rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-primary-400 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-300 mb-1">
                    <FaBriefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaCalendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                    <span className="text-gray-600">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-400 flex items-start gap-2">
                    <span className="text-primary-400 mt-1.5">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
