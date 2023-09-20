<template>
  <section class="gnt-sec-2">
    <section class="gnt-sec-3">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 id="challenge-rule-section">Detail</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <h3>Data</h3>
            <p>
              The Dataset for this challenge is SweatFish dataset (you can
              download from [Google drive Link (TBD)].). You can use all dataset
              listed below:
            </p>
            <p>[TBD]</p>
            <h3>Evaluation</h3>
            <p>
              The goal of this challenge is accurate tracking of 10 sweetfishes.
              Performance of your model will be evaluated based on HOTA (Higher
              Order Tracking Accuracy) score, which is a holistic and popular
              score in multi-object tracking (MOT). HOTA is designed to overcome
              many of the limitations of previous metrics. For example, you can
              see this web page
              [https://autonomousvision.github.io/hota-metrics/] for
              understanding.
            </p>
            <h3>Function to Calculate Your Score</h3>
            <p>The script to calculate your score is available at [TBD] .</p>
            <h3>Submission Format</h3>
            <p>
              To submit your results to this competition you must construct a
              submission zip file containing a single file named submission.json
              such that [TBD]
            </p>
            <p>
              Sample submission files for Development Phase are available as
              follows:[TBD]
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </section>
</template>
<script scoped>
export default {
  name: 'ChallengeRuleSection',
}
</script>
<style lang="scss" scoped></style>
