<template>
  <section
    class="flex items-center justify-center px-4 py-16 bg-gray-100"
    id="form"
  >
    <form
      class="max-w-md bg-white p-6 rounded-md shadow-xl"
      @submit.prevent="submitForm"
    >
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
            @input="validateFirstName"
            class="w-full border-b focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-4"
            :class="errors.firstName ? 'border-red-500' : 'border-gray-300'"
          />
          <p v-if="errors.firstName" class="text-red-500 text-sm">
            {{ errors.firstName }}
          </p>
        </div>
        <div>
          <label for="last-name" class="block text-gray-700 font-medium mb-1"
            >Last Name<span class="text-red-500">*</span></label
          >
          <input
            id="last-name"
            type="text"
            v-model="lastName"
            @input="validateLastName"
            class="w-full border-b focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-4"
            :class="errors.lastName ? 'border-red-500' : 'border-gray-300'"
          />
          <p v-if="errors.lastName" class="text-red-500 text-sm">
            {{ errors.lastName }}
          </p>
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
          @input="validateEmail"
          class="w-full border-b focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-4"
          :class="errors.email ? 'border-red-500' : 'border-gray-300'"
        />
        <p v-if="errors.email" class="text-red-500 text-sm">
          {{ errors.email }}
        </p>
      </div>
      <div class="mt-4">
        <label for="location" class="block text-gray-700 font-medium mb-1"
          >Select Location<span class="text-red-500">*</span></label
        >
        <multiselect
          v-model="location"
          @input="validateLocation"
          :options="countries"
          label="name"
          track-by="name"
          placeholder="Select a country"
          :class="errors.location ? 'location-select-error' : ''"
        ></multiselect>
        <p v-if="errors.location" class="text-red-500 text-sm">
          {{ errors.location }}
        </p>
      </div>
      <div class="mt-4">
        <label
          for="preferred-language"
          class="block text-gray-700 font-medium mb-1"
          >Preferred Language<span class="text-red-500">*</span></label
        >
        <multiselect
          v-model="preferredLanguage"
          @input="validatePreferredLanguage"
          :options="languages"
          label="name"
          track-by="name"
          placeholder="Select one or more languages"
          :multiple="true"
          :class="errors.preferredLanguage ? 'preferred-lang-select-error' : ''"
        ></multiselect>
        <p v-if="errors.preferredLanguage" class="text-red-500 text-sm">
          {{ errors.preferredLanguage }}
        </p>
      </div>
      <div class="mt-4">
        <label for="fluent-in" class="block text-gray-700 font-medium mb-1"
          >Fluent In</label
        >
        <multiselect
          v-model="fluentIn"
          :options="languages"
          label="name"
          track-by="name"
          placeholder="Select one or more languages"
          :multiple="true"
        ></multiselect>
      </div>
      <div class="mt-4">
        <label for="interested-in" class="block text-gray-700 font-medium mb-1"
          >Interested In Learning</label
        >
        <multiselect
          v-model="interestedIn"
          :options="languages"
          label="name"
          track-by="name"
          placeholder="Select one or more languages"
          :multiple="true"
        ></multiselect>
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
import Multiselect from "vue-multiselect";

export default {
  components: { Multiselect },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      location: "",
      preferredLanguage: [],
      fluentIn: [],
      interestedIn: [],
      reason: "",
      agree: false,
      languages: [],
      countries: [],
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        location: "",
        preferredLanguage: "",
        fluentIn: "",
        interestedIn: "",
        reason: "",
        agree: "",
      },
    };
  },
  mounted: async function () {
    this.loadFromFirestore("countries");
    this.loadFromFirestore("languages");
  },
  methods: {
    async loadFromFirestore(collection) {
      const querySnapshot = await this.$fire.firestore
        .collection(collection)
        .get();
      querySnapshot.forEach((doc) => {
        this[collection].push(doc.data());
      });
    },
    validateFirstName() {
      if (!this.firstName.trim()) {
        this.errors.firstName = "First Name is required.";
      } else {
        this.errors.firstName = "";
      }
    },
    validateLastName() {
      if (!this.lastName.trim()) {
        this.errors.lastName = "Last Name is required.";
      } else {
        this.errors.lastName = "";
      }
    },
    validateEmail() {
      const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!this.email) {
        this.errors.email = "Email is required.";
      } else if (!emailPattern.test(this.email)) {
        this.errors.email = "Invalid email format.";
      } else {
        this.errors.email = "";
      }
    },
    validateLocation() {
      if (!this.location) {
        this.errors.location = "Location is required.";
      } else {
        this.errors.location = "";
      }
    },
    validatePreferredLanguage() {
      if (!this.preferredLanguage.length) {
        this.errors.preferredLanguage = "At least one preferred language is required.";
      } else {
        this.errors.preferredLanguage = "";
      }
    },
    async submitForm() {
      this.validateFirstName();
      this.validateLastName();
      this.validateEmail();
      this.validateLocation();
      this.validatePreferredLanguage();

      if (this.errors.firstName || this.errors.lastName || this.errors.email || this.errors.location || this.errors.preferredLanguage) {
        return;
      }
      await this.$fire.firestore.collection("waitlist").add({
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
      this.preferredLanguage = [];
      this.fluentIn = [];
      this.interestedIn = [];
      this.reason = "";
      this.agree = false;
    },
  },
};
</script>
<style>
@import url("vue-multiselect/dist/vue-multiselect.min.css");

.location-select-error .multiselect__tags,
.preferred-lang-select-error .multiselect__tags {
  @apply border border-red-500;
}

.notify-btn {
  background-color: #f9a858;
}
.notify-btn:hover {
  background-color: #f59434;
}
</style>
