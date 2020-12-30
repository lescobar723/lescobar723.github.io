<template>
    <div id="start">
        <h1>Skills</h1>
        <hr>
        <div class="all__skills">
            <section class="skills">
                <div class="skill" v-for="language in languages" :key="language.language">
                    <h3>{{language.language}}</h3>
                    <div class="skill__outer-bar">
                        <div class="skill__inner-bar" :style="{width:language.percentage + '%'}"></div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Skills',
  data() {
      return {
          languages:[
              { language: 'C++', percentage: '80' },
              { language: 'Python', percentage: '60' },
              { language: 'HTML & CSS', percentage: '80' },
              { language: 'JavaScript', percentage: '65' },
              { language: 'Vue.js', percentage: '70' },
              { language: 'React.js', percentage: '55' },
              { language: 'Git', percentage: '30' },
              { language: 'Arduino', percentage: '10' },
          ]
      }
  }
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
.all__skills {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.skills {
    display: flex;
    flex-direction: column;
    align-self: center;
}

.skill {
    margin: 1em 0;
    position: relative;
    width: 22.5em;
}

.skill__outer-bar, .skill__inner-bar {
    height: .75em;
}

.skill__outer-bar {
    margin-top: 1em;
    background: #333;
}

.skill__inner-bar {
    background: #f07269;
    animation: fillBar 1s forwards;
    transform: scaleX(0);
    transform-origin: 0 0;
}

@keyframes fillBar {
    to {
        transform: scaleX(1);
    }
}

</style>