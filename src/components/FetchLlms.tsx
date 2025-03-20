import React, { useEffect, useState } from "react";
import {
    fetchLlms,
    createAiLlm,
    updateAiLlm,
    deleteAiLlm,
} from "../services/aiLlmService";
import * as APITypes from "../API";

const LlmsList: React.FC = () => {
    const [llms, setLlms] = useState<APITypes.AiLlm[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [selectedLlm, setSelectedLlm] = useState<APITypes.AiLlm | null>(null);
    const [formData, setFormData] = useState<Partial<APITypes.AiLlm>>({
        input: [],
        output: [],
    });
    const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

    useEffect(() => {
        const loadLlms = async () => {
            try {
                const result = await fetchLlms();
                const llmsData = result.data.listAiLlms.items || [];
                setLlms(llmsData);
            } catch (err) {
                setError("Failed to load LLMs");
                console.error(err);
            }
        };

        loadLlms();
    }, []);

    const renderLlmDetails = (llm: APITypes.AiLlm) => {
        const keys = Object.keys(llm) as (keyof APITypes.AiLlm)[];
        return keys.map((key) => {
            const value = llm[key];
            if (Array.isArray(value)) {
                return (
                    <p key={key}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
                        {value.join(", ")}
                    </p>
                );
            }
            if (typeof value === "boolean") {
                return (
                    <p key={key}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
                        {value ? "Yes" : "No"}
                    </p>
                );
            }
            return (
                <p key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </p>
            );
        });
    };

    const handleUpdateClick = (llm: APITypes.AiLlm) => {
        setSelectedLlm(llm);
        setFormData(llm);
    };

    const handleDeleteClick = async (id: string) => {
        try {
            await deleteAiLlm(id);
            setLlms(llms.filter((llm) => llm.id !== id));
        } catch (err) {
            console.error("Failed to delete LLM", err);
        }
    };

    const handleCreateClick = () => {
        setIsCreateModalOpen(true);
        setFormData({ input: [], output: [] });
    };

    const handleCloseModal = () => {
        setSelectedLlm(null);
        setIsCreateModalOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleArrayChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number,
        field: "input" | "output"
    ) => {
        const newArray = [...(formData[field] || [])];
        newArray[index] = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            [field]: newArray,
        }));
    };

    const addArrayField = (field: "input" | "output") => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: [...(prevData[field] || []), ""],
        }));
    };

    const removeArrayField = (index: number, field: "input" | "output") => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: (prevData[field] || []).filter((_, i) => i !== index),
        }));
    };

    const handleFormSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        try {
            if (selectedLlm) {
                await updateAiLlm({ id: selectedLlm.id, ...formData });
                setLlms(
                    llms.map((llm) =>
                        llm.id === selectedLlm.id
                            ? { ...llm, ...formData }
                            : llm
                    )
                );
            } else {
                if (!formData.name || !formData.description) {
                    throw new Error("Name and description are required");
                }
                const newLlm = await createAiLlm({
                    name: formData.name,
                    description: formData.description,
                    input: formData.input || [],
                    output: formData.output || [],
                    available: formData.available || false,
                });
                setLlms([...llms, newLlm]);
            }
            handleCloseModal();
        } catch (err) {
            console.error("Failed to save LLM", err);
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>LLMs</h1>
            <button onClick={handleCreateClick}>Create LLM</button>
            <ul>
                {llms.map((llm) => (
                    <li key={llm.id}>
                        <h2>{llm.name}</h2>
                        {renderLlmDetails(llm)}
                        <button onClick={() => handleUpdateClick(llm)}>
                            Update
                        </button>
                        <button onClick={() => handleDeleteClick(llm.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            {(selectedLlm || isCreateModalOpen) && (
                <div className="modal" style={modalStyle}>
                    <div className="modal-content" style={modalContentStyle}>
                        <span
                            className="close"
                            onClick={handleCloseModal}
                            style={closeStyle}
                        >
                            &times;
                        </span>
                        <h2>
                            {selectedLlm
                                ? `Update ${selectedLlm.name}`
                                : "Create LLM"}
                        </h2>
                        <form onSubmit={handleFormSubmit}>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name || ""}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Description:
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description || ""}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <div>
                                <label>Input:</label>
                                {formData.input?.map((value, index) => (
                                    <div key={index}>
                                        <input
                                            type="text"
                                            value={value}
                                            onChange={(e) =>
                                                handleArrayChange(
                                                    e,
                                                    index,
                                                    "input"
                                                )
                                            }
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeArrayField(index, "input")
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => addArrayField("input")}
                                >
                                    Add Input
                                </button>
                            </div>
                            <div>
                                <label>Output:</label>
                                {formData.output?.map((value, index) => (
                                    <div key={index}>
                                        <input
                                            type="text"
                                            value={value}
                                            onChange={(e) =>
                                                handleArrayChange(
                                                    e,
                                                    index,
                                                    "output"
                                                )
                                            }
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeArrayField(
                                                    index,
                                                    "output"
                                                )
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => addArrayField("output")}
                                >
                                    Add Output
                                </button>
                            </div>
                            <label>
                                Available:
                                <input
                                    type="checkbox"
                                    name="available"
                                    checked={formData.available || false}
                                    onChange={(e) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            available: e.target.checked,
                                        }))
                                    }
                                />
                            </label>
                            <button type="submit">Save</button>
                        </form>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const modalStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.4)",
};

const modalContentStyle: React.CSSProperties = {
    backgroundColor: "#fefefe",
    padding: "20px",
    border: "1px solid #888",
    width: "80%",
    maxWidth: "500px",
};

const closeStyle: React.CSSProperties = {
    color: "#aaa",
    float: "right",
    fontSize: "28px",
    fontWeight: "bold",
    cursor: "pointer",
};

export default LlmsList;
