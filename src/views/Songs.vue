<template>
  <div id="songs-view" @scroll="handleScroll">
    <div class="wrapper-header">
      <h1>SONGS</h1>
      <div class="wrapper-search">
        <input id="input-search" v-model="searchQuery" placeholder="Search by title..." />
      </div>
      <div class="wrapper-settings">
        <button id="btn-show-favorites" @click="toggleShowFavorites">{{ showFavorites ? 'Hide Favorites' : 'Show Favorites' }}</button>
      </div>
    </div>
    <div class="wrapper-songs">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <th id="th-id">#</th>
          <th id="th-title" @click="sortBy('title')">
            Title
            <IconCaretUp v-if="sortKey === 'title' && !sortOrder" />
            <IconCaretDown v-if="sortKey === 'title' && sortOrder" />
          </th>
          <th id="th-artist">Artist</th>
          <th id="th-album">Album</th>
          <th id="th-duration" @click="sortBy('length')">
            Duration
            <IconCaretUp v-if="sortKey === 'length' && !sortOrder" />
            <IconCaretDown v-if="sortKey === 'length' && sortOrder" />
          </th>
        </tr>
        <!-- Loop through songs -->
        <tr class="song" v-for="(song, index) in filteredSongs" :key="song.id">
          <td id="td-index">
            <IconPlay @dblclick="playSong(index)" />
            <span id="txt-index">{{ index + 1 }}</span>
          </td>
          <td id="td-title">
            <img :src="song.albumPhoto" alt="Album Photo" />
            {{ song.title }}
            <IconHeart @click="toggleFavorite(song.id)" :class="{ favorite: isFavorite(song.id) }" />
          </td>
          <td id="td-artist">{{ song.artists.join(', ') }}</td>
          <td id="td-album">{{ song.album }}</td>
          <td id="td-duration">{{ formatDuration(song.length) }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import songData from '@/data/songs.js'
export default {
  data() {
    return {
      songs: [...songData],
      sortKey: null,
      sortOrder: false,
      searchQuery: '',
      showFavorites: false,
      favorites: [],
    };
  },
  computed: {
    filteredSongs() {
      let songs = [...this.songs];

      if (this.searchQuery) {
        songs = songs.filter(song => song.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }

      if (this.showFavorites) {
        songs = songs.filter(song => this.isFavorite(song.id));
      }

      if (this.sortKey) {
        songs = songs.sort((a, b) => {
          const keyA = a[this.sortKey];
          const keyB = b[this.sortKey];
          return this.sortOrder ? keyA.localeCompare(keyB) : keyB.localeCompare(keyA);
        });
      }

      return songs;
    },
  },
  methods: {
    sortBy(key) {
      if (key === this.sortKey) {
        this.sortOrder = !this.sortOrder;
      } else {
        this.sortKey = key;
        this.sortOrder = false;
      }
    },
    toggleFavorite(songId) {
      if (this.isFavorite(songId)) {
        this.favorites = this.favorites.filter(id => id !== songId);
      } else {
        this.favorites.push(songId);
      }
    },
    isFavorite(songId) {
      return this.favorites.includes(songId);
    },
    playSong(index) {
      // Implement your audio playback logic here
    },
    formatDuration(duration) {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },
    toggleShowFavorites() {
      this.showFavorites = !this.showFavorites;
    },
  },
};
</script>
