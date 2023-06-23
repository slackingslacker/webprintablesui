<template>
  <div id="mathMultiplicationTable">
    <section class="portfolio d-print-none">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Math Multiplication Table</h2>
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
                <label>By Digits</label>
                <select v-model="gridSize" class="form-control">
                  <option value="5">5</option>
                  <option value="10" selected>10</option>
                  <option value="15">15</option>
                </select>
              </div>
              <div class="form-group">
                <div class="btn-bottom-loc">&nbsp;</div>
                <button type="button" class="btn btn-primary" @click="handleGenerateValues"><font-awesome-icon :icon="['fas', 'caret-square-right']" /></button>&nbsp;
                <button type="button" class="btn btn-primary" @click="handlePrint"><font-awesome-icon :icon="['fas', 'print']" /></button>&nbsp;
                <button type="button" class="btn btn-primary" @click="redirectToMath"><font-awesome-icon :icon="['fas', 'arrow-left']" /></button>
                <help-modal/>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col align-self-center">
            <h3>Multiplication table {{ gridSize }} by {{ gridSize }}.</h3>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row d-none d-print-inline">
        <div class="col text-center">
          <h1>Multiplication table {{ gridSize }} by {{ gridSize }}.</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table border="1" width="500px" style="margin: auto;">
            <tbody>
              <tr :key="index" v-for="(numValueArr, index) in splitNumValues">
                <td :key="idx" v-for="(numValue, idx)  in numValueArr" :style="columnSize">{{ numValue }} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="divider">&nbsp;</div>
    </div>
  </div>
</template>


<script>
import ApiService from "../service/ApiService";
import PrintService from "../service/PrintService";
import HelpModal from '../components/HelpModal.vue';
const apiService = new ApiService();
const printService = new PrintService();

export default {
  name: "MathMultiplicationTable",
  components: {
    HelpModal
  },
  data() {
    return {
      gridSize: "",
      numValues: [], 
      splitNumValues: [],
      columnSize: "",
    };
  },
  methods: {
    handleLoad() {
      this.gridSize = "10";
      this.handleGenerateValues();
    },
    getValues(gridSize) {
      apiService
        .getBasicMathOperationDigits("multiplyTable", "", "", gridSize, "")
        .then((res) => {
          this.numValues = res.data["numbers"];
          this.generateNums(this.numValues)
        })
        .catch((err) => console.error(err));
    },
    generateNums(numValues) {
      let gridSize = parseInt(this.gridSize);
      var results = [];
      while (numValues.length) {
        results.push(numValues.splice(0, (gridSize + 1)));
      }

      this.setColumnSize()
      this.splitNumValues = results;
    },
    setColumnSize() {
      if (this.gridSize == "15"){
        this.columnSize = "width:30px;height:30px;vertical-align: middle; text-align: center;";
      }
      
      if (this.gridSize == "10"){
        this.columnSize = "width:50px; height:50px; vertical-align: middle; text-align: center;";
      }

      if (this.gridSize == "5"){
        this.columnSize = "width:100px;height:100px;vertical-align: middle; text-align: center;";
      }
    },
    handleGenerateValues() {
      this.getValues(this.gridSize);
    },
    handlePrint() {
      window.print();
    },
    redirectToMath() {
      this.$router.push({ path: '/math' });
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
