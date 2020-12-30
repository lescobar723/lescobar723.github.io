<template>
  <div>
    <div id="blurb-container">
      <section id="blurb">
        <h1> {{ greeting }} </h1>
        <p>I am a senior and an aspiring software engineer studying Computer Science at the
          <strong id="UM">University of Michigan</strong>
          (<span><strong><em>Go Blue!</em></strong></span>).
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Home',
  data(){
    return{
      msgs : [
        { id: 1, title: "Hola Mundo, Soy Lesley!" },
        { id: 2, title: "Hello World, I'm Lesley!" }
      ],
      greeting: "Hola Mundo, Soy Lesley!"
    }
  },
  created() {
    this.greetings();
  },
  methods: {
    greetings(){
      let x = 0;
      setInterval(() => {
        if (x == 0){
          x = 1;
        }
        else{
          x = 0;
        }
        this.greeting=this.msgs[x].title
      }, 2000);
    }
  }
}
</script>

<style scoped>
#blurb-container{
  padding: 10%;
}
#blurb{
    max-width: 60%;
    background-color: #bbb;
    border-color: #000;
    border-style: solid;
    border-width: .875px 2px;
    padding: 6.125px 11.5px 7px 10.5px;
    box-shadow: -3.5px -7px 0 0 #bbb, 2.5px 6.125px 0 0 #bbb, -3.5px 6.125px 0 0 #bbb, 2.5px -7px 0 0 #bbb;
    -webkit-filter: drop-shadow(7px 8px 0 #000);
    filter: drop-shadow(7px 8px 0 black);
    font-family: VT323,monospace;
    text-align: center;
}
#blurb h1{
  background: #ffa494;
  color: snow;
  font-weight: 400;
  font-size: 32px;
  line-height: 1;
}
span{
  color:rgb(26, 6, 156);
}
#UM{
  color: rgb(244, 221, 96);
}

</style>
