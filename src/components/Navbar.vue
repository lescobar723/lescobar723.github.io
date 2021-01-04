<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand href="#home">
            <img alt="Lesley Escobar" src="../assets/favicon.png" style="width: 45px;">
            Lesley Escobar
        </b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item class="nav-it" href='#about'>About</b-nav-item>
                <b-nav-item class="nav-it" href='#portfolio'>Portfolio</b-nav-item>
                <b-nav-item class="nav-it" href='#skills'>Skills</b-nav-item>
                <b-nav-item class="nav-it" href="https://drive.google.com/file/d/1j3-xdBtwXnox_wSACiDbUY4uY77lJWYE/view?usp=sharing" target="_blank">Resume</b-nav-item>
                <b-nav-item class="nav-it" href='#contact'>Contact Me</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: 'Navbar',
    data() {
        return {
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
.nav-it{
    padding-right: 30px;
    padding-left: 30px;
}
.navbar.navbar-dark.bg-dark {
    background-color: #ffa494!important;
}
.navbar-dark .navbar-nav .nav-link{
    color: snow!important;
}
.navbar-dark .navbar-nav .nav-link:hover{
    color:#f07269!important;
}
</style>