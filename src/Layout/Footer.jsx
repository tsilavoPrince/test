import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <div className="content-blocks">
                <section className="newsletter-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <h2 className="h2 white anim fade up">Newsletter</h2>
                                <p className="white title anim fade up delay1">
                                    Suivez toutes nos actualités en vous abonnant à la newsletter
                                </p>
                                <div className="anim fade up delay2">
                                    <div role="form" className="wpcf7" lang="en-US" dir="ltr">
                                        <div className="screen-reader-response">
                                            <p role="status" aria-live="polite" aria-atomic="true"></p>
                                            <ul></ul>
                                        </div>
                                        <form

                                            method="post"
                                            className="wpcf7-form init"
                                            noValidate
                                            data-status="init"
                                        >
                                            <div style={{ display: "none" }}>
                                                <input type="hidden" name="_wpcf7" value="48" />
                                                <input type="hidden" name="_wpcf7_version" value="5.5.5" />
                                                <input type="hidden" name="_wpcf7_locale" value="en_US" />
                                                <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f48-p7-o1" />
                                                <input type="hidden" name="_wpcf7_container_post" value="7" />
                                                <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                                            </div>
                                            <div className="form-newsletter">
                                                <div className="email-box">
                                                    <span className="wpcf7-form-control-wrap your-email">
                                                        <input
                                                            type="email"
                                                            name="your-email"
                                                            placeholder="Email"
                                                            size="40"
                                                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                                            aria-required="true"
                                                            aria-invalid="false"
                                                        />
                                                    </span>
                                                </div>
                                                <div className="submit-button">
                                                    <input

                                                        value="Submit"
                                                        className="wpcf7-form-control has-spinner wpcf7-submit"
                                                    />
                                                </div>
                                            </div>
                                            <div className="wpcf7-response-output" aria-hidden="true"></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                    </div>
                </section>
            </div>
            <footer id="colophon" className="site-footer">
                {/* Background Image */}
                <div
                    className="image-block"
                    style={{
                        backgroundImage: "url('https://www.ewigo.com/wp-content/uploads/2022/07/home-header-bg-1.jpg')",
                    }}
                ></div>

                {/* Footer Information */}
                <div className="site-info">
                    <div className="container">
                        <div className="row">

                            {/* À propos Section */}
                            <div className="col-lg-3 col-md-6">
                                <div className="nagivation-1 content-block">
                                    <div className="nav">
                                        <div className="heading">
                                            <h3 className="h3 white">À propos</h3>
                                        </div>
                                        <ul id="footer-menu-1" className="menu">
                                            <li>
                                                <Link to="/Franchise">
                                                    <a
                                                    >Qui sommes-nous?</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Franchise">
                                                    <a
                                                    >Le réseau Ewigo</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Franchise">
                                                    <a
                                                    >Devenir Franchisé</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Support">
                                                    <a >FAQ</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Actualite" >
                                                    <a >Actualités</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Mention">
                                                    <a>Mentions légales</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/ConditionGenerale">
                                                    <a >Conditions générales de vente</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/ConditionUtilisation">
                                                    <a >Conditions générales d’utilisation</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Donnee">
                                                    <a >Données personnelles</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Nos services Section */}
                            <div className="col-lg-3 col-md-6">
                                <div className="nagivation-2 content-block">
                                    <div className="nav">
                                        <div className="heading">
                                            <h3 className="h3 white">Nos services</h3>
                                        </div>
                                        <ul id="footer-menu-2" className="menu">
                                            <li><Link to="/Vendre">
                                                <a>Vendre</a>
                                            </Link>
                                            </li>
                                            <li><Link to="/Acheter">
                                                <a>Achat</a>
                                            </Link>
                                            </li>
                                            <li><Link to="/Services">
                                                <a>Services</a>
                                            </Link>
                                            </li>
                                            <li>
                                                <Link to="/Services">
                                                    <a
                                                    >
                                                        Paiement securiser
                                                    </a>
                                                </Link>
                                            </li>
                                            <li><Link to="/Services">
                                                <a >
                                                    Financement</a>
                                            </Link>
                                            </li>
                                            <li>
                                                <Link to="/Services">
                                                    <a >Livraison</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/Services">
                                                    <a >Carte Grise</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Section */}
                            <div className="col-lg-3 col-md-6">
                                <div className="contact-details content-block">
                                    <div className="detail">
                                        <div className="heading">
                                            <h3 className="h3 white">Contact</h3>
                                        </div>
                                        <p className="title white">
                                            Siège social :<br /><br />
                                            3 rue Marius Hué,<br />
                                            91370 Verrières-le-Buisson<br />
                                            <a href="mailto:contact@ewigo.com">contact@ewigo.com</a>
                                        </p>
                                        <img
                                            src="https://www.ewigo.com/wp-content/themes/ewigo/assets/images/vu-a-la-television.png"
                                            alt="Vu à la télévision"
                                            className="view-on-tv"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Section */}
                            <div className="col-lg-3 col-md-6">
                                <div className="contact-social content-block">
                                    <img
                                        src="https://www.ewigo.com/wp-content/themes/ewigo/assets/images/google-avis-clients.png"
                                        alt="Avis Google"
                                        className="google-reviews"
                                    />
                                    <p>Suivez-nous sur</p>
                                    <div className="footer-networks">
                                        <a href="https://www.facebook.com/AgenceAutomobile/" target="_blank" rel="noopener noreferrer">
                                            <img
                                                src="https://www.ewigo.com/wp-content/themes/ewigo/assets/images/facebook.png"
                                                alt="Facebook"
                                            />
                                        </a>
                                        <a href="https://www.instagram.com/ewigofrance/" target="_blank" rel="noopener noreferrer">
                                            <img
                                                src="https://www.ewigo.com/wp-content/themes/ewigo/assets/images/instagram.png"
                                                alt="Instagram"
                                            />
                                        </a>
                                        <a href="https://www.tiktok.com/@ewigo_france" target="_blank" rel="noopener noreferrer">
                                            <img
                                                src="https://www.ewigo.com/wp-content/themes/ewigo/assets/images/tiktok.png"
                                                alt="TikTok"
                                            />
                                        </a>
                                        <a href="https://www.youtube.com/channel/UCfQScblYW971yS5qK_OE0CA" target="_blank" rel="noopener noreferrer">
                                            <img
                                                src="https://www.ewigo.com/wp-content/themes/ewigo/assets/images/youtube.png"
                                                alt="YouTube"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="copyright">
                    © Ewigo 2022
                </div>
            </footer>
        </div>
    )
}

export default Footer