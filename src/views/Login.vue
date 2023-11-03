<template>
  <div id="login-view">
    <form class="login-form">
      <div class="wrapper-logo">
        <img src="@/assets/logo.svg" alt="Logo" />
        <div>KRAKEN.FM</div>
      </div>
      <input id="input-email" placeholder="E-mail" required v-model="email" />
      <input
          id="input-password"
          placeholder="Password"
          required
          type="password"
          v-model="password"
      />
      <button id="btn-submit" @click="login" :disabled="isLoginDisabled">LOGIN</button>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    isLoginDisabled() {
      return !this.email || this.password.length < 6;
    },
  },
  methods: {
    login() {
      const authStore = useAuthStore();
      authStore.authenticate(this.email, this.password);
    },
  },
};
</script>