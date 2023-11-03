<template>
  <div id="album-view">
    <div class="wrapper-header">
      <h1>ALBUMS</h1>
      <div class="settings">
        <button id="btn-grid" @click="switchLayout('grid')" :class="{ active: layout === 'grid' }">Grid</button>
        <button id="btn-list" @click="switchLayout('list')" :class="{ active: layout === 'list' }">List</button>
      </div>
    </div>
    <ul id="list-albums" v-if="layout === 'list">
      <li class="album" v-for="(album, index) in albums" :key="index" @dblclick="playAlbum(album)">
        <img id="img-album" :src="album.albumPhoto" />
        <div class="album-info">
          <h4 id="txt-album-name">{{ album.title }}</h4>
          <p id="txt-album-artists">{{ album.artists.join(', ') }}</p>
          <div class="album-year">
            <p id="txt-album-year">{{ album.year }}</p>
            <p id="txt-album-tracks">{{ album.songs.length }}</p>
          </div>
        </div>
      </li>
    </ul>
    <div class="grid-albums" v-else>
      <div class="album" v-for="(album, index) in albums" :key="index" @dblclick="playAlbum(album)">
        <img id="img-album" :src="album.albumPhoto" />
        <div class="album-info">
          <h4 id="txt-album-name">{{ album.title }}</h4>
          <p id="txt-album-artists">{{ album.artists.join(', ') }}</p>
          <div class="album-year">
            <p id="txt-album-year">{{ album.year }}</p>
            <p id="txt-album-tracks">{{ album.songs.length }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      albums: [/* Your array of albums with songs */],
      layout: 'grid', // Default layout
    };
  },
  methods: {
    switchLayout(newLayout) {
      this.layout = newLayout;
    },
    playAlbum(album) {
      // Implement your logic to play all songs in the selected album
    },
  },
};
</script>