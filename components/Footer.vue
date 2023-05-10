<template>
    <footer>
        <div class="mx-auto py-4 flex flex-col items-center justify-center text-white">
          <div class="w-16 mb-4">
            <img class="w-full h-auto" src="/logo-white.svg" alt="">
          </div>
          <p class="font-bold">
            Copyright © {{ new Date().getFullYear() }} Solvmate. All rights reserved.
          </p>
        </div>
    </footer>
</template>

<style>
footer {
  background-color: #b07d7d;
}
</style>

<script>
export default {
    name: 'Footer'
}
</script>