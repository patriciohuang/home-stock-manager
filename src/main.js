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

const myCustomDarkTheme = {
  dark: false,
  colors: {
    background: '#161A1D',
    surface: '#495057',
    primary: '#377ef9',
    secondary: '#1b3e70',
    error: '#E07A5F',
    info: '#3D405B',
    success: '#81B29A',
    warning: '#F2CC8F',
    text: '#F4F1DE',
    icon: '#adb5bd'
  }
}
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
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')