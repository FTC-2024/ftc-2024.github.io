<template>
  <v-container>
    <section class="gnt-sec-1">
      <article class="nuxt-content">
        <h1 class="text-h3 font-weight-bold">{{ page.title }}</h1>
        <nuxt-content :document="page" />
      </article>
    </section>
  </v-container>
</template>

<script scoped>
export default {
  async asyncData({ $content, params }) {
    const slug = params.slug
    const page = await $content('release/' + slug).fetch()
    return { page, slug }
  },
  head() {
    return {
      title: 'Release Note ' + this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Release Note ' + this.page.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://open-pack.github.io/release/' + this.slug + '/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
