import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos = "fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
               I’m Shree Bhakta Subedi, a Machine Learning and Deep Learning enthusiast with a strong academic background, achieving a Dean’s List honor from Pokhara University.
                </p>
                <p>
                   During my bachelor’s studies, I completed several impactful projects, including:

                    Smart Attendance System – An automated system using face recognition.

                    Melanoma Cancer Detection – A deep learning-based project for skin cancer detection.

                    Face Mask Recognition – A real-time computer vision model for safety monitoring.

                    I also completed a Python with Data Science training at Sipayala Info Tech, where I gained hands-on experience in data analysis, visualization, and machine learning model development.
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About