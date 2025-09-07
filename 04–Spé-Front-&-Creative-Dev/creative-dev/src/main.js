import './style.css'
import { gsap } from 'gsap'

document.querySelector('#app').innerHTML = `
  <div class="hero">
    <h1>Welcome to Pierre CAILLET's recovery
    <br/> "04–Spé-Front-&-Creative-Dev"</h1>
    <p>
      This is a Vite Threejs GSAP project. I have to do this because I didn't valid my course "Spé Front & Creative Dev" after forgetting to send it.
    </p>
    <p>Scroll to Discover the Project</p>
  </div>
`

gsap.from('.hero h1', {
  opacity: 0,
  y: 30,
  filter: "blur(20px)",
  duration: 1,
  ease: 'power3.out'
})

gsap.from('.hero p', {
  opacity: 0,
  y: 15,
  filter: "blur(10px)",
  duration: 1,
  ease: 'power3.out',
  stagger: 0.2,
  delay: 0.3
})

setupCounter(document.querySelector('#counter'))
