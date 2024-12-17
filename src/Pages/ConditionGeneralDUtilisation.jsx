import React from 'react';
// import './ConditionsUtilisation.css'; // Assurez-vous d'ajouter ce fichier CSS pour styliser le composant

const ConditionsUtilisation = () => {
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
                                "url('https://www.ewigo.com/wp-content/uploads/2022/01/iStock-615823050.jpg')",
                        }}
                    ></div>
                    <div className="container">
                        <h1 className="h1 white anim fade right delay3">
                            Conditions générales d’utilisation
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
                                        Conditions Générales d’Utilisation &#8211; refonte site 2021
                                    </p>
                                    <p>Date de dernière mise à jour : 8 novembre 2021</p>
                                    <p>Bienvenue sur Ewigo.com !</p>
                                    <p>
                                        Ewigo Développement (la « Société ») fournit sur le site
                                        Internet ewigo.com (ou tout autre site qui le remplacerait)
                                        (le « Site »), des informations relatives aux produits et
                                        services proposés par la société.
                                    </p>
                                    <p>
                                        Les présentes conditions générales d’utilisation à
                                        destination des particuliers utilisant le Site (ci-après les
                                        « CGU ») ont pour objet de préciser les conditions
                                        d’utilisation du Site par les Utilisateurs. La Société se
                                        réserve le droit de modifier les CGU en fonction de
                                        l’évolution du Site et de ses activités.
                                    </p>

                                    <h3>1- Conditions Générales d’Utilisation (CGU) du site ewigo.com</h3>
                                    <p>
                                        L’utilisation du site ewigo.com implique l’acceptation pleine
                                        et entière des conditions générales d’utilisation ci-après
                                        décrites. Ces conditions d’utilisation sont susceptibles
                                        d’être modifiées ou complétées à tout moment, les utilisateurs
                                        du site ewigo.com sont donc invités à les consulter de manière
                                        régulière.
                                    </p>

                                    <h3>2- Description des services fournis ou proposés par ewigo.com</h3>
                                    <p>
                                        Le site ewigo.com a pour objet de fournir une information
                                        concernant l’ensemble des activités de la société. La société
                                        Ewigo Développement s’efforce de fournir sur le site des
                                        informations aussi précises que possible. Toutefois, il ne
                                        pourra être tenu responsable des omissions, des inexactitudes
                                        et des carences dans la mise à jour.
                                    </p>

                                    <h3>3- Limitation contractuelle sur les données techniques</h3>
                                    <p>
                                        Le site utilise les technologies JavaScript et CSS. Le site
                                        Internet ne pourra être tenu responsable de dommages
                                        matériels liés à l’utilisation du site.
                                    </p>

                                    <h3>4- Propriété intellectuelle et contrefaçons</h3>
                                    <p>
                                        La société Ewigo Développement est propriétaire des droits de
                                        propriété intellectuelle ou détient les droits d’usage sur
                                        tous les éléments accessibles sur le site, notamment les
                                        textes, images, graphismes, logo, icônes, sons, logiciels.
                                    </p>

                                    <h3>5- Limitations de responsabilité</h3>
                                    <p>
                                        La société Ewigo Développement ne pourra être tenue
                                        responsable des dommages directs et indirects causés au
                                        matériel de l’utilisateur, lors de l’accès au site ewigo.com,
                                        et résultant soit de l’utilisation d’un matériel ne répondant
                                        pas aux spécifications indiquées, soit de l’apparition d’un
                                        bug ou d’une incompatibilité.
                                    </p>

                                    <h3>6- Droit applicable et attribution de juridiction</h3>
                                    <p>
                                        Tout litige en relation avec l’utilisation du site ewigo.com
                                        est soumis au droit français. Il est fait attribution
                                        exclusive de juridiction aux tribunaux compétents de Paris.
                                    </p>

                                    <h3>7- Les principales lois concernées</h3>
                                    <ul>
                                        <li>
                                            Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi
                                            n° 2004-801 du 6 août 2004 relative à l’informatique, aux
                                            fichiers et aux libertés.
                                        </li>
                                        <li>
                                            Loi n° 2004-575 du 21 juin 2004 pour la confiance dans
                                            l’économie numérique.
                                        </li>
                                    </ul>

                                    <h3>8- Lexique</h3>
                                    <p>
                                        <strong>Utilisateur</strong> : Internaute se connectant,
                                        utilisant le site susnommé.
                                    </p>
                                    <p>
                                        <strong>Informations personnelles</strong> : « les informations
                                        qui permettent, sous quelque forme que ce soit, directement ou
                                        non, l’identification des personnes physiques auxquelles elles
                                        s’appliquent ».
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

export default ConditionsUtilisation;
