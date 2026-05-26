/* ==========================================================================
   Spotify Clone - Core Application Script
   Author: Antigravity Pair Programmer
   Description: Core playback systems, state machines, storage synchronize,
                responsive page layouts, Canvas Visualizers, and dynamic color.
   ========================================================================== */

// 1. Tracks Catalogue (15 tracks from Cloudinary links)
const trackCatalogue = [
  {
    id: 1,
    title: "Manasilaayo",
    artist: "Anirudh Ravichander, Yugendran Vasudevan, Deepthi Suresh",
    url: "https://res.cloudinary.com/dhtfcus55/video/upload/v1779717939/Manasilaayo_qk1vzw.mp3",
    album: "Vettaiyan",
    duration: "4:15",
    genre: "Pop",
    color: "235, 68, 54" // Rich Crimson
  },
  {
    id: 2,
    title: "Nethu Oruthara Oruthara",
    artist: "Ilayaraaja, Vadivelu",
    url: "https://res.cloudinary.com/dhtfcus55/video/upload/v1779717913/Maareesan_-_Nethu_Oruthara_Oruthara___Song_Video___Ilayaraaja___Vadivelu___Fahad_Faasil_no6xil.mp3",
    album: "Maareesan",
    duration: "3:47",
    genre: "Melody",
    color: "138, 43, 226" // Blue Violet
  },
  {
    id: 3,
    title: "Pavazha Malli",
    artist: "Sai Abhyankkar, Kayadu Lohar, Thejo Bharathwaj",
    url: "https://res.cloudinary.com/dhtfcus55/video/upload/v1779717869/SaiAbhyankkar_-_Pavazha_Malli_Music_Video_Kayadu_Lohar_Thejo_Bharathwaj_Think_Indie_rwcso2.mp3",
    album: "Think Indie",
    duration: "3:30",
    genre: "Indie",
    color: "244, 63, 94" // Rose Pink
  },
  {
    id: 4,
    title: "Vikram Title Track",
    artist: "Anirudh Ravichander",
    url: "https://res.cloudinary.com/dhtfcus55/video/upload/v1779717858/Vikram-Title-Track-MassTamilan.so_esluti.mp3",
    album: "Vikram",
    duration: "3:10",
    genre: "Action Thriller",
    color: "55, 65, 81" // Charcoal Slate
  },
  {
    id: 5,
    title: "Sidu Sidu",
    artist: "Ankit Menon",
    url: "https://res.cloudinary.com/dhtfcus55/video/upload/v1779717853/Sidu_Sidu_o8rwqx.mp3",
    album: "Sidu Sidu Single",
    duration: "2:55",
    genre: "Acoustic",
    color: "245, 158, 11" // Warm Amber
  },
  {
    id: 6,
    title: "Kondal Song",
    artist: "Vedan, Sam C.S.",
    url: "https://res.cloudinary.com/dhtfcus55/video/upload/v1779717848/Kondal_Song_ft._Vedan_Antony_Varghese_Pepe_Raj_B_Shetty_Sam_CS_Ajit_Mampally_u9zytv.mp3",
    album: "Kondal",
    duration: "4:02",
    genre: "Folk Rock",
    color: "5, 150, 105" // Emerald Green
  },
  {
    id: 7,
    title: "Makkamishi",
    artist: "Devadath, Jakes Bejoy",
    url: "https://res.cloudinary.com/dhtfcus55/video/upload/v1779717843/Makkamishi_it46cu.mp3",
    album: "Parakramam",
    duration: "3:22",
    genre: "Hip-Hop",
    color: "236, 72, 153" // Vibrant Pink
  },
  {
    id: 8,
    title: "Mutta Kalakki",
    artist: "G.V. Prakash Kumar, Karunaas",
    url: "https://res.cloudinary.com/dhtfcus55/video/upload/v1779717781/Mutta_Kalakki_Music_Video_Youth_Ken_Karunaas_Suraj_Venjaramoodu_GV_Prakash_Kumar_hmvcqd.mp3",
    album: "Youth",
    duration: "3:15",
    genre: "Kuthu",
    color: "217, 119, 6" // Ochre Gold
  },
  {
    id: 9,
    title: "God Mode",
    artist: "A.R. Rahman",
    url: "https://res.cloudinary.com/dhtfcus55/video/upload/v1779717778/God-Mode-MassTamilan.dev_qchcut.mp3",
    album: "Raayan",
    duration: "2:48",
    genre: "Electronic",
    color: "79, 70, 229" // Indigo Royal
  },
  {
    id: 10,
    title: "Illuminati",
    artist: "Sushin Shyam, Dabzee",
    url: "https://res.cloudinary.com/dhtfcus55/video/upload/v1779717747/Illuminati_PagalWorld.com.sb_r5r8f5.mp3",
    album: "Aavesham",
    duration: "3:35",
    genre: "Hip-Hop",
    color: "6, 182, 212" // Cyan Electric
  },
  {
    id: 11,
    title: "Aura 1010",
    artist: "Hiphop Tamizha",
    url: "https://res.cloudinary.com/dhtfcus55/video/upload/v1779717748/Aura_1010_-_Music_Video_Meesaya_Murukku_2_Hiphop_Tamizha_Ketika_Sharma_h6yp8r.mp3",
    album: "Meesaya Murukku 2",
    duration: "2:10",
    genre: "Club",
    color: "20, 184, 166" // Teal Wave
  },
  {
    id: 12,
    title: "Adaavadi",
    artist: "Hiphop Tamizha",
    url: "https://res.cloudinary.com/dhtfcus55/video/upload/v1779717743/Adaavadi_slkawe.mp3",
    album: "Natpe Thunai",
    duration: "3:05",
    genre: "Hip-Hop",
    color: "225, 29, 72" // Rose Velvet
  },
  {
    id: 13,
    title: "K For Kabaradakkam",
    artist: "Ankit Menon, Basil, Asal Kolaar",
    url: "https://res.cloudinary.com/dhtfcus55/video/upload/v1779717736/K_For_Kabaradakkam_Guruvayoorambala_Nadayil_Prithviraj_Basil_Asal_Kolaar_Ankit_Menon_hss6v9.mp3",
    album: "Guruvayoorambala Nadayil",
    duration: "3:12",
    genre: "Rap",
    color: "99, 102, 241" // Indigo Soft
  },
  {
    id: 14,
    title: "Veera Dheera Theme",
    artist: "G.V. Prakash Kumar",
    url: "https://res.cloudinary.com/dhtfcus55/video/upload/v1779717735/Veera_Dheera_Theme_kchd8w.mp3",
    album: "Veera Dheera Sooran",
    duration: "1:45",
    genre: "BGM",
    color: "185, 28, 28" // Crimson Dark
  },
  {
    id: 15,
    title: "Veera Dheera Sooran Title Teaser",
    artist: "G.V. Prakash Kumar",
    url: "https://res.cloudinary.com/dhtfcus55/video/upload/v1779717695/Veera_Dheera_Sooran_Title_Teaser_Theme_jpm3qb.mp3",
    album: "Veera Dheera Sooran Teaser",
    duration: "1:18",
    genre: "Teaser BGM",
    color: "249, 115, 22" // Electric Orange
  }
];

