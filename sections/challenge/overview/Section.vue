<template>
  <section class="gnt-sec-0 op-brown lighten-2 my-0 py-0">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="d-block">
            <v-img :src="imgLogo" alt="OpenPack" class="mr-3" contain></v-img>
          </div>
          <h2
            class="op-brown--text text-h5 text-md-h3 text-center font-weight-bold my-3"
          >
            @International Symposium of Hierarchical Bio-Navigation 2024
          </h2>
          <p>
            We are hosting a multi-object tracking competition, 
            Fish Tracking Challenge 2024, using the SweetFish dataset 
            at the International Symposium of Hierarchical Bio-Navigation 2024! 
            The task is very simple: tracking *** fishes’ 
            locations from the SweetFish dataset.

          </p>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-child align-stretch">
        <v-col cols="12" md="4" class="d-flex">
          <v-card class="op-brown darken-1" width="100%" elevation="0">
            <v-card-text class="white--text">
              <div>Competition Start</div>
              <p class="text-h5 font-weight-bold text-decoration-line-through">
                2023-10-15 (AOE)
              </p>
              <div>Competition End</div>
              <p class="text-h5 font-weight-bold text-decoration-line-through">
                2024-01-15 (AOE)
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="d-flex">
          <v-card class="op-brown darken-1" width="100%" elevation="0">
            <v-card-text class="white--text">
              <div>Task</div>
              <p class="text-h5 font-weight-bold">
                 tracking *** fishes’ locations (multi-object tracking)
              </p>
              (Temporal Semantic Segmentation)
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" class="d-flex">
          <v-card class="op-brown darken-1" width="100%" elevation="0">
            <v-card-text class="white--text">
              <div>Prize</div>
              <p class="text-h5 font-weight-bold">
                Travel Fee Support (TBD) 
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <ChallengeOverviewContents />
    </v-container>
  </section>
</template>
<script scoped>
export default {
  name: 'LpChallengeSection',
  data: () => ({
    imgLogo: require('@/assets/img/brand/OpenPackCHALLENG-black.png'),
  }),
}
</script>
<style lang="scss" scoped></style>
