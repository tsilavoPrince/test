<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion à l'API</title>
    <!-- Inclure jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>
    <div id="resultat-api">
        <!-- Les données de l'API seront affichées ici -->
    </div>

    <!-- Script JavaScript -->
    <script>
        // Clés d'API
        var apiKey = 'Y1cs3LY1at4ZMLakqZQA_pN2jbka';

        // URL de l'API
        var apiUrl = 'https://api.mvola.mg/paiement';

        // Fonction pour effectuer une requête vers l'API
        function appelerAPI() {
            $.ajax({
                url: apiUrl,
                type: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + apiKey,
                    // Autres en-têtes si nécessaires
                },
                success: function(data) {
                    // Traiter les données de l'API
                    $('#resultat-api').html(JSON.stringify(data));
                },
                error: function() {
                    console.error('Erreur lors de la requête vers l\'API.');
                }
            });
        }

        // Appeler l'API lors du chargement initial de la page
        $(document).ready(function() {
            appelerAPI();
        });
    </script>
</body>
</html>
