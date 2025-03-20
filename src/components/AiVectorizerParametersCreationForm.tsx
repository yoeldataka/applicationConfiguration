import React, { useState, useEffect } from "react";
import { postAiVectorizerParameters } from "../services/aiVectorizerParametersService"; // Asegúrate de que la ruta sea correcta
import { fetchLlms } from "../services/aiLlmService"; // Asegúrate de que la ruta sea correcta

interface AiLlm {
    id: string;
    name: string;
}

const CreateAiVectorizerParametersForm: React.FC = () => {
    const [name, setName] = useState("");
    const [aiLlmID, setAiLlmID] = useState("");
    const [chunkSize, setChunkSize] = useState<number>(0);
    const [chunkOverlap, setChunkOverlap] = useState("");
    const [message, setMessage] = useState("");
    const [llms, setLlms] = useState<AiLlm[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLlms = async () => {
            try {
                const result: any = await fetchLlms();
                setLlms(result.data.listAiLlms.items);
            } catch (err) {
                setError("Error al cargar los LLMs");
            } finally {
                setLoading(false);
            }
        };

        fetchLlms();
    }, []);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await postAiVectorizerParameters({
                name,
                aiLlmID,
                chunkSize,
                chunkOverlap,
            });
            setMessage("Parámetros de vectorización creados con éxito");
            setName("");
            setAiLlmID("");
            setChunkSize(0);
            setChunkOverlap("");
        } catch (error) {
            setMessage("Error al crear los parámetros de vectorización");
        }
    };

    if (loading) {
        return <div>Cargando LLMs...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Crear Parámetros de Vectorización</h2>
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
                <label>Seleccionar AI LLM:</label>
                <select
                    value={aiLlmID}
                    onChange={(e) => setAiLlmID(e.target.value)}
                    required
                >
                    <option value="" disabled>
                        Selecciona un LLM
                    </option>
                    {llms.map((llm) => (
                        <option key={llm.id} value={llm.id}>
                            {llm.name}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Tamaño del Chunk:</label>
                <input
                    type="number"
                    value={chunkSize}
                    onChange={(e) => setChunkSize(Number(e.target.value))}
                    required
                />
            </div>
            <div>
                <label>Solapamiento del Chunk:</label>
                <input
                    type="text"
                    value={chunkOverlap}
                    onChange={(e) => setChunkOverlap(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Crear</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default CreateAiVectorizerParametersForm;
