<template>
  <section class="gnt-sec-3">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 id="challenge-task-section-overview">Results</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p>
            Thank you to everyone who participated, we had 16 teams and 31
            registered users on colab. We received a total of 163 submissions
            during the period. (As of January 16, 2024)
          </p>

          <p>
            The top three teams in the competition are listed below.
            Congratulations! Please see this table (
            <a
              href="https://docs.google.com/spreadsheets/d/1nPFyM8RXhV6PmuFqBXl2UWexfimI3N-x5H0cBwKYvHw/edit?usp=sharing"
              target="blank"
              >Google Sheet</a
            >) here for detailed scores.
          </p>
        </v-col>
        <v-col v-for="(item, index) in top5Teams" :key="index" cols="12">
          <v-card class="op-brown lighten-2" width="100%">
            <v-card-subtitle
              class="pt-1 pb-0 font-weight-bold text-subtitle-1 op-brown--text text--darken-2"
            >
              {{ item.rank }}
            </v-card-subtitle>
            <v-card-text class="pb-1">
              <h4 class="text-h5 black--text font-weight-bold">
                {{ item.team }}
                <span class="text-h6 op-brown--text"
                  >(HOTA score={{ item.score }})</span
                >
              </h4>
              <p class="mb-0">
                {{ item.member }}
              </p>
            </v-card-text>
            <v-card-actions class="d-flex justify-end white pt-0 pb-1">
              <v-spacer></v-spacer>

              <a
                v-for="(link, index2) in item.links"
                :key="index2"
                :href="link.url"
                target="_blank"
                class="text-decoration-none"
              >
                <v-btn color="op-brown" text small>
                  {{ link.title }}
                  <v-icon class="mx-1">mdi-open-in-new</v-icon>
                </v-btn>
              </a>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <h3>All Results</h3>
          <v-simple-table dense>
            <template #default>
              <thead>
                <tr>
                  <th class="text-left">Rank</th>
                  <th class="text-left">Team</th>
                  <th class="text-left">HOTA score</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in results" :key="item.rank">
                  <td>{{ item.rank }}</td>
                  <td>{{ item.team }}</td>
                  <td>{{ item.score }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <!--
      <v-row>
        <v-col cols="12">
          <h3>Awards Ceremony @Percom2023 WS BiRD</h3>
          <p>
            The awards ceremony was held on March 13, 2023 at Percom2023 WS
            BiRD. The top 5 winners gathered to discuss their solutions in a
            poster session. Congratulations again!
          </p>
          <v-card class="mx-auto">
            <v-img :src="photo.awardsCeremony" width="100%"> </v-img>
            <v-card-subtitle class="py-1 text-center">
              Picture with Top-5 Winners @Percom2023 WS BiRD
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      -->
    </v-container>
  </section>
</template>
<script scoped>
export default {
  name: 'ChallengeResultSection',
  data: () => ({
    top5Teams: [
      {
        rank: '1st Place',
        team: 'ytachioka',
        score: 0.49,
        member: 'Tachioka yuuki. (Denso IT laboratory)',
        links: [
          {
            title: 'Poster',
            url: '',
          },
          {
            title: 'Solution (GitHub)',
            url: '',
          },
        ],
      },
      {
        rank: '2nd Place',
        team: 'simon787 (UWIPL)',
        score: 0.47,
        member:
          'Hao Wang et al.(University of Washington Information Processing Lab)',
        links: [
          {
            title: 'Poster',
            url: '',
          },
        ],
      },
      {
        rank: '3rd Place',
        team: 'maburto(LabTrack)',
        score: 0.44,
        member: 'Andres Mohali et al.(NAIST)',
        links: [
          {
            title: 'Poster',
            url: '',
          },
          {
            title: 'Solution (GitHub)',
            url: '',
          },
        ],
      },
    ],
    results: [
      {
        rank: 1,
        team: 'ytachioka',
        score: 0.49,
      },
      {
        rank: 2,
        team: 'simon787',
        score: 0.47,
      },
      {
        rank: 3,
        team: 'maburto',
        score: 0.44,
      },
      {
        rank: 4,
        team: '_640_',
        score: 0.39,
      },
      {
        rank: 5,
        team: 'michaelibrahim',
        score: 0.38,
      },
      {
        rank: 6,
        team: 'HuQingrui',
        score: 0.36,
      },
      {
        rank: 7,
        team: 'tomoon',
        score: 0.35,
      },
      {
        rank: 8,
        team: 'xmba15',
        score: 0.18,
      },
    ],
    googleSheetUrl:
      'https://docs.google.com/spreadsheets/d/1nPFyM8RXhV6PmuFqBXl2UWexfimI3N-x5H0cBwKYvHw/edit?usp=sharing',
    photo: {
      awardsCeremony: require('@/assets/img/snapshot/2023-03-13-Percom2023BiRD-AwardsCeremony.jpg'),
    },
  }),
}
</script>
<style lang="scss" scoped></style>
