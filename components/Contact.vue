<template>
  <section class="contact bg-gray-100 py-16 h-screen">
    <div class="container mx-auto px-4">
      <div class="content">
        <h2 class="text-3xl font-bold mb-8">Contact Us</h2>
        <p class="text-lg text-gray-800 mb-8">
          We value:
        </p>
        <ul class="list-disc list-inside text-lg text-gray-800 mb-8">
          <li>Growth mindset - we encourage ourselves and others to get outside of our comfort zone.</li>
          <li>Empathy and trust - we love finding the commonality between people, rather than focusing on their differences.</li>
          <li>Openness and advocacy - to diversity and inclusion + to do what is right for the user/society as a whole.</li>
          <li>User-centricity - users of technology (and society as a whole) are at the center of what we build and what we do.</li>
          <li>Curiosity and humility - we are humble and know we can learn something from everyone.</li>
        </ul>
        <p class="text-lg text-gray-800 mb-8">
          We’re built on the foundation of our values and we are looking for like-minded optimists who want to be part of our journey.
          If this resonates with you, we would love to hear from you. You can reach us at:
        </p>
        <p class="text-lg text-gray-800">
          <a href="mailto:info@soulmate.co" class="text-blue-500 hover:underline">info@soulmate.co</a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background-color: #f8f8f8;
}
.content {
  max-width: 800px;
  margin: 0 auto;
}
</style>

<script>
export default {
  name: 'Contact',
}
</script>
