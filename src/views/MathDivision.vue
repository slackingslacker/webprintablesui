<template>
  <div id="mathDivision">
    <section class="portfolio d-print-none">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Math Division</h2>
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
                </select>
              </div>
              <div class="form-group col">
                <label>Count</label>
                <select v-model="cdigit" class="form-control">
                  <option value="10">10</option>
                  <option value="12">12</option>
                  <option value="15">15</option>
                  <option value="20" selected>20</option>
                </select>
              </div>
              <MathFnButtons :pageId="'mathDivision'" :components="['generator', 'print', 'help']" v-on:generate-values="handleGenerateValues"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col align-self-center">
            <h3>Dividing numbers {{ fdigit }} digit(s) by {{ sdigit }} digit(s).</h3>
          </div>
        </div>
      </div>
      
    </section>
    <div class="container">
        <div class="row d-none d-print-inline">
          <div class="col text-center">
            <h1>Mathematics Division - {{ fdigit }} digit(s) by {{ sdigit }} digit(s).</h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <b-container class="bv-example-row">
              <b-row cols="3">
                <b-col v-bind:key="index" v-for="(numValue, index) in numValues" :class="{'d-print-page-break': ((index + 1) % 14 == 0)}">
                  <table id="tableResult" class="table d-print-table">
                    <template v-if="isNormalDivision">
                    <tbody>
                      <tr>
                        <td class="has-text-right" style="border:0px;">
                          <span style="white-space: nowrap; font-size:larger">
                          {{numValue.second_num}}&radic;<span style="text-decoration:overline;">&nbsp;{{numValue.first_num}}&nbsp;</span>
                          </span>
                          </td>
                      </tr>
                      <tr>
                        <td class="has-text-right" style="border:0px;"></td>
                      </tr>
                      <tr>
                        <td class="has-text-right" style="border:0px;"></td>
                      </tr>
                      <tr>
                        <td class="has-text-right" style="border:0px;"></td>
                      </tr>
                      <tr>
                        <td class="has-text-right" style="border:0px;"></td>
                      </tr>
                    </tbody>
                    </template>
                    <template v-else>
                      <tbody>
                        <tr>
                          <td class="text-right align-bottom" style="border:0px;">&#xf7;</td>
                          <td class="text-right" style="border:0px;">{{numValue.first_num}}<br/>{{numValue.second_num}}</td>
                        </tr>
                        <tr>
                          <td colspan="2">&nbsp;</td>
                        </tr>
                        <tr>
                          <td colspan="2" style="border:0px;height: 50px;">&nbsp;</td>
                        </tr>
                      </tbody>
                    </template>
                  </table>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
      </div>
    
  </div>
</template>

<script>
import ApiService from "../service/ApiService";
import MathFnButtons from "../components/MathFnButtons";
const apiService = new ApiService();

export default {
  name: "MathDivision",
  components: {
    MathFnButtons
  },
  data() {
    return {
      fdigit: "",
      sdigit: "",
      cdigit: "",
      numValues: [],
      isNormalDivision: false
    };
  },
  methods: {
    handleLoad() {
      this.fdigit = "1";
      this.sdigit = "1";
      this.cdigit = "20";
      this.handleTableDisplay();
      this.getValues(this.fdigit, this.sdigit, this.cdigit);
    },
    getValues(fdigit, sdigit, cdigit) {
      apiService
        .getBasicMathOperationDigits("divide", fdigit, sdigit, cdigit)
        .then((res) => {
          this.numValues = res.data["numbers"];
        })
        .catch((err) => console.error(err));
    },
    handleGenerateValues() {
      this.handleTableDisplay();
      this.getValues(this.fdigit, this.sdigit, this.cdigit);
    },
    handleTableDisplay(){
      this.isNormalDivision = (parseInt(this.fdigit) + parseInt(this.sdigit)) > 4
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
