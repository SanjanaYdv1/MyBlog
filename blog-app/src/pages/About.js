import React from 'react';
import Base from '../components/Base';

const About = () => {
  return (
    <Base>
    <div className='bg-cover bg-center' style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5gmJoBRpMrXT25zRvk7GvKiW6r4tXR3y1A&s)' }}>
      <div className="max-w-2xl mx-auto p-6 text-white" >
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">Welcome to MyBlogs!</p>
        <p className="mb-4">
          Here at MyBlogs, we believe that every story matters. Our mission is to create a vibrant community where ideas flourish, and creativity knows no bounds. Whether you're a seasoned writer, an aspiring blogger, or simply someone who loves to read, you’ll find a little something for everyone here.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Our Journey</h2>
        <p className="mb-4">
          Founded in 2024, MyBlogs started as a personal project to share thoughts and experiences. Over the years, it has evolved into a platform that celebrates diverse voices and perspectives. We cover a wide range of topics, including travel, lifestyle, technology, wellness, and more, and we’re always on the lookout for fresh ideas and new contributors.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Meet the Team</h2>
        <p className="mb-4">
          Our team is made up of passionate writers and creators who are dedicated to bringing you high-quality content. Each member brings their unique flair and expertise, ensuring that our blog remains a rich tapestry of insights and inspiration.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Join Us!</h2>
        <p className="mb-4">
          We invite you to join our community! Subscribe to our newsletter for the latest updates, follow us on social media, and don’t hesitate to reach out with your thoughts, feedback, or even guest post ideas. Together, let’s embark on this exciting journey of exploration and creativity!
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="mb-4">
          Have questions or want to collaborate? Feel free to <a href="/contact" className="text-blue-500 hover:underline">get in touch</a>. We’d love to hear from you!
        </p>
        <p className="mt-4">Thank you for visiting MyBlogs. Happy reading!</p>
      </div>
      </div>
    </Base>
  );
}

export default About;