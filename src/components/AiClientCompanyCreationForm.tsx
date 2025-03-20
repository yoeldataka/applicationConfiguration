import React, { useState } from "react";
import { postAiClientCompany } from "../services/aiClientCompanyService"; // Asegúrate de que la ruta sea correcta

const CreateClientCompanyForm: React.FC = () => {
    const [name, setName] = useState("");
    const [business, setBusiness] = useState("");
    const [values, setValues] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await postAiClientCompany({ name, business, values });
            setMessage("Compañía creada con éxito");
            setName("");
            setBusiness("");
            setValues("");
        } catch (error) {
            setMessage("Error al crear la compañía");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Crear Compañía Cliente</h2>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Negocio:</label>
                <input
                    type="text"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Valores:</label>
                <input
                    type="text"
                    value={values}
                    onChange={(e) => setValues(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Crear</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default CreateClientCompanyForm;
