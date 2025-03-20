import React from "react";
import "./App.css";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
import CreateClientCompanyForm from "./components/AiClientCompanyCreationForm";
import CreateAiLlmForm from "./components/AiLlmCreationForm";
import CreateAiVectorizerParametersForm from "./components/AiVectorizerParametersCreationForm";
import AiApiToolCreateForm from "./ui-components/AiApiToolCreateForm";

Amplify.configure(config);

const App = () => (
    <div className="App">
        <div className="TEST">
            <CreateClientCompanyForm />
        </div>
        <div className="TEST2">
            <CreateAiLlmForm />
        </div>
        <div className="TEST3">
            <CreateAiVectorizerParametersForm />
        </div>
    </div>
);

export default App;
