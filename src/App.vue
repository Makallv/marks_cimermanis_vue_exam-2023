<template>
  <div>
    <!-- HEADER -->
    <Header v-if="isLoggedIn"/>
    <!-- HEADER END -->

    <!-- BODY -->
    <div id="section-body">
      <NavigationComponent v-if="isLoggedIn"/>
      <router-view className="section-router" v-if="isLoggedIn"/>
    </div>
    <!-- BODY END -->

    <!-- PLAYER -->
    <div id="section-player" v-if="isLoggedIn">
      <AudioPlayer/>
    </div>
    <!-- PLAYER END -->
  </div>
</template>

<script>
import Header from '@/components/HeaderComponent.vue';
import AudioPlayer from '@/components/AudioPlayerComponent.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
import router from "@/router";
router.push('/login')

export default {
  components: {
    NavigationComponent,
    Header,
    AudioPlayer,
  },
  data() {
    return {
      isLoggedIn: false, // Set this to true if the user is logged in, otherwise keep it as false
    };
  },
};
</script>
