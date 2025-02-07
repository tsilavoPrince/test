import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Acceuille from "./Pages/Accueil";
import Layout from "./Forme";
import Vendre from "./Pages/Vendre";
import NotFound from "./Pages/PageNotFound";
import Actualite from "./Pages/Actualite";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Acheter from "./Pages/Acheter";
import Service from "./Pages/Services";
import Franchise from "./Pages/Franchise";
import FaQ from "./Pages/FaQ";
import Support from "./Pages/Support";
import Admin from "./Admin/Admin";
import Login from "./Admin/Login";
import PrivateRoute from './Admin/PrivateRoute'; // Importer le composant PrivateRoute
import Logout from './Admin/Logout';
import Inscription from "./Admin/Inscription";
import ConditionUtilisation from "./Pages/ConditionGeneralDUtilisation";
import ConditionGenerale from "./Pages/ConditionGeneralDeVente";
import Donne from "./Pages/DonnePersonnelle";
import Mention from "./Pages/MentionLegal";


// Routes de l'application
const AppRoutes = () => {
    const location = useLocation();  // Récupérer l'URL actuelle

    return (
        <Routes key={location.pathname} location={location}> {/* Ajout de la clé pour forcer un remount */}
            <Route path="/" element={<Layout><Acceuille /></Layout>} />
            <Route path="/Vendre" element={<Layout><Vendre /></Layout>} />
            <Route path="/Actualite" element={<Layout><Actualite /></Layout>} />
            <Route path="/Franchise" element={<Franchise />} />
            <Route path="/Acheter" element={<Layout><Acheter /></Layout>} />
            <Route path="/Services" element={<Layout><Service /></Layout>} />
            <Route path="/Donnee" element={<Layout><Donne /></Layout>} />
            <Route path="/ConditionGenerale" element={<Layout><ConditionGenerale /></Layout>} />
            <Route path="/ConditionUtilisation" element={<Layout><ConditionUtilisation /></Layout>} />
            <Route path="/Mention" element={<Layout><Mention /></Layout>} />
            <Route path="/FaQ" element={<Layout><FaQ /></Layout>} />
            <Route path="/Support" element={<Support />} />
            <Route path="/Admin" element={
                <PrivateRoute>
                    <Admin />
                </PrivateRoute>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Inscription" element={
                // <PrivateRoute>
                <Inscription />}
            // </PrivateRoute>} 
            />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

// Composant pour gérer le titre dynamique en fonction de l'URL
const TitreDynamique = () => {
    const location = useLocation();  // Récupérer l'URL actuelle

    useEffect(() => {
        let pageTitle = '';

        // Vérifier le chemin et changer le titre en conséquence
        switch (location.pathname) {
            case '/':
                pageTitle = 'EWIGO';
                break;
            case '/Vendre':
                pageTitle = 'Vendre - EWIGO';
                break;
            case '/Actualite':
                pageTitle = 'Actualités - EWIGO';
                break;
            case '/Franchise':
                pageTitle = 'Franchise - EWIGO';
                break;
            case '/Acheter':
                pageTitle = 'Acheter - EWIGO';
                break;
            case '/Services':
                pageTitle = 'Services - EWIGO';
                break;
            case '/Donnee':
                pageTitle = 'Donnée - EWIGO';
                break;
            case '/ConditionGenerale':
                pageTitle = 'Condition Générale De Vente - EWIGO';
                break;
            case '/ConditionUtilisation':
                pageTitle = "Condition Générale D'Utilisation - EWIGO";
                break;
            case '/Mention':
                pageTitle = 'Mention Légale - EWIGO';
                break;
            case '/FaQ':
                pageTitle = 'FaQ - EWIGO';
                break;
            case '/Support':
                pageTitle = 'Support - EWIGO';
                break;
            case '/Admin':
                pageTitle = 'Admin - EWIGO';
                break;
            case '/Login':
                pageTitle = 'Login - EWIGO';
                break;
            case '/Inscription':
                pageTitle = 'Inscription - EWIGO';
                break;
            default:
                pageTitle = 'Page Non Trouvée - EWIGO';
        }

        // Mettre à jour le titre de la page
        document.title = pageTitle;

    }, [location]);  // Le useEffect se déclenche à chaque changement d'URL

    return null;  // Pas besoin de rendre quoi que ce soit dans le DOM
};

function App() {
    return (
        <Router>
            <TitreDynamique />
            <AppRoutes />
        </Router>
    );
}

export default App;
