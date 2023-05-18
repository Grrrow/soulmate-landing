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
        Get notified when we launch the Beta version
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
        <p class="mb-4">I'd like to use SolvMate to:</p>

        <div class="space-y-2">
          <div
            v-for="(option, index) in options"
            :key="index"
            class="flex items-center"
          >
            <input
              type="checkbox"
              :id="option.id"
              v-model="option.checked"
              class="h-5 w-5 text-blue-500"
            />
            <label :for="option.id" class="ml-2 text-gray-700">{{
              option.label
            }}</label>
          </div>

          <div class="flex items-center">
            <input
              type="checkbox"
              id="other"
              v-model="otherChecked"
              class="h-5 w-5 text-blue-500"
            />
            <label for="other" class="ml-2 text-gray-700">Other:</label>
            <input
              v-if="otherChecked"
              v-model="otherText"
              type="text"
              class="form-input ml-2 h-10 w-full"
              placeholder="Tell us more!"
            />
          </div>
        </div>
        <p v-if="errors.options" class="text-red-500 text-sm">
          {{ errors.options }}
        </p>
      </div>
      <div class="mt-4">
        <input
          type="checkbox"
          id="agree"
          v-model="agree"
          class="h-5 w-5 text-blue-500"
        />
        <label for="agree" class="ml-2 text-gray-700">
          Read our <NuxtLink to="/legal/privacy-policy" class="text-blue-500">privacy policy</NuxtLink> 
          related to any information you may share with us. Thank you.
        </label>
        <p v-if="errors.agree" class="text-red-500 text-sm">
          {{ errors.agree }}
        </p>
      </div>
      <button
        type="submit"
        class="notify-btn font-bold w-full text-gray-800 py-2 px-4 mt-6 rounded-md transition duration-300 uppercase tracking-wide"
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
      agree: false,
      languages: [],
      countries: [],
      options: [
        { id: "meet_online", label: "Meet new people online", checked: false },
        {
          id: "meet_real_world",
          label: "Meet new people in the real world (events, festivals, etc)",
          checked: false,
        },
        { id: "talk_somebody", label: "Talk with somebody", checked: false },
        {
          id: "discuss_interests",
          label: "Discuss topics I am interested in with kindred spirits",
          checked: false,
        },
        {
          id: "other_languages",
          label: "Talk to people in other languages (in my language)",
          checked: false,
        },
        {
          id: "practice_languages",
          label: "Practice other languages with real people",
          checked: false,
        },
        { id: "conduct_business", label: "Conduct business", checked: false },
      ],
      otherChecked: false,
      otherText: "",
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        location: "",
        preferredLanguage: "",
        fluentIn: "",
        interestedIn: "",
        options: "",
        agree: "",
      },
    };
  },
  mounted: async function () {
    this.countries = await this.load("countries");
    this.languages = await this.load("languages");
  },
  methods: {
    async load(collection) {
      const response = await fetch(`/data/${collection}.json`);
      return await response.json();
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
        this.errors.preferredLanguage =
          "At least one preferred language is required.";
      } else {
        this.errors.preferredLanguage = "";
      }
    },
    validateOptions() {
      if (!this.options.some((option) => option.checked) && (!this.otherChecked || !this.otherText.trim().length)) {
        this.errors.options = "At least one option is required.";
      } else {
        this.errors.options = "";
      }
    },
    validateAgree() {
      if (!this.agree) {
        this.errors.agree = "You must agree to continue.";
      } else {
        this.errors.agree = "";
      }
    },
    async submitForm() {
      this.validateFirstName();
      this.validateLastName();
      this.validateEmail();
      this.validateLocation();
      this.validatePreferredLanguage();
      this.validateOptions();
      this.validateAgree();

      if (
        this.errors.firstName ||
        this.errors.lastName ||
        this.errors.email ||
        this.errors.location ||
        this.errors.preferredLanguage ||
        this.errors.options ||
        this.errors.agree
      ) {
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
        options: this.options.filter((option) => option.checked),
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
      this.options = this.options.map((option) => {
        option.checked = false;
        return option;
      });
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
  background-color: #ffd080;
}
</style>
