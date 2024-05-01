import React from 'react';
import '../AboutUs.css';
import roshan from '../images/roshan.png';
import rohith from '../images/rohith.jpg'
const founders = [
  {
    name: 'Rohith',
    image: rohith, // Replace with image path
    bio: "I'm a curious and tech-savvy student fueled by a passion for full-stack development and a specific technology called tect. I'm constantly learning, eager to expand my knowledge, and excited to explore how tect can be applied within full-stack development. Whether it's building personal projects, contributing to open-source projects, or seeking opportunities to combine these skills, I'm driven to make my mark in the tech world."
  },
  {
    name: 'Roshan',
    image: roshan, // Replace with image path
    bio: 'Passionate about building both structures and businesses, I am driven by a vision to create impactful ventures that leave a lasting legacy. With a diverse skill set encompassing project management, entrepreneurship, and strategic vision, I thrive on turning ideas into reality. My dedication to innovation, coupled with a commitment to sustainability and community engagement, guides every endeavor. Whether constructing awe-inspiring buildings or launching groundbreaking businesses, my goal is to shape the future positively. Join me on this journey of creativity, collaboration, and growth as we build a better tomorrow together.'
  }
];

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Apartamentease</h1>
      <div className='ab'>
      <p>ApartmentEase aims to revolutionize the way residents and property managers experience apartment living. This user-friendly web platform bridges the gap between traditional apartment management and the convenience of modern tools. It fosters a more connected and streamlined living environment for everyone involved.</p>
      </div>
      <section className="founders">
       <div>
        <h2 style={{ textAlign: 'center' }}>Our Founders</h2>
        </div>
        <div className='flex'>
        {founders.map((founder) => (
          <article className="founder" key={founder.name}>
            <img src={founder.image} alt={founder.name} />
            <h3>{founder.name}</h3>
            <p>{founder.bio}</p>
          </article>
        ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;