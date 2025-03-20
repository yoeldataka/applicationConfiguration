import React from "react";
import { Amplify } from "aws-amplify";
import { ThemeProvider, Button, Card, Flex, Text } from "@aws-amplify/ui-react";
import config from "./amplifyconfiguration.json";
import {
    AiApiToolCreateForm,
    AiApiToolUpdateForm,
    AiClientCompanyCreateForm,
    AiClientCompanyUpdateForm,
} from "./ui-components";
import LlmsList from "../src/components/FetchLlms";
import "./App.css";

Amplify.configure(config);

function App() {
    return (
        <ThemeProvider>
            <div className="App">
                <header className="App-header">
                    <h1>Configuración de Aplicaciones</h1>
                </header>
                <Flex direction="column" alignItems="center" padding="20px">
                    <Card variation="outlined" className="app-card">
                        <Text>Llm-s disponibles</Text>
                        <LlmsList />
                    </Card>

                    <AiClientCompanyCreateForm />
                    <Flex
                        direction="row"
                        justifyContent="space-between"
                        width="100%"
                        marginTop="20px"
                    >
                        <Button variation="primary">Crear</Button>
                        <Button variation="warning">Actualizar</Button>
                        <Button variation="link">Eliminar</Button>
                    </Flex>
                </Flex>
            </div>
        </ThemeProvider>
    );
}

export default App;
