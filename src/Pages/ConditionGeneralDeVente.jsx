import React from 'react';
// import './ConditionsGenerales.css'; // Ajoutez ce fichier CSS pour styliser le composant

const ConditionsGenerales = () => {
    return (
        <div id="page" className="site">
            <a className="skip-link screen-reader-text" href="#primary">
                Skip to content
            </a>

            <div className="content-blocks">
                {/* Section d'en-tête */}
                <section className="page-header-section full-view-header full-height">
                    <div
                        className="image-block"
                        style={{
                            backgroundImage:
                                "url('https://www.ewigo.com/wp-content/uploads/2022/01/iStock-1221473473.jpg')",
                        }}
                    ></div>
                    <div className="container">
                        <h1 className="h1 white anim fade right delay3">
                            Conditions générales de vente
                        </h1>
                        <h2 className="h4 white anim fade left delay4">
                            <p>Mises à jour le 08/11/2021</p>
                        </h2>
                    </div>
                </section>

                {/* Section de contenu */}
                <section className="free-text-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8">
                                <div className="anim slide-right">
                                    <p>
                                        Conditions générales de vente &#8211; refonte site 2021
                                    </p>
                                    <p>1 – OBJET DES PRÉSENTES CONDITIONS GÉNÉRALES DE RÉSERVATION</p>
                                    <p>
                                        L’Agence EWIGO officie en qualité d’intermédiaire pour le compte de
                                        particuliers souhaitant vendre leur véhicule.
                                    </p>
                                    <p>
                                        L’Acheteur, qui a préalablement pris connaissance du descriptif du
                                        Véhicule sur le site de l’Agence, ou directement auprès de cette
                                        Agence, souhaite réserver auprès de l’Agence le Véhicule désigné pour
                                        l’acheter, conformément aux présentes conditions générales de
                                        réservation qui s’appliquent aux réservations effectuées sur internet
                                        ou en Agence.
                                    </p>

                                    <h3>2 – DÉCLARATIONS PRÉALABLES</h3>
                                    <p>
                                        L’Acheteur se déclare informé de ce que :
                                        <ul>
                                            <li>
                                                L’Agence EWIGO auprès de laquelle la réservation est effectuée est
                                                un intermédiaire de vente et qu’elle n’est pas le propriétaire du
                                                Véhicule.
                                            </li>
                                            <li>
                                                La vente se réalisera directement entre le Vendeur (propriétaire du
                                                véhicule) et l’Acheteur.
                                            </li>
                                            <li>
                                                Toute réservation de véhicule emporte acceptation préalable,
                                                complète et sans réserve des présentes conditions générales.
                                            </li>
                                        </ul>
                                    </p>

                                    <h3>3 – FRAIS DE RÉSERVATION</h3>
                                    <p>
                                        L’Acheteur verse à l’Agence l’acompte de réservation à la signature du
                                        bon de réservation, en contrepartie des frais de présentation,
                                        d’immobilisation et de re-commercialisation du Véhicule si la vente ne
                                        se réalise pas du fait de l’Acheteur.
                                    </p>

                                    <h3>4 – DÉROULEMENT DE LA VENTE</h3>
                                    <p>
                                        L’Agence organise en accord avec l’Acheteur et le Vendeur la
                                        présentation et la vente du Véhicule dans les locaux de l’Agence EWIGO
                                        la plus proche du lieu où se trouve le Véhicule.
                                    </p>

                                    <h3>5 – NON-SOLLICITATION</h3>
                                    <p>
                                        Si la vente du Véhicule n’est pas réalisée lors du rendez-vous
                                        organisé par l’Agence, l’Acheteur s’engage à ne pas contacter le
                                        Vendeur sans l’intermédiaire de l’Agence en vue de l’achat de son
                                        véhicule dans un délai de deux mois suivant l’organisation de ce
                                        rendez-vous.
                                    </p>

                                    <h3>6 – ASSURANCE &#8211; GARANTIES DU VÉHICULE</h3>
                                    <p>
                                        Il est de la responsabilité de l’Acheteur de souscrire pour le Véhicule
                                        une assurance prenant effet dès le moment de la vente.
                                    </p>

                                    <h3>7 – DROIT DE RÉTRACTATION POSTÉRIEUR À LA VENTE</h3>
                                    <p>
                                        Si le Vendeur est un particulier, l’Acheteur est informé qu’il ne
                                        bénéficie pas d’un délai de rétractation.
                                    </p>

                                    <h3>8 – TRAITEMENT DES RÉCLAMATIONS / MÉDIATION</h3>
                                    <p>
                                        Pour toute réclamation, l’Acheteur peut contacter le service clientèle
                                        de l’Agence avec laquelle il a effectué la réservation.
                                    </p>

                                    <h3>9 – DONNÉES PERSONNELLES</h3>
                                    <p>
                                        Les modalités de collecte, utilisation et traitement des données
                                        personnelles des utilisateurs sont indiquées dans la politique de
                                        gestion des données personnelles de la société.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ConditionsGenerales;
