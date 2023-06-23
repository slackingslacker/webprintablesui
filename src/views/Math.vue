<template>
  <div>
    <section class="page-section portfolio">
        <div class="divider">&nbsp;</div>
        <div class="container">
            <!-- Portfolio Section Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Printables</h2>
            <!-- Icon Divider-->
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><font-awesome-icon :icon="['far', 'star']" /></div>
                <div class="divider-custom-line"></div>
            </div>
            <!-- Portfolio Grid Items-->
            <!--<div class="row justify-content-center">
                <div class="col-md-6 col-lg-4 mb-5" v-bind:key="index" v-for="(mathLink, index) in mathLinks">
                    <router-link v-bind:to="mathLink.url" class="printable-category-link">
                        <div class="printable-category mx-auto">
                          <div class="printable-inner-content" v-html="mathLink.title"></div>
                        </div>
                    </router-link>
                </div>
            </div>-->
            <h3>
                Click on the boxes below
              </h3>
            <div class="row">
              
              <div class="col-md-3 col-lg-4 mb-5" v-bind:key="index" v-for="(mathLink, index) in mathLinks">
                <router-link v-bind:to="mathLink.url" class="card-counter-link">
                  <div :class="mathLink.css">
                    <i class="fas fa-square-root-alt"></i>
                    <span class="count-name">{{mathLink.plaintTitle}}</span>
                    <span class="count-numbers">{{mathLink.ex}}</span>
                  </div>
                </router-link>
              </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import { mathLinks } from '../common/Constants'

export default {
  name: 'Math',
  data() {
    return {
      mathLinks: mathLinks
    };
  },
}
</script>
