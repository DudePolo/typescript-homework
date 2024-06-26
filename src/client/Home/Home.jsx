import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../components/Context/DarkModeContext';
import backgroundRegular from './milestone-background.jpeg';
import backgroundDark from './milestone-background-white.jpeg';
import './Home.css'

function Home() {
  const isDarkMode = useDarkMode(); // Use the dark mode state from context
  let skillList = [
    'JavaScript', 'React', 'Redux', 'Python', 'Git', 'Express',
    'NodeJS', 'Express', 'Mongoose/Mongo', 'Sequelize'
  ];

  const [skillDisplay, setSkillDisplay] = useState('');

  useEffect(() => {
    document.body.style.backgroundImage = `url(${isDarkMode ? backgroundDark : backgroundRegular})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';

    const intervalId = setInterval(() => {
      const randomSkillIndex = Math.floor(Math.random() * skillList.length);
      setSkillDisplay(skillList[randomSkillIndex]);
    }, 1500);

    // Cleanup function to clear interval
    return () => {
      clearInterval(intervalId);
    };
  }, [isDarkMode]); 

  return (
    <>
    <div className='title-container'>
      <h1>Milestone Project: Portfolio</h1>
        <h2>Providing Software Development that Inspires</h2>
          <h5>Passionate Junior Developer | Transforming neural 
            transmissions into camelCase logic</h5>
    </div>
    <div className="displayBox">
      <div className="skillDisplay">
      Knowledgeable in: {skillDisplay}
      </div>
      
    </div> 
    </>
  );
}


export default Home;