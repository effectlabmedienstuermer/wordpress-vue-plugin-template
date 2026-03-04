import './main.css'
import { createApp } from 'vue'
import { defineComponent } from 'vue'

const App = defineComponent({
  template: `
    <div class="vp-app">
      <p>Hello World</p>
    </div>
  `,
})

const mount = () => {
  const el = document.getElementById('vue-plugin-app')
  if (el && !el.__vue_app__) {
    createApp(App).mount(el)
  }
}

mount()
document.addEventListener('DOMContentLoaded', mount)
window.addEventListener('load', mount)

const observer = new MutationObserver(() => {
  const el = document.getElementById('vue-plugin-app')
  if (el && !el.__vue_app__) {
    mount()
    observer.disconnect()
  }
})
observer.observe(document.documentElement, { childList: true, subtree: true })
