<template>
  <div id="mathBoxCount">
    <section class="portfolio d-print-none">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Math Counting Boxes</h2>
        <!-- Icon Divider-->
        <div class="divider-custom ">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><font-awesome-icon :icon="['far', 'star']" /></div>
            <div class="divider-custom-line"></div>
        </div>
        <div id="no-print" class="row">
          <div class="col align-self-center">
            <div class="form-row">
              <MathFnButtons :pageId="'mathBoxCount'" :components="['generator', 'wprint', 'help']" v-on:generate-values="handleGenerateValues"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col align-self-center">
            <h3>Group Counting. Count the total boxes.</h3>
            <table class="table table-bordered">
              <tbody>
                <tr>
                    <td>Thousand (1000) </td>
                    <td>Hundred (100) </td>
                    <td>Ten (10) </td>
                    <td>One (1) </td>
                </tr>
                <tr>
                    <td><img src="../assets/img/math/thousands.png" width="64px"/></td>
                    <td><img src="../assets/img/math/hundreds.png" width="96px" /></td>
                    <td><img src="../assets/img/math/tens.png" width="64px"/></td>
                    <td><img src="../assets/img/math/ones.png" width="32px"/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row d-none d-print-inline">
        <div class="col text-center">
          <h1>Group Counting. Count the total boxes.</h1>
        </div>
      </div>
      <template v-for="(v, i) in values">
        <div class="row">
          <div class="col">
              <table >
                  <tbody>
                      <template v-for="(tthr, tthri) in 2">
                          <tr>
                              <template v-for="(tthc, tthci) in 5">
                                  <td>
                                      <div v-if="((tthri * 5 ) + tthci) < v.thousands"><img src="../assets/img/math/thousands.png" width="32px"/></div>
                                      <div v-else>&nbsp;</div>
                                  </td>
                              </template>
                          </tr>
                      </template>
                  </tbody>
              </table>
          </div>
          <div class="col">
            <table >
                <tbody>
                    <template v-for="(thr, thri) in 2">
                        <tr>
                            <template v-for="(thc, thci) in 5">
                                <td>
                                    <div v-if="((thri * 5) + thci) < v.hundreds"><img src="../assets/img/math/hundreds.png" width="32px" /></div>
                                    <div v-else>&nbsp;</div>
                                </td>
                            </template>
                        </tr>
                    </template>
                 </tbody>
            </table>
          </div>
          <div class="col">
            <table >
                <tbody>
                    <template v-for="(ttr, ttri) in 2">
                        <tr>
                            <template v-for="(ttc, ttci) in 5">
                                <td>
                                    <div v-if="((ttri * 5 ) + ttci) < v.tens"><img src="../assets/img/math/tens.png" width="32px"/></div>
                                    <div v-else>&nbsp;</div>
                                </td>
                            </template>
                        </tr>
                    </template>
                 </tbody>
            </table>
          </div>
          <div class="col">
            <table >
                <tbody>
                    <template v-for="(tor, tori) in 2">
                        <tr>
                            <template v-for="(toc, toci) in 5">
                                <td>
                                    <div v-if="((tori * 5 ) + toci) < v.ones"><img src="../assets/img/math/ones.png" width="32px"/></div>
                                    <div v-else>&nbsp;</div>
                                </td>
                            </template>
                        </tr>
                    </template>
                 </tbody>
            </table>
          </div>
        </div>
        <div class="row text-left">
          <div class="col">
            Figure {{i + 1}}. Your Answer: _____________________
            <hr width="100%" style="background-color: black;">
          </div>
        </div>
        <div :class="((i+1) % 3) == 0 ? 'printable-questions' : ''"></div>
      </template>
      <div class="divider">&nbsp;</div>
    </div>
  </div>
</template>


<script>
import ApiService from "../service/ApiService";
import MathFnButtons from "../components/MathFnButtons";
const apiService = new ApiService();

export default {
  name: "MathBoxCount",
  components: {
    MathFnButtons
  },
  data() {
    return {
      "values" : []
    };
  },
  methods: {
    handleLoad() {
      this.handleGenerateValues();
    },
    getValues() {
      apiService
        .getMathCountDigits("boxCount", 0, 0, "F")
        .then((res) => {
          this.values = res.data["numbers"];
        })
        .catch((err) => console.error(err));
    },
    handleGenerateValues() {
      this.getValues();
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
