<template>
  <section class="gnt-sec-3">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 id="challenge-task-section-overview">Overview</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h3>Background</h3>
          <p>
            Collective animal behaviors are teeming with life and intricate
            behavioral patterns. The sweetfish, included in this dataset, offers
            a unique window into understanding animal navigation in water. For
            ethologists, ecologists, and mathematical and theoretical
            biologists, decoding these patterns is pivotal, but automatic
            tracking the navigation of sweetfish, especially when in schools,
            introduces a plethora of challenges. (TBD)
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h3>Challenge</h3>
          <p>
            You can develop an automatic tracking model that can pinpoint the
            navigational patterns of sweetfish with the Sweetfish dataset
            including locations of 10 fishes. The dataset includes videos and
            bounding boxes of fishes. To analyze the behaviors recorded by
            videos, automatic detection and tracking of bounding boxes is
            necessary. We have train, development, and test datasets. By
            training your object detection and tracking algorithms using
            training dataset, you can estimate and submit the bounding box data
            in development and test datasets.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script scoped>
export default {
  name: 'ChallengeTaskOverview',
  data: () => ({}),
}
</script>
<style lang="scss" scoped></style>
