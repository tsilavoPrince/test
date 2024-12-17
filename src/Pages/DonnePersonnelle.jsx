import React from 'react';
// import './DonneesPersonnelles.css'; // Assurez-vous de créer ce fichier CSS pour ajouter les styles spécifiques

const DonneesPersonnelles = () => {
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
                                "url('https://www.ewigo.com/wp-content/uploads/2022/01/iStock-532604349-1.jpg')",
                        }}
                    ></div>
                    <div className="container">
                        <h1 className="h1 white anim fade right delay3">Données personnelles</h1>
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
                                    <p>Politiques de Gestion des données personnelles &#8211; refonte site 2021</p>
                                    <p>
                                        Ewigo Développement traite des données à caractère personnel vous
                                        concernant en tant que responsable de traitement dans le cadre de
                                        l’utilisation de ce site internet (ci-après le « Site »).
                                    </p>
                                    <p>
                                        En tant que responsable de traitement, nous sommes respectueux de la
                                        vie privée et nous protégeons les données à caractère personnel des
                                        utilisateurs de notre site.
                                    </p>
                                    <p>
                                        En tant que responsable de traitement, Ewigo Développement a à cœur
                                        de formaliser son engagement sur ce sujet au travers d’une politique
                                        de gestion des données personnelles dans le cadre de l’utilisation du
                                        site ewigo.com par les internautes.
                                    </p>
                                    <p>
                                        Cette politique est régie par les Conditions Générales d’Utilisation
                                        de la société Ewigo Développement, sans restriction ni réserve, entre
                                        vous et la société.
                                    </p>
                                    <p>
                                        Elle a pour objet de fournir des informations concernant la manière
                                        dont la Société collecte et traite certaines de vos données à
                                        caractère personnel, conformément à la législation en vigueur et en
                                        particulier le Règlement européen n°2016/679 et la loi n°78-17 (ci-après
                                        dénommées la “Legislation”), en relation avec votre utilisation du
                                        site internet ewigo.com (ci-après dénommé le “Site”).
                                    </p>

                                    <h3>1- Données traitées</h3>
                                    <p>
                                        Dans le cadre de la Navigation, le Responsable de traitement est
                                        amené à recueillir et à traiter un certain nombre de Données, et
                                        notamment :
                                    </p>
                                    <ul>
                                        <li>
                                            Des informations personnelles (nom, prénom, sexe, adresse postale,
                                            adresse email, numéro de téléphone, date de naissance, âge, etc.).
                                        </li>
                                        <li>Des informations bancaires (moyen de paiement, numéro de carte de crédit).</li>
                                        <li>Des informations techniques (comportement de navigation, adresse IP, etc.).</li>
                                    </ul>

                                    <h3>2- Contexte du traitement de la collecte des données personnelles</h3>
                                    <p>
                                        La société Ewigo Développement ne collecte des informations
                                        personnelles relatives à l’utilisateur que pour le besoin de certains
                                        services proposés par le site ewigo.com.
                                    </p>
                                    <p>
                                        Différents traitements ont pour finalité des objectifs tels que
                                        l’authentification des utilisateurs, la gestion des commandes, des
                                        services après-vente, des réclamations ou alors la gestion plus
                                        globale de vos données personnelles.
                                    </p>

                                    <h3>3- Destinataires des données à caractère personnelles récoltées</h3>
                                    <p>
                                        Par principe, le Responsable de traitement est le seul Destinataire
                                        des Données. Par ailleurs, les données pourront être communiquées à
                                        toute autorité légalement habilitée à en connaître.
                                    </p>

                                    <h3>4- Durée de conservation des données</h3>
                                    <p>
                                        Conformément à la réglementation, nous nous engageons à ne conserver
                                        vos données personnelles que le temps nécessaire pour atteindre
                                        l’objectif poursuivi, pour répondre à vos besoins, ou pour satisfaire
                                        à nos obligations légales.
                                    </p>

                                    <h3>5- Droit d’accès, de rectification et d’opposition</h3>
                                    <p>
                                        Conformément aux dispositions des articles 38 et suivants de la loi
                                        78-17 du 6 janvier 1978, tout utilisateur dispose d’un droit d’accès,
                                        de rectification et d’opposition aux données personnelles le
                                        concernant.
                                    </p>

                                    <h3>6- Liens hypertextes et cookies</h3>
                                    <p>
                                        La navigation sur le site ewigo.com est susceptible de provoquer
                                        l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un
                                        cookie est un fichier de petite taille qui enregistre des informations
                                        relatives à la navigation.
                                    </p>

                                    <h3>7- Lexique</h3>
                                    <p>
                                        <strong>Utilisateur</strong> : Internaute se connectant, utilisant le
                                        site susnommé.
                                    </p>
                                    <p>
                                        <strong>Informations personnelles</strong> : « les informations qui
                                        permettent, sous quelque forme que ce soit, directement ou non,
                                        l’identification des personnes physiques auxquelles elles s’appliquent ».
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

export default DonneesPersonnelles;
