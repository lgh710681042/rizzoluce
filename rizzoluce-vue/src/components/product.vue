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
        <div class="parallax-window" data-parallax="scroll" data-image-src="../assets/img/product/product01.jpg">
            <div class="parallax-content container">
                <h1 class="carousel-title">Products</h1>
            </div>
        </div>
        <!--========== PARALLAX ==========-->
        
        <div class="content-lg container" style="padding-bottom:10px">
            <div class="row margin-b-50">
                <div class="col-sm-5 wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                    <div class="margin-b-10">
                        <h2 style="font-size: 13.2px; font-weight: 300; line-height: 2;">Lighting Effects</h2>
                        <img class="img-responsive" src="../assets/img/product/tantum50_compact_fb-dd.jpg" alt="Our Office">
                    </div>
                    <div>
                        <div class="col-sm-1" style=" padding-left:0; width:10%">
                             <img class="img-responsive" style="align-left" src="../assets/img/product/nb-dw.jpg" alt="Our Office">
                        </div>
                        <div class="col-sm-1" style=" padding-left:0; width:10%">
                             <img class="img-responsive" src="../assets/img/product/ub-dw.jpg" alt="Our Office">
                        </div>
                        <div class="col-sm-10" style=" width:80%"></div>
                    </div>
                </div>
                <div class="col-sm-6 sm-margin-b-50 col-sm-offset-1">
                    <div class="margin-b-30">
                        <h2>LUMINAIRE</h2>
                        <ul>
                            <li>Die-cast aluminium body and trim.</li>
                            <li>Polyester powder paint resistant to UV rays.</li>
                            <li>PMMA lenses for LEDs.</li>
                            <li>UV rays stabilized, 850°C glow wire test resistant,
V0 self-extinguishing clear polycarbonate screen.</li>
                            <li>It complies with standards EN 60598-1and EN 60598-2-2.</li>
                            <li>Nominal LED efficacy up to 126lumen/Watt
