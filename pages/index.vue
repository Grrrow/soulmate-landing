<template>
  <div>
    <Header />
    <Hero />
    <Form />
    <Mission />
    <Technology />
    <Contact />
  </div>
</template>
<style>
  html{
    font-family: 'Space Grotesk', sans-serif;
  }
</style>
<script>
import Contact from '../components/Contact.vue'
export default {
  components: { Contact },
  name: 'IndexPage'
}
</script>
