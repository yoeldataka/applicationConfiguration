import { generateClient } from 'aws-amplify/api';
import { createAiClientCompany } from '../graphql/mutations';
import { listAiClientCompanies } from '../graphql/queries';

const client = generateClient();

async function postAiClientCompany({
  name,
  business,
  values,
}: {
  name: string;
  business: string;
  values: string;
}) {
  await client.graphql({
    query: createAiClientCompany,
    variables: {
      input: {
        name,
        business,
        values,
      },
    },
  });
  return 'ok';
}

async function getAiClientCompanyList() {
  return await client.graphql({ query: listAiClientCompanies });
}

export { postAiClientCompany, getAiClientCompanyList };