// Lyrics repository for our songs to add premium experience
const lyricBook = {
  "default": [
    "[00:00] Play this track to activate premium lyrics.",
    "[00:05] Music is the sound of the universe.",
    "[00:15] Let the rhythms take control.",
    "[00:30] Feeling the vibrations, moving together.",
    "[00:45] Enjoying the premium Spotify player experience.",
    "[01:00] Built with custom Canvas audio engine visualizers.",
    "[01:15] Dynamic, pixel-perfect responsive CSS transitions.",
    "[01:30] Designed for pure auditory indulgence.",
    "[02:00] Created with love and advanced AI coding pairs.",
    "[02:30] Enjoy this stunning musical soundscape!"
  ],
  "Illuminati": [
    "[00:00] Illuminati, check out the beat now!",
    "[00:04] Sushin Shyam, Dabzee in the house!",
    "[00:08] Aavesham on the screens, rock it!",
    "[00:12] High energy levels climbing, feel it!",
    "[00:18] Neon lights flashing all around us.",
    "[00:25] We are the stars, shine bright through the night.",
    "[00:32] Pulsing drums hitting hard in the chest.",
    "[00:40] Grab your crown, step up, rule the ground!",
    "[00:48] Illuminati... we are glowing in the dark!",
    "[00:58] Elevate your spirits, let the sound crash down."
  ],
  "Manasilaayo": [
    "[00:00] Anirudh Ravichander hits back with Vettaiyan!",
    "[00:05] Thalaivar Superstar Entry theme!",
    "[00:10] Manasilaayo? Understood or not?!",
    "[00:15] Dappankuthu beats pounding loud!",
    "[00:22] Trumpets blaring in absolute swag.",
    "[00:30] Move your feet to the Rajinikanth beat!",
    "[00:38] Pure Anirudh energy taking over the arena.",
    "[00:46] Sing it loud now: Manasilaayo!"
  ],
  "Pavazha Malli": [
    "[00:00] Pavazha Malli by Sai Abhyankkar.",
    "[00:06] Sweet indie pop breeze flowing in.",
    "[00:12] Smooth synth arrangements keeping it light.",
    "[00:20] Coral flower, blooming in the beautiful night.",
    "[00:30] Cozy vibes, walking through calm gardens.",
    "[00:40] Swaying under the glowing moonlight.",
    "[00:50] Feel the soothing indie melody."
  ]
};

// 2. Application Core State Management
const state = {
  currentSongIndex: -1,
  isPlaying: false,
  shuffleActive: false,
  repeatState: 0, // 0 = Off, 1 = Repeat All, 2 = Repeat One
  likedSongs: [], // Stores IDs of liked tracks
  playlists: [],  // Stores playlist objects: { id, name, songs: [ids] }
  
  // Navigation & View stacks
  currentView: "home", // "home", "search", "liked", "playlist"
  activePlaylistId: null,
  historyStack: [],
  forwardStack: [],
  
  // Current playing queue context (remembers original list or active list context)
  activeQueue: [...trackCatalogue],
  unshuffledQueue: [...trackCatalogue], // To recover order on shuffle toggle off
  
  // Audio Visualizer Context
  audioContext: null,
  analyser: null,
  visualizerActive: false,
  visualizerAnimationId: null
};

// HTML Elements Selection
const el = {
  audio: document.getElementById("audio-engine"),
  viewport: document.getElementById("main-viewport-content"),
  header: document.getElementById("sticky-header"),
  greeting: document.getElementById("greeting-title"),
  recentGrid: document.getElementById("recently-played-grid"),
  trendingShelf: document.getElementById("trending-shelf-grid"),
  
  // Sidebar
  logo: document.getElementById("logo-home-trigger"),
  navHome: document.getElementById("nav-home"),
  navSearch: document.getElementById("nav-search"),
  navLibrary: document.getElementById("nav-library"),
  sidebarLibraryList: document.getElementById("sidebar-library-list"),
  libLiked: document.getElementById("lib-liked-songs"),
  btnCreatePlaylist: document.getElementById("btn-create-playlist"),
  likedBadgeCount: document.getElementById("liked-badge-count"),
  
  // Views
  viewHome: document.getElementById("home-view"),
  viewSearch: document.getElementById("search-view"),
  viewLiked: document.getElementById("liked-songs-view"),
  viewPlaylist: document.getElementById("playlist-view"),
  
  // Header Search Input
  searchContainer: document.getElementById("header-search-container"),
  searchInput: document.getElementById("search-input-field"),
  searchBrowseCategories: document.getElementById("search-browse-categories"),
  searchGenresGrid: document.getElementById("search-genres-grid"),
  searchResultsContainer: document.getElementById("search-results-container"),
  searchSongsList: document.getElementById("search-songs-list"),
  
  // Nav Arrows
  btnBack: document.getElementById("nav-btn-back"),
  btnForward: document.getElementById("nav-btn-forward"),
  
  // Liked Songs Page
  btnPlayLiked: document.getElementById("btn-play-liked-songs"),
  btnClearLiked: document.getElementById("btn-clear-liked"),
  likedSongsCountLabel: document.getElementById("liked-songs-count-label"),
  likedSongsList: document.getElementById("liked-songs-list"),
  
  // Custom Playlist Page
  btnPlayCustom: document.getElementById("btn-play-custom-playlist"),
  btnDeletePlaylist: document.getElementById("btn-delete-playlist"),
  playlistSongsCountLabel: document.getElementById("playlist-songs-count-label"),
  playlistSongsList: document.getElementById("playlist-songs-list"),
  playlistTitleHeader: document.getElementById("playlist-title-header"),
  playlistTitleEditField: document.getElementById("playlist-title-edit-field"),
  playlistCoverArtMain: document.getElementById("playlist-cover-art-main"),
  
  // Bottom Player Controls
  playerTitle: document.getElementById("player-title-display"),
  playerArtist: document.getElementById("player-artist-display"),
  playerCover: document.getElementById("player-album-cover"),
  btnPlayerLike: document.getElementById("btn-player-like-toggle"),
  ctrlShuffle: document.getElementById("ctrl-btn-shuffle"),
  ctrlPrev: document.getElementById("ctrl-btn-prev"),
  ctrlPlayPause: document.getElementById("ctrl-btn-play-pause"),
  ctrlNext: document.getElementById("ctrl-btn-next"),
  ctrlRepeat: document.getElementById("ctrl-btn-repeat"),
  playPauseIconPlayer: document.getElementById("play-pause-icon-player"),
  
  // Bottom Player sliders
  seekSlider: document.getElementById("player-seek-slider"),
  seekFill: document.getElementById("player-seek-fill"),
  timeCurrent: document.getElementById("player-time-current"),
  timeDuration: document.getElementById("player-time-duration"),
  btnPlayerMute: document.getElementById("btn-player-mute"),
  volumeIconPlayer: document.getElementById("volume-icon-player"),
  volumeSlider: document.getElementById("player-volume-slider"),
  volumeFill: document.getElementById("player-volume-fill"),
  btnToggleVisuals: document.getElementById("btn-toggle-visuals"),
  btnFullscreen: document.getElementById("btn-player-fullscreen"),
  
  // Immersive Fullscreen Overlay
  fullscreenOverlay: document.getElementById("fullscreen-overlay-panel"),
  btnCloseFullscreen: document.getElementById("btn-close-fullscreen-overlay"),
  fsVinylDisc: document.getElementById("fullscreen-vinyl-disc"),
  fsVinylCover: document.getElementById("fullscreen-vinyl-cover"),
  fsTitle: document.getElementById("fullscreen-title-display"),
  fsArtist: document.getElementById("fullscreen-artist-display"),
  fsLyrics: document.getElementById("fullscreen-lyrics-container"),
  fsTimeCurrent: document.getElementById("fullscreen-time-current"),
  fsTimeDuration: document.getElementById("fullscreen-time-duration"),
  fsSeekSlider: document.getElementById("fullscreen-seek-slider"),
  fsSeekFill: document.getElementById("fullscreen-seek-fill"),
  fsPlayPause: document.getElementById("fs-btn-play-pause"),
  fsPrev: document.getElementById("fs-btn-prev"),
  fsNext: document.getElementById("fs-btn-next"),
  fsShuffle: document.getElementById("fs-btn-shuffle"),
  fsRepeat: document.getElementById("fs-btn-repeat"),
  playPauseIconFs: document.getElementById("play-pause-icon-fs"),
  visualizerCanvas: document.getElementById("visualizerCanvas"),
  
  // Modals / Dropdowns
  modalOverlay: document.getElementById("playlist-creation-modal"),
  modalInput: document.getElementById("new-playlist-name-input"),
  modalCancel: document.getElementById("btn-close-playlist-modal"),
  modalSave: document.getElementById("btn-save-playlist-modal"),
  contextMenu: document.getElementById("songs-context-menu"),
  ctxPlaylistSubmenu: document.getElementById("ctx-playlist-submenu-items"),
  ctxItemRemove: document.getElementById("ctx-item-remove-from-playlist"),
  ctxItemLike: document.getElementById("ctx-item-toggle-like"),
  ctxLikeText: document.getElementById("ctx-like-text")
};

