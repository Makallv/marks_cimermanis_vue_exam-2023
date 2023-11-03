<template>
  <div id="about-view">
    <div class="wrapper-header">
      <h1>ABOUT ME</h1>
      <div class="settings">
        <button
            id="btn-edit"
            @click="toggleEditingForm"
            :class="{ active: isEditingForm }"
        >
          {{ isEditingForm ? "Cancel" : "Edit Form" }}
        </button>
        <button
            id="btn-save"
            @click="saveForm"
            v-if="isEditingForm"
        >
          Save Form
        </button>
      </div>
    </div>
    <form>
      <div class="wrapper-input" v-if="isEditingForm">
        <label>NAME</label>
        <input id="input-name" v-model="user.name" />
      </div>
      <div class="wrapper-input" v-if="isEditingForm">
        <label>SURNAME</label>
        <input id="input-surname" v-model="user.surname" />
      </div>
      <div class="wrapper-input" v-if="isEditingForm">
        <label>STUDENT CODE</label>
        <input id="input-code" v-model="user.code" />
      </div>
      <div class="wrapper-songs">
        <label>FAVORITE SONGS</label>
        <ul v-if="user.favorite_songs.length > 0">
          <li v-for="(song, index) in user.favorite_songs" :key="index">
            <img id="img-album" :src="song.albumPhoto" alt="albumPhoto"/>
            <div class="song-info">
              <p id="txt-song" class="song-name">{{ song.title }}</p>
              <p id="txt-artist" class="song-artists">{{ song.artists.join(', ') }}</p>
            </div>
          </li>
        </ul>
        <div id="txt-empty" class="empty" v-else>
          NO SONGS FOUND
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditingForm: false,
      user: {
        name: "John", // Default value
        surname: "Smith", // Default value
        code: "IT1234", // Default value
        favorite_songs: [
          // Add your favorite songs here with albumPhoto, title, artists, etc.
        ],
      },
    };
  },
  methods: {
    toggleEditingForm() {
      this.isEditingForm = !this.isEditingForm;
    },
    saveForm() {
      this.user.name = this.$refs.inputName.value;
      this.user.surname = this.$refs.inputSurname.value;
      this.user.code = this.$refs.inputCode.value;

      // After saving, disable form editing
      this.isEditingForm = false;
    },
  },
};
</script>
