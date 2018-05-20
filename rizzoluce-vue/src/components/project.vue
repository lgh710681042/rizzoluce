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
                                <li class="nav-item"><router-link class="nav-item-child nav-item-hover active" to="/project">Project</router-link></li>
                                <li class="nav-item"><router-link class="nav-item-child nav-item-hover" to="/products">Product</router-link></li>
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
                <h1 class="carousel-title">Project</h1>
            </div>
        </div>
        <!--========== PARALLAX ==========-->

        <!--========== PAGE LAYOUT ==========-->
        <!-- Our Exceptional Solutions -->
        <div class="content-lg container">
            <div class="row margin-b-40">
                <div class="col-sm-6">
                    <h2>Interior Lighting Projects</h2>
                </div>
            </div>
            <!--// end row -->

            <div class="row margin-b-50">
                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project01.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">GASTHAUS SETTELE</a> <span class="text-uppercase margin-l-20">Augsburg, Germany</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project02.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">HESSISCHES LANDESMUSEUM</a> <span class="text-uppercase">Darmstadt, Germany</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project03.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">GERIATRICS SIMMERING</a> <span class="text-uppercase margin-l-20">Vienna, Austria</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->
            </div>
            <!--// end row -->

            <div class="row margin-b-50">
                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project04.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">ERNST & YOUNG, IZD TOWER</a> <span class="text-uppercase margin-l-20">Vienna, Austria</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project05.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">SPREEDREIECK</a> <span class="text-uppercase margin-l-20">Berlin, Germany</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project06.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">MICROSOFT BRIEFING CENTER</a> <span class="text-uppercase margin-l-20">Wallisellen, Switzerland</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->
            </div>
            <!--// end row -->

            <div class="row margin-b-50">
                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project07.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">PUMA FASHION STORE</a> <span class="text-uppercase margin-l-20">Paris, France</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project08.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">NEXUS HOUSE OF SOUND & VISION</a> <span class="text-uppercase margin-l-20">Herning, Denmark</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project09.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">OMG! SHOE STORE</a> <span class="text-uppercase margin-l-20">Linz, Austria</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->
            </div>
            <!--// end row -->
        </div>
        <!-- End Our Exceptional Solutions -->


        <!--========== PAGE LAYOUT ==========-->
        <!-- Our Exceptional Solutions -->
        <div class="container">
            <div class="row margin-b-40">
                <div class="col-sm-6">
                    <h2>Exterior Lighting Projects</h2>
                </div>
            </div>
            <!--// end row -->

            <div class="row margin-b-50">
                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project10.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">PRIVATE RESIDENCE</a> <span class="text-uppercase margin-l-20">Mallorca, Spain</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project11.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">2 OAKS HOUSE</a> <span class="text-uppercase">Sofia, Bulgaria</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project12.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">PRIVATE VILLA, QUINTA PATINO</a> <span class="text-uppercase margin-l-20">Estoril, Portugal</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->
            </div>
            <!--// end row -->

            <div class="row margin-b-50">
                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project13.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">PRIVATE RESIDENCE PLANE HOUSE</a> <span class="text-uppercase margin-l-20">Skiathos, Greece</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project14.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">PRIVATE RESIDENCE</a> <span class="text-uppercase margin-l-20">Wartberg, Austria</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project15.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">LAKE HOTEL</a> <span class="text-uppercase margin-l-20">Weißensee, Austria</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->
            </div>
            <!--// end row -->

            <div class="row margin-b-50">
                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project16.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">AROLA HOUSE</a> <span class="text-uppercase margin-l-20">London England</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project17.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">BOYNE BRIDGE</a> <span class="text-uppercase margin-l-20">Dublin</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->

                <!-- Our Exceptional Solutions -->
                <div class="col-sm-4 sm-margin-b-50">
                    <div class="margin-b-20">
                        <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                            <img class="img-responsive" src="../assets/img/project/project18.png" alt="Our Exceptional Solutions Image">
                        </div>
                    </div>
                    <h4><a href="#">PONT SCHUMAN</a> <span class="text-uppercase margin-l-20">Lyon</span></h4>
                    <a class="link" href="#">Read More</a>
                </div>
                <!-- End Our Exceptional Solutions -->
            </div>
            <!--// end row -->
        </div>
        <!-- End Our Exceptional Solutions -->

        <!-- Clients -->
        <div class="bg-color-sky-light">
            <div class="content-lg container">
                <!-- Swiper Clients -->
                <div class="swiper-slider swiper-clients">
                    <!-- Swiper Wrapper -->
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img class="swiper-clients-img" src="../assets/img/clients/01.png" alt="Clients Logo">
                        </div>
                        <div class="swiper-slide">
                            <img class="swiper-clients-img" src="../assets/img/clients/02.png" alt="Clients Logo">
                        </div>
                        <div class="swiper-slide">
                            <img class="swiper-clients-img" src="../assets/img/clients/03.png" alt="Clients Logo">
                        </div>
                        <div class="swiper-slide">
                            <img class="swiper-clients-img" src="../assets/img/clients/04.png" alt="Clients Logo">
                        </div>
                        <div class="swiper-slide">
                            <img class="swiper-clients-img" src="../assets/img/clients/05.png" alt="Clients Logo">
                        </div>
                        <div class="swiper-slide">
                            <img class="swiper-clients-img" src="../assets/img/clients/06.png" alt="Clients Logo">
                        </div>
                    </div>
                    <!-- End Swiper Wrapper -->
                </div>
                <!-- End Swiper Clients -->
            </div>
        </div>
        <!-- End Clients -->
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
            img: require('../assets/img/1920x1080/01.jpg')
        }
    },
    mounted() {
        var swiper = new Swiper('.swiper-clients', {
            slidesPerView: 5,
            spaceBetween: 50,
            loop: true,
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                600: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            }
        });
        // Swiper Clients
        var swiper = new Swiper('.swiper-testimonials', {
            speed: 1000,
            autoplay: 10000,
            slidesPerView: 1,
            loop: true,
        });
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
