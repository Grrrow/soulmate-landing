<template>
  <section class="pt-32 px-4 h-screen" id="form">
    <form class="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h1 class="text-2xl font-semibold mb-4">Sign up for SolvMate</h1>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="first-name" class="block text-gray-700 font-medium mb-1"
            >First Name<span class="text-red-500">*</span></label
          >
          <input
            id="first-name"
            type="text"
            v-model="firstName"
            class="w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4"
            required
          />
        </div>
        <div>
          <label for="last-name" class="block text-gray-700 font-medium mb-1"
            >Last Name<span class="text-red-500">*</span></label
          >
          <input
            id="last-name"
            type="text"
            v-model="lastName"
            class="w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4"
            required
          />
        </div>
      </div>
      <div class="mt-4">
        <label for="email" class="block text-gray-700 font-medium mb-1"
          >Email<span class="text-red-500">*</span></label
        >
        <input
          id="email"
          type="email"
          v-model="email"
          class="w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4"
          required
        />
      </div>
      <div class="mt-4">
        <label for="location" class="block text-gray-700 font-medium mb-1"
          >Select Location<span class="text-red-500">*</span></label
        >
        <select
          id="location"
          v-model="location"
          class="w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4"
          required
        >
          <option value="" disabled>Select a country</option>
          <!-- Add your country options here -->
        </select>
      </div>
      <div class="mt-4">
        <label
          for="preferred-language"
          class="block text-gray-700 font-medium mb-1"
          >Preferred Language<span class="text-red-500">*</span></label
        >
        <input
          id="preferred-language"
          type="text"
          v-model="preferredLanguage"
          class="w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4"
          required
        />
      </div>
      <div class="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label for="fluent-in" class="block text-gray-700 font-medium mb-1"
            >Fluent In</label
          >
          <select
            id="fluent-in"
            v-model="fluentIn"
            class="w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4"
          >
            <option value="">Select a language</option>
            <!-- Add your language options here -->
          </select>
        </div>
        <div>
          <label
            for="interested-in"
            class="block text-gray-700 font-medium mb-1"
            >Interested In Learning</label
          >
          <select
            id="interested-in"
            v-model="interestedIn"
            class="w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4"
          >
            <option value="">Select a language</option>
            <!-- Add your language options here -->
          </select>
        </div>
      </div>
      <div class="mt-4">
        <label for="reason" class="block text-gray-700 font-medium mb-1"
          >Why are you excited about using SolvMate?</label
        >
        <textarea
          id="reason"
          v-model="reason"
          class="w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4"
          rows="3"
        ></textarea>
      </div>
      <div class="mt-4">
        <p for="agree" class="text-gray-700">Read our
          <a href="#" class="text-blue-500">privacy policy</a> and
          <a href="#" class="text-blue-500">terms</a>
          related to any information you may share with us. Thank you.
        </p>
      </div>
      <button
        type="submit"
        class="notify-btn font-bold w-full text-white py-2 px-4 mt-6 rounded-md transition duration-300"
      >
        Notify me
      </button>
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      location: "",
      preferredLanguage: "",
      fluentIn: "",
      interestedIn: "",
      reason: "",
      agree: false,
    };
  },
};
</script>
<style scoped>
.notify-btn {
  background-color: #f9a858;
}

.notify-btn:hover {
  background-color: #f59434;
}
</style>
