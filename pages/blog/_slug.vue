<template>
  <div class="site-container">
    <div class="space-y-4">
      <article>
        <img :src="article.img" />
        <div>
          <h1 class="text-4xl font-bold">{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <hr class="my-4" />
          <nuxt-content class="prose" :document="article" />
        </div>
      </article>
<!-- 
      <form class="mt-10" v-on:click.prevent="submit">
        <textarea
          rows="3"
          class="border border-gray-300 rounded w-full block px-2 py-1"
        ></textarea>
        <div
          class="flex items-center space-x-2 mt-4"
          v-if="$auth.isAuthenticated"
        >
          <button class="bg-blue-600 text-white px-2 py-1 rounded">Send</button>
          <img :src="$auth.user.picture" width="30" class="rounded-full" />
          <span>{{ $auth.user.name }} </span>
          <div v-if="!$auth.loading">
            <button v-if="$auth.isAuthenticated" @click="logout">x</button>
          </div>
        </div>
      </form>
      <div v-if="!$auth.loading">
        <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    return {
      article,
    };
  },
  methods: {
    submit(){
      alert("hop");
    },
    // Log the user in
    login() {
      this.$auth.loginWithPopup();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>