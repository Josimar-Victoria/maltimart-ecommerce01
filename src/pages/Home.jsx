import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

import heroImg from '../assets/images/hero-img.png'

import '../styles/home.css'
import Services from '../services/Services'

const Home = () => {
  const year = new Date().getFullYear()
  return (
    <Helmet title={'Home'}>
      <section className='hero_section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero_content'>
                <p className='hero_subtitle'>Trending produc in {year}</p>
                <h2>Make Your Interior more Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Temporibus voluptatem, placeat quae rerum autem blanditiis
                  impedit consequatur illo nam iure animi voluptatibus hic
                  labore ea, corporis non aspernatur voluptas eius.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className='shop_btn'>
                  <Link to='/shop'> SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className='hero_img'>
                <img src={heroImg} alt='hero' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className='trending_products'>
        <Container>
          <Row>
            <Col lg='12'>
              <h2 className='section_title'>Trending Products</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
