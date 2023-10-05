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
              download from
              <a
                href="https://drive.google.com/drive/folders/1Xn3IY46t7DkG2bntbO6sL3oElRPeQA1d?usp=drive_link"
                target="_blank"
                >[Google drive Link] </a
              >). You can use all dataset listed below:
            </p>
            <ul>
              <li>Video (.mp4 in training, development, and test sets)</li>
              <li>
                Bounding boxes (training set only; .txt file in MOT format
                <a href="https://motchallenge.net/instructions/" target="_blank"
                  >[https://motchallenge.net/instructions/]</a
                >)
              </li>
            </ul>
            <p></p>

            <h3>Evaluation</h3>
            <p>
              The goal of this challenge is accurate tracking of 10 sweetfishes.
              Performance of your model will be evaluated based on HOTA (Higher
              Order Tracking Accuracy) score, which is a holistic and popular
              score in multi-object tracking (MOT). HOTA is designed to overcome
              many of the limitations of previous metrics. For example, you can
              see this
              <a
                href="https://autonomousvision.github.io/hota-metrics/"
                target="_blank"
                >web page</a
              >
              for understanding.
            </p>
            <!--<h3>Function to Calculate Your Score</h3>
            <p>The script to calculate your score is available at [TBD] .</p>-->
            <h3>Submission Format</h3>
            <p>
              To submit your results to this competition you must construct a
              submission zip file containing a single file named answer.txt.
              Sample submission files for Development Phase are available as
              follows:(
              <a
                href="https://drive.google.com/drive/folders/1vvDDS98bKKMOzuFCO_2gNmQunaYDHneZ?usp=sharing"
                target="_blank"
              >
                submission.zip
              </a>
              )
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
