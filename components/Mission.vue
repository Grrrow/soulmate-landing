<template>
  <section class="mission h-screen" id="mission">
    <div class="backdrop-container mx-auto px-4 text-white h-screen flex items-center justify-center">
      <div class="text-center max-w-4xl">
        <h2 class="text-4xl font-bold mb-8">Our Mission</h2>
        <p class="text-xl mb-8">
          We are building technology that creates, facilitates and strengthens human connection.
          We leverage AI as a way to match, connect, support and protect people.
        </p>
        <p class="text-xl mb-8">
          We believe that, no matter what the future holds, meaningful human connections won’t go out of style.
          We are here to create technology that works for all, and we believe that diverse teams create more fair and inclusive products.
          Trust and respect are essential for people to feel safe and supported.
          AI can help us build a better, positive future for all.
        </p>
        <p class="text-xl">
          Expanding your world and your mind, one conversation at a time.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mission {
  background-image: url('/mission-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.backdrop-container {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>

<script>
export default {
  name: 'Mission'
}
</script>
