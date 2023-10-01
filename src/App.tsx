import './App.css'
import { motion } from 'framer-motion';
import { styled } from 'styled-components';


const Container = styled(motion.div)``;

const Hero = styled(motion.h1)`
  font-family: Montserrat;
`;

function App() {
 
 
  return (
    <Container
    animate={{
      y: [-100, 0],
    }}
    transition={{
      duration: 0.8,
      ease:[0, 0.9, 0.25, 1]
    }}
    
    >
      <Hero
        animate={{
          color: ['#FFFFFF', '#3afcff'],
        }}
        transition={{
          delay: 1,
          duration: 2, 
          ease: [0, 0.9, 0.25, 1]
        }}
      >Pratik Gurudatt</Hero>
    </Container>
  )
}

export default App