// 3. Dynamic Album Cover Generator (SVG/Canvas)
// Generates stunning, high-res abstract album artwork dynamically based on song variables
function getAlbumCoverDataUrl(song) {
  const canvas = document.createElement("canvas");
  canvas.width = 300;
  canvas.height = 300;
  const ctx = canvas.getContext("2d");
  
  // Background Gradient
  const [r, g, b] = song.color.split(",").map(Number);
  const grad = ctx.createLinearGradient(0, 0, 300, 300);
  grad.addColorStop(0, `rgb(${r}, ${g}, ${b})`);
  grad.addColorStop(1, `rgb(${Math.max(0, r - 50)}, ${Math.max(0, g - 50)}, ${Math.max(0, b - 50)})`);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 300, 300);
  
  // Modern abstract shapes overlay
  ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
  ctx.beginPath();
  ctx.arc(150, 150, 110, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(150, 150, 80, 0, Math.PI * 2);
  ctx.stroke();
  
  ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
  ctx.lineWidth = 15;
  ctx.beginPath();
  ctx.arc(150, 150, 120, Math.PI * 0.25, Math.PI * 1.25);
  ctx.stroke();
  
  // Album text stylized
  ctx.textAlign = "center";
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 24px 'Inter', sans-serif";
  
  // Draw short song title abbreviation or first word
  const firstWord = song.title.split(" ")[0].substring(0, 8);
  ctx.fillText(firstWord.toUpperCase(), 150, 140);
  
  ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
  ctx.font = "600 12px 'Inter', sans-serif";
  ctx.fillText(song.album.toUpperCase(), 150, 165);
  
  // Fine border
  ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
  ctx.lineWidth = 10;
  ctx.strokeRect(0, 0, 300, 300);
  
  return canvas.toDataURL();
}

// 4. Initialisation & Lifecycle Events
function init() {
  loadLocalStorage();
  buildGreetingGrid();
  buildTrendingShelf();
  buildFullSongsTable();
  buildBrowseCategories();
  renderSidebarPlaylists();
  
  setupAudioEngine();
  setupEventListeners();
  updateTimeGreeting();
  
  // Set default theme color
  updateDynamicThemeColor(null);
  
  // Apply initial volume seek fills
  updateSliderProgress(el.volumeSlider, el.volumeFill);
  updateSliderProgress(el.seekSlider, el.seekFill);
  updateSliderProgress(el.fsSeekSlider, el.fsSeekFill);
}

// Save state stack for backward/forward navigation
function navigateToView(viewName, playlistId = null, saveHistory = true) {
  if (saveHistory && state.currentView !== viewName) {
    state.historyStack.push({ view: state.currentView, playlistId: state.activePlaylistId });
    state.forwardStack = []; // Clear forwards on new action
  }
  
  state.currentView = viewName;
  state.activePlaylistId = playlistId;
  
  // Hide all sections
  [el.viewHome, el.viewSearch, el.viewLiked, el.viewPlaylist].forEach(section => {
    section.classList.remove("active");
  });
  
  // Hide search bar unless search view
  if (viewName === "search") {
    el.searchContainer.style.display = "flex";
  } else {
    el.searchContainer.style.display = "none";
  }
  
  // Active links highlighting
  el.navHome.classList.remove("active");
  el.navSearch.classList.remove("active");
  
  // Toggle visibility and active states
  switch (viewName) {
    case "home":
      el.viewHome.classList.add("active");
      el.navHome.classList.add("active");
      break;
    case "search":
      el.viewSearch.classList.add("active");
      el.navSearch.classList.add("active");
      break;
    case "liked":
      el.viewLiked.classList.add("active");
      buildLikedSongsTable();
      break;
    case "playlist":
      el.viewPlaylist.classList.add("active");
      buildCustomPlaylistTable(playlistId);
      break;
  }
  
  // Clear highlighting of items in sidebar
  document.querySelectorAll(".library-item").forEach(item => {
    item.classList.remove("active");
  });
  
  if (viewName === "liked") {
    el.libLiked.classList.add("active");
  } else if (viewName === "playlist") {
    const activeItem = document.getElementById(`lib-playlist-${playlistId}`);
    if (activeItem) activeItem.classList.add("active");
  }
  
  // Scroll main section back to top
  el.viewport.scrollTop = 0;
  
  // Update browser-like button styling
  el.btnBack.style.opacity = state.historyStack.length > 0 ? "1" : "0.5";
  el.btnForward.style.opacity = state.forwardStack.length > 0 ? "1" : "0.5";
}

// Nav Arrow Action: Back
function goBack() {
  if (state.historyStack.length === 0) return;
  const previous = state.historyStack.pop();
  state.forwardStack.push({ view: state.currentView, playlistId: state.activePlaylistId });
  navigateToView(previous.view, previous.playlistId, false);
}

// Nav Arrow Action: Forward
function goForward() {
  if (state.forwardStack.length === 0) return;
  const next = state.forwardStack.pop();
  state.historyStack.push({ view: state.currentView, playlistId: state.activePlaylistId });
  navigateToView(next.view, next.playlistId, false);
}

// Set time greeting
function updateTimeGreeting() {
  const hrs = new Date().getHours();
  let greet = "Good morning";
  if (hrs >= 12 && hrs < 17) greet = "Good afternoon";
  else if (hrs >= 17 || hrs < 5) greet = "Good evening";
  el.greeting.textContent = greet;
}

// 5. Populate Core Views HTML Components
function buildGreetingGrid() {
  // Select first 6 songs for Recently Played greeting mixed grids
  const subset = trackCatalogue.slice(0, 6);
  el.recentGrid.innerHTML = "";
  
  subset.forEach(song => {
    const card = document.createElement("div");
    card.className = "greeting-card";
    const coverUrl = getAlbumCoverDataUrl(song);
    
    card.innerHTML = `
      <div class="greeting-cover">
        <img src="${coverUrl}" width="80" height="80" alt="${song.title}" style="border-radius: 4px 0 0 4px;">
      </div>
      <div class="greeting-title">${song.title}</div>
      <button class="play-btn-float" title="Play ${song.title}">
        <svg viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
      </button>
    `;
    
    // Play on float play button click, details navigate on card click
    card.querySelector(".play-btn-float").addEventListener("click", (e) => {
      e.stopPropagation();
      playSongFromCatalog(song.id);
    });
    
    card.addEventListener("click", () => {
      playSongFromCatalog(song.id);
    });
    
    el.recentGrid.appendChild(card);
  });
}

function buildTrendingShelf() {
  // Display songs 6 to 11 on the horizontal scrolling shelf
  const subset = trackCatalogue.slice(6, 11);
  el.trendingShelf.innerHTML = "";
  
  subset.forEach(song => {
    const card = document.createElement("div");
    card.className = "music-card";
    const coverUrl = getAlbumCoverDataUrl(song);
    
    card.innerHTML = `
      <div class="music-card-cover-container">
        <img src="${coverUrl}" class="music-card-cover" alt="${song.title}">
        <button class="play-btn-float" title="Play ${song.title}">
          <svg viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/></svg>
        </button>
      </div>
      <div class="music-card-title">${song.title}</div>
      <div class="music-card-artist">${song.artist}</div>
    `;
    
    card.querySelector(".play-btn-float").addEventListener("click", (e) => {
      e.stopPropagation();
      playSongFromCatalog(song.id);
    });
    
    card.addEventListener("click", () => {
      playSongFromCatalog(song.id);
    });
    
    el.trendingShelf.appendChild(card);
  });
}

