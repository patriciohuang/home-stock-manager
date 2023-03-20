import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@mdi/font/css/materialdesignicons.css'
import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'


//Google firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvMK5yb92il03SuQC5lXtlCSWUDDvRB40",
  authDomain: "home-stock-manager-380714.firebaseapp.com",
  projectId: "home-stock-manager-380714",
  storageBucket: "home-stock-manager-380714.appspot.com",
  messagingSenderId: "542142689373",
  appId: "1:542142689373:web:a7830856238ac2d9dd5db4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const myCustomDarkTheme = {
  dark: false,
  colors: {
    background: '#B1A7A6',
    surface: '#161A1D',
    primary: '#377ef9',
    secondary: '#1b3e70',
    error: '#E07A5F',
    info: '#3D405B',
    success: '#81B29A',
    warning: '#F2CC8F',
    text: '#F4F1DE',
    icon: '#adb5bd'
  }
};
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  theme: {
    defaultTheme: 'myCustomDarkTheme',
    themes: {
      myCustomDarkTheme
    }
  }
});

const app = createApp(App);

app.use(router)
app.use(vuetify)
app.mount('#app')