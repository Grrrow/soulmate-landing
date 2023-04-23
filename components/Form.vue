<template>
  <section
    class="flex items-center justify-center pt-32 px-4 h-screen"
    id="form"
  >
    <form class="max-w-md bg-white p-6 rounded-md shadow-xl">
      <h1 class="text-xl font-semibold mb-8 uppercase text-center">
        Get notified when we launch our Beta version
      </h1>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="first-name" class="block text-gray-700 font-medium mb-1"
            >First Name<span class="text-red-500">*</span></label
          >
          <input
            id="first-name"
            type="text"
            v-model="firstName"
            class="w-full border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-4"
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
            class="w-full border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-4"
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
          class="w-full border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-4"
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
          class="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4"
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
        <select
          id="preferred-language"
          v-model="preferredLanguage"
          class="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4"
          required
        >
          <option value="" disabled>Select one or more languages</option>
          <!-- Add your languages options here -->
        </select>
      </div>
      <div class="mt-4">
        <label for="fluent-in" class="block text-gray-700 font-medium mb-1"
          >Fluent In</label
        >
        <select
          id="fluent-in"
          v-model="fluentIn"
          class="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-4 rounded-md"
        >
          <option value="">Select one or more languages</option>
          <!-- Add your language options here -->
        </select>
      </div>
      <div class="mt-4">
        <label for="interested-in" class="block text-gray-700 font-medium mb-1"
          >Interested In Learning</label
        >
        <select
          id="interested-in"
          v-model="interestedIn"
          class="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4 rounded-md"
        >
          <option value="">Select one or more languages</option>
          <!-- Add your language options here -->
        </select>
      </div>
      <div class="mt-4">
        <label for="reason" class="block text-gray-700 font-medium mb-1"
          >Why are you excited about using SolvMate?</label
        >
        <textarea
          id="reason"
          v-model="reason"
          class="w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md py-2 px-4"
          rows="3"
        ></textarea>
      </div>
      <div class="mt-4">
        <p for="agree" class="text-gray-700">
          Read our <a href="#" class="text-blue-500">privacy policy</a> and
          <a href="#" class="text-blue-500">terms</a>
          related to any information you may share with us. Thank you.
        </p>
      </div>
      <button
        type="submit"
        class="notify-btn font-bold w-full text-white py-2 px-4 mt-6 rounded-md transition duration-300 uppercase tracking-wide"
      >
        Notify me
      </button>
    </form>
  </section>
</template>
<script>
import db from '~/plugins/firebase';

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
  methods: {
    async submitForm(event) {
      event.preventDefault();

      await db.collection("waitlist").add({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        location: this.location,
        preferredLanguage: this.preferredLanguage,
        fluentIn: this.fluentIn,
        interestedIn: this.interestedIn,
        reason: this.reason,
        agree: this.agree,
      });

      this.resetForm();
    },
    resetForm() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.location = "";
      this.preferredLanguage = "";
      this.fluentIn = "";
      this.interestedIn = "";
      this.reason = "";
      this.agree = false;
    },
  },
};
</script>
<style scoped>
#form {
  background-color: #d1e6e2;
}
.notify-btn {
  background-color: #f9a858;
}

.notify-btn:hover {
  background-color: #f59434;
}
</style>
