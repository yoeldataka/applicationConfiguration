/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAiClientCompany = /* GraphQL */ `mutation CreateAiClientCompany(
  $input: CreateAiClientCompanyInput!
  $condition: ModelAiClientCompanyConditionInput
) {
  createAiClientCompany(input: $input, condition: $condition) {
    id
    name
    business
    values
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAiClientCompanyMutationVariables,
  APITypes.CreateAiClientCompanyMutation
>;
export const updateAiClientCompany = /* GraphQL */ `mutation UpdateAiClientCompany(
  $input: UpdateAiClientCompanyInput!
  $condition: ModelAiClientCompanyConditionInput
) {
  updateAiClientCompany(input: $input, condition: $condition) {
    id
    name
    business
    values
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAiClientCompanyMutationVariables,
  APITypes.UpdateAiClientCompanyMutation
>;
export const deleteAiClientCompany = /* GraphQL */ `mutation DeleteAiClientCompany(
  $input: DeleteAiClientCompanyInput!
  $condition: ModelAiClientCompanyConditionInput
) {
  deleteAiClientCompany(input: $input, condition: $condition) {
    id
    name
    business
    values
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAiClientCompanyMutationVariables,
  APITypes.DeleteAiClientCompanyMutation
>;
export const createAiLlm = /* GraphQL */ `mutation CreateAiLlm(
  $input: CreateAiLlmInput!
  $condition: ModelAiLlmConditionInput
) {
  createAiLlm(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAiLlmMutationVariables,
  APITypes.CreateAiLlmMutation
>;
export const updateAiLlm = /* GraphQL */ `mutation UpdateAiLlm(
  $input: UpdateAiLlmInput!
  $condition: ModelAiLlmConditionInput
) {
  updateAiLlm(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAiLlmMutationVariables,
  APITypes.UpdateAiLlmMutation
>;
export const deleteAiLlm = /* GraphQL */ `mutation DeleteAiLlm(
  $input: DeleteAiLlmInput!
  $condition: ModelAiLlmConditionInput
) {
  deleteAiLlm(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAiLlmMutationVariables,
  APITypes.DeleteAiLlmMutation
>;
export const createAiVectorialDbConfig = /* GraphQL */ `mutation CreateAiVectorialDbConfig(
  $input: CreateAiVectorialDbConfigInput!
  $condition: ModelAiVectorialDbConfigConditionInput
) {
  createAiVectorialDbConfig(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAiVectorialDbConfigMutationVariables,
  APITypes.CreateAiVectorialDbConfigMutation
>;
export const updateAiVectorialDbConfig = /* GraphQL */ `mutation UpdateAiVectorialDbConfig(
  $input: UpdateAiVectorialDbConfigInput!
  $condition: ModelAiVectorialDbConfigConditionInput
) {
  updateAiVectorialDbConfig(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAiVectorialDbConfigMutationVariables,
  APITypes.UpdateAiVectorialDbConfigMutation
>;
export const deleteAiVectorialDbConfig = /* GraphQL */ `mutation DeleteAiVectorialDbConfig(
  $input: DeleteAiVectorialDbConfigInput!
  $condition: ModelAiVectorialDbConfigConditionInput
) {
  deleteAiVectorialDbConfig(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAiVectorialDbConfigMutationVariables,
  APITypes.DeleteAiVectorialDbConfigMutation
>;
export const createAiVectorizerParameters = /* GraphQL */ `mutation CreateAiVectorizerParameters(
  $input: CreateAiVectorizerParametersInput!
  $condition: ModelAiVectorizerParametersConditionInput
) {
  createAiVectorizerParameters(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAiVectorizerParametersMutationVariables,
  APITypes.CreateAiVectorizerParametersMutation
>;
export const updateAiVectorizerParameters = /* GraphQL */ `mutation UpdateAiVectorizerParameters(
  $input: UpdateAiVectorizerParametersInput!
  $condition: ModelAiVectorizerParametersConditionInput
) {
  updateAiVectorizerParameters(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAiVectorizerParametersMutationVariables,
  APITypes.UpdateAiVectorizerParametersMutation
>;
export const deleteAiVectorizerParameters = /* GraphQL */ `mutation DeleteAiVectorizerParameters(
  $input: DeleteAiVectorizerParametersInput!
  $condition: ModelAiVectorizerParametersConditionInput
) {
  deleteAiVectorizerParameters(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAiVectorizerParametersMutationVariables,
  APITypes.DeleteAiVectorizerParametersMutation
>;
export const createAiParameters = /* GraphQL */ `mutation CreateAiParameters(
  $input: CreateAiParametersInput!
  $condition: ModelAiParametersConditionInput
) {
  createAiParameters(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAiParametersMutationVariables,
  APITypes.CreateAiParametersMutation
>;
export const updateAiParameters = /* GraphQL */ `mutation UpdateAiParameters(
  $input: UpdateAiParametersInput!
  $condition: ModelAiParametersConditionInput
) {
  updateAiParameters(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAiParametersMutationVariables,
  APITypes.UpdateAiParametersMutation
>;
export const deleteAiParameters = /* GraphQL */ `mutation DeleteAiParameters(
  $input: DeleteAiParametersInput!
  $condition: ModelAiParametersConditionInput
) {
  deleteAiParameters(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAiParametersMutationVariables,
  APITypes.DeleteAiParametersMutation
>;
export const createAiApiTool = /* GraphQL */ `mutation CreateAiApiTool(
  $input: CreateAiApiToolInput!
  $condition: ModelAiApiToolConditionInput
) {
  createAiApiTool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAiApiToolMutationVariables,
  APITypes.CreateAiApiToolMutation
>;
export const updateAiApiTool = /* GraphQL */ `mutation UpdateAiApiTool(
  $input: UpdateAiApiToolInput!
  $condition: ModelAiApiToolConditionInput
) {
  updateAiApiTool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAiApiToolMutationVariables,
  APITypes.UpdateAiApiToolMutation
>;
export const deleteAiApiTool = /* GraphQL */ `mutation DeleteAiApiTool(
  $input: DeleteAiApiToolInput!
  $condition: ModelAiApiToolConditionInput
) {
  deleteAiApiTool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAiApiToolMutationVariables,
  APITypes.DeleteAiApiToolMutation
>;
export const createAiRenderTool = /* GraphQL */ `mutation CreateAiRenderTool(
  $input: CreateAiRenderToolInput!
  $condition: ModelAiRenderToolConditionInput
) {
  createAiRenderTool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAiRenderToolMutationVariables,
  APITypes.CreateAiRenderToolMutation
>;
export const updateAiRenderTool = /* GraphQL */ `mutation UpdateAiRenderTool(
  $input: UpdateAiRenderToolInput!
  $condition: ModelAiRenderToolConditionInput
) {
  updateAiRenderTool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAiRenderToolMutationVariables,
  APITypes.UpdateAiRenderToolMutation
>;
export const deleteAiRenderTool = /* GraphQL */ `mutation DeleteAiRenderTool(
  $input: DeleteAiRenderToolInput!
  $condition: ModelAiRenderToolConditionInput
) {
  deleteAiRenderTool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAiRenderToolMutationVariables,
  APITypes.DeleteAiRenderToolMutation
>;
export const createAiToolGroup = /* GraphQL */ `mutation CreateAiToolGroup(
  $input: CreateAiToolGroupInput!
  $condition: ModelAiToolGroupConditionInput
) {
  createAiToolGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAiToolGroupMutationVariables,
  APITypes.CreateAiToolGroupMutation
>;
export const updateAiToolGroup = /* GraphQL */ `mutation UpdateAiToolGroup(
  $input: UpdateAiToolGroupInput!
  $condition: ModelAiToolGroupConditionInput
) {
  updateAiToolGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAiToolGroupMutationVariables,
  APITypes.UpdateAiToolGroupMutation
>;
export const deleteAiToolGroup = /* GraphQL */ `mutation DeleteAiToolGroup(
  $input: DeleteAiToolGroupInput!
  $condition: ModelAiToolGroupConditionInput
) {
  deleteAiToolGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAiToolGroupMutationVariables,
  APITypes.DeleteAiToolGroupMutation
>;
export const createAiConfiguration = /* GraphQL */ `mutation CreateAiConfiguration(
  $input: CreateAiConfigurationInput!
  $condition: ModelAiConfigurationConditionInput
) {
  createAiConfiguration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAiConfigurationMutationVariables,
  APITypes.CreateAiConfigurationMutation
>;
export const updateAiConfiguration = /* GraphQL */ `mutation UpdateAiConfiguration(
  $input: UpdateAiConfigurationInput!
  $condition: ModelAiConfigurationConditionInput
) {
  updateAiConfiguration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAiConfigurationMutationVariables,
  APITypes.UpdateAiConfigurationMutation
>;
export const deleteAiConfiguration = /* GraphQL */ `mutation DeleteAiConfiguration(
  $input: DeleteAiConfigurationInput!
  $condition: ModelAiConfigurationConditionInput
) {
  deleteAiConfiguration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAiConfigurationMutationVariables,
  APITypes.DeleteAiConfigurationMutation
>;
export const createAiIndexationConfiguration = /* GraphQL */ `mutation CreateAiIndexationConfiguration(
  $input: CreateAiIndexationConfigurationInput!
  $condition: ModelAiIndexationConfigurationConditionInput
) {
  createAiIndexationConfiguration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAiIndexationConfigurationMutationVariables,
  APITypes.CreateAiIndexationConfigurationMutation
>;
export const updateAiIndexationConfiguration = /* GraphQL */ `mutation UpdateAiIndexationConfiguration(
  $input: UpdateAiIndexationConfigurationInput!
  $condition: ModelAiIndexationConfigurationConditionInput
) {
  updateAiIndexationConfiguration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAiIndexationConfigurationMutationVariables,
  APITypes.UpdateAiIndexationConfigurationMutation
>;
export const deleteAiIndexationConfiguration = /* GraphQL */ `mutation DeleteAiIndexationConfiguration(
  $input: DeleteAiIndexationConfigurationInput!
  $condition: ModelAiIndexationConfigurationConditionInput
) {
  deleteAiIndexationConfiguration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAiIndexationConfigurationMutationVariables,
  APITypes.DeleteAiIndexationConfigurationMutation
>;
export const createAiWebsocket = /* GraphQL */ `mutation CreateAiWebsocket(
  $input: CreateAiWebsocketInput!
  $condition: ModelAiWebsocketConditionInput
) {
  createAiWebsocket(input: $input, condition: $condition) {
    id
    name
    url
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAiWebsocketMutationVariables,
  APITypes.CreateAiWebsocketMutation
>;
export const updateAiWebsocket = /* GraphQL */ `mutation UpdateAiWebsocket(
  $input: UpdateAiWebsocketInput!
  $condition: ModelAiWebsocketConditionInput
) {
  updateAiWebsocket(input: $input, condition: $condition) {
    id
    name
    url
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAiWebsocketMutationVariables,
  APITypes.UpdateAiWebsocketMutation
>;
export const deleteAiWebsocket = /* GraphQL */ `mutation DeleteAiWebsocket(
  $input: DeleteAiWebsocketInput!
  $condition: ModelAiWebsocketConditionInput
) {
  deleteAiWebsocket(input: $input, condition: $condition) {
    id
    name
    url
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAiWebsocketMutationVariables,
  APITypes.DeleteAiWebsocketMutation
>;
export const createAiTaskTypes = /* GraphQL */ `mutation CreateAiTaskTypes(
  $input: CreateAiTaskTypesInput!
  $condition: ModelAiTaskTypesConditionInput
) {
  createAiTaskTypes(input: $input, condition: $condition) {
    id
    types
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAiTaskTypesMutationVariables,
  APITypes.CreateAiTaskTypesMutation
>;
export const updateAiTaskTypes = /* GraphQL */ `mutation UpdateAiTaskTypes(
  $input: UpdateAiTaskTypesInput!
  $condition: ModelAiTaskTypesConditionInput
) {
  updateAiTaskTypes(input: $input, condition: $condition) {
    id
    types
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAiTaskTypesMutationVariables,
  APITypes.UpdateAiTaskTypesMutation
>;
export const deleteAiTaskTypes = /* GraphQL */ `mutation DeleteAiTaskTypes(
  $input: DeleteAiTaskTypesInput!
  $condition: ModelAiTaskTypesConditionInput
) {
  deleteAiTaskTypes(input: $input, condition: $condition) {
    id
    types
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAiTaskTypesMutationVariables,
  APITypes.DeleteAiTaskTypesMutation
>;
export const createAiProcess = /* GraphQL */ `mutation CreateAiProcess(
  $input: CreateAiProcessInput!
  $condition: ModelAiProcessConditionInput
) {
  createAiProcess(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAiProcessMutationVariables,
  APITypes.CreateAiProcessMutation
>;
export const updateAiProcess = /* GraphQL */ `mutation UpdateAiProcess(
  $input: UpdateAiProcessInput!
  $condition: ModelAiProcessConditionInput
) {
  updateAiProcess(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAiProcessMutationVariables,
  APITypes.UpdateAiProcessMutation
>;
export const deleteAiProcess = /* GraphQL */ `mutation DeleteAiProcess(
  $input: DeleteAiProcessInput!
  $condition: ModelAiProcessConditionInput
) {
  deleteAiProcess(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAiProcessMutationVariables,
  APITypes.DeleteAiProcessMutation
>;
export const createAiSettings = /* GraphQL */ `mutation CreateAiSettings(
  $input: CreateAiSettingsInput!
  $condition: ModelAiSettingsConditionInput
) {
  createAiSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAiSettingsMutationVariables,
  APITypes.CreateAiSettingsMutation
>;
export const updateAiSettings = /* GraphQL */ `mutation UpdateAiSettings(
  $input: UpdateAiSettingsInput!
  $condition: ModelAiSettingsConditionInput
) {
  updateAiSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAiSettingsMutationVariables,
  APITypes.UpdateAiSettingsMutation
>;
export const deleteAiSettings = /* GraphQL */ `mutation DeleteAiSettings(
  $input: DeleteAiSettingsInput!
  $condition: ModelAiSettingsConditionInput
) {
  deleteAiSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAiSettingsMutationVariables,
  APITypes.DeleteAiSettingsMutation
>;
export const createBackendQueue = /* GraphQL */ `mutation CreateBackendQueue(
  $input: CreateBackendQueueInput!
  $condition: ModelBackendQueueConditionInput
) {
  createBackendQueue(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBackendQueueMutationVariables,
  APITypes.CreateBackendQueueMutation
>;
export const updateBackendQueue = /* GraphQL */ `mutation UpdateBackendQueue(
  $input: UpdateBackendQueueInput!
  $condition: ModelBackendQueueConditionInput
) {
  updateBackendQueue(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBackendQueueMutationVariables,
  APITypes.UpdateBackendQueueMutation
>;
export const deleteBackendQueue = /* GraphQL */ `mutation DeleteBackendQueue(
  $input: DeleteBackendQueueInput!
  $condition: ModelBackendQueueConditionInput
) {
  deleteBackendQueue(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBackendQueueMutationVariables,
  APITypes.DeleteBackendQueueMutation
>;
export const createBackendTopic = /* GraphQL */ `mutation CreateBackendTopic(
  $input: CreateBackendTopicInput!
  $condition: ModelBackendTopicConditionInput
) {
  createBackendTopic(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBackendTopicMutationVariables,
  APITypes.CreateBackendTopicMutation
>;
export const updateBackendTopic = /* GraphQL */ `mutation UpdateBackendTopic(
  $input: UpdateBackendTopicInput!
  $condition: ModelBackendTopicConditionInput
) {
  updateBackendTopic(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBackendTopicMutationVariables,
  APITypes.UpdateBackendTopicMutation
>;
export const deleteBackendTopic = /* GraphQL */ `mutation DeleteBackendTopic(
  $input: DeleteBackendTopicInput!
  $condition: ModelBackendTopicConditionInput
) {
  deleteBackendTopic(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBackendTopicMutationVariables,
  APITypes.DeleteBackendTopicMutation
>;
export const createBackendDatabaseType = /* GraphQL */ `mutation CreateBackendDatabaseType(
  $input: CreateBackendDatabaseTypeInput!
  $condition: ModelBackendDatabaseTypeConditionInput
) {
  createBackendDatabaseType(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBackendDatabaseTypeMutationVariables,
  APITypes.CreateBackendDatabaseTypeMutation
>;
export const updateBackendDatabaseType = /* GraphQL */ `mutation UpdateBackendDatabaseType(
  $input: UpdateBackendDatabaseTypeInput!
  $condition: ModelBackendDatabaseTypeConditionInput
) {
  updateBackendDatabaseType(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBackendDatabaseTypeMutationVariables,
  APITypes.UpdateBackendDatabaseTypeMutation
>;
export const deleteBackendDatabaseType = /* GraphQL */ `mutation DeleteBackendDatabaseType(
  $input: DeleteBackendDatabaseTypeInput!
  $condition: ModelBackendDatabaseTypeConditionInput
) {
  deleteBackendDatabaseType(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBackendDatabaseTypeMutationVariables,
  APITypes.DeleteBackendDatabaseTypeMutation
>;
export const createBackendDatabase = /* GraphQL */ `mutation CreateBackendDatabase(
  $input: CreateBackendDatabaseInput!
  $condition: ModelBackendDatabaseConditionInput
) {
  createBackendDatabase(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBackendDatabaseMutationVariables,
  APITypes.CreateBackendDatabaseMutation
>;
export const updateBackendDatabase = /* GraphQL */ `mutation UpdateBackendDatabase(
  $input: UpdateBackendDatabaseInput!
  $condition: ModelBackendDatabaseConditionInput
) {
  updateBackendDatabase(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBackendDatabaseMutationVariables,
  APITypes.UpdateBackendDatabaseMutation
>;
export const deleteBackendDatabase = /* GraphQL */ `mutation DeleteBackendDatabase(
  $input: DeleteBackendDatabaseInput!
  $condition: ModelBackendDatabaseConditionInput
) {
  deleteBackendDatabase(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBackendDatabaseMutationVariables,
  APITypes.DeleteBackendDatabaseMutation
>;
export const createBackendEndpointMethod = /* GraphQL */ `mutation CreateBackendEndpointMethod(
  $input: CreateBackendEndpointMethodInput!
  $condition: ModelBackendEndpointMethodConditionInput
) {
  createBackendEndpointMethod(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBackendEndpointMethodMutationVariables,
  APITypes.CreateBackendEndpointMethodMutation
>;
export const updateBackendEndpointMethod = /* GraphQL */ `mutation UpdateBackendEndpointMethod(
  $input: UpdateBackendEndpointMethodInput!
  $condition: ModelBackendEndpointMethodConditionInput
) {
  updateBackendEndpointMethod(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBackendEndpointMethodMutationVariables,
  APITypes.UpdateBackendEndpointMethodMutation
>;
export const deleteBackendEndpointMethod = /* GraphQL */ `mutation DeleteBackendEndpointMethod(
  $input: DeleteBackendEndpointMethodInput!
  $condition: ModelBackendEndpointMethodConditionInput
) {
  deleteBackendEndpointMethod(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBackendEndpointMethodMutationVariables,
  APITypes.DeleteBackendEndpointMethodMutation
>;
export const createBackendEndpoint = /* GraphQL */ `mutation CreateBackendEndpoint(
  $input: CreateBackendEndpointInput!
  $condition: ModelBackendEndpointConditionInput
) {
  createBackendEndpoint(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBackendEndpointMutationVariables,
  APITypes.CreateBackendEndpointMutation
>;
export const updateBackendEndpoint = /* GraphQL */ `mutation UpdateBackendEndpoint(
  $input: UpdateBackendEndpointInput!
  $condition: ModelBackendEndpointConditionInput
) {
  updateBackendEndpoint(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBackendEndpointMutationVariables,
  APITypes.UpdateBackendEndpointMutation
>;
export const deleteBackendEndpoint = /* GraphQL */ `mutation DeleteBackendEndpoint(
  $input: DeleteBackendEndpointInput!
  $condition: ModelBackendEndpointConditionInput
) {
  deleteBackendEndpoint(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBackendEndpointMutationVariables,
  APITypes.DeleteBackendEndpointMutation
>;
export const createBackendSettings = /* GraphQL */ `mutation CreateBackendSettings(
  $input: CreateBackendSettingsInput!
  $condition: ModelBackendSettingsConditionInput
) {
  createBackendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBackendSettingsMutationVariables,
  APITypes.CreateBackendSettingsMutation
>;
export const updateBackendSettings = /* GraphQL */ `mutation UpdateBackendSettings(
  $input: UpdateBackendSettingsInput!
  $condition: ModelBackendSettingsConditionInput
) {
  updateBackendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBackendSettingsMutationVariables,
  APITypes.UpdateBackendSettingsMutation
>;
export const deleteBackendSettings = /* GraphQL */ `mutation DeleteBackendSettings(
  $input: DeleteBackendSettingsInput!
  $condition: ModelBackendSettingsConditionInput
) {
  deleteBackendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBackendSettingsMutationVariables,
  APITypes.DeleteBackendSettingsMutation
>;
export const createFrontendComponent = /* GraphQL */ `mutation CreateFrontendComponent(
  $input: CreateFrontendComponentInput!
  $condition: ModelFrontendComponentConditionInput
) {
  createFrontendComponent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFrontendComponentMutationVariables,
  APITypes.CreateFrontendComponentMutation
>;
export const updateFrontendComponent = /* GraphQL */ `mutation UpdateFrontendComponent(
  $input: UpdateFrontendComponentInput!
  $condition: ModelFrontendComponentConditionInput
) {
  updateFrontendComponent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFrontendComponentMutationVariables,
  APITypes.UpdateFrontendComponentMutation
>;
export const deleteFrontendComponent = /* GraphQL */ `mutation DeleteFrontendComponent(
  $input: DeleteFrontendComponentInput!
  $condition: ModelFrontendComponentConditionInput
) {
  deleteFrontendComponent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFrontendComponentMutationVariables,
  APITypes.DeleteFrontendComponentMutation
>;
export const createFrontendSettings = /* GraphQL */ `mutation CreateFrontendSettings(
  $input: CreateFrontendSettingsInput!
  $condition: ModelFrontendSettingsConditionInput
) {
  createFrontendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFrontendSettingsMutationVariables,
  APITypes.CreateFrontendSettingsMutation
>;
export const updateFrontendSettings = /* GraphQL */ `mutation UpdateFrontendSettings(
  $input: UpdateFrontendSettingsInput!
  $condition: ModelFrontendSettingsConditionInput
) {
  updateFrontendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFrontendSettingsMutationVariables,
  APITypes.UpdateFrontendSettingsMutation
>;
export const deleteFrontendSettings = /* GraphQL */ `mutation DeleteFrontendSettings(
  $input: DeleteFrontendSettingsInput!
  $condition: ModelFrontendSettingsConditionInput
) {
  deleteFrontendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFrontendSettingsMutationVariables,
  APITypes.DeleteFrontendSettingsMutation
>;
export const createApplicationStageCognitoUserPool = /* GraphQL */ `mutation CreateApplicationStageCognitoUserPool(
  $input: CreateApplicationStageCognitoUserPoolInput!
  $condition: ModelApplicationStageCognitoUserPoolConditionInput
) {
  createApplicationStageCognitoUserPool(input: $input, condition: $condition) {
    id
    name
    userPoolId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateApplicationStageCognitoUserPoolMutationVariables,
  APITypes.CreateApplicationStageCognitoUserPoolMutation
>;
export const updateApplicationStageCognitoUserPool = /* GraphQL */ `mutation UpdateApplicationStageCognitoUserPool(
  $input: UpdateApplicationStageCognitoUserPoolInput!
  $condition: ModelApplicationStageCognitoUserPoolConditionInput
) {
  updateApplicationStageCognitoUserPool(input: $input, condition: $condition) {
    id
    name
    userPoolId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateApplicationStageCognitoUserPoolMutationVariables,
  APITypes.UpdateApplicationStageCognitoUserPoolMutation
>;
export const deleteApplicationStageCognitoUserPool = /* GraphQL */ `mutation DeleteApplicationStageCognitoUserPool(
  $input: DeleteApplicationStageCognitoUserPoolInput!
  $condition: ModelApplicationStageCognitoUserPoolConditionInput
) {
  deleteApplicationStageCognitoUserPool(input: $input, condition: $condition) {
    id
    name
    userPoolId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteApplicationStageCognitoUserPoolMutationVariables,
  APITypes.DeleteApplicationStageCognitoUserPoolMutation
>;
export const createApplicationStage = /* GraphQL */ `mutation CreateApplicationStage(
  $input: CreateApplicationStageInput!
  $condition: ModelApplicationStageConditionInput
) {
  createApplicationStage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateApplicationStageMutationVariables,
  APITypes.CreateApplicationStageMutation
>;
export const updateApplicationStage = /* GraphQL */ `mutation UpdateApplicationStage(
  $input: UpdateApplicationStageInput!
  $condition: ModelApplicationStageConditionInput
) {
  updateApplicationStage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateApplicationStageMutationVariables,
  APITypes.UpdateApplicationStageMutation
>;
export const deleteApplicationStage = /* GraphQL */ `mutation DeleteApplicationStage(
  $input: DeleteApplicationStageInput!
  $condition: ModelApplicationStageConditionInput
) {
  deleteApplicationStage(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteApplicationStageMutationVariables,
  APITypes.DeleteApplicationStageMutation
>;
export const createApplicationAiServerSnapshotReference = /* GraphQL */ `mutation CreateApplicationAiServerSnapshotReference(
  $input: CreateApplicationAiServerSnapshotReferenceInput!
  $condition: ModelApplicationAiServerSnapshotReferenceConditionInput
) {
  createApplicationAiServerSnapshotReference(
    input: $input
    condition: $condition
  ) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateApplicationAiServerSnapshotReferenceMutationVariables,
  APITypes.CreateApplicationAiServerSnapshotReferenceMutation
>;
export const updateApplicationAiServerSnapshotReference = /* GraphQL */ `mutation UpdateApplicationAiServerSnapshotReference(
  $input: UpdateApplicationAiServerSnapshotReferenceInput!
  $condition: ModelApplicationAiServerSnapshotReferenceConditionInput
) {
  updateApplicationAiServerSnapshotReference(
    input: $input
    condition: $condition
  ) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateApplicationAiServerSnapshotReferenceMutationVariables,
  APITypes.UpdateApplicationAiServerSnapshotReferenceMutation
>;
export const deleteApplicationAiServerSnapshotReference = /* GraphQL */ `mutation DeleteApplicationAiServerSnapshotReference(
  $input: DeleteApplicationAiServerSnapshotReferenceInput!
  $condition: ModelApplicationAiServerSnapshotReferenceConditionInput
) {
  deleteApplicationAiServerSnapshotReference(
    input: $input
    condition: $condition
  ) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteApplicationAiServerSnapshotReferenceMutationVariables,
  APITypes.DeleteApplicationAiServerSnapshotReferenceMutation
>;
export const createApplication = /* GraphQL */ `mutation CreateApplication(
  $input: CreateApplicationInput!
  $condition: ModelApplicationConditionInput
) {
  createApplication(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateApplicationMutationVariables,
  APITypes.CreateApplicationMutation
>;
export const updateApplication = /* GraphQL */ `mutation UpdateApplication(
  $input: UpdateApplicationInput!
  $condition: ModelApplicationConditionInput
) {
  updateApplication(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateApplicationMutationVariables,
  APITypes.UpdateApplicationMutation
>;
export const deleteApplication = /* GraphQL */ `mutation DeleteApplication(
  $input: DeleteApplicationInput!
  $condition: ModelApplicationConditionInput
) {
  deleteApplication(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteApplicationMutationVariables,
  APITypes.DeleteApplicationMutation
>;
export const createBackendEndpointAiApiTool = /* GraphQL */ `mutation CreateBackendEndpointAiApiTool(
  $input: CreateBackendEndpointAiApiToolInput!
  $condition: ModelBackendEndpointAiApiToolConditionInput
) {
  createBackendEndpointAiApiTool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBackendEndpointAiApiToolMutationVariables,
  APITypes.CreateBackendEndpointAiApiToolMutation
>;
export const updateBackendEndpointAiApiTool = /* GraphQL */ `mutation UpdateBackendEndpointAiApiTool(
  $input: UpdateBackendEndpointAiApiToolInput!
  $condition: ModelBackendEndpointAiApiToolConditionInput
) {
  updateBackendEndpointAiApiTool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBackendEndpointAiApiToolMutationVariables,
  APITypes.UpdateBackendEndpointAiApiToolMutation
>;
export const deleteBackendEndpointAiApiTool = /* GraphQL */ `mutation DeleteBackendEndpointAiApiTool(
  $input: DeleteBackendEndpointAiApiToolInput!
  $condition: ModelBackendEndpointAiApiToolConditionInput
) {
  deleteBackendEndpointAiApiTool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBackendEndpointAiApiToolMutationVariables,
  APITypes.DeleteBackendEndpointAiApiToolMutation
>;
export const createAiApiToolAiToolGroup = /* GraphQL */ `mutation CreateAiApiToolAiToolGroup(
  $input: CreateAiApiToolAiToolGroupInput!
  $condition: ModelAiApiToolAiToolGroupConditionInput
) {
  createAiApiToolAiToolGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAiApiToolAiToolGroupMutationVariables,
  APITypes.CreateAiApiToolAiToolGroupMutation
>;
export const updateAiApiToolAiToolGroup = /* GraphQL */ `mutation UpdateAiApiToolAiToolGroup(
  $input: UpdateAiApiToolAiToolGroupInput!
  $condition: ModelAiApiToolAiToolGroupConditionInput
) {
  updateAiApiToolAiToolGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAiApiToolAiToolGroupMutationVariables,
  APITypes.UpdateAiApiToolAiToolGroupMutation
>;
export const deleteAiApiToolAiToolGroup = /* GraphQL */ `mutation DeleteAiApiToolAiToolGroup(
  $input: DeleteAiApiToolAiToolGroupInput!
  $condition: ModelAiApiToolAiToolGroupConditionInput
) {
  deleteAiApiToolAiToolGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAiApiToolAiToolGroupMutationVariables,
  APITypes.DeleteAiApiToolAiToolGroupMutation
>;
export const createFrontendComponentAiRenderTool = /* GraphQL */ `mutation CreateFrontendComponentAiRenderTool(
  $input: CreateFrontendComponentAiRenderToolInput!
  $condition: ModelFrontendComponentAiRenderToolConditionInput
) {
  createFrontendComponentAiRenderTool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFrontendComponentAiRenderToolMutationVariables,
  APITypes.CreateFrontendComponentAiRenderToolMutation
>;
export const updateFrontendComponentAiRenderTool = /* GraphQL */ `mutation UpdateFrontendComponentAiRenderTool(
  $input: UpdateFrontendComponentAiRenderToolInput!
  $condition: ModelFrontendComponentAiRenderToolConditionInput
) {
  updateFrontendComponentAiRenderTool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFrontendComponentAiRenderToolMutationVariables,
  APITypes.UpdateFrontendComponentAiRenderToolMutation
>;
export const deleteFrontendComponentAiRenderTool = /* GraphQL */ `mutation DeleteFrontendComponentAiRenderTool(
  $input: DeleteFrontendComponentAiRenderToolInput!
  $condition: ModelFrontendComponentAiRenderToolConditionInput
) {
  deleteFrontendComponentAiRenderTool(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFrontendComponentAiRenderToolMutationVariables,
  APITypes.DeleteFrontendComponentAiRenderToolMutation
>;
export const createAiRenderToolAiToolGroup = /* GraphQL */ `mutation CreateAiRenderToolAiToolGroup(
  $input: CreateAiRenderToolAiToolGroupInput!
  $condition: ModelAiRenderToolAiToolGroupConditionInput
) {
  createAiRenderToolAiToolGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAiRenderToolAiToolGroupMutationVariables,
  APITypes.CreateAiRenderToolAiToolGroupMutation
>;
export const updateAiRenderToolAiToolGroup = /* GraphQL */ `mutation UpdateAiRenderToolAiToolGroup(
  $input: UpdateAiRenderToolAiToolGroupInput!
  $condition: ModelAiRenderToolAiToolGroupConditionInput
) {
  updateAiRenderToolAiToolGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAiRenderToolAiToolGroupMutationVariables,
  APITypes.UpdateAiRenderToolAiToolGroupMutation
>;
export const deleteAiRenderToolAiToolGroup = /* GraphQL */ `mutation DeleteAiRenderToolAiToolGroup(
  $input: DeleteAiRenderToolAiToolGroupInput!
  $condition: ModelAiRenderToolAiToolGroupConditionInput
) {
  deleteAiRenderToolAiToolGroup(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAiRenderToolAiToolGroupMutationVariables,
  APITypes.DeleteAiRenderToolAiToolGroupMutation
>;
export const createAiToolGroupAiConfiguration = /* GraphQL */ `mutation CreateAiToolGroupAiConfiguration(
  $input: CreateAiToolGroupAiConfigurationInput!
  $condition: ModelAiToolGroupAiConfigurationConditionInput
) {
  createAiToolGroupAiConfiguration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAiToolGroupAiConfigurationMutationVariables,
  APITypes.CreateAiToolGroupAiConfigurationMutation
>;
export const updateAiToolGroupAiConfiguration = /* GraphQL */ `mutation UpdateAiToolGroupAiConfiguration(
  $input: UpdateAiToolGroupAiConfigurationInput!
  $condition: ModelAiToolGroupAiConfigurationConditionInput
) {
  updateAiToolGroupAiConfiguration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAiToolGroupAiConfigurationMutationVariables,
  APITypes.UpdateAiToolGroupAiConfigurationMutation
>;
export const deleteAiToolGroupAiConfiguration = /* GraphQL */ `mutation DeleteAiToolGroupAiConfiguration(
  $input: DeleteAiToolGroupAiConfigurationInput!
  $condition: ModelAiToolGroupAiConfigurationConditionInput
) {
  deleteAiToolGroupAiConfiguration(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAiToolGroupAiConfigurationMutationVariables,
  APITypes.DeleteAiToolGroupAiConfigurationMutation
>;
export const createAiProcessAiSettings = /* GraphQL */ `mutation CreateAiProcessAiSettings(
  $input: CreateAiProcessAiSettingsInput!
  $condition: ModelAiProcessAiSettingsConditionInput
) {
  createAiProcessAiSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAiProcessAiSettingsMutationVariables,
  APITypes.CreateAiProcessAiSettingsMutation
>;
export const updateAiProcessAiSettings = /* GraphQL */ `mutation UpdateAiProcessAiSettings(
  $input: UpdateAiProcessAiSettingsInput!
  $condition: ModelAiProcessAiSettingsConditionInput
) {
  updateAiProcessAiSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAiProcessAiSettingsMutationVariables,
  APITypes.UpdateAiProcessAiSettingsMutation
>;
export const deleteAiProcessAiSettings = /* GraphQL */ `mutation DeleteAiProcessAiSettings(
  $input: DeleteAiProcessAiSettingsInput!
  $condition: ModelAiProcessAiSettingsConditionInput
) {
  deleteAiProcessAiSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAiProcessAiSettingsMutationVariables,
  APITypes.DeleteAiProcessAiSettingsMutation
>;
export const createBackendQueueBackendSettings = /* GraphQL */ `mutation CreateBackendQueueBackendSettings(
  $input: CreateBackendQueueBackendSettingsInput!
  $condition: ModelBackendQueueBackendSettingsConditionInput
) {
  createBackendQueueBackendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBackendQueueBackendSettingsMutationVariables,
  APITypes.CreateBackendQueueBackendSettingsMutation
>;
export const updateBackendQueueBackendSettings = /* GraphQL */ `mutation UpdateBackendQueueBackendSettings(
  $input: UpdateBackendQueueBackendSettingsInput!
  $condition: ModelBackendQueueBackendSettingsConditionInput
) {
  updateBackendQueueBackendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBackendQueueBackendSettingsMutationVariables,
  APITypes.UpdateBackendQueueBackendSettingsMutation
>;
export const deleteBackendQueueBackendSettings = /* GraphQL */ `mutation DeleteBackendQueueBackendSettings(
  $input: DeleteBackendQueueBackendSettingsInput!
  $condition: ModelBackendQueueBackendSettingsConditionInput
) {
  deleteBackendQueueBackendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBackendQueueBackendSettingsMutationVariables,
  APITypes.DeleteBackendQueueBackendSettingsMutation
>;
export const createBackendTopicBackendSettings = /* GraphQL */ `mutation CreateBackendTopicBackendSettings(
  $input: CreateBackendTopicBackendSettingsInput!
  $condition: ModelBackendTopicBackendSettingsConditionInput
) {
  createBackendTopicBackendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBackendTopicBackendSettingsMutationVariables,
  APITypes.CreateBackendTopicBackendSettingsMutation
>;
export const updateBackendTopicBackendSettings = /* GraphQL */ `mutation UpdateBackendTopicBackendSettings(
  $input: UpdateBackendTopicBackendSettingsInput!
  $condition: ModelBackendTopicBackendSettingsConditionInput
) {
  updateBackendTopicBackendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBackendTopicBackendSettingsMutationVariables,
  APITypes.UpdateBackendTopicBackendSettingsMutation
>;
export const deleteBackendTopicBackendSettings = /* GraphQL */ `mutation DeleteBackendTopicBackendSettings(
  $input: DeleteBackendTopicBackendSettingsInput!
  $condition: ModelBackendTopicBackendSettingsConditionInput
) {
  deleteBackendTopicBackendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBackendTopicBackendSettingsMutationVariables,
  APITypes.DeleteBackendTopicBackendSettingsMutation
>;
export const createBackendDatabaseBackendSettings = /* GraphQL */ `mutation CreateBackendDatabaseBackendSettings(
  $input: CreateBackendDatabaseBackendSettingsInput!
  $condition: ModelBackendDatabaseBackendSettingsConditionInput
) {
  createBackendDatabaseBackendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBackendDatabaseBackendSettingsMutationVariables,
  APITypes.CreateBackendDatabaseBackendSettingsMutation
>;
export const updateBackendDatabaseBackendSettings = /* GraphQL */ `mutation UpdateBackendDatabaseBackendSettings(
  $input: UpdateBackendDatabaseBackendSettingsInput!
  $condition: ModelBackendDatabaseBackendSettingsConditionInput
) {
  updateBackendDatabaseBackendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBackendDatabaseBackendSettingsMutationVariables,
  APITypes.UpdateBackendDatabaseBackendSettingsMutation
>;
export const deleteBackendDatabaseBackendSettings = /* GraphQL */ `mutation DeleteBackendDatabaseBackendSettings(
  $input: DeleteBackendDatabaseBackendSettingsInput!
  $condition: ModelBackendDatabaseBackendSettingsConditionInput
) {
  deleteBackendDatabaseBackendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBackendDatabaseBackendSettingsMutationVariables,
  APITypes.DeleteBackendDatabaseBackendSettingsMutation
>;
export const createBackendEndpointBackendSettings = /* GraphQL */ `mutation CreateBackendEndpointBackendSettings(
  $input: CreateBackendEndpointBackendSettingsInput!
  $condition: ModelBackendEndpointBackendSettingsConditionInput
) {
  createBackendEndpointBackendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBackendEndpointBackendSettingsMutationVariables,
  APITypes.CreateBackendEndpointBackendSettingsMutation
>;
export const updateBackendEndpointBackendSettings = /* GraphQL */ `mutation UpdateBackendEndpointBackendSettings(
  $input: UpdateBackendEndpointBackendSettingsInput!
  $condition: ModelBackendEndpointBackendSettingsConditionInput
) {
  updateBackendEndpointBackendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBackendEndpointBackendSettingsMutationVariables,
  APITypes.UpdateBackendEndpointBackendSettingsMutation
>;
export const deleteBackendEndpointBackendSettings = /* GraphQL */ `mutation DeleteBackendEndpointBackendSettings(
  $input: DeleteBackendEndpointBackendSettingsInput!
  $condition: ModelBackendEndpointBackendSettingsConditionInput
) {
  deleteBackendEndpointBackendSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBackendEndpointBackendSettingsMutationVariables,
  APITypes.DeleteBackendEndpointBackendSettingsMutation
>;
export const createFrontendComponentFrontendSettings = /* GraphQL */ `mutation CreateFrontendComponentFrontendSettings(
  $input: CreateFrontendComponentFrontendSettingsInput!
  $condition: ModelFrontendComponentFrontendSettingsConditionInput
) {
  createFrontendComponentFrontendSettings(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
  APITypes.CreateFrontendComponentFrontendSettingsMutationVariables,
  APITypes.CreateFrontendComponentFrontendSettingsMutation
>;
export const updateFrontendComponentFrontendSettings = /* GraphQL */ `mutation UpdateFrontendComponentFrontendSettings(
  $input: UpdateFrontendComponentFrontendSettingsInput!
  $condition: ModelFrontendComponentFrontendSettingsConditionInput
) {
  updateFrontendComponentFrontendSettings(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
  APITypes.UpdateFrontendComponentFrontendSettingsMutationVariables,
  APITypes.UpdateFrontendComponentFrontendSettingsMutation
>;
export const deleteFrontendComponentFrontendSettings = /* GraphQL */ `mutation DeleteFrontendComponentFrontendSettings(
  $input: DeleteFrontendComponentFrontendSettingsInput!
  $condition: ModelFrontendComponentFrontendSettingsConditionInput
) {
  deleteFrontendComponentFrontendSettings(
    input: $input
    condition: $condition
  ) {
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
` as GeneratedMutation<
  APITypes.DeleteFrontendComponentFrontendSettingsMutationVariables,
  APITypes.DeleteFrontendComponentFrontendSettingsMutation
>;
