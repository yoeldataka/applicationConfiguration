import React, { useEffect, useState } from "react";
import { fetchLlms } from "../services/aiLlmService";
import * as APITypes from "../API";

const LlmsList: React.FC = () => {
    const [llms, setLlms] = useState<APITypes.AiLlm[]>([]);
    const [error, setError] = useState<string | null>(null);

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

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>LLMs</h1>
            <ul>
                {llms.map((llm) => (
                    <li key={llm.id}>
                        <h2>{llm.name}</h2>
                        {renderLlmDetails(llm)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LlmsList;
