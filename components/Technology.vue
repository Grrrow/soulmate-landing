<template>
  <section class="technology bg-white pt-32 px-4 h-screen" id="technology">
    <div class="container mx-auto px-4">
      <div class="content">
        <h2 class="text-3xl font-bold mb-8 text-center">Our Technology</h2>
        <p class="text-lg text-gray-800 text-center mb-16 md:mb-48">
          SolvMate leverages AI in 3 major ways.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="flex flex-col items-center">
            <PeopleGroup class="h-8 w-8 mb-4" />
            <p class="text-lg text-gray-800 text-center font-bold mb-4">
              Recommender System
            </p>
            <p class="text-lg text-gray-800 text-center">
              SolvMate's technology improves user matching based on affinity and interaction patterns.
            </p>
          </div>
          <div class="flex flex-col items-center">
            <Comment class="h-8 w-8 mb-4" />
            <p class="text-lg text-gray-800 text-center font-bold mb-4">
              Machine Translation
            </p>
            <p class="text-lg text-gray-800 text-center">
              SolvMate's technology enables seamless and near real-time machine translation across multiple languages.
            </p>
          </div>
          <div class="flex flex-col items-center">
            <LockOn class="h-8 w-8 mb-4" />
            <p class="text-lg text-gray-800 text-center font-bold mb-4">
              Trust &amp; Safety
            </p>
            <p class="text-lg text-gray-800 text-center">
              SolvMate uses generative AI to protect user content and empower them with control over their interactions.
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
import PeopleGroup from '@/components/Icons/PeopleGroup.vue'
import Comment from '@/components/Icons/Comment.vue'
import LockOn from '@/components/Icons/LockOn.vue'
export default {
  name: 'Technology',
  components: {
    PeopleGroup,
    Comment,
    LockOn
  }
}
</script>