(4000K - 500mA - CRI>80 - Tj=85°C).</li>
                        <li>LED life time: >50000h with L80.</li>
                        <li>Available LEDs with high color rendition: CRI>90</li>
                        <li>High colour consistency: &lt;3 SDCM.</li>
                        </ul>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container">
            <ul class="nav nav-tabs">
                <li>
                    <a href="#">Version</a>
                </li>
                <li class="divider"></li>
            </ul>
        </div>

        <div class="container" style="padding-top: 20px;">
            <div class="row">
                <div class="col-sm-4">
                    <img class="img-responsive" src="../assets/img/product/01.png">
                </div>
                <div class="col-sm-4">
                    <p>
                        cornice quadra in acciaio inox
                    </p>
                </div>
                <div class="col-sm-4">
                    <img class="img-responsive" src="../assets/img/product/thunder110_cornice_quadra_inox_dim.jpg">
                </div>
            </div>
        </div>

        <div class="container" style="padding-top: 20px;">
            <div class="row">
                <div class="col-sm-3">
                    <ul class="nav nav-tabs">
                        <li style="width:100%">
                            Version
                        </li>
                        <li class="divider" style="width:100%"></li>
                    </ul>
                    <ul class="nav">
                        <li style="width:100%">
                            <input type="radio" name="standard">
                            <label>Standard</label>
                        </li>
                        <li>
                            <input type="radio" name="standard">
                            <label>All</label>
                        </li>
                    </ul>
                    <div style="margin-top: 40px;">
                        <button type="button" class="btn btn-default btn-lg">RESET</button>    
                    </div>
                </div>
                <div class="col-sm-3">
                    <ul class="nav nav-tabs">
                        <li>
                            CCT
                        </li>
                        <li class="divider"></li>
                    </ul>
                    <ul class="nav">
                        <li style="width:100%">
                            <input type="radio" name="standard">
                            <label>4000K</label>
                        </li>
                        <li>
                            <input type="radio" name="standard">
                            <label>3000K</label>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <ul class="nav nav-tabs">
                        <li>
                            Finish
                        </li>
                        <li class="divider"></li>
                    </ul>
                    <ul class="nav">
                        <li style="width:100%">
                            <input type="radio" name="standard">
                            <label>White</label>
                        </li>
                        <li style="width:100%">
                            <input type="radio" name="standard">
                            <label>Black</label>
                        </li>
                        <li style="width:100%">
                            <input type="radio" name="standard">
                            <label>Gray</label>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <ul class="nav nav-tabs">
                        <li>
                            Controllo
                        </li>
                        <li class="divider"></li>
                    </ul>
                    <ul class="nav">
                        <li style="width:100%">
                            <input type="radio" name="standard">
                            <label>ON/OFF</label>
                        </li>
                        <li>
                            <input type="radio" name="standard">
                            <label>0-10V Dimming</label>
                        </li>
                        <li>
                            <input type="radio" name="standard">
                            <label>DALI</label>
                        </li>
                        <li>
                            <input type="radio" name="standard">
                            <label>DMX</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="content-lg container" style="padding-top: 20px;">
            <table class="table table-hover">
                                <thead style="background-color:#dadada">
                                    <tr>
                                        <th>Code</th>
                                        <th>Optic</th>
                                        <th>Watt</th>
                                        <th>Lumen</th>
                                        <th class="hidden--xxs">CCT</th>
                                        <th class="hidden--xxs">CRI</th>
                                        <th class="hidden--xxs">Control</th>
                                        <th class="hidden--xxs">A</th>
                                        <th class="hidden--xxs">B</th>
                                        <th class="hidden--xxs">C</th>
                                        <th class="hidden--xxs">AC/DC</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="cursor-pointer product-modal-tr tr-ver-10499" data-id="117346" data-lucecol="+30" data-tempcol="3000K" data-wiring="C" data-std="or" style="display:none" data-keyboard="true">
                                        <th scope="row">0578005C+830+30</th>
                                        <td>nb 13°</td>
                                        <td>4W</td>
                                        <td>490lm</td>
                                        <td class="hidden--xxs">3000K</td>
                                        <td class="hidden--xxs">80</td>
                                        <td class="hidden--xxs">SC</td>
                                        <td class="hidden--xxs">120mm</td>
                                        <td class="hidden--xxs">74mm</td>
                                        <td class="hidden--xxs">110mm</td>
                                        <td class="hidden--xxs">AC220V</td>
                                    </tr>
                                    <tr class="cursor-pointer product-modal-tr tr-ver-10499" data-id="117351" data-lucecol="+30" data-tempcol="4000K" data-wiring="C" data-std="std" data-keyboard="true">
                                        <th scope="row">0578005C+840+30<img src=""></th>
                                        <td>nb 13°</td>
                                        <td>4W</td>
                                        <td>510lm</td>
                                        <td class="hidden--xxs">4000K</td>
                                        <td class="hidden--xxs">80</td>
                                        <td class="hidden--xxs">SC</td>
                                        <td class="hidden--xxs">120mm</td>
                                        <td class="hidden--xxs">74mm</td>
                                        <td class="hidden--xxs">110mm</td>
                                        <td class="hidden--xxs">AC220V</td>
                                    </tr>
                                    <tr class="cursor-pointer product-modal-tr tr-ver-10499" data-id="113169" data-lucecol="+30" data-tempcol="3000K" data-wiring="A" data-std="or" style="display:none" data-keyboard="true">
                                        <th scope="row">0578001A+830+30</th>
                                        <td>ub 110°</td>
                                        <td>0.4W</td>
                                        <td>20lm</td>
                                        <td class="hidden--xxs">3000K</td>
                                        <td class="hidden--xxs">80</td>
                                        <td class="hidden--xxs">ON/OFF</td>
                                        <td class="hidden--xxs">120mm</td>
                                        <td class="hidden--xxs">74mm</td>
                                        <td class="hidden--xxs">110mm</td>
                                        <td class="hidden--xxs">AC220V</td>
                                    </tr>
                                    <tr class="cursor-pointer product-modal-tr tr-ver-10499" data-id="113170" data-lucecol="+30" data-tempcol="4000K" data-wiring="A" data-std="std" data-keyboard="true">
                                        <th scope="row">0578001A+840+30<img src=""></th>
                                        <td>ub 110°</td>
                                        <td>0.4W</td>
                                        <td>20lm</td>
                                        <td class="hidden--xxs">4000K</td>
                                        <td class="hidden--xxs">80</td>
                                        <td class="hidden--xxs">ON/OFF</td>
                                        <td class="hidden--xxs">120mm</td>
                                        <td class="hidden--xxs">74mm</td>
                                        <td class="hidden--xxs">110mm</td>
                                        <td class="hidden--xxs">AC220V</td>
                                    </tr>
                                    <tr class="cursor-pointer product-modal-tr tr-ver-10499" data-id="113171" data-lucecol="+30" data-tempcol="3000K" data-wiring="C" data-std="or" style="display:none" data-keyboard="true">
                                        <th scope="row">0578003C+830+30</th>
                                        <td>ub 110°</td>
                                        <td>0.4W</td>
                                        <td>10lm</td>
                                        <td class="hidden--xxs">3000K</td>
                                        <td class="hidden--xxs">80</td>
                                        <td class="hidden--xxs">SC</td>
                                        <td class="hidden--xxs">120mm</td>
                                        <td class="hidden--xxs">74mm</td>
                                        <td class="hidden--xxs">110mm</td>
                                        <td class="hidden--xxs">AC220V</td>
                                    </tr>
                                    <tr class="cursor-pointer product-modal-tr tr-ver-10499" data-id="113172" data-lucecol="+30" data-tempcol="4000K" data-wiring="C" data-std="std" data-keyboard="true">
                                        <th scope="row">0578003C+840+30<img src=""></th>
                                        <td>ub 110°</td>
                                        <td>0.4W</td>
                                        <td>10lm</td>
                                        <td class="hidden--xxs">4000K</td>
                                        <td class="hidden--xxs">80</td>
                                        <td class="hidden--xxs">SC</td>
                                        <td class="hidden--xxs">120mm</td>
                                        <td class="hidden--xxs">74mm</td>
                                        <td class="hidden--xxs">110mm</td>
                                        <td class="hidden--xxs">AC220V</td>
                                    </tr>
                                </tbody>
                            </table>
        </div>
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
<script>
import WOW from 'wow.js'
export default {
    data(){
        return {
            img: require('../assets/img/1920x1080/01.jpg')
        }
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
    },
    mounted(){
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

        console.log(this.$route.query.product_id);

        //跳转到页面顶部
        scrollTo(0,0);
    }
}
</script>
