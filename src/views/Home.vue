<template>
  <div>
    <!-- Masthead-->
    <Header/>
    <!-- Portfolio Section-->
    <section class="page-section portfolio" id="portfolio">
        <div class="container">
            <!-- Portfolio Section Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Printable Worksheets</h2>
            <!-- Icon Divider-->
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><font-awesome-icon :icon="['far', 'star']" /></div>
                <div class="divider-custom-line"></div>
            </div>
            <!-- Portfolio Grid Items-->
            <div class="row justify-content-center">
                <!-- Portfolio Item 1-->
                <div class="col-md-6 col-lg-4 mb-5">
                    <div class="printable-item mx-auto printable-item-link">
                        <router-link to="/math">
                            <img class="img-fluid" src="../assets/img/portfolio/math.png" alt="Mathematics Worksheets" />
                        </router-link>
                    </div>
                    <div>
                        <h2 class="">Math Worksheets</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Section-->
    <section class="page-section bg-home-green text-white mb-0" id="about">
        <div class="container">
            <!-- About Section Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
            <!-- Icon Divider-->
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><font-awesome-icon :icon="['far', 'star']" /></div>
                <div class="divider-custom-line"></div>
            </div>
            <!-- About Section Content-->
            <div class="row ">
                <div class="col-lg-4 ml-auto">
                    <p class="lead text-left">
                        In this digital age, we mostly use our gadgets to do things for us like texting, sending emails, shopping, etc.
                        These functionalities makes our lives easier by just clicking buttons they tend to calculate what you want to do. Examples of these functionalities
                        are autocorrect or using calculator. By depending too much on the gadgets it will be harder for us to do simple
                        spelling or simple calculations
                    </p>
                </div>
                <div class="col-lg-4 mr-auto">
                    <p class="lead text-left">
                        The JAL Printables helps you or your children practice calculations. You can train your child by creating different levels
                        of worksheet. The JAL Printable worksheet are dynamic worksheet which you can generate and print. The worksheets are random
                        so even your child will be challenged in every print. 
                    </p>
                </div>
                <div class="col-lg-4 mr-auto">
                    <p class="lead text-left">
                        JAL Printable worksheets is free to use. There is no need to signup! 
                    </p>
                </div>
            </div>
            <!-- About Section Button-->
            <!--
            <div class="text-center mt-4">
                <a class="btn btn-xl btn-outline-light" href="/#portfolio">
                    Find out More
                </a>
            </div>-->
        </div>
    </section>
    <!-- Contact Section-->
    <!--
    <section class="page-section" id="contact">
        <div class="container">
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><font-awesome-icon :icon="['far', 'star']" /></div>
                <div class="divider-custom-line"></div>
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <form id="contactForm" name="sentMessage" novalidate="novalidate">
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Name</label>
                                <input class="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Email Address</label>
                                <input class="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Phone Number</label>
                                <input class="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Message</label>
                                <textarea class="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <br />
                        <div id="success"></div>
                        <div class="form-group"><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    -->
    <!-- Portfolio Modals-->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
