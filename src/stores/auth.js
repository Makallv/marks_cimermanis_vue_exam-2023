import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        user: {
            name: 'Marks',
            surname: 'Cimermanis',
            code: 'IT21060',
            favorite_songs: [],
        },
    }),
    getters: {
        isAuthenticated() {
            return this.authenticated;
        },
        getFavoriteSongs() {
            return this.user.favorite_songs;
        },
        is_authenticated() {
            const localStorageValue = localStorage.getItem('is_authenticated');
            return localStorageValue ? JSON.parse(localStorageValue) : this.authenticated;
        },
    },
    actions: {
        setUserData(name, surname, code) {
            this.user.name = name;
            this.user.surname = surname;
            this.user.code = code;
        },
        authenticate(email, password) {
            const yourEmail = 'marks.cimermanis@va.lv';
            const yourPassword = '123456';

            if (email === yourEmail && password === yourPassword && password.length >= 6) {
                this.authenticated = true;
                localStorage.setItem('is_authenticated', true);
                // Change the router address programmatically to '/' using your router library
            }
        },
        logout() {
            localStorage.clear();
            this.authenticated = false;
            // Change the router address programmatically to '/login' using your router library
        },
        toggleFavorite(songID) {
            const index = this.user.favorite_songs.indexOf(songID);
            if (index === -1) {
                this.user.favorite_songs.push(songID);
            } else {
                this.user.favorite_songs.splice(index, 1);
            }

            localStorage.setItem('favorite_songs', JSON.stringify(this.user.favorite_songs));
        },
    },
});
