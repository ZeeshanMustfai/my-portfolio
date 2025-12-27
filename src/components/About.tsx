import { Award, Code, Rocket, Users } from 'lucide-react'

export function About() {
  const achievements = [
    {
      icon: Code,
      title: 'Clean Code Advocate',
      description:
        'Championing best practices and maintainable architecture across teams',
    },
    {
      icon: Rocket,
      title: 'Performance Optimizer',
      description:
        'Reduced application load times by 60% through strategic optimization',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description:
        'Mentored 15+ junior developers and led cross-functional teams',
    },
    {
      icon: Award,
      title: 'Innovation Driver',
      description: 'Shipped 20+ features that increased user engagement by 40%',
    },
  ]

  return (
    <section
      id='about'
      className='py-20 bg-white dark:bg-gray-900 transition-colors duration-300'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white'>
          About Me
        </h2>
        <div className='w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12'></div>

        <div className='grid md:grid-cols-2 gap-12 mb-16'>
          <div>
            <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
              My Story
            </h3>
            <p className='text-gray-600 dark:text-gray-400 mb-4 leading-relaxed'>
              {`Senior Software Engineer with 5+ years of experience and deep expertise
              in React.js, Next.js, GraphQL, and Node.js. I have strong
              experience designing high-performance applications, integrating
              advanced APIs, and optimizing systems for speed and reliability.
              `}
            </p>
            <p className='text-gray-600 dark:text-gray-400 mb-4 leading-relaxed'>
              {`From planning and architecture to development and deployment, I’m comfortable owning the full lifecycle of a product. I’ve also led development teams, ensured smooth releases across platforms, and worked closely with designers and stakeholders to deliver products that are both functional and easy to use.`}
            </p>
          </div>

          <div>
            <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
              Technical Expertise
            </h3>
            <div className='space-y-4'>
              <div>
                <p className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                  Frontend Development
                </p>
                <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                  <div
                    className='bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full'
                    style={{ width: '95%' }}
                  ></div>
                </div>
              </div>
              <div>
                <p className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                  Backend Development
                </p>
                <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                  <div
                    className='bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full'
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <div>
                <p className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                  Cloud Architecture
                </p>
                <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                  <div
                    className='bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full'
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>
              <div>
                <p className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                  DevOps & CI/CD
                </p>
                <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                  <div
                    className='bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full'
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className='p-6 bg-slate-50 dark:bg-gray-800 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
            >
              <achievement.icon className='w-12 h-12 text-blue-600 dark:text-blue-400 mb-4' />
              <h4 className='text-xl font-bold mb-2 text-gray-900 dark:text-white'>
                {achievement.title}
              </h4>
              <p className='text-gray-600 dark:text-gray-400'>
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
