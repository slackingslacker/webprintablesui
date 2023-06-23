<template>
  <div id="mathNumberCompare">
    <section class="portfolio d-print-none">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Math Number Compare</h2>
        <!-- Icon Divider-->
        <div class="divider-custom ">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><font-awesome-icon :icon="['far', 'star']" /></div>
          <div class="divider-custom-line"></div>
        </div>
        <div id="no-print" class="row">
          <div class="col align-self-center">
            <div class="form-row">
              <div class="form-group col">
                <label >1st Digit</label>
                <div class="select">
                  <select v-model="fdigit" class="form-control">
                    <option value="1" selected>1 Digit</option>
                    <option value="2">2 Digit</option>
                    <option value="3">3 Digit</option>
                    <option value="4">4 Digit</option>
                    <option value="5">5 Digit</option>
                    <option value="6">6 Digit</option>
                    <option value="7">7 Digit</option>
                    <option value="8">8 Digit</option>
                    <option value="9">9 Digit</option>
                    <option value="10">10 Digit</option>
                  </select>
                </div>
              </div>
              <div class="form-group col">
                <label>2nd Digit</label>
                <select v-model="sdigit" class="form-control">
                  <option value="1" selected>1 Digit</option>
                  <option value="2">2 Digit</option>
                  <option value="3">3 Digit</option>
                  <option value="4">4 Digit</option>
                  <option value="5">5 Digit</option>
                  <option value="6">6 Digit</option>
                  <option value="7">7 Digit</option>
                  <option value="8">8 Digit</option>
                  <option value="9">9 Digit</option>
                  <option value="10">10 Digit</option>
                </select>
              </div>
              <div class="form-group col">
                <label>Number of Digits</label>
                <select v-model="count" class="form-control">
                  <option value="10">10</option>
                  <option value="12">12</option>
                  <option value="15">15</option>
                  <option value="20" selected>20</option>
                  <option value="30">30</option>
                </select>
              </div>
              <MathFnButtons :pageId="'mathNumberCompare'" :components="['answer', 'generator', 'print', 'help']" v-on:show-answer="onShowAnswer" v-on:generate-values="handleGenerateValues"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col align-self-center">
            <h3>Comparing Numbers. Put &gt; ,  &lt; or = in the blanks.</h3>
          </div>
        </div>
      </div>
    </section>
    <div class="container" :class="hasAnswer ? 'printable-questions' : ''">
      <div class="row d-none d-print-inline">
        <div class="col text-center">
          <h1>Comparing Numbers. Put &gt; ,  &lt; or = in the blanks.</h1>
        </div>
      </div>
      <div class="row" v-bind:key="index" v-for="(numValue, index) in numValues">
        <div class="col-9 text-left d-print-col-bs">
            <div class="row">
              <div class="col">
                {{index + 1}}. {{ numValue.first_num }} &nbsp;&nbsp;&nbsp; ______ &nbsp;&nbsp;&nbsp; 
                {{ numValue.second_num }}
              </div>
            </div>
            <div class="divider"></div>
        </div>
      </div>
    </div>
    <MathAnswers :hasAnswer="hasAnswer" :numValues="numValues"/>
  </div>
</template>


<script>
import ApiService from "../service/ApiService";
import MathAnswers from "../components/MathAnswers";
import MathFnButtons from "../components/MathFnButtons";
const apiService = new ApiService();

export default {
  name: "MathNumberCompare",
  components: {
    MathAnswers,
    MathFnButtons
  },
  data() {
    return {
      fdigit : "",
      sdigit : "",
      count: 0,
      hasAnswer: false,
      numValues: []
    };
  },
  methods: {
    handleLoad() {
      this.fdigit = "1";
      this.sdigit = "3";
      this.count = 20;
      this.handleGenerateValues();
    },
    getValues(count, fdigit, sdigit, hasAnswer) {
      apiService
        .getMathGeneratedNumbers("compareNumbers", count, fdigit, sdigit, hasAnswer)
        .then((res) => {
          this.numValues = res.data["numbers"];
        })
        .catch((err) => console.error(err));
    },
    handleGenerateValues() {
      this.getValues(this.count, this.fdigit, this.sdigit, this.hasAnswer);
    },
    onShowAnswer: function (checkAnswer) {
      this.hasAnswer = checkAnswer;
    }
  },
  watch: {
    $route: {
      handler: "handleLoad",
      immediate: true,
    },
  },
};
</script>
