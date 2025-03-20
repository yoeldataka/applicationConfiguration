import React, { useState } from "react";
import { postAiLlm } from "../services/aiLlmService"; // Asegúrate de que la ruta sea correcta
import "@aws-amplify/ui-react/styles.css";
const CreateAiLlmForm: React.FC = () => {
    const [name, setName] = useState("");
    const [input, setInput] = useState<string[]>([""]);
    const [output, setOutput] = useState<string[]>([""]);
    const [description, setDescription] = useState("");
    const [available, setAvailable] = useState(false);
    const [message, setMessage] = useState("");

    const handleInputChange = (
        index: number,
        value: string,
        type: "input" | "output"
    ) => {
        const updateArray = type === "input" ? [...input] : [...output];
        updateArray[index] = value;
        type === "input" ? setInput(updateArray) : setOutput(updateArray);
    };

    const addField = (type: "input" | "output") => {
        type === "input"
            ? setInput([...input, ""])
            : setOutput([...output, ""]);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await postAiLlm({ name, input, output, description, available });
            setMessage("AI LLM creado con éxito");
            setName("");
            setInput([""]);
            setOutput([""]);
            setDescription("");
            setAvailable(false);
        } catch (error) {
            setMessage("Error al crear el AI LLM");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Crear AI LLM</h2>
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
                <label>Input:</label>
                {input.map((value, index) => (
                    <input
                        key={index}
                        type="text"
                        value={value}
                        onChange={(e) =>
                            handleInputChange(index, e.target.value, "input")
                        }
                        required
                    />
                ))}
                <button type="button" onClick={() => addField("input")}>
                    Añadir Input
                </button>
            </div>
            <div>
                <label>Output:</label>
                {output.map((value, index) => (
                    <input
                        key={index}
                        type="text"
                        value={value}
                        onChange={(e) =>
                            handleInputChange(index, e.target.value, "output")
                        }
                        required
                    />
                ))}
                <button type="button" onClick={() => addField("output")}>
                    Añadir Output
                </button>
            </div>
            <div>
                <label>Descripción:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Disponible:</label>
                <input
                    type="checkbox"
                    checked={available}
                    onChange={(e) => setAvailable(e.target.checked)}
                />
            </div>
            <button type="submit">Crear</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default CreateAiLlmForm;
