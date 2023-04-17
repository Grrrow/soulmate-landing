<template>
    <header class="sticky top-0 z-10" id="header">
        <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        <div class="w-16">
            <a @click="(event) => this.handleScroll(event, '#hero')" href="#hero">
                <img class="w-full h-auto" src="/logo-white.svg" alt="">
            </a>
        </div>
        <nav>
            <ul class="hidden md:flex items-center space-x-6">
                <li><a @click="(event) => this.handleScroll(event, '#form')" href="#mission" class="join-btn text-white font-bold py-1 px-4 rounded-full inline-block uppercase tracking-wide">Join the waitlist</a></li>
                <li><a class="uppercase font-bold tracking-wide" @click="(event) => this.handleScroll(event, '#mission')" href="#mission">Mission</a></li>
                <li><a class="uppercase font-bold tracking-wide" @click="(event) => this.handleScroll(event, '#technology')" href="#technology">Technology</a></li>
                <li><a class="uppercase font-bold tracking-wide" @click="(event) => this.handleScroll(event, '#contact')" href="#contact">Contact</a></li>
            </ul>
        </nav>
        </div>
    </header>
</template>

<style>
    header {
        height: 64px;
        color: white;
        background-color: #6c5b7b;
    }

    .join-btn {
  background-color: #f9a858;
}

.join-btn:hover {
  background-color: #f59434;
}
</style>

<script>
export default {
    name: 'Header',
    methods: {
        handleScroll: function(event, section) {
            event.preventDefault()
            const heroSection = document.querySelector(section)
            heroSection.scrollIntoView({ behavior: 'smooth' })
        }
    }
}
</script>