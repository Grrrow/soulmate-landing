<template>
  <section class="hero">
    <div class="container mx-auto px-4">
      <div class="content">
        <h1 class="text-white text-4xl font-bold mb-8">Using AI to connect you to people around the world, in your language of choice.</h1>
        <h2>Our AI-powered matchmaking and communication platform allows you to effortlessly communicate with others from all over the world, breaking down language barriers and helping you learn and practice new languages.</h2>
        <button class="bg-blue-500 mt-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Join the waiting list >
        </button>
      </div>
   
    </div>
  </section>
</template>

<style>
.hero {
  background-image: url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center center;
  height: 100vh;
  color: aliceblue;
  background: black;
  display: flex;
  align-items: center;
}
.content {
  text-align: center;
}
</style>


<script>
export default {
  name: 'Hero'
}
</script>
