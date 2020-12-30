<template>
  <div id="app">
    <Navbar id="nav"/>
    <div id="home">
      <Home/>
      <div class="arrows">
        <div v-b-hover="handleHover">
          <b-link href="#about">
          <b-icon v-if="isHovered" icon="arrow-down-square-fill" font-scale="4" style='color:#f07269;'>
          </b-icon>
          </b-link>
          <b-link href="#about">
          <b-icon v-if="!isHovered" icon="arrow-down-square-fill" font-scale="4" style='color:#ffa494;'>
          </b-icon>
          </b-link>
        </div>
      </div>
    </div>
    <div id="about">
      <About/>
    </div>
    <div id="portfolio">
      <Portfolio/>
    </div>
    <div id="skills">
      <Skills/>
    </div>
    <div id="contact">
      <Contact/>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from './components/Home.vue'
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Home,
    Navbar,
    About,
    Portfolio,
    Skills,
    Contact
  },
  data(){
    return{
      isHovered: false,
    }
  },
  methods: {
    handleHover(hovered) {
        this.isHovered = hovered
    }
  }
}
</script>

<style>
html{
	scroll-behavior: smooth;
}
div{
  display: block;
}
.arrows{
  text-align: center;
}
#home {
  background: url(assets/IMG_2868.jpg);
  display: block;
  min-height: 100vh;
	background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
#nav {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
}
#about{
  display: block;
  padding-top: 6%;
  padding-bottom: 7%;
}
#skills{
  display: block;
  min-height: 100vh;
  padding-top: 6%;
  padding-bottom: 7%;
}
#contact{
  display: block;
  min-height: 100vh;
}
</style>
