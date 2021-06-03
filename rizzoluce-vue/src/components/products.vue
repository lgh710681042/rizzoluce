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
                                <li class="nav-item"><router-link class="nav-item-child nav-item-hover active" to="/products">Product</router-link></li>
                                <li class="nav-item"><router-link class="nav-item-child nav-item-hover" to="/news">News</router-link></li>
                                <li class="nav-item"><router-link class="nav-item-child nav-item-hover" to="/download">Download</router-link></li>
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
                <h1 class="carousel-title">Products</h1>
            </div>
        </div>
        <!--========== PARALLAX ==========-->

        <!--========== PAGE LAYOUT ==========-->
        <!-- Our Exceptional Solutions -->
        <div class="container" style="padding-top: 100px;">
            <div class="row margin-b-40">
                <div class="col-sm-6">
                    <h2>Interior</h2>
                </div>
            </div>
            <!--// end row -->

            <div class="row margin-b-50">
                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <!-- <a href="product.html"> -->
                        <router-link to="/product?product_id=1">
                            <img class="img-responsive" src="../assets/img/970x647/downlights.png" alt="Our Exceptional Solutions Image">
                        </router-link>
                        <!-- </a> -->
                        </div>
                    </div>
                    <h3><a href="product.html">Downlights</a></h3>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/trackspotlights.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">Track spotlights</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/pendants.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">Pendants</a></h4>
                </div>

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/linearandstrips.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">Linear and strips</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->
            </div>
            <!--// end row -->

            <div class="row margin-b-50">
                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/wallluminaires.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">Wall luminaires</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/modularsystem.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">Modular system</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/ceilingluminaires.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">Ceiling luminaires</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/generallighting.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">General lighting</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->
            </div>
            <!--// end row -->

            <div class="row margin-b-50">
                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/generallighting.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">General lighting</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/generallighting.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">General lighting</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/generallighting.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">General lighting</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/generallighting.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">General lighting</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->
            </div>
            <!--// end row -->
        </div>
        <!-- End Our Exceptional Solutions -->

        <!-- Our Exceptional Solutions -->
        <div class="container">
            <div class="row margin-b-40">
                <div class="col-sm-6">
                    <h2>Exterior</h2>
                </div>
            </div>
            <!--// end row -->

            <div class="row margin-b-50">
                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/ceilingluminaires.jpg" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">Ceiling luminaires</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/facadeluminaires.jpg" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">Facade luminaires</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/floodlights.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">Floodlights</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/linearsystem.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">Linear system</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->
            </div>
            <!--// end row -->

            <div class="row margin-b-50">
                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/bollards.jpg" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">Bollards</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/urbanlighting.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">Urban lighting</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/in-groundluminaires.jpg" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">In-ground luminaires</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/underwaterluminaires.jpg" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">Underwater luminaires</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->
            </div>
            <!--// end row -->

            <div class="row margin-b-50">
                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/ledstrips.jpg" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">LED strips</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/specialeffectluminaires.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">Special effect luminaires</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/decorative.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">Decorative</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <!-- <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="img/970x647/generallighting.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">General lighting</a></h4> -->
                </div>
                <!-- End Our Exceptional Solutions -->
            </div>
            <!--// end row -->
        </div>
        <!-- End Our Exceptional Solutions -->


        <!-- Light Control  -->
        <div class="container">
            <div class="row margin-b-40">
                <div class="col-sm-6">
                    <h2>Light Control </h2>
                </div>
            </div>
            <!--// end row -->

            <div class="row margin-b-50">
                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/masteraction1.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">MasterAction 1</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/masteraction2.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">MasterAction 2</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/masteraction3.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">MasterAction 3</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-3 sm-margin-b-50">
                    <div class="margin-b-20 product-style">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <a href="#">
                            <img class="img-responsive" src="../assets/img/970x647/masteraction4.png" alt="Our Exceptional Solutions Image">
                        </a>
                        </div>
                    </div>
                    <h4><a href="#">MasterAction 4</a></h4>
                </div>
                <!-- End Our Exceptional Solutions -->
            </div>
            <!--// end row -->
        </div>
        <!-- End Light Control  -->

        <!-- Promo Section -->
        <div class="promo-section overflow-h">
            <div class="container">
                <div class="clearfix">
                    <div class="ver-center">
                        <div class="ver-center-aligned">
                            <div class="promo-section-col">
                                <h2>Our Clients</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolore magna aliqua enim minim veniam exercitation</p>
                                <p>Ipsum dolor sit amet consectetur adipiscing elit sed tempor incididut ut sead laboret dolore magna aliqua enim minim veniam exercitation ipsum dolor sit amet consectetur adipiscing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="promo-section-img-right">
                <img class="img-responsive" src="../assets/img/970x970/01.jpg" alt="Content Image">
            </div>
        </div>
        <!-- End Promo Section -->
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
                        <img class="footer-logo" src="img/logo.png" alt="Asentus Logo">
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
<style src="../assets/css/common-style.css"></style>
<script>
import WOW from 'wow.js'
export default {
    data(){
        return {
            img: require('../assets/img/product/product01.jpg')
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