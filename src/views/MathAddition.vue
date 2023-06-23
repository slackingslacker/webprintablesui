<template>
  <div id="mathAddition">
    <section class="portfolio d-print-none">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
          Addition
        </h2>
        <!-- Icon Divider-->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <font-awesome-icon :icon="['far', 'star']" />
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <div id="no-print" class="row">
          <div class="col align-self-center">
            <div class="form-row">
              <div class="form-group col">
                <label>1st Digit</label>
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
                <label>Count</label>
                <select v-model="cdigit" class="form-control">
                  <option value="10">10</option>
                  <option value="16">16</option>
                  <option value="20" selected>20</option>
                  <option value="24">24</option>
                </select>
              </div>
              <MathFnButtons :pageId="'mathAddition'" :components="['answer', 'generator', 'print', 'help']" v-on:show-answer="onShowAnswer" v-on:generate-values="handleGenerateValues"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col align-self-center">
            <h3>
              Adding numbers {{ fdigit }} digit(s) by {{ sdigit }} digit(s).
            </h3>
          </div>
        </div>
      </div>
    </section>
    <div class="container" :class="hasAnswer ? 'printable-questions' : ''">
      <div class="row d-none d-print-inline">
        <div class="col text-center">
          <h1>
            Mathematics Addition - {{ fdigit }} digit(s) by {{ sdigit }} digit(s).
          </h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b-container class="bv-example-row">
            <b-row cols="3">
              <b-col v-bind:key="index" v-for="(numValue, index) in numValues" class="d-print-col">
                <table class="table d-print-table">
                  <tbody>
                    <tr>
                      <td class="text-right align-bottom" style="border: 0px">+</td>
                      <td class="text-right" style="border: 0px">
                        {{ numValue.first_num }}<br />{{numValue.second_num}}
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </b-col>
            </b-row>
          </b-container>
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
  name: "MathAddition",
  components: {
    MathAnswers,
    MathFnButtons
  },
  data() {
    return {
      fdigit: "",
      sdigit: "",
      cdigit: "",
      hasAnswer: false,
      numValues: [],
    };
  },
  methods: {
    handleLoad() {
      this.fdigit = "1";
      this.sdigit = "1";
      this.cdigit = "20";
      this.getValues(this.fdigit, this.sdigit, this.cdigit, this.hasAnswer);
    },
    getValues(fdigit, sdigit, cdigit, hasAnswer) {
      apiService
        .getBasicMathOperationDigits("add", fdigit, sdigit, cdigit, hasAnswer)
        .then((res) => {
          this.numValues = res.data["numbers"];
        })
        .catch((err) => console.error(err));
    },
    handleGenerateValues() {
      this.getValues(this.fdigit, this.sdigit, this.cdigit, this.hasAnswer);
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
