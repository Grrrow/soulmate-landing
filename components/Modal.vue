<template>
  <div
    class="modal fixed z-10 inset-0 overflow-y-auto flex items-center justify-center"
    v-if="show"
  >
    <div class="modal-overlay absolute inset-0 bg-gray-500 opacity-75"></div>
    <div class="modal-content bg-white rounded-lg shadow-lg mx-auto mt-24">
      <div class="flex justify-end">
        <button
          @click="close"
          class="modal-close px-4 py-2 text-gray-500 hover:text-gray-800 font-bold text-xl leading-none"
        >
          &times;
        </button>
      </div>
      <div class="modal-body px-4 py-2">
        <p class="text-gray-700">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      message:
        "Thank you for your input! We have you on our waitlist and we'll let you know when we have something for you to try.",
    };
  },
  mounted() {
    document.addEventListener("keydown", this.onEscapeKey);
    document.addEventListener("click", this.onOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.onEscapeKey);
    document.removeEventListener("click", this.onOutsideClick);
  },
  methods: {
    onEscapeKey(event) {
      if (event.keyCode === 27 && this.show) {
        this.$emit("close");
      }
    },
    onOutsideClick(event) {
      const modalContent = document.querySelector(".modal-content");
      if (!modalContent?.contains(event.target)) {
        this.close();
      }
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-overlay {
  z-index: -1;
}

.modal-close {
  cursor: pointer;
}

.modal-body {
  max-height: calc(100vh - 210px);
  overflow-y: auto;
}
</style>
