<template>
  <section class="gnt-sec-2">
    <section class="gnt-sec-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 id="challenge-timeline-section">Timeline</h2>
          </v-col>
          <v-col cols="12">
            <v-timeline align-top dense>
              <v-timeline-item
                v-for="(item, index) in tlItems"
                :key="index"
                :color="item.color"
                small
              >
                <v-row class="pt-0">
                  <v-col class="d-block d-md-none">
                    <div class="op-brown--text text-subtitle-1">
                      {{ item.datetime }}
                    </div>
                    <h5 :class="item.titleStyle">{{ item.title }}</h5>
                    <div class="text-caption">{{ item.caption }}</div>
                  </v-col>
                  <v-col class="d-none d-md-block">
                    <v-row>
                      <v-col cols="2">
                        <div class="op-brown--text text-subtitle-1">
                          {{ item.datetime }}
                        </div>
                      </v-col>
                      <v-col>
                        <h5 :class="item.titleStyle">{{ item.title }}</h5>
                        <div class="text-caption">{{ item.caption }}</div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>
<script scoped>
export default {
  name: 'ChallengeTimelineSection',
  data: () => ({
    tlItems: [
      {
        datetime: '2023-10-01',
        title: 'Registration Open',
        caption: 'Google form and competition page on codalab will be public.',
        titleStyle: 'text-h6 text-decoration-line-through',
        color: 'op-brown darken-1',
      },
      {
        datetime: '2023-10-15',
        title: 'Launch',
        titleStyle: 'text-h6 text-decoration-line-through',
        caption: 'You can submit your estimates to the competition site.',
        color: 'op-brown  darken-1',
      },
      {
        datetime: '2024-01-10',
        title: 'Entry and Team Merger Deadline',
        titleStyle: 'text-h6 text-decoration-line-through',
        caption:
          'If you want to join this competition or change team members, you must register until this date.',
        color: 'op-brown  darken-1',
      },
      {
        datetime: '2024-01-15',
        title: 'Final Submission Deadline',
        titleStyle: 'text-h6 text-decoration-line-through',
        caption: 'You must submit your best results until the end of this day.',
        color: 'op-brown  darken-1',
      },
      {
        datetime: '2024-01-31',
        title: 'Report Submission Deadline',
        titleStyle: 'text-h6 text-decoration-line-through',
        caption:
          'Top 3 winners must submit a report of your solution to get the prize! Deadlines are subject to change.',
        color: 'op-brown darken-1',
      },
      {
        datetime: '2024-03-11',
        title: 'Award Ceremony in the Internationla symposium',
        titleStyle: 'text-h6 text-decoration-line-through',
        caption: 'Top 3 awards will be presented',
        color: 'op-brown darken-1',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped></style>

<!--sample
        {
        datetime: '2024-03-13',
        title: 'Workshop Day @Percom2023',
        titleStyle: 'text-h6  text-decoration-line-through',
        caption:
          'Award Ceremony will be held. Top 3 winners are requested to participate offline.',
        color: 'op-brown',
      },
-->
