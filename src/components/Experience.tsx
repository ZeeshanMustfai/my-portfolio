import { Briefcase, Calendar } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Eye4Tech Inc.',
      period: '2023 - Present',
      description:
        'Leading a team of 8 engineers in developing a cloud-native SaaS platform serving 50K+ users.',
      achievements: [
        'Architected microservices infrastructure reducing deployment time by 70%',
        'Implemented CI/CD pipelines improving release frequency from monthly to daily',
        'Mentored junior developers and conducted code reviews ensuring code quality',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Invozone',
      period: '2022 - 2023',
      description:
        'Core team member building a fintech application from MVP to Series A funding.',
      achievements: [
        'Developed RESTful APIs handling 1M+ daily requests',
        'Built responsive React applications with 99.9% uptime',
        'Integrated payment gateways processing $10M+ in transactions',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Digital Solutions Co.',
      period: '2020 - 2022',
      description:
        'Contributed to enterprise web applications for Fortune 500 clients.',
      achievements: [
        'Optimized database queries reducing response time by 50%',
        'Collaborated with cross-functional teams in Agile environment',
        'Delivered 15+ client projects on time and within budget',
      ],
    },
  ]

  return (
    <section
      id='experience'
      className='py-20 bg-slate-50 dark:bg-gray-800 transition-colors duration-300'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white'>
          Work Experience
        </h2>
        <div className='w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16'></div>

        <div className='relative'>
          <div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600'></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-start md:items-center w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className='w-full md:w-5/12'></div>

              <div className='absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg'>
                  <Briefcase className='w-6 h-6 text-white' />
                </div>
              </div>

              <div className='w-full md:w-5/12 ml-16 md:ml-0'>
                <div className='bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
                  <div className='flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2'>
                    <Calendar className='w-4 h-4' />
                    <span className='text-sm font-semibold'>{exp.period}</span>
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-1'>
                    {exp.title}
                  </h3>
                  <p className='text-purple-600 dark:text-purple-400 font-semibold mb-3'>
                    {exp.company}
                  </p>
                  <p className='text-gray-600 dark:text-gray-400 mb-4'>
                    {exp.description}
                  </p>
                  <ul className='space-y-2'>
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className='flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm'
                      >
                        <span className='text-blue-600 dark:text-blue-400 mt-1'>
                          •
                        </span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
