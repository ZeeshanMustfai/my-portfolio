'use client'
import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
} from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section
      id='contact'
      className='py-20 bg-slate-50 dark:bg-gray-800 transition-colors duration-300'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white'>
          Get In Touch
        </h2>
        <div className='w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4'></div>
        <p className='text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto'>
          Have a project in mind or want to discuss opportunities? Feel free to
          reach out!
        </p>

        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
              Contact Information
            </h3>
            <div className='space-y-6 mb-8'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Mail className='w-6 h-6 text-white' />
                </div>
                <div>
                  <p className='font-semibold text-gray-900 dark:text-white'>
                    Email
                  </p>
                  <a
                    href='mailto:zeeshanmustfai22@gmail.com'
                    className='text-blue-600 dark:text-blue-400 hover:underline'
                  >
                    Zeeshanmustfai22@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Phone className='w-6 h-6 text-white' />
                </div>
                <div>
                  <p className='font-semibold text-gray-900 dark:text-white'>
                    Phone
                  </p>
                  <a
                    href='tel:+1234567890'
                    className='text-blue-600 dark:text-blue-400 hover:underline'
                  >
                    +92 309 4516286
                  </a>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <MapPin className='w-6 h-6 text-white' />
                </div>
                <div>
                  <p className='font-semibold text-gray-900 dark:text-white'>
                    Location
                  </p>
                  <p className='text-gray-600 dark:text-gray-400'>
                    Lahore, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <h4 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
              Connect With Me
            </h4>
            <div className='flex gap-4'>
              <a
                href='https://github.com/ZeeshanMustfai'
                target='_blank'
                rel='noopener noreferrer'
                className='w-12 h-12 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all transform hover:scale-110 shadow-lg'
              >
                <Github className='w-6 h-6' />
              </a>
              <a
                href='https://www.linkedin.com/in/zeeshan-akram-2bb4aaa9/'
                target='_blank'
                rel='noopener noreferrer'
                className='w-12 h-12 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all transform hover:scale-110 shadow-lg'
              >
                <Linkedin className='w-6 h-6' />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='w-12 h-12 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white transition-all transform hover:scale-110 shadow-lg'
              >
                <Twitter className='w-6 h-6' />
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'
                >
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white'
                  placeholder='John Doe'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'
                >
                  Your Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white'
                  placeholder='john@example.com'
                />
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white'
                  placeholder='Project Inquiry'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white resize-none'
                  placeholder='Tell me about your project...'
                />
              </div>

              <button
                type='submit'
                className='w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2'
              >
                <Send className='w-5 h-5' />
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>

              {submitted && (
                <p className='text-center text-green-600 dark:text-green-400 font-semibold'>
                  {`Thanks for reaching out! I'll get back to you soon.`}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
