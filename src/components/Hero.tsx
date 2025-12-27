import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300'
    >
      <div className='max-w-6xl mx-auto px-6 py-20 text-center'>
        <div className='mb-8 animate-fade-in'>
          <div className='w-70 h-70 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl'>
            <div className='w-full h-full rounded-full bg-slate-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden'>
              <Image
                src='/portfolio.png'
                alt='Professional headshot'
                className='w-full object-cover '
                width={160}
                height={160}
              />
            </div>
          </div>
          <h1 className='text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
            Zeeshan Mustfai
          </h1>
          <p className='text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6'>
            Senior Software Engineer
          </p>
          <p className='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8'>
            Crafting scalable solutions and leading engineering teams with 5+
            years of expertise in full-stack development, cloud architecture,
            and modern web technologies.
          </p>
          <div className='flex gap-4 justify-center mb-8'>
            <a
              href='#contact'
              className='px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg'
            >
              Get In Touch
            </a>
            <a
              href='#projects'
              className='px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:border-blue-600 dark:hover:border-blue-400 transition-all transform hover:scale-105 shadow-lg'
            >
              View Projects
            </a>
          </div>
          <div className='flex gap-6 justify-center text-gray-600 dark:text-gray-400'>
            <a
              href='https://github.com/ZeeshanMustfai'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110'
            >
              <Github className='w-6 h-6' />
            </a>
            <a
              href='https://www.linkedin.com/in/zeeshan-akram-2bb4aaa9/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110'
            >
              <Linkedin className='w-6 h-6' />
            </a>
            <a
              href='mailto:zeeshanmustfai22@gmail.com'
              className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110'
            >
              <Mail className='w-6 h-6' />
            </a>
          </div>
        </div>
        <div className='mt-16 animate-bounce'>
          <a
            href='#about'
            className='inline-block text-gray-600 dark:text-gray-400'
          >
            <ChevronDown className='w-8 h-8' />
          </a>
        </div>
      </div>
    </section>
  )
}
