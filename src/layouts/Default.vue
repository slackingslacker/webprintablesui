<template>
  <div class="div-default-layout">
    <NavBar/>
    <!-- Page Content -->
    <div class="container">
        <div class="row">
            <div class="col-lg-3 d-print-none d-none d-sm-block">
                <h2 class="my-4">&nbsp;</h2>
                <div class="list-group text-left">
                    <router-link to="/math" class="list-group-item list-group-item-primary">Mathematics</router-link>
                    <router-link v-bind:to="mathLink.url" class="list-group-item" v-bind:key="index" v-for="(mathLink, index) in mathLinks" v-html="mathLink.title"></router-link>
                </div>
            </div>
            <!-- /.col-lg-3 -->
            <div class="col-lg-9">
                <slot/>
            </div>
        <!-- /.col-lg-9 -->
        </div>
    <!-- /.row -->
    </div>
    <!-- /.container -->

    <Footer/>
    <CopyrightFooter/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import CopyrightFooter from '@/components/CopyrightFooter.vue'
import { mathLinks } from '../common/Constants'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    CopyrightFooter
  },
  data() {
    return {
      mathLinks: mathLinks
    };
  },
}
</script>
