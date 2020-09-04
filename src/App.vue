<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js App"/>
    <LandingPage msg="Welcome to Your Vue.js App"/>
    <Footer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    LandingPage,
    Header,
    Footer
  }
}
</script>

<style>

</style>
