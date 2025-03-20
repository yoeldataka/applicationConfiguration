import { generateClient } from "aws-amplify/api";
import { listApplications } from "../graphql/queries";
import * as APITypes from "../API";

const client = generateClient();

async function fetchApplications(): Promise<
    (APITypes.ListApplicationsQuery["listApplications"] & {
        items?: APITypes.Application[];
    })["items"]
> {
    try {
        const result = await client.graphql({
            query: listApplications,
        });
        return result.data.listApplications?.items || [];
    } catch (error) {
        console.error("Error fetching applications:", error);
        throw new Error("Failed to fetch applications");
    }
}

export { fetchApplications };
