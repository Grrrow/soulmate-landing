<template>
  <section class="technology bg-white py-16 h-screen">
    <div class="container mx-auto px-4">
      <div class="content">
        <h2 class="text-3xl font-bold mb-8">Our Technology</h2>
        <p class="text-lg text-gray-800 mb-8">
          SolvMate leverages AI in 3 major ways.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center">
            <img src="/images/match-icon.png" alt="Matching Icon" class="h-16 w-16 mb-4">
            <p class="text-lg text-gray-800 text-center">
              First, to better match people, based on both affinity and the way they interact with other users.
            </p>
          </div>
          <div class="flex flex-col items-center">
            <img src="/images/translation-icon.png" alt="Translation Icon" class="h-16 w-16 mb-4">
            <p class="text-lg text-gray-800 text-center">
              Second, to do seamless and near real-time Machine Translation from many to many languages.
            </p>
          </div>
          <div class="flex flex-col items-center">
            <img src="/images/generative-ai-icon.png" alt="Generative AI Icon" class="h-16 w-16 mb-4">
            <p class="text-lg text-gray-800 text-center">
              And last but not least, it leverages generative AI to protect people and give them control of what content reaches them. We want to give you full control and allow you to interact with others on your own terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.technology {
  background-color: #ffffff;
}
.content {
  max-width: 800px;
  margin: 0 auto;
}
</style>

<script>
export default {
  name: 'Technology'
}
</script>
