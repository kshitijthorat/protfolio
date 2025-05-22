 
   
 const navbar = document.getElementById("mainNavbar");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.classList.remove("fixed-top");
      } else {
        navbar.classList.add("fixed-top");
      }
    });

 document.addEventListener("DOMContentLoaded", function () {
  const cardsWrapper = document.getElementById("cards-wrapper");
  const spinBtn = document.getElementById("spin-btn");
  const selectedCardContainer = document.getElementById("selected-card");
  const formalSection = document.getElementById("formal-bio");
  const friendsSection = document.getElementById("friends-section");
  const formalBtn = document.getElementById("formal-btn");
  const friendsBtn = document.getElementById("friends-btn");

  const friends = [
    {
      name: "Alex",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "The coding wizard! Always turns ideas into reality."
    },
    {
      name: "Sam",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Never seen someone debug life like this guy. Legend!"
    },
    {
      name: "Jordan",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      quote: "The most reliable teammate. Also makes great coffee!"
    },
    {
      name: "Taylor",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      quote: "Brings creativity to every project. A true innovator!"
    },
    {
      name: "Casey",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      quote: "Work ethic like no other. The ultimate problem-solver."
    },
    {
      name: "Riley",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      quote: "Makes complex things simple. A gifted teacher!"
    }
  ];

  // Create friend cards
  function createFriendCards() {
    cardsWrapper.innerHTML = '';
    friends.forEach((friend, index) => {
      const card = document.createElement('div');
      card.className = 'friend-card';
      card.innerHTML = `
        <img src="${friend.image}" alt="${friend.name}">
        <h3>${friend.name}</h3>
        <p>${friend.quote}</p>
      `;
      card.style.top = `${Math.random() * 40 + 20}px`;
      card.style.left = `${Math.random() * 60 + index * 50}px`;
      cardsWrapper.appendChild(card);
    });
  }

  createFriendCards();

  // Tab toggle
  formalBtn.addEventListener('click', () => {
    formalSection.classList.remove('hidden');
    friendsSection.classList.add('hidden');
    formalBtn.classList.add('active');
    friendsBtn.classList.remove('active');
  });

  friendsBtn.addEventListener('click', () => {
    friendsSection.classList.remove('hidden');
    formalSection.classList.add('hidden');
    friendsBtn.classList.add('active');
    formalBtn.classList.remove('active');
  });

  // Shuffle Animation
  spinBtn.addEventListener('click', () => {
    const allCards = document.querySelectorAll('.friend-card');
    selectedCardContainer.classList.add('hidden');

    // Reset selection
    allCards.forEach(c => c.classList.remove('selected'));

    // Apply shuffle animation class
    allCards.forEach((card, index) => {
      card.style.zIndex = index + 1;
      card.classList.add('shuffling');

      // Slight stagger for realism
      setTimeout(() => {
        card.classList.remove('shuffling');
      }, 800 + index * 100);
    });

    // Select one card randomly
    const randomIndex = Math.floor(Math.random() * friends.length);
    const selectedFriend = friends[randomIndex];

    // Highlight selected card after shuffle
    setTimeout(() => {
      allCards[randomIndex].classList.add('selected');

      // Show testimonial
      selectedCardContainer.innerHTML = `
        <div class="selected-card">
          <img src="${selectedFriend.image}" alt="${selectedFriend.name}">
          <h3>${selectedFriend.name} says:</h3>
          <p>"${selectedFriend.quote}"</p>
        </div>
      `;
      selectedCardContainer.classList.remove('hidden');
    }, 1500);
  });
});
 const songs = [
    {
      title: "Goosebumps",
      artist: "One Direction",
      reason: "It brings a nostalgic vibe with beautiful lyrics.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      audio: "goosebumps.mp3",
      video: "travis_Scott.mp4"
    },
    {
      title: "Out Of Time",
      artist: "The Weeknd",
      reason: "Love the retro 80s beat and high energy!",
      image: "https://i.scdn.co/image/ab67616d0000b273f08c5bcd4f7b3e2e327b4b0a",
      audio: "Out_of_Time.mp3",
      video: "weekend.mp4"
    },
    {
      title: "Viva La Vida",
      artist: "Coldplay",
      reason: "The orchestral arrangement is so powerful.",
      image: "https://i.scdn.co/image/ab67616d0000b27337c16a2178996e0b99b7cfd1",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      video: "https://www.w3schools.com/howto/mountain.mp4"
    }
  ];

  const carousel = document.getElementById('music-carousel');
  const titleEl = document.getElementById('song-title');
  const artistEl = document.getElementById('song-artist');
  const reasonEl = document.getElementById('song-reason');
  const audioPlayer = document.getElementById('audio-player');
  const audioSource = document.getElementById('audio-source');
  const bgVideo = document.getElementById('bg-video');
  const bgVideoSource = document.getElementById('bg-video-source');

  let currentSongIndex = 0;

  function loadSong(index) {
    const song = songs[index];
    titleEl.textContent = song.title;
    artistEl.textContent = `By: ${song.artist}`;
    reasonEl.textContent = song.reason;
    audioSource.src = song.audio;
    audioPlayer.style.display = 'block';
    audioPlayer.load();
    audioPlayer.play();

    // Change background video
    bgVideoSource.src = song.video;
    bgVideo.load();
    bgVideo.play();

    currentSongIndex = index;
  }

  // Create cards
  songs.forEach((song, index) => {
    const card = document.createElement('div');
    card.className = 'song-card';
    card.innerHTML = `
      <img src="${song.image}" alt="${song.title}" />
      <h3>${song.title}</h3>
      <p>${song.artist}</p>
    `;
    card.addEventListener('click', () => loadSong(index));
    carousel.appendChild(card);
  });

  // Arrow functionality
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    carousel.children[currentSongIndex].scrollIntoView({ behavior: 'smooth', inline: 'center' });
  });

  nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    carousel.children[currentSongIndex].scrollIntoView({ behavior: 'smooth', inline: 'center' });
  });