// Renders the standard list of ALL songs in the Home catalog table
function buildFullSongsTable() {
  renderSongTableRows(trackCatalogue, el.homeSongsList, "homeCatalog");
}

// Dynamic helper to build generic lists of rows
function renderSongTableRows(songsArray, tableBodyElement, contextType, playlistId = null) {
  tableBodyElement.innerHTML = "";
  
  if (songsArray.length === 0) {
    tableBodyElement.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; color: var(--text-subdued); padding: 40px;">
          No songs in this view. Add some music!
        </td>
      </tr>
    `;
    return;
  }
  
  songsArray.forEach((song, i) => {
    const tr = document.createElement("tr");
    tr.id = `song-row-${contextType}-${song.id}`;
    
    // Check active play state styling
    const isPlayingCurrent = state.currentSongIndex !== -1 && trackCatalogue[state.currentSongIndex].id === song.id;
    if (isPlayingCurrent) {
      tr.className = "active-song";
    }
    
    const isLiked = state.likedSongs.includes(song.id);
    const coverUrl = getAlbumCoverDataUrl(song);
    
    tr.innerHTML = `
      <td class="td-index">${i + 1}</td>
      <td>
        <div class="td-title">
          <div class="td-cover">
            <img src="${coverUrl}" width="40" height="40" style="border-radius: 4px;">
          </div>
          <div class="td-info">
            <div class="td-name">${song.title}</div>
            <div class="td-artist">${song.artist}</div>
          </div>
        </div>
      </td>
      <td class="td-album">${song.album}</td>
      <td class="td-actions">
        <button class="btn-row-like ${isLiked ? 'liked' : ''}" title="${isLiked ? 'Remove from Liked' : 'Like Song'}">
          <svg viewBox="0 0 24 24"><path d="M8.667 1.912a6.257 6.257 0 0 0-7.462 7.677c.904 3.73 3.904 7.23 9.429 11.583a2 2 0 0 0 2.464-.002c5.526-4.354 8.526-7.854 9.43-11.583a6.257 6.257 0 0 0-7.461-7.677c-1.396.31-2.6.992-3.398 1.968a5.257 5.257 0 0 0-3.398-1.968z"/></svg>
        </button>
        <button class="btn-row-more" title="More Options">
          <svg viewBox="0 0 24 24"><path d="M4.5 10.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5zm15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5zm-7.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z"/></svg>
        </button>
      </td>
      <td class="td-duration">${song.duration}</td>
    `;
    
    // Play on double click, select on click
    tr.addEventListener("dblclick", () => {
      playSongFromList(song.id, songsArray);
    });
    
    tr.addEventListener("click", (e) => {
      // Don't play if clicking actions buttons
      if (e.target.closest(".btn-row-like") || e.target.closest(".btn-row-more")) return;
      playSongFromList(song.id, songsArray);
    });
    
    // Like button binding
    tr.querySelector(".btn-row-like").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleLikeSong(song.id);
    });
    
    // More options menu binding (Right click popup)
    tr.querySelector(".btn-row-more").addEventListener("click", (e) => {
      e.stopPropagation();
      openContextMenu(e, song.id, playlistId);
    });
    
    // Standard Right Click binding too
    tr.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      openContextMenu(e, song.id, playlistId);
    });
    
    tableBodyElement.appendChild(tr);
  });
}

// 6. Search view page build
function buildBrowseCategories() {
  const genres = [
    { name: "Pop", color: "#e11d48", logo: "🎤" },
    { name: "Melody", color: "#8b5cf6", logo: "🎹" },
    { name: "Indie", color: "#ec4899", logo: "🎸" },
    { name: "Action", color: "#1f2937", logo: "🔥" },
    { name: "Folk Rock", color: "#059669", logo: "🎻" },
    { name: "Hip-Hop", color: "#d946ef", logo: "🎧" },
    { name: "Electronic", color: "#6366f1", logo: "⚡" },
    { name: "Kuthu", color: "#d97706", logo: "🥁" },
    { name: "Rap", color: "#a855f7", logo: "🎤" },
    { name: "BGM", color: "#b91c1c", logo: "🎬" }
  ];
  
  el.searchGenresGrid.innerHTML = "";
  
  genres.forEach(genre => {
    const card = document.createElement("div");
    card.className = "category-card";
    card.style.backgroundColor = genre.color;
    
    card.innerHTML = `
      <div class="category-card-text">${genre.name}</div>
      <div class="category-card-art">
        <span style="font-size: 32px; filter: grayscale(0.2);">${genre.logo}</span>
      </div>
    `;
    
    card.addEventListener("click", () => {
      el.searchInput.value = genre.name;
      performSearch(genre.name);
    });
    
    el.searchGenresGrid.appendChild(card);
  });
}

function performSearch(query) {
  query = query.trim().toLowerCase();
  
  if (query === "") {
    el.searchBrowseCategories.style.display = "block";
    el.searchResultsContainer.style.display = "none";
    return;
  }
  
  el.searchBrowseCategories.style.display = "none";
  el.searchResultsContainer.style.display = "block";
  
  // Filter search criteria
  const filtered = trackCatalogue.filter(song => {
    return song.title.toLowerCase().includes(query) ||
           song.artist.toLowerCase().includes(query) ||
           song.album.toLowerCase().includes(query) ||
           song.genre.toLowerCase().includes(query);
  });
  
  renderSongTableRows(filtered, el.searchSongsList, "searchResult");
}

// 7. Liked Songs List page build
function buildLikedSongsTable() {
  const likedArray = trackCatalogue.filter(song => state.likedSongs.includes(song.id));
  el.likedSongsCountLabel.textContent = `${likedArray.length} song${likedArray.length === 1 ? '' : 's'}`;
  el.likedBadgeCount.textContent = likedArray.length;
  renderSongTableRows(likedArray, el.likedSongsList, "likedCatalog");
}

// 8. Custom Playlists logic page build
function buildCustomPlaylistTable(playlistId) {
  const playlist = state.playlists.find(p => p.id === playlistId);
  if (!playlist) {
    navigateToView("home");
    return;
  }
  
  // Load playlist metadata
  el.playlistTitleHeader.textContent = playlist.name;
  el.playlistTitleEditField.value = playlist.name;
  
  const songsInPlaylist = trackCatalogue.filter(song => playlist.songs.includes(song.id));
  el.playlistSongsCountLabel.textContent = `${songsInPlaylist.length} song${songsInPlaylist.length === 1 ? '' : 's'}`;
  
  // Album cover fallback or gradient based on first track
  if (songsInPlaylist.length > 0) {
    const [r,g,b] = songsInPlaylist[0].color.split(",");
    el.playlistCoverArtMain.style.background = `linear-gradient(135deg, rgb(${r},${g},${b}), #000)`;
  } else {
    el.playlistCoverArtMain.style.background = "linear-gradient(135deg, #242424, #121212)";
  }
  
  renderSongTableRows(songsInPlaylist, el.playlistSongsList, `customPlaylist-${playlistId}`, playlistId);
}

// Add playlist Row link to sidebar
function renderSidebarPlaylists() {
  // Clear any existing custom lists in DOM except liked songs
  const items = el.sidebarLibraryList.querySelectorAll(".custom-playlist-lib-item");
  items.forEach(item => item.remove());
  
  state.playlists.forEach(playlist => {
    const a = document.createElement("a");
    a.href = "#";
    a.className = "library-item custom-playlist-lib-item";
    a.id = `lib-playlist-${playlist.id}`;
    
    // Draw basic first-character thumbnail cover
    a.innerHTML = `
      <div class="library-item-cover" style="background: linear-gradient(135deg, #1f2937, #111827);">
        <span style="font-weight: 800; font-size: 16px; color: var(--text-subdued);">${playlist.name.charAt(0).toUpperCase()}</span>
      </div>
      <div class="library-item-details">
        <div class="library-item-title">${playlist.name}</div>
        <div class="library-item-subtitle">Playlist • ${playlist.songs.length} tracks</div>
      </div>
    `;
    
    a.addEventListener("click", (e) => {
      e.preventDefault();
      navigateToView("playlist", playlist.id);
    });
    
    el.sidebarLibraryList.appendChild(a);
  });
}

// 9. Interactive Audio Playback engine
function setupAudioEngine() {
  // Seek bar drag updates
  el.seekSlider.addEventListener("input", (e) => {
    if (state.currentSongIndex === -1) return;
    const seekPercent = e.target.value;
    const duration = el.audio.duration || 0;
    el.audio.currentTime = (seekPercent / 100) * duration;
    updateSliderProgress(el.seekSlider, el.seekFill);
    
    // Update synced slider on fullscreen too
    el.fsSeekSlider.value = seekPercent;
    updateSliderProgress(el.fsSeekSlider, el.fsSeekFill);
  });
  
  el.fsSeekSlider.addEventListener("input", (e) => {
    if (state.currentSongIndex === -1) return;
    const seekPercent = e.target.value;
    const duration = el.audio.duration || 0;
    el.audio.currentTime = (seekPercent / 100) * duration;
    updateSliderProgress(el.fsSeekSlider, el.fsSeekFill);
    
    // Update synced slider on bottom player
    el.seekSlider.value = seekPercent;
    updateSliderProgress(el.seekSlider, el.seekFill);
  });
  
  // Track updates
  el.audio.addEventListener("timeupdate", () => {
    if (state.currentSongIndex === -1) return;
    
    const curr = el.audio.currentTime;
    const dur = el.audio.duration || 0;
    
    // Timestamps formatting
    el.timeCurrent.textContent = formatTime(curr);
    el.fsTimeCurrent.textContent = formatTime(curr);
    
    if (dur > 0) {
      const percentage = (curr / dur) * 100;
      
      // Update seek sliders
      el.seekSlider.value = percentage;
      updateSliderProgress(el.seekSlider, el.seekFill);
      
      el.fsSeekSlider.value = percentage;
      updateSliderProgress(el.fsSeekSlider, el.fsSeekFill);
    }
    
    // Update immersive lyrics scroll
    scrollLyricsToCurrentTime(curr);
  });
  
  el.audio.addEventListener("loadedmetadata", () => {
    const dur = el.audio.duration || 0;
    el.timeDuration.textContent = formatTime(dur);
    el.fsTimeDuration.textContent = formatTime(dur);
  });
  
  // Handle song ending sequence (automagic skip)
  el.audio.addEventListener("ended", () => {
    if (state.repeatState === 2) {
      // Repeat Single track
      el.audio.currentTime = 0;
      el.audio.play().catch(err => console.log("Play failed: ", err));
    } else {
      // Skip next
      skipNextTrack();
    }
  });
}

// Unified song launcher
function playSongFromCatalog(songId) {
  // Sets standard catalog queue as active stream context
  playSongFromList(songId, trackCatalogue);
}

function playSongFromList(songId, songSourceList) {
  const index = trackCatalogue.findIndex(song => song.id === songId);
  if (index === -1) return;
  
  // Establish play queue context
  state.unshuffledQueue = [...songSourceList];
  if (state.shuffleActive) {
    shufflePlayQueue(songId);
  } else {
    state.activeQueue = [...songSourceList];
  }
  
  loadAndPlaySong(index);
}

function loadAndPlaySong(index) {
  state.currentSongIndex = index;
  const song = trackCatalogue[index];
  
  // Update URL source
  el.audio.src = song.url;
  
  // Update metadata displays
  el.playerTitle.textContent = song.title;
  el.playerArtist.textContent = song.artist;
  
  el.fsTitle.textContent = song.title;
  el.fsArtist.textContent = song.artist;
  
  // Render album cover images
  const coverUrl = getAlbumCoverDataUrl(song);
  el.playerCover.innerHTML = `<img src="${coverUrl}" width="56" height="56" style="border-radius:4px;">`;
  el.fsVinylCover.innerHTML = `<img src="${coverUrl}" width="120" height="120" style="border-radius:50%;">`;
  
  // Dynamic color matching background
  updateDynamicThemeColor(song);
  
  // Sync liked states
  syncTrackPlayButtons();
  
  // Lyrics load
  loadLyricsForSong(song.title);
  
  // Web Audio Context wake
  tryInitializeAudioVisualizer();
  
  // Fire playback
  state.isPlaying = true;
  updatePlayPauseVisuals();
  
  el.audio.play()
    .then(() => {
      // Disk spin start
      el.fsVinylDisc.classList.add("playing");
    })
    .catch(err => {
      console.log("Audio Playblocked or invalid stream link: ", err);
      state.isPlaying = false;
      updatePlayPauseVisuals();
      el.fsVinylDisc.classList.remove("playing");
    });
}

function togglePlayPause() {
  if (state.currentSongIndex === -1) {
    // Play first track in queue as default
    if (state.activeQueue.length > 0) {
      playSongFromCatalog(state.activeQueue[0].id);
    }
    return;
  }
  
  if (state.isPlaying) {
    el.audio.pause();
    state.isPlaying = false;
    el.fsVinylDisc.classList.remove("playing");
  } else {
    tryInitializeAudioVisualizer();
    el.audio.play().catch(err => console.log("Play failed: ", err));
    state.isPlaying = true;
    el.fsVinylDisc.classList.add("playing");
  }
  
  updatePlayPauseVisuals();
  syncTrackPlayButtons();
}

function updatePlayPauseVisuals() {
  // Bottom Player icon swap (SVG path play vs pause)
  if (state.isPlaying) {
    el.playPauseIconPlayer.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
    el.playPauseIconFs.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
  } else {
    el.playPauseIconPlayer.innerHTML = `<path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/>`;
    el.playPauseIconFs.innerHTML = `<path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/>`;
  }
}

function skipNextTrack() {
  if (state.currentSongIndex === -1) return;
  
  const currentSongId = trackCatalogue[state.currentSongIndex].id;
  const queueIndex = state.activeQueue.findIndex(s => s.id === currentSongId);
  
  let nextQueueIndex = queueIndex + 1;
  if (nextQueueIndex >= state.activeQueue.length) {
    if (state.repeatState === 1) {
      // Repeat All (wrap to start)
      nextQueueIndex = 0;
    } else {
      // Stop or wrap as standard
      nextQueueIndex = 0;
      // If repeat state off, stop at end, or just wrap round. We wrap around for better demo flow.
    }
  }
  
  const nextSong = state.activeQueue[nextQueueIndex];
  const mainCatIndex = trackCatalogue.findIndex(s => s.id === nextSong.id);
  loadAndPlaySong(mainCatIndex);
}

function skipPrevTrack() {
  if (state.currentSongIndex === -1) return;
  
  // If track is > 3 seconds in, restart track instead of skip back
  if (el.audio.currentTime > 3) {
    el.audio.currentTime = 0;
    return;
  }
  
  const currentSongId = trackCatalogue[state.currentSongIndex].id;
  const queueIndex = state.activeQueue.findIndex(s => s.id === currentSongId);
  
  let prevQueueIndex = queueIndex - 1;
  if (prevQueueIndex < 0) {
    prevQueueIndex = state.activeQueue.length - 1; // Wrap around to end
  }
  
  const prevSong = state.activeQueue[prevQueueIndex];
  const mainCatIndex = trackCatalogue.findIndex(s => s.id === prevSong.id);
  loadAndPlaySong(mainCatIndex);
}

// 10. Shuffle & Repeat State Handlers
function toggleShuffle() {
  state.shuffleActive = !state.shuffleActive;
  
  if (state.shuffleActive) {
    el.ctrlShuffle.classList.add("active");
    el.fsShuffle.classList.add("active");
    
    // Shuffle active queue keeping current track first
    if (state.currentSongIndex !== -1) {
      const currentTrack = trackCatalogue[state.currentSongIndex];
      shufflePlayQueue(currentTrack.id);
    } else {
      shufflePlayQueue(null);
    }
  } else {
    el.ctrlShuffle.classList.remove("active");
    el.fsShuffle.classList.remove("active");
    
    // Restore original ordering
    state.activeQueue = [...state.unshuffledQueue];
  }
}

function shufflePlayQueue(currentSongId) {
  // Fisher-Yates shuffle algorithm
  const temp = [...state.unshuffledQueue];
  let curSong = null;
  
  if (currentSongId) {
    const idx = temp.findIndex(s => s.id === currentSongId);
    if (idx !== -1) {
      curSong = temp.splice(idx, 1)[0];
    }
  }
  
  for (let i = temp.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [temp[i], temp[j]] = [temp[j], temp[i]];
  }
  
  if (curSong) {
    temp.unshift(curSong); // Keep current song at index 0 of queue
  }
  
  state.activeQueue = temp;
}

function toggleRepeat() {
  state.repeatState = (state.repeatState + 1) % 3;
  
  // 0 = Off, 1 = Repeat All, 2 = Repeat One
  [el.ctrlRepeat, el.fsRepeat].forEach(btn => {
    btn.classList.remove("active");
    btn.querySelector("svg").style.fill = "var(--text-subdued)";
    btn.title = "Enable Repeat";
    
    // Reset repeat-one text marker if exists
    const badge = btn.querySelector(".repeat-one-badge");
    if (badge) badge.remove();
  });
  
  if (state.repeatState === 1) {
    [el.ctrlRepeat, el.fsRepeat].forEach(btn => {
      btn.classList.add("active");
      btn.querySelector("svg").style.fill = "var(--spotify-green)";
      btn.title = "Repeat One";
    });
  } else if (state.repeatState === 2) {
    [el.ctrlRepeat, el.fsRepeat].forEach(btn => {
      btn.classList.add("active");
      btn.querySelector("svg").style.fill = "var(--spotify-green)";
      btn.title = "Disable Repeat";
      
      // Inject small "1" text inside repeat to indicate repeat one track
      const span = document.createElement("span");
      span.className = "repeat-one-badge";
      span.textContent = "1";
      span.style.position = "absolute";
      span.style.fontSize = "9px";
      span.style.fontWeight = "bold";
      span.style.color = "#000000";
      span.style.backgroundColor = "var(--spotify-green)";
      span.style.borderRadius = "50%";
      span.style.width = "12px";
      span.style.height = "12px";
      span.style.display = "flex";
      span.style.alignItems = "center";
      span.style.justify = "center";
      span.style.top = "0";
      span.style.right = "0";
      btn.appendChild(span);
    });
  }
}

// Highlight the currently playing song green in lists
function syncTrackPlayButtons() {
  if (state.currentSongIndex === -1) return;
  const currentSong = trackCatalogue[state.currentSongIndex];
  
  // Remove all highlighting
  document.querySelectorAll("tr").forEach(tr => {
    tr.classList.remove("active-song");
  });
  
  // Apply highlighting to matching rows
  document.querySelectorAll(`[id$="-${currentSong.id}"]`).forEach(tr => {
    tr.classList.add("active-song");
  });
  
  // Sync footer like button active heart state
  const isLiked = state.likedSongs.includes(currentSong.id);
  if (isLiked) {
    el.btnPlayerLike.classList.add("liked");
    el.btnPlayerLike.querySelector("svg").style.fill = "var(--spotify-green)";
  } else {
    el.btnPlayerLike.classList.remove("liked");
    el.btnPlayerLike.querySelector("svg").style.fill = "var(--text-subdued)";
  }
}

// 11. Theme Color Extraction matching Cover Art
function updateDynamicThemeColor(song) {
  const rgb = song ? song.color : "29, 185, 84"; // Default green
  
  // Apply to document variables
  document.documentElement.style.setProperty("--theme-rgb", rgb);
  
  // Apply transition styles to viewport background
  el.viewport.style.backgroundImage = `linear-gradient(
    to bottom,
    rgba(${rgb}, 0.25) 0%,
    var(--bg-surface) 350px,
    var(--bg-surface) 100%
  )`;
  
  // Sync full-screen overlay backdrop
  el.fullscreenOverlay.style.backgroundImage = `radial-gradient(
    circle at 50% 30%,
    rgba(${rgb}, 0.3) 0%,
    #050506 80%
  )`;
}

// 12. Scrolling Lyrics Parser
let parsedLyrics = [];

function loadLyricsForSong(songTitle) {
  el.fsLyrics.innerHTML = "";
  parsedLyrics = [];
  
  const rawLyrics = lyricBook[songTitle] || lyricBook["default"];
  
  rawLyrics.forEach(line => {
    // Regex matches timestamp, e.g. [01:23] or [00:45.50]
    const match = line.match(/\[(\d{2}):(\d{2})(?:\.(\d{2}))?\](.*)/);
    if (match) {
      const minutes = parseInt(match[1]);
      const seconds = parseInt(match[2]);
      const totalSeconds = (minutes * 60) + seconds;
      const text = match[4].trim();
      
      parsedLyrics.push({ time: totalSeconds, text: text });
      
      const div = document.createElement("div");
      div.className = "lyrics-line";
      div.id = `lyric-line-${totalSeconds}`;
      div.textContent = text;
      
      // Clicking a lyric line jumps playback immediately
      div.addEventListener("click", () => {
        el.audio.currentTime = totalSeconds;
      });
      
      el.fsLyrics.appendChild(div);
    }
  });
}

function scrollLyricsToCurrentTime(currentTime) {
  if (parsedLyrics.length === 0) return;
  
  // Find which lyric index matches best
  let activeIndex = -1;
  for (let i = 0; i < parsedLyrics.length; i++) {
    if (currentTime >= parsedLyrics[i].time) {
      activeIndex = i;
    } else {
      break;
    }
  }
  
  if (activeIndex !== -1) {
    const activeLyricObj = parsedLyrics[activeIndex];
    
    // Deactivate previous active lyrics
    document.querySelectorAll(".lyrics-line").forEach(line => {
      line.classList.remove("active");
    });
    
    const activeDiv = document.getElementById(`lyric-line-${activeLyricObj.time}`);
    if (activeDiv) {
      activeDiv.classList.add("active");
      
      // Calculate scroll offset to keep active line centered
      const boxHeight = el.fsLyrics.offsetHeight;
      const lineOffset = activeDiv.offsetTop;
      const lineHeight = activeDiv.offsetHeight;
      
      el.fsLyrics.scrollTop = lineOffset - (boxHeight / 2) + (lineHeight / 2);
    }
  }
}

// 13. High-Fidelity Web Audio API Frequency Visualizer
function tryInitializeAudioVisualizer() {
  if (state.audioContext) return; // Already setup
  
  try {
    // Setup AudioNodes
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    state.audioContext = new AudioContextClass();
    
    // Create media element source
    const sourceNode = state.audioContext.createMediaElementSource(el.audio);
    
    // Create Analyser
    state.analyser = state.audioContext.createAnalyser();
    state.analyser.fftSize = 256; // 128 frequencies
    
    // Connect pathways
    sourceNode.connect(state.analyser);
    state.analyser.connect(state.audioContext.destination);
    
    // Start drawing frame loops
    startVisualizerDrawing();
  } catch (err) {
    console.log("Web Audio Context blocked. Needs direct user click first: ", err);
  }
}

function startVisualizerDrawing() {
  const canvas = el.visualizerCanvas;
  const ctx = canvas.getContext("2d");
  
  // Match CSS canvas layout sizes
  function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  
  const bufferLength = state.analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  
  function draw() {
    state.visualizerAnimationId = requestAnimationFrame(draw);
    
    state.analyser.getByteFrequencyData(dataArray);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const barWidth = (canvas.width / bufferLength) * 1.5;
    let barHeight;
    let x = 0;
    
    // Color variables loaded from theme RGB to match song covers
    const activeColorStr = document.documentElement.style.getPropertyValue("--theme-rgb") || "29, 185, 84";
    
    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 0.8;
      
      // Draw neon rounded vertical bars pulsing
      const grad = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - barHeight);
      grad.addColorStop(0, `rgba(${activeColorStr}, 0.1)`);
      grad.addColorStop(0.5, `rgba(${activeColorStr}, 0.6)`);
      grad.addColorStop(1, `rgba(${activeColorStr}, 1)`);
      
      ctx.fillStyle = grad;
      
      // Smoothly rounded top rectangles
      ctx.beginPath();
      ctx.roundRect(x, canvas.height - barHeight, barWidth - 4, barHeight, 6);
      ctx.fill();
      
      x += barWidth;
    }
  }
  
  draw();
}

