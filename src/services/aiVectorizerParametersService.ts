import { generateClient } from 'aws-amplify/api';
import { createAiVectorizerParameters } from '../graphql/mutations';

const client = generateClient();

async function postAiVectorizerParameters({
  name,
  aiLlmID,
  chunkSize,
  chunkOverlap,
}: {
  name: string;
  aiLlmID: string;
  chunkSize: number;
  chunkOverlap: string;
}) {
  await client.graphql({
    query: createAiVectorizerParameters,
    variables: {
      input: {
        name,
        aiLlmID,
        chunkSize,
        chunkOverlap,
      },
    },
  });
  return 'ok';
}

export { postAiVectorizerParameters };
