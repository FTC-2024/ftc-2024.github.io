<template>
  <section class="gnt-sec-2">
    <section class="gnt-sec-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 id="challenge-link-section">Tools</h2>
          </v-col>
        </v-row>

        <v-row>
          <v-col v-for="(item, index) in links" :key="index" cols="12" md="6">
            <v-card class="op-brown lighten-2" width="100%">
              <v-card-subtitle class="pb-0">
                {{ item.contentType }}
              </v-card-subtitle>
              <v-card-text>
                <h4 class="text-h5 black--text">{{ item.title }}</h4>
                <p class="mb-0">
                  {{ item.description }}
                </p>
              </v-card-text>
              <v-card-actions class="d-flex justify-end white">
                <v-spacer></v-spacer>
                <a
                  :href="item.url"
                  target="_blank"
                  class="text-decoration-none"
                >
                  <v-btn color="op-brown" text>
                    Open
                    <v-icon class="mx-1">mdi-open-in-new</v-icon>
                  </v-btn>
                </a>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>
<script scoped>
export default {
  name: 'LpLinkSection',
  data: () => ({
    links: [
      {
        contentType: 'Github',
        title: 'Github tool',
        description: 'baseline program for tracking',
        url: 'https://github.com/MakotoITOH/fish_tracking_Colaboratory',
      },
      {
        contentType: 'Google colaboratory',
        title: 'Google colab tool',
        description: 'baseline program for tracking',
        url: 'https://colab.research.google.com/github/MakotoITOH/fish_tracking_Colaboratory/blob/main/challenge_FTC2024.ipynb',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped></style>
