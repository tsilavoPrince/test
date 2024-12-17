import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

// Conteneur avec fond dynamique
const BackgroundContainer = styled.div`
    background: ${(props) =>
        props.bgImage
            ? `url(${props.bgImage}) no-repeat center center / cover`
            : props.bgColor || "#f7f7f7"};
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

// Conteneur principal du formulaire transparent
const ModalContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.8);  /* Formulaire avec fond semi-transparent */
    border: 2px solid ${(props) => (props.success ? "#4caf50" : "#ccc")};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    backdrop-filter: blur(10px); /* Effet de flou derrière le formulaire */
`;

const Heading = styled.h2`
    font-size: 1.5rem;
    color: #333;
    text-align: center;
`;

const FieldLabel = styled.label`
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
`;

const TextField = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

const Button = styled.button`
    background-color: ${(props) => (props.loading ? "#999" : "#007bff")};
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: ${(props) => (props.loading ? "not-allowed" : "pointer")};
    border-radius: 4px;
    width: 100%;
`;

const SuccessMessage = styled.div`
    color: #4caf50;
    text-align: center;
    margin-top: 20px;
`;

const ErrorMessage = styled.div`
    color: #f44336;
    text-align: center;
    margin-top: 20px;
`;

// Conteneur pour le champ de date et le bouton du calendrier


const BackButton = styled.button`
    background-color: #f44336;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    margin-top: 20px;
    
    &:hover {
        background-color: #d32f2f;
    }
`;

const EntrepreneurForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        immatriculation: "",
        date: "",
        tel: "",
        probleme: "",
    });

    const [formStatus, setFormStatus] = useState({
        success: false,
        error: false,
        loading: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid =
            Object.values(formData).every((value) => value && value !== "");

        if (!isValid) {
            setFormStatus({ success: false, error: true, loading: false });
            return;
        }

        const requestBody = {
            ...formData
        };

        setFormStatus({ success: false, error: false, loading: true });
        console.log(requestBody)

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/support", requestBody);

            if (response.status === 200) {
                setFormStatus({ success: true, error: false, loading: false });
                setFormData({ email: "", tel: "", immatriculation: "", date: "", probleme: "" });
            } else {
                throw new Error("Erreur lors de l'envoi du formulaire");
            }
        } catch (error) {
            console.error("Erreur :", error);
            setFormStatus({ success: false, error: true, loading: false });
        }
    };

    // const handleBackButtonClick = () => {
    //     // Naviguer vers la page FAQ (ou toute autre action de navigation)
    //     window.location.href = "./FaQ.jsx";  // Remplacez par l'URL de votre page FAQ
    // };

    return (
        <BackgroundContainer
            bgImage="https://www.ewigo.com/wp-content/uploads/2022/07/Capture-decran-2021-04-19-a-13.36.08.jpg" // Changez pour une URL d'image valide
            bgColor="#f0f0f0" // Couleur de fond si l'image n'est pas utilisée
        >
            <ModalContainer success={formStatus.success}>
                <Heading>SUPPORT D'INTERVENTION</Heading>
                <form onSubmit={handleSubmit}>
                    <FieldLabel htmlFor="email">Adresse e-mail</FieldLabel>
                    <TextField
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Votre adresse e-mail"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />

                    <FieldLabel htmlFor="tel">Tel</FieldLabel>
                    <TextField
                        type="tel"
                        id="tel"
                        name="tel"
                        placeholder="Votre numéros de téléphone"
                        value={formData.tel}
                        onChange={handleInputChange}
                        required
                    />

                    <FieldLabel htmlFor="immatriculation">Immatriculation</FieldLabel>
                    <TextField
                        type="text"
                        id="immatriculation"
                        name="immatriculation"
                        placeholder="Votre plaque d'immatriculation"
                        value={formData.immatriculation}
                        onChange={handleInputChange}
                        required
                    />

                    <FieldLabel htmlFor="date">Date</FieldLabel>
                    <TextField
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                    />

                    <FieldLabel htmlFor="probleme">Problèmes</FieldLabel>
                    <TextArea
                        id="probleme"
                        name="probleme"
                        placeholder="Décrivez le problème"
                        value={formData.probleme}
                        onChange={handleInputChange}
                        rows={4}
                        required
                    />

                    <Button type="submit" loading={formStatus.loading}>
                        {formStatus.loading ? "Envoi..." : "Envoyer"}
                    </Button>
                </form>

                {formStatus.success && <SuccessMessage>Merci ! Votre demande a bien été envoyée.</SuccessMessage>}
                {formStatus.error && <ErrorMessage>Oups ! Veuillez remplir tous les champs correctement.</ErrorMessage>}

<Link to='/FaQ'>
                <BackButton >
                Retour à la FAQ
                </BackButton>
</Link>
            </ModalContainer>
        </BackgroundContainer>
    );
};

export default EntrepreneurForm;
