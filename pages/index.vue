<template>
  <div>
    <Header />
    <Hero />
    <Form />
    <Mission />
    <Technology />
    <Contact />
    <Footer />
  </div>
</template>
<style>
  html{
    font-family: 'Mukta Vaani', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Heebo', sans-serif;
  }
</style>
<script>
export default {
  name: 'IndexPage',
  mounted: function () {
    this.$ga.page('/')
  }
}
</script>
