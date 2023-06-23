<template>
  <div id="mathExpandedForm">
    <section class="portfolio d-print-none">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Math Expanded Form</h2>
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
                <label >Minimum Number</label>
                <div class="select">
                  <select v-model="min" class="form-control">
                    <option value="1" >1</option>
                    <option value="10">10</option>
                    <option value="100">100</option>
                    <option value="1000" selected>1000</option>
                    <option value="10000">10000</option>
                    <option value="100000">100000</option>
                  </select>
                </div>
              </div>
              <div class="form-group col">
                <label>Maximum Number</label>
                <select v-model="max" class="form-control">
                    <option value="1" >1</option>
                    <option value="10">10</option>
                    <option value="100">100</option>
                    <option value="1000">1000</option>
                    <option value="10000" selected>10000</option>
                    <option value="100000">100000</option>
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
              <MathFnButtons :pageId="'mathExpandedForm'" :components="['answer', 'generator', 'print', 'help']" v-on:show-answer="onShowAnswer" v-on:generate-values="handleGenerateValues"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col align-self-center">
            <h3>Expanded Form. Write the number in expanded form.</h3>
            Example : 105 = 100 + 5
          </div>
        </div>
      </div>
    </section>
    <div class="container" :class="hasAnswer ? 'printable-questions' : ''">
      <div class="row d-none d-print-inline">
        <div class="col text-center">
          <h1>Expanded Form. Write the number in expanded form.</h1>
        </div>
      </div>
      <div class="row" v-bind:key="index" v-for="(numValue, index) in numValues">
        <div class="col-9 text-left d-print-col-bs1">
          <div class="row">
            <div class="col">
              {{index + 1}}. {{ numValue.number }}
            </div>
          </div>
          <div class="row">
            <div class="col">
              Expanded : ____________________________________________________
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
  name: "MathExpandedForm",
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
      this.min = 100;
      this.max = 10000;
      this.count = 20;
      this.handleGenerateValues();
    },
    getValues(count, min, max, hasAnswer) {
      apiService
        .getMathGeneratedNumbers("expandedForm", count, min, max, hasAnswer)
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
