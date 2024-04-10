// pages/contact.js
"use client"
import React from 'react';
import { BiPhone } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

const ContactPage = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='min-h-screen bg-neutral-950 flex justify-center items-center'>
      <div className='grid lg:grid-cols-2'>
        <div className='space-y-4 text-white px-4'>
          <h2 data-aos="fade-in" className='text-gray-600 text-3xl sm:text-4xl'>Get in Touch</h2>
          <p data-aos="fade-in">I'd love if reached out to me. Even if it's just to say "Hey!". <br /> Don't hesitate! Drop me a line and i'll get back to you ASAP!</p>
          <span data-aos="fade-in" className='flex gap-2'><MdEmail size={30} />muhammadtayyabmt0@gmail.com</span>
          <span data-aos="fade-in" className='flex gap-1'><BiPhone size={30} />+923257248184</span>
        </div>

        <div className='px-4 pt-4 lg:pt-0'>
          <form data-aos="fade-in" onSubmit={handleSubmit} className='gap-4'>
            <label htmlFor="name" className='text-white'>Name</label>
            <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="email" className='text-white'>Email</label>
            <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

            <label htmlFor="message" className='text-white'>Message</label>
            <textarea id="message" name="message" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
