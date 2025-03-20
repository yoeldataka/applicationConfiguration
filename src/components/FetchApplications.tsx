import React, { useEffect, useState } from "react";
import { fetchApplications } from "../services/applicationService";
import * as APITypes from "../API";

const ApplicationList: React.FC = () => {
    const [applications, setApplications] = useState<APITypes.Application[]>(
        []
    );
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadApplications = async () => {
            try {
                const apps = await fetchApplications();
                setApplications(apps);
            } catch (err) {
                setError("Failed to load applications");
                console.error(err);
            }
        };

        loadApplications();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Applications</h1>
            <ul>
                {applications.map((app) => (
                    <li key={app.id}>
                        <h2>{app.name}</h2>
                        <p>URL: {app.url}</p>
                        <p>Version: {app.version}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApplicationList;
