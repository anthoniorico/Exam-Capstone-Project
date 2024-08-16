import React from 'react';
import { useRouter } from 'next/router';
import '../app/globals.css';


const Home: React.FC = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/hospitals');
  };

  return (
    <div>
      <h1>Welcome to CAREFINDER</h1>      
      <h4>Your go-to platform for finding hospitals in Nigeria.</h4>
      <p><b>CAREFINDER</b> is a web application designed to help users find, export, 
      and share hospital information within Nigeria.</p>
      <p>It aims to address the challenge of accessing healthcare by providing an easy-to-use tool for locating hospitals based on user input or nearby cities.      
      </p>     
      <button onClick={handleGetStarted}>Get Started</button>      
    </div>
  );
};

export default Home;