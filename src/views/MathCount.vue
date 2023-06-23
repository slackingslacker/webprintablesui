<template>
  <div id="mathCount">
    <section class="portfolio d-print-none">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Math Counting</h2>
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
                <label>Number of Digits</label>
                <select v-model="gridSize" class="form-control">
                  <option value="5" selected>1 to 10</option>
                  <option value="10">1 to 100</option>
                </select>
              </div>
              <MathFnButtons :pageId="'mathCount'" :components="['generator', 'print', 'help']" v-on:generate-values="handleGenerateValues"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col align-self-center">
            <h3>Counting numbers {{ gridSize * gridSize }} digit(s).</h3>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row d-none d-print-inline">
        <div class="col text-center">
          <h3 class="is-size-6 text-dark">Counting numbers {{ gridSize * gridSize }} digit(s).</h3>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table border="1" width="500px" style="margin: auto;">
            <tbody>
              <template v-for="(numValueArr, index) in splitNumValues">
                <tr>
                  <template v-for="(numValue, index) in numValueArr">  
                    <td :style="columnSize">{{ numValue }} </td>
                  </template>  
                </tr>
              </template>
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
  name: "MathCount",
  components: {
    MathFnButtons,
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
        .getMathCountDigits("count", numSkip, gridSize, direction)
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
