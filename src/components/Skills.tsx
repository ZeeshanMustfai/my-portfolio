import { Code2, Database, Cloud, GitBranch, Layers, Wrench } from 'lucide-react'

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: [
        'React',
        'TypeScript',
        'Vue.js',
        'Next.js',
        'Tailwind CSS',
        'Redux',
        'HTML5',
        'CSS3',
        'Material UI',
        'Responsive Design',
        'Shadcn/UI',
        'Ant Design',
        'Chakra UI',
      ],
    },
    {
      icon: Database,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Microservices'],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'NeonDB'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions'],
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Code Review', 'Agile'],
    },
    {
      icon: Wrench,
      title: 'Tools & Testing',
      skills: [
        'Jest',
        'Cypress',
        'Webpack',
        'Vite',
        'Postman',
        'Figma',
        'VS Code',
        'Linux',
      ],
    },
  ]

  return (
    <section
      id='skills'
      className='py-20 bg-slate-50 dark:bg-gray-800 transition-colors duration-300'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white'>
          Technical Skills
        </h2>
        <div className='w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4'></div>
        <p className='text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto'>
          A comprehensive toolkit built through years of hands-on experience and
          continuous learning
        </p>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                  <category.icon className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                  {category.title}
                </h3>
              </div>
              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className='px-3 py-1 bg-slate-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-300 transition-colors'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center'>
          <Layers className='w-16 h-16 mx-auto mb-4' />
          <h3 className='text-3xl font-bold mb-4'>Always Learning</h3>
          <p className='text-lg opacity-90 max-w-2xl mx-auto'>
            Technology evolves rapidly, and so do I. Currently exploring AI/ML
            integrations, serverless architectures, and Web3 technologies to
            stay at the cutting edge.
          </p>
        </div>
      </div>
    </section>
  )
}
