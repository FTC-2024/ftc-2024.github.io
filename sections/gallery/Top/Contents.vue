<template>
  <section class="gnt-sec-5">
    <v-row>
      <v-col cols="12" class="d-flex justify-center pb-0">
        <h3 class="op-brown--text lighten-1">Contents</h3>
      </v-col>
      <v-col cols="12" class="d-flex justify-center pt-0">
        <v-btn
          v-for="(list, index) in lists"
          :key="index"
          v-scroll-to="`#${list.link}`"
          class="ma-1 text-capitalize"
          outlined
          color="op-brown"
          @click="sendToGoogleAnalytics(list)"
        >
          {{ list.name }}
        </v-btn>
      </v-col>
    </v-row>
  </section>
</template>
<script scoped>
export default {
  name: 'GalleryTopContents',
  data() {
    return {
      lists: [
        {
          name: 'Activity - Operations',
          link: 'gellery-activity-openpackoperationlist',
        },
        {
          name: 'Recording Sessions',
          link: 'gellery-subject-recording-session-section',
        },
        {
          name: 'Sensors',
          link: 'gallery-modality-section',
        },
      ],
    }
  },
  methods: {
    sendToGoogleAnalytics(list) {
      switch (list.name) {
        case 'Activity - Operations':
          this.$gtag('event', 'click__gallery__contents__activity_operations', {
            // パラメータなどはここに追加
            event_name: 'click',
          })
          break
        case 'Sensors':
          this.$gtag('event', 'click__gallery__contents__sensors', {
            // パラメータなどはここに追加
            event_name: 'click',
          })
          break
        case 'Recording Sessions':
          this.$gtag('event', 'click__gallery__contents__sessions', {
            // パラメータなどはここに追加
            event_name: 'click',
          })
          break
        default:
          break
      }
    },
  },
}
</script>
<style lang="scss" scoped></style>
