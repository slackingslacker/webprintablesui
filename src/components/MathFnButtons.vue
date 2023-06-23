<template>
	<div class="form-group">
		<div class="btn-bottom-loc">&nbsp;</div>
		<span v-show="hasAnswer">
			<input type="checkbox" id="checkAnswer" @click="setShowAnswer($event)"/>&nbsp;
			<label class="form-check-label" for="hasAnswer">Has Answer</label>&nbsp;
		</span>
		&nbsp;
		<span v-show="hasGenerateValues">
			<button type="button" class="btn btn-primary" @click="handleGenerateValues">
				<font-awesome-icon :icon="['fas', 'caret-square-right']" /></button
			>
		</span>
		&nbsp;
		<span v-show="hasPrint">
			<button type="button" class="btn btn-primary" @click="handlePrint">
				<font-awesome-icon :icon="['fas', 'print']" /></button
			>&nbsp;
		</span>
		&nbsp;
		<span v-show="hasWPrint">
			<button type="button" class="btn btn-primary" @click="handleWPrint">
				<font-awesome-icon :icon="['fas', 'print']" /></button
			>&nbsp;
		</span>
		&nbsp;
		<button type="button" class="btn btn-primary" @click="redirectToMath">
			<font-awesome-icon :icon="['fas', 'arrow-left']" /></button
		>
		<span v-show="hasHelp">
			<help-modal />
		</span>
	</div>
</template>

<script>
import PrintService from "../service/PrintService";
import HelpModal from "../components/HelpModal";
const printService = new PrintService();

export default {
  name: "MathFnButtons",
  components: {
    HelpModal
  },
  props: {
   pageId: String,
	 components: Array
  },
	data() {
    return {
      hasAnswer: false,
			hasGenerateValues: false,
			hasPrint: false,
			hasWPrint: false,
			hasHelp: false
    };
  },
  methods: {
		handleLoad(){
			for(let cmp of this.components) {
				if (cmp === "answer") {
					this.hasAnswer = true;
					continue;
				}

				if (cmp === "generator") {
					this.hasGenerateValues = true;
					continue;
				}

				if (cmp === "print") {
					this.hasPrint = true;
					continue;
				}

				if (cmp === "wprint") {
					this.hasWPrint = true;
					continue;
				}

				if (cmp === "help") {
					this.hasHelp = true;
					continue;
				}
			}
		},
    handleGenerateValues() {
      this.$emit("generate-values");
    },
    handlePrint() {
			console.log('printservice')
      printService.printPage(this.pageId);
    },
		handleWPrint() {
			console.log('window print')
      window.print();
    },
    redirectToMath() {
      this.$router.push({ path: "/math" });
    },
		setShowAnswer(event) {
			this.$emit('show-answer', event.target.checked);
		}
  },
  watch: {
    $route: {
      handler: "handleLoad",
      immediate: true,
    },
  }
};
</script>