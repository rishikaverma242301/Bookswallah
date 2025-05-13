import React from 'react';

const authors = [
  { name: 'Sylvia Plath', image: '/Images/Author/one.jpg' },
  { name: 'Shashi Tharoor', image: '/Images/Author/two.jpg' },
  { name: 'Arundhati Roy', image: '/Images/Author/three.jpg' },
  { name: 'Stephen Coonts', image: '/Images/Author/four.jpg' },
  { name: 'William Wordsworth', image: '/Images/Author/five.jpg' },
  { name: 'Jane Austen', image: '/Images/Author/six.jpg' }
];

const Author = () => {
  return (
    <div className='font-myFont p-4'>
      <h1 className='text-red-600 text-center text-2xl mb-4'>Featured Author</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
        {authors.map((author, index) => (
          <div key={index} className='text-center'>
            <img 
              src={author.image} 
              alt={author.name} 
              className='w-32 h-40 object-cover mx-auto rounded-md shadow-md' 
            />
            <p className='mt-2 font-medium'>{author.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Author;
