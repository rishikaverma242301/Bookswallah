import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-white text-black border-t border-gray-200 px-8 py-6 text-2xl'>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-6 text-sm'>
        {/* Company */}
        <div>
          <h4 className='font-semibold text-red-600 mb-2'>Company</h4>
          <ul className='space-y-1'>
            <li>About Us</li>
            <li>Career</li>
            <li>Blog</li>
            <li>YT Featured Video</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className='font-semibold text-red-600 mb-2'>Policies</h4>
          <ul className='space-y-1'>
            <li>Privacy Policies</li>
            <li>Terms of Use</li>
            <li>Secure Shopping</li>
            <li>Copyright Policy</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className='font-semibold text-red-600 mb-2'>Help</h4>
          <ul className='space-y-1'>
            <li>Payment</li>
            <li>Shipping</li>
            <li>Return</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Misc */}
        <div>
          <h4 className='font-semibold text-red-600 mb-2'>Misc</h4>
          <ul className='space-y-1'>
            <li>Affiliate</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* App Download */}
        <div>
          <h4 className='font-semibold text-red-600 mb-2'>Download Our App</h4>
          <img
            src="/Images/Bookscarousel/googleplay.png"
            alt="Google Play"
            className='w-32 mt-2'
          />
        </div>
      </div>

      {/* Social Icons */}
      <div className='flex justify-center mt-6 space-x-4 text-xl'>
        <FaFacebookF className='text-blue-700' />
        <FaLinkedinIn className='text-blue-600' />
        <FaPinterestP className='text-red-600'/>
        <FaYoutube className='text-red-600' />
        <FaInstagram className='text-pink-500' />
      </div>

      {/* Copyright */}
      <div className='text-center text-gray-600 text-sm mt-4'>
        Copyright © 2025 . Bookswagon.com. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
