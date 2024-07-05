//Defining Header 
class SpecialHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        <!-- Header Start -->
        <div class="container-fluid bg-dark px-0">
            <div class="row gx-0">
                <div class="col-lg-0">
                    <div class="row gx-0" style="background-color: #26f3fa;" d-none d-lg-flex padd">
                        <div class="col-lg-7 px-9 text-start">
                            <div class="h-100 d-inline-flex align-items-center ">
                                <a class="fas fa-map-marker-alt text-light me-2" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4287.710473565623!2d31.766258707576267!3d-25.35387091274441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee7dd9c65836b45%3A0xfe1f2c0339c83b5f!2sKruger%20Shiringa%20Holiday%20Home!5e0!3m2!1sen!2sza!4v1704732447787!5m2!1sen!2sza"></a>
                                <p class="mb-0">1387, Olifant Drive </p>
                            </div>
                            <div class="h-100 d-inline-flex align-items-center">
                                <a class="fa fa-envelope text-light me-2" href="mailto:info@example.com"></a>
                                <p class="mb-0" href="mailto:info@example.com">info@example.com    </p>
                            </div>
                            <div class="h-100 d-inline-flex align-items-center ">
                                <a class="fa fa-phone-alt text-light me-2"  href="tel:(+27)796416809"></a>
                                <a class="mb-0 text-dark"  href="tel:(+27)796416809" >+27 79 641 6809 </a>
                            </div>
                        </div>
                        <div class="col-lg-5 px-5 text-end ">
                            <div class="d-inline-flex align-items-center py-2">
                                <a class="me-3 btn-outline-light btn-social" href="https://wa.me/+27796416809"><i class="fab fa-whatsapp"></i></a>
                                <a class="me-3 btn-outline-light btn-social" href="https://www.facebook.com/profile.php?id=61555469121540"><i class="fab fa-facebook-f"></i></a>
                                <a class="me-3 btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                                <a class="me-3 btn-outline-light btn-social" href="https://www.instagram.com/invites/contact/?i=shhyijwrdrj6&utm_content=tdp6m2i"><i class="fab fa-instagram"></i></a>
                                <a class="me-3 btn-outline-light " href=""><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-0 bg-white d-none d-lg-block">
                        <a href="index.html" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <h2 class="m-1 text-dark text-uppercase">Shiringa Holiday Home</h2>
                        </a>
                    </div>

                    <nav class="navbar navbar-expand-lg bg-white navbar-dark p-3 p-lg-0">
                       <a href="index.html" class="navbar-brand d-block d-lg-none">
                            <h4 class="m-0 text-primary text-uppercase">Shiringa Holiday Home</h4>
                        </a>
                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    
                        <div class="collapse navbar-collapse justify-content-between " id="navbarCollapse">
                            <div class="navbar-nav mr-auto py-0" style="margin-left: 32%;">
                                <a href="index.html" class="nav-item nav-link ${this.isActive('index.html')}">Home</a>
                                <a href="room.html" class="nav-item nav-link ${this.isActive('room.html')}">Rooms</a>
                                <a href="booking.html" class="nav-item nav-link ${this.isActive('booking.html')}">Booking</a>
                                <a href="contact.html" class="nav-item nav-link ${this.isActive('contact.html')}">Contact</a>
                                <a href="service.html" class="nav-item nav-link ${this.isActive('service.html')}">Services</a>
                                <a href="about.html" class="nav-item nav-link ${this.isActive('about.html')}">About</a>
                            </div>
                            
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <!-- Header End -->
        `

    }
    isActive(page) {
        // Check if the current URL ends with the specified page
        return window.location.href.endsWith(page) ? 'active' : '';
      }
    
}

//Defining the footer
class SpecialFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        <!-- Footer Start -->
        <div class="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div class="container pb-5">
                <div class="row g-5">
                    
                    <div class="col-md-6 col-lg-5">
                        <h6 class="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>1387, Olifant Drive, Marloth Park 1340, Mpumalanga</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+27 79 641 6809</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href="https://wa.me/+27796416809"><i class="fab fa-whatsapp"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href="https://www.facebook.com/profile.php?id=61555469121540"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href="https://www.instagram.com/invites/contact/?i=shhyijwrdrj6&utm_content=tdp6m2i"><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12">
                        <div class="row gy-5 g-4">
                            <div class="col-md-6">
                                <h6 class="section-title text-start text-primary text-uppercase mb-4">Company</h6>
                                <a class="btn btn-link" href="">About Us</a>
                                <a class="btn btn-link" href="">Contact Us</a>
                                <a class="btn btn-link" href="">Privacy Policy</a>
                                <a class="btn btn-link" href="">Terms & Condition</a>
                                <a class="btn btn-link" href="">Support</a>
                            </div>
                            <div class="col-md-6">
                                <h6 class="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                                <a class="btn btn-link" href="">Food & Restaurant</a>
                                <a class="btn btn-link" href="">Spa & Fitness</a>
                                <a class="btn btn-link" href="">Sports & Gaming</a>
                                <a class="btn btn-link" href="">Event & Party</a>
                                <a class="btn btn-link" href="">GYM & Yoga</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="index.html">Shiringa Holiday Home</a>, All Right Reserved. 
							
							<!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
							Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a> <a>&</a> <a class="border-bottom" href="https://github.com/attainanimrod"> AttainDev Systems</a>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->
            `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)

