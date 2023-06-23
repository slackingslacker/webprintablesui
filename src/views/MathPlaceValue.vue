<template>
  <div id="mathPlaceValue">
    <section class="portfolio d-print-none">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Math Place Value</h2>
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
                <label >Minimum Digit</label>
                <div class="select">
                  <select v-model="min" class="form-control">
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
                <label>Maximum Digit</label>
                <select v-model="max" class="form-control">
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
                <label>Count</label>
                <select v-model="count" class="form-control">
                  <option value="10">10</option>
                  <option value="12">12</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="30" selected>30</option>
                </select>
              </div>
              <MathFnButtons :pageId="'mathPlaceValue'" :components="['answer', 'generator', 'print', 'help']" v-on:show-answer="onShowAnswer" v-on:generate-values="handleGenerateValues"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col align-self-center">
            <h3>Place Value.</h3>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row d-none d-print-inline">
        <div class="col text-center">
          <h1>Place Value.</h1>
        </div>
      </div>
      <div class="row" v-bind:key="index" v-for="(numValue, index) in numValues">
        <div class="col-9 text-left d-print-col-bs1">
            <div class="row">
              <div class="col" style="letter-spacing: 1px;">
                {{index + 1}}. 
                <span :style="(i == numValue.uv) ? 'text-decoration: underline;' : ''"  :key="i" v-for="(num, i) in numValue.number.toString()">{{ num }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col">
                Place Value : ____________________________________________________
              </div>
            </div>
            <div class="divider"></div>
        </div>
      </div>
      <div class="divider">&nbsp;</div>
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
  name: "MathPlaceValue",
  components: {
    MathAnswers,
    MathFnButtons
  },
  data() {
    return {
      min : 0,
      max : 0,
      count: 0,
      hasAnswer: false,
      numValues: []
    };
  },
  methods: {
    handleLoad() {
      this.min = 1;
      this.max = 10;
      this.count = 20;
      this.handleGenerateValues();
    },
    getValues(count, min, max, hasAnswer) {
      apiService
        .getMathGeneratedNumbers("placeValue", count, min, max, hasAnswer)
        .then((res) => {
          this.numValues = res.data["numbers"];
        })
        .catch((err) => console.error(err));
    },
    handleGenerateValues() {
      this.getValues(this.count, this.min, this.max, this.hasAnswer);
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
