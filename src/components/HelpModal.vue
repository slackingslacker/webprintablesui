<template>
  <span style="padding-left: 5px;">
    <button type="button" class="btn btn-primary" @click="showModal"><font-awesome-icon :icon="['fas', 'question']" /></button>
    <b-modal ref="help-button-modal" hide-footer ok-only>
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fas fa-times"></i></span>
                </button>
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col">
                                <!-- Portfolio Modal - Title-->
                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal6Label">Buttons Help</h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><font-awesome-icon :icon="['far', 'star']" /></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <!-- Portfolio Modal - Text-->
                                <dl class="row text-left">
                                  <dt class="col-sm-3"><button type="button" class="btn btn-primary"><font-awesome-icon :icon="['fas', 'caret-square-right']" /></button></dt>
                                  <dd class="col-sm-9">This button generates the random values for the worksheet you want to print.</dd>

                                  <dt class="col-sm-3"><button type="button" class="btn btn-primary"><font-awesome-icon :icon="['fas', 'print']" /></button></dt>
                                  <dd class="col-sm-9">Prints the current worksheet. You can either print to a printer or to a file. Best printed on A4 Size and portrait orientation</dd>

                                  <dt class="col-sm-3"><button type="button" class="btn btn-primary"><font-awesome-icon :icon="['fas', 'arrow-left']" /></button></dt>
                                  <dd class="col-sm-9"><p>Goes back to the previous menu.</p></dd>

                                  <dt class="col-sm-3"><button type="button" class="btn btn-primary"><font-awesome-icon :icon="['fas', 'question']" /></button></dt>
                                  <dd class="col-sm-9"><p>Opens the help menu for button.</p></dd>
                                </dl>

                                <button class="btn btn-primary" @click="hideModal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </b-modal>
  </span>
</template>

<script>
  export default {
    methods: {
      showModal() {
        this.$refs['help-button-modal'].show()
      },
      hideModal() {
        this.$refs['help-button-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['help-button-modal'].toggle('#toggle-btn')
      }
    }
  }
</script>

<style scoped>
#helpModalTable td{
    padding: 5px;
}
</style>