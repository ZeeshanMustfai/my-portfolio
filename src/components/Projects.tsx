import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Task Management App',
      description:
        'Real-time collaborative task management tool with drag-and-drop interface and team workspaces.',
      image:
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Data visualization platform for real-time metrics and insights with customizable widgets.',
      image:
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'TypeScript', 'D3.js', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'AI Content Generator',
      description:
        'Machine learning powered content generation tool with natural language processing capabilities.',
      image:
        'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Multi-platform social media management tool with scheduling, analytics, and engagement tracking.',
      image:
        'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Next.js', 'GraphQL', 'Redis', 'AWS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Video Streaming Platform',
      description:
        'Scalable video streaming service with adaptive bitrate streaming and content delivery network.',
      image:
        'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'WebRTC', 'Node.js', 'Kubernetes'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ]

  return (
    <section
      id='projects'
      className='py-20 bg-white dark:bg-gray-900 transition-colors duration-300'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white'>
          Featured Projects
        </h2>
        <div className='w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4'></div>
        <p className='text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto'>
          A showcase of my recent work spanning web applications, data
          platforms, and innovative solutions
        </p>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-slate-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
            >
              <div className='relative overflow-hidden h-48'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 mb-4 text-sm'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className='flex gap-4'>
                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors'
                  >
                    <ExternalLink className='w-4 h-4' />
                    <span className='text-sm font-semibold'>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors'
                  >
                    <Github className='w-4 h-4' />
                    <span className='text-sm font-semibold'>Code</span>
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
