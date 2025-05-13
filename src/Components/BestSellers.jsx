import React from 'react';

const trendingBooks = [
  {
    img: '/Images/Grid/two.jpg',
    title: 'The Psychology of Money (Tamil)',
    author: 'Housel, Morgan',
    rating: 5,
    price: '₹254',
    originalPrice: '₹325',
    discount: '22%',
  },
  {
    img: '/Images/Grid/one.jpg',
    title: 'Satanic Verses',
    author: 'Salman Rushdie',
    rating: 4,
    price: '₹1,454',
    originalPrice: '₹1,615',
    discount: '10%',
  },
  {
    img: '/Images/Grid/three.jpg',
    title: 'The Satanic Verses',
    author: 'Salman Rushdie',
    rating: 4,
    price: '₹1,350',
  },
  {
    img: '/Images/Grid/four.jpg',
    title: 'White Nights',
    author: 'Ronald Meyer',
    rating: 4,
    price: '₹159',
    originalPrice: '₹175',
    discount: '9%',
  },
  {
    img: '/Images/Grid/five.jpg',
    title: 'New Rules of War',
    author: 'Sean McFate',
    rating: 3,
    price: '₹1,013',
    originalPrice: '₹1,634',
    discount: '38%',
  },
  {
    img: '/Images/Grid/six.jpg',
    title: 'Vagabond (VIZBIG Edition), Vol. 1',
    author: 'Takehiko Inoue',
    rating: 5,
    price: '₹1,540',
    originalPrice: '₹2,299',
    discount: '33%',
  },
  {
    img: '/Images/Grid/seven.jpg',
    title: 'The Drone Age',
    author: 'Michael J Boyle',
    rating: 0,
    price: '₹2,154',
    originalPrice: '₹2,992',
    discount: '28%',
  },
];

const StarRating = ({ count }) => {
  return (
    <div className="text-yellow-500 text-sm">
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < count ? '★' : '☆'}</span>
      ))}
    </div>
  );
};

const NowTrending = () => {
  return (
    <div className="px-6 py-8 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Best Sellers</h2>
        <a href="#" className="text-red-500 font-medium hover:underline">See All</a>
      </div>

      <div className="flex gap-6 overflow-x-auto">
        {trendingBooks.map((book, idx) => (
          <div key={idx} className="w-40 shrink-0 text-center">
            <div className="relative">
              <img src={book.img} alt={book.title} className="rounded shadow-md w-full h-52 object-cover" />
              {book.discount && (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">
                  {book.discount}
                </div>
              )}
            </div>
            <h4 className="mt-2 text-sm font-medium text-gray-700">{book.title}</h4>
            <p className="text-xs text-gray-500">{book.author}</p>
            <StarRating count={book.rating} />
            <div className="mt-1 text-sm">
              <span className="text-red-600 font-semibold">{book.price}</span>
              {book.originalPrice && (
                <span className="text-gray-400 ml-1 line-through">{book.originalPrice}</span>
              )}
            </div>
            {book.rating === 0 && (
              <p className="text-xs text-gray-400 italic mt-1">No Review Yet</p>
            )}
          </div>
        ))}
      </div>
      
    
      <img src="/Images/Grid/manga.jpg" alt="" className='mt-20' />
</div>
    
  );
};

export default NowTrending;
