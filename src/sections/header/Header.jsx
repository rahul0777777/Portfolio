import HeaderImage from '../../assets/header.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'
import { useEffect } from 'react'

const Header = () => {
  useEffect(() => {
    AOS.init({duration:2000})
  },[])
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos = "fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos = "fade-up">Shree Bhakta Subedi</h3>
        <p data-aos = "fade-up">
        I am a Machine Learning enthusiast with a strong interest in building intelligent systems that solve real-world problems.
         I enjoy working with data, algorithms, and predictive models to uncover insights and improve decision-making.
         My goal is to keep learning and contribute to the growing field of artificial intelligence and data science.
        </p>
        <div className="header__cta" data-aos = "fade-up">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header