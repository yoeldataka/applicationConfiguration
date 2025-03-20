import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Amplify } from "aws-amplify";
import { ThemeProvider } from "@aws-amplify/ui-react";
import config from "./amplifyconfiguration.json";
import CreateClientCompanyForm from "./components/AiClientCompanyCreationForm";
import CreateAiLlmForm from "./components/AiLlmCreationForm";
import CreateAiVectorizerParametersForm from "./components/AiVectorizerParametersCreationForm";
import AiApiToolCreateForm from "./ui-components/AiApiToolCreateForm";

Amplify.configure(config);

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <div className="TEST">
                    <CreateClientCompanyForm />
                </div>
                <div className="TEST2">
                    <CreateAiLlmForm />
                </div>
                <div className="TEST3">
                    <CreateAiVectorizerParametersForm />
                </div>
                <div className="TEST4">
                    <AiApiToolCreateForm />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
