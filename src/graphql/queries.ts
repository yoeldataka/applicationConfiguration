/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAiClientCompany = /* GraphQL */ `query GetAiClientCompany($id: ID!) {
  getAiClientCompany(id: $id) {
    id
    name
    business
    values
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiClientCompanyQueryVariables,
  APITypes.GetAiClientCompanyQuery
>;
export const listAiClientCompanies = /* GraphQL */ `query ListAiClientCompanies(
  $filter: ModelAiClientCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiClientCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      business
      values
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiClientCompaniesQueryVariables,
  APITypes.ListAiClientCompaniesQuery
>;
export const getAiLlm = /* GraphQL */ `query GetAiLlm($id: ID!) {
  getAiLlm(id: $id) {
    id
    name
    input
    output
    description
    available
    maxTokens
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetAiLlmQueryVariables, APITypes.GetAiLlmQuery>;
export const listAiLlms = /* GraphQL */ `query ListAiLlms(
  $filter: ModelAiLlmFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiLlms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      input
      output
      description
      available
      maxTokens
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiLlmsQueryVariables,
  APITypes.ListAiLlmsQuery
>;
export const getAiVectorialDbConfig = /* GraphQL */ `query GetAiVectorialDbConfig($id: ID!) {
  getAiVectorialDbConfig(id: $id) {
    id
    name
    apiKey
    indexName
    nameSpace
    score
    numberOfSimilarities
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiVectorialDbConfigQueryVariables,
  APITypes.GetAiVectorialDbConfigQuery
>;
export const listAiVectorialDbConfigs = /* GraphQL */ `query ListAiVectorialDbConfigs(
  $filter: ModelAiVectorialDbConfigFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiVectorialDbConfigs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      apiKey
      indexName
      nameSpace
      score
      numberOfSimilarities
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiVectorialDbConfigsQueryVariables,
  APITypes.ListAiVectorialDbConfigsQuery
>;
export const getAiVectorizerParameters = /* GraphQL */ `query GetAiVectorizerParameters($id: ID!) {
  getAiVectorizerParameters(id: $id) {
    id
    name
    aiLlmID
    aiLlm {
      id
      name
      input
      output
      description
      available
      maxTokens
      createdAt
      updatedAt
      __typename
    }
    chunkSize
    chunkOverlap
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiVectorizerParametersQueryVariables,
  APITypes.GetAiVectorizerParametersQuery
>;
export const listAiVectorizerParameters = /* GraphQL */ `query ListAiVectorizerParameters(
  $filter: ModelAiVectorizerParametersFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiVectorizerParameters(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      aiLlmID
      aiLlm {
        id
        name
        input
        output
        description
        available
        maxTokens
        createdAt
        updatedAt
        __typename
      }
      chunkSize
      chunkOverlap
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiVectorizerParametersQueryVariables,
  APITypes.ListAiVectorizerParametersQuery
>;
export const aiVectorizerParametersByAiLlmIDAndId = /* GraphQL */ `query AiVectorizerParametersByAiLlmIDAndId(
  $aiLlmID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAiVectorizerParametersFilterInput
  $limit: Int
  $nextToken: String
) {
  aiVectorizerParametersByAiLlmIDAndId(
    aiLlmID: $aiLlmID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      aiLlmID
      aiLlm {
        id
        name
        input
        output
        description
        available
        maxTokens
        createdAt
        updatedAt
        __typename
      }
      chunkSize
      chunkOverlap
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiVectorizerParametersByAiLlmIDAndIdQueryVariables,
  APITypes.AiVectorizerParametersByAiLlmIDAndIdQuery
>;
export const getAiParameters = /* GraphQL */ `query GetAiParameters($id: ID!) {
  getAiParameters(id: $id) {
    id
    name
    role
    companyID
    company {
      id
      name
      business
      values
      createdAt
      updatedAt
      __typename
    }
    conversationPurpose
    conversationType
    prePrompt
    postPrompt
    llmID
    llm {
      id
      name
      input
      output
      description
      available
      maxTokens
      createdAt
      updatedAt
      __typename
    }
    chatMemory
    responseTemperature
    responseLanguage
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiParametersQueryVariables,
  APITypes.GetAiParametersQuery
>;
export const listAiParameters = /* GraphQL */ `query ListAiParameters(
  $filter: ModelAiParametersFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiParameters(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      role
      companyID
      company {
        id
        name
        business
        values
        createdAt
        updatedAt
        __typename
      }
      conversationPurpose
      conversationType
      prePrompt
      postPrompt
      llmID
      llm {
        id
        name
        input
        output
        description
        available
        maxTokens
        createdAt
        updatedAt
        __typename
      }
      chatMemory
      responseTemperature
      responseLanguage
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiParametersQueryVariables,
  APITypes.ListAiParametersQuery
>;
export const aiParametersByCompanyIDAndId = /* GraphQL */ `query AiParametersByCompanyIDAndId(
  $companyID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAiParametersFilterInput
  $limit: Int
  $nextToken: String
) {
  aiParametersByCompanyIDAndId(
    companyID: $companyID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      role
      companyID
      company {
        id
        name
        business
        values
        createdAt
        updatedAt
        __typename
      }
      conversationPurpose
      conversationType
      prePrompt
      postPrompt
      llmID
      llm {
        id
        name
        input
        output
        description
        available
        maxTokens
        createdAt
        updatedAt
        __typename
      }
      chatMemory
      responseTemperature
      responseLanguage
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiParametersByCompanyIDAndIdQueryVariables,
  APITypes.AiParametersByCompanyIDAndIdQuery
>;
export const aiParametersByLlmIDAndId = /* GraphQL */ `query AiParametersByLlmIDAndId(
  $llmID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAiParametersFilterInput
  $limit: Int
  $nextToken: String
) {
  aiParametersByLlmIDAndId(
    llmID: $llmID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      role
      companyID
      company {
        id
        name
        business
        values
        createdAt
        updatedAt
        __typename
      }
      conversationPurpose
      conversationType
      prePrompt
      postPrompt
      llmID
      llm {
        id
        name
        input
        output
        description
        available
        maxTokens
        createdAt
        updatedAt
        __typename
      }
      chatMemory
      responseTemperature
      responseLanguage
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiParametersByLlmIDAndIdQueryVariables,
  APITypes.AiParametersByLlmIDAndIdQuery
>;
export const getAiApiTool = /* GraphQL */ `query GetAiApiTool($id: ID!) {
  getAiApiTool(id: $id) {
    id
    name
    func
    useCases
    description
    payload
    endpoint {
      items {
        id
        aiApiToolId
        backendEndpointId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    usedIn {
      items {
        id
        aiApiToolId
        aiToolGroupId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiApiToolQueryVariables,
  APITypes.GetAiApiToolQuery
>;
export const listAiApiTools = /* GraphQL */ `query ListAiApiTools(
  $filter: ModelAiApiToolFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiApiTools(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      func
      useCases
      description
      payload
      endpoint {
        nextToken
        __typename
      }
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiApiToolsQueryVariables,
  APITypes.ListAiApiToolsQuery
>;
export const getAiRenderTool = /* GraphQL */ `query GetAiRenderTool($id: ID!) {
  getAiRenderTool(id: $id) {
    id
    name
    func
    useCases
    description
    payload
    action
    component {
      items {
        id
        aiRenderToolId
        frontendComponentId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    usedIn {
      items {
        id
        aiRenderToolId
        aiToolGroupId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiRenderToolQueryVariables,
  APITypes.GetAiRenderToolQuery
>;
export const listAiRenderTools = /* GraphQL */ `query ListAiRenderTools(
  $filter: ModelAiRenderToolFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiRenderTools(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      func
      useCases
      description
      payload
      action
      component {
        nextToken
        __typename
      }
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiRenderToolsQueryVariables,
  APITypes.ListAiRenderToolsQuery
>;
export const getAiToolGroup = /* GraphQL */ `query GetAiToolGroup($id: ID!) {
  getAiToolGroup(id: $id) {
    id
    name
    apiTools {
      items {
        id
        aiApiToolId
        aiToolGroupId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    renderTools {
      items {
        id
        aiRenderToolId
        aiToolGroupId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    usedIn {
      items {
        id
        aiToolGroupId
        aiConfigurationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiToolGroupQueryVariables,
  APITypes.GetAiToolGroupQuery
>;
export const listAiToolGroups = /* GraphQL */ `query ListAiToolGroups(
  $filter: ModelAiToolGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiToolGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      apiTools {
        nextToken
        __typename
      }
      renderTools {
        nextToken
        __typename
      }
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiToolGroupsQueryVariables,
  APITypes.ListAiToolGroupsQuery
>;
export const getAiConfiguration = /* GraphQL */ `query GetAiConfiguration($id: ID!) {
  getAiConfiguration(id: $id) {
    id
    name
    aiParametersID
    aiParameters {
      id
      name
      role
      companyID
      company {
        id
        name
        business
        values
        createdAt
        updatedAt
        __typename
      }
      conversationPurpose
      conversationType
      prePrompt
      postPrompt
      llmID
      llm {
        id
        name
        input
        output
        description
        available
        maxTokens
        createdAt
        updatedAt
        __typename
      }
      chatMemory
      responseTemperature
      responseLanguage
      createdAt
      updatedAt
      __typename
    }
    tools {
      items {
        id
        aiToolGroupId
        aiConfigurationId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiConfigurationQueryVariables,
  APITypes.GetAiConfigurationQuery
>;
export const listAiConfigurations = /* GraphQL */ `query ListAiConfigurations(
  $filter: ModelAiConfigurationFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiConfigurations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      aiParametersID
      aiParameters {
        id
        name
        role
        companyID
        conversationPurpose
        conversationType
        prePrompt
        postPrompt
        llmID
        chatMemory
        responseTemperature
        responseLanguage
        createdAt
        updatedAt
        __typename
      }
      tools {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiConfigurationsQueryVariables,
  APITypes.ListAiConfigurationsQuery
>;
export const aiConfigurationsByAiParametersIDAndId = /* GraphQL */ `query AiConfigurationsByAiParametersIDAndId(
  $aiParametersID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAiConfigurationFilterInput
  $limit: Int
  $nextToken: String
) {
  aiConfigurationsByAiParametersIDAndId(
    aiParametersID: $aiParametersID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      aiParametersID
      aiParameters {
        id
        name
        role
        companyID
        conversationPurpose
        conversationType
        prePrompt
        postPrompt
        llmID
        chatMemory
        responseTemperature
        responseLanguage
        createdAt
        updatedAt
        __typename
      }
      tools {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiConfigurationsByAiParametersIDAndIdQueryVariables,
  APITypes.AiConfigurationsByAiParametersIDAndIdQuery
>;
export const getAiIndexationConfiguration = /* GraphQL */ `query GetAiIndexationConfiguration($id: ID!) {
  getAiIndexationConfiguration(id: $id) {
    id
    name
    vectorizerParametersID
    vectorizerParameters {
      id
      name
      aiLlmID
      aiLlm {
        id
        name
        input
        output
        description
        available
        maxTokens
        createdAt
        updatedAt
        __typename
      }
      chunkSize
      chunkOverlap
      createdAt
      updatedAt
      __typename
    }
    vectorialDbConfigID
    vectorialDbConfig {
      id
      name
      apiKey
      indexName
      nameSpace
      score
      numberOfSimilarities
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiIndexationConfigurationQueryVariables,
  APITypes.GetAiIndexationConfigurationQuery
>;
export const listAiIndexationConfigurations = /* GraphQL */ `query ListAiIndexationConfigurations(
  $filter: ModelAiIndexationConfigurationFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiIndexationConfigurations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      vectorizerParametersID
      vectorizerParameters {
        id
        name
        aiLlmID
        chunkSize
        chunkOverlap
        createdAt
        updatedAt
        __typename
      }
      vectorialDbConfigID
      vectorialDbConfig {
        id
        name
        apiKey
        indexName
        nameSpace
        score
        numberOfSimilarities
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiIndexationConfigurationsQueryVariables,
  APITypes.ListAiIndexationConfigurationsQuery
>;
export const aiIndexationConfigurationsByVectorizerParametersIDAndId = /* GraphQL */ `query AiIndexationConfigurationsByVectorizerParametersIDAndId(
  $vectorizerParametersID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAiIndexationConfigurationFilterInput
  $limit: Int
  $nextToken: String
) {
  aiIndexationConfigurationsByVectorizerParametersIDAndId(
    vectorizerParametersID: $vectorizerParametersID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      vectorizerParametersID
      vectorizerParameters {
        id
        name
        aiLlmID
        chunkSize
        chunkOverlap
        createdAt
        updatedAt
        __typename
      }
      vectorialDbConfigID
      vectorialDbConfig {
        id
        name
        apiKey
        indexName
        nameSpace
        score
        numberOfSimilarities
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiIndexationConfigurationsByVectorizerParametersIDAndIdQueryVariables,
  APITypes.AiIndexationConfigurationsByVectorizerParametersIDAndIdQuery
>;
export const aiIndexationConfigurationsByVectorialDbConfigIDAndId = /* GraphQL */ `query AiIndexationConfigurationsByVectorialDbConfigIDAndId(
  $vectorialDbConfigID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAiIndexationConfigurationFilterInput
  $limit: Int
  $nextToken: String
) {
  aiIndexationConfigurationsByVectorialDbConfigIDAndId(
    vectorialDbConfigID: $vectorialDbConfigID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      vectorizerParametersID
      vectorizerParameters {
        id
        name
        aiLlmID
        chunkSize
        chunkOverlap
        createdAt
        updatedAt
        __typename
      }
      vectorialDbConfigID
      vectorialDbConfig {
        id
        name
        apiKey
        indexName
        nameSpace
        score
        numberOfSimilarities
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiIndexationConfigurationsByVectorialDbConfigIDAndIdQueryVariables,
  APITypes.AiIndexationConfigurationsByVectorialDbConfigIDAndIdQuery
>;
export const getAiWebsocket = /* GraphQL */ `query GetAiWebsocket($id: ID!) {
  getAiWebsocket(id: $id) {
    id
    name
    url
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiWebsocketQueryVariables,
  APITypes.GetAiWebsocketQuery
>;
export const listAiWebsockets = /* GraphQL */ `query ListAiWebsockets(
  $filter: ModelAiWebsocketFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiWebsockets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      url
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiWebsocketsQueryVariables,
  APITypes.ListAiWebsocketsQuery
>;
export const getAiTaskTypes = /* GraphQL */ `query GetAiTaskTypes($id: ID!) {
  getAiTaskTypes(id: $id) {
    id
    types
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiTaskTypesQueryVariables,
  APITypes.GetAiTaskTypesQuery
>;
export const listAiTaskTypes = /* GraphQL */ `query ListAiTaskTypes(
  $filter: ModelAiTaskTypesFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiTaskTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      types
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiTaskTypesQueryVariables,
  APITypes.ListAiTaskTypesQuery
>;
export const getAiProcess = /* GraphQL */ `query GetAiProcess($id: ID!) {
  getAiProcess(id: $id) {
    id
    tebeDeleted
    name
    taskTypeID
    taskType {
      id
      types
      createdAt
      updatedAt
      __typename
    }
    aiConfigID
    aiConfig {
      id
      name
      aiParametersID
      aiParameters {
        id
        name
        role
        companyID
        conversationPurpose
        conversationType
        prePrompt
        postPrompt
        llmID
        chatMemory
        responseTemperature
        responseLanguage
        createdAt
        updatedAt
        __typename
      }
      tools {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    usedIn {
      items {
        id
        aiProcessId
        aiSettingsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    communicationSourceType
    frontedWebsocketCommunicationSourceID
    frontedWebsocketCommunicationSource {
      id
      name
      url
      createdAt
      updatedAt
      __typename
    }
    backendQueueCommunicationSourceID
    backendQueueCommunicationSource {
      id
      name
      url
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiProcessQueryVariables,
  APITypes.GetAiProcessQuery
>;
export const listAiProcesses = /* GraphQL */ `query ListAiProcesses(
  $filter: ModelAiProcessFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiProcesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      tebeDeleted
      name
      taskTypeID
      taskType {
        id
        types
        createdAt
        updatedAt
        __typename
      }
      aiConfigID
      aiConfig {
        id
        name
        aiParametersID
        createdAt
        updatedAt
        __typename
      }
      usedIn {
        nextToken
        __typename
      }
      communicationSourceType
      frontedWebsocketCommunicationSourceID
      frontedWebsocketCommunicationSource {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      backendQueueCommunicationSourceID
      backendQueueCommunicationSource {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiProcessesQueryVariables,
  APITypes.ListAiProcessesQuery
>;
export const aiProcessesByTaskTypeIDAndId = /* GraphQL */ `query AiProcessesByTaskTypeIDAndId(
  $taskTypeID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAiProcessFilterInput
  $limit: Int
  $nextToken: String
) {
  aiProcessesByTaskTypeIDAndId(
    taskTypeID: $taskTypeID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tebeDeleted
      name
      taskTypeID
      taskType {
        id
        types
        createdAt
        updatedAt
        __typename
      }
      aiConfigID
      aiConfig {
        id
        name
        aiParametersID
        createdAt
        updatedAt
        __typename
      }
      usedIn {
        nextToken
        __typename
      }
      communicationSourceType
      frontedWebsocketCommunicationSourceID
      frontedWebsocketCommunicationSource {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      backendQueueCommunicationSourceID
      backendQueueCommunicationSource {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiProcessesByTaskTypeIDAndIdQueryVariables,
  APITypes.AiProcessesByTaskTypeIDAndIdQuery
>;
export const aiProcessesByAiConfigIDAndId = /* GraphQL */ `query AiProcessesByAiConfigIDAndId(
  $aiConfigID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAiProcessFilterInput
  $limit: Int
  $nextToken: String
) {
  aiProcessesByAiConfigIDAndId(
    aiConfigID: $aiConfigID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tebeDeleted
      name
      taskTypeID
      taskType {
        id
        types
        createdAt
        updatedAt
        __typename
      }
      aiConfigID
      aiConfig {
        id
        name
        aiParametersID
        createdAt
        updatedAt
        __typename
      }
      usedIn {
        nextToken
        __typename
      }
      communicationSourceType
      frontedWebsocketCommunicationSourceID
      frontedWebsocketCommunicationSource {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      backendQueueCommunicationSourceID
      backendQueueCommunicationSource {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiProcessesByAiConfigIDAndIdQueryVariables,
  APITypes.AiProcessesByAiConfigIDAndIdQuery
>;
export const aiProcessesByFrontedWebsocketCommunicationSourceIDAndId = /* GraphQL */ `query AiProcessesByFrontedWebsocketCommunicationSourceIDAndId(
  $frontedWebsocketCommunicationSourceID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAiProcessFilterInput
  $limit: Int
  $nextToken: String
) {
  aiProcessesByFrontedWebsocketCommunicationSourceIDAndId(
    frontedWebsocketCommunicationSourceID: $frontedWebsocketCommunicationSourceID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tebeDeleted
      name
      taskTypeID
      taskType {
        id
        types
        createdAt
        updatedAt
        __typename
      }
      aiConfigID
      aiConfig {
        id
        name
        aiParametersID
        createdAt
        updatedAt
        __typename
      }
      usedIn {
        nextToken
        __typename
      }
      communicationSourceType
      frontedWebsocketCommunicationSourceID
      frontedWebsocketCommunicationSource {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      backendQueueCommunicationSourceID
      backendQueueCommunicationSource {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiProcessesByFrontedWebsocketCommunicationSourceIDAndIdQueryVariables,
  APITypes.AiProcessesByFrontedWebsocketCommunicationSourceIDAndIdQuery
>;
export const aiProcessesByBackendQueueCommunicationSourceIDAndId = /* GraphQL */ `query AiProcessesByBackendQueueCommunicationSourceIDAndId(
  $backendQueueCommunicationSourceID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAiProcessFilterInput
  $limit: Int
  $nextToken: String
) {
  aiProcessesByBackendQueueCommunicationSourceIDAndId(
    backendQueueCommunicationSourceID: $backendQueueCommunicationSourceID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      tebeDeleted
      name
      taskTypeID
      taskType {
        id
        types
        createdAt
        updatedAt
        __typename
      }
      aiConfigID
      aiConfig {
        id
        name
        aiParametersID
        createdAt
        updatedAt
        __typename
      }
      usedIn {
        nextToken
        __typename
      }
      communicationSourceType
      frontedWebsocketCommunicationSourceID
      frontedWebsocketCommunicationSource {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      backendQueueCommunicationSourceID
      backendQueueCommunicationSource {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiProcessesByBackendQueueCommunicationSourceIDAndIdQueryVariables,
  APITypes.AiProcessesByBackendQueueCommunicationSourceIDAndIdQuery
>;
export const getAiSettings = /* GraphQL */ `query GetAiSettings($id: ID!) {
  getAiSettings(id: $id) {
    id
    name
    balancerUrl
    processes {
      items {
        id
        aiProcessId
        aiSettingsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiSettingsQueryVariables,
  APITypes.GetAiSettingsQuery
>;
export const listAiSettings = /* GraphQL */ `query ListAiSettings(
  $filter: ModelAiSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      balancerUrl
      processes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiSettingsQueryVariables,
  APITypes.ListAiSettingsQuery
>;
export const getBackendQueue = /* GraphQL */ `query GetBackendQueue($id: ID!) {
  getBackendQueue(id: $id) {
    id
    name
    url
    usedIn {
      items {
        id
        backendQueueId
        backendSettingsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBackendQueueQueryVariables,
  APITypes.GetBackendQueueQuery
>;
export const listBackendQueues = /* GraphQL */ `query ListBackendQueues(
  $filter: ModelBackendQueueFilterInput
  $limit: Int
  $nextToken: String
) {
  listBackendQueues(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      url
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBackendQueuesQueryVariables,
  APITypes.ListBackendQueuesQuery
>;
export const getBackendTopic = /* GraphQL */ `query GetBackendTopic($id: ID!) {
  getBackendTopic(id: $id) {
    id
    name
    arn
    usedIn {
      items {
        id
        backendTopicId
        backendSettingsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBackendTopicQueryVariables,
  APITypes.GetBackendTopicQuery
>;
export const listBackendTopics = /* GraphQL */ `query ListBackendTopics(
  $filter: ModelBackendTopicFilterInput
  $limit: Int
  $nextToken: String
) {
  listBackendTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      arn
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBackendTopicsQueryVariables,
  APITypes.ListBackendTopicsQuery
>;
export const getBackendDatabaseType = /* GraphQL */ `query GetBackendDatabaseType($id: ID!) {
  getBackendDatabaseType(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBackendDatabaseTypeQueryVariables,
  APITypes.GetBackendDatabaseTypeQuery
>;
export const listBackendDatabaseTypes = /* GraphQL */ `query ListBackendDatabaseTypes(
  $filter: ModelBackendDatabaseTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listBackendDatabaseTypes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBackendDatabaseTypesQueryVariables,
  APITypes.ListBackendDatabaseTypesQuery
>;
export const getBackendDatabase = /* GraphQL */ `query GetBackendDatabase($id: ID!) {
  getBackendDatabase(id: $id) {
    id
    name
    backendDatabaseTypeID
    type {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    reference
    usedIn {
      items {
        id
        backendDatabaseId
        backendSettingsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBackendDatabaseQueryVariables,
  APITypes.GetBackendDatabaseQuery
>;
export const listBackendDatabases = /* GraphQL */ `query ListBackendDatabases(
  $filter: ModelBackendDatabaseFilterInput
  $limit: Int
  $nextToken: String
) {
  listBackendDatabases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      backendDatabaseTypeID
      type {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      reference
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBackendDatabasesQueryVariables,
  APITypes.ListBackendDatabasesQuery
>;
export const backendDatabasesByBackendDatabaseTypeIDAndId = /* GraphQL */ `query BackendDatabasesByBackendDatabaseTypeIDAndId(
  $backendDatabaseTypeID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelBackendDatabaseFilterInput
  $limit: Int
  $nextToken: String
) {
  backendDatabasesByBackendDatabaseTypeIDAndId(
    backendDatabaseTypeID: $backendDatabaseTypeID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      backendDatabaseTypeID
      type {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      reference
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BackendDatabasesByBackendDatabaseTypeIDAndIdQueryVariables,
  APITypes.BackendDatabasesByBackendDatabaseTypeIDAndIdQuery
>;
export const getBackendEndpointMethod = /* GraphQL */ `query GetBackendEndpointMethod($id: ID!) {
  getBackendEndpointMethod(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBackendEndpointMethodQueryVariables,
  APITypes.GetBackendEndpointMethodQuery
>;
export const listBackendEndpointMethods = /* GraphQL */ `query ListBackendEndpointMethods(
  $filter: ModelBackendEndpointMethodFilterInput
  $limit: Int
  $nextToken: String
) {
  listBackendEndpointMethods(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBackendEndpointMethodsQueryVariables,
  APITypes.ListBackendEndpointMethodsQuery
>;
export const getBackendEndpoint = /* GraphQL */ `query GetBackendEndpoint($id: ID!) {
  getBackendEndpoint(id: $id) {
    id
    name
    url
    description
    methodID
    method {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    parametersWIP
    usedInSettings {
      items {
        id
        backendEndpointId
        backendSettingsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    usedInTool {
      items {
        id
        aiApiToolId
        backendEndpointId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBackendEndpointQueryVariables,
  APITypes.GetBackendEndpointQuery
>;
export const listBackendEndpoints = /* GraphQL */ `query ListBackendEndpoints(
  $filter: ModelBackendEndpointFilterInput
  $limit: Int
  $nextToken: String
) {
  listBackendEndpoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      url
      description
      methodID
      method {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      parametersWIP
      usedInSettings {
        nextToken
        __typename
      }
      usedInTool {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBackendEndpointsQueryVariables,
  APITypes.ListBackendEndpointsQuery
>;
export const backendEndpointsByMethodIDAndId = /* GraphQL */ `query BackendEndpointsByMethodIDAndId(
  $methodID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelBackendEndpointFilterInput
  $limit: Int
  $nextToken: String
) {
  backendEndpointsByMethodIDAndId(
    methodID: $methodID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      url
      description
      methodID
      method {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      parametersWIP
      usedInSettings {
        nextToken
        __typename
      }
      usedInTool {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BackendEndpointsByMethodIDAndIdQueryVariables,
  APITypes.BackendEndpointsByMethodIDAndIdQuery
>;
export const getBackendSettings = /* GraphQL */ `query GetBackendSettings($id: ID!) {
  getBackendSettings(id: $id) {
    id
    name
    region
    secretName
    endpoints {
      items {
        id
        backendEndpointId
        backendSettingsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    databases {
      items {
        id
        backendDatabaseId
        backendSettingsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    queues {
      items {
        id
        backendQueueId
        backendSettingsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    topics {
      items {
        id
        backendTopicId
        backendSettingsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBackendSettingsQueryVariables,
  APITypes.GetBackendSettingsQuery
>;
export const listBackendSettings = /* GraphQL */ `query ListBackendSettings(
  $filter: ModelBackendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listBackendSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      region
      secretName
      endpoints {
        nextToken
        __typename
      }
      databases {
        nextToken
        __typename
      }
      queues {
        nextToken
        __typename
      }
      topics {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBackendSettingsQueryVariables,
  APITypes.ListBackendSettingsQuery
>;
export const getFrontendComponent = /* GraphQL */ `query GetFrontendComponent($id: ID!) {
  getFrontendComponent(id: $id) {
    id
    name
    description
    usedInSettings {
      items {
        id
        frontendComponentId
        frontendSettingsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    usedInTool {
      items {
        id
        aiRenderToolId
        frontendComponentId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFrontendComponentQueryVariables,
  APITypes.GetFrontendComponentQuery
>;
export const listFrontendComponents = /* GraphQL */ `query ListFrontendComponents(
  $filter: ModelFrontendComponentFilterInput
  $limit: Int
  $nextToken: String
) {
  listFrontendComponents(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      usedInSettings {
        nextToken
        __typename
      }
      usedInTool {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFrontendComponentsQueryVariables,
  APITypes.ListFrontendComponentsQuery
>;
export const getFrontendSettings = /* GraphQL */ `query GetFrontendSettings($id: ID!) {
  getFrontendSettings(id: $id) {
    id
    name
    domain
    cssS3Url
    components {
      items {
        id
        frontendComponentId
        frontendSettingsId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFrontendSettingsQueryVariables,
  APITypes.GetFrontendSettingsQuery
>;
export const listFrontendSettings = /* GraphQL */ `query ListFrontendSettings(
  $filter: ModelFrontendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listFrontendSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      domain
      cssS3Url
      components {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFrontendSettingsQueryVariables,
  APITypes.ListFrontendSettingsQuery
>;
export const getApplicationStageCognitoUserPool = /* GraphQL */ `query GetApplicationStageCognitoUserPool($id: ID!) {
  getApplicationStageCognitoUserPool(id: $id) {
    id
    name
    userPoolId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetApplicationStageCognitoUserPoolQueryVariables,
  APITypes.GetApplicationStageCognitoUserPoolQuery
>;
export const listApplicationStageCognitoUserPools = /* GraphQL */ `query ListApplicationStageCognitoUserPools(
  $filter: ModelApplicationStageCognitoUserPoolFilterInput
  $limit: Int
  $nextToken: String
) {
  listApplicationStageCognitoUserPools(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      userPoolId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListApplicationStageCognitoUserPoolsQueryVariables,
  APITypes.ListApplicationStageCognitoUserPoolsQuery
>;
export const getApplicationStage = /* GraphQL */ `query GetApplicationStage($id: ID!) {
  getApplicationStage(id: $id) {
    id
    name
    aiSettingsID
    aiSettings {
      id
      name
      balancerUrl
      processes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    backendSettingsID
    backendSettings {
      id
      name
      region
      secretName
      endpoints {
        nextToken
        __typename
      }
      databases {
        nextToken
        __typename
      }
      queues {
        nextToken
        __typename
      }
      topics {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    frontendSettingsID
    frontendSettings {
      id
      name
      domain
      cssS3Url
      components {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    cognitoUserPoolID
    cognitoUserPool {
      id
      name
      userPoolId
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetApplicationStageQueryVariables,
  APITypes.GetApplicationStageQuery
>;
export const listApplicationStages = /* GraphQL */ `query ListApplicationStages(
  $filter: ModelApplicationStageFilterInput
  $limit: Int
  $nextToken: String
) {
  listApplicationStages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      aiSettingsID
      aiSettings {
        id
        name
        balancerUrl
        createdAt
        updatedAt
        __typename
      }
      backendSettingsID
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      frontendSettingsID
      frontendSettings {
        id
        name
        domain
        cssS3Url
        createdAt
        updatedAt
        __typename
      }
      cognitoUserPoolID
      cognitoUserPool {
        id
        name
        userPoolId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListApplicationStagesQueryVariables,
  APITypes.ListApplicationStagesQuery
>;
export const applicationStagesByName = /* GraphQL */ `query ApplicationStagesByName(
  $name: String!
  $sortDirection: ModelSortDirection
  $filter: ModelApplicationStageFilterInput
  $limit: Int
  $nextToken: String
) {
  applicationStagesByName(
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      aiSettingsID
      aiSettings {
        id
        name
        balancerUrl
        createdAt
        updatedAt
        __typename
      }
      backendSettingsID
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      frontendSettingsID
      frontendSettings {
        id
        name
        domain
        cssS3Url
        createdAt
        updatedAt
        __typename
      }
      cognitoUserPoolID
      cognitoUserPool {
        id
        name
        userPoolId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ApplicationStagesByNameQueryVariables,
  APITypes.ApplicationStagesByNameQuery
>;
export const applicationStagesByAiSettingsIDAndId = /* GraphQL */ `query ApplicationStagesByAiSettingsIDAndId(
  $aiSettingsID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelApplicationStageFilterInput
  $limit: Int
  $nextToken: String
) {
  applicationStagesByAiSettingsIDAndId(
    aiSettingsID: $aiSettingsID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      aiSettingsID
      aiSettings {
        id
        name
        balancerUrl
        createdAt
        updatedAt
        __typename
      }
      backendSettingsID
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      frontendSettingsID
      frontendSettings {
        id
        name
        domain
        cssS3Url
        createdAt
        updatedAt
        __typename
      }
      cognitoUserPoolID
      cognitoUserPool {
        id
        name
        userPoolId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ApplicationStagesByAiSettingsIDAndIdQueryVariables,
  APITypes.ApplicationStagesByAiSettingsIDAndIdQuery
>;
export const applicationStagesByBackendSettingsIDAndId = /* GraphQL */ `query ApplicationStagesByBackendSettingsIDAndId(
  $backendSettingsID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelApplicationStageFilterInput
  $limit: Int
  $nextToken: String
) {
  applicationStagesByBackendSettingsIDAndId(
    backendSettingsID: $backendSettingsID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      aiSettingsID
      aiSettings {
        id
        name
        balancerUrl
        createdAt
        updatedAt
        __typename
      }
      backendSettingsID
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      frontendSettingsID
      frontendSettings {
        id
        name
        domain
        cssS3Url
        createdAt
        updatedAt
        __typename
      }
      cognitoUserPoolID
      cognitoUserPool {
        id
        name
        userPoolId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ApplicationStagesByBackendSettingsIDAndIdQueryVariables,
  APITypes.ApplicationStagesByBackendSettingsIDAndIdQuery
>;
export const applicationStagesByFrontendSettingsIDAndId = /* GraphQL */ `query ApplicationStagesByFrontendSettingsIDAndId(
  $frontendSettingsID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelApplicationStageFilterInput
  $limit: Int
  $nextToken: String
) {
  applicationStagesByFrontendSettingsIDAndId(
    frontendSettingsID: $frontendSettingsID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      aiSettingsID
      aiSettings {
        id
        name
        balancerUrl
        createdAt
        updatedAt
        __typename
      }
      backendSettingsID
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      frontendSettingsID
      frontendSettings {
        id
        name
        domain
        cssS3Url
        createdAt
        updatedAt
        __typename
      }
      cognitoUserPoolID
      cognitoUserPool {
        id
        name
        userPoolId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ApplicationStagesByFrontendSettingsIDAndIdQueryVariables,
  APITypes.ApplicationStagesByFrontendSettingsIDAndIdQuery
>;
export const applicationStagesByCognitoUserPoolIDAndId = /* GraphQL */ `query ApplicationStagesByCognitoUserPoolIDAndId(
  $cognitoUserPoolID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelApplicationStageFilterInput
  $limit: Int
  $nextToken: String
) {
  applicationStagesByCognitoUserPoolIDAndId(
    cognitoUserPoolID: $cognitoUserPoolID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      aiSettingsID
      aiSettings {
        id
        name
        balancerUrl
        createdAt
        updatedAt
        __typename
      }
      backendSettingsID
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      frontendSettingsID
      frontendSettings {
        id
        name
        domain
        cssS3Url
        createdAt
        updatedAt
        __typename
      }
      cognitoUserPoolID
      cognitoUserPool {
        id
        name
        userPoolId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ApplicationStagesByCognitoUserPoolIDAndIdQueryVariables,
  APITypes.ApplicationStagesByCognitoUserPoolIDAndIdQuery
>;
export const getApplicationAiServerSnapshotReference = /* GraphQL */ `query GetApplicationAiServerSnapshotReference($id: ID!) {
  getApplicationAiServerSnapshotReference(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetApplicationAiServerSnapshotReferenceQueryVariables,
  APITypes.GetApplicationAiServerSnapshotReferenceQuery
>;
export const listApplicationAiServerSnapshotReferences = /* GraphQL */ `query ListApplicationAiServerSnapshotReferences(
  $filter: ModelApplicationAiServerSnapshotReferenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listApplicationAiServerSnapshotReferences(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListApplicationAiServerSnapshotReferencesQueryVariables,
  APITypes.ListApplicationAiServerSnapshotReferencesQuery
>;
export const getApplication = /* GraphQL */ `query GetApplication($id: ID!) {
  getApplication(id: $id) {
    id
    url
    name
    version
    devStageID
    DEV {
      id
      name
      aiSettingsID
      aiSettings {
        id
        name
        balancerUrl
        createdAt
        updatedAt
        __typename
      }
      backendSettingsID
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      frontendSettingsID
      frontendSettings {
        id
        name
        domain
        cssS3Url
        createdAt
        updatedAt
        __typename
      }
      cognitoUserPoolID
      cognitoUserPool {
        id
        name
        userPoolId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    stagingStageID
    STAGING {
      id
      name
      aiSettingsID
      aiSettings {
        id
        name
        balancerUrl
        createdAt
        updatedAt
        __typename
      }
      backendSettingsID
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      frontendSettingsID
      frontendSettings {
        id
        name
        domain
        cssS3Url
        createdAt
        updatedAt
        __typename
      }
      cognitoUserPoolID
      cognitoUserPool {
        id
        name
        userPoolId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    prodStageID
    PROD {
      id
      name
      aiSettingsID
      aiSettings {
        id
        name
        balancerUrl
        createdAt
        updatedAt
        __typename
      }
      backendSettingsID
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      frontendSettingsID
      frontendSettings {
        id
        name
        domain
        cssS3Url
        createdAt
        updatedAt
        __typename
      }
      cognitoUserPoolID
      cognitoUserPool {
        id
        name
        userPoolId
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    aiServerSnapshotReferenceID
    aiServerSnapshotReference {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetApplicationQueryVariables,
  APITypes.GetApplicationQuery
>;
export const listApplications = /* GraphQL */ `query ListApplications(
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      name
      version
      devStageID
      DEV {
        id
        name
        aiSettingsID
        backendSettingsID
        frontendSettingsID
        cognitoUserPoolID
        createdAt
        updatedAt
        __typename
      }
      stagingStageID
      STAGING {
        id
        name
        aiSettingsID
        backendSettingsID
        frontendSettingsID
        cognitoUserPoolID
        createdAt
        updatedAt
        __typename
      }
      prodStageID
      PROD {
        id
        name
        aiSettingsID
        backendSettingsID
        frontendSettingsID
        cognitoUserPoolID
        createdAt
        updatedAt
        __typename
      }
      aiServerSnapshotReferenceID
      aiServerSnapshotReference {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListApplicationsQueryVariables,
  APITypes.ListApplicationsQuery
>;
export const applicationsByDevStageIDAndId = /* GraphQL */ `query ApplicationsByDevStageIDAndId(
  $devStageID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  applicationsByDevStageIDAndId(
    devStageID: $devStageID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      url
      name
      version
      devStageID
      DEV {
        id
        name
        aiSettingsID
        backendSettingsID
        frontendSettingsID
        cognitoUserPoolID
        createdAt
        updatedAt
        __typename
      }
      stagingStageID
      STAGING {
        id
        name
        aiSettingsID
        backendSettingsID
        frontendSettingsID
        cognitoUserPoolID
        createdAt
        updatedAt
        __typename
      }
      prodStageID
      PROD {
        id
        name
        aiSettingsID
        backendSettingsID
        frontendSettingsID
        cognitoUserPoolID
        createdAt
        updatedAt
        __typename
      }
      aiServerSnapshotReferenceID
      aiServerSnapshotReference {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ApplicationsByDevStageIDAndIdQueryVariables,
  APITypes.ApplicationsByDevStageIDAndIdQuery
>;
export const applicationsByStagingStageIDAndId = /* GraphQL */ `query ApplicationsByStagingStageIDAndId(
  $stagingStageID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  applicationsByStagingStageIDAndId(
    stagingStageID: $stagingStageID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      url
      name
      version
      devStageID
      DEV {
        id
        name
        aiSettingsID
        backendSettingsID
        frontendSettingsID
        cognitoUserPoolID
        createdAt
        updatedAt
        __typename
      }
      stagingStageID
      STAGING {
        id
        name
        aiSettingsID
        backendSettingsID
        frontendSettingsID
        cognitoUserPoolID
        createdAt
        updatedAt
        __typename
      }
      prodStageID
      PROD {
        id
        name
        aiSettingsID
        backendSettingsID
        frontendSettingsID
        cognitoUserPoolID
        createdAt
        updatedAt
        __typename
      }
      aiServerSnapshotReferenceID
      aiServerSnapshotReference {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ApplicationsByStagingStageIDAndIdQueryVariables,
  APITypes.ApplicationsByStagingStageIDAndIdQuery
>;
export const applicationsByProdStageIDAndId = /* GraphQL */ `query ApplicationsByProdStageIDAndId(
  $prodStageID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  applicationsByProdStageIDAndId(
    prodStageID: $prodStageID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      url
      name
      version
      devStageID
      DEV {
        id
        name
        aiSettingsID
        backendSettingsID
        frontendSettingsID
        cognitoUserPoolID
        createdAt
        updatedAt
        __typename
      }
      stagingStageID
      STAGING {
        id
        name
        aiSettingsID
        backendSettingsID
        frontendSettingsID
        cognitoUserPoolID
        createdAt
        updatedAt
        __typename
      }
      prodStageID
      PROD {
        id
        name
        aiSettingsID
        backendSettingsID
        frontendSettingsID
        cognitoUserPoolID
        createdAt
        updatedAt
        __typename
      }
      aiServerSnapshotReferenceID
      aiServerSnapshotReference {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ApplicationsByProdStageIDAndIdQueryVariables,
  APITypes.ApplicationsByProdStageIDAndIdQuery
>;
export const applicationsByAiServerSnapshotReferenceIDAndId = /* GraphQL */ `query ApplicationsByAiServerSnapshotReferenceIDAndId(
  $aiServerSnapshotReferenceID: ID!
  $id: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  applicationsByAiServerSnapshotReferenceIDAndId(
    aiServerSnapshotReferenceID: $aiServerSnapshotReferenceID
    id: $id
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      url
      name
      version
      devStageID
      DEV {
        id
        name
        aiSettingsID
        backendSettingsID
        frontendSettingsID
        cognitoUserPoolID
        createdAt
        updatedAt
        __typename
      }
      stagingStageID
      STAGING {
        id
        name
        aiSettingsID
        backendSettingsID
        frontendSettingsID
        cognitoUserPoolID
        createdAt
        updatedAt
        __typename
      }
      prodStageID
      PROD {
        id
        name
        aiSettingsID
        backendSettingsID
        frontendSettingsID
        cognitoUserPoolID
        createdAt
        updatedAt
        __typename
      }
      aiServerSnapshotReferenceID
      aiServerSnapshotReference {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ApplicationsByAiServerSnapshotReferenceIDAndIdQueryVariables,
  APITypes.ApplicationsByAiServerSnapshotReferenceIDAndIdQuery
>;
export const getBackendEndpointAiApiTool = /* GraphQL */ `query GetBackendEndpointAiApiTool($id: ID!) {
  getBackendEndpointAiApiTool(id: $id) {
    id
    aiApiToolId
    backendEndpointId
    aiApiTool {
      id
      name
      func
      useCases
      description
      payload
      endpoint {
        nextToken
        __typename
      }
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    backendEndpoint {
      id
      name
      url
      description
      methodID
      method {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      parametersWIP
      usedInSettings {
        nextToken
        __typename
      }
      usedInTool {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBackendEndpointAiApiToolQueryVariables,
  APITypes.GetBackendEndpointAiApiToolQuery
>;
export const listBackendEndpointAiApiTools = /* GraphQL */ `query ListBackendEndpointAiApiTools(
  $filter: ModelBackendEndpointAiApiToolFilterInput
  $limit: Int
  $nextToken: String
) {
  listBackendEndpointAiApiTools(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiApiToolId
      backendEndpointId
      aiApiTool {
        id
        name
        func
        useCases
        description
        payload
        createdAt
        updatedAt
        __typename
      }
      backendEndpoint {
        id
        name
        url
        description
        methodID
        parametersWIP
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBackendEndpointAiApiToolsQueryVariables,
  APITypes.ListBackendEndpointAiApiToolsQuery
>;
export const backendEndpointAiApiToolsByAiApiToolId = /* GraphQL */ `query BackendEndpointAiApiToolsByAiApiToolId(
  $aiApiToolId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBackendEndpointAiApiToolFilterInput
  $limit: Int
  $nextToken: String
) {
  backendEndpointAiApiToolsByAiApiToolId(
    aiApiToolId: $aiApiToolId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiApiToolId
      backendEndpointId
      aiApiTool {
        id
        name
        func
        useCases
        description
        payload
        createdAt
        updatedAt
        __typename
      }
      backendEndpoint {
        id
        name
        url
        description
        methodID
        parametersWIP
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BackendEndpointAiApiToolsByAiApiToolIdQueryVariables,
  APITypes.BackendEndpointAiApiToolsByAiApiToolIdQuery
>;
export const backendEndpointAiApiToolsByBackendEndpointId = /* GraphQL */ `query BackendEndpointAiApiToolsByBackendEndpointId(
  $backendEndpointId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBackendEndpointAiApiToolFilterInput
  $limit: Int
  $nextToken: String
) {
  backendEndpointAiApiToolsByBackendEndpointId(
    backendEndpointId: $backendEndpointId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiApiToolId
      backendEndpointId
      aiApiTool {
        id
        name
        func
        useCases
        description
        payload
        createdAt
        updatedAt
        __typename
      }
      backendEndpoint {
        id
        name
        url
        description
        methodID
        parametersWIP
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BackendEndpointAiApiToolsByBackendEndpointIdQueryVariables,
  APITypes.BackendEndpointAiApiToolsByBackendEndpointIdQuery
>;
export const getAiApiToolAiToolGroup = /* GraphQL */ `query GetAiApiToolAiToolGroup($id: ID!) {
  getAiApiToolAiToolGroup(id: $id) {
    id
    aiApiToolId
    aiToolGroupId
    aiApiTool {
      id
      name
      func
      useCases
      description
      payload
      endpoint {
        nextToken
        __typename
      }
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    aiToolGroup {
      id
      name
      apiTools {
        nextToken
        __typename
      }
      renderTools {
        nextToken
        __typename
      }
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiApiToolAiToolGroupQueryVariables,
  APITypes.GetAiApiToolAiToolGroupQuery
>;
export const listAiApiToolAiToolGroups = /* GraphQL */ `query ListAiApiToolAiToolGroups(
  $filter: ModelAiApiToolAiToolGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiApiToolAiToolGroups(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiApiToolId
      aiToolGroupId
      aiApiTool {
        id
        name
        func
        useCases
        description
        payload
        createdAt
        updatedAt
        __typename
      }
      aiToolGroup {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiApiToolAiToolGroupsQueryVariables,
  APITypes.ListAiApiToolAiToolGroupsQuery
>;
export const aiApiToolAiToolGroupsByAiApiToolId = /* GraphQL */ `query AiApiToolAiToolGroupsByAiApiToolId(
  $aiApiToolId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAiApiToolAiToolGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  aiApiToolAiToolGroupsByAiApiToolId(
    aiApiToolId: $aiApiToolId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiApiToolId
      aiToolGroupId
      aiApiTool {
        id
        name
        func
        useCases
        description
        payload
        createdAt
        updatedAt
        __typename
      }
      aiToolGroup {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiApiToolAiToolGroupsByAiApiToolIdQueryVariables,
  APITypes.AiApiToolAiToolGroupsByAiApiToolIdQuery
>;
export const aiApiToolAiToolGroupsByAiToolGroupId = /* GraphQL */ `query AiApiToolAiToolGroupsByAiToolGroupId(
  $aiToolGroupId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAiApiToolAiToolGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  aiApiToolAiToolGroupsByAiToolGroupId(
    aiToolGroupId: $aiToolGroupId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiApiToolId
      aiToolGroupId
      aiApiTool {
        id
        name
        func
        useCases
        description
        payload
        createdAt
        updatedAt
        __typename
      }
      aiToolGroup {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiApiToolAiToolGroupsByAiToolGroupIdQueryVariables,
  APITypes.AiApiToolAiToolGroupsByAiToolGroupIdQuery
>;
export const getFrontendComponentAiRenderTool = /* GraphQL */ `query GetFrontendComponentAiRenderTool($id: ID!) {
  getFrontendComponentAiRenderTool(id: $id) {
    id
    aiRenderToolId
    frontendComponentId
    aiRenderTool {
      id
      name
      func
      useCases
      description
      payload
      action
      component {
        nextToken
        __typename
      }
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    frontendComponent {
      id
      name
      description
      usedInSettings {
        nextToken
        __typename
      }
      usedInTool {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFrontendComponentAiRenderToolQueryVariables,
  APITypes.GetFrontendComponentAiRenderToolQuery
>;
export const listFrontendComponentAiRenderTools = /* GraphQL */ `query ListFrontendComponentAiRenderTools(
  $filter: ModelFrontendComponentAiRenderToolFilterInput
  $limit: Int
  $nextToken: String
) {
  listFrontendComponentAiRenderTools(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiRenderToolId
      frontendComponentId
      aiRenderTool {
        id
        name
        func
        useCases
        description
        payload
        action
        createdAt
        updatedAt
        __typename
      }
      frontendComponent {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFrontendComponentAiRenderToolsQueryVariables,
  APITypes.ListFrontendComponentAiRenderToolsQuery
>;
export const frontendComponentAiRenderToolsByAiRenderToolId = /* GraphQL */ `query FrontendComponentAiRenderToolsByAiRenderToolId(
  $aiRenderToolId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFrontendComponentAiRenderToolFilterInput
  $limit: Int
  $nextToken: String
) {
  frontendComponentAiRenderToolsByAiRenderToolId(
    aiRenderToolId: $aiRenderToolId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiRenderToolId
      frontendComponentId
      aiRenderTool {
        id
        name
        func
        useCases
        description
        payload
        action
        createdAt
        updatedAt
        __typename
      }
      frontendComponent {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FrontendComponentAiRenderToolsByAiRenderToolIdQueryVariables,
  APITypes.FrontendComponentAiRenderToolsByAiRenderToolIdQuery
>;
export const frontendComponentAiRenderToolsByFrontendComponentId = /* GraphQL */ `query FrontendComponentAiRenderToolsByFrontendComponentId(
  $frontendComponentId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFrontendComponentAiRenderToolFilterInput
  $limit: Int
  $nextToken: String
) {
  frontendComponentAiRenderToolsByFrontendComponentId(
    frontendComponentId: $frontendComponentId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiRenderToolId
      frontendComponentId
      aiRenderTool {
        id
        name
        func
        useCases
        description
        payload
        action
        createdAt
        updatedAt
        __typename
      }
      frontendComponent {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FrontendComponentAiRenderToolsByFrontendComponentIdQueryVariables,
  APITypes.FrontendComponentAiRenderToolsByFrontendComponentIdQuery
>;
export const getAiRenderToolAiToolGroup = /* GraphQL */ `query GetAiRenderToolAiToolGroup($id: ID!) {
  getAiRenderToolAiToolGroup(id: $id) {
    id
    aiRenderToolId
    aiToolGroupId
    aiRenderTool {
      id
      name
      func
      useCases
      description
      payload
      action
      component {
        nextToken
        __typename
      }
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    aiToolGroup {
      id
      name
      apiTools {
        nextToken
        __typename
      }
      renderTools {
        nextToken
        __typename
      }
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiRenderToolAiToolGroupQueryVariables,
  APITypes.GetAiRenderToolAiToolGroupQuery
>;
export const listAiRenderToolAiToolGroups = /* GraphQL */ `query ListAiRenderToolAiToolGroups(
  $filter: ModelAiRenderToolAiToolGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiRenderToolAiToolGroups(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiRenderToolId
      aiToolGroupId
      aiRenderTool {
        id
        name
        func
        useCases
        description
        payload
        action
        createdAt
        updatedAt
        __typename
      }
      aiToolGroup {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiRenderToolAiToolGroupsQueryVariables,
  APITypes.ListAiRenderToolAiToolGroupsQuery
>;
export const aiRenderToolAiToolGroupsByAiRenderToolId = /* GraphQL */ `query AiRenderToolAiToolGroupsByAiRenderToolId(
  $aiRenderToolId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAiRenderToolAiToolGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  aiRenderToolAiToolGroupsByAiRenderToolId(
    aiRenderToolId: $aiRenderToolId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiRenderToolId
      aiToolGroupId
      aiRenderTool {
        id
        name
        func
        useCases
        description
        payload
        action
        createdAt
        updatedAt
        __typename
      }
      aiToolGroup {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiRenderToolAiToolGroupsByAiRenderToolIdQueryVariables,
  APITypes.AiRenderToolAiToolGroupsByAiRenderToolIdQuery
>;
export const aiRenderToolAiToolGroupsByAiToolGroupId = /* GraphQL */ `query AiRenderToolAiToolGroupsByAiToolGroupId(
  $aiToolGroupId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAiRenderToolAiToolGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  aiRenderToolAiToolGroupsByAiToolGroupId(
    aiToolGroupId: $aiToolGroupId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiRenderToolId
      aiToolGroupId
      aiRenderTool {
        id
        name
        func
        useCases
        description
        payload
        action
        createdAt
        updatedAt
        __typename
      }
      aiToolGroup {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiRenderToolAiToolGroupsByAiToolGroupIdQueryVariables,
  APITypes.AiRenderToolAiToolGroupsByAiToolGroupIdQuery
>;
export const getAiToolGroupAiConfiguration = /* GraphQL */ `query GetAiToolGroupAiConfiguration($id: ID!) {
  getAiToolGroupAiConfiguration(id: $id) {
    id
    aiToolGroupId
    aiConfigurationId
    aiToolGroup {
      id
      name
      apiTools {
        nextToken
        __typename
      }
      renderTools {
        nextToken
        __typename
      }
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    aiConfiguration {
      id
      name
      aiParametersID
      aiParameters {
        id
        name
        role
        companyID
        conversationPurpose
        conversationType
        prePrompt
        postPrompt
        llmID
        chatMemory
        responseTemperature
        responseLanguage
        createdAt
        updatedAt
        __typename
      }
      tools {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiToolGroupAiConfigurationQueryVariables,
  APITypes.GetAiToolGroupAiConfigurationQuery
>;
export const listAiToolGroupAiConfigurations = /* GraphQL */ `query ListAiToolGroupAiConfigurations(
  $filter: ModelAiToolGroupAiConfigurationFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiToolGroupAiConfigurations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiToolGroupId
      aiConfigurationId
      aiToolGroup {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      aiConfiguration {
        id
        name
        aiParametersID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiToolGroupAiConfigurationsQueryVariables,
  APITypes.ListAiToolGroupAiConfigurationsQuery
>;
export const aiToolGroupAiConfigurationsByAiToolGroupId = /* GraphQL */ `query AiToolGroupAiConfigurationsByAiToolGroupId(
  $aiToolGroupId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAiToolGroupAiConfigurationFilterInput
  $limit: Int
  $nextToken: String
) {
  aiToolGroupAiConfigurationsByAiToolGroupId(
    aiToolGroupId: $aiToolGroupId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiToolGroupId
      aiConfigurationId
      aiToolGroup {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      aiConfiguration {
        id
        name
        aiParametersID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiToolGroupAiConfigurationsByAiToolGroupIdQueryVariables,
  APITypes.AiToolGroupAiConfigurationsByAiToolGroupIdQuery
>;
export const aiToolGroupAiConfigurationsByAiConfigurationId = /* GraphQL */ `query AiToolGroupAiConfigurationsByAiConfigurationId(
  $aiConfigurationId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAiToolGroupAiConfigurationFilterInput
  $limit: Int
  $nextToken: String
) {
  aiToolGroupAiConfigurationsByAiConfigurationId(
    aiConfigurationId: $aiConfigurationId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiToolGroupId
      aiConfigurationId
      aiToolGroup {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      aiConfiguration {
        id
        name
        aiParametersID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiToolGroupAiConfigurationsByAiConfigurationIdQueryVariables,
  APITypes.AiToolGroupAiConfigurationsByAiConfigurationIdQuery
>;
export const getAiProcessAiSettings = /* GraphQL */ `query GetAiProcessAiSettings($id: ID!) {
  getAiProcessAiSettings(id: $id) {
    id
    aiProcessId
    aiSettingsId
    aiProcess {
      id
      tebeDeleted
      name
      taskTypeID
      taskType {
        id
        types
        createdAt
        updatedAt
        __typename
      }
      aiConfigID
      aiConfig {
        id
        name
        aiParametersID
        createdAt
        updatedAt
        __typename
      }
      usedIn {
        nextToken
        __typename
      }
      communicationSourceType
      frontedWebsocketCommunicationSourceID
      frontedWebsocketCommunicationSource {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      backendQueueCommunicationSourceID
      backendQueueCommunicationSource {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    aiSettings {
      id
      name
      balancerUrl
      processes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAiProcessAiSettingsQueryVariables,
  APITypes.GetAiProcessAiSettingsQuery
>;
export const listAiProcessAiSettings = /* GraphQL */ `query ListAiProcessAiSettings(
  $filter: ModelAiProcessAiSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listAiProcessAiSettings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiProcessId
      aiSettingsId
      aiProcess {
        id
        tebeDeleted
        name
        taskTypeID
        aiConfigID
        communicationSourceType
        frontedWebsocketCommunicationSourceID
        backendQueueCommunicationSourceID
        createdAt
        updatedAt
        __typename
      }
      aiSettings {
        id
        name
        balancerUrl
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAiProcessAiSettingsQueryVariables,
  APITypes.ListAiProcessAiSettingsQuery
>;
export const aiProcessAiSettingsByAiProcessId = /* GraphQL */ `query AiProcessAiSettingsByAiProcessId(
  $aiProcessId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAiProcessAiSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  aiProcessAiSettingsByAiProcessId(
    aiProcessId: $aiProcessId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiProcessId
      aiSettingsId
      aiProcess {
        id
        tebeDeleted
        name
        taskTypeID
        aiConfigID
        communicationSourceType
        frontedWebsocketCommunicationSourceID
        backendQueueCommunicationSourceID
        createdAt
        updatedAt
        __typename
      }
      aiSettings {
        id
        name
        balancerUrl
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiProcessAiSettingsByAiProcessIdQueryVariables,
  APITypes.AiProcessAiSettingsByAiProcessIdQuery
>;
export const aiProcessAiSettingsByAiSettingsId = /* GraphQL */ `query AiProcessAiSettingsByAiSettingsId(
  $aiSettingsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelAiProcessAiSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  aiProcessAiSettingsByAiSettingsId(
    aiSettingsId: $aiSettingsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      aiProcessId
      aiSettingsId
      aiProcess {
        id
        tebeDeleted
        name
        taskTypeID
        aiConfigID
        communicationSourceType
        frontedWebsocketCommunicationSourceID
        backendQueueCommunicationSourceID
        createdAt
        updatedAt
        __typename
      }
      aiSettings {
        id
        name
        balancerUrl
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AiProcessAiSettingsByAiSettingsIdQueryVariables,
  APITypes.AiProcessAiSettingsByAiSettingsIdQuery
>;
export const getBackendQueueBackendSettings = /* GraphQL */ `query GetBackendQueueBackendSettings($id: ID!) {
  getBackendQueueBackendSettings(id: $id) {
    id
    backendQueueId
    backendSettingsId
    backendQueue {
      id
      name
      url
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    backendSettings {
      id
      name
      region
      secretName
      endpoints {
        nextToken
        __typename
      }
      databases {
        nextToken
        __typename
      }
      queues {
        nextToken
        __typename
      }
      topics {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBackendQueueBackendSettingsQueryVariables,
  APITypes.GetBackendQueueBackendSettingsQuery
>;
export const listBackendQueueBackendSettings = /* GraphQL */ `query ListBackendQueueBackendSettings(
  $filter: ModelBackendQueueBackendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listBackendQueueBackendSettings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      backendQueueId
      backendSettingsId
      backendQueue {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBackendQueueBackendSettingsQueryVariables,
  APITypes.ListBackendQueueBackendSettingsQuery
>;
export const backendQueueBackendSettingsByBackendQueueId = /* GraphQL */ `query BackendQueueBackendSettingsByBackendQueueId(
  $backendQueueId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBackendQueueBackendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  backendQueueBackendSettingsByBackendQueueId(
    backendQueueId: $backendQueueId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      backendQueueId
      backendSettingsId
      backendQueue {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BackendQueueBackendSettingsByBackendQueueIdQueryVariables,
  APITypes.BackendQueueBackendSettingsByBackendQueueIdQuery
>;
export const backendQueueBackendSettingsByBackendSettingsId = /* GraphQL */ `query BackendQueueBackendSettingsByBackendSettingsId(
  $backendSettingsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBackendQueueBackendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  backendQueueBackendSettingsByBackendSettingsId(
    backendSettingsId: $backendSettingsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      backendQueueId
      backendSettingsId
      backendQueue {
        id
        name
        url
        createdAt
        updatedAt
        __typename
      }
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BackendQueueBackendSettingsByBackendSettingsIdQueryVariables,
  APITypes.BackendQueueBackendSettingsByBackendSettingsIdQuery
>;
export const getBackendTopicBackendSettings = /* GraphQL */ `query GetBackendTopicBackendSettings($id: ID!) {
  getBackendTopicBackendSettings(id: $id) {
    id
    backendTopicId
    backendSettingsId
    backendTopic {
      id
      name
      arn
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    backendSettings {
      id
      name
      region
      secretName
      endpoints {
        nextToken
        __typename
      }
      databases {
        nextToken
        __typename
      }
      queues {
        nextToken
        __typename
      }
      topics {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBackendTopicBackendSettingsQueryVariables,
  APITypes.GetBackendTopicBackendSettingsQuery
>;
export const listBackendTopicBackendSettings = /* GraphQL */ `query ListBackendTopicBackendSettings(
  $filter: ModelBackendTopicBackendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listBackendTopicBackendSettings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      backendTopicId
      backendSettingsId
      backendTopic {
        id
        name
        arn
        createdAt
        updatedAt
        __typename
      }
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBackendTopicBackendSettingsQueryVariables,
  APITypes.ListBackendTopicBackendSettingsQuery
>;
export const backendTopicBackendSettingsByBackendTopicId = /* GraphQL */ `query BackendTopicBackendSettingsByBackendTopicId(
  $backendTopicId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBackendTopicBackendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  backendTopicBackendSettingsByBackendTopicId(
    backendTopicId: $backendTopicId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      backendTopicId
      backendSettingsId
      backendTopic {
        id
        name
        arn
        createdAt
        updatedAt
        __typename
      }
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BackendTopicBackendSettingsByBackendTopicIdQueryVariables,
  APITypes.BackendTopicBackendSettingsByBackendTopicIdQuery
>;
export const backendTopicBackendSettingsByBackendSettingsId = /* GraphQL */ `query BackendTopicBackendSettingsByBackendSettingsId(
  $backendSettingsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBackendTopicBackendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  backendTopicBackendSettingsByBackendSettingsId(
    backendSettingsId: $backendSettingsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      backendTopicId
      backendSettingsId
      backendTopic {
        id
        name
        arn
        createdAt
        updatedAt
        __typename
      }
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BackendTopicBackendSettingsByBackendSettingsIdQueryVariables,
  APITypes.BackendTopicBackendSettingsByBackendSettingsIdQuery
>;
export const getBackendDatabaseBackendSettings = /* GraphQL */ `query GetBackendDatabaseBackendSettings($id: ID!) {
  getBackendDatabaseBackendSettings(id: $id) {
    id
    backendDatabaseId
    backendSettingsId
    backendDatabase {
      id
      name
      backendDatabaseTypeID
      type {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      reference
      usedIn {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    backendSettings {
      id
      name
      region
      secretName
      endpoints {
        nextToken
        __typename
      }
      databases {
        nextToken
        __typename
      }
      queues {
        nextToken
        __typename
      }
      topics {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBackendDatabaseBackendSettingsQueryVariables,
  APITypes.GetBackendDatabaseBackendSettingsQuery
>;
export const listBackendDatabaseBackendSettings = /* GraphQL */ `query ListBackendDatabaseBackendSettings(
  $filter: ModelBackendDatabaseBackendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listBackendDatabaseBackendSettings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      backendDatabaseId
      backendSettingsId
      backendDatabase {
        id
        name
        backendDatabaseTypeID
        reference
        createdAt
        updatedAt
        __typename
      }
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBackendDatabaseBackendSettingsQueryVariables,
  APITypes.ListBackendDatabaseBackendSettingsQuery
>;
export const backendDatabaseBackendSettingsByBackendDatabaseId = /* GraphQL */ `query BackendDatabaseBackendSettingsByBackendDatabaseId(
  $backendDatabaseId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBackendDatabaseBackendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  backendDatabaseBackendSettingsByBackendDatabaseId(
    backendDatabaseId: $backendDatabaseId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      backendDatabaseId
      backendSettingsId
      backendDatabase {
        id
        name
        backendDatabaseTypeID
        reference
        createdAt
        updatedAt
        __typename
      }
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BackendDatabaseBackendSettingsByBackendDatabaseIdQueryVariables,
  APITypes.BackendDatabaseBackendSettingsByBackendDatabaseIdQuery
>;
export const backendDatabaseBackendSettingsByBackendSettingsId = /* GraphQL */ `query BackendDatabaseBackendSettingsByBackendSettingsId(
  $backendSettingsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBackendDatabaseBackendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  backendDatabaseBackendSettingsByBackendSettingsId(
    backendSettingsId: $backendSettingsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      backendDatabaseId
      backendSettingsId
      backendDatabase {
        id
        name
        backendDatabaseTypeID
        reference
        createdAt
        updatedAt
        __typename
      }
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BackendDatabaseBackendSettingsByBackendSettingsIdQueryVariables,
  APITypes.BackendDatabaseBackendSettingsByBackendSettingsIdQuery
>;
export const getBackendEndpointBackendSettings = /* GraphQL */ `query GetBackendEndpointBackendSettings($id: ID!) {
  getBackendEndpointBackendSettings(id: $id) {
    id
    backendEndpointId
    backendSettingsId
    backendEndpoint {
      id
      name
      url
      description
      methodID
      method {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      parametersWIP
      usedInSettings {
        nextToken
        __typename
      }
      usedInTool {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    backendSettings {
      id
      name
      region
      secretName
      endpoints {
        nextToken
        __typename
      }
      databases {
        nextToken
        __typename
      }
      queues {
        nextToken
        __typename
      }
      topics {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBackendEndpointBackendSettingsQueryVariables,
  APITypes.GetBackendEndpointBackendSettingsQuery
>;
export const listBackendEndpointBackendSettings = /* GraphQL */ `query ListBackendEndpointBackendSettings(
  $filter: ModelBackendEndpointBackendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listBackendEndpointBackendSettings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      backendEndpointId
      backendSettingsId
      backendEndpoint {
        id
        name
        url
        description
        methodID
        parametersWIP
        createdAt
        updatedAt
        __typename
      }
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBackendEndpointBackendSettingsQueryVariables,
  APITypes.ListBackendEndpointBackendSettingsQuery
>;
export const backendEndpointBackendSettingsByBackendEndpointId = /* GraphQL */ `query BackendEndpointBackendSettingsByBackendEndpointId(
  $backendEndpointId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBackendEndpointBackendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  backendEndpointBackendSettingsByBackendEndpointId(
    backendEndpointId: $backendEndpointId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      backendEndpointId
      backendSettingsId
      backendEndpoint {
        id
        name
        url
        description
        methodID
        parametersWIP
        createdAt
        updatedAt
        __typename
      }
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BackendEndpointBackendSettingsByBackendEndpointIdQueryVariables,
  APITypes.BackendEndpointBackendSettingsByBackendEndpointIdQuery
>;
export const backendEndpointBackendSettingsByBackendSettingsId = /* GraphQL */ `query BackendEndpointBackendSettingsByBackendSettingsId(
  $backendSettingsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBackendEndpointBackendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  backendEndpointBackendSettingsByBackendSettingsId(
    backendSettingsId: $backendSettingsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      backendEndpointId
      backendSettingsId
      backendEndpoint {
        id
        name
        url
        description
        methodID
        parametersWIP
        createdAt
        updatedAt
        __typename
      }
      backendSettings {
        id
        name
        region
        secretName
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BackendEndpointBackendSettingsByBackendSettingsIdQueryVariables,
  APITypes.BackendEndpointBackendSettingsByBackendSettingsIdQuery
>;
export const getFrontendComponentFrontendSettings = /* GraphQL */ `query GetFrontendComponentFrontendSettings($id: ID!) {
  getFrontendComponentFrontendSettings(id: $id) {
    id
    frontendComponentId
    frontendSettingsId
    frontendComponent {
      id
      name
      description
      usedInSettings {
        nextToken
        __typename
      }
      usedInTool {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    frontendSettings {
      id
      name
      domain
      cssS3Url
      components {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFrontendComponentFrontendSettingsQueryVariables,
  APITypes.GetFrontendComponentFrontendSettingsQuery
>;
export const listFrontendComponentFrontendSettings = /* GraphQL */ `query ListFrontendComponentFrontendSettings(
  $filter: ModelFrontendComponentFrontendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listFrontendComponentFrontendSettings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      frontendComponentId
      frontendSettingsId
      frontendComponent {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      frontendSettings {
        id
        name
        domain
        cssS3Url
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFrontendComponentFrontendSettingsQueryVariables,
  APITypes.ListFrontendComponentFrontendSettingsQuery
>;
export const frontendComponentFrontendSettingsByFrontendComponentId = /* GraphQL */ `query FrontendComponentFrontendSettingsByFrontendComponentId(
  $frontendComponentId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFrontendComponentFrontendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  frontendComponentFrontendSettingsByFrontendComponentId(
    frontendComponentId: $frontendComponentId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      frontendComponentId
      frontendSettingsId
      frontendComponent {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      frontendSettings {
        id
        name
        domain
        cssS3Url
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FrontendComponentFrontendSettingsByFrontendComponentIdQueryVariables,
  APITypes.FrontendComponentFrontendSettingsByFrontendComponentIdQuery
>;
export const frontendComponentFrontendSettingsByFrontendSettingsId = /* GraphQL */ `query FrontendComponentFrontendSettingsByFrontendSettingsId(
  $frontendSettingsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFrontendComponentFrontendSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  frontendComponentFrontendSettingsByFrontendSettingsId(
    frontendSettingsId: $frontendSettingsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      frontendComponentId
      frontendSettingsId
      frontendComponent {
        id
        name
        description
        createdAt
        updatedAt
        __typename
      }
      frontendSettings {
        id
        name
        domain
        cssS3Url
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FrontendComponentFrontendSettingsByFrontendSettingsIdQueryVariables,
  APITypes.FrontendComponentFrontendSettingsByFrontendSettingsIdQuery
>;
