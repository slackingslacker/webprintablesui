<template>
  <div id="mathBasicFraction">
    <section class="portfolio d-print-none">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Basic Fractions</h2>
        <!-- Icon Divider-->
        <div class="divider-custom ">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><font-awesome-icon :icon="['far', 'star']" /></div>
            <div class="divider-custom-line"></div>
        </div>
        <div id="no-print" class="row">
          <div class="col align-self-center">
            <div class="form-row">
              <MathFnButtons :pageId="'mathBasicFraction'" :components="['print', 'help']" v-on:generate-values="handleGenerateValues"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col align-self-center">
            <h3>Basic Fractions. Write the fraction in words.</h3>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row d-none d-print-inline">
        <div class="col text-center">
          <h1>Basic Fractions. Write the fraction in words.</h1>
        </div>
      </div>
      <div class="row" v-bind:key="index" v-for="(numValue, index) in numValues">
        <div class="col-9 text-left">
          <div class="row">
            <div class="col-2">
              <!--<div class="fraction">
                <span class="fup">{{ numValue.numerator }}</span>
                <span class="bar">/</span>
                <span class="fdn">{{ numValue.denominator }}</span>
              </div>-->
              <div class="fraction-line">
                <sup>{{ numValue.numerator }}</sup>⁄<sub>{{ numValue.denominator }}</sub>
              </div>
            </div>
            <div class="col-10">
              Answer : __________________________
            </div>
          </div>
          <div class="divider"><hr/></div>
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
  name: "MathBasicFraction",
  components: { MathFnButtons },
  data() {
    return {
      numValues: [], 
    };
  },
  methods: {
    handleLoad() {
      this.handleGenerateValues();
    },
    getValues() {
      apiService
        .getBasicFraction("basicFraction")
        .then((res) => {
          this.numValues = res.data["numbers"];
        })
        .catch((err) => console.error(err));
    },
    handleGenerateValues() {
      this.getValues();
    },
  },
  watch: {
    $route: {
      handler: "handleLoad",
      immediate: true,
    },
  },
};
</script>
