<template>
    <div class="h100">
        <!--========== HEADER ==========-->
        <header class="header navbar-fixed-top">
            <!-- Navbar -->
            <nav class="navbar" role="navigation">
                <div class="container">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="menu-container">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="toggle-icon"></span>
                        </button>

                        <!-- Logo -->
                        <div class="logo">
                            <a class="logo-wrap" href="index.html">
                                <img class="logo-img logo-img-main" src="../assets/img/logo.png" alt="Asentus Logo">
                                <img class="logo-img logo-img-active" src="../assets/img/logo-dark.png" alt="Asentus Logo">
                            </a>
                        </div>
                        <!-- End Logo -->
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse nav-collapse">
                        <div class="menu-container">
                            <ul class="navbar-nav navbar-nav-right">
                                <li class="nav-item"><router-link class="nav-item-child nav-item-hover" to="/rizzoluce">Home</router-link></li>
                                <li class="nav-item"><router-link class="nav-item-child nav-item-hover" to="/company">Company</router-link></li>
                                <li class="nav-item"><router-link class="nav-item-child nav-item-hover" to="/project">Project</router-link></li>
                                <li class="nav-item"><router-link class="nav-item-child nav-item-hover" to="/products">Product</router-link></li>
                                <li class="nav-item"><router-link class="nav-item-child nav-item-hover" to="/news">News</router-link></li>
                                <li class="nav-item"><router-link class="nav-item-child nav-item-hover active" to="/download">Download</router-link></li>
                                <li class="nav-item"><router-link class="nav-item-child nav-item-hover" to="/contact">Contact</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <!-- End Navbar Collapse -->
                </div>
            </nav>
            <!-- Navbar -->
        </header>
        <!--========== END HEADER ==========-->

        <!--========== PARALLAX ==========-->
        <div class="parallax-window" data-parallax="scroll" :data-image-src="img">
            <div class="parallax-content container">
                <h1 class="carousel-title">DOWNLOAD</h1>
            </div>
        </div>
        <!--========== PARALLAX ==========-->

        <!--========== PAGE LAYOUT ==========-->
        <!-- Team -->
        <div class="bg-color-sky-light">
            <div class="content-lg container">
                <div class="row margin-b-40">
                    <div class="col-sm-6">
                        <h2>Download</h2>
                    </div>
                </div>
                <!--// end row -->

                <div class="row">
                    <!-- Team -->
                    <div class="col-sm-4 sm-margin-b-50">
                        <div class="bg-color-white margin-b-20">
                            <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <a href="/res/1.png">
                                <img class="img-responsive" src="../assets/img/download/download01.png" alt="Team Image">
                            </a>
                            </div>
                        </div>
                        <h4><a href="#">Alicia Keys</a> <span class="text-uppercase margin-l-20">Project Manager</span></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                        <a class="link" href="#">Read More</a>
                    </div>
                    <!-- End Team -->

                    <!-- Team -->
                    <div class="col-sm-4 sm-margin-b-50">
                        <div class="bg-color-white margin-b-20">
                            <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <a href="">
                                <img class="img-responsive" src="../assets/img/download/download02.png" alt="Team Image">
                            </a>
                            </div>
                        </div>
                        <h4><a href="#">James Millner</a> <span class="text-uppercase margin-l-20">Lead Developer</span></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                        <a class="link" href="#">Read More</a>
                    </div>
                    <!-- End Team -->

                    <!-- Team -->
                    <div class="col-sm-4 sm-margin-b-50">
                        <div class="bg-color-white margin-b-20">
                            <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <a href="">
                                <img class="img-responsive" src="../assets/img/download/download03.png" alt="Team Image">
                            </a>
                            </div>
                        </div>
                        <h4><a href="#">Scarlet Johanson</a> <span class="text-uppercase margin-l-20">Designer</span></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor</p>
                        <a class="link" href="#">Read More</a>
                    </div>
                    <!-- End Team -->
                </div>
                <!--// end row -->
            </div>
        </div>
        <!-- End Team -->
        <!--========== END PAGE LAYOUT ==========-->

        <!--========== FOOTER ==========-->
        <footer class="footer">
            <!-- Links -->
            <div class="footer-seperator">
                <div class="content-lg container">
                    <div class="row">
                        <div class="col-sm-2 sm-margin-b-50">
                            <!-- List -->
                            <ul class="list-unstyled footer-list">
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Home</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">About</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Products</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Pricing</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Clients</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Careers</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Contact</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Terms</a></li>
                            </ul>
                            <!-- End List -->
                        </div>
                        <div class="col-sm-4 sm-margin-b-30">
                            <!-- List -->
                            <ul class="list-unstyled footer-list">
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Twitter</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Facebook</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">Instagram</a></li>
                                <li class="footer-list-item"><a class="footer-list-link" href="#">YouTube</a></li>
                            </ul>
                            <!-- End List -->
                        </div>
                        <div class="col-sm-5 sm-margin-b-30">
                            <h2 class="color-white">Send Us A Note</h2>
                            <input type="text" class="form-control footer-input margin-b-20" placeholder="Name" required>
                            <input type="email" class="form-control footer-input margin-b-20" placeholder="Email" required>
                            <input type="text" class="form-control footer-input margin-b-20" placeholder="Phone" required>
                            <textarea class="form-control footer-input margin-b-30" rows="6" placeholder="Message" required></textarea>
                            <button type="submit" class="btn-theme btn-theme-sm btn-base-bg text-uppercase">Submit</button>
                        </div>
                    </div>
                    <!--// end row -->
                </div>
            </div>
            <!-- End Links -->

            <!-- Copyright -->
            <div class="content container">
                <div class="row">
                    <div class="col-xs-6">
                        <img class="footer-logo" src="../assets/img/logo.png" alt="Asentus Logo">
                    </div>
                    <div class="col-xs-6 text-right">
                        <p class="margin-b-0">© Copyright 2018 Rizzoluce</p>
                    </div>
                </div>
                <!--// end row -->
            </div>
            <!-- End Copyright -->
        </footer>
        <!--========== END FOOTER ==========-->

        <!-- Back To Top -->
        <a href="javascript:void(0);" class="js-back-to-top back-to-top">Top</a>
    </div>
</template>
<style src="../assets/css/layout.min.css"></style>
<script>
import WOW from 'wow.js'
export default {
    data(){
        return {
            img: require('../assets/img/download/download03.png')
        }
    },
    mounted() {
        $('.parallax-window').parallax({
              calibrateX: false,
              calibrateY: true,
              invertX: false,
              invertY: true,
              limitX: false,
              limitY: 10,
              scalarX: 2,
              scalarY: 8,
              frictionX: 0.2,
              frictionY: 0.8
        });

        this.handleWow();
        //跳转到页面顶部
        scrollTo(0,0);
    },
    methods:{
        handleWow() {
            var wow = new WOW({
                boxClass:     'wow',      // animated element css class (default is wow)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       false,      // trigger animations on mobile devices (true is default)
                tablet:       false       // trigger animations on tablet devices (true is default)
            });
            wow.init();
        }
    }
}
</script>