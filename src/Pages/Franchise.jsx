import React from 'react'
import '../CSS/Franchise.css'

import Slider from "react-slick";

import { Link } from 'react-router-dom';
// import React, { useState } from "react";



const features = [
  {
      imgSrc: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6643676483da20d5da4e2875_Lock.webp",
      title: "Garantie",
      description: "Proposez des extensions de garanties allant jusqu'à 60 mois élaborées avec notre partenaire Mutuaide"
  },
  {
      imgSrc: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665877a34363f1e28f5febcc_ChartLine.png",
      title: "Financement",
      description: "4 banques partenaires offrant un large choix pour le financement d'un véhicule d'occasion"
  },
  {
      imgSrc: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665877c3c1bef63f76cdfa3c_Wavy_Check.png",
      title: "Label fiable ou remboursé",
      description: "Un label exclusif au réseau Ewigo. Fiable ou remboursé, telle est la promesse pour nos clients"
  },
  {
      imgSrc: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665877f35807ad5c2b384c1d_ShieldCheck.png",
      title: "Paiement sécurisé",
      description: "Offrez une sécurisation du paiement à votre client grâce à un compte séquestre avec notre partenaire CashSentinel"
  },
  {
      imgSrc: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66587834aac9925db53e94cf_CreditCard.png",
      title: "Carte grise",
      description: "Réalisez les démarches de courtage en carte grise en toute simplicité"
  },
  {
      imgSrc: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66436987eb37701da6272add_truck.webp",
      title: "Livraison",
      description: "Livraison du véhicule dans toute la France sur devis, offrez plus de flexibilité à vos clients"
  }
];


