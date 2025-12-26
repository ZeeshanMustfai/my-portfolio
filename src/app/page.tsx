import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navigation } from '@/components/Navigation'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Testimonials } from '@/components/Testimonial'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
