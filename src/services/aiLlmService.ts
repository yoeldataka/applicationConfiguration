import { generateClient } from "aws-amplify/api";
import { createAiLlm } from "../graphql/mutations";
import { listAiLlms } from "../graphql/queries";

const client = generateClient();

async function postAiLlm({
    name,
    input,
    output,
    description,
    available,
}: {
    name: string;
    input: string[];
    output: string[];
    description: string;
    available: boolean;
}) {
    await client.graphql({
        query: createAiLlm,
        variables: {
            input: {
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

async function fetchLlms() {
    return await client.graphql({ query: listAiLlms });
}

export { postAiLlm, fetchLlms };
