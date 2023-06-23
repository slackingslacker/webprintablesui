<template>
    <div class="container" v-show="hasAnswer" :class="hasAnswer ? 'printable-answers' : 'd-print-none'">
      <div class="row">
        <div class="col">
          <h3 class="is-size-6 text-dark">Anwsers.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col text-justify d-print-col-bs">
          <ol>
            <li v-bind:key="index" v-for="(numValue, index) in numValues" class="d-print-col-bs">
              {{ numValue.answer }}
            </li>
          </ol>
        </div>
      </div>
    </div>
</template>

<script>
export default {
 props: {
   hasAnswer: {
     type: Boolean
   },
   numValues: {
     type: Array
   }
 }
}
</script>