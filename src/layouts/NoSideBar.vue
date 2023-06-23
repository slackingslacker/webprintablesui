<template>
  <div>
    <!-- Navigation-->
    <NavBar/>
    <slot/>
    <!-- Footer-->
    <Footer/>
    <CopyrightFooter/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import CopyrightFooter from '@/components/CopyrightFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    CopyrightFooter
  }
}
</script>
