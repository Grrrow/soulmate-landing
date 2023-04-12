<template>
  <section class="hero">
    <div class="container mx-auto px-4">
      <div class="content">
        <h1 class="text-white text-4xl font-bold mb-8">Using AI to connect you with others, regardless of language.</h1>
        <h2>Where language is no longer a barrier to connection, our AI-powered matchmaking and communication platform allows you to effortlessly connect with others from all over the world, breaking down language obstacles and making true communication possible.</h2>
        <a href="mailto:info@solvmate.co" target="_blank" class="bg-blue-500 mt-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-block">
          Join the waitlist >
        </a>
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
