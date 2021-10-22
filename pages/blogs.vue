<template>
  <div class="site-container">
    <div class="space-y-4">
      <ul>
        <li v-for="article of articles" :key="article.slug" class="py-4">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <img :src="article.img" class="max-h-80 min-w-full" />
            <div>
              <h2 class="text-xl font-bold">{{ article.title }}</h2>
              <p>{{ article.description }}</p>
              <div class="text-gray-400">{{ article.author.date }}</div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles,
    };
  },
};
</script>