<template>
  <div class="scroll-container">
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
    font-family: 'Syne', sans-serif;
  }

  .scroll-container {
    scroll-snap-type: y mandatory; /* Enable vertical scroll snap behavior */
    overflow-y: scroll; /* Add vertical scrollbar to container */
    height: 100vh; /* Set height of container */
  }

  section {
    scroll-snap-align: start; /* Snap sections to the start of the container */
    height: 100vh; /* Set height of sections */
  }
</style>
<script>
export default {
  name: 'IndexPage'
}
</script>
