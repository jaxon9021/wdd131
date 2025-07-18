const albums = [
    {
      cover: 'https://via.placeholder.com/300x300?text=Your+Spotify+Track',
      title: 'Custom Track',
      spotifyUrl: 'https://open.spotify.com/embed/track/7fyG2MquxykO3Ufiku1Dj2?utm_source=generator'
    },
    {
      cover: 'https://via.placeholder.com/300x300?text=Another+Track',
      title: 'Another Track',
      spotifyUrl: 'https://open.spotify.com/embed/track/2TpxZ7JUBn3uw46aR7qd6V'
    }
  ];
  
  let currentIndex = 0;
  
  const albumCover = document.getElementById('album-cover');
  const spotifyPlayer = document.getElementById('spotify-player');
  
  function updateAlbum() {
    const album = albums[currentIndex];
    albumCover.src = album.cover;
    albumCover.alt = album.title;
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
  
  // Initialize
  updateAlbum();
  