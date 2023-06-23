<template>
  <div id="mathNumberOrder">
    <section class="portfolio d-print-none">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Math Number Ordering</h2>
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
                <label >Min Number</label>
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
                  </select>
                </div>
              </div>
              <div class="form-group col">
                <label>Max Number</label>
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
                  </select>
              </div>
              <div class="form-group col">
                <label># of Digits</label>
                <select v-model="count" class="form-control">
                  <option value="10">10</option>
                  <option value="12">12</option>
                  <option value="15">15</option>
                  <option value="20" selected>20</option>
                  <option value="30">30</option>
                </select>
              </div>
              <div class="form-group col">
                <label># to Generate</label>
                <select v-model="numPerCount" class="form-control">
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5" selected>5</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div class="form-group col">
                <label >Direction</label>
                <select v-model="direction" class="form-control">
                  <option value="F" selected>Ascending</option>
                  <option value="R">Descending</option>
                </select>
              </div>
              
            </div>
            <MathFnButtons :pageId="'mathNumberOrder'" :components="['answer', 'generator', 'print', 'help']" v-on:show-answer="onShowAnswer" v-on:generate-values="handleGenerateValues"/>
          </div>
        </div>
        <div class="row">
          <div class="col align-self-center">
            <h3>Number Ordering.</h3>
            Example : 1, 5, 4, 2 Answer : 1 &lt; 2 &lt; 4 &lt; 5
          </div>
        </div>
      </div>
    </section>
    <div class="container" :class="hasAnswer ? 'printable-questions' : ''">
      <div class="row d-none d-print-inline">
        <div class="col text-center">
          <h1>Number Ordering.</h1>
        </div>
      </div>
      <div class="row" v-bind:key="index" v-for="(numValue, index) in numValues">
        <div class="col-9 text-left d-print-col-bs1">
          <div class="row">
            <div class="col">
              {{index + 1}}. {{ numValue.nums }}
            </div>
          </div>
          <div class="row">
            <div class="col">
              Answer : {{ numValue.blanks }}
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
  name: "MathNumberOrder",
  components: {
    MathAnswers,
    MathFnButtons
  },
  data() {
    return {
      min : 0,
      max : 0,
      count: 0,
      direction : "F",
      numPerCount: 5,
      hasAnswer: false,
      numValues: []
    };
  },
  methods: {
    handleLoad() {
      this.min = 1;
      this.max = 5;
      this.count = 20;
      this.direction = "F";
      this.numPerCount = 5;
      this.handleGenerateValues();
    },
    getValues(count, min, max, numPerCount, direction, hasAnswer) {
      apiService
        .getMathGeneratedNumbersOrdering("numberOrder", count, min, max, numPerCount, direction, hasAnswer)
        .then((res) => {
          this.numValues = res.data["numbers"];
        })
        .catch((err) => console.error(err));
    },
    handleGenerateValues() {
      this.getValues(this.count, this.min, this.max, this.numPerCount, this.direction, this.hasAnswer);
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
