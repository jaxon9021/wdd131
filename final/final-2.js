const albums = [
    {
      genre: ["Art Rock" , "Post-Rock"],
      title: 'Ants From Up There',
      spotifyUrl: "https://open.spotify.com/embed/album/21xp7NdU1ajmO1CX0w2Egd?utm_source=generator&theme=0"
    },
    {
      genre: ["Experimental Pop" , "Ambient"],
      title: 'Nectar',
      spotifyUrl: "https://open.spotify.com/embed/album/64lz1lQjJeeTRCnRF2sRm2?utm_source=generator&theme=0"
    },
    {
        genre: ["Emo" , "Indie Rock"] ,
        title: 'Cardinal',
        spotifyUrl: "https://open.spotify.com/embed/album/4hsC5IvasDOCrWwM8UQ3N4?utm_source=generator&theme=0" 
      },
      {
        genre: ["Cloud Rap" , "Experimental Pop"],
        title: 'Crest',
        spotifyUrl: "https://open.spotify.com/embed/album/3j75sKW2Lw9gUEhjNzPKn4?utm_source=generator&theme=0"
      },
      {
        genre: ["Alternative R&B" , "Synthpop"],
        title: 'Cupid Deluxe',
        spotifyUrl: "https://open.spotify.com/embed/album/1bsLkHcWAGUao6Z1dHOEIB?utm_source=generator&theme=0"
      },
      {
        genre: ["Avant-Garde Jazz" , "Art Pop"],
        title: "God's Trashmen Sent to Right the Mess",
        spotifyUrl: "https://open.spotify.com/embed/album/1bLHZHVjI6HiDs3bp2cfwe?utm_source=generator&theme=0" 
      },
      {
        genre: ["Experimental Hip Hop"],
        title: 'JOECHILLWORLD',
        spotifyUrl: "https://open.spotify.com/embed/album/77cXKIZnTzxiSQIsuxGx2G?utm_source=generator&theme=0" 
      },
      {
        genre: ["Emo" , "Pop Punk"],
        title: "You're Gonna Miss it All",
        spotifyUrl: "https://open.spotify.com/embed/album/4QElAwQufg6wCeyvpafqwA?utm_source=generator&theme=0" 
      },
      {
        genre: ["Alternative Rock" , "Art Rock"],
        title: 'OK Computer',
        spotifyUrl: "https://open.spotify.com/embed/album/6dVIqQ8qmQ5GBnJ9shOYGE?utm_source=generator&theme=0" 
      },
      {
        genre: ["Indie Rock" , "Alt-Country"],
        title: 'American Water',
        spotifyUrl: "https://open.spotify.com/embed/album/2GbNeQEg5fLtuxjr5nlIpc?utm_source=generator&theme=0" 
      },
      {
        genre: ["Hip Hop" , "Neo-Soul" , "Experimental"],
        title: 'Wolf',
        spotifyUrl: "https://open.spotify.com/embed/album/40QTqOBBxCEIQlLNdSjFQB?utm_source=generator&theme=0" 
      },
      {
        genre: ["Alt-Country" , "Indie Rock" , "Americana"],
        title: 'Yankee Hotel Foxtrot',
        spotifyUrl: "https://open.spotify.com/embed/album/4jVVAenBaHRF8w0MV6qKw7?utm_source=generator&theme=0" 
      }
      
  ];
  
 function getFilteredAlbums(genre) {
  if (genre === "filter") return albums;
  return albums.filter(album => album.genre.includes(genre));
}

function displayAlbums(filteredAlbums) {
  const container = document.getElementById('album-grid');
  container.innerHTML = ''; // Clear previous

  filteredAlbums.forEach(album => {
    const card = document.createElement('div');
    card.className = 'album-card';

    card.innerHTML = `
      <h3>${album.title}</h3>
      
      <iframe
        src="${album.spotifyUrl}"
        title="This is a selected album of the many loaded in, for more information on songs and artists play the album"
        width="100%"
        height="450px"
        style="border-radius:12px"
        frameborder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    `;

    container.appendChild(card);
  });
}

// Handle dropdown change
document.getElementById('genre-select').addEventListener('change', function () {
  const selected = this.value;
  const filtered = getFilteredAlbums(selected);
  displayAlbums(filtered);
});

// INITIAL DISPLAY
displayAlbums(albums);

  
  
  // Initialize
  updateAlbum();