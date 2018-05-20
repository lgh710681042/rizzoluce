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
                                <li class="nav-item"><router-link class="nav-item-child nav-item-hover" to="/download">Download</router-link></li>
                                <li class="nav-item"><router-link class="nav-item-child nav-item-hover active" to="/contact">Contact</router-link></li>
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
                <h1 class="carousel-title">Contact</h1>
            </div>
        </div>
        <!--========== PARALLAX ==========-->

        <!--========== PAGE LAYOUT ==========-->
        <!-- Contact List -->
        <div class="section-seperator">
            <div class="content-lg container">
                <div class="row">
                    <!-- Contact List -->
                    <div class="col-sm-4 sm-margin-b-50">
                        <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                            <h3><a href="#">ITALY</a> <span class="text-uppercase margin-l-20">Head Office</span></h3>
                            <p>Via Padania, 8 - 20853 Biassono (MB) Italy</p>
                            <ul class="list-unstyled contact-list">
                                <li><i class="margin-r-10 color-base icon-call-out"></i>+39(039)2497396</li>
                                <li><i class="margin-r-10 color-base icon-envelope"></i>info@rizzoluce.com</li>
                            </ul>
                        </div>
                    </div>
                    <!-- End Contact List -->

                    <!-- Contact List -->
                    <div class="col-sm-4 sm-margin-b-50">
                        <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                            <h3><a href="#">AMERICA</a> <span class="text-uppercase margin-l-20">Branch Office</span></h3>
                            <p>The Prado Group 980 Bush St. San Francisco, CA 94109 ,US</p>
                            <ul class="list-unstyled contact-list">
                                <li><i class="margin-r-10 color-base icon-call-out"></i>+1(415) 395-7368</li>
                                <li><i class="margin-r-10 color-base icon-envelope"></i>info@rizzoluce.com</li>
                            </ul>
                        </div>
                    </div>
                    <!-- End Contact List -->

                    <!-- Contact List -->
                    <div class="col-sm-4 sm-margin-b-50">
                        <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                            <h3><a href="#">CHINA</a> <span class="text-uppercase margin-l-20">Branch Office</span></h3>
                            <p>2#1515 No.1 Palaza,Mawei Fuzhou,CN350008,China</p>
                            <ul class="list-unstyled contact-list">
                                <li><i class="margin-r-10 color-base icon-call-out"></i>+86(591)8591-0676</li>
                                <li><i class="margin-r-10 color-base icon-envelope"></i>info@rizzoluce.com</li>
                            </ul>
                        </div>
                    </div>
                    <!-- End Contact List -->
                </div>
                <!--// end row -->
            </div>
        </div>
        <!-- End Contact List -->


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
            img: require('../assets/img/contact/contact01.jpg')
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