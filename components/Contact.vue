<template>
  <section class="contact bg-gray-100 px-4 h-screen flex items-center justify-center" id="contact">
    <div class="container mx-auto px-4">
      <div class="content">
        <h2 class="text-4xl font-bold mb-8 text-center">Contact Us</h2>
        <p class="text-xl text-gray-800 mb-8">We value:</p>
        <ul class="list-disc list-inside text-xl text-gray-800 mb-8">
          <li>
            <span class="font-bold">Growth mindset</span> - we encourage
            ourselves and others to get outside of our comfort zone.
          </li>
          <li>
            <span class="font-bold">Empathy and trust</span> - we love finding
            the commonality between people, rather than focusing on their
            differences.
          </li>
          <li>
            <span class="font-bold">Openness and advocacy</span> - to diversity
            and inclusion + to do what is right for the user/society as a whole.
          </li>
          <li>
            <span class="font-bold">User-centricity</span> - users of technology
            (and society as a whole) are at the center of what we build and what
            we do.
          </li>
          <li>
            <span class="font-bold">Curiosity and humility</span> - we are
            humble and know we can learn something from everyone.
          </li>
        </ul>
        <p class="text-xl text-gray-800 mb-8">
          We’re built on the foundation of our values and we are looking for
          like-minded optimists who want to be part of our journey. If this
          resonates with you, we would love to hear from you. You can reach us
          at:
        </p>
        <p class="text-xl text-gray-800 font-bold">
          <a
            href="mailto:info@solvmate.co"
            class="text-blue-500 hover:underline"
            >info@solvmate.co</a
          >
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
  name: "Contact"
};
</script>
