<template>
  <section class="hero bg-white h-screen flex items-center justify-center md:justify-start" id="hero">
    <div class="px-4 md:pl-32">
      <div class="max-w-2xl text-center md:text-left">
        <h1 class="text-4xl font-bold mb-8">SolvMate leverages AI to connect you to people around the world, in your language of choice.</h1>
        <p class="text-xl text-black mb-8">
          Our AI-powered platform allows you to connect to people from around the world who share common interests, breaking down language barriers.
        </p>
        <p class="text-xl text-black">
          If you are into learning and practicing new languages, you are going to love SolvMate!
        </p>
        <div class="flex justify-center">
          <a @click="this.scrollToForm" href="#form" class="join-btn mt-8 text-white text-xl font-bold py-2 px-4 rounded-full inline-block uppercase tracking-wider">
            Join the waitlist
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-image: url('/hero-bg.jpg');
  background-size: cover;
  background-position: right right;
  background-repeat: no-repeat;
}
.join-btn {
  background-color: #f9a858;
}

.join-btn:hover {
  background-color: #f59434;
}
</style>

<script>
export default {
  name: 'Hero',
  methods: {
    scrollToForm: function(event) {
      event.preventDefault()
      const formSection = document.querySelector('#form')
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
