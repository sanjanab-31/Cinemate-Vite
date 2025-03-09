export const MovieList = () => {
  const movies = [
    {
      title: 'Anbesivam',
      description: 'Anbe Sivam follows the events of a journey from Bhubaneswar to Chennai undertaken by two men of contrasting personalities: Nallasivam, a physically challenged and witty socialist, and Anbarasu, a commercial director who supports capitalism and globalisation.',
      imgSrc: 'src/assets/Anbesivam.jpg',
      imdbLink: 'https://www.imdb.com/title/tt0367495/'
    },
    {
      title: 'Amaran',
      description: 'A true-life story of Major Mukund Varadarajan, a commissioned officer in the Indian Army`s Rajput Regiment, who was posthumously awarded the Ashok Chakra for his valor during a counterterrorism operation while on deputation to the 44th Rashtriya Rifles battalion in Jammu and Kashmir.',
      imgSrc: 'src/assets/Amaran.webp',
      imdbLink: 'https://www.imdb.com/title/tt27118357/'
    },
    {
      title: 'Leo',
      description: 'Parthiban is a mild-mannered cafe owner who fends off a gang of murderous thugs and gains attention from a drug cartel claiming he was once a part of them.',
      imgSrc: 'src/assets/leoMovie.avif',
      imdbLink: 'https://www.imdb.com/title/tt27487934/'
    },
    {
      title: 'Dragon',
      description: 'Parthiban is a mild-mannered cafe owner who fends off a gang of murderous thugs and gains attention from a drug cartel claiming he was once a part of them.',
      imgSrc: 'src/assets/Dragon.avif',
      imdbLink: 'https://in.bookmyshow.com/chennai/movies/dragon/ET00430623'
    },
    {
      title: 'Leo',
      description: 'Parthiban is a mild-mannered cafe owner who fends off a gang of murderous thugs and gains attention from a drug cartel claiming he was once a part of them.',
      imgSrc: 'src/assets/leoMovie.avif',
      imdbLink: 'https://www.imdb.com/title/tt27487934/'
    }
  ];

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href={movie.imdbLink} target="_blank" rel="noreferrer">
              <img className="rounded-t-lg w-full  object-cover" src={movie.imgSrc} alt={`${movie.title} Image`} />
            </a>
            <div className="p-5">
              <a href={movie.imdbLink} target="_blank" rel="noreferrer">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {movie.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {movie.description}
              </p>
              <a 
                href={movie.imdbLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg 
                  className="rtl:rotate-180 w-3.5 h-3.5 ml-2" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 14 10"
                >
                  <path 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