const mediaData = [
    {
      src: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665873df9f37656ac75748af_mediacapital.png",
      alt: "Capital",
      height: 50,
      className: "image-16",
    },
    {
      src: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6658740baa2dc8a865053302_lexpress.png",
      alt: "Lexpress",
      height: 50,
      className: "image-17",
    },
    {
      src: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665873df3ce3175fccb6d304_lofficieldelafranchise.png",
      alt: "lofficieldelafranchise",
      height: 50,
      className: "image-18",
    },
    {
      src: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665873e0885a873fa2849284_largus.png",
      alt: "largus",
      height: 50,
      className: "image-19",
    },
    {
      src: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665873dfff4f42425de30550_tfun.png",
      alt: "tf1",
      height: 50,
      className: "image-20",
    },
    {
      src: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/669637a2034b904d3f6cd182_BFM_TV_logo.png",
      alt: "Logo BFM TV",
      height: 60,
      className: "",
      srcSet:
        "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/669637a2034b904d3f6cd182_BFM_TV_logo-p-500.png 500w, https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/669637a2034b904d3f6cd182_BFM_TV_logo-p-800.png 800w, https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/669637a2034b904d3f6cd182_BFM_TV_logo-p-1080.png 1080w, https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/669637a2034b904d3f6cd182_BFM_TV_logo.png 1200w",
      sizes: "100vw",
    },
  ];

  const slides = [
    {
      id: 1,
      imgSrc: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66992673415aafae996a5424_1.png",
      title: "Entretien de qualification",
      description:
        "Nous vous exposons les principes de la franchise EWIGO et nous vous conseillons pour la suite de votre démarche.",
    },
    {
      id: 2,
      imgSrc: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66992673f64cff9b4729d738_2.png",
      title: "Modèle prédictif de réussite",
      description:
        "Nous utilisons un modèle prédictif pour évaluer comment votre projet s'aligne avec nos 15 meilleurs points de vente, assurant ainsi votre succès et votre épanouissement au sein du réseau.",
    },
    {
      id: 3,
      imgSrc: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66992673f7677615267482f7_3.png",
      title: "Remise de l’ELM",
      description:
        "Un rapport de 50 pages analyse le potentiel de votre projet en se basant sur des critères tels que l'attractivité de la zone, la concurrence et la démographie.",
    },
    {
      id: 4,
      imgSrc: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66992673b6ad6705fc3d97e1_4.png",
      title: "Conseils en vue de l’ouverture",
      description:
        "Recherche du meilleur emplacement, business plan, financement, recrutement, communication...",
    },
    {
      id: 5,
      imgSrc: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66a8b646e5b1522483b8ebdf_Dossier-Urbanisme.png",
      title: "Dossier urbanisme, travaux, enseigne, mobilier",
      description:
        "Des partenaires professionnels experts d'EWIGO vous aident à concevoir votre point de vente et à gérer les aspects administratifs.",
    },
    {
      id: 6,
      imgSrc: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66a89eeb1f9a275b63c355fe_Accompagnement.png",
      title: "Formation initiale",
      description:
        "5 semaines de formation au siège et en point de vente vous garantissent d’être immédiatement opérationnel pour démarrer.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  const data = [
    {
      image:
        "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66587a185849690d2678949d_assistanceewigo.png",
      title: "Une assistance accrue à l’ouverture",
      description:
        "Sécurisant votre phase de démarrage dans la réussite de votre point de vente.",
    },
    {
      image:
        "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66587a22faad3674c3d54216_equipeanimationewigo.png",
      title: "Une équipe d’animation de réseau",
      description:
        "À votre écoute et vous accompagnant afin de faire le point sur votre activité et votre rentabilité.",
    },
    {
      image:
        "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66587a2dc14be8a2da18e0c1_outilstrategique.png",
      title: "Un puissant outil stratégique",
      description:
        "De la prospection à la facturation en incluant le CRM interne simplifiant la relation client.",
    },
    {
      image:
        "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66587a3be78eecc528a625a3_outilreportingreseau.png",
      title: "Un outil de reporting réseau",
      description:
        "Vous permettant de piloter votre activité et de comparer vos performances à celles des autres.",
    },
    {
      image:
        "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66587a4c8b0be80cab32c5fd_animationcommerciale.png",
      title: "Des animations commerciales",
      description:
        "Stimulant vos équipes, boostant les résultats et soutenant votre stratégie de communication.",
    },
  ];

  const FranchiseOption = ({
    image,
    altText,
    name,
    title,
    details,
    investmentReturn,
  }) => {
    return (
      <div className="div-block-39">
        <img src={image} alt={altText} className="image-9" loading="lazy" width="100" />
        <div className="div-block-40">
          <p className="text-block-17">{name}</p>
          <h6 className="text-block-18">{title}</h6>
        </div>
        <div className="div-block-42">
          {details.map((detail, index) => (
            <div key={index} className="div-block-67">
              <p className="text-block-19">{detail.label}</p>
              <p className="text-block-19 bold align-right">{detail.value}</p>
            </div>
          ))}
        </div>
        <div className="div-block-43">
          <p className="text-block-21 align-left">Retour sur investissement</p>
          <p className="text-block-21">{investmentReturn}</p>
        </div>
      </div>
    );
  };

  const franchiseOptions = [
    {
      image:
        "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6658788ecc39a510d5a3a24a_ProfilFranchiseAgence.png",
      altText: "Franchisé d'une agence",
      name: "Mikaël Bouleau",
      title: "Franchisé d’une agence",
      details: [
        { label: "Apport personnel", value: "30 000 €" },
        { label: "Investissement total", value: "90 000 €" },
        { label: "Contrat", value: "Franchise" },
        { label: "Durée du contrat", value: "6 ans" },
        { label: "Redevance franchise", value: "40 €*" },
        { label: "Redevance communication", value: "250 €**" },
        { label: "Redevance informatique", value: "235 €" },
      ],
      investmentReturn: "< 18 mois",
    },
    {
      image:
        "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6658788ea1f3fb4372c81fb4_PortraitFranchiseConcession.png",
      altText: "Franchisé d'une concession",
      name: "Jonas Lemettre",
      title: "Franchisé d’une concession",
      details: [
        { label: "Apport personnel", value: "50 000 €" },
        { label: "Investissement total", value: "150 000 €" },
        { label: "Contrat", value: "Franchise" },
        { label: "Durée du contrat", value: "6 ans" },
        { label: "Redevance franchise", value: "40 €*" },
        { label: "Redevance communication", value: "250 €**" },
        { label: "Redevance informatique", value: "235 €" },
      ],
      investmentReturn: "< 12 mois",
    },
    {
      image:
        "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66f17a3780025d615da477f7_Franchise-Pole.png",
      altText: "Franchisés d'un pôle automobile",
      name: "Enguerran et Anthony",
      title: "Franchisés d’un pôle automobile",
      details: [
        { label: "Apport personnel", value: "65 000 €" },
        { label: "Investissement total", value: "215 000 €" },
        { label: "Contrat", value: "Franchise et licence de marque" },
        { label: "Durée du contrat", value: "6 ans" },
        { label: "Redevance franchise", value: "40 €* et 5%***" },
        { label: "Redevance communication", value: "450 €*" },
        { label: "Redevance informatique", value: "235 €" },
      ],
      investmentReturn: "< 18 mois",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Stéphane Puicouyoul',
      location: 'Reims',
      image:
        'https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665879065b7be347deee8006_franchisereims.png',
      quote: `Bonjour, je suis Stéphane, franchisé EWIGO depuis Juillet 2020 à Reims ! J’ai été convaincu qu’EWIGO était le meilleur réseau lorsque j’ai découvert la fiabilité du modèle. Aujourd’hui c’est le système le plus abouti et aussi le plus sérieux. EWIGO a contribué à mon développement professionnel grâce aux formations et surtout à celle en immersion en agence. Les échanges permanents entre les franchisés et la tête de réseau permettent également de grandir ensemble.`,
    },
    {
      id: 2,
      name: 'Coraline Dianne',
      location: 'Fréjus',
      image:
        'https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665879064a4090ecd990b1d8_franchiseeFrejus.png',
      quote: `Je suis Coraline, franchisée Ewigo dans le sud, ouverte depuis 1 an et ravie de représenter la marque à Fréjus. Ce qui m'a poussée à rejoindre EWIGO ce sont les valeurs humaines qui m’ont semblé fondamentales. Le modèle économique ensuite me paraissait plus que satisfaisant. Et le fait d’être accompagnée par un réseau également. Je bénéficie avec EWIGO de soutien si jamais j’ai besoin et de formations intéressantes.`,
    },
    {
      id: 3,
      name: 'Frédéric Loumingou',
      location: 'Val d’Europe',
      image:
        'https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66587906e647331598b1c6d5_franchiseValDeurope.png',
      quote: `Je m'appelle Frédéric, franchisé EWIGO depuis deux ans et demi en Seine et Marne. Ce qui m'a attiré chez EWIGO est la qualité perçue par la marque ainsi que l'atmosphère positive qui règne au sein du réseau. Le réseau EWIGO m'apporte les outils digitaux, une communication poussée et régulière ainsi qu'un encadrement rassurant. EWIGO a contribué à mon développement professionnel grâce à la formation, aux outils mis à disposition ainsi qu'un suivi régulier. Si je devais résumer EWIGO, je dirais que c'est un réseau de qualité, bienveillant, dynamique et qui reste à l'écoute des tendances du marché pour rester innovant et compétitif.`,
    },
  ];
  
  const TestimonialCard = ({ name, location, image, quote }) => (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <img
          src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66448a4197c9a1bbe52dd252_Quote.webp"
          alt="Quote icon"
          className="quote-icon"
        />
        <p className="testimonial-quote">{quote}</p>
      </div>
      <div className="testimonial-footer">
        <img src={image} alt={name} className="testimonial-image" />
        <div className="testimonial-info">
          <p className="testimonial-name">{name}</p>
          <p className="testimonial-location">Franchisé - {location}</p>
        </div>
      </div>
    </div>
  );
  
  

const Franchise = () => {
  return (
    

    <div className="body">
<link
       href="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/css/ewigo-franchise.webflow.69dca6889.css"
       rel="stylesheet" type="text/css"></link>

    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar w-nav"
    >
      <div className="div-block-13">
        <div
          className="menu-button w-nav-button"
          style={{ WebkitUserSelect: 'text' }}
          aria-label="menu"
          role="button"
          tabIndex="0"
          aria-controls="w-nav-overlay-0"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          <img
            width="32"
            loading="lazy"
            alt=""
            src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66460126b1616f12c5051752_Hamburger_LG.webp"
          />
        </div>

        <div className="div-block-12">
        <Link to="/">
            <a
            
              className="custom-logo-link"
              rel="home"
              aria-current="page"
            >
              <img
                width="173"
                height="38"
                src="https://www.ewigo.com/wp-content/uploads/2021/08/logo.png"
                className="custom-logo"
                alt="EWIGO"
                decoding="async"
              />
            </a>
            </Link>

          <nav role="navigation" className="nav-menu w-nav-menu">
            <a href="/le-blog" className="nav-link w-nav-link">
              Le blog
            </a>
            <div className="div-block-10">
            <Link to="/">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link avec-icon w-nav-link"
              >
                Ewigo
              </a>
              <img
                loading="lazy"
                src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6643575212079a50a272c581_Link%20External.webp"
                alt=""
                className="image-2"
              />
              </Link>
            </div>
          </nav>
        </div>

        <div className="div-block-11">
          <a
            href="#"
            data-w-id="676d44af-2849-b578-571d-f5eaafc73973"
            className="button primary none w-button"
          >
            Je souhaite ouvrir ma concession
          </a>
        </div>
      </div>

      <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
    </div>
<section className="hero-section">
      <div className="w-layout-grid grid">
        <div
          id="w-node-_85343dc1-b30c-e3c4-000d-fabf71258f6e-272d86ed"
          className="div-block-14"
        >
          <h1 className="heading">Devenez votre propre patron avec Ewigo</h1>
          <h2 className="heading-2">
            Bénéficiez d’un accompagnement et d’un savoir-faire reconnu.&nbsp;Devenez
            chef d’entreprise dans un cadre structuré
          </h2>
          <div className="div-block-16">
            <a
              data-w-id="a13723c2-0359-99b7-94aa-f66df57aa913"
              href="#"
              className="button primary w-button"
            >
              Devenir entrepreneur indépendant
            </a>
          </div>
          <p className="text-block-4">
            De 2014 à 2024, nous avons accompagné près de 200 porteurs de projets à
            se lancer en tant qu entrepreneurs indépendants
          </p>
        </div>
        <div className="div-block-15">
          <img
            src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66963fbaf457d720e2b0c4f4_W_Pole.png"
            loading="lazy"
            width="auto"
            sizes="(max-width: 1439px) 100vw, (max-width: 1919px) 1152.0859375px, 1020px"
            alt="Pôle automobile Ewigo"
            srcSet="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66963fbaf457d720e2b0c4f4_W_Pole-p-500.png 500w, https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66963fbaf457d720e2b0c4f4_W_Pole-p-800.png 800w, https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66963fbaf457d720e2b0c4f4_W_Pole.png 968w"
            className="image-28"
          />
        </div>
      </div>
    </section>

    <section className="logo-cloud">
    <img
        src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66586fc6570754def706d509_federationfrancaisefranchise.png"
        loading="lazy"
        alt="Logo Fédération Française de la Franchise"
        className="image-4 logofff"
    />
    <img
        src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665870600a6d944ac7109905_indicateurdelafranchise.png"
        loading="lazy"
        alt="Logo L'indicateur de la Franchise"
        className="image-5 logoindicateur"
    />
    <img
        src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665870a98a62045710e4b907_accelerateurfrancilienbpifrance.png"
        loading="lazy"
        alt="Logo Accélérateur Francilien"
        className="image-11 logoaccelerateur"
    />
    <img
        src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66587113251ce0ab7713b2f0_avisgoogleewigo.png"
        loading="lazy"
        alt="Logo Avis Clients Google"
        className="logogoogle"
    />
    <img
        src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66587113d8a6467b91587c4b_meilleurchainedemagasinsdelannee.png"
        loading="lazy"
        alt="Logo Meilleure Chaîne de Magasins de l'Année"
        className="image-13"
    />
    <img
        src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665871130c2a32059b83fdc5_meilleurecommercantdelannee.png"
        loading="lazy"
        alt="Logo Meilleur E-commerçant de l'Année"
        className="image-13"
    />
    <img
        src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66587113d600c08d3265fe58_meilleurfranchisedelannee.png"
        loading="lazy"
        alt="Logo Meilleure Franchise de l'Année"
        className="image-13"
    />
</section>



        <section className="pourquoi-rejoindre-ewigo">
            <div className="centrer">
                <div className="chapeau">Pourquoi rejoindre Ewigo ?</div>
                <h2 className="heading-3">Numéro 1 de la franchise automobile</h2>
                <p className="text-block-5">
                    Ewigo, grâce à sa valeur ajoutée, joue le rôle d'intermédiaire dans les transactions
                    de véhicules d'occasion entre particuliers.
                </p>
            </div>
            <div className="grid-2">
                {features.map((feature, index) => (
                    <div key={index} className="div-block-20">
                        <div className="div-block-19">
                            <img src={feature.imgSrc} alt={feature.title} width="32" loading="lazy" />
                            <div className="text-block-6">{feature.title}</div>
                        </div>
                        <div>
                            <p className="text-block-7">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="columns w-row">
                <div className="w-col w-col-6">
                    <div className="div-block-93">
                        <h2 className="heading-14 left">
                            <strong>Et si vous viviez 3 min de votre prochaine vie ?</strong>
                        </h2>
                        <div className="div-block-94">
                            <p className="description-3">
                                Pour vous, futurs porteurs de projets, c’est la chance de pouvoir
                                vous appuyer sur près de 200 parcours de vie et d'expériences différentes.
                                Une dynamique forte vous attend et saura vous propulser dans votre futur parcours entrepreneurial.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="column-3 w-col w-col-6">
                    <div className="w-embed-youtubevideo youtube-2" style={{ paddingTop: "56.17021276595745%" }}>
                        <iframe
                            src="https://www.youtube.com/embed/AZvzHC7WlAs?rel=0&amp;controls=1&amp;autoplay=0&amp;mute=0&amp;start=0"
                            frameBorder="0"
                            style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%" }}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="Vivez ou revivez la convention 2024 : 10 ans d'Ewigo"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>

        <section className="notre-vision-de-demain">
            <div className="grid-3">
                <div className="div-block-22">
                    <div className="chapeau">Notre vision de demain</div>
                    <h2 className="heading-3 left">Participez au déploiement de pôles automobiles</h2>
                    <div className="div-block-32">
                        <p className="description">
                            Notre stratégie repose sur la création d'une structure flexible permettant le
                            déploiement de nombreuses activités connexes à notre cœur de métier. En combinant expertise et
                            créativité, nous anticipons un positionnement unique sur le marché, offrant des services
                            novateurs et répondant aux besoins changeants des clients dans le domaine de l'automobile.
                        </p>
                    </div>
                </div>
                <figure
                    className="div-block-21 anim1"
                    style={{
                        opacity: 1,
                        transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d"
                    }}
                ></figure>
            </div>
        </section>

        <section className="nos-options-de-franchise">
            <div className="div-block-18 centrer">
                <div className="chapeau white">Choisissez la franchise adaptée</div>
                <h2 className="heading-3 white">Nos options de franchise</h2>
            </div>
            <div className="grid-4">
                {/* Option Agence */}
                <div
                    className="div-block-23"
                    style={{
                        opacity: 1,
                        transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                    }}
                >
                    <img
                        src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6745a75268134bc178aeee5b_AgenceEwigo.png"
                        alt="Agence Ewigo"
                        className="image-7"
                    />
                    <div className="div-block-24">
                        <h6 className="text-block-8">Agence</h6>
                        <p className="text-block-9">Apport personnel de 30 000 €</p>
                        <div className="div-block-25">
                            <img
                                src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6658797ec2b812757e530b20_check.png"
                                alt=""
                                width="24"
                                height="24"
                            />
                            <p className="text-block-10">Faible coût d’implantation</p>
                        </div>
                        <div className="div-block-25">
                            <img
                                src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6658797ec2b812757e530b20_check.png"
                                alt=""
                                width="24"
                                height="24"
                            />
                            <p className="text-block-10">Faible coût d’exploitation</p>
                        </div>
                        <div className="div-block-26">
                            <div className="div-block-25">
                                <img
                                    src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665879b9bbe39ffc1396510e_cross.png"
                                    alt=""
                                    width="24"
                                    height="24"
                                />
                                <p className="text-block-10">Nombre de commerciaux limité à 3</p>
                            </div>
                            <div className="div-block-25">
                                <img
                                    src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665879b9bbe39ffc1396510e_cross.png"
                                    alt=""
                                    width="24"
                                    height="24"
                                />
                                <p className="text-block-10">Places de stationnement pour les photos</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Option Concession */}
                <div
                    className="div-block-23 concession"
                    style={{
                        opacity: 1,
                        transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                    }}
                >
                    <img
                        src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6745a134be46c5d5a6059ce6_ConcessionAutomobileEwigo.png"
                        alt="Concession automobile ewigo"
                        className="image-7"
                    />
                    <div className="div-block-24">
                        <h6 className="text-block-8">Concession automobile</h6>
                        <p className="text-block-9">Apport personnel de 50 000 €</p>
                        <div className="div-block-25">
                            <img
                                src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6658797ec2b812757e530b20_check.png"
                                alt=""
                                width="24"
                                height="24"
                            />
                            <p className="text-block-10">Chiffre d’affaire plus élevé</p>
                        </div>
                        <div className="div-block-25">
                            <img
                                src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6658797ec2b812757e530b20_check.png"
                                alt=""
                                width="24"
                                height="24"
                            />
                            <p className="text-block-10">Visibilité maximale</p>
                        </div>
                        <div className="div-block-25">
                            <img
                                src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6658797ec2b812757e530b20_check.png"
                                alt=""
                                width="24"
                                height="24"
                            />
                            <p className="text-block-10">Showroom intérieur</p>
                        </div>
                        <div className="div-block-25">
                            <img
                                src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6658797ec2b812757e530b20_check.png"
                                alt=""
                                width="24"
                                height="24"
                            />
                            <p className="text-block-10">Nombre de commerciaux illimité</p>
                        </div>
                        <div className="div-block-26">
                            <div className="div-block-25">
                                <img
                                    src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665879b9bbe39ffc1396510e_cross.png"
                                    alt=""
                                    width="24"
                                    height="24"
                                />
                                <p className="text-block-10">Coût d’implantation plus élevé</p>
                            </div>
                            <div className="div-block-25">
                                <img
                                    src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665879b9bbe39ffc1396510e_cross.png"
                                    alt=""
                                    width="24"
                                    height="24"
                                />
                                <p className="text-block-10">Coût d’exploitation plus élevé que les agences</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Option Pôle automobile */}
                <div
                    className="div-block-23"
                    style={{
                        opacity: 1,
                        transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                    }}
                >
                    <img
                        src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66951bcdc9b6ce2c0a27eaa3_pOLE-AUTO-SITE.png"
                        alt="Pole automobile ewigo"
                        className="image-7"
                    />
                    <div className="div-block-24">
                        <h6 className="text-block-8">Pôle automobile</h6>
                        <p className="text-block-9">Apport personnel de 65 000 €</p>
                        <div className="div-block-25">
                            <img
                                src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6658797ec2b812757e530b20_check.png"
                                alt=""
                                width="24"
                                height="24"
                            />
                            <p className="text-block-10">Une surface similaire au format concession</p>
                        </div>
                        <div className="div-block-25">
                            <img
                                src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6658797ec2b812757e530b20_check.png"
                                alt=""
                                width="24"
                                height="24"
                            />
                            <p className="text-block-10">Nombre de commerciaux élevé</p>
                        </div>
                        <div className="div-block-25">
                            <img
                                src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6658797ec2b812757e530b20_check.png"
                                alt=""
                                width="24"
                                height="24"
                            />
                            <p className="text-block-10">Chiffre d'affaires plus élevé</p>
                        </div>
                        <div className="div-block-25">
                            <img
                                src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6658797ec2b812757e530b20_check.png"
                                alt=""
                                width="24"
                                height="24"
                            />
                            <p className="text-block-10">Synergie entre les différentes activités</p>
                        </div>
                        <div className="div-block-26">
                            <div className="div-block-25">
                                <img
                                    src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/665879b9bbe39ffc1396510e_cross.png"
                                    alt=""
                                    width="24"
                                    height="24"
                                />
                                <p className="text-block-10">Coût d'implantation plus élevé</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-block-27">
                <a href="#" className="button secondary mobile w-button">
                    J'ai une question
                </a>
                <a href="#" className="button primary w-button">
                    Parlez-nous de votre projet de franchise
                </a>
            </div>
        </section>

        <section className="un-r-seau-de-franchise-en-pleine-expansion">
            <div className="w-layout-grid grid-5">
                {/* Bloc gauche */}
                <div>
                    <div className="div-block-28">
                        <div className="chapeau">Un réseau de franchise en pleine expansion</div>
                        <h2 className="heading-3 left">Un concept performant</h2>
                    </div>
                    <p className="text-block-5 left">
                        Durant ces 3 dernières années, Ewigo a largement surperformé son marché.
                    </p>
                    <p className="description-2">
                        Cette formidable croissance, qui dure dans le temps, est le résultat de plusieurs éléments. En effet, Ewigo est un concept qui continue d’être adapté aux évolutions du marché, qui garde indéfectiblement une longueur d’avance sur son secteur et qui est composé de franchisés de qualité, animés par le challenge et la satisfaction client. 2024 promet d’être aussi prometteuse avec l’annonce de grandes nouveautés qui permettront toujours plus de performances !
                    </p>
                    <div className="div-block-29">
                        <img
                            src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6658739e04e34603b3ab3769_uneventetouteslestreizeminutes.png"
                            loading="lazy"
                            width="32"
                            alt=""
                        />
                        <div className="text-block-11">1 vente toutes les 13 minutes</div>
                    </div>
                </div>
                {/* Bloc droit */}
                <div id="w-node-_78b4f258-4776-8976-656a-8e5a093cf193-272d86ed">
                    <div className="div-block-30">
                        <img
                            src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6643863bea6b0e0825fcb1d0_Group%2018322.webp"
                            loading="lazy"
                            width="32"
                            alt=""
                        />
                        <p className="text-block-12">
                            Notre réseau a contribué à augmenter le chiffre d’affaires de nos franchisés entre 2020 et 2023 de plus de 50 %
                        </p>
                    </div>
                    <img
                        src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/673c4a041c0c93b054cb9da4_Graphiques_T3_2024.png"
                        loading="lazy"
                        sizes="100vw"
                        srcSet="
                            https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/673c4a041c0c93b054cb9da4_Graphiques_T3_2024-p-500.png 500w,
                            https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/673c4a041c0c93b054cb9da4_Graphiques_T3_2024-p-800.png 800w,
                            https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/673c4a041c0c93b054cb9da4_Graphiques_T3_2024.png 874w
                        "
                        alt="Graphique marché Ewigo"
                        className="image-15"
                    />
                </div>
            </div>
        </section>
       
        <section className="les-medias-parlent-de-nous">
      <div className="div-block-28">
        <h2 className="heading-3">Les médias parlent de nous</h2>
      </div>
      <div className="div-block-31">
        {mediaData.map((media, index) => (
          <img
            key={index}
            src={media.src}
            alt={media.alt}
            height={media.height}
            className={media.className}
            loading="lazy"
            srcSet={media.srcSet || ""}
            sizes={media.sizes || ""}
          />
        ))}
      </div>
    </section>
    <section className="ewigo-vous-accompagne">
      <div className="div-block-18">
        <div className="chapeau white">Ewigo vous accompagne</div>
        <h2 className="heading-3 white">Avant l’ouverture</h2>
      </div>
      <section className="sec background-color-lightgrey">
        <div className="container-large">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div className="card w-slide" key={slide.id}>
                <div className="box _1">
                  <div className="div_1">
                    <div className="div_1-2">
                      <img src={slide.imgSrc} alt={slide.title} className="icon" />
                      <div className="text-wrapper">
                        <div className="text-block-37">{`0${index + 1}`}</div>
                        <div className="text-block-36">{slide.title}</div>
                        <p className="paragraph">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </section>

 <section className="tout-au-long-du-projet">
      <div className="w-layout-grid grid-6">
        <div className="div-block-bg-white">
          <div className="div-block-35">
            <div className="chapeau">À vos côtés, pour votre succès</div>
            <h2 className="heading-3 left">Tout au long du projet</h2>
          </div>
          {data.map((item, index) => (
            <div className={`div-block-33 ${index === data.length - 1 ? "sans-marge" : ""}`} key={index}>
              <img src={item.image} alt={item.title} width="32" loading="lazy" />
              <div className="div-block-34">
                <p className="text-block-13">{item.title}</p>
                <p className="text-block-14">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div id="w-node-_81859c66-6cd2-5f66-c5eb-300660c12202-272d86ed" className="div-block-36"></div>
      </div>
    </section>

    <section className="vous-avez-le-profil">
      <div className="div-block-37">
        <div className="div-block-18 centrer">
          <div className="chapeau white center">Rejoignez nos 500 ambassadeurs</div>
          <h2 className="heading-3 white">Vous avez le profil</h2>
          <p className="text-block-15">
            Le choix d’entreprendre en réseau permet d’accéder au statut de chef d’entreprise
            dans un cadre déjà structuré et de bénéficier d’un accompagnement de proximité
            pour la réussite de votre projet.
          </p>
        </div>
        <div className="w-layout-grid grid-7">
          {[
            {
              id: 1,
              src: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66587a6e4d80d712154b400b_dynamisme.png",
              alt: "Dynamisme",
              label: "Dynamisme",
            },
            {
              id: 2,
              src: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66587aa50b9ff0cabe805df8_fibrecommerciale.png",
              alt: "Fibre commerciale",
              label: "Fibre commerciale",
            },
            {
              id: 3,
              src: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66447100666a0456365de228_Rocket.webp",
              alt: "Envie d’entreprendre",
              label: "Envie d’entreprendre",
            },
            {
              id: 4,
              src: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66587ac77bdeb91dbc7bbc51_espritrelationnel.png",
              alt: "Bon relationnel et esprit collectif",
              label: "Bon relationnel et esprit collectif",
            },
            {
              id: 5,
              src: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66587ae46315d47b59d4f165_animationequipe.png",
              alt: "Volonté d’animer une équipe",
              label: "Volonté d’animer une équipe",
            },
            {
              id: 6,
              src: "https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/66587b0c062854a60994be93_automobile.png",
              alt: "Goût pour l’automobile",
              label: "Goût pour l’automobile",
            },
          ].map(({ id, src, alt, label }) => (
            <div key={id} className="div-block-38">
              <img src={src} alt={alt} loading="lazy" width="40" />
              <div className="text-block-16">{label}</div>
            </div>
          ))}
        </div>
        <div className="div-block-27">
          <a
            href="#"
            className="button secondary mobile w-button"
            data-w-id="5675bda4-da2a-6936-732a-09d5f7dc4ac4"
          >
            J'ai une question
          </a>
          <a
            href="#"
            className="button primary w-button"
            data-w-id="5675bda4-da2a-6936-732a-09d5f7dc4ac6"
          >
            Je souhaite être accompagné
          </a>
        </div>
      </div>
    </section>

    <section className="section-5">
      <div className="div-block-18 centrer">
        <div className="chapeau white center">Des coûts étudiés et équilibrés</div>
        <h2 className="heading-3 white mobile">
          Découvrez le modèle qui <br />
          vous convient
        </h2>
      </div>
      <div className="w-layout-grid grid-8">
        {franchiseOptions.map((option, index) => (
          <FranchiseOption key={index} {...option} />
        ))}
      </div>
      <div className="div-block-27">
        <a href="#" className="button secondary mobile w-button">
          J'ai une question
        </a>
        <a href="#" className="button primary w-button">
          Je souhaite être accompagné
        </a>
      </div>
      <div>
        <p className="text-block-23"></p>
        <p className="text-block-23 _8px">
          *(1) 40€/véhicule commercialisé avec un min. 900 €/mois la première
          année puis 1 200€/mois
          <br />
          **(2) 250 €/mois la première année puis 350€/mois
          <br />
          ***(3) EWIGLASS : 5% du CA et 200€ redevance communication
        </p>
      </div>
    </section>

    <section className="testimonials-section">
    <div className="section-header">
      <h2 className="section-title">Témoignages de nos franchisés</h2>
    </div>
    <div className="testimonials-grid">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} {...testimonial} />
      ))}
    </div>
    <a
      href="https://mafranchise.co/ewigo"
      target="_blank"
      rel="noopener noreferrer"
      className="view-all-link"
    >
      <div className="view-all-text">Voir tous les témoignages de nos franchisés Ewigo</div>
      <img
        src="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/6644a77be531a53220ad9fd2_External_Link.webp"
        alt="External link icon"
        className="external-link-icon"
      />
    </a>
  </section>

  <section className="pillars-section">
      <div className="pillars-header centrer">
        <div className="chapeau center">Un positionnement différenciant et reconnu</div>
        <h2 className="heading-3">Nos 3 piliers stratégiques</h2>
      </div>
      <div className="pillars-grid">
        {/* Pilier 1 - L'excellence */}
        <div className="pillar-card">
          <h5 className="pillar-title">L’excellence</h5>
          <div className="pillar-content">
            <p>
              Avec nos nombreux trophées et une note Google de 4,8, notre engagement envers l'excellence est dans notre ADN.
            </p>
            <p>
              En ouvrant une franchise Ewigo, vous devenez partie intégrante d'une marque reconnue pour son
              professionnalisme, son expertise et sa transparence. Nous vous offrons non seulement un modèle
              d'affaires solide, mais également un soutien continu pour assurer votre succès.
            </p>
          </div>
        </div>

        {/* Pilier 2 - La solidarité */}
        <div className="pillar-card">
          <h6 className="pillar-title">La solidarité</h6>
          <div className="pillar-content">
            <p>
              Chaque membre, qu'il soit franchisé ou formateur, s'implique activement pour le succès de tous.
              Les commissions, portées par des franchisés, et notre comité stratégique témoignent de notre engagement collectif.
            </p>
            <p>
              Les décisions sont prises de manière collégiale, reflétant notre esprit de collaboration et d'entraide.
            </p>
          </div>
        </div>

        {/* Pilier 3 - L'innovation */}
        <div className="pillar-card">
          <h6 className="pillar-title">L'innovation</h6>
          <div className="pillar-content">
            <p>
              Notre label "fiable ou remboursé" en est un exemple concret : en identifiant et valorisant les véhicules
              jugés les plus sûrs au moment de la vente, nous assurons à nos clients une tranquillité d'esprit inégalée en France.
            </p>
            <p>
              De même, notre création du pôle automobile, qui permet d'ouvrir deux franchises en un seul investissement
              avec Ewigo et Ewiglass, témoigne de notre volonté constante d'innover et d'offrir des opportunités entrepreneuriales uniques.
            </p>
          </div>
        </div>
      </div>
      {/* Boutons */}
      <div className="pillars-actions">
        <a href="#" className="button secondary mobile">
          J'ai une question
        </a>
        <a href="#" className="button primary">
          Je souhaite ouvrir ma concession
        </a>
      </div>
    </section>

    </div>
  )
}

export default Franchise
