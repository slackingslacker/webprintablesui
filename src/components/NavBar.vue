<template>
    <nav class="navbar navbar-expand-lg bg-dark text-uppercase fixed-top d-print-none" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="/#">JAL Worksheets</a>
            <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <font-awesome-icon :icon="['fas', 'bars']" />
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/#portfolio" data-target="#portfolio">Worksheets</a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/#about" data-target="#about">About</a></li>
                    <li class="nav-item mx-0 mx-lg-1 dropdown">
                        <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Lessons
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/Math">Mathematics</a>
                            <router-link v-bind:to="mathLink.url" class="dropdown-item" v-bind:key="index" v-for="(mathLink, index) in mathLinks" v-html="mathLink.title"></router-link>
                            <!--<div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>-->
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mathLinks } from '../common/Constants'

export default {
    name: 'NavBar',
    data() {
    return {
      mathLinks: mathLinks
    };
  },
}
</script>