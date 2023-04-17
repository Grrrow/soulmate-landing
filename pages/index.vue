<template>
  <div class="scroll-container" @scroll="this.toggleScrollSnap">
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
  name: 'IndexPage',
  methods: {
    toggleScrollSnap: function(event) {
      console.log(event)
      const scrollContainer = document.querySelector(".scroll-container");
      const contactSection = document.querySelector("#contact");
      const distanceFromTop = contactSection.getBoundingClientRect().top;
      console.log({distanceFromTop})
      if (distanceFromTop < 0) {
        scrollContainer.style.scrollSnapType = "none";
      } else {
        scrollContainer.style.scrollSnapType = "y mandatory";
      }
    }
  }
}
</script>
