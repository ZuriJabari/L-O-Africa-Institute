// src/pages/impact.js
import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'

const Impact = () => {
  return (
    <Layout>
      <div style={{ width: '100%' }}>
        <section style={{
          position: 'relative',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center'
        }}>
          <StaticImage
            src="../assets/images/impact-hero.jpg"
            alt="Impact Hero"
            placeholder="blurred"
            layout="fullWidth"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1
            }}
          />
          <div style={{
            background: 'rgba(0, 0, 0, 0.5)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1
          }} />
          <div style={{ maxWidth: '800px', padding: '0 20px', position: 'relative' }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Making a Difference</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Transforming communities through sustainable solutions</p>
            <Link 
              to="/contact"
              style={{
                padding: '1rem 2rem',
                fontSize: '1.2rem',
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
            >
              Learn More
            </Link>
          </div>
        </section>

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 20px' }}>
          <div style={{ marginBottom: '4rem' }}>
            <h2>Our Impact in Numbers</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginTop: '2rem'
            }}>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-color)' }}>1M+</h3>
                <p>Lives Impacted</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-color)' }}>50+</h3>
                <p>Countries Reached</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-color)' }}>100+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Impact