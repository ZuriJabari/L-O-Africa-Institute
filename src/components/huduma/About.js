import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Hero = styled.div`
  position: relative;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.accent}
    );
    border-radius: 2px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.accent}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled(motion.section)`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xl} 0;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: 2.5rem;
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.8;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const Feature = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: ${({ theme }) => theme.animations.transition};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
  
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: 1.5rem;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const Stat = styled(motion.div)`
  h4 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  
  p {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.125rem;
  }
`;

const About = () => {
  return (
    <Container>
      <Hero>
        <Title
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Huduma Champions
        </Title>
        <Subtitle>
          Transforming public service delivery across Africa through innovation and excellence
        </Subtitle>
      </Hero>

      <Section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Our Vision</h2>
        <p>
          Huduma Champions represents a bold initiative to revolutionize public
          service delivery in Africa. We believe in empowering public servants
          with the tools, knowledge, and support they need to create
          meaningful change in their communities.
        </p>
      </Section>

      <Stats>
        {[
          { number: '500+', label: 'Champions Trained' },
          { number: '15', label: 'African Countries' },
          { number: '1M+', label: 'Citizens Impacted' }
        ].map((stat, index) => (
          <Stat
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <h4>{stat.number}</h4>
            <p>{stat.label}</p>
          </Stat>
        ))}
      </Stats>

      <Grid>
        {[
          {
            title: 'Innovation Hub',
            description: 'A space for champions to collaborate and innovate on public service solutions'
          },
          {
            title: 'Digital Transformation',
            description: 'Leveraging technology to improve service delivery efficiency'
          },
          {
            title: 'Community Impact',
            description: 'Creating lasting positive change in African communities'
          }
        ].map((feature, index) => (
          <Feature
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </Feature>
        ))}
      </Grid>
    </Container>
  );
};

export default About; 