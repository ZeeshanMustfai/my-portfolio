import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: [
        'React',
        'Node.js',
        'MongoDB',
        'Stripe',
        'Tailwind CSS',
        'GraphQL',
        'Shopify',
      ],
      liveUrl: 'https://www.laballey.com/',
      // githubUrl: 'https://github.com',
    },
    {
      title: 'HumanOp AI Coaching Platform',
      description:
        'HumanOp helps you see beyond the surface to unlock the potential in yourself and your team using AI',
      image:
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: [
        'Next.js',
        'Laravel',
        'Tailwind CSS',
        'OpenAI API',
        'AWS',
        'MySQL',
      ],
      liveUrl: 'https://app.humanop.com/',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Pabau CRM System',
      description:
        'Pabau is a comprehensive healthcare management system currently operating in over 65 countries worldwide.',
      image:
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: [
        'Next.js',
        'TypeScript',
        'GraphQL',
        'PostgreSQL',
        'Prisma',
        'AWS',
        'Docker',
        'Jest',
        'NestJS',
        'Redis',
      ],
      liveUrl: 'https://pabau.com/',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Games Industry Network',
      description:
        'GIN is a network for games industry executives with a heavy focus on and implemented tools for BizDev',
      image:
        'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: [
        'Next.js',
        'Tailwind CSS',
        'Laravel',
        'Docker',
        'MySQL',
        'AWS',
        'Vercel',
        'Pusher',
      ],
      liveUrl: 'https://gamesindustry.network/landing',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Gart Gallery Art Marketplace',
      description:
        'The Gart Gallery is an online marketplace for buying and selling digital art pieces as NFTs.',
      image:
        'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Next.js', 'GraphQL', 'Tailwind CSS', 'Vercel', 'Redux Toolkit'],
      liveUrl: 'https://www.gartgallery.it/',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Rangde Pakistan News Portal',
      description:
        'Its a complete news portal for Pakistan news with admin panel to manage news articles, categories, and users.',
      image:
        'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: [
        'Next js',
        'Payload cms',
        'Node.js',
        'Tailwind CSS',
        'Vercel',
        'NeonDB',
      ],
      liveUrl: 'https://www.rangdepakistan.com/',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Royal Canin Pet Care Platform',
      description:
        'Since 1968 Royal Canin has worked to make nutrition cats and dogsfirst medicine. It is our way of making a better world for pets.',
      image:
        'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React js', 'Custom CMS', 'Material UI', 'AWS', 'Docker'],
      liveUrl: 'https://www.royalcanin.com/us',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Stride UP',
      description:
        'Finance that feels like home Halal alternative to a mortgage? It’s time to buy your home without compromising your values.',
      image:
        'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Next js', 'Chakra UI'],
      liveUrl: 'https://strideup.co/   ',
      githubUrl: 'https://github.com',
    },
    {
      title: 'Get My Charter Travel Platform',
      description:
        'More than 40,000 private yacht rentals and bareboat charters near me and worldwide for your next boating trip',
      image:
        'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Next js', 'Chakra UI', 'Material UI', 'Vercel'],
      liveUrl: 'https://discover-world-teal.vercel.app/',
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
                  {/* <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors'
                  >
                    <Github className='w-4 h-4' />
                    <span className='text-sm font-semibold'>Code</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
