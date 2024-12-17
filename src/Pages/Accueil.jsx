import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const Acceuille = () => {


    return (
        <div className="content-blocks">

            {/* Section: Page Header */}
            <section className="page-header-section full-view-header full-height">
                <div
                    className="image-block"
                    style={{
                        backgroundImage:
                            "url('https://www.ewigo.com/wp-content/uploads/2024/03/Acceuil-site-10-ans.png')",
                    }}
                ></div>
            </section>

            {/* Section: Vendre et Acheter */}
            <section className="vendre-and-acheter-section">
                <div className="list-block">
                    <div className="list">
                        <div
                            className="bg"
                            style={{
                                backgroundImage:
                                    "url('https://www.ewigo.com/wp-content/uploads/2022/07/Capture-decran-2021-04-19-a-13.36.08.jpg')",
                            }}
                        ></div>
                        <h2 className="h2">Vendre mon véhicule</h2>
                        <p>Estimez votre véhicule rapidement et gratuitement</p>
                        <Link to="/Vendre"></Link>
                    </div>
                    <div className="list">
                        <div
                            className="bg"
                            style={{
                                backgroundImage:
                                    "url('https://www.ewigo.com/wp-content/uploads/2022/07/Mask-Group-122-1-e1633859272192.jpg')",
                            }}
                        ></div>
                        <h2 className="h2">Acheter un véhicule</h2>
                        <p>Choisissez votre prochain compagnon de route</p>
                        <Link to="/Acheter"></Link>
                    </div>
                </div>
            </section>

            {/* Section: Etapes */}
            <section className="sell-your-vehicle-steps-section" style={{ backgroundImage: "url('https://www.ewigo.com/wp-content/uploads/2022/01/sell-your-vehicle-v2.jpg')", }} >
                <div className="container">
                    <h2 className="h2 anim fade up">Vendez votre véhicule en quelques étapes</h2>
                    <div className="list-block row">
                        <div className="list col-lg-6">
                            <div className="content anim fade delay1 right">
                                <div className="number">1.</div>
                                <div className="detail">
                                    <h3 className="h3">Vérification</h3>
                                    <p>Pour s’assurer du respect de notre charte qualité</p>
                                </div>
                            </div>
                        </div>
                        <div className="list col-lg-6">
                            <div className="content anim fade delay2 left">
                                <div className="number">2.</div>
                                <div className="detail">
                                    <h3 className="h3">Estimation</h3>
                                    <p>
                                        Avec votre conseiller Ewigo pour déterminer ensemble le
                                        meilleur prix de marché de votre véhicule
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="list col-lg-6">
                            <div className="content anim fade delay3 right">
                                <div className="minidelay3 content anim fade right">
                                    <div className="number">3.</div>
                                    <div className="detail">
                                        <h3 className="h3">Commercialisation</h3>
                                        <p className="">de votre auto au moyen d’outils professionnels et d’un reportage photo qui le sublimera</p>
                                    </div>
                                </div>
                            </div>
                            <div className="list col-lg-6">
                                <div className="content anim fade delay4 left">
                                    <div className="minidelay4 content anim fade left">
                                        <div className="number">4.</div>
                                        <div className="detail">
                                            <h3 className="h3">Promotion</h3>
                                            <p className="">auprès de notre base d’acheteurs nationale grâce à nos ambassadeurs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="list col-lg-6">
                                    <div className="content anim fade delay5 right">
                                        <div className="minidelay5 content anim fade right">
                                            <div className="number">5.</div>
                                            <div className="detail">
                                                <h3 className="h3">Sécurisation</h3>
                                                <p className="">du paiement via un compte séquestre et gestion des démarches administratives</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why-us-section">
                <div className="why-choose-us">
                    <div className="content-block">
                        <div className="header-block">
                            <h2 className="h3 anim fade up">Pourquoi choisir Ewigo?</h2>
                            <img
                                className="labels-logo-1"
                                src="https://www.ewigo.com/wp-content/uploads/2024/02/SECONDE-MAIN1-3.png"
                                alt="Logo 1"
                            />
                            <img
                                className="labels-logo-2"
                                src="https://www.ewigo.com/wp-content/uploads/2024/02/SECONDE-MAIN1-copie.png"
                                alt="Logo 2"
                            />
                            <img
                                className="labels-logo-3"
                                src="https://www.ewigo.com/wp-content/uploads/2024/02/DISTRIBUTION-SPECIALISEE1.png"
                                alt="Logo 3"
                            />
                        </div>
                        <div className="list-block row">
                            <div className="list col-md-4">
                                <div className="image-block">
                                    <Player
                                        autoplay
                                        loop
                                        src="https://www.ewigo.com/wp-content/themes/ewigo/assets/animations/compoCadenas.json"
                                        style={{ width: "100%", maxWidth: "100%" }}
                                    />
                                </div>
                                <div className="content">
                                    <h3 className="h3 anim slide-right">Sécurité</h3>
                                    <p className="anim slide-right">
                                        De l origine à l entretien jusqu au paiement du véhicule, nous
                                        nous assurons que tout soit parfait.
                                    </p>
                                </div>
                            </div>
                            <div className="list col-md-4">
                                <div className="image-block">
                                    <Player
                                        autoplay
                                        loop
                                        src="https://www.ewigo.com/wp-content/themes/ewigo/assets/animations/compoMain.json"
                                        style={{ width: "100%", maxWidth: "100%" }}
                                    />
                                </div>
                                <div className="content">
                                    <h3 className="h3 anim slide-right">Expertise</h3>
                                    <p className="anim slide-right">
                                        Un ambassadeur Ewigo s occupe de tout afin que vous vendiez ou
                                        achetiez dans les meilleures conditions.
                                    </p>
                                </div>
                            </div>
                            <div className="list col-md-4">
                                <div className="image-block">
                                    <Player
                                        autoplay
                                        loop
                                        src="https://www.ewigo.com/wp-content/themes/ewigo/assets/animations/compoPerso.json"
                                        style={{ width: "100%", maxWidth: "100%" }}
                                    />
                                </div>
                                <div className="content">
                                    <h3 className="h3 anim slide-right">Satisfaction</h3>
                                    <p className="anim slide-right">
                                        Un objectif : Vous satisfaire au mieux (4,8/5 retour moyen de
                                        nos clients sur plus de 10 000 avis Google).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonial-section">
                    <div className="content-block">
                        <h2 className="h3 white anim fade up">Ils nous ont fait confiance</h2>
                        <div className="testimonial-block">
                            <div className="slide">
                                <div className="testimonial slide anim fade left">

                                    <div className="content">
                                        <div className="author">
                                            <div className="headshot"></div>
                                            <p className="title bold">Thomas Schneider</p>
                                            <div className="rating"></div>
                                        </div>

                                        <p className="message">Je recommande fortement l agence, des gens très impliqué dans
                                            leur travail et très professionnel. Au top.</p>
                                        <p className="designation">EWIGO Hoenheim - Strasbourg Nord</p>
                                        <p className="time">Il y a 3 mois</p>
                                        <p className="gmb"><a
                                            href="https://www.google.com/maps/place/EWIGO+Hoenheim+-+Strasbourg+Nord+-+ACHAT+–+VENTE+–+REPRISE+–+VÉHICULE+D’OCCASION/@48.6336872,7.7675767,17z/data=!4m14!1m5!8m4!1e1!2s103955200070409784383!3m1!1e1!3m7!1s0x4796c71c60e61d6f:0x2034072a46d55f79!8m2!3d48.6336837!4d7.7697654!9m1!1b1!16s%2Fg%2F11pdp32p8k?hl=fr"
                                            target="_blank">Voir tous les avis</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="testimonial slide anim fade left">

                                    <div className="content">
                                        <div className="author">
                                            <div className="headshot"></div>
                                            <p className="title bold">Charithakis Mohamed</p>
                                            <div className="rating"></div>
                                        </div>

                                        <p className="message">Achat de mon véhicule avec un personnel très professionnel,
                                            toujours à l écoute et disponible dans le besoin. J ai beaucoup apprécié
                                            leurs services.</p>
                                        <p className="designation">EWIGO Quimper</p>
                                        <p className="time">Il y a un mois</p>
                                        <p className="gmb"><a
                                            href="https://www.google.com/maps/place/Ewigo+Quimper/@47.9944143,-4.1095863,17z/data=!4m14!1m5!8m4!1e1!2s111718160657664128799!3m1!1e1!3m7!1s0x4810d590f79d899f:0x2df39452bf640f5b!8m2!3d47.9944096!4d-4.1074229!9m1!1b1!16s%2Fg%2F11hbv95m5h?hl=fr"
                                            target="_blank">Voir tous les avis</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="testimonial slide anim fade left">

                                    <div className="content">
                                        <div className="author">
                                            <div className="headshot"></div>
                                            <p className="title bold">Chloé Onzatti</p>
                                            <div className="rating"></div>
                                        </div>


                                        <p className="message">Très bon service pour lachat d un véhicule : véhicule 100%
                                            conforme aux descriptions, équipe réactive et très sympa qui s occupe de
                                            tout. Je recommande vivement !</p>
                                        <p className="designation">EWIGO Laon</p>
                                        <p className="time">Il y a un mois</p>
                                        <p className="gmb"><a
                                            href="https://www.google.com/maps/place/Ewigo+Laon***+Intermédiaire+automobile/@49.5703887,3.6354235,17z/data=!4m14!1m5!8m4!1e1!2s118153174083866541334!3m1!1e1!3m7!1s0x47e84be77d7e4c65:0xd710f9049f3fb670!8m2!3d49.5703852!4d3.6376122!9m1!1b1!16s%2Fg%2F11mxdbkrnk?hl=fr"
                                            target="_blank">Voir tous les avis</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="testimonial slide anim fade left">

                                    <div className="content">
                                        <div className="author">
                                            <div className="headshot"></div>
                                            <p className="title bold">Emmanuel Vigier</p>
                                            <div className="rating"></div>
                                        </div>

                                        <p className="message">Excellent service, véhicule vendu en quelques jours,
                                            transaction sécurisée. Relationnel excellent. Je recommande.</p>
                                        <p className="designation">EWIGO Bordeaux Thiers</p>
                                        <p className="time">Il y a une semaine</p>
                                        <p className="gmb"><a
                                            href="https://www.google.com/maps/place/Ewigo+Bordeaux+-+Achats+-+Ventes+-+Reprises+-+Véhicules+d'occasion/@44.8485732,-0.5480926,17z/data=!4m14!1m5!8m4!1e1!2s114543724796206813054!3m1!1e1!3m7!1s0xd5526200d7df291:0xaec746ab31c3ad21!8m2!3d44.8485694!4d-0.5459039!9m1!1b1!16s%2Fg%2F11c5zvkvlt?hl=fr"
                                            target="_blank">Voir tous les avis</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="testimonial slide anim fade left">

                                    <div className="content">
                                        <div className="author">
                                            <div className="headshot"></div>
                                            <p className="title bold">Estelle Guerriau</p>
                                            <div className="rating"></div>
                                        </div>


                                        <p className="message">Personnel très efficace et sympathique, je suis ravie de mon
                                            achat, voiture nickel, et un grand merci à Johanne qui a pris le temps de
                                            tout m expliquer.</p>
                                        <p className="designation">EWIGO Angers</p>
                                        <p className="time">Il y a 3 jours</p>
                                        <p className="gmb"><a
                                            href="https://www.google.com/maps/place/Ewigo+Angers+ACHAT+–+VENTE+–+REPRISE+–+VÉHICULE+D’OCCASION/@47.4733204,-0.6066975,17z/data=!4m14!1m5!8m4!1e1!2s100868987404286791837!3m1!1e1!3m7!1s0x48087fe4ac77a41d:0xdbe7e2d7e4f46b5f!8m2!3d47.4733168!4d-0.6045088!9m1!1b1!16s%2Fg%2F11fnp9qjwk?hl=fr"
                                            target="_blank">Voir tous les avis</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="testimonial slide anim fade left">

                                    <div className="content">
                                        <div className="author">
                                            <div className="headshot"></div>
                                            <p className="title bold">Isabelle Lucarelli</p>
                                            <div className="rating"></div>
                                        </div>

                                        <p className="message">Super équipe !! Très réactive, très professionnel 😊En même
                                            pas 1 semaine vendu...et à un très bon prix ( Moi je n ai rien fait tout est
                                            allé très vite) 😉 Merci !</p>
                                        <p className="designation">EWIGO Lyon Nord Caluire</p>
                                        <p className="time">Il y a 3 semaines</p>
                                        <p className="gmb"><a
                                            href="https://www.google.com/maps/place/EWIGO+LYON+NORD+-+Achat,+Vente,+Reprise,+Véhicules+d'occasion/@45.7915521,4.8215085,17z/data=!4m14!1m5!8m4!1e1!2s111173652453942207931!3m1!1e1!3m7!1s0x47f4eb2535b65bf7:0xfb5775004b6334af!8m2!3d45.7915484!4d4.8236972!9m1!1b1!16s%2Fg%2F11h1dj8km5?hl=fr"
                                            target="_blank">Voir tous les avis</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="testimonial slide anim fade left">

                                    <div className="content">
                                        <div className="author">
                                            <div className="headshot"></div>
                                            <p className="title bold">Laetitia Dourlen</p>
                                            <div className="rating"></div>
                                        </div>

                                        <p className="message">Agence où le professionnalisme et le suivi commercial sont au
                                            rendez-vous. Et ça c est vraiment top !!! Nous le recommandons vivement.
                                        </p>
                                        <p className="designation">EWIGO Reims</p>
                                        <p className="time">Il y a 3 semaines</p>
                                        <p className="gmb"><a
                                            href="https://www.google.com/maps/place/Ewigo+Reims+ACHAT+–+VENTE+–+REPRISE+–+VÉHICULE+D’OCCASION/@49.2629105,4.0518313,17z/data=!4m14!1m5!8m4!1e1!2s100664855918148689445!3m1!1e1!3m7!1s0x47e975c8bbd56035:0x6533c88a623301d7!8m2!3d49.262907!4d4.05402!9m1!1b1!16s%2Fg%2F11c5zz9mcc?hl=fr"
                                            target="_blank">Voir tous les avis</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="testimonial slide anim fade left">

                                    <div className="content">
                                        <div className="author">
                                            <div className="headshot"></div>
                                            <p className="title bold">Paninibambou Pani</p>
                                            <div className="rating"></div>
                                        </div>

                                        <p className="message">Achat sécurisé et l équipe au top ! Encore merci pour votre
                                            professionnalisme et votre réactivité. (La petite polo grise)</p>
                                        <p className="designation">EWIGO Besançon</p>
                                        <p className="time">Il y a 2 mois</p>
                                        <p className="gmb"><a
                                            href="https://www.google.com/maps/place/EWIGO+BESANCON+-+ACHAT+–+VENTE+–+REPRISE+–+VÉHICULE+D’OCCASION/@47.2609868,6.0307692,17z/data=!4m14!1m5!8m4!1e1!2s108394325788800272064!3m1!1e1!3m7!1s0x478d63daa36c28c9:0x5707473bb77b30ba!8m2!3d47.2610082!4d6.0329403!9m1!1b1!16s%2Fg%2F11nn2mqvcf?hl=fr"
                                            target="_blank">Voir tous les avis</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="testimonial slide anim fade left">

                                    <div className="content">
                                        <div className="author">
                                            <div className="headshot"></div>
                                            <p className="title bold">Pierre Alain Flament</p>
                                            <div className="rating"></div>
                                        </div>


                                        <p className="message">J ai vendu mon véhicule au prix que je m était fixé en
                                            seulement 15 jours Excellent relationnel et professionnalisme</p>
                                        <p className="designation">EWIGO Pau</p>
                                        <p className="time">Il y a un mois</p>
                                        <p className="gmb"><a
                                            href="https://www.google.com/maps/place/EWIGO+Pau+-+Achat,+Vente,+Reprise,+Véhicules+d’occasion/@43.2980223,-0.3054295,17z/data=!4m14!1m5!8m4!1e1!2s110500995134029261699!3m1!1e1!3m7!1s0xd56490bacc947d1:0x9a04360731912e01!8m2!3d43.2980118!4d-0.3032487!9m1!1b1!16s%2Fg%2F11h1rc829v?hl=fr"
                                            target="_blank">Voir tous les avis</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div className="testimonial slide anim fade left">

                                    <div className="content">
                                        <div className="author">
                                            <div className="headshot"></div>
                                            <p className="title bold">Thierry Ribes</p>
                                            <div className="rating"></div>
                                        </div>


                                        <p className="message">Agence très sérieuse. Vente de mon véhicule en 9 jours.
                                            Prestation et transaction parfaites. Personnels Très professionnels.</p>
                                        <p className="designation">EWIGO Val d Europe</p>
                                        <p className="time">Il y a un mois</p>
                                        <p className="gmb"><a
                                            href="https://www.google.com/maps/place/EWIGO+VAL+D'EUROPE+–+ACHAT+–+VENTE+–+REPRISE+VÉHICULES+D’OCCASION/@48.8422366,2.7871623,17z/data=!3m1!5s0x47e602cbf67e5589:0x581a31ee849a945b!4m14!1m5!8m4!1e1!2s116080995519402201737!3m1!1e1!3m7!1s0x47e603c8b4ba48d3:0xb7b4348352ed40e9!8m2!3d48.8422331!4d2.789351!9m1!1b1!16s%2Fg%2F11mxdhcgy5?hl=fr"
                                            target="_blank">Voir tous les avis</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="seperator-section" style={{ backgroundImage: "url('https://www.ewigo.com/wp-content/uploads/2022/07/home-header-bg-1.jpg')" }}>
                <div className="container">
                    <h3 className="h3 white anim fade up">
                        Vous souhaitez rejoindre le réseau Ewigo ? Devenez franchisé !
                    </h3>
                </div>
            </section>

            <section className="news-section" style={{ backgroundImage: "url('https://www.ewigo.com/wp-content/uploads/2022/07/mockup-actualite.jpg')" }}>
                <h2 className="h2 white">Actualités</h2>
                <p className="white">
                    Découvrez l’Observatoire Ewigo, répertoire d’articles sur le monde auto et de la franchise.
                </p>
                <div className="list-block row">
                    <div className="list">
                        <div
                            className="image-block"
                            style={{
                                backgroundImage: "url('https://www.ewigo.com/wp-content/uploads/2022/07/Mockup-obs-carre.jpg')"
                            }}
                        ></div>
                        <a >
                            <h3 className="h3 white anim fade right">L’observatoire Ewigo</h3>
                        </a>
                    </div>

                    <div className="list">
                        <div
                            className="image-block"
                            style={{
                                backgroundImage: "url('https://www.ewigo.com/wp-content/uploads/2022/07/mockup-actualite.jpg')"
                            }}
                        ></div>
                        <a >
                            <h3 className="h3 white anim fade right">L actu Ewigo</h3>
                        </a>
                    </div>

                    <div className="list">
                        <div
                            className="image-block"
                            style={{
                                backgroundImage: "url('https://www.ewigo.com/wp-content/uploads/2022/07/les-medias-parlent-de-nous.jpg')"
                            }}
                        ></div>
                        <a >
                            <h3 className="h3 white anim fade right">Les médias parlent de nous</h3>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Acceuille