<template>
  <v-container fluid class="pa-0">
    <ChallengeOverviewSection />
    <ChallengeTaskSection />
    <ChallengePrizeSection />
    <ChallengeRuleSection />
    <ChallengeResultSection />
    <ChallengeRegistrationSection />
    <ChallengeTimelineSection />
    <!--    <SnsGoogleGroup />
    <ChallengeTutorialSection />
    <ChallengeLinkSection />
-->
    <LpTermsSection />
    <ChallengeLinkSection />
    <ChallengeTeamSection />
    <OrganismsTopScrollBtn />
  </v-container>
</template>

<script scoped>
const description =
  'Fish Tracking Challenge 2024, using the SweetFish dataset at the International Symposium of Hierarchical Bio-Navigation 2024(OPEN: 2023-10-15, END: 2024-01-15)'
const metaImg = 'https://ftc-2024.github.io/img/FishTrackingChallenge.jpg'

export default {
  name: 'ChallengePage',
  head: {
    title: 'FishTrackingChallenge2024',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Fish Tracking Challenge 2024',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://FTC-2024.github.io/challenge2022/',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: metaImg,
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: '@OpenPackDataset',
      },
      {
        hid: 'twitter:domain',
        property: 'twitter:domain',
        content: 'open-pack.github.io',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'OpenPack Challenge 2022',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: description,
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: metaImg,
      },
    ],
  },
}
</script>
