<template>
    <footer>
        <div class="container mx-auto py-4 flex flex-col items-center justify-center">
          <div class="w-16 mb-4">
            <img class="w-full h-auto" src="/logo-white.svg" alt="">
          </div>
          <p class="uppercase font-bold">
            Copyright © {{ new Date().getFullYear() }} Solvmate. All rights reserved.
          </p>
        </div>
    </footer>
</template>

<style>
footer {
    color: white;
    background-color: #6c5b7b;
}
</style>

<script>
export default {
    name: 'Footer'
}
</script>