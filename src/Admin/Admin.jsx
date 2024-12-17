import React, { useEffect, useState } from 'react';
import styles from '../CSS/AdminComponent.module.css'; // Import des styles spécifiques au composant
import axios from 'axios';

const AdminComponent = () => {
    useEffect(() => {
        // Charger dynamiquement le CSS de Bootstrap
        const bootstrapCSS = document.createElement('link');
        bootstrapCSS.rel = 'stylesheet';
        bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css';
        document.head.appendChild(bootstrapCSS);

        return () => {
            // Nettoyer le CSS Bootstrap au démontage du composant
            document.head.removeChild(bootstrapCSS);
        };

    }, []);

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fonction pour récupérer les données avec Axios
        axios.get('http://127.0.0.1:8000/api/read') // Exemple d'URL d'API
            .then((response) => {
                // Mise à jour de l'état avec les données récupérées
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                // En cas d'erreur, mettre à jour l'état d'erreur
                setError('Failed to fetch data');
                setLoading(false);
            });
    }, [])

    const resolveIntervention = (id) => {
        // Appel à l'API pour supprimer l'élément
        axios.delete(`http://127.0.0.1:8000/api/delete/${id}`)
            .then((response) => {
                // Mise à jour de l'état pour retirer l'élément supprimé de la liste
                setUsers(users.filter(user => user.id !== id));
            })
            .catch((error) => {
                setError('Failed to resolve the issue');
            });
    }

    return (
        <div className={styles['admin-container']}>
            {/* Barre latérale */}
            <aside className={styles.sidebar}>
                <div className="site-branding">
                    <a
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
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
                </div>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link active" aria-current="page">
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#home"></use> {/* Icône Home */}
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link text-white">
                            <svg className="bi me-2" width="16" height="16">
                                <use xlinkHref="#chat-quote-fill"></use> {/* Icône Message */}
                            </svg>
                            Intervention
                        </a>
                    </li>
                </ul>
                <hr />
            </aside>

            {/* Contenu principal */}
            <main className={styles['main-content']}>
                <div className="bd-example">
                    {loading ? (
                        <p>Loading...</p> // Message pendant le chargement des données
                    ) : error ? (
                        <p>{error}</p> // Message d'erreur s'il y a un problème avec la récupération des données
                    ) : (
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Tel</th>
                                    <th scope="col">Immatriculation</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Problèmes</th>
                                    <th scope="col">Statut</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((data) => (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.email}</td>
                                        <td>{data.tel}</td>
                                        <td>{data.immatriculation}</td>
                                        <td>{data.date}</td>
                                        <td>{data.probleme}</td>
                                        <td className="text-warning">En attente</td> {/* Colonne de statut */}
                                        <td>
                                            <button
                                                className="btn btn-success"
                                                onClick={() => resolveIntervention(data.id)} // Appel de la fonction pour résoudre
                                            >
                                                Résolue
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AdminComponent;