// 14. Library & Playlist Storage Management
function loadLocalStorage() {
  // Load likes
  const likes = localStorage.getItem("spotify_liked_songs");
  state.likedSongs = likes ? JSON.parse(likes) : [];
  el.likedBadgeCount.textContent = state.likedSongs.length;
  
  // Load custom user playlists
  const pl = localStorage.getItem("spotify_custom_playlists");
  state.playlists = pl ? JSON.parse(pl) : [];
}

function saveLocalStorage() {
  localStorage.setItem("spotify_liked_songs", JSON.stringify(state.likedSongs));
  localStorage.setItem("spotify_custom_playlists", JSON.stringify(state.playlists));
}

function toggleLikeSong(songId) {
  const songIdx = state.likedSongs.indexOf(songId);
  const song = trackCatalogue.find(s => s.id === songId);
  
  if (songIdx === -1) {
    state.likedSongs.push(songId);
    console.log(`Liked track: ${song.title}`);
  } else {
    state.likedSongs.splice(songIdx, 1);
    console.log(`Unliked track: ${song.title}`);
  }
  
  saveLocalStorage();
  
  // Hot sync views
  if (state.currentView === "liked") {
    buildLikedSongsTable();
  }
  buildFullSongsTable();
  syncTrackPlayButtons();
  
  // Update sidebar label
  el.likedBadgeCount.textContent = state.likedSongs.length;
  el.likedSongsCountLabel.textContent = `${state.likedSongs.length} song${state.likedSongs.length === 1 ? '' : 's'}`;
}

