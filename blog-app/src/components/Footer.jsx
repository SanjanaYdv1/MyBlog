import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6">
            <div className="max-w-6xl mx-auto text-center">
                <ul className="flex justify-center space-x-6 mb-4">
                    <li><a href="/about" className="text-white hover:underline transition duration-300">About Us</a></li>
                    <li><a href="/services" className="text-white hover:underline transition duration-300">Services</a></li>
                    <li><a href="/contact" className="text-white hover:underline transition duration-300">Contact</a></li>
                </ul>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300"><FaFacebook size={24} /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300"><FaTwitter size={24} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300"><FaInstagram size={24} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300"><FaLinkedin size={24} /></a>
                </div>
               
                <p className="mb-2 mt-4 text-white">&copy; {new Date().getFullYear()} MyBlogs. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;