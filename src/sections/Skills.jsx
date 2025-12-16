import { FaReact, FaVuejs, FaMobile, FaAndroid } from 'react-icons/fa'
import { SiTailwindcss, SiFlutter, SiKotlin, SiJavascript, SiTypescript, SiCss3, SiHtml5, SiGit } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: FaReact,
      skills: [
        { name: 'ReactJS', icon: FaReact, level: 95 },
        { name: 'VueJS', icon: FaVuejs, level: 90 },
        { name: 'TailwindCSS', icon: SiTailwindcss, level: 95 },
        { name: 'JavaScript', icon: SiJavascript, level: 90 },
        { name: 'TypeScript', icon: SiTypescript, level: 85 },
        { name: 'HTML5', icon: SiHtml5, level: 95 },
        { name: 'CSS3', icon: SiCss3, level: 95 },
      ]
    },
    {
      title: 'Mobile Development',
      icon: FaMobile,
      skills: [
        { name: 'Flutter', icon: SiFlutter, level: 90 },
        { name: 'Android Studio', icon: FaAndroid, level: 85 },
        { name: 'Kotlin', icon: SiKotlin, level: 80 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: SiGit,
      skills: [
        { name: 'Git', icon: SiGit, level: 90 },
        { name: 'REST API', level: 85 },
        { name: 'Responsive Design', level: 95 },
        { name: 'UI/UX Design', level: 85 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          My <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title}
              className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-500/20 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && <skill.icon className="w-4 h-4 text-gray-400" />}
                        <span className="text-sm text-gray-300">{skill.name}</span>
                      </div>
                      {skill.level && <span className="text-xs text-gray-500">{skill.level}%</span>}
                    </div>
                    {skill.level && (
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
