const albums = [
    {
      title: 'Ants From Up There',
      spotifyUrl: "https://open.spotify.com/embed/album/21xp7NdU1ajmO1CX0w2Egd?utm_source=generator&theme=0"
    },
    {
      title: 'Nectar',
      spotifyUrl: "https://open.spotify.com/embed/album/64lz1lQjJeeTRCnRF2sRm2?utm_source=generator&theme=0"
    },
    {
        title: 'Cardinal',
        spotifyUrl: "https://open.spotify.com/embed/album/4hsC5IvasDOCrWwM8UQ3N4?utm_source=generator&theme=0" 
      },
      {
        title: 'Crest',
        spotifyUrl: "https://open.spotify.com/embed/album/3j75sKW2Lw9gUEhjNzPKn4?utm_source=generator&theme=0"
      },
      {
        title: 'Cupid Deluxe',
        spotifyUrl: "https://open.spotify.com/embed/album/1bsLkHcWAGUao6Z1dHOEIB?utm_source=generator&theme=0"
      },
      {
        title: "God's Trashmen Sent to Right the Mess",
        spotifyUrl: "https://open.spotify.com/embed/album/1bLHZHVjI6HiDs3bp2cfwe?utm_source=generator&theme=0" 
      },
      {
        title: 'JOECHILLWORLD',
        spotifyUrl: "https://open.spotify.com/embed/album/77cXKIZnTzxiSQIsuxGx2G?utm_source=generator&theme=0" 
      },
      {
        title: "You're Gonna Miss it All",
        spotifyUrl: "https://open.spotify.com/embed/album/4QElAwQufg6wCeyvpafqwA?utm_source=generator&theme=0" 
      },
      {
        title: 'OK Computer',
        spotifyUrl: "https://open.spotify.com/embed/album/6dVIqQ8qmQ5GBnJ9shOYGE?utm_source=generator&theme=0" 
      },
      {
        title: 'American Water',
        spotifyUrl: "https://open.spotify.com/embed/album/2GbNeQEg5fLtuxjr5nlIpc?utm_source=generator&theme=0" 
      },
      {
        title: 'Wolf',
        spotifyUrl: "https://open.spotify.com/embed/album/40QTqOBBxCEIQlLNdSjFQB?utm_source=generator&theme=0" 
      },
      {
        title: 'Yankee Hotel Foxtrot',
        spotifyUrl: "https://open.spotify.com/embed/album/4jVVAenBaHRF8w0MV6qKw7?utm_source=generator&theme=0" 
      }
      
  ];
  
  let currentIndex = 0;
  
  const spotifyPlayer = document.getElementById('spotify-player');
  const title = document.getElementById('title');
  
  function updateAlbum() {
    const album = albums[currentIndex];
    title.textContent = album.title;
    spotifyPlayer.src = album.spotifyUrl;
  }
  
  document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + albums.length) % albums.length;
    updateAlbum();
  });
  
  document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % albums.length;
    updateAlbum();
  });

  document.getElementById('random').addEventListener('click', () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * albums.length);
    } while (newIndex === currentIndex); // avoid repeating the same album
    currentIndex = newIndex;
    updateAlbum();
  });
  
  // Initialize
  updateAlbum();