function createNewPlaylist(name) {
  name = name.trim();
  if (name === "") return;
  
  const newPl = {
    id: Date.now(),
    name: name,
    songs: []
  };
  
  state.playlists.push(newPl);
  saveLocalStorage();
  
  renderSidebarPlaylists();
}

function deleteActivePlaylist() {
  if (state.currentView !== "playlist" || !state.activePlaylistId) return;
  
  const idToDelete = state.activePlaylistId;
  const idx = state.playlists.findIndex(p => p.id === idToDelete);
  if (idx !== -1) {
    const plName = state.playlists[idx].name;
    state.playlists.splice(idx, 1);
    saveLocalStorage();
    console.log(`Deleted custom playlist: ${plName}`);
    
    renderSidebarPlaylists();
    navigateToView("home");
  }
}

function addSongToPlaylist(songId, playlistId) {
  const pl = state.playlists.find(p => p.id === playlistId);
  if (!pl) return;
  
  // Avoid duplicate songs
  if (!pl.songs.includes(songId)) {
    pl.songs.push(songId);
    saveLocalStorage();
    renderSidebarPlaylists();
    console.log(`Added song ${songId} to playlist ${pl.name}`);
    
    // Refresh table if looking at playlist page
    if (state.currentView === "playlist" && state.activePlaylistId === playlistId) {
      buildCustomPlaylistTable(playlistId);
    }
  }
}

