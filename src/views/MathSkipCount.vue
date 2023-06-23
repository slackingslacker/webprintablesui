<template>
  <div id="mathSkipCount">
    <section class="portfolio d-print-none">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Math Skip Counting</h2>
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
                <label >Direction</label>
                <div class="select">
                  <select v-model="directionType" class="form-control">
                    <option value="F" selected>Forward</option>
                    <option value="R">Reverse</option>
                  </select>
                </div>
              </div>
              <div class="form-group col">
                <label>Number Skip</label>
                <div class="select">
                  <select v-model="numSkip" class="form-control">
                    <option value="1">By 1</option>
                    <option value="2">By 2</option>
                    <option value="3">By 3</option>
                    <option value="4">By 4</option>
                    <option value="5" selected>By 5</option>
                    <option value="6">By 6</option>
                    <option value="7">By 7</option>
                    <option value="8">By 8</option>
                    <option value="9">By 9</option>
                    <option value="10">By 10</option>
                    <option value="20">By 20</option>
                    <option value="30">By 30</option>
                    <option value="40">By 40</option>
                    <option value="50">By 50</option>
                    <option value="100">By 100</option>
                  </select>
                </div>
              </div>
              <div class="form-group col">
                <label>Number of Digits</label>
                <select v-model="gridSize" class="form-control">
                  <option value="5" selected>1 to 10</option>
                  <option value="10">1 to 100</option>
                </select>
              </div>
              <MathFnButtons :pageId="'mathSkipCount'" :components="['generator', 'print', 'help']" v-on:generate-values="handleGenerateValues"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col align-self-center">
            <h3>Counting numbers {{ gridSize * gridSize }} digit(s). Fill the empty squares.</h3>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row d-none d-print-inline">
        <div class="col text-center">
          <h1>Counting numbers {{ gridSize * gridSize }} digit(s). Fill the empty squares.</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table border="1" width="500px" style="margin: auto;">
            <tbody>
              <tr :key="index" v-for="(numValueArr, index) in splitNumValues">
                <td :key="idx" v-for="(numValue, idx) in numValueArr" :style="columnSize">{{ numValue }} </td>
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
import MathFnButtons from "../components/MathFnButtons";
import ApiService from "../service/ApiService";
const apiService = new ApiService();

export default {
  name: "MathSkipCount",
  components: {
    MathFnButtons
  },
  data() {
    return {
      directionType: "",
      numSkip: "",
      gridSize: "",
      numValues: [], 
      splitNumValues: [],
      columnSize: "",
      directionDesc: "normal"
    };
  },
  methods: {
    handleLoad() {
      this.directionType = "F";
      this.numSkip = "1";
      this.gridSize = "5";
      this.handleGenerateValues();
    },
    getValues(numSkip, gridSize, direction) {
      apiService
        .getMathCountDigits("skipCount", numSkip, gridSize, direction)
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
        results.push(numValues.splice(0, gridSize));
      }

      this.setColumnSize()
      this.splitNumValues = results;
    },
    setColumnSize() {
      if (this.gridSize == "10"){
        this.columnSize = "width:50px; height:50px; vertical-align: middle; text-align: center;";
      }

      if (this.gridSize == "5"){
        this.columnSize = "width:100px;height:100px;vertical-align: middle; text-align: center;";
      }
    },
    handleGenerateValues() {
      this.directionDesc = this.directionType === "F" ? "ascending" : "descending";
      this.getValues(this.numSkip, this.gridSize, this.directionType);
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
