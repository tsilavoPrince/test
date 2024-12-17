import React from 'react'
import { Link } from 'react-router-dom';


const faqs = [
    {
      question: "À qui appartient le véhicule ?",
      answer:
        "Dans la majorité des cas, nous ne rachetons pas le véhicule. Cela signifie qu’il appartient toujours au vendeur et qu’il se situe chez ce dernier ou en dépôt-vente au sein de nos points de vente. Contactez-nous pour prendre rendez-vous et avoir plus d’informations sur notre fonctionnement.",
    },
    {
      question: "D'où viennent les véhicules en vente chez Ewigo ?",
      answer:
        "Les véhicules appartiennent à des particuliers et peuvent se trouver dans tous nos points de vente en France et dans les DOM-TOM. Rassurez-vous, nous avons la possibilité de vous livrer ces véhicules inspectés et garantis sur toute la métropole française : la distance entre vous et le véhicule n’est plus un problème.",
    },
    {
      question: "Sommes-nous des concessions ?",
      answer:
        "Ewigo est un réseau d’agences automobiles. Nos points de vente ont pour certains la même configuration qu’une concession, le fonctionnement est cependant légèrement différent. En effet, nous ne sommes pas propriétaires des véhicules, nous sommes le tiers de confiance entre un acheteur et un vendeur de véhicule d’occasion.",
    },
    {
      question: "Où nous trouver ?",
      answer:
        "Nous sommes un réseau de 100 points de vente répartis dans toute la France, mais également dans les DOM TOM ! Cliquez ici pour trouver le point de vente le plus proche de chez vous.",
    },
    {
      question: "Quelles sont les mesures relatives au Coronavirus (Covid-19) ?",
      answer: (
        <>
          Nos points de vente vous accueillent dans le respect des règles
          sanitaires :
          <ul>
            <li>Gel hydro-alcoolique mis à disposition</li>
            <li>Port du masque obligatoire</li>
            <li>Respect des gestes barrières</li>
            <li>Désinfection du mobilier</li>
          </ul>
          <p>
            Il est également possible de réserver votre voiture à distance et
            de vous la faire livrer directement à votre domicile avec l’ensemble
            des mesures d’hygiène et de désinfection mises en place. Vous pouvez
            continuer d’acheter ou de vendre en toute sérénité.
          </p>
        </>
      ),
    },
    {
      question: "Puis-je acheter mon véhicule à distance ?",
      answer:
        "Bien sûr, avec Ewigo, vous avez la possibilité de voir votre véhicule avant de l’acheter comme si vous étiez face à lui. En effet, chacune de nos annonces dispose d’un reportage photo très complet du véhicule. Nous y indiquons également l’ensemble des accros présents sur le véhicule s’il y en a et vous pouvez retrouver l’historique d’entretien du véhicule également précisé en détail.",
    },
    {
      question: "Comment Ewigo fait pour éviter les arnaques ?",
      answer:
        "L’ensemble de nos véhicules bénéficient d’un historique d’entretien clair et limpide depuis l’achat du véhicule. Nous sécurisons également l’ensemble du paiement en prenant en charge la transaction via un compte séquestre, comme chez le notaire.",
    },
    {
      question: "Les véhicules en vente chez Ewigo sont-ils contrôlés ?",
      answer:
        "Oui, l’ensemble de nos véhicules doivent respecter notre charte de qualité : un historique d’entretien complet, un véhicule de moins de 10 ans et 120.000 kilomètres.",
    },
    {
      question: "Puis-je continuer de vendre mon véhicule par moi-même ?",
      answer:
        "Oui bien sûr, la seule chose que nous vous demandons est de nous laisser la main sur les différentes plateformes de parution, afin de diffuser l’annonce de votre véhicule en tant que professionnel et lui apporter une grande visibilité.",
    },
  ];

  const faqData = [
    {
        title: "Quels sont les critères de qualité Ewigo ?",
        content: "Moins de 120 000 km, moins de 10 ans, historique d’entretien limpide."
    },
    {
        title: "Comment savoir si un véhicule est toujours disponible ?",
        content: `Tant que le véhicule n’est pas renseigné en étant réservé, il est généralement disponible.
        Afin de vous assurer au maximum de la disponibilité d’un véhicule, le plus simple est de contacter l’agence 
        dans laquelle se trouve le véhicule, le conseiller Ewigo vous indiquera toutes les informations relatives au véhicule que vous souhaitez connaître.`
    },
    {
        title: "Puis-je bénéficier d’un financement sur une voiture ?",
        content: `Bien sûr, sur chaque annonce de véhicule vous retrouverez un simulateur vous indiquant les mensualités en fonction de votre apport et de la durée. 
        En 15min, suite aux renseignements que vous indiquez, vous recevrez un accord de principe.`
    },
    {
        title: "Je n'ai pas trouvé ce que je cherche sur Ewigo.com, avez-vous une solution ?",
        content: `Bien sûr ! Si vous n’avez pas trouvé le véhicule que vous recherchiez, vous pouvez adresser une demande avec les critères spécifiques (marque, modèle, carburant, année),
        les ambassadeurs Ewigo seront ravis de vous accompagner ! Pour ce faire, nous vous conseillons de contacter le point de vente le plus proche de chez vous.`
    },
    {
        title: "Je souhaite faire reprendre mon véhicule, est-ce possible ?",
        content: "Oui. Nous pouvons effectuer la reprise de votre ancien véhicule. Pour cela, il vous suffit d’en informer votre conseiller Ewigo le plus proche de chez vous dès que possible."
    },
    {
        title: "Comment obtenir ma carte grise ?",
        content: "Vous n’avez rien à faire ! En effet, pour tout achat de véhicule, votre conseiller Ewigo s’occupe de toutes les démarches administratives. Vous recevez ensuite la carte grise directement chez vous sans aucune action de votre part."
    },
    {
        title: "Qu’est-ce qu’un pack auto ?",
        content: `Chez Ewigo, pour tout achat de véhicule, vous bénéficiez d’un pack auto au choix.
        Vous pouvez opter pour l’un de nos trois packs, Clé en main, Sérénité ou Prestige. 
        Ces packs contiennent des services optionnels dans le but de vous assurer une expérience optimale dans l’achat de votre véhicule.`
    },
    {
        title: "Le pack clé en main, c’est quoi ?",
        content: `Le pack clé en main comprend :
        - Nettoyage First
        - ¼ du réservoir d’essence minimum
        - La prestation de courtage Carte grise
        - Une garantie Européenne Sécurité + de 6 mois offerte.`
    },
    {
        title: "Le pack Sérénité, c’est quoi ?",
        content: `Le pack sérénité regroupe :
        - Nettoyage Confort
        - ½ du réservoir d’essence minimum
        - La prestation de courtage carte gris
        - Une garantie Européenne Médium + de 6 mois offerte`
    },
    {
        title: "Le pack Prestige, c’est quoi ?",
        content: `Le pack prestige regroupe :
        - Nettoyage prestige
        - Le plein du réservoir d’essence
        - La prestation de courtage carte grise
        - Une garantie Européenne Médium + Opteven de 12 mois offerte
        - Une surprise vous attend !`
    }
];