function removeSongFromPlaylist(songId, playlistId) {
  const pl = state.playlists.find(p => p.id === playlistId);
  if (!pl) return;
  
  const idx = pl.songs.indexOf(songId);
  if (idx !== -1) {
    pl.songs.splice(idx, 1);
    saveLocalStorage();
    renderSidebarPlaylists();
    console.log(`Removed song ${songId} from playlist ${pl.name}`);
    
    if (state.currentView === "playlist" && state.activePlaylistId === playlistId) {
      buildCustomPlaylistTable(playlistId);
    }
  }
}

function renameCustomPlaylist(newName) {
  newName = newName.trim();
  if (newName === "" || !state.activePlaylistId) return;
  
  const pl = state.playlists.find(p => p.id === state.activePlaylistId);
  if (pl) {
    pl.name = newName;
    saveLocalStorage();
    renderSidebarPlaylists();
    
    el.playlistTitleHeader.textContent = newName;
    el.playlistTitleEditField.value = newName;
  }
}

// Helper to synchronise ranges
function updateSliderProgress(slider, fillElement) {
  const value = slider.value;
  const max = slider.max || 100;
  const percentage = (value / max) * 100;
  fillElement.style.width = `${percentage}%`;
}

// Time Formatting MM:SS
function formatTime(secs) {
  if (isNaN(secs)) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// 15. Right-Click context dynamic dropdown popup
let selectedCtxSongId = null;
let selectedCtxPlaylistId = null;

function openContextMenu(e, songId, playlistId = null) {
  e.preventDefault();
  selectedCtxSongId = songId;
  selectedCtxPlaylistId = playlistId;
  
  const isLiked = state.likedSongs.includes(songId);
  el.ctxLikeText.textContent = isLiked ? "Unlike Track" : "Like Track";
  
  // Show/Hide playlist deletion row
  if (playlistId) {
    el.ctxItemRemove.style.display = "block";
  } else {
    el.ctxItemRemove.style.display = "none";
  }
  
  // Load playlist context choices
  el.ctxPlaylistSubmenu.innerHTML = "";
  if (state.playlists.length === 0) {
    el.ctxPlaylistSubmenu.innerHTML = `<div class="context-menu-item" style="color:var(--text-subdued);">No Playlists</div>`;
  } else {
    state.playlists.forEach(pl => {
      const plDiv = document.createElement("div");
      plDiv.className = "context-menu-item";
      plDiv.textContent = pl.name;
      plDiv.addEventListener("click", () => {
        addSongToPlaylist(songId, pl.id);
        closeContextMenu();
      });
      el.ctxPlaylistSubmenu.appendChild(plDiv);
    });
  }
  
  // Position menu
  el.contextMenu.style.display = "block";
  
  // Boundary collisions check
  const menuWidth = el.contextMenu.offsetWidth || 180;
  const menuHeight = el.contextMenu.offsetHeight || 100;
  let posX = e.clientX;
  let posY = e.clientY;
  
  if (posX + menuWidth > window.innerWidth) posX = window.innerWidth - menuWidth - 10;
  if (posY + menuHeight > window.innerHeight) posY = window.innerHeight - menuHeight - 10;
  
  el.contextMenu.style.left = `${posX}px`;
  el.contextMenu.style.top = `${posY}px`;
}

function closeContextMenu() {
  el.contextMenu.style.display = "none";
}

// 16. Event Bindings Orchestration
function setupEventListeners() {
  // Navigation Links
  el.logo.addEventListener("click", (e) => { e.preventDefault(); navigateToView("home"); });
  el.navHome.addEventListener("click", (e) => { e.preventDefault(); navigateToView("home"); });
  el.navSearch.addEventListener("click", (e) => { e.preventDefault(); navigateToView("search"); });
  el.libLiked.addEventListener("click", (e) => { e.preventDefault(); navigateToView("liked"); });
  
  // Nav Arrows
  el.btnBack.addEventListener("click", goBack);
  el.btnForward.addEventListener("click", goForward);
  
  // Sticky scroll shadow additions
  el.viewport.addEventListener("scroll", () => {
    if (el.viewport.scrollTop > 20) {
      el.header.classList.add("scrolled");
    } else {
      el.header.classList.remove("scrolled");
    }
  });
  
  // Playlists Modals Actions
  el.btnCreatePlaylist.addEventListener("click", () => {
    el.modalOverlay.classList.add("active");
    // Suggest incremental numbers
    el.modalInput.value = `My Playlist #${state.playlists.length + 1}`;
    el.modalInput.select();
  });
  
  el.modalCancel.addEventListener("click", () => el.modalOverlay.classList.remove("active"));
  el.modalSave.addEventListener("click", () => {
    createNewPlaylist(el.modalInput.value);
    el.modalOverlay.classList.remove("active");
  });
  
  el.modalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      createNewPlaylist(el.modalInput.value);
      el.modalOverlay.classList.remove("active");
    }
  });
  
  // Liked Playlist specific actions
  el.btnPlayLiked.addEventListener("click", () => {
    const liked = trackCatalogue.filter(song => state.likedSongs.includes(song.id));
    if (liked.length > 0) {
      playSongFromList(liked[0].id, liked);
    }
  });
  
  el.btnClearLiked.addEventListener("click", () => {
    if (confirm("Are you sure you want to unlike all tracks?")) {
      state.likedSongs = [];
      saveLocalStorage();
      buildLikedSongsTable();
      buildFullSongsTable();
      syncTrackPlayButtons();
    }
  });
  
  // Custom Playlist specific actions
  el.btnPlayCustom.addEventListener("click", () => {
    if (!state.activePlaylistId) return;
    const pl = state.playlists.find(p => p.id === state.activePlaylistId);
    if (pl && pl.songs.length > 0) {
      const plSongs = trackCatalogue.filter(s => pl.songs.includes(s.id));
      playSongFromList(plSongs[0].id, plSongs);
    }
  });
  
  el.btnDeletePlaylist.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this custom playlist?")) {
      deleteActivePlaylist();
    }
  });
  
  // Custom Playlist Title Double Click to Rename
  el.playlistTitleHeader.addEventListener("dblclick", () => {
    el.playlistTitleHeader.style.display = "none";
    el.playlistTitleEditField.style.display = "block";
    el.playlistTitleEditField.focus();
    el.playlistTitleEditField.select();
  });
  
  function savePlaylistRename() {
    const newVal = el.playlistTitleEditField.value.trim();
    if (newVal !== "") {
      renameCustomPlaylist(newVal);
    }
    el.playlistTitleHeader.style.display = "block";
    el.playlistTitleEditField.style.display = "none";
  }
  
  el.playlistTitleEditField.addEventListener("blur", savePlaylistRename);
  el.playlistTitleEditField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") savePlaylistRename();
  });
  
  // Header Search Dynamic Bindings
  el.searchInput.addEventListener("input", (e) => {
    performSearch(e.target.value);
  });
  
  // Bottom player media controllers bindings
  el.ctrlPlayPause.addEventListener("click", togglePlayPause);
  el.fsPlayPause.addEventListener("click", togglePlayPause);
  
  el.ctrlNext.addEventListener("click", skipNextTrack);
  el.fsNext.addEventListener("click", skipNextTrack);
  
  el.ctrlPrev.addEventListener("click", skipPrevTrack);
  el.fsPrev.addEventListener("click", skipPrevTrack);
  
  el.ctrlShuffle.addEventListener("click", toggleShuffle);
  el.fsShuffle.addEventListener("click", toggleShuffle);
  
  el.ctrlRepeat.addEventListener("click", toggleRepeat);
  el.fsRepeat.addEventListener("click", toggleRepeat);
  
  el.btnPlayerLike.addEventListener("click", () => {
    if (state.currentSongIndex !== -1) {
      toggleLikeSong(trackCatalogue[state.currentSongIndex].id);
    }
  });
  
  // Volume slider handlers
  el.volumeSlider.addEventListener("input", (e) => {
    const vol = e.target.value;
    el.audio.volume = vol / 100;
    updateSliderProgress(el.volumeSlider, el.volumeFill);
    updateVolumeIcon(vol);
  });
  
  el.btnPlayerMute.addEventListener("click", () => {
    if (el.audio.muted) {
      el.audio.muted = false;
      updateVolumeIcon(el.volumeSlider.value);
    } else {
      el.audio.muted = true;
      el.volumeIconPlayer.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM4.34 2.93L2.93 4.34 7.59 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.37.88-2.18 1.11v2.06c1.35-.3 2.59-.95 3.61-1.83l2.92 2.92 1.41-1.41L4.34 2.93zM10 15.17L7.83 13H5v-2h2.83l1-.3 1.17 1.17v3.3zm2-8.58L10.3 8.3l1.7 1.7V6.59zM19 12c0 2.25-.82 4.31-2.1 5.93l1.42 1.42C19.96 17.47 21 14.86 21 12c0-4.97-4.03-9-9-9v2c3.95 0 7 3.05 7 7z"/>`;
    }
  });
  
  function updateVolumeIcon(vol) {
    if (vol == 0) {
      el.volumeIconPlayer.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM4.34 2.93L2.93 4.34 7.59 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.37.88-2.18 1.11v2.06c1.35-.3 2.59-.95 3.61-1.83l2.92 2.92 1.41-1.41L4.34 2.93zM10 15.17L7.83 13H5v-2h2.83l1-.3 1.17 1.17v3.3zm2-8.58L10.3 8.3l1.7 1.7V6.59zM19 12c0 2.25-.82 4.31-2.1 5.93l1.42 1.42C19.96 17.47 21 14.86 21 12c0-4.97-4.03-9-9-9v2c3.95 0 7 3.05 7 7z"/>`;
    } else if (vol > 0 && vol <= 50) {
      el.volumeIconPlayer.innerHTML = `<path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>`;
    } else {
      el.volumeIconPlayer.innerHTML = `<path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-3 1.77L6.41 10H3v4h3.41L11 19V5zm2 5.56v2.44c1.12-.22 2-.91 2-2s-.88-1.78-2-2.04z"/>`;
    }
  }
  
  // Toggle fullscreen overlay
  el.btnFullscreen.addEventListener("click", () => {
    el.fullscreenOverlay.classList.add("active");
    state.visualizerActive = true;
    tryInitializeAudioVisualizer();
  });
  
  el.btnCloseFullscreen.addEventListener("click", () => {
    el.fullscreenOverlay.classList.remove("active");
    state.visualizerActive = false;
  });
  
  // Shortcut utility panel triggers standard fullscreen overlays
  el.btnToggleVisuals.addEventListener("click", () => {
    el.btnFullscreen.click();
  });
  
  // Right click / click outside to close menus
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".context-menu")) {
      closeContextMenu();
    }
  });
  
  // Right click removal from custom playlist binding
  el.ctxItemRemove.addEventListener("click", () => {
    if (selectedCtxSongId && selectedCtxPlaylistId) {
      removeSongFromPlaylist(selectedCtxSongId, selectedCtxPlaylistId);
    }
    closeContextMenu();
  });
  
  // Right click like song toggle
  el.ctxItemLike.addEventListener("click", () => {
    if (selectedCtxSongId) {
      toggleLikeSong(selectedCtxSongId);
    }
    closeContextMenu();
  });
}

// Fire application loading sequence
window.addEventListener("DOMContentLoaded", init);
