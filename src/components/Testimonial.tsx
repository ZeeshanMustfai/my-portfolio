import { Quote, Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO at TechCorp',
      image:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      content:
        'Alex is one of the most talented engineers I have worked with. Their ability to architect scalable solutions and lead teams is exceptional. A true asset to any organization.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at StartupXYZ',
      image:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      content:
        'Working with Alex was a game-changer for our product. They delivered high-quality code consistently and always went above and beyond to ensure project success.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Senior Developer',
      image:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      content:
        'Alex mentored me during my early career and taught me best practices that I still use today. Their code reviews were thorough and educational.',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'CEO at Digital Solutions',
      image:
        'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
      content:
        'Alex delivered our enterprise application ahead of schedule and exceeded all expectations. Their technical expertise and communication skills are outstanding.',
      rating: 5,
    },
  ]

  return (
    <section
      id='testimonials'
      className='py-20 bg-white dark:bg-gray-900 transition-colors duration-300'
    >
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white'>
          Client Testimonials
        </h2>
        <div className='w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4'></div>
        <p className='text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto'>
          What colleagues and clients say about working with me
        </p>

        <div className='grid md:grid-cols-2 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-slate-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative'
            >
              <Quote className='absolute top-6 right-6 w-12 h-12 text-blue-200 dark:text-blue-900 opacity-50' />
              <div className='flex items-center gap-4 mb-4'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-700'
                />
                <div>
                  <h4 className='font-bold text-gray-900 dark:text-white'>
                    {testimonial.name}
                  </h4>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    {testimonial.role}
                  </p>
                  <div className='flex gap-1 mt-1'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className='w-4 h-4 fill-yellow-400 text-yellow-400'
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className='text-gray-600 dark:text-gray-400 leading-relaxed italic'>
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
