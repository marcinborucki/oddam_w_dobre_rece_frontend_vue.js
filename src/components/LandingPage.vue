<template>
<div>
<header-app/>
    <section id="stats" class="stats">
      <div class="container container--85">
        <div class="stats--item">
          <em>{{sum}}</em>
          <h3>Oddanych worków</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius est beatae, quod accusamus illum tempora!</p>
        </div>

        <div class="stats--item">
          <em>{{count}}</em>
          <h3>Przekazanych darów</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam magnam, sint nihil cupiditate quas quam.</p>
        </div>

      </div>
    </section>

    <section id="steps" class="steps">
      <h2>Wystarczą 4 proste kroki</h2>

      <div class="steps--container">
        <div class="steps--item">
          <span class="icon icon--hands"></span>
          <h3>Wybierz rzeczy</h3>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div class="steps--item">
          <span class="icon icon--arrow"></span>
          <h3>Spakuj je</h3>
          <p>skorzystaj z worków na śmieci</p>
        </div>
        <div class="steps--item">
          <span class="icon icon--glasses"></span>
          <h3>Zdecyduj komu chcesz pomóc</h3>
          <p>wybierz zaufane miejsce</p>
        </div>
        <div class="steps--item">
          <span class="icon icon--courier"></span>
          <h3>Zamów kuriera</h3>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>

      <a href="#" class="btn btn--large">Załóż konto</a>
    </section>

    <section id="about-us" class="about-us">
      <div class="about-us--text">
        <h2>O nas</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas vitae animi rem pariatur incidunt libero optio esse quisquam illo omnis.</p>
        <img src="../assets/images/signature.svg" class="about-us--text-signature" alt="Signature" />
      </div>
      <div class="about-us--image"><img src="../assets/images/about-us.jpg" alt="People in circle" /></div>
    </section>

    <section id="help" class="help">
      <h2>Komu pomagamy?</h2>

      <!-- SLIDE 1 -->
      <div class="help--slides active" data-id="1">
        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
          Możesz sprawdzić czym się zajmują.</p>

        <ul class="help--slides-items">
          <li>
            <div class="col" v-for="inst in this.even" v-bind:key="inst.id"  >
              <div class="title" v-if="even" >{{inst.name}}</div>
              <div class="subtitle" v-if="even">{{inst.description}}</div>
            </div>
          </li>
        </ul>
        <ul class="help--slides-items">
          <li>
            <div class="col" v-for="inst in this.noeven" v-bind:key="inst.id"  >
              <div class="title" v-if="noeven" >{{inst.name}}</div>
              <div class="subtitle" v-if="noeven">{{inst.description}}</div>
            </div>
          </li>
      </ul>
 </div>
</section>
  <footer-app />
   </div>
  </template>

<script>
import '../assets/js/app.js'
import header from '../components/Header.vue'
import footer from '../components/Footer.vue'
import axios from "axios"
export default {
  name: 'LandingPage',
  components: {
      'header-app': header,
      'footer-app': footer,
  },
  data() {
    return{
      sum: null,
      count: null,
      institutions: [],
    };
  },

  created() {
    fetch('http://localhost:8081/api/donations/')
          .then(response => response.json())
      .then(data => (this.sum = data.sum)(this.count = data.count)); 
      axios.get(`http://localhost:8081/api/institutions`)
    .then(response => {this.institutions = response.data
    })
       },
       computed: {
    even: function() {
      return this.institutions.filter(i => i.id % 2 != 0)
    }  ,  
    noeven: function() {
      return this.institutions.filter(i => i.id % 2 == 0)
    }  
}
  
  }
</script>

<style scoped>
@import "../assets/css/style.css"
</style>
