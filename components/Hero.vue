<template>
  <section class="hero bg-white" id="hero">
    <div class="container mx-auto px-4">
      <div class="content mx-auto max-w-2xl">
        <h1 class="text-4xl font-bold mb-8 text-center">SolvMate leverages AI to connect you to people around the world, in your language of choice.</h1>
        <img src="https://images.unsplash.com/photo-1500389723459-ca24a5564899?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVvcGxlLHN1bnNldHx8fHx8fDE2ODE2NjU1MTE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800" alt="People at Sunset" class="mx-auto mb-8">
        <p class="text-xl text-black text-left mb-8">
          Our AI-powered platform allows you to connect to people from around the world who share common interests, breaking down language barriers.
        </p>
        <p class="text-xl text-black text-left">
          If you are into learning and practicing new languages, you are going to love SolvMate!
        </p>

         <a @click="this.scrollToForm" href="#form" class="join-btn mt-8 text-white font-bold py-2 px-4 rounded-full inline-block uppercase tracking-wider">
          Join the waitlist
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
}
.content {
  text-align: center;
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
      console.log('scrolling to form', event)
      event.preventDefault()
      const formSection = document.querySelector('#form')
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
