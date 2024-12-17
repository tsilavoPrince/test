import React from 'react';
// import animationData from "./path-to-animation.json";
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="page-template page-template-theme-template page-template-theme-template-php page page-id-261 wp-custom-logo">
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KFGJX7M"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 0 0"
        width="0"
        height="0"
        focusable="false"
        role="none"
        style={{ visibility: "hidden", position: "absolute", left: "-9999px", overflow: "hidden" }}
      >
        <defs>
          <filter id="wp-duotone-dark-grayscale">
            <feColorMatrix
              colorInterpolationFilters="sRGB"
              type="matrix"
              values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "
            />
            <feComponentTransfer colorInterpolationFilters="sRGB">
              <feFuncR type="table" tableValues="0 0.49803921568627" />
              <feFuncG type="table" tableValues="0 0.49803921568627" />
              <feFuncB type="table" tableValues="0 0.49803921568627" />
              <feFuncA type="table" tableValues="1 1" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>
      {/* Répétez les balises SVG pour les autres définitions si nécessaire */}

      <div id="page" className="site">
        <a className="skip-link screen-reader-text" href="#primary">Skip to content</a>


        <div className="content-blocks" >

          <section className="page-header-section half-view-header services-header">
            <div
              className="image-block"
              style={{
                backgroundImage: "url('https://www.ewigo.com/wp-content/uploads/2022/01/services-home-scaled.jpg')",
              }}
            ></div>
            <div className="container">
              <h1 className="h1 white anim fade up">Nos services</h1>
              <div className="links-list anim fade up delay1">
                <a className="btn primary-btn" href="#packs">
                  PACKS
                </a>
                <a className="btn primary-btn" href="#financement">
                  FINANCEMENT
                </a>
                <a className="btn primary-btn" href="#fiable-ou-rembourse">
                  FIABLE OU REMBOURSÉ
                </a>
                <a className="btn primary-btn" href="#garantie">
                  GARANTIE
                </a>
                <a className="btn primary-btn" href="#livraison">
                  LIVRAISON
                </a>
                <a className="btn primary-btn" href="#paiement-securise">
                  PAIEMENT SÉCURISÉ
                </a>
                <a className="btn primary-btn" href="#carte-grise">
                  CARTE GRISE
                </a>
              </div>
            </div>
          </section>


          <section className="video-with-content-section ">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="video-block anim fade right">
                    <iframe width="1280" height="370" src="https://www.youtube.com/embed/80rmk8JV1gw" title="Lecteur vidéo YouTube" frameBorder="0 " allow="accéléromètre ; lecture automatique ; écriture dans le presse-papiers ; gyroscope ; image dans l'image" allowFullScreen />  </div>
                </div>
                <div className="col-lg-6">
                  <p className="anim fade left">Animés par nos valeurs  : Confiance, Sécurité et Satisfaction nous nous dépassons chaque jour pour vous permettre d’obtenir le meilleur. <br /><br />  Vous êtes unique, votre projet auto également.  C’est pourquoi, les ambassadeurs Ewigo construisent à vos côtés une offre sur mesure, afin de vous apporter une expérience client d’exception. <br /><br />  En effet, au sein de notre réseau, vous bénéficiez de véhicules rigoureusement sélectionnés et d’une écoute attentive pour mener à bien votre projet auto.  Grâce à nos nombreux services associés nous saurons vous offrir bien plus qu’une voiture et vous apporter une pleine satisfaction pour parcourir les routes en toute sérénité.</p>                                                            </div>
              </div>
            </div>
          </section>

          <section className="the-packs-section" id="packs">
            <div className="section-header">
              <h2 className="h2 anim slide-right">Les packs</h2>
            </div>
            <hr className="light" />
            <div className="container">
              <p className="anim slide-right">
                Lors de l’achat de votre véhicule, vous devez choisir un pack
              </p>
              <div className="list-block row">
                {/* Pack Clé en Main */}
                <div className="list col-lg-4">
                  <div className="image-block anim flip">
                    <lottie-player
                      src="https://www.ewigo.com/wp-content/themes/ewigo/assets/animations/start.json"
                      background="https://www.ewigo.com/nos-services/transparent"
                      speed="1"
                      style={{ width: "100%", maxWidth: "100%" }}
                      loop
                      autoplay
                    ></lottie-player>
                  </div>
                  <h3 className="h3 primary anim slide-right">Pack clé en main</h3>
                  <p className="anim slide-right delay1">
                    <b>L essentiel vous convient ?</b>
                  </p>
                  <div className="border-orange">
                    <p>
                      Nettoyage First<br />
                      ¼ du réservoir d’essence minimum<br />
                      Gestion administrative du transfert de propriété
                    </p>
                    <p>Garantie Européenne Essentielle+ Mutuaide 6 mois offerte**</p>
                  </div>
                </div>

                {/* Pack Confort */}
                <div className="list col-lg-4">
                  <div className="image-block anim flip">
                    <img
                      src="https://www.ewigo.com/wp-content/uploads/2021/09/Group-344.png"
                      alt=""
                    />
                  </div>
                  <h3 className="h3 primary anim slide-right">Pack confort</h3>
                  <p className="anim slide-right delay1">
                    <b>Une envie de tranquillité ?</b>
                  </p>
                  <div className="border-orange">
                    <p>
                      Nettoyage Confort<br />
                      ½ du réservoir d’essence minimum<br />
                      Gestion administrative du transfert de propriété
                    </p>
                    <p>Garantie Européenne Essentielle+ Mutuaide 12 mois offerte **</p>
                  </div>
                </div>

                {/* Pack Prestige */}
                <div className="list col-lg-4">
                  <div className="image-block anim flip">
                    <lottie-player
                      src="https://www.ewigo.com/wp-content/themes/ewigo/assets/animations/cerise.json"
                      background="https://www.ewigo.com/nos-services/transparent"
                      speed="1"
                      style={{ width: "100%", maxWidth: "100%" }}
                      loop
                      autoplay
                    ></lottie-player>
                  </div>
                  <h3 className="h3 primary anim slide-right">Pack prestige</h3>
                  <p className="anim slide-right delay1">
                    <b>Plutôt haut de gamme ?</b>
                  </p>
                  <div className="border-orange">
                    <p>
                      Nettoyage Prestige<br />
                      Plein du réservoir d’essence<br />
                      Gestion administrative du transfert de propriété
                    </p>
                    <p>
                      Garantie Européenne Optimale/Idéale Mutuaide 12 mois offerte**<br />
                      La surprise du chef
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <p className="sub">
                Tarif pour les véhicules deux roues motrices dont la valeur neuve hors
                options est inférieure à 60.000 € TTC.<br />
                Tarification sur devis pour les véhicules quatre roues motrices et/ou la
                valeur neuve hors options est supérieure à 50 000 € TTC. Voir conditions
                en agence.<br />
                ** Selon l’article L217-3 du Code de la consommation, il n’est pas
                possible de revendre le produit d’assurance MyEcoGarantie Pro au client
                bénéficiaire. L’assurance doit être systématiquement offerte au client
                bénéficiaire.
              </p>
            </div>
          </section>


          <section className="content-with-left-image-section full-width nos-services-hack">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="image-block anim fade right"><img src="https://www.ewigo.com/wp-content/uploads/2021/09/Mask-Group-158.png" alt="" /></div>                            </div>
                <div className="col-lg-6">
                  <h2 className="h2 anim fade left">Un véhicule comme neuf !</h2>                                <p className="anim fade left"><p>Plus qu&rsquo;un service de nettoyage professionnel, redécouvrez à travers notre service le plaisir de disposer d&rsquo;un véhicule propre et confortable. Parce qu&rsquo;occasion peut rimer avec perfection, nous vous proposons des solutions de nettoyage professionnelles, afin de profiter d&rsquo;un véhicule comme neuf !</p>
                    <p>Du simple nettoyage à la préparation esthétique minutieuse de votre véhicule, retrouvez plusieurs niveaux de services pour la mise en beauté de celui-ci. A travers nos différents packs et notamment du confort au prestige, bénéficiez de nettoyages extérieurs et intérieurs, effectués à la main, pour une finition optimale.</p>
                    <p>Parce qu&rsquo;au-delà de la dimension esthétique, un lavage permet de protéger votre véhicule face aux éléments extérieurs et ainsi de rouler en toute sécurité, nous considérons qu&rsquo;une bonne préparation de votre voiture reste primordiale.</p>
                    <p>Alors, avec quel pack souhaitez-vous prendre la route ?</p>
                  </p>                            </div>
              </div>
            </div>
          </section>

          <section className="content-with-right-image-section full-width nos-services-hack">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="h2 anim fade right">Des démarches administratives facilitées</h2>                                <p className="anim fade right"><p>La transaction d&rsquo;un véhicule entre particuliers engendre des démarches administratives fastidieuses. Pour que votre projet auto reste un plaisir, nous nous occupons de l&rsquo;intégralité des démarches liées à la vente ou à l&rsquo;achat de votre véhicule.</p>
                    <p>Profitez d&rsquo;un service totalement digitalisé et de documents mis à votre disposition grâce à nos outils numériques sécurisés.</p>
                    <p>Un transfert de propriété simple et rapide, c&rsquo;est désormais possible avec Ewigo !</p>
                  </p>                            </div>
                <div className="col-lg-6">
                  <div className="image-block anim fade left"><img src="https://www.ewigo.com/wp-content/uploads/2021/09/Mask-Group-159.png" alt="" /></div>                            </div>
              </div>
            </div>
          </section>

          <section className="funding-section" id="financement">
            <div
              className="image-block"
              style={{
                backgroundImage:
                  "url('https://www.ewigo.com/wp-content/uploads/2022/01/services-fond-financement-e1642808696930.jpg')",
              }}
            ></div>
            <div className="container">
              <div className="section-header">
                <img
                  src="https://www.ewigo.com/wp-content/uploads/2022/01/Icone-financement.png"
                  alt="Financement"
                />
                <div className="line"></div>
                <h2 className="h2 right anim slide-right">Le financement</h2>
              </div>

              <h2 className="h2 right anim slide-right">Le financement</h2>
              <hr className="light" />

              <div className="row">
                <div className="col-lg-7">
                  <div className="anim fade up">
                    <h3>
                      <span style={{ fontWeight: 300 }}>
                        Votre offre de prêt en quelques clics !
                      </span>
                    </h3>
                    <h4>
                      <span style={{ fontWeight: 300 }}>Comment ça marche ?</span>
                    </h4>
                    <ul>
                      <li style={{ fontWeight: 300 }}>
                        Réalisez votre demande de financement sur la fiche du véhicule de
                        votre choix et recevez jusqu’à 4 offres, de nos 4 banques
                        partenaires.
                      </li>
                      <li style={{ fontWeight: 400 }}>
                        Complétez le formulaire unique en 3 minutes
                      </li>
                      <li style={{ fontWeight: 400 }}>
                        Sélectionnez les banques de votre choix, obtenez des accords de
                        principe instantanés et choisissez l’offre qui vous convient
                      </li>
                      <li style={{ fontWeight: 400 }}>
                        Finalisez votre demande et envoyez les pièces justificatives.
                      </li>
                      <li style={{ fontWeight: 400 }}>
                        Consultez votre compte bancaire, les fonds vous seront délivrés
                        en quelques jours.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="form-section">
                    <h3 className="h3">Votre financement</h3>
                    <div className="list">
                      <ul className="checklist">
                        <li>
                          <p>Votre financement en moins de 5 minutes</p>
                        </li>
                        <li>
                          <p>Une réponse de principe instantanée</p>
                        </li>
                        <li>
                          <p>Sans engagement</p>
                        </li>
                      </ul>
                    </div>
                    <div className="form-block range-calculator">
                      <div className="form-group range-input">
                        <label>
                          <span className="main">Durée</span>
                          <span>
                            <p className="sub">60 mois</p>
                          </span>
                        </label>
                        <div className="input-block">
                          <input
                            type="range"
                            name="duration"
                            id="range1"
                            min="0"
                            max="100"
                          />
                        </div>
                      </div>
                      <div className="form-group range-input">
                        <label>
                          <span className="main">Apport</span>
                          <span>
                            <p className="sub">60 mois</p>
                          </span>
                        </label>
                        <div className="input-block">
                          <input
                            type="range"
                            name="contribution"
                            id="range2"
                            min="0"
                            max="100"
                          />
                        </div>
                      </div>
                      <div className="answer-block">
                        <p>60 mois</p>
                        <p>
                          à partir de *{" "}
                          <b>
                            <span className="primary">147.35 €</span>/mois
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="reliable-section" id="fiable-ou-rembourse">
            <div className="container reliable-wrapper">
              <div className="section-header">
                <img src="https://www.ewigo.com/wp-content/uploads/2023/02/fiable-ou-rembourse-1.png" alt="Logo fiable ou remboursé" />                            <div className="line"></div>
                <h2 className="h2 anim slide-right">Le label Fiable ou remboursé</h2>                        </div>

              <div className="reliable-criterias">
                <h3 className="h3 anim slide-right">Les critères d éligibilités</h3>
                <div className="criterias">
                  <div className="criteria">
                    <div className="criteria-image counter"></div>
                    <div className="criteria-text">
                      <p>Moins de 120 000 km moins de 10 ans</p>
                    </div>
                  </div>

                  <div className="criteria">
                    <div className="criteria-image calendar"></div>
                    <div className="criteria-text">
                      <p>Valeur d&rsquo;achat en <strong>occasion</strong> inférieure à 60 000€</p>
                    </div>
                  </div>

                  <div className="criteria">
                    <div className="criteria-image gear"></div>
                    <div className="criteria-text">
                      <p>Véhicule dont le prix d&rsquo;achat <strong>neuf</strong> est inférieur à 100 000€</p>
                    </div>
                  </div>

                  <div className="criteria">
                    <div className="criteria-image car"></div>
                    <div className="criteria-text">
                      <p>Véhicule particulier non destiné à un usage pro*</p>
                    </div>
                  </div>
                </div>

                <div className="reliable-durations">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="reliable-container">
                        <h3 className="h3 anim slide-right">Durée du label</h3>
                        <div className="durations">
                          <div className="duration">6 mois</div>                                                <div className="duration">moins de 10 000 km après achat</div>                                            </div>
                        <span className="durations-info">au premier des deux termes atteint</span>

                        <div className="not-reliable"><p>Un véhicule est réputé non fiable lorsqu&rsquo;il subit 2 pannes complètes (incluant les 3 critères suivants) :</p>
                          <ul>
                            <li>immobilisantes de plus de 72h</li>
                            <li>dont la panne nécessite plus de 8h d&rsquo;intervention <em>(base: indice barème constructeur)</em></li>
                            <li>non prise en charge par le programme de garantie</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="reliable-container solution-bloc">
                        <h3 className="h3 anim slide-right">Quelle solution si mon véhicule est non fiable ?</h3>
                        <div className="solution"><p><strong>Remboursement de l&rsquo;intégralité du véhicule</strong> hors prix de carte grise, sous réserve de restitution du véhicule à l&rsquo;état identique de celui du jour d&rsquo;achat.</p>
                        </div>                                                                                            <img src="https://www.ewigo.com/wp-content/uploads/2023/02/illlustration-voiture-avatar-2-1.png" alt="Illustration fiable ou remboursé" className="reliable-illustration" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="warranty-section" id="garantie">
            <div className="container">
              <div className="section-header">
                <img
                  src="https://www.ewigo.com/wp-content/uploads/2022/01/badge.png"
                  alt="Livraison"
                />
                <div className="line"></div>
                <h2 className="h2 anim slide-right">La garantie</h2>
              </div>

              <h2 className="h2 anim slide-right">La garantie</h2>
              <hr className="light" />

              <div className="anim slide-right">
                <p>
                  En tant que réseau N°1, c’est tout naturellement que nous nous sommes
                  rapprochés du leader en termes de garanties mécaniques, largement
                  reconnu pour son haut niveau de qualité.
                </p>
                <p>
                  Parce que nous sommes le réseau numéro 1 d’agences automobiles, nous
                  souhaitons être accompagnés par le leader en termes de garanties
                  mécaniques et largement reconnu pour son haut niveau de qualité.
                </p>
                <p>
                  Vous bénéficiez automatiquement d’une offre de garanties 6 mois
                  offertes pour tout nouveau véhicule et adaptées et personnalisées selon
                  vos besoins.
                </p>
                <p>
                  Traverser les routes l’esprit léger en France, en Europe et bien plus
                  encore, dans tous les pays inscrits sur la carte verte de votre
                  assurance, en profitant d’une garantie allant jusqu’à 60 mois,
                  incluant vétusté, assistance panne mécanique, électronique ainsi qu’un
                  véhicule de remplacement.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-7">
                  <div className="image-block">
                    <img
                      src="https://www.ewigo.com/wp-content/uploads/2023/02/tableau-garantie.png"
                      alt="Tableau de garantie"
                      className="img-fluid border"
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="image-block">
                    <img
                      src="https://www.ewigo.com/wp-content/uploads/2023/02/logo-mutuaide.png"
                      alt="Logo Mutuaide by Groupama"
                      className="logo-mutuaide"
                    />
                  </div>
                  <div className="sub_description">
                    <div className="anim slide-right">
                      <p>
                        Parce que nous sommes le réseau numéro 1 d’agences automobiles,
                        nous souhaitons être accompagnés par un partenaire spécialiste
                        largement reconnu.
                      </p>
                      <p>
                        Fort d’une expérience de plus de 40 ans, Mutuaide, filiale de
                        GROUPAMA, est un leader européen en garanties automobiles, vous
                        proposant une offre <strong>adaptée et personnalisée</strong>.
                      </p>
                      <p>
                        À votre écoute 7j/7, 24h/24, Mutuaide s’engage{" "}
                        <strong>à vous accompagner</strong> partout en Europe afin de vous
                        garantir <strong>un haut niveau de qualité</strong>*.
                      </p>
                      <p>
                        <small>
                          *Incluant vétusté, assistance panne mécanique, électronique
                          ainsi qu’un véhicule de remplacement.
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          <section className="the-delivery-section" id="livraison">
            <div className="container">
              <div className="section-header">
                <img src="https://www.ewigo.com/wp-content/uploads/2022/01/expedie.png" alt="Livraison" />                            <div className="line"></div>
                <h2 className="h2 right anim slide-right">La livraison</h2>                        </div>
              <hr className="light"></hr>
              <div className="row">
                <div className="col-lg-5">
                  <div className="image-block"><img src="https://www.ewigo.com/wp-content/uploads/2021/09/livreur-ayant-appel-telephonique-voiture_23-2147767588.png" alt="" className="img-fluid" /></div>                            </div>
                <div className="col-lg-7">
                  <p className="anim fade left"><h3>La livraison par Driiveme Pro !</h3>
                    <p>Leader sur le marché de la logistique automobile, Driiveme Pro est la solution adaptée pour la livraison de votre véhicule en toute sécurité et simplicité.</p>
                    <ul>
                      <li>Un chauffeur professionnel sera mandaté, pour effectuer la livraison de votre véhicule, où vous le désirez (domicile, travail…).</li>
                      <li>Dès lors que le chauffeur aura pris en main votre véhicule, vous pourrez consulter en temps réel sa livraison.</li>
                      <li>À la réception de votre véhicule, l’intégralité des documents relatifs à l’achat vous seront fournis par le chauffeur.<br />
                        Une vérification intégrale sera effectuée et vous pourrez ensuite signer votre contrat.</li>
                    </ul>
                  </p>                            </div>
              </div>
            </div>
          </section>


          <section className="the-packs-section" id="paiement-securise">

            <div className="section-header">
              <h2 className="h2 anim slide-right">Le paiement sécurisé</h2>                    </div>
            <hr className="light" />
            <div className="container">
              <p className="anim slide-right"><p>&nbsp;</p>
                <p>Ewigo vous offre une solution dédiée à la sécurisation des paiements lors de l&rsquo;achat ou la vente de votre véhicule. Notre partenaire CashSentinel, reconnu par la Banque de France, vous propose une alternative digitale et sécurisée aux chèques de banque.</p>
              </p>
              <div className="list-block row">
                <div className="list col-lg-4" >
                  <div className="image-block anim flip"><img src="https://www.ewigo.com/wp-content/uploads/2022/02/cashsentinel-1.png" alt="" /></div>
                  <h3 className="h3 primary anim slide-right">Suivi en temps réel</h3>                                                                                                                        <div className="border-orange"><p>Une vérification des documents du contrat et des identités est effectuées. Acheteur ou vendeur, vous bénéficiez d&rsquo;un suivi en temps réel sur l’avancement de votre transaction.</p>
                  </div>                                    </div>
                <div className="list col-lg-4" >
                  <div className="image-block anim flip"><img src="https://www.ewigo.com/wp-content/uploads/2022/02/cashsentinel-2.png" alt="" /></div>
                  <h3 className="h3 primary anim slide-right">Sécurité avant tout</h3>                                                                                                                        <div className="border-orange"><p>Les fonds sont protégés pour l&rsquo;acheteur et le vendeur sur un compte séquestre, en France, jusqu&rsquo;au complet déroulement de la transaction. Le versement est immédiat, irrévocable et sécurisé.</p>
                  </div>                                    </div>
                <div className="list col-lg-4" >
                  <div className="image-block anim flip"><img src="https://www.ewigo.com/wp-content/uploads/2022/02/cashsentinel-3.png" alt="" /></div>
                  <h3 className="h3 primary anim slide-right">Protection juridique</h3>                                                                                                                        <div className="border-orange"><p>Vous bénéficiez dès lors d&rsquo;une double protection financière et contractuelle grâce à la compagnie Allianz qui interviendra en cas de litige jusqu&rsquo;à 3 mois après la transaction.</p>
                  </div>                                    </div>
              </div>
              <br /><br />
            </div>
          </section>

          <section className="the-grey-card-section" id="carte-grise">
            <div className="container">
              <div className="section-header">
                <img src="https://www.ewigo.com/wp-content/uploads/2022/01/ICONE-CARTE-GRISE.png" alt="Livraison" />                            <div className="line"></div>
                <h2 className="h2 right anim slide-right">La carte grise</h2>                        </div>
              <div className="row">
                <div className="col-lg-7">
                  <p className="anim fade left"><h3>La carte grise par Ewigo !</h3>
                    <p>Ewigo est accrédité par l’organisme de l’ANTS afin de pouvoir éditer et délivrer les certificats d’immatriculation pour votre véhicule.</p>
                    <ul>
                      <li>L’établissement de la carte grise est supervisé par votre point de vente Ewigo, vous assurant un accompagnement intégral de votre projet auto.</li>
                      <li>Une fois le contrat d’achat / vente finalisé, Ewigo acte la cession du véhicule et génère la nouvelle carte grise qui sera délivrée au client acheteur dans un délais maximal d’un mois.</li>
                    </ul>
                  </p>                            </div>
                <div className="col-lg-5">
                  <div className="image-block"><img src="https://www.ewigo.com/wp-content/uploads/2021/09/Mask-Group-193.png" alt="" className="img-fluid" /></div>                            </div>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  )
}

export default Services
