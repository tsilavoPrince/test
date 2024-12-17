const Actualite = () => {

    const posts = [
        {
            title: 'Electrique et hybride pour répondre au mieux à toutes les exigences du marché ?',
            date: 'septembre 12, 2023',
            image: 'https://www.ewigo.com/wp-content/uploads/2024/07/Votre-texte-de-paragraphe-1-1.png',
            link: 'https://www.ewigo.com/larrivee-de-lelectrique-et-de-lhybride-au-cote-du-thermique-un-panel-de-choix-desormais-possible-pour-repondre-au-mieux-a-toutes-les-exigences-du-marche/'
        },
        {
            title: 'Quelle voiture choisir pour votre road trip cet été ?',
            date: 'août 9, 2023',
            image: 'https://www.ewigo.com/wp-content/uploads/2023/08/64c2703f153f6b748207b558-1.png',
            link: 'https://www.ewigo.com/quelle-voiture-choisir-pour-votre-road-trip-cet-ete/'
        },
        {
            title: 'Les Français et l’achat de véhicule d’occasion : état des lieux',
            date: 'mai 12, 2023',
            image: 'https://www.ewigo.com/wp-content/uploads/2024/07/Votre-texte-de-paragraphe-copie-4.png',
            link: 'https://www.ewigo.com/les-francais-et-lachat-de-vehicule-doccasion-etat-des-lieux/'
        }
    ];

    const mediaAppearances = [
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2023/02/CARROUSSEL-ACTUALITES-LES-MEDIAS-PARLENT-DE-NOUS-1-1.png',
            link: 'https://www.ewigo.com/🚀-les-leaders-sassocient-quoi-de-plus-naturel-2/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2023/05/Copie-de-CARROUSSEL-ACTUALITES-LES-MEDIAS-PARLENT-DE-NOUS-.png',
            link: 'https://www.ewigo.com/ewigo-fait-partie-des-5-franchises-automobiles-qui-font-la-difference-en-2023-selon-lexpress-franchise/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2023/03/Copie-de-CARROUSSEL-ACTUALITES-LES-MEDIAS-PARLENT-DE-NOUS-.png',
            link: 'https://www.ewigo.com/florent-barboteau-est-a-nouveau-a-lhonneur-sur-lantenne-de-bfm-business-dans-90-minutes-business/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2023/02/Copie-de-CARROUSSEL-ACTUALITES-LES-MEDIAS-PARLENT-DE-NOUS-.png',
            link: 'https://www.ewigo.com/florent-barboteau-fondateur-dewigo-invite-de-club-media-rh-sur-bfm-business/'
        }
    ];

    const articles = [
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2024/06/Retour-sur-la-2.png',
            link: 'https://www.ewigo.com/emvo-2024-le-rendez-vous-cles-pour-les-professionnels-de-loccasion/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2024/06/Strategie-communication-TV-depuis-2020-1.png',
            link: 'https://www.ewigo.com/ewigo-et-la-communication-tv-depuis-2020/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2024/06/IMG_0853.jpg',
            link: 'https://www.ewigo.com/6-mois-pour-etre-rentable-linterview-dewigo-saumur/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2024/06/JO2024.jpg',
            link: 'https://www.ewigo.com/retour-sur-le-concours-memorable-pour-les-jo-2024/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2024/11/gifnouvellessignaturesoctobre2024.gif',
            link: 'https://www.ewigo.com/nouvelles-signatures-pour-ewigo-en-octobre-2024/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2023/11/MiniatureConvention.png',
            link: 'https://www.ewigo.com/retour-sur-la-convention-nationale-2023/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2024/02/Capture-decran-2024-02-06-a-12.08.26.png',
            link: 'https://www.ewigo.com/2-nouveaux-lessai-by-ewigo-disponibles/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2023/02/Capture-decran-2023-01-31-a-15.08.03.png',
            link: 'https://www.ewigo.com/jerenouvelle-saison-2/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2024/03/Capture-decran-2024-03-26-a-11.55.07-2.png',
            link: 'https://www.ewigo.com/franchise-expo-paris-2024-cest-deja-termine/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2023/03/HomePage_Web.png',
            link: 'https://www.ewigo.com/ewigo-continue-dinnover/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2024/02/2-2.png',
            link: 'https://www.ewigo.com/ewigo-est-deja-de-retour-a-la-tele-en-2024/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2023/03/Barboteau-BFM-Business-copie-1.png',
            link: 'https://www.ewigo.com/florent-barboteau-est-a-nouveau-a-lhonneur-sur-lantenne-de-bfm-business-dans-90-minutes-business-2/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2023/03/VisuelsMatch11.png',
            link: 'https://www.ewigo.com/ewigo-partenaire-du-match-de-qualification-pour-leuro-2024-france-pays-bas/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2024/07/Carousel-10-ans-2.png',
            link: 'https://www.ewigo.com/les-10-faits-qui-font-dewigo-les-leaders-des-agences-automobiles/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2024/03/Capture-decran-2024-03-07-a-17.40.20-1.png',
            link: 'https://www.ewigo.com/retour-sur-les-premieres-reunions-regionales-de-2024/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2024/11/Capture-decran-2024-11-05-a-14.41.39.png',
            link: 'https://www.ewigo.com/nos-clients-nous-ont-elu-pour-la-3eme-annee-consecutive/'
        },
        {
            image: 'https://www.ewigo.com/wp-content/uploads/2024/11/Feed-convention.png',
            link: 'https://www.ewigo.com/ewigo-around-the-world-istanbul-2024/'
        }
    ];
    const newsData = [
        {
          title: "EMVO 2024",
          image: "https://www.ewigo.com/wp-content/uploads/2024/06/Retour-sur-la-2.png",
          link: "https://www.ewigo.com/emvo-2024-le-rendez-vous-cles-pour-les-professionnels-de-loccasion/",
        },
        {
          title: "Stratégie Communication",
          image: "https://www.ewigo.com/wp-content/uploads/2024/06/Strategie-communication-TV-depuis-2020-1.png",
          link: "https://www.ewigo.com/ewigo-et-la-communication-tv-depuis-2020/",
        },
        {
          title: "Interview Saumur",
          image: "https://www.ewigo.com/wp-content/uploads/2024/06/IMG_0853.jpg",
          link: "https://www.ewigo.com/6-mois-pour-etre-rentable-linterview-dewigo-saumur/",
        },
        {
          title: "JO 2024",
          image: "https://www.ewigo.com/wp-content/uploads/2024/06/JO2024.jpg",
          link: "https://www.ewigo.com/retour-sur-le-concours-memorable-pour-les-jo-2024/",
        },
        {
          title: "Signatures Octobre 2024",
          image: "https://www.ewigo.com/wp-content/uploads/2024/11/gifnouvellessignaturesoctobre2024.gif",
          link: "https://www.ewigo.com/nouvelles-signatures-pour-ewigo-en-octobre-2024/",
        },
        // Ajoutez plus d'éléments au tableau si nécessaire...
      ];

    return (

        <div>
            <section className="page-header-section full-view-header full-height content-in-center no-margin">
                <div
                    className="image-block"
                    style={{ backgroundImage: "url('https://www.ewigo.com/wp-content/uploads/2024/11/Page-actualite-Site.png')" }}
                >
                </div>
                <div className="container">
                    <h1 className="h1 white anim fade right delay3">L’actualité</h1>
                    <h2 className="h4 white anim fade left delay4">
                        <p>
                            <strong><span style={{ color: '#ffffff' }}>pour tout connaître du réseau numéro 1 d’agences automobiles</span></strong>
                        </p>
                        <p>
                            <strong><span style={{ color: '#ffffff' }}>et des dernières infos du secteur</span></strong>
                        </p>
                    </h2>
                </div>
            </section>

            <section className="free-text-section box-shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <p className="anim slide-right">
                                <h3 style={{ textAlign: 'center' }}>
                                    <span style={{ color: '#ff8900' }}>
                                        Ewigo : une enseigne qui aime casser les codes de l’automobile !
                                    </span>
                                </h3>
                                <p style={{ textAlign: 'center' }}>
                                    En effet, c’est l’histoire d’un réseau de près de 500 ambassadeurs qui accompagnent les particuliers
                                    qui souhaitent vendre, acheter ou se renseigner sur leur véhicule.
                                </p>
                            </p>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </section>

            <section className="actu-3-blocks-section">
                <div className="cards">
                    {/* Card 1 */}
                    <div className="card card-one">
                        <div className="card-title">
                            <div className="title-text">Découvrez la vie du réseau</div>
                        </div>
                        <div className="card-text">
                            <p>
                                <span style={{ fontWeight: '400' }}>
                                    des nouveaux membres rejoignant notre grande et belle famille aux partenariats stratégiques pour
                                    toujours plus de performance en passant par des moments de vie et de partages qui rythment le quotidien
                                    de notre enseigne.
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card card-two">
                        <div className="card-title">
                            <div className="title-text">Consultez les articles de l observatoire Ewigo</div>
                        </div>
                        <div className="card-text">
                            <p>
                                <span style={{ fontWeight: '400' }}>
                                    pour des informations sur le secteur automobile, des bonnes pratiques pour votre véhicule ou encore
                                    des bons plans pour mieux consommer. Parce qu’il est important d&rsquo;être bien renseigné, nous avons
                                    à cœur d&rsquo;être votre référence auto. C’est aussi ça l’accompagnement Ewigo.
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card card-three">
                        <div className="card-title">
                            <div className="title-text">Apprenez en plus sur Ewigo</div>
                        </div>
                        <div className="card-text">
                            <p>
                                <span style={{ fontWeight: '400' }}>
                                    au travers des médias qui ont parlé du réseau et qui participent à sa notoriété. Acteur visionnaire du
                                    milieu automobile, Ewigo a su devenir incontournable sur le marché et éveiller l’intérêt de nombreux
                                    acteurs qu’ils soient digitaux ou plus traditionnels.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="news-by-ewigo-carrousel-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <h2 className="h2 anim fade">L’actu Ewigo</h2>
            <p className="anim fade">
              Retrouvez toute l’actualité du réseau : témoignages des franchisés,
              nouvelles ouvertures, nouvelles performances ou encore nouveau
              partenariat. L’info du réseau en toute transparence est ici !
            </p>
            <a
              href="https://www.ewigo.com/lactu-ewigo/"
              className="btn primary-btn anim fade right"
            >
              + Voir plus d'actualités
            </a>
          </div>
          <div className="col-lg-8">
            <div className="list-block">
              {newsData.map((item, index) => (
                <div className="list" key={index}>
                  <div
                    className="thumbnail"
                    style={{
                      backgroundImage: `url(${item.image})`,
                    }}
                  ></div>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

            <section className="the-media-is-talking-about-us-section">
                <div className="container">
                    <h2 className="h2 white anim fade up">Les médias parlent de nous</h2>
                    <p className="white anim fade up">
                        On ne devient pas numéro 1 par hasard. Depuis la création de notre concept en 2014, tous les médias
                        incontournables ont parlé de nous. Découvrez l’ensemble de nos apparitions qu’elles soient nationales ou
                        locales dans des articles de presse, reportages ou encore interviews.
                    </p>
                    <div className="row list-block">
                        {mediaAppearances.map((item, index) => (
                            <div className="list col-lg-3 col-md-6" key={index}>
                                <div
                                    className="thumbnail"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                ></div>
                                <a href={item.link}></a>
                            </div>
                        ))}
                    </div>
                    <div className="button-block">
                        <a href="https://www.ewigo.com/les-medias/" className="anim fade up">
                            Voir plus
                        </a>
                    </div>
                </div>
            </section>

            <section className="ewigo-observatory-section">
                <div className="container">
                    <h2 className="h2 anim fade up">L’observatoire Ewigo</h2>
                    <p className="description anim fade up">
                        En tant qu’acteur incontournable du marché de l’occasion et fort de plus de 15.000 ventes annuelles,
                        Ewigo vous fait part de ses observations. Retrouvez des articles sur des sujets d’actualité du secteur
                        ou encore des bonnes pratiques pour mieux se déplacer.
                    </p>
                    <div className="row posts-list-grid observatory-grid">
                        {posts.map((post, index) => (
                            <div className="list col-lg-4 col-md-6" key={index}>
                                <div className="post-block">
                                    <div
                                        className="thumbnail"
                                        style={{ backgroundImage: `url(${post.image})` }}
                                    ></div>
                                    <div className="main-content">
                                        <p className="post-title title">
                                            <b>
                                                <a href={post.link}>{post.title}</a>
                                            </b>
                                        </p>
                                        <p className="date">{post.date}</p>
                                        <div className="tag-list"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="button-block">
                        <a href="https://www.ewigo.com/observatoire/" className="btn primary-btn">
                            + Voir plus
                        </a>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Actualite;
