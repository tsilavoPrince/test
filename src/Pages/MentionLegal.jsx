import React from 'react';
// import './MentionsLegales.css'; // Si vous avez des styles à appliquer

const MentionsLegales = () => {
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
                                "url('https://www.ewigo.com/wp-content/uploads/2022/01/iStock-532604349.jpg')",
                        }}
                    ></div>
                    <div className="container">
                        <h1 className="h1 white anim fade right delay3">Mentions légales</h1>
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
                                    <p>Mentions légales &#8211; refonte site 2021</p>
                                    <p>
                                        Conformément aux dispositions de la loi n° 2004-575 du 21
                                        juin 2004 pour la confiance en l’économie numérique, il est
                                        précisé aux utilisateurs du site ewigo.com l’identité des
                                        différents intervenants dans le cadre de sa réalisation et
                                        de son suivi.
                                    </p>
                                    <p>
                                        <strong>Édition du site</strong>
                                    </p>
                                    <p>
                                        Le site ewigo.com est édité par la société Ewigo
                                        Développement SAS, au capital de 10.000 euros; immatriculée
                                        au registre du commerce et des sociétés d’Evry sous le
                                        numéro 804 924 124 et dont le siège social est situé 3 rue
                                        Marius Hué 91370, Verrières-le-Buisson.
                                    </p>
                                    <p>
                                        Toute demande par mail peut être adressée à{' '}
                                        <a
                                            href="https://www.ewigo.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="503622313e333839233510352739373f7e333f3d"
                                        >
                                            [email&#160;protected]
                                        </a>
                                        .
                                    </p>
                                    <p>
                                        <strong>Responsable de publication</strong>
                                    </p>
                                    <p>
                                        Florent Barboteau (
                                        <a
                                            href="https://www.ewigo.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="fd9b8f9c939e95948e98bd988a949a92d39e9290"
                                        >
                                            [email&#160;protected]
                                        </a>
                                        )
                                    </p>
                                    <p>
                                        <strong>Hébergeur</strong>
                                    </p>
                                    <p>
                                        Hébergeur : AMAZON web services Inc. – 410 Terry Ave North
                                        – Seattle WA 98109-5210 US
                                    </p>
                                    <p>
                                        Adresse supplémentaire : Amazon Web Services EMEA SARL,
                                        Succursale Française, 31 Place des Corolles, Tour Carpe
                                        Diem, 92400 Courbevoie.
                                    </p>
                                    <p>
                                        Contact :{' '}
                                        <a
                                            href="https://aws.amazon.com/fr/contact-us/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            AWS Contact
                                        </a>
                                        <br />
                                        Tél : 01.46.17.10.00
                                    </p>
                                    <p>
                                        <strong>Nous contacter</strong>
                                    </p>
                                    <p>
                                        Par courrier : <br />
                                        Ewigo Développement<br />
                                        3 rue Marius Hué<br />
                                        91370 Vérrières-le-Buisson
                                    </p>
                                    <p>
                                        Par mail :{' '}
                                        <a
                                            href="https://www.ewigo.com/cdn-cgi/l/email-protection"
                                            className="__cf_email__"
                                            data-cfemail="8dfee8fffbe4eee8a0eee1e4e8e3f9fecde8fae4eae2a3eee2e0"
                                        >
                                            [email&#160;protected]
                                        </a>
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

export default MentionsLegales;
