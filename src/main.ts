import { createApp } from 'vue'

// tailwind css
import './index.css'

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// icons
import { fa, aliases as faAliases } from 'vuetify/iconsets/fa'
import { faIconAliases } from '@jsonforms/vue-vuetify'
import '@fortawesome/fontawesome-free/css/all.css'

import { createPinia } from 'pinia'

import App from './App.vue'

const vuetify = createVuetify({
    icons: {
        defaultSet: 'fa',
        sets: {
          fa,
        },
        aliases: { ...faAliases, ...faIconAliases },
      },
    components,
    directives
})

const pinia = createPinia()
createApp(App).use(vuetify).use(pinia).mount('#app')

