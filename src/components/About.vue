<template>
   <div id="start">
       <h1>About Me</h1>
       <hr>
        <section class="section">
            <b-container class="bv-example-row">
                <b-row>
                    <b-col xs="12" md="6" lg="4">
                        <img alt="Lesley Escobar" src="../assets/IMG_8768.jpg">
                    </b-col>
                    <b-col>
                        <div class="box">
                            <p>I am a senior at the University of Michigan studying Computer Science within the School of Literature, Science, and the Arts. </p>
                            <p>
                                My journey to become a Computer Scientist was not a traditional path. Initially, I wanted to pursue a major in Chemisty and minor in Computer Science. I had completed two years of research work and although I decided to switch majors, I am grateful for the experince within the Chemistry department. While researching, I was interested by the programs used to analyze compounds and took an intorductory computer science course. After that, my interest in Computer Science grew. I am still passionate about Chemistry and will continue to pursure it on the side.
                            </p>
                            <div class="links">
                                <b-link href="https://github.com/lescobar723" target="_blank">
                                    <b-icon icon="github" font-scale="4" style="color: black;"></b-icon>
                                </b-link>
                                <b-link href="https://www.linkedin.com/in/lesleyescobar/" target="_blank">
                                    <b-icon icon="linkedin" font-scale="4" style="color: black;"></b-icon>
                                </b-link>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </section>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Home',
}
</script>

<style scoped>
#start{
    padding-top: 90px;
    padding-bottom: 7%;
}
hr{
    width: 200px;
    background-color: #f07269;
    height: 2px;
    margin-bottom: 30px;
}
h1{
    font-weight: bold;
    text-align: center;
    color: #f07269;
}
img{
    width: 85%;
    -webkit-filter: drop-shadow(7px 8px 0 #ffa494);
    filter: drop-shadow(7px 8px 0 #ffa494);
    border-color: #000;
    border-style: solid;
    border-width: .875px 2px;
}
.section{
    text-align: center;
}
.box{
    margin-top: 6%;
    text-align: left;
}
.links{
    padding-top: 20px;
    text-align: center;
}

</style>