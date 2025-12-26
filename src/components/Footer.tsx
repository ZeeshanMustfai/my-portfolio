import { Heart, ArrowUp } from 'lucide-react'

export function Footer() {
  //   const scrollToTop = () => {
  //     window.scrollTo({ top: 0, behavior: 'smooth' })
  //   }

  return (
    <footer className='bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='flex flex-col items-center text-center'>
          <button
            // onClick={scrollToTop}
            className='mb-6 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-110 shadow-lg'
            aria-label='Scroll to top'
          >
            <ArrowUp className='w-6 h-6' />
          </button>

          <h3 className='text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
            Zeeshan Mustfai
          </h3>
          <p className='text-gray-400 mb-6 max-w-md'>
            Senior Software Engineer crafting exceptional digital experiences
          </p>

          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Made with</span>
            <Heart className='w-4 h-4 text-red-500 fill-red-500' />
            <span>by Zeeshan Mustfai</span>
          </div>

          <div className='mt-6 pt-6 border-t border-gray-800 w-full'>
            <p className='text-gray-500 text-sm'>
              © {new Date().getFullYear()} Zeeshan Mustfai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
