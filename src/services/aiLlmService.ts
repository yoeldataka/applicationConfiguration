import { generateClient } from "aws-amplify/api";
import {
    createAiLlm as createAiLlmMutation,
    updateAiLlm as updateAiLlmMutation,
    deleteAiLlm as deleteAiLlmMutation,
} from "../graphql/mutations";
import * as API from "../API";
import { listAiLlms, getAiLlm } from "../graphql/queries";

const client = generateClient();

async function createAiLlm(input: {
    name: string;
    input: string[];
    output: string[];
    description: string;
    available: boolean;
}): Promise<API.AiLlm> {
    const result = await client.graphql({
        query: createAiLlmMutation,
        variables: {
            input,
        },
    });
    return result.data.createAiLlm;
}

async function updateAiLlm({
    id,
    name,
    input,
    output,
    description,
    available,
}: {
    id: string;
    name?: string;
    input?: string[];
    output?: string[];
    description?: string;
    available?: boolean;
}) {
    await client.graphql({
        query: updateAiLlmMutation,
        variables: {
            input: {
                id,
                name,
                input,
                output,
                description,
                available,
            },
        },
    });
    return "ok";
}

async function deleteAiLlm(id: string) {
    await client.graphql({
        query: deleteAiLlmMutation,
        variables: {
            input: {
                id,
            },
        },
    });
    return "ok";
}

async function fetchLlms() {
    return await client.graphql({ query: listAiLlms });
}

async function fetchLlmById(id: string) {
    const result = await client.graphql({
        query: getAiLlm,
        variables: {
            id,
        },
    });
    return result.data.getAiLlm;
}

export { createAiLlm, updateAiLlm, deleteAiLlm, fetchLlms, fetchLlmById };
