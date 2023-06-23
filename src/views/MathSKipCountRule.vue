<template>
  <div id="mathSkipCountRule">
    <section class="portfolio d-print-none">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Math Skip Count Rules</h2>
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
                <label>Number of Blanks</label>
                <select v-model="blanks" class="form-control">
                  <option value="2" >2</option>
                  <option value="3">3</option>
                  <option value="4" selected>4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <MathFnButtons :pageId="'mathSkipCountRule'" :components="['generator', 'print', 'help']" v-on:generate-values="handleGenerateValues"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col align-self-center">
            <h3>Skip Counting Extended.</h3>
            <h3>Determine the rule and fill in the blanks.</h3>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row d-none d-print-inline">
        <div class="col text-center">
          <h1>Skip Counting Extended.</h1>
          <h1>Determine the rule and fill in the blanks.</h1>
        </div>
      </div>
      <div class="row" v-bind:key="index" v-for="(numValueArr, index) in numValues">
        <div class="col-9 text-left d-print-col-bs1">
          <div class="row">
            <div class="col">
              <table border="0" width="500px" style="margin: auto;">
                <tbody>
                  <tr>
                    <td class="skip-count-td">{{ index + 1}} .</td>
                    <td :key="index" v-for="(numValue, index) in numValueArr" class="skip-count-td">{{ numValue == 0 ? "___" : numValue}} </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="divider"></div>
        </div>
      </div>
      <div class="divider">&nbsp;</div>
    </div>
  </div>
</template>


<script>
import ApiService from "../service/ApiService";
import MathFnButtons from "../components/MathFnButtons";
const apiService = new ApiService();


export default {
  name: "MathSkipCountRule",
  components: {
    MathFnButtons
  },
  data() {
    return {
      blanks: 5,
      numValues: []
    };
  },
  methods: {
    handleLoad() {
      this.handleGenerateValues();
    },
    getValues() {
      apiService
        .getMathCountDigits("skipCountRules", this.blanks)
        .then((res) => {
          this.numValues = res.data["numbers"];
        })
        .catch((err) => console.error(err));
    },
    handleGenerateValues() {
      this.getValues(this.blanks);
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

<style scoped>
.skip-count-td{
  width:50px; 
  height:50px; 
  vertical-align: middle; 
  text-align: center;
}
</style>
