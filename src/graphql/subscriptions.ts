/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAiClientCompany = /* GraphQL */ `subscription OnCreateAiClientCompany(
  $filter: ModelSubscriptionAiClientCompanyFilterInput
) {
  onCreateAiClientCompany(filter: $filter) {
    id
    name
    business
    values
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAiClientCompanySubscriptionVariables,
  APITypes.OnCreateAiClientCompanySubscription
>;
export const onUpdateAiClientCompany = /* GraphQL */ `subscription OnUpdateAiClientCompany(
  $filter: ModelSubscriptionAiClientCompanyFilterInput
) {
  onUpdateAiClientCompany(filter: $filter) {
    id
    name
    business
    values
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAiClientCompanySubscriptionVariables,
  APITypes.OnUpdateAiClientCompanySubscription
>;
export const onDeleteAiClientCompany = /* GraphQL */ `subscription OnDeleteAiClientCompany(
  $filter: ModelSubscriptionAiClientCompanyFilterInput
) {
  onDeleteAiClientCompany(filter: $filter) {
    id
    name
    business
    values
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAiClientCompanySubscriptionVariables,
  APITypes.OnDeleteAiClientCompanySubscription
>;
export const onCreateAiLlm = /* GraphQL */ `subscription OnCreateAiLlm($filter: ModelSubscriptionAiLlmFilterInput) {
  onCreateAiLlm(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAiLlmSubscriptionVariables,
  APITypes.OnCreateAiLlmSubscription
>;
export const onUpdateAiLlm = /* GraphQL */ `subscription OnUpdateAiLlm($filter: ModelSubscriptionAiLlmFilterInput) {
  onUpdateAiLlm(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAiLlmSubscriptionVariables,
  APITypes.OnUpdateAiLlmSubscription
>;
export const onDeleteAiLlm = /* GraphQL */ `subscription OnDeleteAiLlm($filter: ModelSubscriptionAiLlmFilterInput) {
  onDeleteAiLlm(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAiLlmSubscriptionVariables,
  APITypes.OnDeleteAiLlmSubscription
>;
export const onCreateAiVectorialDbConfig = /* GraphQL */ `subscription OnCreateAiVectorialDbConfig(
  $filter: ModelSubscriptionAiVectorialDbConfigFilterInput
) {
  onCreateAiVectorialDbConfig(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAiVectorialDbConfigSubscriptionVariables,
  APITypes.OnCreateAiVectorialDbConfigSubscription
>;
export const onUpdateAiVectorialDbConfig = /* GraphQL */ `subscription OnUpdateAiVectorialDbConfig(
  $filter: ModelSubscriptionAiVectorialDbConfigFilterInput
) {
  onUpdateAiVectorialDbConfig(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAiVectorialDbConfigSubscriptionVariables,
  APITypes.OnUpdateAiVectorialDbConfigSubscription
>;
export const onDeleteAiVectorialDbConfig = /* GraphQL */ `subscription OnDeleteAiVectorialDbConfig(
  $filter: ModelSubscriptionAiVectorialDbConfigFilterInput
) {
  onDeleteAiVectorialDbConfig(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAiVectorialDbConfigSubscriptionVariables,
  APITypes.OnDeleteAiVectorialDbConfigSubscription
>;
export const onCreateAiVectorizerParameters = /* GraphQL */ `subscription OnCreateAiVectorizerParameters(
  $filter: ModelSubscriptionAiVectorizerParametersFilterInput
) {
  onCreateAiVectorizerParameters(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAiVectorizerParametersSubscriptionVariables,
  APITypes.OnCreateAiVectorizerParametersSubscription
>;
export const onUpdateAiVectorizerParameters = /* GraphQL */ `subscription OnUpdateAiVectorizerParameters(
  $filter: ModelSubscriptionAiVectorizerParametersFilterInput
) {
  onUpdateAiVectorizerParameters(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAiVectorizerParametersSubscriptionVariables,
  APITypes.OnUpdateAiVectorizerParametersSubscription
>;
export const onDeleteAiVectorizerParameters = /* GraphQL */ `subscription OnDeleteAiVectorizerParameters(
  $filter: ModelSubscriptionAiVectorizerParametersFilterInput
) {
  onDeleteAiVectorizerParameters(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAiVectorizerParametersSubscriptionVariables,
  APITypes.OnDeleteAiVectorizerParametersSubscription
>;
export const onCreateAiParameters = /* GraphQL */ `subscription OnCreateAiParameters(
  $filter: ModelSubscriptionAiParametersFilterInput
) {
  onCreateAiParameters(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAiParametersSubscriptionVariables,
  APITypes.OnCreateAiParametersSubscription
>;
export const onUpdateAiParameters = /* GraphQL */ `subscription OnUpdateAiParameters(
  $filter: ModelSubscriptionAiParametersFilterInput
) {
  onUpdateAiParameters(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAiParametersSubscriptionVariables,
  APITypes.OnUpdateAiParametersSubscription
>;
export const onDeleteAiParameters = /* GraphQL */ `subscription OnDeleteAiParameters(
  $filter: ModelSubscriptionAiParametersFilterInput
) {
  onDeleteAiParameters(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAiParametersSubscriptionVariables,
  APITypes.OnDeleteAiParametersSubscription
>;
export const onCreateAiApiTool = /* GraphQL */ `subscription OnCreateAiApiTool($filter: ModelSubscriptionAiApiToolFilterInput) {
  onCreateAiApiTool(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateAiApiToolSubscriptionVariables,
  APITypes.OnCreateAiApiToolSubscription
>;
export const onUpdateAiApiTool = /* GraphQL */ `subscription OnUpdateAiApiTool($filter: ModelSubscriptionAiApiToolFilterInput) {
  onUpdateAiApiTool(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateAiApiToolSubscriptionVariables,
  APITypes.OnUpdateAiApiToolSubscription
>;
export const onDeleteAiApiTool = /* GraphQL */ `subscription OnDeleteAiApiTool($filter: ModelSubscriptionAiApiToolFilterInput) {
  onDeleteAiApiTool(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteAiApiToolSubscriptionVariables,
  APITypes.OnDeleteAiApiToolSubscription
>;
export const onCreateAiRenderTool = /* GraphQL */ `subscription OnCreateAiRenderTool(
  $filter: ModelSubscriptionAiRenderToolFilterInput
) {
  onCreateAiRenderTool(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateAiRenderToolSubscriptionVariables,
  APITypes.OnCreateAiRenderToolSubscription
>;
export const onUpdateAiRenderTool = /* GraphQL */ `subscription OnUpdateAiRenderTool(
  $filter: ModelSubscriptionAiRenderToolFilterInput
) {
  onUpdateAiRenderTool(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateAiRenderToolSubscriptionVariables,
  APITypes.OnUpdateAiRenderToolSubscription
>;
export const onDeleteAiRenderTool = /* GraphQL */ `subscription OnDeleteAiRenderTool(
  $filter: ModelSubscriptionAiRenderToolFilterInput
) {
  onDeleteAiRenderTool(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteAiRenderToolSubscriptionVariables,
  APITypes.OnDeleteAiRenderToolSubscription
>;
export const onCreateAiToolGroup = /* GraphQL */ `subscription OnCreateAiToolGroup(
  $filter: ModelSubscriptionAiToolGroupFilterInput
) {
  onCreateAiToolGroup(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateAiToolGroupSubscriptionVariables,
  APITypes.OnCreateAiToolGroupSubscription
>;
export const onUpdateAiToolGroup = /* GraphQL */ `subscription OnUpdateAiToolGroup(
  $filter: ModelSubscriptionAiToolGroupFilterInput
) {
  onUpdateAiToolGroup(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateAiToolGroupSubscriptionVariables,
  APITypes.OnUpdateAiToolGroupSubscription
>;
export const onDeleteAiToolGroup = /* GraphQL */ `subscription OnDeleteAiToolGroup(
  $filter: ModelSubscriptionAiToolGroupFilterInput
) {
  onDeleteAiToolGroup(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteAiToolGroupSubscriptionVariables,
  APITypes.OnDeleteAiToolGroupSubscription
>;
export const onCreateAiConfiguration = /* GraphQL */ `subscription OnCreateAiConfiguration(
  $filter: ModelSubscriptionAiConfigurationFilterInput
) {
  onCreateAiConfiguration(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateAiConfigurationSubscriptionVariables,
  APITypes.OnCreateAiConfigurationSubscription
>;
export const onUpdateAiConfiguration = /* GraphQL */ `subscription OnUpdateAiConfiguration(
  $filter: ModelSubscriptionAiConfigurationFilterInput
) {
  onUpdateAiConfiguration(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateAiConfigurationSubscriptionVariables,
  APITypes.OnUpdateAiConfigurationSubscription
>;
export const onDeleteAiConfiguration = /* GraphQL */ `subscription OnDeleteAiConfiguration(
  $filter: ModelSubscriptionAiConfigurationFilterInput
) {
  onDeleteAiConfiguration(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteAiConfigurationSubscriptionVariables,
  APITypes.OnDeleteAiConfigurationSubscription
>;
export const onCreateAiIndexationConfiguration = /* GraphQL */ `subscription OnCreateAiIndexationConfiguration(
  $filter: ModelSubscriptionAiIndexationConfigurationFilterInput
) {
  onCreateAiIndexationConfiguration(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateAiIndexationConfigurationSubscriptionVariables,
  APITypes.OnCreateAiIndexationConfigurationSubscription
>;
export const onUpdateAiIndexationConfiguration = /* GraphQL */ `subscription OnUpdateAiIndexationConfiguration(
  $filter: ModelSubscriptionAiIndexationConfigurationFilterInput
) {
  onUpdateAiIndexationConfiguration(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateAiIndexationConfigurationSubscriptionVariables,
  APITypes.OnUpdateAiIndexationConfigurationSubscription
>;
export const onDeleteAiIndexationConfiguration = /* GraphQL */ `subscription OnDeleteAiIndexationConfiguration(
  $filter: ModelSubscriptionAiIndexationConfigurationFilterInput
) {
  onDeleteAiIndexationConfiguration(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteAiIndexationConfigurationSubscriptionVariables,
  APITypes.OnDeleteAiIndexationConfigurationSubscription
>;
export const onCreateAiWebsocket = /* GraphQL */ `subscription OnCreateAiWebsocket(
  $filter: ModelSubscriptionAiWebsocketFilterInput
) {
  onCreateAiWebsocket(filter: $filter) {
    id
    name
    url
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAiWebsocketSubscriptionVariables,
  APITypes.OnCreateAiWebsocketSubscription
>;
export const onUpdateAiWebsocket = /* GraphQL */ `subscription OnUpdateAiWebsocket(
  $filter: ModelSubscriptionAiWebsocketFilterInput
) {
  onUpdateAiWebsocket(filter: $filter) {
    id
    name
    url
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAiWebsocketSubscriptionVariables,
  APITypes.OnUpdateAiWebsocketSubscription
>;
export const onDeleteAiWebsocket = /* GraphQL */ `subscription OnDeleteAiWebsocket(
  $filter: ModelSubscriptionAiWebsocketFilterInput
) {
  onDeleteAiWebsocket(filter: $filter) {
    id
    name
    url
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAiWebsocketSubscriptionVariables,
  APITypes.OnDeleteAiWebsocketSubscription
>;
export const onCreateAiTaskTypes = /* GraphQL */ `subscription OnCreateAiTaskTypes(
  $filter: ModelSubscriptionAiTaskTypesFilterInput
) {
  onCreateAiTaskTypes(filter: $filter) {
    id
    types
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAiTaskTypesSubscriptionVariables,
  APITypes.OnCreateAiTaskTypesSubscription
>;
export const onUpdateAiTaskTypes = /* GraphQL */ `subscription OnUpdateAiTaskTypes(
  $filter: ModelSubscriptionAiTaskTypesFilterInput
) {
  onUpdateAiTaskTypes(filter: $filter) {
    id
    types
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAiTaskTypesSubscriptionVariables,
  APITypes.OnUpdateAiTaskTypesSubscription
>;
export const onDeleteAiTaskTypes = /* GraphQL */ `subscription OnDeleteAiTaskTypes(
  $filter: ModelSubscriptionAiTaskTypesFilterInput
) {
  onDeleteAiTaskTypes(filter: $filter) {
    id
    types
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAiTaskTypesSubscriptionVariables,
  APITypes.OnDeleteAiTaskTypesSubscription
>;
export const onCreateAiProcess = /* GraphQL */ `subscription OnCreateAiProcess($filter: ModelSubscriptionAiProcessFilterInput) {
  onCreateAiProcess(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateAiProcessSubscriptionVariables,
  APITypes.OnCreateAiProcessSubscription
>;
export const onUpdateAiProcess = /* GraphQL */ `subscription OnUpdateAiProcess($filter: ModelSubscriptionAiProcessFilterInput) {
  onUpdateAiProcess(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateAiProcessSubscriptionVariables,
  APITypes.OnUpdateAiProcessSubscription
>;
export const onDeleteAiProcess = /* GraphQL */ `subscription OnDeleteAiProcess($filter: ModelSubscriptionAiProcessFilterInput) {
  onDeleteAiProcess(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteAiProcessSubscriptionVariables,
  APITypes.OnDeleteAiProcessSubscription
>;
export const onCreateAiSettings = /* GraphQL */ `subscription OnCreateAiSettings(
  $filter: ModelSubscriptionAiSettingsFilterInput
) {
  onCreateAiSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateAiSettingsSubscriptionVariables,
  APITypes.OnCreateAiSettingsSubscription
>;
export const onUpdateAiSettings = /* GraphQL */ `subscription OnUpdateAiSettings(
  $filter: ModelSubscriptionAiSettingsFilterInput
) {
  onUpdateAiSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateAiSettingsSubscriptionVariables,
  APITypes.OnUpdateAiSettingsSubscription
>;
export const onDeleteAiSettings = /* GraphQL */ `subscription OnDeleteAiSettings(
  $filter: ModelSubscriptionAiSettingsFilterInput
) {
  onDeleteAiSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteAiSettingsSubscriptionVariables,
  APITypes.OnDeleteAiSettingsSubscription
>;
export const onCreateBackendQueue = /* GraphQL */ `subscription OnCreateBackendQueue(
  $filter: ModelSubscriptionBackendQueueFilterInput
) {
  onCreateBackendQueue(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateBackendQueueSubscriptionVariables,
  APITypes.OnCreateBackendQueueSubscription
>;
export const onUpdateBackendQueue = /* GraphQL */ `subscription OnUpdateBackendQueue(
  $filter: ModelSubscriptionBackendQueueFilterInput
) {
  onUpdateBackendQueue(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateBackendQueueSubscriptionVariables,
  APITypes.OnUpdateBackendQueueSubscription
>;
export const onDeleteBackendQueue = /* GraphQL */ `subscription OnDeleteBackendQueue(
  $filter: ModelSubscriptionBackendQueueFilterInput
) {
  onDeleteBackendQueue(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteBackendQueueSubscriptionVariables,
  APITypes.OnDeleteBackendQueueSubscription
>;
export const onCreateBackendTopic = /* GraphQL */ `subscription OnCreateBackendTopic(
  $filter: ModelSubscriptionBackendTopicFilterInput
) {
  onCreateBackendTopic(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateBackendTopicSubscriptionVariables,
  APITypes.OnCreateBackendTopicSubscription
>;
export const onUpdateBackendTopic = /* GraphQL */ `subscription OnUpdateBackendTopic(
  $filter: ModelSubscriptionBackendTopicFilterInput
) {
  onUpdateBackendTopic(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateBackendTopicSubscriptionVariables,
  APITypes.OnUpdateBackendTopicSubscription
>;
export const onDeleteBackendTopic = /* GraphQL */ `subscription OnDeleteBackendTopic(
  $filter: ModelSubscriptionBackendTopicFilterInput
) {
  onDeleteBackendTopic(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteBackendTopicSubscriptionVariables,
  APITypes.OnDeleteBackendTopicSubscription
>;
export const onCreateBackendDatabaseType = /* GraphQL */ `subscription OnCreateBackendDatabaseType(
  $filter: ModelSubscriptionBackendDatabaseTypeFilterInput
) {
  onCreateBackendDatabaseType(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBackendDatabaseTypeSubscriptionVariables,
  APITypes.OnCreateBackendDatabaseTypeSubscription
>;
export const onUpdateBackendDatabaseType = /* GraphQL */ `subscription OnUpdateBackendDatabaseType(
  $filter: ModelSubscriptionBackendDatabaseTypeFilterInput
) {
  onUpdateBackendDatabaseType(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBackendDatabaseTypeSubscriptionVariables,
  APITypes.OnUpdateBackendDatabaseTypeSubscription
>;
export const onDeleteBackendDatabaseType = /* GraphQL */ `subscription OnDeleteBackendDatabaseType(
  $filter: ModelSubscriptionBackendDatabaseTypeFilterInput
) {
  onDeleteBackendDatabaseType(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBackendDatabaseTypeSubscriptionVariables,
  APITypes.OnDeleteBackendDatabaseTypeSubscription
>;
export const onCreateBackendDatabase = /* GraphQL */ `subscription OnCreateBackendDatabase(
  $filter: ModelSubscriptionBackendDatabaseFilterInput
) {
  onCreateBackendDatabase(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateBackendDatabaseSubscriptionVariables,
  APITypes.OnCreateBackendDatabaseSubscription
>;
export const onUpdateBackendDatabase = /* GraphQL */ `subscription OnUpdateBackendDatabase(
  $filter: ModelSubscriptionBackendDatabaseFilterInput
) {
  onUpdateBackendDatabase(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateBackendDatabaseSubscriptionVariables,
  APITypes.OnUpdateBackendDatabaseSubscription
>;
export const onDeleteBackendDatabase = /* GraphQL */ `subscription OnDeleteBackendDatabase(
  $filter: ModelSubscriptionBackendDatabaseFilterInput
) {
  onDeleteBackendDatabase(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteBackendDatabaseSubscriptionVariables,
  APITypes.OnDeleteBackendDatabaseSubscription
>;
export const onCreateBackendEndpointMethod = /* GraphQL */ `subscription OnCreateBackendEndpointMethod(
  $filter: ModelSubscriptionBackendEndpointMethodFilterInput
) {
  onCreateBackendEndpointMethod(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBackendEndpointMethodSubscriptionVariables,
  APITypes.OnCreateBackendEndpointMethodSubscription
>;
export const onUpdateBackendEndpointMethod = /* GraphQL */ `subscription OnUpdateBackendEndpointMethod(
  $filter: ModelSubscriptionBackendEndpointMethodFilterInput
) {
  onUpdateBackendEndpointMethod(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBackendEndpointMethodSubscriptionVariables,
  APITypes.OnUpdateBackendEndpointMethodSubscription
>;
export const onDeleteBackendEndpointMethod = /* GraphQL */ `subscription OnDeleteBackendEndpointMethod(
  $filter: ModelSubscriptionBackendEndpointMethodFilterInput
) {
  onDeleteBackendEndpointMethod(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBackendEndpointMethodSubscriptionVariables,
  APITypes.OnDeleteBackendEndpointMethodSubscription
>;
export const onCreateBackendEndpoint = /* GraphQL */ `subscription OnCreateBackendEndpoint(
  $filter: ModelSubscriptionBackendEndpointFilterInput
) {
  onCreateBackendEndpoint(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateBackendEndpointSubscriptionVariables,
  APITypes.OnCreateBackendEndpointSubscription
>;
export const onUpdateBackendEndpoint = /* GraphQL */ `subscription OnUpdateBackendEndpoint(
  $filter: ModelSubscriptionBackendEndpointFilterInput
) {
  onUpdateBackendEndpoint(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateBackendEndpointSubscriptionVariables,
  APITypes.OnUpdateBackendEndpointSubscription
>;
export const onDeleteBackendEndpoint = /* GraphQL */ `subscription OnDeleteBackendEndpoint(
  $filter: ModelSubscriptionBackendEndpointFilterInput
) {
  onDeleteBackendEndpoint(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteBackendEndpointSubscriptionVariables,
  APITypes.OnDeleteBackendEndpointSubscription
>;
export const onCreateBackendSettings = /* GraphQL */ `subscription OnCreateBackendSettings(
  $filter: ModelSubscriptionBackendSettingsFilterInput
) {
  onCreateBackendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateBackendSettingsSubscriptionVariables,
  APITypes.OnCreateBackendSettingsSubscription
>;
export const onUpdateBackendSettings = /* GraphQL */ `subscription OnUpdateBackendSettings(
  $filter: ModelSubscriptionBackendSettingsFilterInput
) {
  onUpdateBackendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateBackendSettingsSubscriptionVariables,
  APITypes.OnUpdateBackendSettingsSubscription
>;
export const onDeleteBackendSettings = /* GraphQL */ `subscription OnDeleteBackendSettings(
  $filter: ModelSubscriptionBackendSettingsFilterInput
) {
  onDeleteBackendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteBackendSettingsSubscriptionVariables,
  APITypes.OnDeleteBackendSettingsSubscription
>;
export const onCreateFrontendComponent = /* GraphQL */ `subscription OnCreateFrontendComponent(
  $filter: ModelSubscriptionFrontendComponentFilterInput
) {
  onCreateFrontendComponent(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateFrontendComponentSubscriptionVariables,
  APITypes.OnCreateFrontendComponentSubscription
>;
export const onUpdateFrontendComponent = /* GraphQL */ `subscription OnUpdateFrontendComponent(
  $filter: ModelSubscriptionFrontendComponentFilterInput
) {
  onUpdateFrontendComponent(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateFrontendComponentSubscriptionVariables,
  APITypes.OnUpdateFrontendComponentSubscription
>;
export const onDeleteFrontendComponent = /* GraphQL */ `subscription OnDeleteFrontendComponent(
  $filter: ModelSubscriptionFrontendComponentFilterInput
) {
  onDeleteFrontendComponent(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteFrontendComponentSubscriptionVariables,
  APITypes.OnDeleteFrontendComponentSubscription
>;
export const onCreateFrontendSettings = /* GraphQL */ `subscription OnCreateFrontendSettings(
  $filter: ModelSubscriptionFrontendSettingsFilterInput
) {
  onCreateFrontendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateFrontendSettingsSubscriptionVariables,
  APITypes.OnCreateFrontendSettingsSubscription
>;
export const onUpdateFrontendSettings = /* GraphQL */ `subscription OnUpdateFrontendSettings(
  $filter: ModelSubscriptionFrontendSettingsFilterInput
) {
  onUpdateFrontendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateFrontendSettingsSubscriptionVariables,
  APITypes.OnUpdateFrontendSettingsSubscription
>;
export const onDeleteFrontendSettings = /* GraphQL */ `subscription OnDeleteFrontendSettings(
  $filter: ModelSubscriptionFrontendSettingsFilterInput
) {
  onDeleteFrontendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteFrontendSettingsSubscriptionVariables,
  APITypes.OnDeleteFrontendSettingsSubscription
>;
export const onCreateApplicationStageCognitoUserPool = /* GraphQL */ `subscription OnCreateApplicationStageCognitoUserPool(
  $filter: ModelSubscriptionApplicationStageCognitoUserPoolFilterInput
) {
  onCreateApplicationStageCognitoUserPool(filter: $filter) {
    id
    name
    userPoolId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateApplicationStageCognitoUserPoolSubscriptionVariables,
  APITypes.OnCreateApplicationStageCognitoUserPoolSubscription
>;
export const onUpdateApplicationStageCognitoUserPool = /* GraphQL */ `subscription OnUpdateApplicationStageCognitoUserPool(
  $filter: ModelSubscriptionApplicationStageCognitoUserPoolFilterInput
) {
  onUpdateApplicationStageCognitoUserPool(filter: $filter) {
    id
    name
    userPoolId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateApplicationStageCognitoUserPoolSubscriptionVariables,
  APITypes.OnUpdateApplicationStageCognitoUserPoolSubscription
>;
export const onDeleteApplicationStageCognitoUserPool = /* GraphQL */ `subscription OnDeleteApplicationStageCognitoUserPool(
  $filter: ModelSubscriptionApplicationStageCognitoUserPoolFilterInput
) {
  onDeleteApplicationStageCognitoUserPool(filter: $filter) {
    id
    name
    userPoolId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteApplicationStageCognitoUserPoolSubscriptionVariables,
  APITypes.OnDeleteApplicationStageCognitoUserPoolSubscription
>;
export const onCreateApplicationStage = /* GraphQL */ `subscription OnCreateApplicationStage(
  $filter: ModelSubscriptionApplicationStageFilterInput
) {
  onCreateApplicationStage(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateApplicationStageSubscriptionVariables,
  APITypes.OnCreateApplicationStageSubscription
>;
export const onUpdateApplicationStage = /* GraphQL */ `subscription OnUpdateApplicationStage(
  $filter: ModelSubscriptionApplicationStageFilterInput
) {
  onUpdateApplicationStage(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateApplicationStageSubscriptionVariables,
  APITypes.OnUpdateApplicationStageSubscription
>;
export const onDeleteApplicationStage = /* GraphQL */ `subscription OnDeleteApplicationStage(
  $filter: ModelSubscriptionApplicationStageFilterInput
) {
  onDeleteApplicationStage(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteApplicationStageSubscriptionVariables,
  APITypes.OnDeleteApplicationStageSubscription
>;
export const onCreateApplicationAiServerSnapshotReference = /* GraphQL */ `subscription OnCreateApplicationAiServerSnapshotReference(
  $filter: ModelSubscriptionApplicationAiServerSnapshotReferenceFilterInput
) {
  onCreateApplicationAiServerSnapshotReference(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateApplicationAiServerSnapshotReferenceSubscriptionVariables,
  APITypes.OnCreateApplicationAiServerSnapshotReferenceSubscription
>;
export const onUpdateApplicationAiServerSnapshotReference = /* GraphQL */ `subscription OnUpdateApplicationAiServerSnapshotReference(
  $filter: ModelSubscriptionApplicationAiServerSnapshotReferenceFilterInput
) {
  onUpdateApplicationAiServerSnapshotReference(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateApplicationAiServerSnapshotReferenceSubscriptionVariables,
  APITypes.OnUpdateApplicationAiServerSnapshotReferenceSubscription
>;
export const onDeleteApplicationAiServerSnapshotReference = /* GraphQL */ `subscription OnDeleteApplicationAiServerSnapshotReference(
  $filter: ModelSubscriptionApplicationAiServerSnapshotReferenceFilterInput
) {
  onDeleteApplicationAiServerSnapshotReference(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteApplicationAiServerSnapshotReferenceSubscriptionVariables,
  APITypes.OnDeleteApplicationAiServerSnapshotReferenceSubscription
>;
export const onCreateApplication = /* GraphQL */ `subscription OnCreateApplication(
  $filter: ModelSubscriptionApplicationFilterInput
) {
  onCreateApplication(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateApplicationSubscriptionVariables,
  APITypes.OnCreateApplicationSubscription
>;
export const onUpdateApplication = /* GraphQL */ `subscription OnUpdateApplication(
  $filter: ModelSubscriptionApplicationFilterInput
) {
  onUpdateApplication(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateApplicationSubscriptionVariables,
  APITypes.OnUpdateApplicationSubscription
>;
export const onDeleteApplication = /* GraphQL */ `subscription OnDeleteApplication(
  $filter: ModelSubscriptionApplicationFilterInput
) {
  onDeleteApplication(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteApplicationSubscriptionVariables,
  APITypes.OnDeleteApplicationSubscription
>;
export const onCreateBackendEndpointAiApiTool = /* GraphQL */ `subscription OnCreateBackendEndpointAiApiTool(
  $filter: ModelSubscriptionBackendEndpointAiApiToolFilterInput
) {
  onCreateBackendEndpointAiApiTool(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateBackendEndpointAiApiToolSubscriptionVariables,
  APITypes.OnCreateBackendEndpointAiApiToolSubscription
>;
export const onUpdateBackendEndpointAiApiTool = /* GraphQL */ `subscription OnUpdateBackendEndpointAiApiTool(
  $filter: ModelSubscriptionBackendEndpointAiApiToolFilterInput
) {
  onUpdateBackendEndpointAiApiTool(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateBackendEndpointAiApiToolSubscriptionVariables,
  APITypes.OnUpdateBackendEndpointAiApiToolSubscription
>;
export const onDeleteBackendEndpointAiApiTool = /* GraphQL */ `subscription OnDeleteBackendEndpointAiApiTool(
  $filter: ModelSubscriptionBackendEndpointAiApiToolFilterInput
) {
  onDeleteBackendEndpointAiApiTool(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteBackendEndpointAiApiToolSubscriptionVariables,
  APITypes.OnDeleteBackendEndpointAiApiToolSubscription
>;
export const onCreateAiApiToolAiToolGroup = /* GraphQL */ `subscription OnCreateAiApiToolAiToolGroup(
  $filter: ModelSubscriptionAiApiToolAiToolGroupFilterInput
) {
  onCreateAiApiToolAiToolGroup(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateAiApiToolAiToolGroupSubscriptionVariables,
  APITypes.OnCreateAiApiToolAiToolGroupSubscription
>;
export const onUpdateAiApiToolAiToolGroup = /* GraphQL */ `subscription OnUpdateAiApiToolAiToolGroup(
  $filter: ModelSubscriptionAiApiToolAiToolGroupFilterInput
) {
  onUpdateAiApiToolAiToolGroup(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateAiApiToolAiToolGroupSubscriptionVariables,
  APITypes.OnUpdateAiApiToolAiToolGroupSubscription
>;
export const onDeleteAiApiToolAiToolGroup = /* GraphQL */ `subscription OnDeleteAiApiToolAiToolGroup(
  $filter: ModelSubscriptionAiApiToolAiToolGroupFilterInput
) {
  onDeleteAiApiToolAiToolGroup(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteAiApiToolAiToolGroupSubscriptionVariables,
  APITypes.OnDeleteAiApiToolAiToolGroupSubscription
>;
export const onCreateFrontendComponentAiRenderTool = /* GraphQL */ `subscription OnCreateFrontendComponentAiRenderTool(
  $filter: ModelSubscriptionFrontendComponentAiRenderToolFilterInput
) {
  onCreateFrontendComponentAiRenderTool(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateFrontendComponentAiRenderToolSubscriptionVariables,
  APITypes.OnCreateFrontendComponentAiRenderToolSubscription
>;
export const onUpdateFrontendComponentAiRenderTool = /* GraphQL */ `subscription OnUpdateFrontendComponentAiRenderTool(
  $filter: ModelSubscriptionFrontendComponentAiRenderToolFilterInput
) {
  onUpdateFrontendComponentAiRenderTool(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateFrontendComponentAiRenderToolSubscriptionVariables,
  APITypes.OnUpdateFrontendComponentAiRenderToolSubscription
>;
export const onDeleteFrontendComponentAiRenderTool = /* GraphQL */ `subscription OnDeleteFrontendComponentAiRenderTool(
  $filter: ModelSubscriptionFrontendComponentAiRenderToolFilterInput
) {
  onDeleteFrontendComponentAiRenderTool(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteFrontendComponentAiRenderToolSubscriptionVariables,
  APITypes.OnDeleteFrontendComponentAiRenderToolSubscription
>;
export const onCreateAiRenderToolAiToolGroup = /* GraphQL */ `subscription OnCreateAiRenderToolAiToolGroup(
  $filter: ModelSubscriptionAiRenderToolAiToolGroupFilterInput
) {
  onCreateAiRenderToolAiToolGroup(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateAiRenderToolAiToolGroupSubscriptionVariables,
  APITypes.OnCreateAiRenderToolAiToolGroupSubscription
>;
export const onUpdateAiRenderToolAiToolGroup = /* GraphQL */ `subscription OnUpdateAiRenderToolAiToolGroup(
  $filter: ModelSubscriptionAiRenderToolAiToolGroupFilterInput
) {
  onUpdateAiRenderToolAiToolGroup(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateAiRenderToolAiToolGroupSubscriptionVariables,
  APITypes.OnUpdateAiRenderToolAiToolGroupSubscription
>;
export const onDeleteAiRenderToolAiToolGroup = /* GraphQL */ `subscription OnDeleteAiRenderToolAiToolGroup(
  $filter: ModelSubscriptionAiRenderToolAiToolGroupFilterInput
) {
  onDeleteAiRenderToolAiToolGroup(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteAiRenderToolAiToolGroupSubscriptionVariables,
  APITypes.OnDeleteAiRenderToolAiToolGroupSubscription
>;
export const onCreateAiToolGroupAiConfiguration = /* GraphQL */ `subscription OnCreateAiToolGroupAiConfiguration(
  $filter: ModelSubscriptionAiToolGroupAiConfigurationFilterInput
) {
  onCreateAiToolGroupAiConfiguration(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateAiToolGroupAiConfigurationSubscriptionVariables,
  APITypes.OnCreateAiToolGroupAiConfigurationSubscription
>;
export const onUpdateAiToolGroupAiConfiguration = /* GraphQL */ `subscription OnUpdateAiToolGroupAiConfiguration(
  $filter: ModelSubscriptionAiToolGroupAiConfigurationFilterInput
) {
  onUpdateAiToolGroupAiConfiguration(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateAiToolGroupAiConfigurationSubscriptionVariables,
  APITypes.OnUpdateAiToolGroupAiConfigurationSubscription
>;
export const onDeleteAiToolGroupAiConfiguration = /* GraphQL */ `subscription OnDeleteAiToolGroupAiConfiguration(
  $filter: ModelSubscriptionAiToolGroupAiConfigurationFilterInput
) {
  onDeleteAiToolGroupAiConfiguration(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteAiToolGroupAiConfigurationSubscriptionVariables,
  APITypes.OnDeleteAiToolGroupAiConfigurationSubscription
>;
export const onCreateAiProcessAiSettings = /* GraphQL */ `subscription OnCreateAiProcessAiSettings(
  $filter: ModelSubscriptionAiProcessAiSettingsFilterInput
) {
  onCreateAiProcessAiSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateAiProcessAiSettingsSubscriptionVariables,
  APITypes.OnCreateAiProcessAiSettingsSubscription
>;
export const onUpdateAiProcessAiSettings = /* GraphQL */ `subscription OnUpdateAiProcessAiSettings(
  $filter: ModelSubscriptionAiProcessAiSettingsFilterInput
) {
  onUpdateAiProcessAiSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateAiProcessAiSettingsSubscriptionVariables,
  APITypes.OnUpdateAiProcessAiSettingsSubscription
>;
export const onDeleteAiProcessAiSettings = /* GraphQL */ `subscription OnDeleteAiProcessAiSettings(
  $filter: ModelSubscriptionAiProcessAiSettingsFilterInput
) {
  onDeleteAiProcessAiSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteAiProcessAiSettingsSubscriptionVariables,
  APITypes.OnDeleteAiProcessAiSettingsSubscription
>;
export const onCreateBackendQueueBackendSettings = /* GraphQL */ `subscription OnCreateBackendQueueBackendSettings(
  $filter: ModelSubscriptionBackendQueueBackendSettingsFilterInput
) {
  onCreateBackendQueueBackendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateBackendQueueBackendSettingsSubscriptionVariables,
  APITypes.OnCreateBackendQueueBackendSettingsSubscription
>;
export const onUpdateBackendQueueBackendSettings = /* GraphQL */ `subscription OnUpdateBackendQueueBackendSettings(
  $filter: ModelSubscriptionBackendQueueBackendSettingsFilterInput
) {
  onUpdateBackendQueueBackendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateBackendQueueBackendSettingsSubscriptionVariables,
  APITypes.OnUpdateBackendQueueBackendSettingsSubscription
>;
export const onDeleteBackendQueueBackendSettings = /* GraphQL */ `subscription OnDeleteBackendQueueBackendSettings(
  $filter: ModelSubscriptionBackendQueueBackendSettingsFilterInput
) {
  onDeleteBackendQueueBackendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteBackendQueueBackendSettingsSubscriptionVariables,
  APITypes.OnDeleteBackendQueueBackendSettingsSubscription
>;
export const onCreateBackendTopicBackendSettings = /* GraphQL */ `subscription OnCreateBackendTopicBackendSettings(
  $filter: ModelSubscriptionBackendTopicBackendSettingsFilterInput
) {
  onCreateBackendTopicBackendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateBackendTopicBackendSettingsSubscriptionVariables,
  APITypes.OnCreateBackendTopicBackendSettingsSubscription
>;
export const onUpdateBackendTopicBackendSettings = /* GraphQL */ `subscription OnUpdateBackendTopicBackendSettings(
  $filter: ModelSubscriptionBackendTopicBackendSettingsFilterInput
) {
  onUpdateBackendTopicBackendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateBackendTopicBackendSettingsSubscriptionVariables,
  APITypes.OnUpdateBackendTopicBackendSettingsSubscription
>;
export const onDeleteBackendTopicBackendSettings = /* GraphQL */ `subscription OnDeleteBackendTopicBackendSettings(
  $filter: ModelSubscriptionBackendTopicBackendSettingsFilterInput
) {
  onDeleteBackendTopicBackendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteBackendTopicBackendSettingsSubscriptionVariables,
  APITypes.OnDeleteBackendTopicBackendSettingsSubscription
>;
export const onCreateBackendDatabaseBackendSettings = /* GraphQL */ `subscription OnCreateBackendDatabaseBackendSettings(
  $filter: ModelSubscriptionBackendDatabaseBackendSettingsFilterInput
) {
  onCreateBackendDatabaseBackendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateBackendDatabaseBackendSettingsSubscriptionVariables,
  APITypes.OnCreateBackendDatabaseBackendSettingsSubscription
>;
export const onUpdateBackendDatabaseBackendSettings = /* GraphQL */ `subscription OnUpdateBackendDatabaseBackendSettings(
  $filter: ModelSubscriptionBackendDatabaseBackendSettingsFilterInput
) {
  onUpdateBackendDatabaseBackendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateBackendDatabaseBackendSettingsSubscriptionVariables,
  APITypes.OnUpdateBackendDatabaseBackendSettingsSubscription
>;
export const onDeleteBackendDatabaseBackendSettings = /* GraphQL */ `subscription OnDeleteBackendDatabaseBackendSettings(
  $filter: ModelSubscriptionBackendDatabaseBackendSettingsFilterInput
) {
  onDeleteBackendDatabaseBackendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteBackendDatabaseBackendSettingsSubscriptionVariables,
  APITypes.OnDeleteBackendDatabaseBackendSettingsSubscription
>;
export const onCreateBackendEndpointBackendSettings = /* GraphQL */ `subscription OnCreateBackendEndpointBackendSettings(
  $filter: ModelSubscriptionBackendEndpointBackendSettingsFilterInput
) {
  onCreateBackendEndpointBackendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateBackendEndpointBackendSettingsSubscriptionVariables,
  APITypes.OnCreateBackendEndpointBackendSettingsSubscription
>;
export const onUpdateBackendEndpointBackendSettings = /* GraphQL */ `subscription OnUpdateBackendEndpointBackendSettings(
  $filter: ModelSubscriptionBackendEndpointBackendSettingsFilterInput
) {
  onUpdateBackendEndpointBackendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateBackendEndpointBackendSettingsSubscriptionVariables,
  APITypes.OnUpdateBackendEndpointBackendSettingsSubscription
>;
export const onDeleteBackendEndpointBackendSettings = /* GraphQL */ `subscription OnDeleteBackendEndpointBackendSettings(
  $filter: ModelSubscriptionBackendEndpointBackendSettingsFilterInput
) {
  onDeleteBackendEndpointBackendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteBackendEndpointBackendSettingsSubscriptionVariables,
  APITypes.OnDeleteBackendEndpointBackendSettingsSubscription
>;
export const onCreateFrontendComponentFrontendSettings = /* GraphQL */ `subscription OnCreateFrontendComponentFrontendSettings(
  $filter: ModelSubscriptionFrontendComponentFrontendSettingsFilterInput
) {
  onCreateFrontendComponentFrontendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnCreateFrontendComponentFrontendSettingsSubscriptionVariables,
  APITypes.OnCreateFrontendComponentFrontendSettingsSubscription
>;
export const onUpdateFrontendComponentFrontendSettings = /* GraphQL */ `subscription OnUpdateFrontendComponentFrontendSettings(
  $filter: ModelSubscriptionFrontendComponentFrontendSettingsFilterInput
) {
  onUpdateFrontendComponentFrontendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnUpdateFrontendComponentFrontendSettingsSubscriptionVariables,
  APITypes.OnUpdateFrontendComponentFrontendSettingsSubscription
>;
export const onDeleteFrontendComponentFrontendSettings = /* GraphQL */ `subscription OnDeleteFrontendComponentFrontendSettings(
  $filter: ModelSubscriptionFrontendComponentFrontendSettingsFilterInput
) {
  onDeleteFrontendComponentFrontendSettings(filter: $filter) {
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
}
` as GeneratedSubscription<
  APITypes.OnDeleteFrontendComponentFrontendSettingsSubscriptionVariables,
  APITypes.OnDeleteFrontendComponentFrontendSettingsSubscription
>;
