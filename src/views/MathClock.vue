<template>
  <div id="mathClock">
    <section class="portfolio d-print-none">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Time Reading</h2>
        <!-- Icon Divider-->
        <div class="divider-custom ">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><font-awesome-icon :icon="['far', 'star']" /></div>
            <div class="divider-custom-line"></div>
        </div>
        <div id="no-print" class="row">
          <div class="col align-self-center">
            <div class="form-row">
              <MathFnButtons :pageId="'mathClock'" :components="['generator', 'help']" v-on:generate-values="handleGenerateValues"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col align-self-center">
            <h3>Time Reading.</h3>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row d-none d-print-inline">
        <div class="col text-center">
          <h1>Time Reading.</h1>
        </div>
      </div>
      <div class="row" v-bind:key="index" v-for="(numValue, index) in numValues">
        <div class="col">
          <div class="row">
            <div class="col">
              <div class="clock">
                <!--<div>
                  <div class="info date"></div>
                  <div class="info day"></div>
                </div>
                <div class="dot"></div>-->
                <div>
                  <div class="hour-hand" v-bind:style="clockRotation((numValue.hour * 30 + numValue.minute * (360/720)))"></div>
                  <div class="minute-hand" v-bind:style="clockRotation(numValue.minute * 6 + numValue.second * (360/3600))"></div>
                  <div class="second-hand" v-bind:style="clockRotation((numValue.second * 6))"></div>
                </div>
                <div>
                  <span class="h3 span-clock">3</span>
                  <span class="h6 span-clock">6</span>
                  <span class="h9 span-clock">9</span>
                  <span class="h12 span-clock">12</span>
                </div>
                <div class="diallines" v-bind:style="clockRotation((6 * (index-3)))" v-bind:key="index" v-for="index in 60" ></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col padding-top-time">

            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="divider-50"><hr/></div>
            </div>
          </div>
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
  name: "MathClock",
  components: {
    MathFnButtons
  },
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
        .getBasicTime("clockTime")
        .then((res) => {
          this.numValues = res.data["gentime"];
        })
        .catch((err) => console.error(err));
    },
    handleGenerateValues() {
      this.getValues();
    },
    clockRotation: function (deg) {
      let trans = "rotate("+deg+"deg)";
      return {
        "transform": trans
      }
    },
    movingClock: function() {
      /* var dialLines = document.getElementsByClassName('diallines');
      var clockEl = document.getElementsByClassName('clock')[0];

      for (var i = 1; i < 60; i++) {
        clockEl.innerHTML += "<div class='diallines'></div>";
        dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
      }

      function clock() {
        var weekday = new Array(7),
            d = new Date(),
            h = d.getHours(),
            m = d.getMinutes(),
            s = d.getSeconds(),
            date = d.getDate(),
            month = d.getMonth() + 1,
            year = d.getFullYear(),
                
            hDeg = h * 30 + m * (360/720),
            mDeg = m * 6 + s * (360/3600),
            sDeg = s * 6,
            
            hEl = document.querySelector('.hour-hand'),
            mEl = document.querySelector('.minute-hand'),
            sEl = document.querySelector('.second-hand'),
            dateEl = document.querySelector('.date'),
            dayEl = document.querySelector('.day');

            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
        
            var day = weekday[d.getDay()];
        
        if(month < 9) {
          month = "0" + month;
        }
        
        hEl.style.transform = "rotate("+hDeg+"deg)";
        mEl.style.transform = "rotate("+mDeg+"deg)";
        sEl.style.transform = "rotate("+sDeg+"deg)";
        dateEl.innerHTML = date+"/"+month+"/"+year;
        dayEl.innerHTML = day;
      }

      setInterval("clock()", 100); */

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
