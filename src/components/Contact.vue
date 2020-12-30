<template>
    <div id="start">
        <h1>Contact Me</h1>
        <hr>
        <b-link href="mailto:lesleyescobar0723@gmail.com">
            <b-icon icon="envelope-fill" font-scale="5" class="rounded-circle bg-light p-2"></b-icon>
        </b-link>
        <b-link href="https://github.com/lescobar723" target="_blank">
            <b-icon icon="github" font-scale="5" class="rounded-circle bg-light p-2"></b-icon>
        </b-link>
        <b-link href="https://www.linkedin.com/in/lesleyescobar/" target="_blank">
            <b-icon icon="linkedin" font-scale="5" class="rounded-circle bg-light p-2"></b-icon>
        </b-link>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Contact',
  data() {
      return {
      }
  }
}
</script>

<style scoped>
#start{
    padding-top: 90px;
    padding-bottom: 7%;
}
div{
    text-align: center;
    background-color: #34345238;
}
h1{
    font-weight: bold;
    text-align: center;
    color: #f07269;
}
hr{
    width: 200px;
    background-color: #f07269;
    height: 2px;
    margin-bottom: 30px;
}
</style>