const faqItems = [
    {
      title: "Vendre ma voiture avec Ewigo, c’est gratuit ?",
      details: (
        <>
          <p>
            Totalement. Vous n’avez rien à payer dans le cadre de la vente de
            votre véhicule, car nous nous rémunérons sur la valeur ajoutée que
            nous apportons en tant que professionnel dans le cadre de la vente
            de votre véhicule.
          </p>
          <p>
            Vous gagnez même du pouvoir d’achat ! En moyenne, nos clients
            vendent leurs voitures 15 à 20 % de plus que le prix de marché.
          </p>
        </>
      ),
    },
    {
      title: "A qui sera vendu mon véhicule ?",
      details: (
        <>
          <p>
            Nous sommes le tiers de confiance entre des particuliers vendeurs et
            acheteurs de véhicules d’occasions. Nous sommes intermédiaires de
            vente, votre véhicule sera donc vendu à un particulier le plus
            généralement.
          </p>
        </>
      ),
    },
    {
      title: "Aurais-je un interlocuteur direct pendant la vente de mon véhicule ?",
      details: (
        <>
          <p>
            Bien sûr ! Votre conseiller Ewigo sera votre interlocuteur direct
            pour la vente de votre véhicule. Il vous contactera toutes les
            semaines afin de vous tenir informé de l’avancée de la situation.
            Vous pourrez bien évidemment le contacter pour toutes questions.
          </p>
        </>
      ),
    },
    {
      title: "Dois-je retirer mon annonce une fois que j'ai signé le mandat de vente ?",
      details: (
        <>
          <p>Oui, votre conseiller Ewigo s’occupe de tout !</p>
          <p>
            En effet, nous vous demandons de retirer votre annonce des
            plateformes une fois le mandat de vente signé. Vous n’avez donc plus
            rien à gérer dans le cadre de la vente de votre véhicule.
          </p>
        </>
      ),
    },
    {
      title: "Puis-je continuer de rouler une fois le mandat de vente signé ?",
      details: (
        <>
          <p>
            Bien sûr, vous restez le propriétaire du véhicule une fois le mandat
            de vente signé et pouvez très bien continuer d’utiliser votre
            véhicule !
          </p>
        </>
      ),
    },
    {
      title:
        "Que faire si l’état de mon véhicule a évolué suite à la signature du mandat ? (kilomètres, rayures…)",
      details: (
        <>
          <p>
            Votre conseiller Ewigo reste votre interlocuteur direct après la
            signature du mandat.
          </p>
          <p>
            En cas d’évolution de l’état du véhicule (kilomètres, rayures,
            accident…), il est donc important de le prévenir afin que l’annonce
            puisse être modifiée et que les potentiels acheteurs puissent en
            être informés.
          </p>
        </>
      ),
    },
    {
      title: "Quel est le délai moyen de vente d’une voiture avec Ewigo ?",
      details: (
        <>
          <p>
            Chez Ewigo, nous prenons en moyenne 26 jours pour vendre votre
            voiture ! Bien sûr, ce chiffre est une moyenne et peut évoluer en
            fonction des circonstances.
          </p>
        </>
      ),
    },
    {
      title: "Mon véhicule est hors-charte. Qu'est-ce que cela signifie ?",
      details: (
        <>
          <p>
            Si votre véhicule est défini comme « hors-charte », cela signifie
            qu’il ne répond pas aux critères d’éligibilité mis en place pour
            être vendu par Ewigo. Nos critères sont simples : votre véhicule
            doit avoir une date de première immatriculation de moins de dix ans,
            avoir moins de 120 000 kilomètres au compteur et un historique
            d’entretien limpide.
          </p>
          <p>
            Nous pouvons toutefois vous proposer une offre de reprise de votre
            véhicule. Contactez le point de vente le plus proche de chez vous
            pour prendre rendez-vous.
          </p>
        </>
      ),
    },
    {
      title: "Comment est calculé le prix de ma voiture ?",
      details: (
        <>
          <p>
            L’estimation de votre véhicule est réalisée en point de vente avec
            votre conseiller Ewigo. Ensemble, vous analysez le marché en temps
            réel et vous positionnez votre véhicule au juste prix du marché.
          </p>
          <p>
            Vous gagnez dès lors en moyenne 20 % sur le prix de votre véhicule.
          </p>
        </>
      ),
    },
    {
      title: "Regardez-vous mon véhicule pour l’estimation ?",
      details: (
        <>
          <p>
            Oui, lors du rendez-vous, une inspection est effectuée sur le
            véhicule reprenant de nombreux critères tant extérieur qu’intérieur
            avant l’estimation du prix de marché de votre véhicule.
          </p>
        </>
      ),
    },
    {
      title: "Que regardez-vous sur mon véhicule ?",
      details: (
        <>
          <p>
            Lors du tour du véhicule, l’ambassadeur Ewigo vérifie l’état du
            véhicule selon les points de contrôle suivants :
          </p>
          <ul>
            <li>Extérieur</li>
            <li>Intérieur</li>
            <li>Origine du véhicule</li>
            <li>Historique d’entretien</li>
          </ul>
        </>
      ),
    },
    {
      title: "Quels sont les avantages à faire estimer mon véhicule avec Ewigo ?",
      details: (
        <>
          <p>
            En estimant votre véhicule avec Ewigo, vous obtenez le prix le plus
            juste sur le marché de l’occasion entre particuliers.
          </p>
          <p>
            Vous bénéficiez également de la force de nos 300 ambassadeurs
            répartis sur nos 100 points de vente en France.
          </p>
        </>
      ),
    },
    {
      title: "Quelle est la différence avec une reprise ?",
      details: (
        <>
          <p>
            La reprise a l’avantage d’être immédiate, mais elle sera forcément
            moins valorisante financièrement qu’une intermédiation puisqu’il
            s’agit d’une reprise cash immédiate.
          </p>
        </>
      ),
    },
    {
      title: "Utilisez-vous la côte Argus ?",
      details: (
        <>
          <p>
            Non, la côte Argus n’est pas utilisée dans le cadre de l’estimation
            de votre véhicule. Chez Ewigo, vous bénéficiez d’une estimation de
            marché réelle et en direct avec votre conseiller Ewigo.
          </p>
        </>
      ),
    },
    {
      title: "Utilisez-vous la Côte Centrale ?",
      details: (
        <>
          <p>
            Non, la Côte La Centrale n’est pas prise en compte dans le cadre de
            l’estimation de votre véhicule. L’estimation est réalisée avec votre
            conseiller Ewigo directement.
          </p>
        </>
      ),
    },
  ];

  const faQItems = [
    {
      title: "J'ai besoin d'un financement pour payer mon nouveau véhicule. Proposez-vous une solution ?",
      details: (
        <>
          <p>
            Bien sûr ! Nous vous proposons plusieurs solutions de crédits. Pour
            réaliser une simulation, rendez-vous sur la fiche du véhicule de
            votre choix et effectuez votre simulation de financement. Vous
            obtiendrez une réponse de principe immédiate. Pensez à en parler à
            votre conseiller Ewigo, il peut vous aider dans cette démarche.
          </p>
        </>
      ),
    },
    {
      title: "Dans le cadre d'une vente à distance, puis-je bénéficier d'un financement ?",
      details: (
        <>
          <p>
            Bien entendu, le crédit peut être demandé lors d’une vente à
            distance. Lors de votre demande de prêt, pensez également à
            contacter le conseiller de l’agence qui vous donnera le coût de la
            livraison.
          </p>
        </>
      ),
    },
    {
      title: "Puis-je simuler un financement pour une voiture ?",
      details: (
        <>
          <p>
            Oui, il vous suffit de vous rendre sur n’importe quelle annonce de
            notre site internet, vous trouverez un encadré qui vous permettra de
            simuler un financement selon la durée et le montant de votre apport.
          </p>
        </>
      ),
    },
    {
      title: "Comment Ewigo m’aide dans ma démarche de financement ?",
      details: (
        <>
          <p>
            Votre conseiller Ewigo reste bien évidemment disponible pour vous
            accompagner dans toutes vos démarches de financement.
          </p>
        </>
      ),
    },
    {
      title: "Quel est le type de financement proposé ?",
      details: (
        <>
          <p>
            Le type de financement proposé par Ewigo est un crédit à la
            consommation.
          </p>
        </>
      ),
    },
    {
      title: "Qu'est ce qu'un crédit à la consommation ?",
      details: (
        <>
          <p>
            Le crédit à la consommation est un contrat entre les emprunteurs et
            un organisme financier. Il permet d’obtenir rapidement des fonds
            notamment pour un prêt affecté tel que pour l’achat d’une voiture
            d’occasion.
          </p>
          <p>
            <b>Bon à savoir :</b> Un crédit vous engage et doit être remboursé.
            Vérifiez vos capacités de remboursement avant de vous engager.
          </p>
        </>
      ),
    },
  ];

  const FaqItems = [
    {
      title: "Comment se passe la livraison d'un véhicule avec Ewigo ?",
      details: (
        <>
          <p>
            Après vérification des fonds versés sur le compte séquestre, le
            véhicule peut être livré sur l’ensemble de la Métropole.
          </p>
          <p>
            Nous travaillons avec des chauffeurs professionnels qui vous
            livreront votre nouvelle voiture d’occasion. Ce sont ces
            professionnels qui récupèrent le véhicule au sein de notre point de
            vente et le livrent jusqu’au lieu de votre choix : domicile, lieu de
            travail ou autre. L’ensemble des documents vous sont dès lors
            transmis et une prise en main du véhicule est systématiquement
            effectuée.
          </p>
        </>
      ),
    },
    {
      title: "Où puis-je faire livrer mon véhicule ?",
      details: (
        <>
          <p>
            Avec Ewigo, vous avez le choix pour la livraison de votre véhicule !
            Vous pouvez opter pour une livraison dans le point de vente le plus
            proche de chez vous, ou bien directement à votre domicile ou même
            sur votre lieu de travail.
          </p>
        </>
      ),
    },
    {
      title: "Quel est le délai de livraison pour une voiture ?",
      details: (
        <>
          <p>
            Une fois les fonds déposés sur le compte séquestre, le véhicule peut
            être livré en 48 heures. Votre conseiller Ewigo fera son maximum
            pour répondre au mieux à vos attentes.
          </p>
        </>
      ),
    },
    {
      title: "Quel est le tarif de la livraison d’une voiture ?",
      details: (
        <>
          <p>
            Le tarif pour vous faire livrer un véhicule dépend de la distance à
            parcourir. Vous pouvez bien évidemment en parler à votre conseiller
            Ewigo qui pourra vous indiquer le tarif exact dans le cadre d’une
            livraison de véhicule.
          </p>
        </>
      ),
    },
  ];

  const faqI = [
    {
      title: "Pourquoi tous les véhicules ne sont pas éligibles au label fiable ou remboursé ?",
      details: (
        <p>
          Pour être éligible, le véhicule doit avoir moins de 120 000 km, avoir
          moins de 10 ans et une valeur de vente inférieure à 60 000€.
        </p>
      ),
    },
    {
      title: "À quel moment mon véhicule est considéré non fiable ?",
      details: <p>Un véhicule réputé non fiable, c’est un véhicule ayant subi deux pannes complètes.</p>,
    },
    {
      title: "Qu'est ce qu'une panne complète ?",
      details: (
        <>
          <p>
            Une panne complète, c’est une panne mécanique réunissant les 3
            critères suivants :
          </p>
          <ul>
            <li>Immobilisation de votre véhicule chez un professionnel de l’automobile de plus de 72h.</li>
            <li>Une panne mécanique, nécessitant plus de 8 heures d’intervention suivant les barèmes constructeurs.</li>
            <li>Une panne non prise en charge par le programme de garantie souscrit.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Que se passe-t-il si mon véhicule est non fiable ?",
      details: (
        <p>
          Un remboursement de l’intégralité du prix d’achat de votre véhicule hors prix de la carte grise et d’éventuels services additionnels. Le remboursement sera sous réserve de restituer le véhicule dans l’état identique au jour de l’achat.
        </p>
      ),
    },
  ];

  const faq = [
    {
      title: "Qu’est-ce que la garantie incluse ?",
      details: (
        <>
          <p>
            Avec Ewigo, vous bénéficiez d’une garantie mécanique Mutuaide « Essentielle pro » de minimum 6 mois incluse pour l’achat d’un véhicule, totalement sans frais pour vous.
          </p>
          <p>
            La garantie incluse Mutuaide « Essentielle pro » couvre les éléments essentiels du véhicule, à savoir :
          </p>
          <ul>
            <li>moteur</li>
            <li>boîte de vitesse</li>
            <li>pont</li>
            <li>turbo</li>
            <li>système de freinage</li>
            <li>système de direction</li>
            <li>système de transmission</li>
            <li>composants électriques</li>
          </ul>
        </>
      ),
    },
    {
      title: "Les voitures en vente chez Ewigo sont-elles toutes garanties ?",
      details: <p>Oui ! Vous bénéficiez de la garantie incluse de 6 mois minimum pour toutes les voitures en vente chez Ewigo. Des extensions de garantie sont également présentes si vous souhaitez garantir davantage votre véhicule en termes de couverture et de durée.</p>,
    },
    {
      title: "La garantie incluse est-elle payante ?",
      details: <p>Non, la garantie incluse Mutuaide est entièrement prise en charge par Ewigo.</p>,
    },
    {
      title: "Puis-je bénéficier d’une extension de garantie ?",
      details: (
        <>
          <p>
            Bien sûr ! En passant par nos services, vous pouvez bénéficier d’extensions de garantie Mutuaide allant de 12 à 60 mois.
          </p>
          <p>
            Votre conseiller Ewigo vous indiquera toutes les informations relatives aux extensions de garantie.
          </p>
        </>
      ),
    },
    {
      title: "Qui est notre partenaire pour les garanties ?",
      details: <p>Pour les garanties mécaniques des véhicules que nous proposons, nous collaborons avec Mutuaide, filiale de Groupama, reconnue aujourd’hui comme un des acteurs majeurs de la Garantie Panne Mécanique et de l’Assistance en France et en Europe.</p>,
    },
    {
      title: "En cas de panne sur ma voiture, qui dois-je contacter ?",
      details: <p>Vous pouvez directement contacter A.M.S sur le numéro présent sur votre contrat de garantie.</p>,
    },
  ];

  const faqItem = [
    {
      title: "Comment se passe le paiement avec Ewigo ?",
      details: (
        <p>
          Payer avec Ewigo, c’est 100% sécurisé puisque nous vérifions l’identité et la fiabilité de tous nos clients en passant par un compte séquestre. En effet, nous travaillons avec un partenaire agréé à la Banque de France. Vous pouvez payer ou recevoir de l’argent sur votre compte de manière totalement sécurisée.
        </p>
      ),
    },
    {
      title: "Le paiement avec Ewigo est-il entièrement sécurisé ?",
      details: <p>Oui, le paiement est 100% sécurisé chez Ewigo. En effet, nous passons par un compte séquestre, comme chez le notaire.</p>,
    },
    {
      title: "Pourquoi je ne peux pas payer par chèque de banque avec Ewigo ?",
      details: (
        <p>
          Le chèque de banque peut sembler être la meilleure option concernant la garantie du paiement. Mais puisqu’il s’agit d’un support papier, il peut être facilement détourné. De nombreux cas d’arnaques ont pu être relayés à ce sujet. C’est pourquoi Ewigo a décidé de sécuriser le paiement via un compte séquestre, comme chez le notaire. Cette transaction sécurisée est prise en charge à 100% par Ewigo.
        </p>
      ),
    },
    {
      title: "C'est quoi un compte séquestre ?",
      details: (
        <p>
          Un compte séquestre est un compte de dépôt de fonds sécurisé, comme chez le notaire. Une fois les fonds déposés sur le compte, la somme versée est rendue indisponible jusqu’à la confirmation ou non de la vente.
        </p>
      ),
    },
  ];



const Support = () => {
    return (

        
        <div>
            
{/* <link
       href="https://cdn.prod.website-files.com/660e522e73ed3f9b272d86d2/css/ewigo-franchise.webflow.69dca6889.css"
       rel="stylesheet" type="text/css"></link> */}
            <div className="content-blocks" >
            

            <section className="page-header-section full-view-header faq-header no-margin">
      <div
        className="image-block"
        style={{
          backgroundImage: "url('https://www.ewigo.com/wp-content/uploads/2021/09/Mask-Group-122.png')",
        }}
      ></div>
      <div className="container">
        <div className="content">
          <h1 className="h1 white anim fade right">FAQ</h1>
          <h4 className="h4 white anim fade right delay1">
            Les réponses à vos questions sont ici !
          </h4>
        </div>
        <div className="links-list anim fade up delay3">
      
          <a className="btn primary-btn" href="#general">Général</a>
          <a className="btn primary-btn" href="#achat">Achat</a>
          <a className="btn primary-btn" href="#vente">Vente</a>
          <a className="btn primary-btn" href="#financement">Financement</a>
          <a className="btn primary-btn" href="#livraison">Livraison</a>
          <a className="btn primary-btn" href="#fiableourembourse">Fiable ou remboursé</a>
          <a className="btn primary-btn" href="#garantie">Garantie</a>
          <a className="btn primary-btn" href="#paiement">Paiement</a>
          <Link to="/Support">
              <a >Support d'interention</a>
          </Link>

        </div>
       
      </div>
    </section>

   
    <section className="faq-block-section" id="general">
      <div className="container">
        <h2 className="h2 white anim fade right">
          <span>Général</span>
        </h2>
        <div className="list-block">
          {faqs.map((faq, index) => (
            <div key={index} className="list anim fade up">
              <div className="box-header">
                <p className="title">
                  <b>{faq.question}</b>
                </p>
              </div>
              <div className="box-detail">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="faq-block-section" id="achat">
            <div className="container">
                <h2 className="h2 white anim fade right"><span>Achat</span></h2>
                <div className="list-block">
                    {faqData.map((faq, index) => (
                        <div className="list anim fade up" key={index}>
                            <div className="box-header">
                                <p className="title"><b>{faq.title}</b></p>
                            </div>
                            <div className="box-detail">
                                <p>{faq.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="faq-block-section" id="vente">
      <div className="container">
        <h2 className="h2 white anim fade right">
          <span>Vente</span>
        </h2>
        <div className="list-block">
          {faqItems.map((item, index) => (
            <div className="list anim fade up" key={index}>
              <div className="box-header">
                <p className="title">
                  <b>{item.title}</b>
                </p>
              </div>
              <div className="box-detail">{item.details}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="faq-block-section" id="financement">
      <div className="container">
        <h2 className="h2 white anim fade right">
          <span>Financement</span>
        </h2>
        <div className="list-block">
          {faQItems.map((item, index) => (
            <div className="list anim fade up" key={index}>
              <div className="box-header">
                <p className="title">
                  <b>{item.title}</b>
                </p>
              </div>
              <div className="box-detail">{item.details}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="faq-block-section" id="livraison">
      <div className="container">
        <h2 className="h2 white anim fade right">
          <span>Livraison</span>
        </h2>
        <div className="list-block">
          {FaqItems.map((item, index) => (
            <div className="list anim fade up" key={index}>
              <div className="box-header">
                <p className="title">
                  <b>{item.title}</b>
                </p>
              </div>
              <div className="box-detail">{item.details}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="faq-block-section" id="fiableourembourse">
      <div className="container">
        <h2 className="h2 white anim fade right">
          <span>Fiable ou remboursé</span>
        </h2>
        <div className="list-block">
          {faqI.map((item, index) => (
            <div className="list anim fade up" key={index}>
              <div className="box-header">
                <p className="title">
                  <b>{item.title}</b>
                </p>
              </div>
              <div className="box-detail">{item.details}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="faq-block-section" id="garantie">
      <div className="container">
        <h2 className="h2 white anim fade right">
          <span>Garantie</span>
        </h2>
        <div className="list-block">
          {faq.map((item, index) => (
            <div className="list anim fade up" key={index}>
              <div className="box-header">
                <p className="title">
                  <b>{item.title}</b>
                </p>
              </div>
              <div className="box-detail">{item.details}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="faq-block-section" id="paiement">
      <div className="container">
        <h2 className="h2 white anim fade right">
          <span>Paiement</span>
        </h2>
        <div className="list-block">
          {faqItem.map((item, index) => (
            <div className="list anim fade up" key={index}>
              <div className="box-header">
                <p className="title">
                  <b>{item.title}</b>
                </p>
              </div>
              <div className="box-detail">{item.details}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

            </div>
        </div>
    )
}

export default Support
