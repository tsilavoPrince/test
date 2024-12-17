import React from "react";

// import "./App.css";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";




const Vendre = () => {

    const questions = [
        { text: "Puis-je utiliser mon véhicule pendant la commercialisation ?", link: "https://www.ewigo.com/faqs/" },
        { text: "Comment se passe le paiement avec Ewigo ?", link: "https://www.ewigo.com/faqs/" },
        { text: "Mon véhicule est hors charte. Qu'est-ce que cela signifie ?", link: "https://www.ewigo.com/faqs/" },
        // Ajoutez d'autres questions ici
      ];


      const testimonials = [
        {
          name: "Thomas Schneider",
          message: "Je recommande fortement l'agence, des gens très impliqués dans leur travail et très professionnels. Au top.",
          location: "EWIGO Hoenheim - Strasbourg Nord",
          time: "Il y a 3 mois",
          link: "https://www.google.com/maps/place/...",
        },
        {
          name: "Charithakis Mohamed",
          message: "Achat de mon véhicule avec un personnel très professionnel, toujours à l'écoute...",
          location: "EWIGO Quimper",
          time: "Il y a un mois",
          link: "https://www.google.com/maps/place/...",
        },
        // Ajoutez d'autres témoignages ici
      ];

    const logos = [
        "https://www.ewigo.com/wp-content/uploads/2021/10/news-1.png",
        "https://www.ewigo.com/wp-content/uploads/2021/10/news-2.png",
        "https://www.ewigo.com/wp-content/uploads/2021/10/news-3.png",
        "https://www.ewigo.com/wp-content/uploads/2021/10/news-4.png",
        "https://www.ewigo.com/wp-content/uploads/2021/10/news-5.png",
    ]

    // const history = useHistory();

    // const navigateToAbout = () => {
    //     history.push("/about"); // Navigue vers la page About
    // }

    const backgroundImageStyle = {
        backgroundImage: "url('https://www.ewigo.com/wp-content/uploads/2021/09/Mask-Group-47-e1631285247735.png')",
    }

    return (
        <div className="page-template page-template-theme-template page-template-theme-template-php page page-id-326 wp-custom-logo">
            <header id="masthead" className="site-header">
                <div className="container">
                    {/* Site Branding */}
                    <div className="site-branding">
                        <a href="https://www.ewigo.com/" className="custom-logo-link" rel="home">
                            <img
                                width="173"
                                height="38"
                                src="https://www.ewigo.com/wp-content/uploads/2021/08/logo.png"
                                className="custom-logo"
                                alt="EWIGO"
                                decoding="async"
                            />
                        </a>
                    </div>

                    {/* Separator Line */}
                    <div className="line"></div>

                    {/* Navigation Menu */}
                    <div className="navigation-block">
                        <nav id="site-navigation" className="main-navigation">
                            <button className="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                                Primary Menu
                            </button>
                            <ul id="primary-menu" className="menu">
                                <li className="menu-item">
                                    <a href="https://www.ewigo.com/vendre/" aria-current="page">
                                        Vendre
                                    </a>
                                </li>
                                <li className="menu-item">
                                    {/* <a onClick={navigateToAbout}>Acheter</a> */}
                                    <Link to="/about">
                                        <a>Go to About</a>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <a href="https://www.ewigo.com/nos-services/">Services</a>
                                </li>
                                <li className="menu-item">
                                    <a href="http://ewigo-franchise.com/rejoindre/" target="_blank" rel="noopener noreferrer">
                                        Franchise
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="https://www.ewigo.com/points-de-vente/">Points de vente</a>
                                </li>
                                <li className="menu-item">
                                    <a href="https://www.ewigo.com/actualites/">Actualités</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Menu Icon */}
                    <div className="menu-icon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </header>

            <div className="content-blocks">
    <section className="page-header-section full-view-header vendre-header no-margin">
        {/* Image Block */}
        <div className="image-block" style={backgroundImageStyle}></div>

        {/* Container */}
        <div className="container">
            {/* Header Content */}
            <div className="content">
                <h1 className="h1 white anim fade right">Choisissez la meilleure solution</h1>
                <h4 className="h4 white anim fade right delay1">et estimez votre véhicule gratuitement</h4>
            </div>

            {/* Search Block */}
            <div className="search-block anim fade up delay2">
                <form
                    action="https://wvw.ewigo.com/landing-page-reprise-depot"
                    method="get"
                    className="form-block"
                >
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Numéro d’immatriculation"
                            name="registration"
                            aria-label="Numéro d’immatriculation"
                        />
                    </div>
                    <div className="submit-button">
                        <input type="submit" value="Estimer" />
                    </div>
                </form>
            </div>
        </div>

        {/* Scroll Down Button */}
        <a
            href="#expertise-at-your-service-section"
            className="down-btn scroll-to"
            aria-label="Scroll to Expertise Section"
        ></a>
    </section>

    <section className="expertise-personalized vendre-hack" id="expertise-personalized">
        <div className="container">
            <div className="row">
                <h2 className="h2 anim fade left">Une expertise personnalisée</h2>
            </div>
            <div className="row">
                <div className="hourglass">
                    <img
                        src="https://www.ewigo.com/wp-content/uploads/2022/10/iStock-485490069-removebg-preview-1-trimmy.png"
                        alt="Hourglass"
                    />
                </div>

                {/* Left Column */}
                <div className="col-lg-6 left-row">
                    <div className="image-block anim flip">
                        <img
                            src="https://www.ewigo.com/wp-content/uploads/2022/02/icone-temps.svg"
                            alt="Icône temps"
                        />
                    </div>
                    <h3 className="h3 anim fade left">Besoin d’une vente rapide ?</h3>
                    <ul className="anim fade left">
                        <li>Rachat immédiat de votre véhicule</li>
                        <li>Versement des fonds sous 48 heures</li>
                        <li>Paiement sécurisé</li>
                        <li>Aucun frais de remise en état du véhicule</li>
                        <li>Reprise de la responsabilité juridique de votre véhicule</li>
                    </ul>
                </div>

                {/* Right Column */}
                <div className="col-lg-6 right-row">
                    <div className="image-block anim fade left">
                        <img
                            src="https://www.ewigo.com/wp-content/uploads/2022/02/icone-argent.svg"
                            alt="Icône argent"
                        />
                    </div>
                    <h3 className="h3 anim fade left">Sensible à un meilleur prix ?</h3>
                    <ul className="anim fade right">
                        <li>Pas d’urgence de vente (vente sous 20 jours en moyenne)</li>
                        <li>20% de gain sur le prix de vente de votre véhicule</li>
                        <li>Commercialisation de votre véhicule</li>
                        <li>Véhicule garanti minimum 6 mois</li>
                        <li>Visibilité maximale de votre véhicule (reportage photo HD)</li>
                        <li>Gestion des démarches administratives en toute sécurité</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section className="video-with-content-section vendre-hack">
        <div className="container">
            <div className="row">
                {/* Mobile Button */}
                <div className="col-lg-6 display-mobile">
                    <a
                        href="https://wvw.ewigo.com/reseau-landing-page"
                        className="btn primary-btn anim fade left"
                    >
                        Vendre mon véhicule
                    </a>
                </div>

                {/* Video Section */}
                <div className="col-lg-6">
                    <div className="video-block anim fade right">
                        <iframe
                            width="1280"
                            height="370"
                            src="https://www.youtube.com/embed/X0N1ZO7L06M"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* Content Section */}
                <div className="col-lg-6">
                    <p className="anim fade left">
                        <b>Xavier Demangeat, 1er franchisé et Directeur Général d’Ewigo</b>
                        <br />
                        <br />
                        Au travers de ce témoignage, découvrez comment les ambassadeurs du réseau Ewigo ont à
                        cœur de simplifier la vie de plus de 80.000 clients dans leurs projets auto. Tout ceci
                        pour vous permettre de prendre enfin du plaisir dans la vente de votre véhicule en
                        toute sécurité !
                    </p>
                    <a
                        href="https://wvw.ewigo.com/reseau-landing-page"
                        className="btn primary-btn anim fade left display-desktop"
                    >
                        Vendre mon véhicule
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section
        className="seperator-section"
        style={backgroundImageStyle}
    >
        <div className="container">
            <h3 className="h3 white anim fade up">Les 5 étapes de la vente</h3>
        </div>
    </section>

    <section className="stages-of-the-sale-section vendre-hack">
        <div className="container">
            <div className="list-block version-desktop">
                {[
                    {
                        step: 1,
                        title: 'Vérification',
                        description:
                            'Un conseiller réalise au sein du point de vente différents points de contrôle nous permettant de nous assurer que le véhicule correspond bien à notre charte de qualité. L’objectif : pouvoir s’assurer de présenter des véhicules qualitatifs avec un historique d’entretien limpide.',
                        imgSrc: 'https://www.ewigo.com/wp-content/uploads/2022/10/vendre-vérification.png',
                    },
                    {
                        step: 2,
                        title: 'Estimation',
                        description:
                            'Une fois le contrôle du véhicule effectué, nous déterminons ensemble le prix de vente professionnel de celui-ci. Le but est de vous faire bénéficier du meilleur prix de marché. C’est vous qui décidez ! Nous sommes là pour vous apporter nos meilleurs conseils.',
                        imgSrc: 'https://www.ewigo.com/wp-content/uploads/2022/10/vendre-estimation.png',
                    },
                    {
                        step: 3,
                        title: 'Commercialisation',
                        description:
                            'Nous signons ensemble un mandat semi-exclusif d’une durée de deux mois nous permettant de commercialiser dans les meilleures conditions votre véhicule. Ceci nous permettra de donner une grande visibilité à votre annonce via l’ensemble de nos partenaires de diffusion. Vous restez propriétaire de votre véhicule et pouvez continuer de l’utiliser durant sa commercialisation.',
                        imgSrc: 'https://www.ewigo.com/wp-content/uploads/2022/10/vendre-commercialisation-1.png',
                    },
                    {
                        step: 4,
                        title: 'Promotion',
                        description:
                            'Votre interlocuteur privilégié, accompagné des ambassadeurs du réseau, met tout en œuvre pour promouvoir votre véhicule auprès de notre base d’acheteurs nationale. Vous serez tenu informé de tout ! Chaque semaine, votre conseiller fera un point d’étape sur l’avancement de votre projet de vente. Dès qu’un acheteur sérieux est identifié, la présentation de votre véhicule sera organisée par nos soins directement en point de vente.',
                        imgSrc: 'https://www.ewigo.com/wp-content/uploads/2022/10/vendre-promotion.png',
                    },
                    {
                        step: 5,
                        title: 'Sécurisation',
                        description:
                            'La réservation du véhicule effectuée, nous nous occupons de la sécurisation de la transaction et de l’ensemble des démarches administratives inhérentes à la vente. Les flux financiers seront sécurisés par le biais d’un compte séquestre, comme chez un notaire ! Le transfert de propriété sera déclaré en préfecture afin de clôturer l’opération.',
                        imgSrc: 'https://www.ewigo.com/wp-content/uploads/2022/10/vendre-sécurisation.png',
                    },
                ].map(({ step, title, description, imgSrc }) => (
                    <div className="list" key={step}>
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <div className={`content-block anim fade ${step % 2 === 0 ? 'left' : 'right'}`}>
                                    <div className="count">{step}.</div>
                                    <div className="value">
                                        <h2 className="h2">{title}</h2>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="image-block anim fade up">
                                    <img src={imgSrc} alt={`Étape ${step}: ${title}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>


               
    <section className="questionaries-section">
      <div className="questionaries">
        <div className="content-block">
          <h2 className="h3 anim fade up">Questions fréquentes</h2>
          <div className="list-block row" style={{ backgroundImage: 'url(https://www.ewigo.com/wp-content/uploads/2021/08/maxim-ilyahov-0aRycsfH57A-unsplash.png)' }}>
            {questions.map((question, index) => (
              <div className="list col-md-4" key={index}>
                <div className="content">
                  <p className="anim fade up">
                    <a href={question.link} target="_blank" rel="noopener noreferrer">
                      {question.text}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="testimonial-section">
      <div className="content-block">
        <h2 className="h3 white">Ils nous ont fait confiance</h2>
        <div className="testimonial-block">
          {testimonials.map((testimonial, index) => (
            <div className="slide" key={index}>
              <div className="testimonial">
                <div className="content">
                  <div className="author">
                    <div className="headshot" style={{ backgroundImage: 'url()' }}></div>
                    <p className="title bold">{testimonial.name}</p>
                    <div className="rating"></div>
                  </div>
                  <p className="message">{testimonial.message}</p>
                  <p className="designation">{testimonial.location}</p>
                  <p className="time">{testimonial.time}</p>
                  <p className="gmb">
                    <a href={testimonial.link} target="_blank" rel="noopener noreferrer">
                      Voir tous les avis
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>

    
    <section className="find-us-near-you-section">
        <div
            className="image-block"
            style={{
                backgroundImage: 'url("https://www.ewigo.com/wp-content/uploads/2021/10/Capture-decran-2021-04-19-a-13.36.08.png")',
            }}
        ></div>

        <div className="row">
            {/* Left Column */}
            <div className="col-lg-6">
                <h2 className="h2 white anim fade right">
                    Trouvez le point de vente le plus proche de chez vous
                </h2>

                <div className="search-block anim fade right">
                    {/* Location Button */}
                    <div className="button">
                        <a
                            href="https://www.ewigo.com/points-de-vente/"
                            className="btn primary-btn"
                        >
                            Activer ma localisation
                        </a>
                    </div>
                    <p className="white">ou</p>

                    {/* Search Form */}
                    <form
                        action="https://www.ewigo.com/points-de-vente/"
                        method="get"
                        className="form-block"
                    >
                        <div className="input-box">
                            <input
                                type="text"
                                name="address"
                                placeholder="Code postal de la ville"
                            />
                        </div>
                        <div className="submit-button">
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
                {/* Google Maps Embed */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5946932.665627275!2d-4.785662675000015!3d43.2980184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd56490bacc947d1%3A0x9a04360731912e01!2sEWIGO%20Pau%20-%20Achat%2C%20Vente%2C%20Interm%C3%A9diaire%20Automobile.!5e0!3m2!1sen!2s!4v1631291154147!5m2!1sen!2s"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps EWIGO"
                ></iframe>

                {/* Alternative Map Block */}
                <div
                    className="map-block"
                    style={{
                        height: "450px",
                        borderRadius: "40px",
                        overflow: "hidden",
                    }}
                >
                    <div
                        id="map"
                        style={{
                            width: "700px",
                            maxWidth: "100%",
                            height: "100%",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    </section>


    <section className="logos-block-section">
        <div className="container">
            {/* Title */}
            <h2 className="h2 center anim fade up">Les médias parlent de nous</h2>

            {/* Images */}
            <div className="images">
                {logos.map((logo, index) => (
                    <div key={index} className="image-block anim fade up">
                        <img src={logo} alt={`Media logo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    </section>


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
                              action="https://www.ewigo.com/#wpcf7-f48-p7-o1"
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
                                    type="submit"
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
                         <li><a href="https://ewigo-franchise.com/le-metier/">Qui sommes-nous?</a></li>
                         <li><a href="https://ewigo-franchise.com/nos-implantations/">Le réseau Ewigo</a></li>
                         <li><a href="https://ewigo-franchise.com/pourquoi-nous-rejoindre/">Devenir Franchisé</a></li>
                         <li><a href="https://www.ewigo.com/faqs/">FAQ</a></li>
                         <li><a href="https://www.ewigo.com/actualites/">Actualités</a></li>
                         <li><a href="https://www.ewigo.com/mentions-legales/">Mentions légales</a></li>
                         <li><a href="https://www.ewigo.com/conditions-generales-de-vente/">Conditions générales de vente</a></li>
                         <li><a href="https://www.ewigo.com/conditions-generales-dutilisation/">Conditions générales d’utilisation</a></li>
                         <li><a href="https://www.ewigo.com/donnees-personnelles/">Données personnelles</a></li>
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
                         <li><a href="https://www.ewigo.com/vendre/">Vente</a></li>
                         <li><a href="https://wvw.ewigo.com/achat">Achat</a></li>
                         <li><a href="https://www.ewigo.com/nos-services/">Garantie</a></li>
                         <li><a href="https://www.ewigo.com/nos-services/">Paiement Sécurisé</a></li>
                         <li><a href="https://www.ewigo.com/nos-services/">Financement</a></li>
                         <li><a href="https://www.ewigo.com/nos-services/">Livraison</a></li>
                         <li><a href="https://www.ewigo.com/nos-services/">Carte Grise</a></li>
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
    );
};

export default Vendre;
