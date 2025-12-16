import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce web application with shopping cart, payment integration, and admin dashboard.',
      tags: ['ReactJS', 'TailwindCSS', 'Redux', 'REST API'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description: 'Mobile application for managing tasks and projects with real-time collaboration features.',
      tags: ['Flutter', 'Firebase', 'Dart'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization and reporting.',
      tags: ['VueJS', 'Chart.js', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Food Delivery App',
      description: 'Android mobile app for food ordering with real-time tracking and payment integration.',
      tags: ['Kotlin', 'Android Studio', 'Google Maps API'],
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio Website Builder',
      description: 'A drag-and-drop website builder for creating professional portfolios without coding.',
      tags: ['ReactJS', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile fitness app with workout plans, progress tracking, and health metrics monitoring.',
      tags: ['Flutter', 'SQLite', 'Health Kit'],
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop',
      github: '#',
      demo: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="glass-effect rounded-2xl overflow-hidden group hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs bg-primary-500/20 text-primary-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
