/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAiClientCompanyInput = {
  id?: string | null,
  name: string,
  business: string,
  values: string,
};

export type ModelAiClientCompanyConditionInput = {
  name?: ModelStringInput | null,
  business?: ModelStringInput | null,
  values?: ModelStringInput | null,
  and?: Array< ModelAiClientCompanyConditionInput | null > | null,
  or?: Array< ModelAiClientCompanyConditionInput | null > | null,
  not?: ModelAiClientCompanyConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type AiClientCompany = {
  __typename: "AiClientCompany",
  id: string,
  name: string,
  business: string,
  values: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAiClientCompanyInput = {
  id: string,
  name?: string | null,
  business?: string | null,
  values?: string | null,
};

export type DeleteAiClientCompanyInput = {
  id: string,
};

export type CreateAiLlmInput = {
  id?: string | null,
  name: string,
  input: Array< string >,
  output: Array< string >,
  description: string,
  available: boolean,
  maxTokens?: number | null,
};

export type ModelAiLlmConditionInput = {
  name?: ModelStringInput | null,
  input?: ModelStringInput | null,
  output?: ModelStringInput | null,
  description?: ModelStringInput | null,
  available?: ModelBooleanInput | null,
  maxTokens?: ModelFloatInput | null,
  and?: Array< ModelAiLlmConditionInput | null > | null,
  or?: Array< ModelAiLlmConditionInput | null > | null,
  not?: ModelAiLlmConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type AiLlm = {
  __typename: "AiLlm",
  id: string,
  name: string,
  input: Array< string >,
  output: Array< string >,
  description: string,
  available: boolean,
  maxTokens?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAiLlmInput = {
  id: string,
  name?: string | null,
  input?: Array< string > | null,
  output?: Array< string > | null,
  description?: string | null,
  available?: boolean | null,
  maxTokens?: number | null,
};

export type DeleteAiLlmInput = {
  id: string,
};

export type CreateAiVectorialDbConfigInput = {
  id?: string | null,
  name: string,
  apiKey: string,
  indexName: string,
  nameSpace: string,
  score: number,
  numberOfSimilarities: number,
};

export type ModelAiVectorialDbConfigConditionInput = {
  name?: ModelStringInput | null,
  apiKey?: ModelStringInput | null,
  indexName?: ModelStringInput | null,
  nameSpace?: ModelStringInput | null,
  score?: ModelFloatInput | null,
  numberOfSimilarities?: ModelFloatInput | null,
  and?: Array< ModelAiVectorialDbConfigConditionInput | null > | null,
  or?: Array< ModelAiVectorialDbConfigConditionInput | null > | null,
  not?: ModelAiVectorialDbConfigConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type AiVectorialDbConfig = {
  __typename: "AiVectorialDbConfig",
  id: string,
  name: string,
  apiKey: string,
  indexName: string,
  nameSpace: string,
  score: number,
  numberOfSimilarities: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAiVectorialDbConfigInput = {
  id: string,
  name?: string | null,
  apiKey?: string | null,
  indexName?: string | null,
  nameSpace?: string | null,
  score?: number | null,
  numberOfSimilarities?: number | null,
};

export type DeleteAiVectorialDbConfigInput = {
  id: string,
};

export type CreateAiVectorizerParametersInput = {
  id?: string | null,
  name: string,
  aiLlmID: string,
  chunkSize: number,
  chunkOverlap: string,
};

export type ModelAiVectorizerParametersConditionInput = {
  name?: ModelStringInput | null,
  aiLlmID?: ModelIDInput | null,
  chunkSize?: ModelFloatInput | null,
  chunkOverlap?: ModelStringInput | null,
  and?: Array< ModelAiVectorizerParametersConditionInput | null > | null,
  or?: Array< ModelAiVectorizerParametersConditionInput | null > | null,
  not?: ModelAiVectorizerParametersConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type AiVectorizerParameters = {
  __typename: "AiVectorizerParameters",
  id: string,
  name: string,
  aiLlmID: string,
  aiLlm?: AiLlm | null,
  chunkSize: number,
  chunkOverlap: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAiVectorizerParametersInput = {
  id: string,
  name?: string | null,
  aiLlmID?: string | null,
  chunkSize?: number | null,
  chunkOverlap?: string | null,
};

export type DeleteAiVectorizerParametersInput = {
  id: string,
};

export type CreateAiParametersInput = {
  id?: string | null,
  name: string,
  role: string,
  companyID: string,
  conversationPurpose: string,
  conversationType: string,
  prePrompt: string,
  postPrompt: string,
  llmID: string,
  chatMemory: number,
  responseTemperature: number,
  responseLanguage: string,
};

export type ModelAiParametersConditionInput = {
  name?: ModelStringInput | null,
  role?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  conversationPurpose?: ModelStringInput | null,
  conversationType?: ModelStringInput | null,
  prePrompt?: ModelStringInput | null,
  postPrompt?: ModelStringInput | null,
  llmID?: ModelIDInput | null,
  chatMemory?: ModelFloatInput | null,
  responseTemperature?: ModelFloatInput | null,
  responseLanguage?: ModelStringInput | null,
  and?: Array< ModelAiParametersConditionInput | null > | null,
  or?: Array< ModelAiParametersConditionInput | null > | null,
  not?: ModelAiParametersConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type AiParameters = {
  __typename: "AiParameters",
  id: string,
  name: string,
  role: string,
  companyID: string,
  company?: AiClientCompany | null,
  conversationPurpose: string,
  conversationType: string,
  prePrompt: string,
  postPrompt: string,
  llmID: string,
  llm?: AiLlm | null,
  chatMemory: number,
  responseTemperature: number,
  responseLanguage: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAiParametersInput = {
  id: string,
  name?: string | null,
  role?: string | null,
  companyID?: string | null,
  conversationPurpose?: string | null,
  conversationType?: string | null,
  prePrompt?: string | null,
  postPrompt?: string | null,
  llmID?: string | null,
  chatMemory?: number | null,
  responseTemperature?: number | null,
  responseLanguage?: string | null,
};

export type DeleteAiParametersInput = {
  id: string,
};

export type CreateAiApiToolInput = {
  id?: string | null,
  name: string,
  func: string,
  useCases: string,
  description: string,
  payload?: string | null,
};

export type ModelAiApiToolConditionInput = {
  name?: ModelStringInput | null,
  func?: ModelStringInput | null,
  useCases?: ModelStringInput | null,
  description?: ModelStringInput | null,
  payload?: ModelStringInput | null,
  and?: Array< ModelAiApiToolConditionInput | null > | null,
  or?: Array< ModelAiApiToolConditionInput | null > | null,
  not?: ModelAiApiToolConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type AiApiTool = {
  __typename: "AiApiTool",
  id: string,
  name: string,
  func: string,
  useCases: string,
  description: string,
  payload?: string | null,
  endpoint?: ModelBackendEndpointAiApiToolConnection | null,
  usedIn?: ModelAiApiToolAiToolGroupConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBackendEndpointAiApiToolConnection = {
  __typename: "ModelBackendEndpointAiApiToolConnection",
  items:  Array<BackendEndpointAiApiTool | null >,
  nextToken?: string | null,
};

export type BackendEndpointAiApiTool = {
  __typename: "BackendEndpointAiApiTool",
  id: string,
  aiApiToolId: string,
  backendEndpointId: string,
  aiApiTool: AiApiTool,
  backendEndpoint: BackendEndpoint,
  createdAt: string,
  updatedAt: string,
};

export type BackendEndpoint = {
  __typename: "BackendEndpoint",
  id: string,
  name: string,
  url: string,
  description: string,
  methodID?: string | null,
  method?: BackendEndpointMethod | null,
  parametersWIP?: string | null,
  usedInSettings?: ModelBackendEndpointBackendSettingsConnection | null,
  usedInTool?: ModelBackendEndpointAiApiToolConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type BackendEndpointMethod = {
  __typename: "BackendEndpointMethod",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelBackendEndpointBackendSettingsConnection = {
  __typename: "ModelBackendEndpointBackendSettingsConnection",
  items:  Array<BackendEndpointBackendSettings | null >,
  nextToken?: string | null,
};

export type BackendEndpointBackendSettings = {
  __typename: "BackendEndpointBackendSettings",
  id: string,
  backendEndpointId: string,
  backendSettingsId: string,
  backendEndpoint: BackendEndpoint,
  backendSettings: BackendSettings,
  createdAt: string,
  updatedAt: string,
};

export type BackendSettings = {
  __typename: "BackendSettings",
  id: string,
  name: string,
  region: string,
  secretName: string,
  endpoints?: ModelBackendEndpointBackendSettingsConnection | null,
  databases?: ModelBackendDatabaseBackendSettingsConnection | null,
  queues?: ModelBackendQueueBackendSettingsConnection | null,
  topics?: ModelBackendTopicBackendSettingsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBackendDatabaseBackendSettingsConnection = {
  __typename: "ModelBackendDatabaseBackendSettingsConnection",
  items:  Array<BackendDatabaseBackendSettings | null >,
  nextToken?: string | null,
};

export type BackendDatabaseBackendSettings = {
  __typename: "BackendDatabaseBackendSettings",
  id: string,
  backendDatabaseId: string,
  backendSettingsId: string,
  backendDatabase: BackendDatabase,
  backendSettings: BackendSettings,
  createdAt: string,
  updatedAt: string,
};

export type BackendDatabase = {
  __typename: "BackendDatabase",
  id: string,
  name: string,
  backendDatabaseTypeID: string,
  type?: BackendDatabaseType | null,
  reference: string,
  usedIn?: ModelBackendDatabaseBackendSettingsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type BackendDatabaseType = {
  __typename: "BackendDatabaseType",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelBackendQueueBackendSettingsConnection = {
  __typename: "ModelBackendQueueBackendSettingsConnection",
  items:  Array<BackendQueueBackendSettings | null >,
  nextToken?: string | null,
};

export type BackendQueueBackendSettings = {
  __typename: "BackendQueueBackendSettings",
  id: string,
  backendQueueId: string,
  backendSettingsId: string,
  backendQueue: BackendQueue,
  backendSettings: BackendSettings,
  createdAt: string,
  updatedAt: string,
};

export type BackendQueue = {
  __typename: "BackendQueue",
  id: string,
  name: string,
  url: string,
  usedIn?: ModelBackendQueueBackendSettingsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelBackendTopicBackendSettingsConnection = {
  __typename: "ModelBackendTopicBackendSettingsConnection",
  items:  Array<BackendTopicBackendSettings | null >,
  nextToken?: string | null,
};

export type BackendTopicBackendSettings = {
  __typename: "BackendTopicBackendSettings",
  id: string,
  backendTopicId: string,
  backendSettingsId: string,
  backendTopic: BackendTopic,
  backendSettings: BackendSettings,
  createdAt: string,
  updatedAt: string,
};

export type BackendTopic = {
  __typename: "BackendTopic",
  id: string,
  name: string,
  arn: string,
  usedIn?: ModelBackendTopicBackendSettingsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAiApiToolAiToolGroupConnection = {
  __typename: "ModelAiApiToolAiToolGroupConnection",
  items:  Array<AiApiToolAiToolGroup | null >,
  nextToken?: string | null,
};

export type AiApiToolAiToolGroup = {
  __typename: "AiApiToolAiToolGroup",
  id: string,
  aiApiToolId: string,
  aiToolGroupId: string,
  aiApiTool: AiApiTool,
  aiToolGroup: AiToolGroup,
  createdAt: string,
  updatedAt: string,
};

export type AiToolGroup = {
  __typename: "AiToolGroup",
  id: string,
  name: string,
  apiTools?: ModelAiApiToolAiToolGroupConnection | null,
  renderTools?: ModelAiRenderToolAiToolGroupConnection | null,
  usedIn?: ModelAiToolGroupAiConfigurationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAiRenderToolAiToolGroupConnection = {
  __typename: "ModelAiRenderToolAiToolGroupConnection",
  items:  Array<AiRenderToolAiToolGroup | null >,
  nextToken?: string | null,
};

export type AiRenderToolAiToolGroup = {
  __typename: "AiRenderToolAiToolGroup",
  id: string,
  aiRenderToolId: string,
  aiToolGroupId: string,
  aiRenderTool: AiRenderTool,
  aiToolGroup: AiToolGroup,
  createdAt: string,
  updatedAt: string,
};

export type AiRenderTool = {
  __typename: "AiRenderTool",
  id: string,
  name: string,
  func: string,
  useCases: string,
  description: string,
  payload?: string | null,
  action: string,
  component?: ModelFrontendComponentAiRenderToolConnection | null,
  usedIn?: ModelAiRenderToolAiToolGroupConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFrontendComponentAiRenderToolConnection = {
  __typename: "ModelFrontendComponentAiRenderToolConnection",
  items:  Array<FrontendComponentAiRenderTool | null >,
  nextToken?: string | null,
};

export type FrontendComponentAiRenderTool = {
  __typename: "FrontendComponentAiRenderTool",
  id: string,
  aiRenderToolId: string,
  frontendComponentId: string,
  aiRenderTool: AiRenderTool,
  frontendComponent: FrontendComponent,
  createdAt: string,
  updatedAt: string,
};

export type FrontendComponent = {
  __typename: "FrontendComponent",
  id: string,
  name: string,
  description: string,
  usedInSettings?: ModelFrontendComponentFrontendSettingsConnection | null,
  usedInTool?: ModelFrontendComponentAiRenderToolConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelFrontendComponentFrontendSettingsConnection = {
  __typename: "ModelFrontendComponentFrontendSettingsConnection",
  items:  Array<FrontendComponentFrontendSettings | null >,
  nextToken?: string | null,
};

export type FrontendComponentFrontendSettings = {
  __typename: "FrontendComponentFrontendSettings",
  id: string,
  frontendComponentId: string,
  frontendSettingsId: string,
  frontendComponent: FrontendComponent,
  frontendSettings: FrontendSettings,
  createdAt: string,
  updatedAt: string,
};

export type FrontendSettings = {
  __typename: "FrontendSettings",
  id: string,
  name: string,
  domain: string,
  cssS3Url?: string | null,
  components?: ModelFrontendComponentFrontendSettingsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAiToolGroupAiConfigurationConnection = {
  __typename: "ModelAiToolGroupAiConfigurationConnection",
  items:  Array<AiToolGroupAiConfiguration | null >,
  nextToken?: string | null,
};

export type AiToolGroupAiConfiguration = {
  __typename: "AiToolGroupAiConfiguration",
  id: string,
  aiToolGroupId: string,
  aiConfigurationId: string,
  aiToolGroup: AiToolGroup,
  aiConfiguration: AiConfiguration,
  createdAt: string,
  updatedAt: string,
};

export type AiConfiguration = {
  __typename: "AiConfiguration",
  id: string,
  name: string,
  aiParametersID: string,
  aiParameters?: AiParameters | null,
  tools?: ModelAiToolGroupAiConfigurationConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAiApiToolInput = {
  id: string,
  name?: string | null,
  func?: string | null,
  useCases?: string | null,
  description?: string | null,
  payload?: string | null,
};

export type DeleteAiApiToolInput = {
  id: string,
};

export type CreateAiRenderToolInput = {
  id?: string | null,
  name: string,
  func: string,
  useCases: string,
  description: string,
  payload?: string | null,
  action: string,
};

export type ModelAiRenderToolConditionInput = {
  name?: ModelStringInput | null,
  func?: ModelStringInput | null,
  useCases?: ModelStringInput | null,
  description?: ModelStringInput | null,
  payload?: ModelStringInput | null,
  action?: ModelStringInput | null,
  and?: Array< ModelAiRenderToolConditionInput | null > | null,
  or?: Array< ModelAiRenderToolConditionInput | null > | null,
  not?: ModelAiRenderToolConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAiRenderToolInput = {
  id: string,
  name?: string | null,
  func?: string | null,
  useCases?: string | null,
  description?: string | null,
  payload?: string | null,
  action?: string | null,
};

export type DeleteAiRenderToolInput = {
  id: string,
};

export type CreateAiToolGroupInput = {
  id?: string | null,
  name: string,
};

export type ModelAiToolGroupConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelAiToolGroupConditionInput | null > | null,
  or?: Array< ModelAiToolGroupConditionInput | null > | null,
  not?: ModelAiToolGroupConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAiToolGroupInput = {
  id: string,
  name?: string | null,
};

export type DeleteAiToolGroupInput = {
  id: string,
};

export type CreateAiConfigurationInput = {
  id?: string | null,
  name: string,
  aiParametersID: string,
};

export type ModelAiConfigurationConditionInput = {
  name?: ModelStringInput | null,
  aiParametersID?: ModelIDInput | null,
  and?: Array< ModelAiConfigurationConditionInput | null > | null,
  or?: Array< ModelAiConfigurationConditionInput | null > | null,
  not?: ModelAiConfigurationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAiConfigurationInput = {
  id: string,
  name?: string | null,
  aiParametersID?: string | null,
};

export type DeleteAiConfigurationInput = {
  id: string,
};

export type CreateAiIndexationConfigurationInput = {
  id?: string | null,
  name: string,
  vectorizerParametersID: string,
  vectorialDbConfigID: string,
};

export type ModelAiIndexationConfigurationConditionInput = {
  name?: ModelStringInput | null,
  vectorizerParametersID?: ModelIDInput | null,
  vectorialDbConfigID?: ModelIDInput | null,
  and?: Array< ModelAiIndexationConfigurationConditionInput | null > | null,
  or?: Array< ModelAiIndexationConfigurationConditionInput | null > | null,
  not?: ModelAiIndexationConfigurationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type AiIndexationConfiguration = {
  __typename: "AiIndexationConfiguration",
  id: string,
  name: string,
  vectorizerParametersID: string,
  vectorizerParameters?: AiVectorizerParameters | null,
  vectorialDbConfigID: string,
  vectorialDbConfig?: AiVectorialDbConfig | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAiIndexationConfigurationInput = {
  id: string,
  name?: string | null,
  vectorizerParametersID?: string | null,
  vectorialDbConfigID?: string | null,
};

export type DeleteAiIndexationConfigurationInput = {
  id: string,
};

export type CreateAiWebsocketInput = {
  id?: string | null,
  name: string,
  url: string,
};

export type ModelAiWebsocketConditionInput = {
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelAiWebsocketConditionInput | null > | null,
  or?: Array< ModelAiWebsocketConditionInput | null > | null,
  not?: ModelAiWebsocketConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type AiWebsocket = {
  __typename: "AiWebsocket",
  id: string,
  name: string,
  url: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAiWebsocketInput = {
  id: string,
  name?: string | null,
  url?: string | null,
};

export type DeleteAiWebsocketInput = {
  id: string,
};

export type CreateAiTaskTypesInput = {
  id?: string | null,
  types: string,
};

export type ModelAiTaskTypesConditionInput = {
  types?: ModelStringInput | null,
  and?: Array< ModelAiTaskTypesConditionInput | null > | null,
  or?: Array< ModelAiTaskTypesConditionInput | null > | null,
  not?: ModelAiTaskTypesConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type AiTaskTypes = {
  __typename: "AiTaskTypes",
  id: string,
  types: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAiTaskTypesInput = {
  id: string,
  types?: string | null,
};

export type DeleteAiTaskTypesInput = {
  id: string,
};

export type CreateAiProcessInput = {
  id?: string | null,
  tebeDeleted: boolean,
  name: string,
  taskTypeID: string,
  aiConfigID: string,
  communicationSourceType: communicationSourceType,
  frontedWebsocketCommunicationSourceID?: string | null,
  backendQueueCommunicationSourceID?: string | null,
};

export enum communicationSourceType {
  WEBSOCKET = "WEBSOCKET",
  BACKEND_QUEUE = "BACKEND_QUEUE",
}


export type ModelAiProcessConditionInput = {
  tebeDeleted?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  taskTypeID?: ModelIDInput | null,
  aiConfigID?: ModelIDInput | null,
  communicationSourceType?: ModelcommunicationSourceTypeInput | null,
  frontedWebsocketCommunicationSourceID?: ModelIDInput | null,
  backendQueueCommunicationSourceID?: ModelIDInput | null,
  and?: Array< ModelAiProcessConditionInput | null > | null,
  or?: Array< ModelAiProcessConditionInput | null > | null,
  not?: ModelAiProcessConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelcommunicationSourceTypeInput = {
  eq?: communicationSourceType | null,
  ne?: communicationSourceType | null,
};

export type AiProcess = {
  __typename: "AiProcess",
  id: string,
  tebeDeleted: boolean,
  name: string,
  taskTypeID: string,
  taskType?: AiTaskTypes | null,
  aiConfigID: string,
  aiConfig?: AiConfiguration | null,
  usedIn?: ModelAiProcessAiSettingsConnection | null,
  communicationSourceType: communicationSourceType,
  frontedWebsocketCommunicationSourceID?: string | null,
  frontedWebsocketCommunicationSource?: AiWebsocket | null,
  backendQueueCommunicationSourceID?: string | null,
  backendQueueCommunicationSource?: BackendQueue | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAiProcessAiSettingsConnection = {
  __typename: "ModelAiProcessAiSettingsConnection",
  items:  Array<AiProcessAiSettings | null >,
  nextToken?: string | null,
};

export type AiProcessAiSettings = {
  __typename: "AiProcessAiSettings",
  id: string,
  aiProcessId: string,
  aiSettingsId: string,
  aiProcess: AiProcess,
  aiSettings: AiSettings,
  createdAt: string,
  updatedAt: string,
};

export type AiSettings = {
  __typename: "AiSettings",
  id: string,
  name: string,
  balancerUrl: string,
  processes?: ModelAiProcessAiSettingsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAiProcessInput = {
  id: string,
  tebeDeleted?: boolean | null,
  name?: string | null,
  taskTypeID?: string | null,
  aiConfigID?: string | null,
  communicationSourceType?: communicationSourceType | null,
  frontedWebsocketCommunicationSourceID?: string | null,
  backendQueueCommunicationSourceID?: string | null,
};

export type DeleteAiProcessInput = {
  id: string,
};

export type CreateAiSettingsInput = {
  id?: string | null,
  name: string,
  balancerUrl: string,
};

export type ModelAiSettingsConditionInput = {
  name?: ModelStringInput | null,
  balancerUrl?: ModelStringInput | null,
  and?: Array< ModelAiSettingsConditionInput | null > | null,
  or?: Array< ModelAiSettingsConditionInput | null > | null,
  not?: ModelAiSettingsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAiSettingsInput = {
  id: string,
  name?: string | null,
  balancerUrl?: string | null,
};

export type DeleteAiSettingsInput = {
  id: string,
};

export type CreateBackendQueueInput = {
  id?: string | null,
  name: string,
  url: string,
};

export type ModelBackendQueueConditionInput = {
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelBackendQueueConditionInput | null > | null,
  or?: Array< ModelBackendQueueConditionInput | null > | null,
  not?: ModelBackendQueueConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBackendQueueInput = {
  id: string,
  name?: string | null,
  url?: string | null,
};

export type DeleteBackendQueueInput = {
  id: string,
};

export type CreateBackendTopicInput = {
  id?: string | null,
  name: string,
  arn: string,
};

export type ModelBackendTopicConditionInput = {
  name?: ModelStringInput | null,
  arn?: ModelStringInput | null,
  and?: Array< ModelBackendTopicConditionInput | null > | null,
  or?: Array< ModelBackendTopicConditionInput | null > | null,
  not?: ModelBackendTopicConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBackendTopicInput = {
  id: string,
  name?: string | null,
  arn?: string | null,
};

export type DeleteBackendTopicInput = {
  id: string,
};

export type CreateBackendDatabaseTypeInput = {
  id?: string | null,
  name: string,
};

export type ModelBackendDatabaseTypeConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBackendDatabaseTypeConditionInput | null > | null,
  or?: Array< ModelBackendDatabaseTypeConditionInput | null > | null,
  not?: ModelBackendDatabaseTypeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBackendDatabaseTypeInput = {
  id: string,
  name?: string | null,
};

export type DeleteBackendDatabaseTypeInput = {
  id: string,
};

export type CreateBackendDatabaseInput = {
  id?: string | null,
  name: string,
  backendDatabaseTypeID: string,
  reference: string,
};

export type ModelBackendDatabaseConditionInput = {
  name?: ModelStringInput | null,
  backendDatabaseTypeID?: ModelIDInput | null,
  reference?: ModelStringInput | null,
  and?: Array< ModelBackendDatabaseConditionInput | null > | null,
  or?: Array< ModelBackendDatabaseConditionInput | null > | null,
  not?: ModelBackendDatabaseConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBackendDatabaseInput = {
  id: string,
  name?: string | null,
  backendDatabaseTypeID?: string | null,
  reference?: string | null,
};

export type DeleteBackendDatabaseInput = {
  id: string,
};

export type CreateBackendEndpointMethodInput = {
  id?: string | null,
  name: string,
};

export type ModelBackendEndpointMethodConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBackendEndpointMethodConditionInput | null > | null,
  or?: Array< ModelBackendEndpointMethodConditionInput | null > | null,
  not?: ModelBackendEndpointMethodConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBackendEndpointMethodInput = {
  id: string,
  name?: string | null,
};

export type DeleteBackendEndpointMethodInput = {
  id: string,
};

export type CreateBackendEndpointInput = {
  id?: string | null,
  name: string,
  url: string,
  description: string,
  methodID?: string | null,
  parametersWIP?: string | null,
};

export type ModelBackendEndpointConditionInput = {
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  description?: ModelStringInput | null,
  methodID?: ModelIDInput | null,
  parametersWIP?: ModelStringInput | null,
  and?: Array< ModelBackendEndpointConditionInput | null > | null,
  or?: Array< ModelBackendEndpointConditionInput | null > | null,
  not?: ModelBackendEndpointConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBackendEndpointInput = {
  id: string,
  name?: string | null,
  url?: string | null,
  description?: string | null,
  methodID?: string | null,
  parametersWIP?: string | null,
};

export type DeleteBackendEndpointInput = {
  id: string,
};

export type CreateBackendSettingsInput = {
  id?: string | null,
  name: string,
  region: string,
  secretName: string,
};

export type ModelBackendSettingsConditionInput = {
  name?: ModelStringInput | null,
  region?: ModelStringInput | null,
  secretName?: ModelStringInput | null,
  and?: Array< ModelBackendSettingsConditionInput | null > | null,
  or?: Array< ModelBackendSettingsConditionInput | null > | null,
  not?: ModelBackendSettingsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBackendSettingsInput = {
  id: string,
  name?: string | null,
  region?: string | null,
  secretName?: string | null,
};

export type DeleteBackendSettingsInput = {
  id: string,
};

export type CreateFrontendComponentInput = {
  id?: string | null,
  name: string,
  description: string,
};

export type ModelFrontendComponentConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelFrontendComponentConditionInput | null > | null,
  or?: Array< ModelFrontendComponentConditionInput | null > | null,
  not?: ModelFrontendComponentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateFrontendComponentInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteFrontendComponentInput = {
  id: string,
};

export type CreateFrontendSettingsInput = {
  id?: string | null,
  name: string,
  domain: string,
  cssS3Url?: string | null,
};

export type ModelFrontendSettingsConditionInput = {
  name?: ModelStringInput | null,
  domain?: ModelStringInput | null,
  cssS3Url?: ModelStringInput | null,
  and?: Array< ModelFrontendSettingsConditionInput | null > | null,
  or?: Array< ModelFrontendSettingsConditionInput | null > | null,
  not?: ModelFrontendSettingsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateFrontendSettingsInput = {
  id: string,
  name?: string | null,
  domain?: string | null,
  cssS3Url?: string | null,
};

export type DeleteFrontendSettingsInput = {
  id: string,
};

export type CreateApplicationStageCognitoUserPoolInput = {
  id?: string | null,
  name: string,
  userPoolId: string,
};

export type ModelApplicationStageCognitoUserPoolConditionInput = {
  name?: ModelStringInput | null,
  userPoolId?: ModelStringInput | null,
  and?: Array< ModelApplicationStageCognitoUserPoolConditionInput | null > | null,
  or?: Array< ModelApplicationStageCognitoUserPoolConditionInput | null > | null,
  not?: ModelApplicationStageCognitoUserPoolConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ApplicationStageCognitoUserPool = {
  __typename: "ApplicationStageCognitoUserPool",
  id: string,
  name: string,
  userPoolId: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateApplicationStageCognitoUserPoolInput = {
  id: string,
  name?: string | null,
  userPoolId?: string | null,
};

export type DeleteApplicationStageCognitoUserPoolInput = {
  id: string,
};

export type CreateApplicationStageInput = {
  id?: string | null,
  name: string,
  aiSettingsID: string,
  backendSettingsID: string,
  frontendSettingsID: string,
  cognitoUserPoolID: string,
};

export type ModelApplicationStageConditionInput = {
  name?: ModelStringInput | null,
  aiSettingsID?: ModelIDInput | null,
  backendSettingsID?: ModelIDInput | null,
  frontendSettingsID?: ModelIDInput | null,
  cognitoUserPoolID?: ModelIDInput | null,
  and?: Array< ModelApplicationStageConditionInput | null > | null,
  or?: Array< ModelApplicationStageConditionInput | null > | null,
  not?: ModelApplicationStageConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ApplicationStage = {
  __typename: "ApplicationStage",
  id: string,
  name: string,
  aiSettingsID: string,
  aiSettings?: AiSettings | null,
  backendSettingsID: string,
  backendSettings?: BackendSettings | null,
  frontendSettingsID: string,
  frontendSettings?: FrontendSettings | null,
  cognitoUserPoolID: string,
  cognitoUserPool?: ApplicationStageCognitoUserPool | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateApplicationStageInput = {
  id: string,
  name?: string | null,
  aiSettingsID?: string | null,
  backendSettingsID?: string | null,
  frontendSettingsID?: string | null,
  cognitoUserPoolID?: string | null,
};

export type DeleteApplicationStageInput = {
  id: string,
};

export type CreateApplicationAiServerSnapshotReferenceInput = {
  id?: string | null,
  name: string,
};

export type ModelApplicationAiServerSnapshotReferenceConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelApplicationAiServerSnapshotReferenceConditionInput | null > | null,
  or?: Array< ModelApplicationAiServerSnapshotReferenceConditionInput | null > | null,
  not?: ModelApplicationAiServerSnapshotReferenceConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ApplicationAiServerSnapshotReference = {
  __typename: "ApplicationAiServerSnapshotReference",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateApplicationAiServerSnapshotReferenceInput = {
  id: string,
  name?: string | null,
};

export type DeleteApplicationAiServerSnapshotReferenceInput = {
  id: string,
};

export type CreateApplicationInput = {
  id?: string | null,
  url: string,
  name: string,
  version: string,
  devStageID?: string | null,
  stagingStageID?: string | null,
  prodStageID?: string | null,
  aiServerSnapshotReferenceID: string,
};

export type ModelApplicationConditionInput = {
  url?: ModelStringInput | null,
  name?: ModelStringInput | null,
  version?: ModelStringInput | null,
  devStageID?: ModelIDInput | null,
  stagingStageID?: ModelIDInput | null,
  prodStageID?: ModelIDInput | null,
  aiServerSnapshotReferenceID?: ModelIDInput | null,
  and?: Array< ModelApplicationConditionInput | null > | null,
  or?: Array< ModelApplicationConditionInput | null > | null,
  not?: ModelApplicationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Application = {
  __typename: "Application",
  id: string,
  url: string,
  name: string,
  version: string,
  devStageID?: string | null,
  DEV?: ApplicationStage | null,
  stagingStageID?: string | null,
  STAGING?: ApplicationStage | null,
  prodStageID?: string | null,
  PROD?: ApplicationStage | null,
  aiServerSnapshotReferenceID: string,
  aiServerSnapshotReference?: ApplicationAiServerSnapshotReference | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateApplicationInput = {
  id: string,
  url?: string | null,
  name?: string | null,
  version?: string | null,
  devStageID?: string | null,
  stagingStageID?: string | null,
  prodStageID?: string | null,
  aiServerSnapshotReferenceID?: string | null,
};

export type DeleteApplicationInput = {
  id: string,
};

export type CreateBackendEndpointAiApiToolInput = {
  id?: string | null,
  aiApiToolId: string,
  backendEndpointId: string,
};

export type ModelBackendEndpointAiApiToolConditionInput = {
  aiApiToolId?: ModelIDInput | null,
  backendEndpointId?: ModelIDInput | null,
  and?: Array< ModelBackendEndpointAiApiToolConditionInput | null > | null,
  or?: Array< ModelBackendEndpointAiApiToolConditionInput | null > | null,
  not?: ModelBackendEndpointAiApiToolConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBackendEndpointAiApiToolInput = {
  id: string,
  aiApiToolId?: string | null,
  backendEndpointId?: string | null,
};

export type DeleteBackendEndpointAiApiToolInput = {
  id: string,
};

export type CreateAiApiToolAiToolGroupInput = {
  id?: string | null,
  aiApiToolId: string,
  aiToolGroupId: string,
};

export type ModelAiApiToolAiToolGroupConditionInput = {
  aiApiToolId?: ModelIDInput | null,
  aiToolGroupId?: ModelIDInput | null,
  and?: Array< ModelAiApiToolAiToolGroupConditionInput | null > | null,
  or?: Array< ModelAiApiToolAiToolGroupConditionInput | null > | null,
  not?: ModelAiApiToolAiToolGroupConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAiApiToolAiToolGroupInput = {
  id: string,
  aiApiToolId?: string | null,
  aiToolGroupId?: string | null,
};

export type DeleteAiApiToolAiToolGroupInput = {
  id: string,
};

export type CreateFrontendComponentAiRenderToolInput = {
  id?: string | null,
  aiRenderToolId: string,
  frontendComponentId: string,
};

export type ModelFrontendComponentAiRenderToolConditionInput = {
  aiRenderToolId?: ModelIDInput | null,
  frontendComponentId?: ModelIDInput | null,
  and?: Array< ModelFrontendComponentAiRenderToolConditionInput | null > | null,
  or?: Array< ModelFrontendComponentAiRenderToolConditionInput | null > | null,
  not?: ModelFrontendComponentAiRenderToolConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateFrontendComponentAiRenderToolInput = {
  id: string,
  aiRenderToolId?: string | null,
  frontendComponentId?: string | null,
};

export type DeleteFrontendComponentAiRenderToolInput = {
  id: string,
};

export type CreateAiRenderToolAiToolGroupInput = {
  id?: string | null,
  aiRenderToolId: string,
  aiToolGroupId: string,
};

export type ModelAiRenderToolAiToolGroupConditionInput = {
  aiRenderToolId?: ModelIDInput | null,
  aiToolGroupId?: ModelIDInput | null,
  and?: Array< ModelAiRenderToolAiToolGroupConditionInput | null > | null,
  or?: Array< ModelAiRenderToolAiToolGroupConditionInput | null > | null,
  not?: ModelAiRenderToolAiToolGroupConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAiRenderToolAiToolGroupInput = {
  id: string,
  aiRenderToolId?: string | null,
  aiToolGroupId?: string | null,
};

export type DeleteAiRenderToolAiToolGroupInput = {
  id: string,
};

export type CreateAiToolGroupAiConfigurationInput = {
  id?: string | null,
  aiToolGroupId: string,
  aiConfigurationId: string,
};

export type ModelAiToolGroupAiConfigurationConditionInput = {
  aiToolGroupId?: ModelIDInput | null,
  aiConfigurationId?: ModelIDInput | null,
  and?: Array< ModelAiToolGroupAiConfigurationConditionInput | null > | null,
  or?: Array< ModelAiToolGroupAiConfigurationConditionInput | null > | null,
  not?: ModelAiToolGroupAiConfigurationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAiToolGroupAiConfigurationInput = {
  id: string,
  aiToolGroupId?: string | null,
  aiConfigurationId?: string | null,
};

export type DeleteAiToolGroupAiConfigurationInput = {
  id: string,
};

export type CreateAiProcessAiSettingsInput = {
  id?: string | null,
  aiProcessId: string,
  aiSettingsId: string,
};

export type ModelAiProcessAiSettingsConditionInput = {
  aiProcessId?: ModelIDInput | null,
  aiSettingsId?: ModelIDInput | null,
  and?: Array< ModelAiProcessAiSettingsConditionInput | null > | null,
  or?: Array< ModelAiProcessAiSettingsConditionInput | null > | null,
  not?: ModelAiProcessAiSettingsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateAiProcessAiSettingsInput = {
  id: string,
  aiProcessId?: string | null,
  aiSettingsId?: string | null,
};

export type DeleteAiProcessAiSettingsInput = {
  id: string,
};

export type CreateBackendQueueBackendSettingsInput = {
  id?: string | null,
  backendQueueId: string,
  backendSettingsId: string,
};

export type ModelBackendQueueBackendSettingsConditionInput = {
  backendQueueId?: ModelIDInput | null,
  backendSettingsId?: ModelIDInput | null,
  and?: Array< ModelBackendQueueBackendSettingsConditionInput | null > | null,
  or?: Array< ModelBackendQueueBackendSettingsConditionInput | null > | null,
  not?: ModelBackendQueueBackendSettingsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBackendQueueBackendSettingsInput = {
  id: string,
  backendQueueId?: string | null,
  backendSettingsId?: string | null,
};

export type DeleteBackendQueueBackendSettingsInput = {
  id: string,
};

export type CreateBackendTopicBackendSettingsInput = {
  id?: string | null,
  backendTopicId: string,
  backendSettingsId: string,
};

export type ModelBackendTopicBackendSettingsConditionInput = {
  backendTopicId?: ModelIDInput | null,
  backendSettingsId?: ModelIDInput | null,
  and?: Array< ModelBackendTopicBackendSettingsConditionInput | null > | null,
  or?: Array< ModelBackendTopicBackendSettingsConditionInput | null > | null,
  not?: ModelBackendTopicBackendSettingsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBackendTopicBackendSettingsInput = {
  id: string,
  backendTopicId?: string | null,
  backendSettingsId?: string | null,
};

export type DeleteBackendTopicBackendSettingsInput = {
  id: string,
};

export type CreateBackendDatabaseBackendSettingsInput = {
  id?: string | null,
  backendDatabaseId: string,
  backendSettingsId: string,
};

export type ModelBackendDatabaseBackendSettingsConditionInput = {
  backendDatabaseId?: ModelIDInput | null,
  backendSettingsId?: ModelIDInput | null,
  and?: Array< ModelBackendDatabaseBackendSettingsConditionInput | null > | null,
  or?: Array< ModelBackendDatabaseBackendSettingsConditionInput | null > | null,
  not?: ModelBackendDatabaseBackendSettingsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBackendDatabaseBackendSettingsInput = {
  id: string,
  backendDatabaseId?: string | null,
  backendSettingsId?: string | null,
};

export type DeleteBackendDatabaseBackendSettingsInput = {
  id: string,
};

export type CreateBackendEndpointBackendSettingsInput = {
  id?: string | null,
  backendEndpointId: string,
  backendSettingsId: string,
};

export type ModelBackendEndpointBackendSettingsConditionInput = {
  backendEndpointId?: ModelIDInput | null,
  backendSettingsId?: ModelIDInput | null,
  and?: Array< ModelBackendEndpointBackendSettingsConditionInput | null > | null,
  or?: Array< ModelBackendEndpointBackendSettingsConditionInput | null > | null,
  not?: ModelBackendEndpointBackendSettingsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateBackendEndpointBackendSettingsInput = {
  id: string,
  backendEndpointId?: string | null,
  backendSettingsId?: string | null,
};

export type DeleteBackendEndpointBackendSettingsInput = {
  id: string,
};

export type CreateFrontendComponentFrontendSettingsInput = {
  id?: string | null,
  frontendComponentId: string,
  frontendSettingsId: string,
};

export type ModelFrontendComponentFrontendSettingsConditionInput = {
  frontendComponentId?: ModelIDInput | null,
  frontendSettingsId?: ModelIDInput | null,
  and?: Array< ModelFrontendComponentFrontendSettingsConditionInput | null > | null,
  or?: Array< ModelFrontendComponentFrontendSettingsConditionInput | null > | null,
  not?: ModelFrontendComponentFrontendSettingsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateFrontendComponentFrontendSettingsInput = {
  id: string,
  frontendComponentId?: string | null,
  frontendSettingsId?: string | null,
};

export type DeleteFrontendComponentFrontendSettingsInput = {
  id: string,
};

export type ModelAiClientCompanyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  business?: ModelStringInput | null,
  values?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiClientCompanyFilterInput | null > | null,
  or?: Array< ModelAiClientCompanyFilterInput | null > | null,
  not?: ModelAiClientCompanyFilterInput | null,
};

export type ModelAiClientCompanyConnection = {
  __typename: "ModelAiClientCompanyConnection",
  items:  Array<AiClientCompany | null >,
  nextToken?: string | null,
};

export type ModelAiLlmFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  input?: ModelStringInput | null,
  output?: ModelStringInput | null,
  description?: ModelStringInput | null,
  available?: ModelBooleanInput | null,
  maxTokens?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiLlmFilterInput | null > | null,
  or?: Array< ModelAiLlmFilterInput | null > | null,
  not?: ModelAiLlmFilterInput | null,
};

export type ModelAiLlmConnection = {
  __typename: "ModelAiLlmConnection",
  items:  Array<AiLlm | null >,
  nextToken?: string | null,
};

export type ModelAiVectorialDbConfigFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  apiKey?: ModelStringInput | null,
  indexName?: ModelStringInput | null,
  nameSpace?: ModelStringInput | null,
  score?: ModelFloatInput | null,
  numberOfSimilarities?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiVectorialDbConfigFilterInput | null > | null,
  or?: Array< ModelAiVectorialDbConfigFilterInput | null > | null,
  not?: ModelAiVectorialDbConfigFilterInput | null,
};

export type ModelAiVectorialDbConfigConnection = {
  __typename: "ModelAiVectorialDbConfigConnection",
  items:  Array<AiVectorialDbConfig | null >,
  nextToken?: string | null,
};

export type ModelAiVectorizerParametersFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  aiLlmID?: ModelIDInput | null,
  chunkSize?: ModelFloatInput | null,
  chunkOverlap?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiVectorizerParametersFilterInput | null > | null,
  or?: Array< ModelAiVectorizerParametersFilterInput | null > | null,
  not?: ModelAiVectorizerParametersFilterInput | null,
};

export type ModelAiVectorizerParametersConnection = {
  __typename: "ModelAiVectorizerParametersConnection",
  items:  Array<AiVectorizerParameters | null >,
  nextToken?: string | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAiParametersFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  role?: ModelStringInput | null,
  companyID?: ModelIDInput | null,
  conversationPurpose?: ModelStringInput | null,
  conversationType?: ModelStringInput | null,
  prePrompt?: ModelStringInput | null,
  postPrompt?: ModelStringInput | null,
  llmID?: ModelIDInput | null,
  chatMemory?: ModelFloatInput | null,
  responseTemperature?: ModelFloatInput | null,
  responseLanguage?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiParametersFilterInput | null > | null,
  or?: Array< ModelAiParametersFilterInput | null > | null,
  not?: ModelAiParametersFilterInput | null,
};

export type ModelAiParametersConnection = {
  __typename: "ModelAiParametersConnection",
  items:  Array<AiParameters | null >,
  nextToken?: string | null,
};

export type ModelAiApiToolFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  func?: ModelStringInput | null,
  useCases?: ModelStringInput | null,
  description?: ModelStringInput | null,
  payload?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiApiToolFilterInput | null > | null,
  or?: Array< ModelAiApiToolFilterInput | null > | null,
  not?: ModelAiApiToolFilterInput | null,
};

export type ModelAiApiToolConnection = {
  __typename: "ModelAiApiToolConnection",
  items:  Array<AiApiTool | null >,
  nextToken?: string | null,
};

export type ModelAiRenderToolFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  func?: ModelStringInput | null,
  useCases?: ModelStringInput | null,
  description?: ModelStringInput | null,
  payload?: ModelStringInput | null,
  action?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiRenderToolFilterInput | null > | null,
  or?: Array< ModelAiRenderToolFilterInput | null > | null,
  not?: ModelAiRenderToolFilterInput | null,
};

export type ModelAiRenderToolConnection = {
  __typename: "ModelAiRenderToolConnection",
  items:  Array<AiRenderTool | null >,
  nextToken?: string | null,
};

export type ModelAiToolGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiToolGroupFilterInput | null > | null,
  or?: Array< ModelAiToolGroupFilterInput | null > | null,
  not?: ModelAiToolGroupFilterInput | null,
};

export type ModelAiToolGroupConnection = {
  __typename: "ModelAiToolGroupConnection",
  items:  Array<AiToolGroup | null >,
  nextToken?: string | null,
};

export type ModelAiConfigurationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  aiParametersID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiConfigurationFilterInput | null > | null,
  or?: Array< ModelAiConfigurationFilterInput | null > | null,
  not?: ModelAiConfigurationFilterInput | null,
};

export type ModelAiConfigurationConnection = {
  __typename: "ModelAiConfigurationConnection",
  items:  Array<AiConfiguration | null >,
  nextToken?: string | null,
};

export type ModelAiIndexationConfigurationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  vectorizerParametersID?: ModelIDInput | null,
  vectorialDbConfigID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiIndexationConfigurationFilterInput | null > | null,
  or?: Array< ModelAiIndexationConfigurationFilterInput | null > | null,
  not?: ModelAiIndexationConfigurationFilterInput | null,
};

export type ModelAiIndexationConfigurationConnection = {
  __typename: "ModelAiIndexationConfigurationConnection",
  items:  Array<AiIndexationConfiguration | null >,
  nextToken?: string | null,
};

export type ModelAiWebsocketFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiWebsocketFilterInput | null > | null,
  or?: Array< ModelAiWebsocketFilterInput | null > | null,
  not?: ModelAiWebsocketFilterInput | null,
};

export type ModelAiWebsocketConnection = {
  __typename: "ModelAiWebsocketConnection",
  items:  Array<AiWebsocket | null >,
  nextToken?: string | null,
};

export type ModelAiTaskTypesFilterInput = {
  id?: ModelIDInput | null,
  types?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiTaskTypesFilterInput | null > | null,
  or?: Array< ModelAiTaskTypesFilterInput | null > | null,
  not?: ModelAiTaskTypesFilterInput | null,
};

export type ModelAiTaskTypesConnection = {
  __typename: "ModelAiTaskTypesConnection",
  items:  Array<AiTaskTypes | null >,
  nextToken?: string | null,
};

export type ModelAiProcessFilterInput = {
  id?: ModelIDInput | null,
  tebeDeleted?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  taskTypeID?: ModelIDInput | null,
  aiConfigID?: ModelIDInput | null,
  communicationSourceType?: ModelcommunicationSourceTypeInput | null,
  frontedWebsocketCommunicationSourceID?: ModelIDInput | null,
  backendQueueCommunicationSourceID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiProcessFilterInput | null > | null,
  or?: Array< ModelAiProcessFilterInput | null > | null,
  not?: ModelAiProcessFilterInput | null,
};

export type ModelAiProcessConnection = {
  __typename: "ModelAiProcessConnection",
  items:  Array<AiProcess | null >,
  nextToken?: string | null,
};

export type ModelAiSettingsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  balancerUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiSettingsFilterInput | null > | null,
  or?: Array< ModelAiSettingsFilterInput | null > | null,
  not?: ModelAiSettingsFilterInput | null,
};

export type ModelAiSettingsConnection = {
  __typename: "ModelAiSettingsConnection",
  items:  Array<AiSettings | null >,
  nextToken?: string | null,
};

export type ModelBackendQueueFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBackendQueueFilterInput | null > | null,
  or?: Array< ModelBackendQueueFilterInput | null > | null,
  not?: ModelBackendQueueFilterInput | null,
};

export type ModelBackendQueueConnection = {
  __typename: "ModelBackendQueueConnection",
  items:  Array<BackendQueue | null >,
  nextToken?: string | null,
};

export type ModelBackendTopicFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  arn?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBackendTopicFilterInput | null > | null,
  or?: Array< ModelBackendTopicFilterInput | null > | null,
  not?: ModelBackendTopicFilterInput | null,
};

export type ModelBackendTopicConnection = {
  __typename: "ModelBackendTopicConnection",
  items:  Array<BackendTopic | null >,
  nextToken?: string | null,
};

export type ModelBackendDatabaseTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBackendDatabaseTypeFilterInput | null > | null,
  or?: Array< ModelBackendDatabaseTypeFilterInput | null > | null,
  not?: ModelBackendDatabaseTypeFilterInput | null,
};

export type ModelBackendDatabaseTypeConnection = {
  __typename: "ModelBackendDatabaseTypeConnection",
  items:  Array<BackendDatabaseType | null >,
  nextToken?: string | null,
};

export type ModelBackendDatabaseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  backendDatabaseTypeID?: ModelIDInput | null,
  reference?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBackendDatabaseFilterInput | null > | null,
  or?: Array< ModelBackendDatabaseFilterInput | null > | null,
  not?: ModelBackendDatabaseFilterInput | null,
};

export type ModelBackendDatabaseConnection = {
  __typename: "ModelBackendDatabaseConnection",
  items:  Array<BackendDatabase | null >,
  nextToken?: string | null,
};

export type ModelBackendEndpointMethodFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBackendEndpointMethodFilterInput | null > | null,
  or?: Array< ModelBackendEndpointMethodFilterInput | null > | null,
  not?: ModelBackendEndpointMethodFilterInput | null,
};

export type ModelBackendEndpointMethodConnection = {
  __typename: "ModelBackendEndpointMethodConnection",
  items:  Array<BackendEndpointMethod | null >,
  nextToken?: string | null,
};

export type ModelBackendEndpointFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  description?: ModelStringInput | null,
  methodID?: ModelIDInput | null,
  parametersWIP?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBackendEndpointFilterInput | null > | null,
  or?: Array< ModelBackendEndpointFilterInput | null > | null,
  not?: ModelBackendEndpointFilterInput | null,
};

export type ModelBackendEndpointConnection = {
  __typename: "ModelBackendEndpointConnection",
  items:  Array<BackendEndpoint | null >,
  nextToken?: string | null,
};

export type ModelBackendSettingsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  region?: ModelStringInput | null,
  secretName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBackendSettingsFilterInput | null > | null,
  or?: Array< ModelBackendSettingsFilterInput | null > | null,
  not?: ModelBackendSettingsFilterInput | null,
};

export type ModelBackendSettingsConnection = {
  __typename: "ModelBackendSettingsConnection",
  items:  Array<BackendSettings | null >,
  nextToken?: string | null,
};

export type ModelFrontendComponentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFrontendComponentFilterInput | null > | null,
  or?: Array< ModelFrontendComponentFilterInput | null > | null,
  not?: ModelFrontendComponentFilterInput | null,
};

export type ModelFrontendComponentConnection = {
  __typename: "ModelFrontendComponentConnection",
  items:  Array<FrontendComponent | null >,
  nextToken?: string | null,
};

export type ModelFrontendSettingsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  domain?: ModelStringInput | null,
  cssS3Url?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFrontendSettingsFilterInput | null > | null,
  or?: Array< ModelFrontendSettingsFilterInput | null > | null,
  not?: ModelFrontendSettingsFilterInput | null,
};

export type ModelFrontendSettingsConnection = {
  __typename: "ModelFrontendSettingsConnection",
  items:  Array<FrontendSettings | null >,
  nextToken?: string | null,
};

export type ModelApplicationStageCognitoUserPoolFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  userPoolId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelApplicationStageCognitoUserPoolFilterInput | null > | null,
  or?: Array< ModelApplicationStageCognitoUserPoolFilterInput | null > | null,
  not?: ModelApplicationStageCognitoUserPoolFilterInput | null,
};

export type ModelApplicationStageCognitoUserPoolConnection = {
  __typename: "ModelApplicationStageCognitoUserPoolConnection",
  items:  Array<ApplicationStageCognitoUserPool | null >,
  nextToken?: string | null,
};

export type ModelApplicationStageFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  aiSettingsID?: ModelIDInput | null,
  backendSettingsID?: ModelIDInput | null,
  frontendSettingsID?: ModelIDInput | null,
  cognitoUserPoolID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelApplicationStageFilterInput | null > | null,
  or?: Array< ModelApplicationStageFilterInput | null > | null,
  not?: ModelApplicationStageFilterInput | null,
};

export type ModelApplicationStageConnection = {
  __typename: "ModelApplicationStageConnection",
  items:  Array<ApplicationStage | null >,
  nextToken?: string | null,
};

export type ModelApplicationAiServerSnapshotReferenceFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelApplicationAiServerSnapshotReferenceFilterInput | null > | null,
  or?: Array< ModelApplicationAiServerSnapshotReferenceFilterInput | null > | null,
  not?: ModelApplicationAiServerSnapshotReferenceFilterInput | null,
};

export type ModelApplicationAiServerSnapshotReferenceConnection = {
  __typename: "ModelApplicationAiServerSnapshotReferenceConnection",
  items:  Array<ApplicationAiServerSnapshotReference | null >,
  nextToken?: string | null,
};

export type ModelApplicationFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  name?: ModelStringInput | null,
  version?: ModelStringInput | null,
  devStageID?: ModelIDInput | null,
  stagingStageID?: ModelIDInput | null,
  prodStageID?: ModelIDInput | null,
  aiServerSnapshotReferenceID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelApplicationFilterInput | null > | null,
  or?: Array< ModelApplicationFilterInput | null > | null,
  not?: ModelApplicationFilterInput | null,
};

export type ModelApplicationConnection = {
  __typename: "ModelApplicationConnection",
  items:  Array<Application | null >,
  nextToken?: string | null,
};

export type ModelBackendEndpointAiApiToolFilterInput = {
  id?: ModelIDInput | null,
  aiApiToolId?: ModelIDInput | null,
  backendEndpointId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBackendEndpointAiApiToolFilterInput | null > | null,
  or?: Array< ModelBackendEndpointAiApiToolFilterInput | null > | null,
  not?: ModelBackendEndpointAiApiToolFilterInput | null,
};

export type ModelAiApiToolAiToolGroupFilterInput = {
  id?: ModelIDInput | null,
  aiApiToolId?: ModelIDInput | null,
  aiToolGroupId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiApiToolAiToolGroupFilterInput | null > | null,
  or?: Array< ModelAiApiToolAiToolGroupFilterInput | null > | null,
  not?: ModelAiApiToolAiToolGroupFilterInput | null,
};

export type ModelFrontendComponentAiRenderToolFilterInput = {
  id?: ModelIDInput | null,
  aiRenderToolId?: ModelIDInput | null,
  frontendComponentId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFrontendComponentAiRenderToolFilterInput | null > | null,
  or?: Array< ModelFrontendComponentAiRenderToolFilterInput | null > | null,
  not?: ModelFrontendComponentAiRenderToolFilterInput | null,
};

export type ModelAiRenderToolAiToolGroupFilterInput = {
  id?: ModelIDInput | null,
  aiRenderToolId?: ModelIDInput | null,
  aiToolGroupId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiRenderToolAiToolGroupFilterInput | null > | null,
  or?: Array< ModelAiRenderToolAiToolGroupFilterInput | null > | null,
  not?: ModelAiRenderToolAiToolGroupFilterInput | null,
};

export type ModelAiToolGroupAiConfigurationFilterInput = {
  id?: ModelIDInput | null,
  aiToolGroupId?: ModelIDInput | null,
  aiConfigurationId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiToolGroupAiConfigurationFilterInput | null > | null,
  or?: Array< ModelAiToolGroupAiConfigurationFilterInput | null > | null,
  not?: ModelAiToolGroupAiConfigurationFilterInput | null,
};

export type ModelAiProcessAiSettingsFilterInput = {
  id?: ModelIDInput | null,
  aiProcessId?: ModelIDInput | null,
  aiSettingsId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAiProcessAiSettingsFilterInput | null > | null,
  or?: Array< ModelAiProcessAiSettingsFilterInput | null > | null,
  not?: ModelAiProcessAiSettingsFilterInput | null,
};

export type ModelBackendQueueBackendSettingsFilterInput = {
  id?: ModelIDInput | null,
  backendQueueId?: ModelIDInput | null,
  backendSettingsId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBackendQueueBackendSettingsFilterInput | null > | null,
  or?: Array< ModelBackendQueueBackendSettingsFilterInput | null > | null,
  not?: ModelBackendQueueBackendSettingsFilterInput | null,
};

export type ModelBackendTopicBackendSettingsFilterInput = {
  id?: ModelIDInput | null,
  backendTopicId?: ModelIDInput | null,
  backendSettingsId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBackendTopicBackendSettingsFilterInput | null > | null,
  or?: Array< ModelBackendTopicBackendSettingsFilterInput | null > | null,
  not?: ModelBackendTopicBackendSettingsFilterInput | null,
};

export type ModelBackendDatabaseBackendSettingsFilterInput = {
  id?: ModelIDInput | null,
  backendDatabaseId?: ModelIDInput | null,
  backendSettingsId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBackendDatabaseBackendSettingsFilterInput | null > | null,
  or?: Array< ModelBackendDatabaseBackendSettingsFilterInput | null > | null,
  not?: ModelBackendDatabaseBackendSettingsFilterInput | null,
};

export type ModelBackendEndpointBackendSettingsFilterInput = {
  id?: ModelIDInput | null,
  backendEndpointId?: ModelIDInput | null,
  backendSettingsId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBackendEndpointBackendSettingsFilterInput | null > | null,
  or?: Array< ModelBackendEndpointBackendSettingsFilterInput | null > | null,
  not?: ModelBackendEndpointBackendSettingsFilterInput | null,
};

export type ModelFrontendComponentFrontendSettingsFilterInput = {
  id?: ModelIDInput | null,
  frontendComponentId?: ModelIDInput | null,
  frontendSettingsId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFrontendComponentFrontendSettingsFilterInput | null > | null,
  or?: Array< ModelFrontendComponentFrontendSettingsFilterInput | null > | null,
  not?: ModelFrontendComponentFrontendSettingsFilterInput | null,
};

export type ModelSubscriptionAiClientCompanyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  business?: ModelSubscriptionStringInput | null,
  values?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiClientCompanyFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiClientCompanyFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionAiLlmFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  input?: ModelSubscriptionStringInput | null,
  output?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  available?: ModelSubscriptionBooleanInput | null,
  maxTokens?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiLlmFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiLlmFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionAiVectorialDbConfigFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  apiKey?: ModelSubscriptionStringInput | null,
  indexName?: ModelSubscriptionStringInput | null,
  nameSpace?: ModelSubscriptionStringInput | null,
  score?: ModelSubscriptionFloatInput | null,
  numberOfSimilarities?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiVectorialDbConfigFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiVectorialDbConfigFilterInput | null > | null,
};

export type ModelSubscriptionAiVectorizerParametersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  aiLlmID?: ModelSubscriptionIDInput | null,
  chunkSize?: ModelSubscriptionFloatInput | null,
  chunkOverlap?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiVectorizerParametersFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiVectorizerParametersFilterInput | null > | null,
};

export type ModelSubscriptionAiParametersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  companyID?: ModelSubscriptionIDInput | null,
  conversationPurpose?: ModelSubscriptionStringInput | null,
  conversationType?: ModelSubscriptionStringInput | null,
  prePrompt?: ModelSubscriptionStringInput | null,
  postPrompt?: ModelSubscriptionStringInput | null,
  llmID?: ModelSubscriptionIDInput | null,
  chatMemory?: ModelSubscriptionFloatInput | null,
  responseTemperature?: ModelSubscriptionFloatInput | null,
  responseLanguage?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiParametersFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiParametersFilterInput | null > | null,
};

export type ModelSubscriptionAiApiToolFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  func?: ModelSubscriptionStringInput | null,
  useCases?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  payload?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiApiToolFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiApiToolFilterInput | null > | null,
};

export type ModelSubscriptionAiRenderToolFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  func?: ModelSubscriptionStringInput | null,
  useCases?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  payload?: ModelSubscriptionStringInput | null,
  action?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiRenderToolFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiRenderToolFilterInput | null > | null,
};

export type ModelSubscriptionAiToolGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiToolGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiToolGroupFilterInput | null > | null,
};

export type ModelSubscriptionAiConfigurationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  aiParametersID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiConfigurationFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiConfigurationFilterInput | null > | null,
};

export type ModelSubscriptionAiIndexationConfigurationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  vectorizerParametersID?: ModelSubscriptionIDInput | null,
  vectorialDbConfigID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiIndexationConfigurationFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiIndexationConfigurationFilterInput | null > | null,
};

export type ModelSubscriptionAiWebsocketFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiWebsocketFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiWebsocketFilterInput | null > | null,
};

export type ModelSubscriptionAiTaskTypesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  types?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiTaskTypesFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiTaskTypesFilterInput | null > | null,
};

export type ModelSubscriptionAiProcessFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  tebeDeleted?: ModelSubscriptionBooleanInput | null,
  name?: ModelSubscriptionStringInput | null,
  taskTypeID?: ModelSubscriptionIDInput | null,
  aiConfigID?: ModelSubscriptionIDInput | null,
  communicationSourceType?: ModelSubscriptionStringInput | null,
  frontedWebsocketCommunicationSourceID?: ModelSubscriptionIDInput | null,
  backendQueueCommunicationSourceID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiProcessFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiProcessFilterInput | null > | null,
};

export type ModelSubscriptionAiSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  balancerUrl?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiSettingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiSettingsFilterInput | null > | null,
};

export type ModelSubscriptionBackendQueueFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBackendQueueFilterInput | null > | null,
  or?: Array< ModelSubscriptionBackendQueueFilterInput | null > | null,
};

export type ModelSubscriptionBackendTopicFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  arn?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBackendTopicFilterInput | null > | null,
  or?: Array< ModelSubscriptionBackendTopicFilterInput | null > | null,
};

export type ModelSubscriptionBackendDatabaseTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBackendDatabaseTypeFilterInput | null > | null,
  or?: Array< ModelSubscriptionBackendDatabaseTypeFilterInput | null > | null,
};

export type ModelSubscriptionBackendDatabaseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  backendDatabaseTypeID?: ModelSubscriptionIDInput | null,
  reference?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBackendDatabaseFilterInput | null > | null,
  or?: Array< ModelSubscriptionBackendDatabaseFilterInput | null > | null,
};

export type ModelSubscriptionBackendEndpointMethodFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBackendEndpointMethodFilterInput | null > | null,
  or?: Array< ModelSubscriptionBackendEndpointMethodFilterInput | null > | null,
};

export type ModelSubscriptionBackendEndpointFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  methodID?: ModelSubscriptionIDInput | null,
  parametersWIP?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBackendEndpointFilterInput | null > | null,
  or?: Array< ModelSubscriptionBackendEndpointFilterInput | null > | null,
};

export type ModelSubscriptionBackendSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  region?: ModelSubscriptionStringInput | null,
  secretName?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBackendSettingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionBackendSettingsFilterInput | null > | null,
};

export type ModelSubscriptionFrontendComponentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFrontendComponentFilterInput | null > | null,
  or?: Array< ModelSubscriptionFrontendComponentFilterInput | null > | null,
};

export type ModelSubscriptionFrontendSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  domain?: ModelSubscriptionStringInput | null,
  cssS3Url?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFrontendSettingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionFrontendSettingsFilterInput | null > | null,
};

export type ModelSubscriptionApplicationStageCognitoUserPoolFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  userPoolId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionApplicationStageCognitoUserPoolFilterInput | null > | null,
  or?: Array< ModelSubscriptionApplicationStageCognitoUserPoolFilterInput | null > | null,
};

export type ModelSubscriptionApplicationStageFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  aiSettingsID?: ModelSubscriptionIDInput | null,
  backendSettingsID?: ModelSubscriptionIDInput | null,
  frontendSettingsID?: ModelSubscriptionIDInput | null,
  cognitoUserPoolID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionApplicationStageFilterInput | null > | null,
  or?: Array< ModelSubscriptionApplicationStageFilterInput | null > | null,
};

export type ModelSubscriptionApplicationAiServerSnapshotReferenceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionApplicationAiServerSnapshotReferenceFilterInput | null > | null,
  or?: Array< ModelSubscriptionApplicationAiServerSnapshotReferenceFilterInput | null > | null,
};

export type ModelSubscriptionApplicationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  url?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  version?: ModelSubscriptionStringInput | null,
  devStageID?: ModelSubscriptionIDInput | null,
  stagingStageID?: ModelSubscriptionIDInput | null,
  prodStageID?: ModelSubscriptionIDInput | null,
  aiServerSnapshotReferenceID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionApplicationFilterInput | null > | null,
  or?: Array< ModelSubscriptionApplicationFilterInput | null > | null,
};

export type ModelSubscriptionBackendEndpointAiApiToolFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  aiApiToolId?: ModelSubscriptionIDInput | null,
  backendEndpointId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBackendEndpointAiApiToolFilterInput | null > | null,
  or?: Array< ModelSubscriptionBackendEndpointAiApiToolFilterInput | null > | null,
};

export type ModelSubscriptionAiApiToolAiToolGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  aiApiToolId?: ModelSubscriptionIDInput | null,
  aiToolGroupId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiApiToolAiToolGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiApiToolAiToolGroupFilterInput | null > | null,
};

export type ModelSubscriptionFrontendComponentAiRenderToolFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  aiRenderToolId?: ModelSubscriptionIDInput | null,
  frontendComponentId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFrontendComponentAiRenderToolFilterInput | null > | null,
  or?: Array< ModelSubscriptionFrontendComponentAiRenderToolFilterInput | null > | null,
};

export type ModelSubscriptionAiRenderToolAiToolGroupFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  aiRenderToolId?: ModelSubscriptionIDInput | null,
  aiToolGroupId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiRenderToolAiToolGroupFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiRenderToolAiToolGroupFilterInput | null > | null,
};

export type ModelSubscriptionAiToolGroupAiConfigurationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  aiToolGroupId?: ModelSubscriptionIDInput | null,
  aiConfigurationId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiToolGroupAiConfigurationFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiToolGroupAiConfigurationFilterInput | null > | null,
};

export type ModelSubscriptionAiProcessAiSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  aiProcessId?: ModelSubscriptionIDInput | null,
  aiSettingsId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAiProcessAiSettingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionAiProcessAiSettingsFilterInput | null > | null,
};

export type ModelSubscriptionBackendQueueBackendSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  backendQueueId?: ModelSubscriptionIDInput | null,
  backendSettingsId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBackendQueueBackendSettingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionBackendQueueBackendSettingsFilterInput | null > | null,
};

export type ModelSubscriptionBackendTopicBackendSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  backendTopicId?: ModelSubscriptionIDInput | null,
  backendSettingsId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBackendTopicBackendSettingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionBackendTopicBackendSettingsFilterInput | null > | null,
};

export type ModelSubscriptionBackendDatabaseBackendSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  backendDatabaseId?: ModelSubscriptionIDInput | null,
  backendSettingsId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBackendDatabaseBackendSettingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionBackendDatabaseBackendSettingsFilterInput | null > | null,
};

export type ModelSubscriptionBackendEndpointBackendSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  backendEndpointId?: ModelSubscriptionIDInput | null,
  backendSettingsId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBackendEndpointBackendSettingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionBackendEndpointBackendSettingsFilterInput | null > | null,
};

export type ModelSubscriptionFrontendComponentFrontendSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  frontendComponentId?: ModelSubscriptionIDInput | null,
  frontendSettingsId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFrontendComponentFrontendSettingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionFrontendComponentFrontendSettingsFilterInput | null > | null,
};

export type CreateAiClientCompanyMutationVariables = {
  input: CreateAiClientCompanyInput,
  condition?: ModelAiClientCompanyConditionInput | null,
};

export type CreateAiClientCompanyMutation = {
  createAiClientCompany?:  {
    __typename: "AiClientCompany",
    id: string,
    name: string,
    business: string,
    values: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiClientCompanyMutationVariables = {
  input: UpdateAiClientCompanyInput,
  condition?: ModelAiClientCompanyConditionInput | null,
};

export type UpdateAiClientCompanyMutation = {
  updateAiClientCompany?:  {
    __typename: "AiClientCompany",
    id: string,
    name: string,
    business: string,
    values: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiClientCompanyMutationVariables = {
  input: DeleteAiClientCompanyInput,
  condition?: ModelAiClientCompanyConditionInput | null,
};

export type DeleteAiClientCompanyMutation = {
  deleteAiClientCompany?:  {
    __typename: "AiClientCompany",
    id: string,
    name: string,
    business: string,
    values: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiLlmMutationVariables = {
  input: CreateAiLlmInput,
  condition?: ModelAiLlmConditionInput | null,
};

export type CreateAiLlmMutation = {
  createAiLlm?:  {
    __typename: "AiLlm",
    id: string,
    name: string,
    input: Array< string >,
    output: Array< string >,
    description: string,
    available: boolean,
    maxTokens?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiLlmMutationVariables = {
  input: UpdateAiLlmInput,
  condition?: ModelAiLlmConditionInput | null,
};

export type UpdateAiLlmMutation = {
  updateAiLlm?:  {
    __typename: "AiLlm",
    id: string,
    name: string,
    input: Array< string >,
    output: Array< string >,
    description: string,
    available: boolean,
    maxTokens?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiLlmMutationVariables = {
  input: DeleteAiLlmInput,
  condition?: ModelAiLlmConditionInput | null,
};

export type DeleteAiLlmMutation = {
  deleteAiLlm?:  {
    __typename: "AiLlm",
    id: string,
    name: string,
    input: Array< string >,
    output: Array< string >,
    description: string,
    available: boolean,
    maxTokens?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiVectorialDbConfigMutationVariables = {
  input: CreateAiVectorialDbConfigInput,
  condition?: ModelAiVectorialDbConfigConditionInput | null,
};

export type CreateAiVectorialDbConfigMutation = {
  createAiVectorialDbConfig?:  {
    __typename: "AiVectorialDbConfig",
    id: string,
    name: string,
    apiKey: string,
    indexName: string,
    nameSpace: string,
    score: number,
    numberOfSimilarities: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiVectorialDbConfigMutationVariables = {
  input: UpdateAiVectorialDbConfigInput,
  condition?: ModelAiVectorialDbConfigConditionInput | null,
};

export type UpdateAiVectorialDbConfigMutation = {
  updateAiVectorialDbConfig?:  {
    __typename: "AiVectorialDbConfig",
    id: string,
    name: string,
    apiKey: string,
    indexName: string,
    nameSpace: string,
    score: number,
    numberOfSimilarities: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiVectorialDbConfigMutationVariables = {
  input: DeleteAiVectorialDbConfigInput,
  condition?: ModelAiVectorialDbConfigConditionInput | null,
};

export type DeleteAiVectorialDbConfigMutation = {
  deleteAiVectorialDbConfig?:  {
    __typename: "AiVectorialDbConfig",
    id: string,
    name: string,
    apiKey: string,
    indexName: string,
    nameSpace: string,
    score: number,
    numberOfSimilarities: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiVectorizerParametersMutationVariables = {
  input: CreateAiVectorizerParametersInput,
  condition?: ModelAiVectorizerParametersConditionInput | null,
};

export type CreateAiVectorizerParametersMutation = {
  createAiVectorizerParameters?:  {
    __typename: "AiVectorizerParameters",
    id: string,
    name: string,
    aiLlmID: string,
    aiLlm?:  {
      __typename: "AiLlm",
      id: string,
      name: string,
      input: Array< string >,
      output: Array< string >,
      description: string,
      available: boolean,
      maxTokens?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chunkSize: number,
    chunkOverlap: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiVectorizerParametersMutationVariables = {
  input: UpdateAiVectorizerParametersInput,
  condition?: ModelAiVectorizerParametersConditionInput | null,
};

export type UpdateAiVectorizerParametersMutation = {
  updateAiVectorizerParameters?:  {
    __typename: "AiVectorizerParameters",
    id: string,
    name: string,
    aiLlmID: string,
    aiLlm?:  {
      __typename: "AiLlm",
      id: string,
      name: string,
      input: Array< string >,
      output: Array< string >,
      description: string,
      available: boolean,
      maxTokens?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chunkSize: number,
    chunkOverlap: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiVectorizerParametersMutationVariables = {
  input: DeleteAiVectorizerParametersInput,
  condition?: ModelAiVectorizerParametersConditionInput | null,
};

export type DeleteAiVectorizerParametersMutation = {
  deleteAiVectorizerParameters?:  {
    __typename: "AiVectorizerParameters",
    id: string,
    name: string,
    aiLlmID: string,
    aiLlm?:  {
      __typename: "AiLlm",
      id: string,
      name: string,
      input: Array< string >,
      output: Array< string >,
      description: string,
      available: boolean,
      maxTokens?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chunkSize: number,
    chunkOverlap: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiParametersMutationVariables = {
  input: CreateAiParametersInput,
  condition?: ModelAiParametersConditionInput | null,
};

export type CreateAiParametersMutation = {
  createAiParameters?:  {
    __typename: "AiParameters",
    id: string,
    name: string,
    role: string,
    companyID: string,
    company?:  {
      __typename: "AiClientCompany",
      id: string,
      name: string,
      business: string,
      values: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversationPurpose: string,
    conversationType: string,
    prePrompt: string,
    postPrompt: string,
    llmID: string,
    llm?:  {
      __typename: "AiLlm",
      id: string,
      name: string,
      input: Array< string >,
      output: Array< string >,
      description: string,
      available: boolean,
      maxTokens?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatMemory: number,
    responseTemperature: number,
    responseLanguage: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiParametersMutationVariables = {
  input: UpdateAiParametersInput,
  condition?: ModelAiParametersConditionInput | null,
};

export type UpdateAiParametersMutation = {
  updateAiParameters?:  {
    __typename: "AiParameters",
    id: string,
    name: string,
    role: string,
    companyID: string,
    company?:  {
      __typename: "AiClientCompany",
      id: string,
      name: string,
      business: string,
      values: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversationPurpose: string,
    conversationType: string,
    prePrompt: string,
    postPrompt: string,
    llmID: string,
    llm?:  {
      __typename: "AiLlm",
      id: string,
      name: string,
      input: Array< string >,
      output: Array< string >,
      description: string,
      available: boolean,
      maxTokens?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatMemory: number,
    responseTemperature: number,
    responseLanguage: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiParametersMutationVariables = {
  input: DeleteAiParametersInput,
  condition?: ModelAiParametersConditionInput | null,
};

export type DeleteAiParametersMutation = {
  deleteAiParameters?:  {
    __typename: "AiParameters",
    id: string,
    name: string,
    role: string,
    companyID: string,
    company?:  {
      __typename: "AiClientCompany",
      id: string,
      name: string,
      business: string,
      values: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversationPurpose: string,
    conversationType: string,
    prePrompt: string,
    postPrompt: string,
    llmID: string,
    llm?:  {
      __typename: "AiLlm",
      id: string,
      name: string,
      input: Array< string >,
      output: Array< string >,
      description: string,
      available: boolean,
      maxTokens?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatMemory: number,
    responseTemperature: number,
    responseLanguage: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiApiToolMutationVariables = {
  input: CreateAiApiToolInput,
  condition?: ModelAiApiToolConditionInput | null,
};

export type CreateAiApiToolMutation = {
  createAiApiTool?:  {
    __typename: "AiApiTool",
    id: string,
    name: string,
    func: string,
    useCases: string,
    description: string,
    payload?: string | null,
    endpoint?:  {
      __typename: "ModelBackendEndpointAiApiToolConnection",
      items:  Array< {
        __typename: "BackendEndpointAiApiTool",
        id: string,
        aiApiToolId: string,
        backendEndpointId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiApiToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiApiToolAiToolGroup",
        id: string,
        aiApiToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiApiToolMutationVariables = {
  input: UpdateAiApiToolInput,
  condition?: ModelAiApiToolConditionInput | null,
};

export type UpdateAiApiToolMutation = {
  updateAiApiTool?:  {
    __typename: "AiApiTool",
    id: string,
    name: string,
    func: string,
    useCases: string,
    description: string,
    payload?: string | null,
    endpoint?:  {
      __typename: "ModelBackendEndpointAiApiToolConnection",
      items:  Array< {
        __typename: "BackendEndpointAiApiTool",
        id: string,
        aiApiToolId: string,
        backendEndpointId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiApiToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiApiToolAiToolGroup",
        id: string,
        aiApiToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiApiToolMutationVariables = {
  input: DeleteAiApiToolInput,
  condition?: ModelAiApiToolConditionInput | null,
};

export type DeleteAiApiToolMutation = {
  deleteAiApiTool?:  {
    __typename: "AiApiTool",
    id: string,
    name: string,
    func: string,
    useCases: string,
    description: string,
    payload?: string | null,
    endpoint?:  {
      __typename: "ModelBackendEndpointAiApiToolConnection",
      items:  Array< {
        __typename: "BackendEndpointAiApiTool",
        id: string,
        aiApiToolId: string,
        backendEndpointId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiApiToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiApiToolAiToolGroup",
        id: string,
        aiApiToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiRenderToolMutationVariables = {
  input: CreateAiRenderToolInput,
  condition?: ModelAiRenderToolConditionInput | null,
};

export type CreateAiRenderToolMutation = {
  createAiRenderTool?:  {
    __typename: "AiRenderTool",
    id: string,
    name: string,
    func: string,
    useCases: string,
    description: string,
    payload?: string | null,
    action: string,
    component?:  {
      __typename: "ModelFrontendComponentAiRenderToolConnection",
      items:  Array< {
        __typename: "FrontendComponentAiRenderTool",
        id: string,
        aiRenderToolId: string,
        frontendComponentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiRenderToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiRenderToolAiToolGroup",
        id: string,
        aiRenderToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiRenderToolMutationVariables = {
  input: UpdateAiRenderToolInput,
  condition?: ModelAiRenderToolConditionInput | null,
};

export type UpdateAiRenderToolMutation = {
  updateAiRenderTool?:  {
    __typename: "AiRenderTool",
    id: string,
    name: string,
    func: string,
    useCases: string,
    description: string,
    payload?: string | null,
    action: string,
    component?:  {
      __typename: "ModelFrontendComponentAiRenderToolConnection",
      items:  Array< {
        __typename: "FrontendComponentAiRenderTool",
        id: string,
        aiRenderToolId: string,
        frontendComponentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiRenderToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiRenderToolAiToolGroup",
        id: string,
        aiRenderToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiRenderToolMutationVariables = {
  input: DeleteAiRenderToolInput,
  condition?: ModelAiRenderToolConditionInput | null,
};

export type DeleteAiRenderToolMutation = {
  deleteAiRenderTool?:  {
    __typename: "AiRenderTool",
    id: string,
    name: string,
    func: string,
    useCases: string,
    description: string,
    payload?: string | null,
    action: string,
    component?:  {
      __typename: "ModelFrontendComponentAiRenderToolConnection",
      items:  Array< {
        __typename: "FrontendComponentAiRenderTool",
        id: string,
        aiRenderToolId: string,
        frontendComponentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiRenderToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiRenderToolAiToolGroup",
        id: string,
        aiRenderToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiToolGroupMutationVariables = {
  input: CreateAiToolGroupInput,
  condition?: ModelAiToolGroupConditionInput | null,
};

export type CreateAiToolGroupMutation = {
  createAiToolGroup?:  {
    __typename: "AiToolGroup",
    id: string,
    name: string,
    apiTools?:  {
      __typename: "ModelAiApiToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiApiToolAiToolGroup",
        id: string,
        aiApiToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    renderTools?:  {
      __typename: "ModelAiRenderToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiRenderToolAiToolGroup",
        id: string,
        aiRenderToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiToolGroupAiConfigurationConnection",
      items:  Array< {
        __typename: "AiToolGroupAiConfiguration",
        id: string,
        aiToolGroupId: string,
        aiConfigurationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiToolGroupMutationVariables = {
  input: UpdateAiToolGroupInput,
  condition?: ModelAiToolGroupConditionInput | null,
};

export type UpdateAiToolGroupMutation = {
  updateAiToolGroup?:  {
    __typename: "AiToolGroup",
    id: string,
    name: string,
    apiTools?:  {
      __typename: "ModelAiApiToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiApiToolAiToolGroup",
        id: string,
        aiApiToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    renderTools?:  {
      __typename: "ModelAiRenderToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiRenderToolAiToolGroup",
        id: string,
        aiRenderToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiToolGroupAiConfigurationConnection",
      items:  Array< {
        __typename: "AiToolGroupAiConfiguration",
        id: string,
        aiToolGroupId: string,
        aiConfigurationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiToolGroupMutationVariables = {
  input: DeleteAiToolGroupInput,
  condition?: ModelAiToolGroupConditionInput | null,
};

export type DeleteAiToolGroupMutation = {
  deleteAiToolGroup?:  {
    __typename: "AiToolGroup",
    id: string,
    name: string,
    apiTools?:  {
      __typename: "ModelAiApiToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiApiToolAiToolGroup",
        id: string,
        aiApiToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    renderTools?:  {
      __typename: "ModelAiRenderToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiRenderToolAiToolGroup",
        id: string,
        aiRenderToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiToolGroupAiConfigurationConnection",
      items:  Array< {
        __typename: "AiToolGroupAiConfiguration",
        id: string,
        aiToolGroupId: string,
        aiConfigurationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiConfigurationMutationVariables = {
  input: CreateAiConfigurationInput,
  condition?: ModelAiConfigurationConditionInput | null,
};

export type CreateAiConfigurationMutation = {
  createAiConfiguration?:  {
    __typename: "AiConfiguration",
    id: string,
    name: string,
    aiParametersID: string,
    aiParameters?:  {
      __typename: "AiParameters",
      id: string,
      name: string,
      role: string,
      companyID: string,
      company?:  {
        __typename: "AiClientCompany",
        id: string,
        name: string,
        business: string,
        values: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversationPurpose: string,
      conversationType: string,
      prePrompt: string,
      postPrompt: string,
      llmID: string,
      llm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatMemory: number,
      responseTemperature: number,
      responseLanguage: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tools?:  {
      __typename: "ModelAiToolGroupAiConfigurationConnection",
      items:  Array< {
        __typename: "AiToolGroupAiConfiguration",
        id: string,
        aiToolGroupId: string,
        aiConfigurationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiConfigurationMutationVariables = {
  input: UpdateAiConfigurationInput,
  condition?: ModelAiConfigurationConditionInput | null,
};

export type UpdateAiConfigurationMutation = {
  updateAiConfiguration?:  {
    __typename: "AiConfiguration",
    id: string,
    name: string,
    aiParametersID: string,
    aiParameters?:  {
      __typename: "AiParameters",
      id: string,
      name: string,
      role: string,
      companyID: string,
      company?:  {
        __typename: "AiClientCompany",
        id: string,
        name: string,
        business: string,
        values: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversationPurpose: string,
      conversationType: string,
      prePrompt: string,
      postPrompt: string,
      llmID: string,
      llm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatMemory: number,
      responseTemperature: number,
      responseLanguage: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tools?:  {
      __typename: "ModelAiToolGroupAiConfigurationConnection",
      items:  Array< {
        __typename: "AiToolGroupAiConfiguration",
        id: string,
        aiToolGroupId: string,
        aiConfigurationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiConfigurationMutationVariables = {
  input: DeleteAiConfigurationInput,
  condition?: ModelAiConfigurationConditionInput | null,
};

export type DeleteAiConfigurationMutation = {
  deleteAiConfiguration?:  {
    __typename: "AiConfiguration",
    id: string,
    name: string,
    aiParametersID: string,
    aiParameters?:  {
      __typename: "AiParameters",
      id: string,
      name: string,
      role: string,
      companyID: string,
      company?:  {
        __typename: "AiClientCompany",
        id: string,
        name: string,
        business: string,
        values: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversationPurpose: string,
      conversationType: string,
      prePrompt: string,
      postPrompt: string,
      llmID: string,
      llm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatMemory: number,
      responseTemperature: number,
      responseLanguage: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tools?:  {
      __typename: "ModelAiToolGroupAiConfigurationConnection",
      items:  Array< {
        __typename: "AiToolGroupAiConfiguration",
        id: string,
        aiToolGroupId: string,
        aiConfigurationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiIndexationConfigurationMutationVariables = {
  input: CreateAiIndexationConfigurationInput,
  condition?: ModelAiIndexationConfigurationConditionInput | null,
};

export type CreateAiIndexationConfigurationMutation = {
  createAiIndexationConfiguration?:  {
    __typename: "AiIndexationConfiguration",
    id: string,
    name: string,
    vectorizerParametersID: string,
    vectorizerParameters?:  {
      __typename: "AiVectorizerParameters",
      id: string,
      name: string,
      aiLlmID: string,
      aiLlm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chunkSize: number,
      chunkOverlap: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    vectorialDbConfigID: string,
    vectorialDbConfig?:  {
      __typename: "AiVectorialDbConfig",
      id: string,
      name: string,
      apiKey: string,
      indexName: string,
      nameSpace: string,
      score: number,
      numberOfSimilarities: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiIndexationConfigurationMutationVariables = {
  input: UpdateAiIndexationConfigurationInput,
  condition?: ModelAiIndexationConfigurationConditionInput | null,
};

export type UpdateAiIndexationConfigurationMutation = {
  updateAiIndexationConfiguration?:  {
    __typename: "AiIndexationConfiguration",
    id: string,
    name: string,
    vectorizerParametersID: string,
    vectorizerParameters?:  {
      __typename: "AiVectorizerParameters",
      id: string,
      name: string,
      aiLlmID: string,
      aiLlm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chunkSize: number,
      chunkOverlap: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    vectorialDbConfigID: string,
    vectorialDbConfig?:  {
      __typename: "AiVectorialDbConfig",
      id: string,
      name: string,
      apiKey: string,
      indexName: string,
      nameSpace: string,
      score: number,
      numberOfSimilarities: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiIndexationConfigurationMutationVariables = {
  input: DeleteAiIndexationConfigurationInput,
  condition?: ModelAiIndexationConfigurationConditionInput | null,
};

export type DeleteAiIndexationConfigurationMutation = {
  deleteAiIndexationConfiguration?:  {
    __typename: "AiIndexationConfiguration",
    id: string,
    name: string,
    vectorizerParametersID: string,
    vectorizerParameters?:  {
      __typename: "AiVectorizerParameters",
      id: string,
      name: string,
      aiLlmID: string,
      aiLlm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chunkSize: number,
      chunkOverlap: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    vectorialDbConfigID: string,
    vectorialDbConfig?:  {
      __typename: "AiVectorialDbConfig",
      id: string,
      name: string,
      apiKey: string,
      indexName: string,
      nameSpace: string,
      score: number,
      numberOfSimilarities: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiWebsocketMutationVariables = {
  input: CreateAiWebsocketInput,
  condition?: ModelAiWebsocketConditionInput | null,
};

export type CreateAiWebsocketMutation = {
  createAiWebsocket?:  {
    __typename: "AiWebsocket",
    id: string,
    name: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiWebsocketMutationVariables = {
  input: UpdateAiWebsocketInput,
  condition?: ModelAiWebsocketConditionInput | null,
};

export type UpdateAiWebsocketMutation = {
  updateAiWebsocket?:  {
    __typename: "AiWebsocket",
    id: string,
    name: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiWebsocketMutationVariables = {
  input: DeleteAiWebsocketInput,
  condition?: ModelAiWebsocketConditionInput | null,
};

export type DeleteAiWebsocketMutation = {
  deleteAiWebsocket?:  {
    __typename: "AiWebsocket",
    id: string,
    name: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiTaskTypesMutationVariables = {
  input: CreateAiTaskTypesInput,
  condition?: ModelAiTaskTypesConditionInput | null,
};

export type CreateAiTaskTypesMutation = {
  createAiTaskTypes?:  {
    __typename: "AiTaskTypes",
    id: string,
    types: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiTaskTypesMutationVariables = {
  input: UpdateAiTaskTypesInput,
  condition?: ModelAiTaskTypesConditionInput | null,
};

export type UpdateAiTaskTypesMutation = {
  updateAiTaskTypes?:  {
    __typename: "AiTaskTypes",
    id: string,
    types: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiTaskTypesMutationVariables = {
  input: DeleteAiTaskTypesInput,
  condition?: ModelAiTaskTypesConditionInput | null,
};

export type DeleteAiTaskTypesMutation = {
  deleteAiTaskTypes?:  {
    __typename: "AiTaskTypes",
    id: string,
    types: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiProcessMutationVariables = {
  input: CreateAiProcessInput,
  condition?: ModelAiProcessConditionInput | null,
};

export type CreateAiProcessMutation = {
  createAiProcess?:  {
    __typename: "AiProcess",
    id: string,
    tebeDeleted: boolean,
    name: string,
    taskTypeID: string,
    taskType?:  {
      __typename: "AiTaskTypes",
      id: string,
      types: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    aiConfigID: string,
    aiConfig?:  {
      __typename: "AiConfiguration",
      id: string,
      name: string,
      aiParametersID: string,
      aiParameters?:  {
        __typename: "AiParameters",
        id: string,
        name: string,
        role: string,
        companyID: string,
        conversationPurpose: string,
        conversationType: string,
        prePrompt: string,
        postPrompt: string,
        llmID: string,
        chatMemory: number,
        responseTemperature: number,
        responseLanguage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tools?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    usedIn?:  {
      __typename: "ModelAiProcessAiSettingsConnection",
      items:  Array< {
        __typename: "AiProcessAiSettings",
        id: string,
        aiProcessId: string,
        aiSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    communicationSourceType: communicationSourceType,
    frontedWebsocketCommunicationSourceID?: string | null,
    frontedWebsocketCommunicationSource?:  {
      __typename: "AiWebsocket",
      id: string,
      name: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    backendQueueCommunicationSourceID?: string | null,
    backendQueueCommunicationSource?:  {
      __typename: "BackendQueue",
      id: string,
      name: string,
      url: string,
      usedIn?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiProcessMutationVariables = {
  input: UpdateAiProcessInput,
  condition?: ModelAiProcessConditionInput | null,
};

export type UpdateAiProcessMutation = {
  updateAiProcess?:  {
    __typename: "AiProcess",
    id: string,
    tebeDeleted: boolean,
    name: string,
    taskTypeID: string,
    taskType?:  {
      __typename: "AiTaskTypes",
      id: string,
      types: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    aiConfigID: string,
    aiConfig?:  {
      __typename: "AiConfiguration",
      id: string,
      name: string,
      aiParametersID: string,
      aiParameters?:  {
        __typename: "AiParameters",
        id: string,
        name: string,
        role: string,
        companyID: string,
        conversationPurpose: string,
        conversationType: string,
        prePrompt: string,
        postPrompt: string,
        llmID: string,
        chatMemory: number,
        responseTemperature: number,
        responseLanguage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tools?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    usedIn?:  {
      __typename: "ModelAiProcessAiSettingsConnection",
      items:  Array< {
        __typename: "AiProcessAiSettings",
        id: string,
        aiProcessId: string,
        aiSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    communicationSourceType: communicationSourceType,
    frontedWebsocketCommunicationSourceID?: string | null,
    frontedWebsocketCommunicationSource?:  {
      __typename: "AiWebsocket",
      id: string,
      name: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    backendQueueCommunicationSourceID?: string | null,
    backendQueueCommunicationSource?:  {
      __typename: "BackendQueue",
      id: string,
      name: string,
      url: string,
      usedIn?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiProcessMutationVariables = {
  input: DeleteAiProcessInput,
  condition?: ModelAiProcessConditionInput | null,
};

export type DeleteAiProcessMutation = {
  deleteAiProcess?:  {
    __typename: "AiProcess",
    id: string,
    tebeDeleted: boolean,
    name: string,
    taskTypeID: string,
    taskType?:  {
      __typename: "AiTaskTypes",
      id: string,
      types: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    aiConfigID: string,
    aiConfig?:  {
      __typename: "AiConfiguration",
      id: string,
      name: string,
      aiParametersID: string,
      aiParameters?:  {
        __typename: "AiParameters",
        id: string,
        name: string,
        role: string,
        companyID: string,
        conversationPurpose: string,
        conversationType: string,
        prePrompt: string,
        postPrompt: string,
        llmID: string,
        chatMemory: number,
        responseTemperature: number,
        responseLanguage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tools?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    usedIn?:  {
      __typename: "ModelAiProcessAiSettingsConnection",
      items:  Array< {
        __typename: "AiProcessAiSettings",
        id: string,
        aiProcessId: string,
        aiSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    communicationSourceType: communicationSourceType,
    frontedWebsocketCommunicationSourceID?: string | null,
    frontedWebsocketCommunicationSource?:  {
      __typename: "AiWebsocket",
      id: string,
      name: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    backendQueueCommunicationSourceID?: string | null,
    backendQueueCommunicationSource?:  {
      __typename: "BackendQueue",
      id: string,
      name: string,
      url: string,
      usedIn?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiSettingsMutationVariables = {
  input: CreateAiSettingsInput,
  condition?: ModelAiSettingsConditionInput | null,
};

export type CreateAiSettingsMutation = {
  createAiSettings?:  {
    __typename: "AiSettings",
    id: string,
    name: string,
    balancerUrl: string,
    processes?:  {
      __typename: "ModelAiProcessAiSettingsConnection",
      items:  Array< {
        __typename: "AiProcessAiSettings",
        id: string,
        aiProcessId: string,
        aiSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiSettingsMutationVariables = {
  input: UpdateAiSettingsInput,
  condition?: ModelAiSettingsConditionInput | null,
};

export type UpdateAiSettingsMutation = {
  updateAiSettings?:  {
    __typename: "AiSettings",
    id: string,
    name: string,
    balancerUrl: string,
    processes?:  {
      __typename: "ModelAiProcessAiSettingsConnection",
      items:  Array< {
        __typename: "AiProcessAiSettings",
        id: string,
        aiProcessId: string,
        aiSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiSettingsMutationVariables = {
  input: DeleteAiSettingsInput,
  condition?: ModelAiSettingsConditionInput | null,
};

export type DeleteAiSettingsMutation = {
  deleteAiSettings?:  {
    __typename: "AiSettings",
    id: string,
    name: string,
    balancerUrl: string,
    processes?:  {
      __typename: "ModelAiProcessAiSettingsConnection",
      items:  Array< {
        __typename: "AiProcessAiSettings",
        id: string,
        aiProcessId: string,
        aiSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBackendQueueMutationVariables = {
  input: CreateBackendQueueInput,
  condition?: ModelBackendQueueConditionInput | null,
};

export type CreateBackendQueueMutation = {
  createBackendQueue?:  {
    __typename: "BackendQueue",
    id: string,
    name: string,
    url: string,
    usedIn?:  {
      __typename: "ModelBackendQueueBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendQueueBackendSettings",
        id: string,
        backendQueueId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBackendQueueMutationVariables = {
  input: UpdateBackendQueueInput,
  condition?: ModelBackendQueueConditionInput | null,
};

export type UpdateBackendQueueMutation = {
  updateBackendQueue?:  {
    __typename: "BackendQueue",
    id: string,
    name: string,
    url: string,
    usedIn?:  {
      __typename: "ModelBackendQueueBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendQueueBackendSettings",
        id: string,
        backendQueueId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBackendQueueMutationVariables = {
  input: DeleteBackendQueueInput,
  condition?: ModelBackendQueueConditionInput | null,
};

export type DeleteBackendQueueMutation = {
  deleteBackendQueue?:  {
    __typename: "BackendQueue",
    id: string,
    name: string,
    url: string,
    usedIn?:  {
      __typename: "ModelBackendQueueBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendQueueBackendSettings",
        id: string,
        backendQueueId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBackendTopicMutationVariables = {
  input: CreateBackendTopicInput,
  condition?: ModelBackendTopicConditionInput | null,
};

export type CreateBackendTopicMutation = {
  createBackendTopic?:  {
    __typename: "BackendTopic",
    id: string,
    name: string,
    arn: string,
    usedIn?:  {
      __typename: "ModelBackendTopicBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendTopicBackendSettings",
        id: string,
        backendTopicId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBackendTopicMutationVariables = {
  input: UpdateBackendTopicInput,
  condition?: ModelBackendTopicConditionInput | null,
};

export type UpdateBackendTopicMutation = {
  updateBackendTopic?:  {
    __typename: "BackendTopic",
    id: string,
    name: string,
    arn: string,
    usedIn?:  {
      __typename: "ModelBackendTopicBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendTopicBackendSettings",
        id: string,
        backendTopicId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBackendTopicMutationVariables = {
  input: DeleteBackendTopicInput,
  condition?: ModelBackendTopicConditionInput | null,
};

export type DeleteBackendTopicMutation = {
  deleteBackendTopic?:  {
    __typename: "BackendTopic",
    id: string,
    name: string,
    arn: string,
    usedIn?:  {
      __typename: "ModelBackendTopicBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendTopicBackendSettings",
        id: string,
        backendTopicId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBackendDatabaseTypeMutationVariables = {
  input: CreateBackendDatabaseTypeInput,
  condition?: ModelBackendDatabaseTypeConditionInput | null,
};

export type CreateBackendDatabaseTypeMutation = {
  createBackendDatabaseType?:  {
    __typename: "BackendDatabaseType",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBackendDatabaseTypeMutationVariables = {
  input: UpdateBackendDatabaseTypeInput,
  condition?: ModelBackendDatabaseTypeConditionInput | null,
};

export type UpdateBackendDatabaseTypeMutation = {
  updateBackendDatabaseType?:  {
    __typename: "BackendDatabaseType",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBackendDatabaseTypeMutationVariables = {
  input: DeleteBackendDatabaseTypeInput,
  condition?: ModelBackendDatabaseTypeConditionInput | null,
};

export type DeleteBackendDatabaseTypeMutation = {
  deleteBackendDatabaseType?:  {
    __typename: "BackendDatabaseType",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBackendDatabaseMutationVariables = {
  input: CreateBackendDatabaseInput,
  condition?: ModelBackendDatabaseConditionInput | null,
};

export type CreateBackendDatabaseMutation = {
  createBackendDatabase?:  {
    __typename: "BackendDatabase",
    id: string,
    name: string,
    backendDatabaseTypeID: string,
    type?:  {
      __typename: "BackendDatabaseType",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    reference: string,
    usedIn?:  {
      __typename: "ModelBackendDatabaseBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendDatabaseBackendSettings",
        id: string,
        backendDatabaseId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBackendDatabaseMutationVariables = {
  input: UpdateBackendDatabaseInput,
  condition?: ModelBackendDatabaseConditionInput | null,
};

export type UpdateBackendDatabaseMutation = {
  updateBackendDatabase?:  {
    __typename: "BackendDatabase",
    id: string,
    name: string,
    backendDatabaseTypeID: string,
    type?:  {
      __typename: "BackendDatabaseType",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    reference: string,
    usedIn?:  {
      __typename: "ModelBackendDatabaseBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendDatabaseBackendSettings",
        id: string,
        backendDatabaseId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBackendDatabaseMutationVariables = {
  input: DeleteBackendDatabaseInput,
  condition?: ModelBackendDatabaseConditionInput | null,
};

export type DeleteBackendDatabaseMutation = {
  deleteBackendDatabase?:  {
    __typename: "BackendDatabase",
    id: string,
    name: string,
    backendDatabaseTypeID: string,
    type?:  {
      __typename: "BackendDatabaseType",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    reference: string,
    usedIn?:  {
      __typename: "ModelBackendDatabaseBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendDatabaseBackendSettings",
        id: string,
        backendDatabaseId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBackendEndpointMethodMutationVariables = {
  input: CreateBackendEndpointMethodInput,
  condition?: ModelBackendEndpointMethodConditionInput | null,
};

export type CreateBackendEndpointMethodMutation = {
  createBackendEndpointMethod?:  {
    __typename: "BackendEndpointMethod",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBackendEndpointMethodMutationVariables = {
  input: UpdateBackendEndpointMethodInput,
  condition?: ModelBackendEndpointMethodConditionInput | null,
};

export type UpdateBackendEndpointMethodMutation = {
  updateBackendEndpointMethod?:  {
    __typename: "BackendEndpointMethod",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBackendEndpointMethodMutationVariables = {
  input: DeleteBackendEndpointMethodInput,
  condition?: ModelBackendEndpointMethodConditionInput | null,
};

export type DeleteBackendEndpointMethodMutation = {
  deleteBackendEndpointMethod?:  {
    __typename: "BackendEndpointMethod",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBackendEndpointMutationVariables = {
  input: CreateBackendEndpointInput,
  condition?: ModelBackendEndpointConditionInput | null,
};

export type CreateBackendEndpointMutation = {
  createBackendEndpoint?:  {
    __typename: "BackendEndpoint",
    id: string,
    name: string,
    url: string,
    description: string,
    methodID?: string | null,
    method?:  {
      __typename: "BackendEndpointMethod",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parametersWIP?: string | null,
    usedInSettings?:  {
      __typename: "ModelBackendEndpointBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendEndpointBackendSettings",
        id: string,
        backendEndpointId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedInTool?:  {
      __typename: "ModelBackendEndpointAiApiToolConnection",
      items:  Array< {
        __typename: "BackendEndpointAiApiTool",
        id: string,
        aiApiToolId: string,
        backendEndpointId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBackendEndpointMutationVariables = {
  input: UpdateBackendEndpointInput,
  condition?: ModelBackendEndpointConditionInput | null,
};

export type UpdateBackendEndpointMutation = {
  updateBackendEndpoint?:  {
    __typename: "BackendEndpoint",
    id: string,
    name: string,
    url: string,
    description: string,
    methodID?: string | null,
    method?:  {
      __typename: "BackendEndpointMethod",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parametersWIP?: string | null,
    usedInSettings?:  {
      __typename: "ModelBackendEndpointBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendEndpointBackendSettings",
        id: string,
        backendEndpointId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedInTool?:  {
      __typename: "ModelBackendEndpointAiApiToolConnection",
      items:  Array< {
        __typename: "BackendEndpointAiApiTool",
        id: string,
        aiApiToolId: string,
        backendEndpointId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBackendEndpointMutationVariables = {
  input: DeleteBackendEndpointInput,
  condition?: ModelBackendEndpointConditionInput | null,
};

export type DeleteBackendEndpointMutation = {
  deleteBackendEndpoint?:  {
    __typename: "BackendEndpoint",
    id: string,
    name: string,
    url: string,
    description: string,
    methodID?: string | null,
    method?:  {
      __typename: "BackendEndpointMethod",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parametersWIP?: string | null,
    usedInSettings?:  {
      __typename: "ModelBackendEndpointBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendEndpointBackendSettings",
        id: string,
        backendEndpointId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedInTool?:  {
      __typename: "ModelBackendEndpointAiApiToolConnection",
      items:  Array< {
        __typename: "BackendEndpointAiApiTool",
        id: string,
        aiApiToolId: string,
        backendEndpointId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBackendSettingsMutationVariables = {
  input: CreateBackendSettingsInput,
  condition?: ModelBackendSettingsConditionInput | null,
};

export type CreateBackendSettingsMutation = {
  createBackendSettings?:  {
    __typename: "BackendSettings",
    id: string,
    name: string,
    region: string,
    secretName: string,
    endpoints?:  {
      __typename: "ModelBackendEndpointBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendEndpointBackendSettings",
        id: string,
        backendEndpointId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    databases?:  {
      __typename: "ModelBackendDatabaseBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendDatabaseBackendSettings",
        id: string,
        backendDatabaseId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    queues?:  {
      __typename: "ModelBackendQueueBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendQueueBackendSettings",
        id: string,
        backendQueueId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    topics?:  {
      __typename: "ModelBackendTopicBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendTopicBackendSettings",
        id: string,
        backendTopicId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBackendSettingsMutationVariables = {
  input: UpdateBackendSettingsInput,
  condition?: ModelBackendSettingsConditionInput | null,
};

export type UpdateBackendSettingsMutation = {
  updateBackendSettings?:  {
    __typename: "BackendSettings",
    id: string,
    name: string,
    region: string,
    secretName: string,
    endpoints?:  {
      __typename: "ModelBackendEndpointBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendEndpointBackendSettings",
        id: string,
        backendEndpointId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    databases?:  {
      __typename: "ModelBackendDatabaseBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendDatabaseBackendSettings",
        id: string,
        backendDatabaseId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    queues?:  {
      __typename: "ModelBackendQueueBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendQueueBackendSettings",
        id: string,
        backendQueueId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    topics?:  {
      __typename: "ModelBackendTopicBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendTopicBackendSettings",
        id: string,
        backendTopicId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBackendSettingsMutationVariables = {
  input: DeleteBackendSettingsInput,
  condition?: ModelBackendSettingsConditionInput | null,
};

export type DeleteBackendSettingsMutation = {
  deleteBackendSettings?:  {
    __typename: "BackendSettings",
    id: string,
    name: string,
    region: string,
    secretName: string,
    endpoints?:  {
      __typename: "ModelBackendEndpointBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendEndpointBackendSettings",
        id: string,
        backendEndpointId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    databases?:  {
      __typename: "ModelBackendDatabaseBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendDatabaseBackendSettings",
        id: string,
        backendDatabaseId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    queues?:  {
      __typename: "ModelBackendQueueBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendQueueBackendSettings",
        id: string,
        backendQueueId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    topics?:  {
      __typename: "ModelBackendTopicBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendTopicBackendSettings",
        id: string,
        backendTopicId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFrontendComponentMutationVariables = {
  input: CreateFrontendComponentInput,
  condition?: ModelFrontendComponentConditionInput | null,
};

export type CreateFrontendComponentMutation = {
  createFrontendComponent?:  {
    __typename: "FrontendComponent",
    id: string,
    name: string,
    description: string,
    usedInSettings?:  {
      __typename: "ModelFrontendComponentFrontendSettingsConnection",
      items:  Array< {
        __typename: "FrontendComponentFrontendSettings",
        id: string,
        frontendComponentId: string,
        frontendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedInTool?:  {
      __typename: "ModelFrontendComponentAiRenderToolConnection",
      items:  Array< {
        __typename: "FrontendComponentAiRenderTool",
        id: string,
        aiRenderToolId: string,
        frontendComponentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFrontendComponentMutationVariables = {
  input: UpdateFrontendComponentInput,
  condition?: ModelFrontendComponentConditionInput | null,
};

export type UpdateFrontendComponentMutation = {
  updateFrontendComponent?:  {
    __typename: "FrontendComponent",
    id: string,
    name: string,
    description: string,
    usedInSettings?:  {
      __typename: "ModelFrontendComponentFrontendSettingsConnection",
      items:  Array< {
        __typename: "FrontendComponentFrontendSettings",
        id: string,
        frontendComponentId: string,
        frontendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedInTool?:  {
      __typename: "ModelFrontendComponentAiRenderToolConnection",
      items:  Array< {
        __typename: "FrontendComponentAiRenderTool",
        id: string,
        aiRenderToolId: string,
        frontendComponentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFrontendComponentMutationVariables = {
  input: DeleteFrontendComponentInput,
  condition?: ModelFrontendComponentConditionInput | null,
};

export type DeleteFrontendComponentMutation = {
  deleteFrontendComponent?:  {
    __typename: "FrontendComponent",
    id: string,
    name: string,
    description: string,
    usedInSettings?:  {
      __typename: "ModelFrontendComponentFrontendSettingsConnection",
      items:  Array< {
        __typename: "FrontendComponentFrontendSettings",
        id: string,
        frontendComponentId: string,
        frontendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedInTool?:  {
      __typename: "ModelFrontendComponentAiRenderToolConnection",
      items:  Array< {
        __typename: "FrontendComponentAiRenderTool",
        id: string,
        aiRenderToolId: string,
        frontendComponentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFrontendSettingsMutationVariables = {
  input: CreateFrontendSettingsInput,
  condition?: ModelFrontendSettingsConditionInput | null,
};

export type CreateFrontendSettingsMutation = {
  createFrontendSettings?:  {
    __typename: "FrontendSettings",
    id: string,
    name: string,
    domain: string,
    cssS3Url?: string | null,
    components?:  {
      __typename: "ModelFrontendComponentFrontendSettingsConnection",
      items:  Array< {
        __typename: "FrontendComponentFrontendSettings",
        id: string,
        frontendComponentId: string,
        frontendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFrontendSettingsMutationVariables = {
  input: UpdateFrontendSettingsInput,
  condition?: ModelFrontendSettingsConditionInput | null,
};

export type UpdateFrontendSettingsMutation = {
  updateFrontendSettings?:  {
    __typename: "FrontendSettings",
    id: string,
    name: string,
    domain: string,
    cssS3Url?: string | null,
    components?:  {
      __typename: "ModelFrontendComponentFrontendSettingsConnection",
      items:  Array< {
        __typename: "FrontendComponentFrontendSettings",
        id: string,
        frontendComponentId: string,
        frontendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFrontendSettingsMutationVariables = {
  input: DeleteFrontendSettingsInput,
  condition?: ModelFrontendSettingsConditionInput | null,
};

export type DeleteFrontendSettingsMutation = {
  deleteFrontendSettings?:  {
    __typename: "FrontendSettings",
    id: string,
    name: string,
    domain: string,
    cssS3Url?: string | null,
    components?:  {
      __typename: "ModelFrontendComponentFrontendSettingsConnection",
      items:  Array< {
        __typename: "FrontendComponentFrontendSettings",
        id: string,
        frontendComponentId: string,
        frontendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateApplicationStageCognitoUserPoolMutationVariables = {
  input: CreateApplicationStageCognitoUserPoolInput,
  condition?: ModelApplicationStageCognitoUserPoolConditionInput | null,
};

export type CreateApplicationStageCognitoUserPoolMutation = {
  createApplicationStageCognitoUserPool?:  {
    __typename: "ApplicationStageCognitoUserPool",
    id: string,
    name: string,
    userPoolId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateApplicationStageCognitoUserPoolMutationVariables = {
  input: UpdateApplicationStageCognitoUserPoolInput,
  condition?: ModelApplicationStageCognitoUserPoolConditionInput | null,
};

export type UpdateApplicationStageCognitoUserPoolMutation = {
  updateApplicationStageCognitoUserPool?:  {
    __typename: "ApplicationStageCognitoUserPool",
    id: string,
    name: string,
    userPoolId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteApplicationStageCognitoUserPoolMutationVariables = {
  input: DeleteApplicationStageCognitoUserPoolInput,
  condition?: ModelApplicationStageCognitoUserPoolConditionInput | null,
};

export type DeleteApplicationStageCognitoUserPoolMutation = {
  deleteApplicationStageCognitoUserPool?:  {
    __typename: "ApplicationStageCognitoUserPool",
    id: string,
    name: string,
    userPoolId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateApplicationStageMutationVariables = {
  input: CreateApplicationStageInput,
  condition?: ModelApplicationStageConditionInput | null,
};

export type CreateApplicationStageMutation = {
  createApplicationStage?:  {
    __typename: "ApplicationStage",
    id: string,
    name: string,
    aiSettingsID: string,
    aiSettings?:  {
      __typename: "AiSettings",
      id: string,
      name: string,
      balancerUrl: string,
      processes?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    backendSettingsID: string,
    backendSettings?:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    frontendSettingsID: string,
    frontendSettings?:  {
      __typename: "FrontendSettings",
      id: string,
      name: string,
      domain: string,
      cssS3Url?: string | null,
      components?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    cognitoUserPoolID: string,
    cognitoUserPool?:  {
      __typename: "ApplicationStageCognitoUserPool",
      id: string,
      name: string,
      userPoolId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateApplicationStageMutationVariables = {
  input: UpdateApplicationStageInput,
  condition?: ModelApplicationStageConditionInput | null,
};

export type UpdateApplicationStageMutation = {
  updateApplicationStage?:  {
    __typename: "ApplicationStage",
    id: string,
    name: string,
    aiSettingsID: string,
    aiSettings?:  {
      __typename: "AiSettings",
      id: string,
      name: string,
      balancerUrl: string,
      processes?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    backendSettingsID: string,
    backendSettings?:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    frontendSettingsID: string,
    frontendSettings?:  {
      __typename: "FrontendSettings",
      id: string,
      name: string,
      domain: string,
      cssS3Url?: string | null,
      components?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    cognitoUserPoolID: string,
    cognitoUserPool?:  {
      __typename: "ApplicationStageCognitoUserPool",
      id: string,
      name: string,
      userPoolId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteApplicationStageMutationVariables = {
  input: DeleteApplicationStageInput,
  condition?: ModelApplicationStageConditionInput | null,
};

export type DeleteApplicationStageMutation = {
  deleteApplicationStage?:  {
    __typename: "ApplicationStage",
    id: string,
    name: string,
    aiSettingsID: string,
    aiSettings?:  {
      __typename: "AiSettings",
      id: string,
      name: string,
      balancerUrl: string,
      processes?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    backendSettingsID: string,
    backendSettings?:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    frontendSettingsID: string,
    frontendSettings?:  {
      __typename: "FrontendSettings",
      id: string,
      name: string,
      domain: string,
      cssS3Url?: string | null,
      components?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    cognitoUserPoolID: string,
    cognitoUserPool?:  {
      __typename: "ApplicationStageCognitoUserPool",
      id: string,
      name: string,
      userPoolId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateApplicationAiServerSnapshotReferenceMutationVariables = {
  input: CreateApplicationAiServerSnapshotReferenceInput,
  condition?: ModelApplicationAiServerSnapshotReferenceConditionInput | null,
};

export type CreateApplicationAiServerSnapshotReferenceMutation = {
  createApplicationAiServerSnapshotReference?:  {
    __typename: "ApplicationAiServerSnapshotReference",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateApplicationAiServerSnapshotReferenceMutationVariables = {
  input: UpdateApplicationAiServerSnapshotReferenceInput,
  condition?: ModelApplicationAiServerSnapshotReferenceConditionInput | null,
};

export type UpdateApplicationAiServerSnapshotReferenceMutation = {
  updateApplicationAiServerSnapshotReference?:  {
    __typename: "ApplicationAiServerSnapshotReference",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteApplicationAiServerSnapshotReferenceMutationVariables = {
  input: DeleteApplicationAiServerSnapshotReferenceInput,
  condition?: ModelApplicationAiServerSnapshotReferenceConditionInput | null,
};

export type DeleteApplicationAiServerSnapshotReferenceMutation = {
  deleteApplicationAiServerSnapshotReference?:  {
    __typename: "ApplicationAiServerSnapshotReference",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateApplicationMutationVariables = {
  input: CreateApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type CreateApplicationMutation = {
  createApplication?:  {
    __typename: "Application",
    id: string,
    url: string,
    name: string,
    version: string,
    devStageID?: string | null,
    DEV?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    stagingStageID?: string | null,
    STAGING?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    prodStageID?: string | null,
    PROD?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    aiServerSnapshotReferenceID: string,
    aiServerSnapshotReference?:  {
      __typename: "ApplicationAiServerSnapshotReference",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateApplicationMutationVariables = {
  input: UpdateApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type UpdateApplicationMutation = {
  updateApplication?:  {
    __typename: "Application",
    id: string,
    url: string,
    name: string,
    version: string,
    devStageID?: string | null,
    DEV?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    stagingStageID?: string | null,
    STAGING?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    prodStageID?: string | null,
    PROD?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    aiServerSnapshotReferenceID: string,
    aiServerSnapshotReference?:  {
      __typename: "ApplicationAiServerSnapshotReference",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteApplicationMutationVariables = {
  input: DeleteApplicationInput,
  condition?: ModelApplicationConditionInput | null,
};

export type DeleteApplicationMutation = {
  deleteApplication?:  {
    __typename: "Application",
    id: string,
    url: string,
    name: string,
    version: string,
    devStageID?: string | null,
    DEV?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    stagingStageID?: string | null,
    STAGING?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    prodStageID?: string | null,
    PROD?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    aiServerSnapshotReferenceID: string,
    aiServerSnapshotReference?:  {
      __typename: "ApplicationAiServerSnapshotReference",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBackendEndpointAiApiToolMutationVariables = {
  input: CreateBackendEndpointAiApiToolInput,
  condition?: ModelBackendEndpointAiApiToolConditionInput | null,
};

export type CreateBackendEndpointAiApiToolMutation = {
  createBackendEndpointAiApiTool?:  {
    __typename: "BackendEndpointAiApiTool",
    id: string,
    aiApiToolId: string,
    backendEndpointId: string,
    aiApiTool:  {
      __typename: "AiApiTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      endpoint?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendEndpoint:  {
      __typename: "BackendEndpoint",
      id: string,
      name: string,
      url: string,
      description: string,
      methodID?: string | null,
      method?:  {
        __typename: "BackendEndpointMethod",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      parametersWIP?: string | null,
      usedInSettings?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBackendEndpointAiApiToolMutationVariables = {
  input: UpdateBackendEndpointAiApiToolInput,
  condition?: ModelBackendEndpointAiApiToolConditionInput | null,
};

export type UpdateBackendEndpointAiApiToolMutation = {
  updateBackendEndpointAiApiTool?:  {
    __typename: "BackendEndpointAiApiTool",
    id: string,
    aiApiToolId: string,
    backendEndpointId: string,
    aiApiTool:  {
      __typename: "AiApiTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      endpoint?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendEndpoint:  {
      __typename: "BackendEndpoint",
      id: string,
      name: string,
      url: string,
      description: string,
      methodID?: string | null,
      method?:  {
        __typename: "BackendEndpointMethod",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      parametersWIP?: string | null,
      usedInSettings?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBackendEndpointAiApiToolMutationVariables = {
  input: DeleteBackendEndpointAiApiToolInput,
  condition?: ModelBackendEndpointAiApiToolConditionInput | null,
};

export type DeleteBackendEndpointAiApiToolMutation = {
  deleteBackendEndpointAiApiTool?:  {
    __typename: "BackendEndpointAiApiTool",
    id: string,
    aiApiToolId: string,
    backendEndpointId: string,
    aiApiTool:  {
      __typename: "AiApiTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      endpoint?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendEndpoint:  {
      __typename: "BackendEndpoint",
      id: string,
      name: string,
      url: string,
      description: string,
      methodID?: string | null,
      method?:  {
        __typename: "BackendEndpointMethod",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      parametersWIP?: string | null,
      usedInSettings?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiApiToolAiToolGroupMutationVariables = {
  input: CreateAiApiToolAiToolGroupInput,
  condition?: ModelAiApiToolAiToolGroupConditionInput | null,
};

export type CreateAiApiToolAiToolGroupMutation = {
  createAiApiToolAiToolGroup?:  {
    __typename: "AiApiToolAiToolGroup",
    id: string,
    aiApiToolId: string,
    aiToolGroupId: string,
    aiApiTool:  {
      __typename: "AiApiTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      endpoint?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiApiToolAiToolGroupMutationVariables = {
  input: UpdateAiApiToolAiToolGroupInput,
  condition?: ModelAiApiToolAiToolGroupConditionInput | null,
};

export type UpdateAiApiToolAiToolGroupMutation = {
  updateAiApiToolAiToolGroup?:  {
    __typename: "AiApiToolAiToolGroup",
    id: string,
    aiApiToolId: string,
    aiToolGroupId: string,
    aiApiTool:  {
      __typename: "AiApiTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      endpoint?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiApiToolAiToolGroupMutationVariables = {
  input: DeleteAiApiToolAiToolGroupInput,
  condition?: ModelAiApiToolAiToolGroupConditionInput | null,
};

export type DeleteAiApiToolAiToolGroupMutation = {
  deleteAiApiToolAiToolGroup?:  {
    __typename: "AiApiToolAiToolGroup",
    id: string,
    aiApiToolId: string,
    aiToolGroupId: string,
    aiApiTool:  {
      __typename: "AiApiTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      endpoint?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFrontendComponentAiRenderToolMutationVariables = {
  input: CreateFrontendComponentAiRenderToolInput,
  condition?: ModelFrontendComponentAiRenderToolConditionInput | null,
};

export type CreateFrontendComponentAiRenderToolMutation = {
  createFrontendComponentAiRenderTool?:  {
    __typename: "FrontendComponentAiRenderTool",
    id: string,
    aiRenderToolId: string,
    frontendComponentId: string,
    aiRenderTool:  {
      __typename: "AiRenderTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      action: string,
      component?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    frontendComponent:  {
      __typename: "FrontendComponent",
      id: string,
      name: string,
      description: string,
      usedInSettings?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFrontendComponentAiRenderToolMutationVariables = {
  input: UpdateFrontendComponentAiRenderToolInput,
  condition?: ModelFrontendComponentAiRenderToolConditionInput | null,
};

export type UpdateFrontendComponentAiRenderToolMutation = {
  updateFrontendComponentAiRenderTool?:  {
    __typename: "FrontendComponentAiRenderTool",
    id: string,
    aiRenderToolId: string,
    frontendComponentId: string,
    aiRenderTool:  {
      __typename: "AiRenderTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      action: string,
      component?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    frontendComponent:  {
      __typename: "FrontendComponent",
      id: string,
      name: string,
      description: string,
      usedInSettings?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFrontendComponentAiRenderToolMutationVariables = {
  input: DeleteFrontendComponentAiRenderToolInput,
  condition?: ModelFrontendComponentAiRenderToolConditionInput | null,
};

export type DeleteFrontendComponentAiRenderToolMutation = {
  deleteFrontendComponentAiRenderTool?:  {
    __typename: "FrontendComponentAiRenderTool",
    id: string,
    aiRenderToolId: string,
    frontendComponentId: string,
    aiRenderTool:  {
      __typename: "AiRenderTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      action: string,
      component?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    frontendComponent:  {
      __typename: "FrontendComponent",
      id: string,
      name: string,
      description: string,
      usedInSettings?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiRenderToolAiToolGroupMutationVariables = {
  input: CreateAiRenderToolAiToolGroupInput,
  condition?: ModelAiRenderToolAiToolGroupConditionInput | null,
};

export type CreateAiRenderToolAiToolGroupMutation = {
  createAiRenderToolAiToolGroup?:  {
    __typename: "AiRenderToolAiToolGroup",
    id: string,
    aiRenderToolId: string,
    aiToolGroupId: string,
    aiRenderTool:  {
      __typename: "AiRenderTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      action: string,
      component?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiRenderToolAiToolGroupMutationVariables = {
  input: UpdateAiRenderToolAiToolGroupInput,
  condition?: ModelAiRenderToolAiToolGroupConditionInput | null,
};

export type UpdateAiRenderToolAiToolGroupMutation = {
  updateAiRenderToolAiToolGroup?:  {
    __typename: "AiRenderToolAiToolGroup",
    id: string,
    aiRenderToolId: string,
    aiToolGroupId: string,
    aiRenderTool:  {
      __typename: "AiRenderTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      action: string,
      component?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiRenderToolAiToolGroupMutationVariables = {
  input: DeleteAiRenderToolAiToolGroupInput,
  condition?: ModelAiRenderToolAiToolGroupConditionInput | null,
};

export type DeleteAiRenderToolAiToolGroupMutation = {
  deleteAiRenderToolAiToolGroup?:  {
    __typename: "AiRenderToolAiToolGroup",
    id: string,
    aiRenderToolId: string,
    aiToolGroupId: string,
    aiRenderTool:  {
      __typename: "AiRenderTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      action: string,
      component?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiToolGroupAiConfigurationMutationVariables = {
  input: CreateAiToolGroupAiConfigurationInput,
  condition?: ModelAiToolGroupAiConfigurationConditionInput | null,
};

export type CreateAiToolGroupAiConfigurationMutation = {
  createAiToolGroupAiConfiguration?:  {
    __typename: "AiToolGroupAiConfiguration",
    id: string,
    aiToolGroupId: string,
    aiConfigurationId: string,
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiConfiguration:  {
      __typename: "AiConfiguration",
      id: string,
      name: string,
      aiParametersID: string,
      aiParameters?:  {
        __typename: "AiParameters",
        id: string,
        name: string,
        role: string,
        companyID: string,
        conversationPurpose: string,
        conversationType: string,
        prePrompt: string,
        postPrompt: string,
        llmID: string,
        chatMemory: number,
        responseTemperature: number,
        responseLanguage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tools?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiToolGroupAiConfigurationMutationVariables = {
  input: UpdateAiToolGroupAiConfigurationInput,
  condition?: ModelAiToolGroupAiConfigurationConditionInput | null,
};

export type UpdateAiToolGroupAiConfigurationMutation = {
  updateAiToolGroupAiConfiguration?:  {
    __typename: "AiToolGroupAiConfiguration",
    id: string,
    aiToolGroupId: string,
    aiConfigurationId: string,
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiConfiguration:  {
      __typename: "AiConfiguration",
      id: string,
      name: string,
      aiParametersID: string,
      aiParameters?:  {
        __typename: "AiParameters",
        id: string,
        name: string,
        role: string,
        companyID: string,
        conversationPurpose: string,
        conversationType: string,
        prePrompt: string,
        postPrompt: string,
        llmID: string,
        chatMemory: number,
        responseTemperature: number,
        responseLanguage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tools?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiToolGroupAiConfigurationMutationVariables = {
  input: DeleteAiToolGroupAiConfigurationInput,
  condition?: ModelAiToolGroupAiConfigurationConditionInput | null,
};

export type DeleteAiToolGroupAiConfigurationMutation = {
  deleteAiToolGroupAiConfiguration?:  {
    __typename: "AiToolGroupAiConfiguration",
    id: string,
    aiToolGroupId: string,
    aiConfigurationId: string,
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiConfiguration:  {
      __typename: "AiConfiguration",
      id: string,
      name: string,
      aiParametersID: string,
      aiParameters?:  {
        __typename: "AiParameters",
        id: string,
        name: string,
        role: string,
        companyID: string,
        conversationPurpose: string,
        conversationType: string,
        prePrompt: string,
        postPrompt: string,
        llmID: string,
        chatMemory: number,
        responseTemperature: number,
        responseLanguage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tools?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAiProcessAiSettingsMutationVariables = {
  input: CreateAiProcessAiSettingsInput,
  condition?: ModelAiProcessAiSettingsConditionInput | null,
};

export type CreateAiProcessAiSettingsMutation = {
  createAiProcessAiSettings?:  {
    __typename: "AiProcessAiSettings",
    id: string,
    aiProcessId: string,
    aiSettingsId: string,
    aiProcess:  {
      __typename: "AiProcess",
      id: string,
      tebeDeleted: boolean,
      name: string,
      taskTypeID: string,
      taskType?:  {
        __typename: "AiTaskTypes",
        id: string,
        types: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiConfigID: string,
      aiConfig?:  {
        __typename: "AiConfiguration",
        id: string,
        name: string,
        aiParametersID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      usedIn?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      communicationSourceType: communicationSourceType,
      frontedWebsocketCommunicationSourceID?: string | null,
      frontedWebsocketCommunicationSource?:  {
        __typename: "AiWebsocket",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendQueueCommunicationSourceID?: string | null,
      backendQueueCommunicationSource?:  {
        __typename: "BackendQueue",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiSettings:  {
      __typename: "AiSettings",
      id: string,
      name: string,
      balancerUrl: string,
      processes?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAiProcessAiSettingsMutationVariables = {
  input: UpdateAiProcessAiSettingsInput,
  condition?: ModelAiProcessAiSettingsConditionInput | null,
};

export type UpdateAiProcessAiSettingsMutation = {
  updateAiProcessAiSettings?:  {
    __typename: "AiProcessAiSettings",
    id: string,
    aiProcessId: string,
    aiSettingsId: string,
    aiProcess:  {
      __typename: "AiProcess",
      id: string,
      tebeDeleted: boolean,
      name: string,
      taskTypeID: string,
      taskType?:  {
        __typename: "AiTaskTypes",
        id: string,
        types: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiConfigID: string,
      aiConfig?:  {
        __typename: "AiConfiguration",
        id: string,
        name: string,
        aiParametersID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      usedIn?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      communicationSourceType: communicationSourceType,
      frontedWebsocketCommunicationSourceID?: string | null,
      frontedWebsocketCommunicationSource?:  {
        __typename: "AiWebsocket",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendQueueCommunicationSourceID?: string | null,
      backendQueueCommunicationSource?:  {
        __typename: "BackendQueue",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiSettings:  {
      __typename: "AiSettings",
      id: string,
      name: string,
      balancerUrl: string,
      processes?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAiProcessAiSettingsMutationVariables = {
  input: DeleteAiProcessAiSettingsInput,
  condition?: ModelAiProcessAiSettingsConditionInput | null,
};

export type DeleteAiProcessAiSettingsMutation = {
  deleteAiProcessAiSettings?:  {
    __typename: "AiProcessAiSettings",
    id: string,
    aiProcessId: string,
    aiSettingsId: string,
    aiProcess:  {
      __typename: "AiProcess",
      id: string,
      tebeDeleted: boolean,
      name: string,
      taskTypeID: string,
      taskType?:  {
        __typename: "AiTaskTypes",
        id: string,
        types: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiConfigID: string,
      aiConfig?:  {
        __typename: "AiConfiguration",
        id: string,
        name: string,
        aiParametersID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      usedIn?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      communicationSourceType: communicationSourceType,
      frontedWebsocketCommunicationSourceID?: string | null,
      frontedWebsocketCommunicationSource?:  {
        __typename: "AiWebsocket",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendQueueCommunicationSourceID?: string | null,
      backendQueueCommunicationSource?:  {
        __typename: "BackendQueue",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiSettings:  {
      __typename: "AiSettings",
      id: string,
      name: string,
      balancerUrl: string,
      processes?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBackendQueueBackendSettingsMutationVariables = {
  input: CreateBackendQueueBackendSettingsInput,
  condition?: ModelBackendQueueBackendSettingsConditionInput | null,
};

export type CreateBackendQueueBackendSettingsMutation = {
  createBackendQueueBackendSettings?:  {
    __typename: "BackendQueueBackendSettings",
    id: string,
    backendQueueId: string,
    backendSettingsId: string,
    backendQueue:  {
      __typename: "BackendQueue",
      id: string,
      name: string,
      url: string,
      usedIn?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBackendQueueBackendSettingsMutationVariables = {
  input: UpdateBackendQueueBackendSettingsInput,
  condition?: ModelBackendQueueBackendSettingsConditionInput | null,
};

export type UpdateBackendQueueBackendSettingsMutation = {
  updateBackendQueueBackendSettings?:  {
    __typename: "BackendQueueBackendSettings",
    id: string,
    backendQueueId: string,
    backendSettingsId: string,
    backendQueue:  {
      __typename: "BackendQueue",
      id: string,
      name: string,
      url: string,
      usedIn?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBackendQueueBackendSettingsMutationVariables = {
  input: DeleteBackendQueueBackendSettingsInput,
  condition?: ModelBackendQueueBackendSettingsConditionInput | null,
};

export type DeleteBackendQueueBackendSettingsMutation = {
  deleteBackendQueueBackendSettings?:  {
    __typename: "BackendQueueBackendSettings",
    id: string,
    backendQueueId: string,
    backendSettingsId: string,
    backendQueue:  {
      __typename: "BackendQueue",
      id: string,
      name: string,
      url: string,
      usedIn?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBackendTopicBackendSettingsMutationVariables = {
  input: CreateBackendTopicBackendSettingsInput,
  condition?: ModelBackendTopicBackendSettingsConditionInput | null,
};

export type CreateBackendTopicBackendSettingsMutation = {
  createBackendTopicBackendSettings?:  {
    __typename: "BackendTopicBackendSettings",
    id: string,
    backendTopicId: string,
    backendSettingsId: string,
    backendTopic:  {
      __typename: "BackendTopic",
      id: string,
      name: string,
      arn: string,
      usedIn?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBackendTopicBackendSettingsMutationVariables = {
  input: UpdateBackendTopicBackendSettingsInput,
  condition?: ModelBackendTopicBackendSettingsConditionInput | null,
};

export type UpdateBackendTopicBackendSettingsMutation = {
  updateBackendTopicBackendSettings?:  {
    __typename: "BackendTopicBackendSettings",
    id: string,
    backendTopicId: string,
    backendSettingsId: string,
    backendTopic:  {
      __typename: "BackendTopic",
      id: string,
      name: string,
      arn: string,
      usedIn?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBackendTopicBackendSettingsMutationVariables = {
  input: DeleteBackendTopicBackendSettingsInput,
  condition?: ModelBackendTopicBackendSettingsConditionInput | null,
};

export type DeleteBackendTopicBackendSettingsMutation = {
  deleteBackendTopicBackendSettings?:  {
    __typename: "BackendTopicBackendSettings",
    id: string,
    backendTopicId: string,
    backendSettingsId: string,
    backendTopic:  {
      __typename: "BackendTopic",
      id: string,
      name: string,
      arn: string,
      usedIn?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBackendDatabaseBackendSettingsMutationVariables = {
  input: CreateBackendDatabaseBackendSettingsInput,
  condition?: ModelBackendDatabaseBackendSettingsConditionInput | null,
};

export type CreateBackendDatabaseBackendSettingsMutation = {
  createBackendDatabaseBackendSettings?:  {
    __typename: "BackendDatabaseBackendSettings",
    id: string,
    backendDatabaseId: string,
    backendSettingsId: string,
    backendDatabase:  {
      __typename: "BackendDatabase",
      id: string,
      name: string,
      backendDatabaseTypeID: string,
      type?:  {
        __typename: "BackendDatabaseType",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      reference: string,
      usedIn?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBackendDatabaseBackendSettingsMutationVariables = {
  input: UpdateBackendDatabaseBackendSettingsInput,
  condition?: ModelBackendDatabaseBackendSettingsConditionInput | null,
};

export type UpdateBackendDatabaseBackendSettingsMutation = {
  updateBackendDatabaseBackendSettings?:  {
    __typename: "BackendDatabaseBackendSettings",
    id: string,
    backendDatabaseId: string,
    backendSettingsId: string,
    backendDatabase:  {
      __typename: "BackendDatabase",
      id: string,
      name: string,
      backendDatabaseTypeID: string,
      type?:  {
        __typename: "BackendDatabaseType",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      reference: string,
      usedIn?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBackendDatabaseBackendSettingsMutationVariables = {
  input: DeleteBackendDatabaseBackendSettingsInput,
  condition?: ModelBackendDatabaseBackendSettingsConditionInput | null,
};

export type DeleteBackendDatabaseBackendSettingsMutation = {
  deleteBackendDatabaseBackendSettings?:  {
    __typename: "BackendDatabaseBackendSettings",
    id: string,
    backendDatabaseId: string,
    backendSettingsId: string,
    backendDatabase:  {
      __typename: "BackendDatabase",
      id: string,
      name: string,
      backendDatabaseTypeID: string,
      type?:  {
        __typename: "BackendDatabaseType",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      reference: string,
      usedIn?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBackendEndpointBackendSettingsMutationVariables = {
  input: CreateBackendEndpointBackendSettingsInput,
  condition?: ModelBackendEndpointBackendSettingsConditionInput | null,
};

export type CreateBackendEndpointBackendSettingsMutation = {
  createBackendEndpointBackendSettings?:  {
    __typename: "BackendEndpointBackendSettings",
    id: string,
    backendEndpointId: string,
    backendSettingsId: string,
    backendEndpoint:  {
      __typename: "BackendEndpoint",
      id: string,
      name: string,
      url: string,
      description: string,
      methodID?: string | null,
      method?:  {
        __typename: "BackendEndpointMethod",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      parametersWIP?: string | null,
      usedInSettings?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBackendEndpointBackendSettingsMutationVariables = {
  input: UpdateBackendEndpointBackendSettingsInput,
  condition?: ModelBackendEndpointBackendSettingsConditionInput | null,
};

export type UpdateBackendEndpointBackendSettingsMutation = {
  updateBackendEndpointBackendSettings?:  {
    __typename: "BackendEndpointBackendSettings",
    id: string,
    backendEndpointId: string,
    backendSettingsId: string,
    backendEndpoint:  {
      __typename: "BackendEndpoint",
      id: string,
      name: string,
      url: string,
      description: string,
      methodID?: string | null,
      method?:  {
        __typename: "BackendEndpointMethod",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      parametersWIP?: string | null,
      usedInSettings?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBackendEndpointBackendSettingsMutationVariables = {
  input: DeleteBackendEndpointBackendSettingsInput,
  condition?: ModelBackendEndpointBackendSettingsConditionInput | null,
};

export type DeleteBackendEndpointBackendSettingsMutation = {
  deleteBackendEndpointBackendSettings?:  {
    __typename: "BackendEndpointBackendSettings",
    id: string,
    backendEndpointId: string,
    backendSettingsId: string,
    backendEndpoint:  {
      __typename: "BackendEndpoint",
      id: string,
      name: string,
      url: string,
      description: string,
      methodID?: string | null,
      method?:  {
        __typename: "BackendEndpointMethod",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      parametersWIP?: string | null,
      usedInSettings?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFrontendComponentFrontendSettingsMutationVariables = {
  input: CreateFrontendComponentFrontendSettingsInput,
  condition?: ModelFrontendComponentFrontendSettingsConditionInput | null,
};

export type CreateFrontendComponentFrontendSettingsMutation = {
  createFrontendComponentFrontendSettings?:  {
    __typename: "FrontendComponentFrontendSettings",
    id: string,
    frontendComponentId: string,
    frontendSettingsId: string,
    frontendComponent:  {
      __typename: "FrontendComponent",
      id: string,
      name: string,
      description: string,
      usedInSettings?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    frontendSettings:  {
      __typename: "FrontendSettings",
      id: string,
      name: string,
      domain: string,
      cssS3Url?: string | null,
      components?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFrontendComponentFrontendSettingsMutationVariables = {
  input: UpdateFrontendComponentFrontendSettingsInput,
  condition?: ModelFrontendComponentFrontendSettingsConditionInput | null,
};

export type UpdateFrontendComponentFrontendSettingsMutation = {
  updateFrontendComponentFrontendSettings?:  {
    __typename: "FrontendComponentFrontendSettings",
    id: string,
    frontendComponentId: string,
    frontendSettingsId: string,
    frontendComponent:  {
      __typename: "FrontendComponent",
      id: string,
      name: string,
      description: string,
      usedInSettings?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    frontendSettings:  {
      __typename: "FrontendSettings",
      id: string,
      name: string,
      domain: string,
      cssS3Url?: string | null,
      components?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFrontendComponentFrontendSettingsMutationVariables = {
  input: DeleteFrontendComponentFrontendSettingsInput,
  condition?: ModelFrontendComponentFrontendSettingsConditionInput | null,
};

export type DeleteFrontendComponentFrontendSettingsMutation = {
  deleteFrontendComponentFrontendSettings?:  {
    __typename: "FrontendComponentFrontendSettings",
    id: string,
    frontendComponentId: string,
    frontendSettingsId: string,
    frontendComponent:  {
      __typename: "FrontendComponent",
      id: string,
      name: string,
      description: string,
      usedInSettings?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    frontendSettings:  {
      __typename: "FrontendSettings",
      id: string,
      name: string,
      domain: string,
      cssS3Url?: string | null,
      components?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetAiClientCompanyQueryVariables = {
  id: string,
};

export type GetAiClientCompanyQuery = {
  getAiClientCompany?:  {
    __typename: "AiClientCompany",
    id: string,
    name: string,
    business: string,
    values: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiClientCompaniesQueryVariables = {
  filter?: ModelAiClientCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiClientCompaniesQuery = {
  listAiClientCompanies?:  {
    __typename: "ModelAiClientCompanyConnection",
    items:  Array< {
      __typename: "AiClientCompany",
      id: string,
      name: string,
      business: string,
      values: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiLlmQueryVariables = {
  id: string,
};

export type GetAiLlmQuery = {
  getAiLlm?:  {
    __typename: "AiLlm",
    id: string,
    name: string,
    input: Array< string >,
    output: Array< string >,
    description: string,
    available: boolean,
    maxTokens?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiLlmsQueryVariables = {
  filter?: ModelAiLlmFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiLlmsQuery = {
  listAiLlms?:  {
    __typename: "ModelAiLlmConnection",
    items:  Array< {
      __typename: "AiLlm",
      id: string,
      name: string,
      input: Array< string >,
      output: Array< string >,
      description: string,
      available: boolean,
      maxTokens?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiVectorialDbConfigQueryVariables = {
  id: string,
};

export type GetAiVectorialDbConfigQuery = {
  getAiVectorialDbConfig?:  {
    __typename: "AiVectorialDbConfig",
    id: string,
    name: string,
    apiKey: string,
    indexName: string,
    nameSpace: string,
    score: number,
    numberOfSimilarities: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiVectorialDbConfigsQueryVariables = {
  filter?: ModelAiVectorialDbConfigFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiVectorialDbConfigsQuery = {
  listAiVectorialDbConfigs?:  {
    __typename: "ModelAiVectorialDbConfigConnection",
    items:  Array< {
      __typename: "AiVectorialDbConfig",
      id: string,
      name: string,
      apiKey: string,
      indexName: string,
      nameSpace: string,
      score: number,
      numberOfSimilarities: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiVectorizerParametersQueryVariables = {
  id: string,
};

export type GetAiVectorizerParametersQuery = {
  getAiVectorizerParameters?:  {
    __typename: "AiVectorizerParameters",
    id: string,
    name: string,
    aiLlmID: string,
    aiLlm?:  {
      __typename: "AiLlm",
      id: string,
      name: string,
      input: Array< string >,
      output: Array< string >,
      description: string,
      available: boolean,
      maxTokens?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chunkSize: number,
    chunkOverlap: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiVectorizerParametersQueryVariables = {
  filter?: ModelAiVectorizerParametersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiVectorizerParametersQuery = {
  listAiVectorizerParameters?:  {
    __typename: "ModelAiVectorizerParametersConnection",
    items:  Array< {
      __typename: "AiVectorizerParameters",
      id: string,
      name: string,
      aiLlmID: string,
      aiLlm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chunkSize: number,
      chunkOverlap: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiVectorizerParametersByAiLlmIDAndIdQueryVariables = {
  aiLlmID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiVectorizerParametersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiVectorizerParametersByAiLlmIDAndIdQuery = {
  aiVectorizerParametersByAiLlmIDAndId?:  {
    __typename: "ModelAiVectorizerParametersConnection",
    items:  Array< {
      __typename: "AiVectorizerParameters",
      id: string,
      name: string,
      aiLlmID: string,
      aiLlm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chunkSize: number,
      chunkOverlap: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiParametersQueryVariables = {
  id: string,
};

export type GetAiParametersQuery = {
  getAiParameters?:  {
    __typename: "AiParameters",
    id: string,
    name: string,
    role: string,
    companyID: string,
    company?:  {
      __typename: "AiClientCompany",
      id: string,
      name: string,
      business: string,
      values: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversationPurpose: string,
    conversationType: string,
    prePrompt: string,
    postPrompt: string,
    llmID: string,
    llm?:  {
      __typename: "AiLlm",
      id: string,
      name: string,
      input: Array< string >,
      output: Array< string >,
      description: string,
      available: boolean,
      maxTokens?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatMemory: number,
    responseTemperature: number,
    responseLanguage: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiParametersQueryVariables = {
  filter?: ModelAiParametersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiParametersQuery = {
  listAiParameters?:  {
    __typename: "ModelAiParametersConnection",
    items:  Array< {
      __typename: "AiParameters",
      id: string,
      name: string,
      role: string,
      companyID: string,
      company?:  {
        __typename: "AiClientCompany",
        id: string,
        name: string,
        business: string,
        values: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversationPurpose: string,
      conversationType: string,
      prePrompt: string,
      postPrompt: string,
      llmID: string,
      llm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatMemory: number,
      responseTemperature: number,
      responseLanguage: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiParametersByCompanyIDAndIdQueryVariables = {
  companyID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiParametersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiParametersByCompanyIDAndIdQuery = {
  aiParametersByCompanyIDAndId?:  {
    __typename: "ModelAiParametersConnection",
    items:  Array< {
      __typename: "AiParameters",
      id: string,
      name: string,
      role: string,
      companyID: string,
      company?:  {
        __typename: "AiClientCompany",
        id: string,
        name: string,
        business: string,
        values: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversationPurpose: string,
      conversationType: string,
      prePrompt: string,
      postPrompt: string,
      llmID: string,
      llm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatMemory: number,
      responseTemperature: number,
      responseLanguage: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiParametersByLlmIDAndIdQueryVariables = {
  llmID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiParametersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiParametersByLlmIDAndIdQuery = {
  aiParametersByLlmIDAndId?:  {
    __typename: "ModelAiParametersConnection",
    items:  Array< {
      __typename: "AiParameters",
      id: string,
      name: string,
      role: string,
      companyID: string,
      company?:  {
        __typename: "AiClientCompany",
        id: string,
        name: string,
        business: string,
        values: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversationPurpose: string,
      conversationType: string,
      prePrompt: string,
      postPrompt: string,
      llmID: string,
      llm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatMemory: number,
      responseTemperature: number,
      responseLanguage: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiApiToolQueryVariables = {
  id: string,
};

export type GetAiApiToolQuery = {
  getAiApiTool?:  {
    __typename: "AiApiTool",
    id: string,
    name: string,
    func: string,
    useCases: string,
    description: string,
    payload?: string | null,
    endpoint?:  {
      __typename: "ModelBackendEndpointAiApiToolConnection",
      items:  Array< {
        __typename: "BackendEndpointAiApiTool",
        id: string,
        aiApiToolId: string,
        backendEndpointId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiApiToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiApiToolAiToolGroup",
        id: string,
        aiApiToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiApiToolsQueryVariables = {
  filter?: ModelAiApiToolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiApiToolsQuery = {
  listAiApiTools?:  {
    __typename: "ModelAiApiToolConnection",
    items:  Array< {
      __typename: "AiApiTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      endpoint?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiRenderToolQueryVariables = {
  id: string,
};

export type GetAiRenderToolQuery = {
  getAiRenderTool?:  {
    __typename: "AiRenderTool",
    id: string,
    name: string,
    func: string,
    useCases: string,
    description: string,
    payload?: string | null,
    action: string,
    component?:  {
      __typename: "ModelFrontendComponentAiRenderToolConnection",
      items:  Array< {
        __typename: "FrontendComponentAiRenderTool",
        id: string,
        aiRenderToolId: string,
        frontendComponentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiRenderToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiRenderToolAiToolGroup",
        id: string,
        aiRenderToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiRenderToolsQueryVariables = {
  filter?: ModelAiRenderToolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiRenderToolsQuery = {
  listAiRenderTools?:  {
    __typename: "ModelAiRenderToolConnection",
    items:  Array< {
      __typename: "AiRenderTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      action: string,
      component?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiToolGroupQueryVariables = {
  id: string,
};

export type GetAiToolGroupQuery = {
  getAiToolGroup?:  {
    __typename: "AiToolGroup",
    id: string,
    name: string,
    apiTools?:  {
      __typename: "ModelAiApiToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiApiToolAiToolGroup",
        id: string,
        aiApiToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    renderTools?:  {
      __typename: "ModelAiRenderToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiRenderToolAiToolGroup",
        id: string,
        aiRenderToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiToolGroupAiConfigurationConnection",
      items:  Array< {
        __typename: "AiToolGroupAiConfiguration",
        id: string,
        aiToolGroupId: string,
        aiConfigurationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiToolGroupsQueryVariables = {
  filter?: ModelAiToolGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiToolGroupsQuery = {
  listAiToolGroups?:  {
    __typename: "ModelAiToolGroupConnection",
    items:  Array< {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiConfigurationQueryVariables = {
  id: string,
};

export type GetAiConfigurationQuery = {
  getAiConfiguration?:  {
    __typename: "AiConfiguration",
    id: string,
    name: string,
    aiParametersID: string,
    aiParameters?:  {
      __typename: "AiParameters",
      id: string,
      name: string,
      role: string,
      companyID: string,
      company?:  {
        __typename: "AiClientCompany",
        id: string,
        name: string,
        business: string,
        values: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversationPurpose: string,
      conversationType: string,
      prePrompt: string,
      postPrompt: string,
      llmID: string,
      llm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatMemory: number,
      responseTemperature: number,
      responseLanguage: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tools?:  {
      __typename: "ModelAiToolGroupAiConfigurationConnection",
      items:  Array< {
        __typename: "AiToolGroupAiConfiguration",
        id: string,
        aiToolGroupId: string,
        aiConfigurationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiConfigurationsQueryVariables = {
  filter?: ModelAiConfigurationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiConfigurationsQuery = {
  listAiConfigurations?:  {
    __typename: "ModelAiConfigurationConnection",
    items:  Array< {
      __typename: "AiConfiguration",
      id: string,
      name: string,
      aiParametersID: string,
      aiParameters?:  {
        __typename: "AiParameters",
        id: string,
        name: string,
        role: string,
        companyID: string,
        conversationPurpose: string,
        conversationType: string,
        prePrompt: string,
        postPrompt: string,
        llmID: string,
        chatMemory: number,
        responseTemperature: number,
        responseLanguage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tools?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiConfigurationsByAiParametersIDAndIdQueryVariables = {
  aiParametersID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiConfigurationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiConfigurationsByAiParametersIDAndIdQuery = {
  aiConfigurationsByAiParametersIDAndId?:  {
    __typename: "ModelAiConfigurationConnection",
    items:  Array< {
      __typename: "AiConfiguration",
      id: string,
      name: string,
      aiParametersID: string,
      aiParameters?:  {
        __typename: "AiParameters",
        id: string,
        name: string,
        role: string,
        companyID: string,
        conversationPurpose: string,
        conversationType: string,
        prePrompt: string,
        postPrompt: string,
        llmID: string,
        chatMemory: number,
        responseTemperature: number,
        responseLanguage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tools?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiIndexationConfigurationQueryVariables = {
  id: string,
};

export type GetAiIndexationConfigurationQuery = {
  getAiIndexationConfiguration?:  {
    __typename: "AiIndexationConfiguration",
    id: string,
    name: string,
    vectorizerParametersID: string,
    vectorizerParameters?:  {
      __typename: "AiVectorizerParameters",
      id: string,
      name: string,
      aiLlmID: string,
      aiLlm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chunkSize: number,
      chunkOverlap: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    vectorialDbConfigID: string,
    vectorialDbConfig?:  {
      __typename: "AiVectorialDbConfig",
      id: string,
      name: string,
      apiKey: string,
      indexName: string,
      nameSpace: string,
      score: number,
      numberOfSimilarities: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiIndexationConfigurationsQueryVariables = {
  filter?: ModelAiIndexationConfigurationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiIndexationConfigurationsQuery = {
  listAiIndexationConfigurations?:  {
    __typename: "ModelAiIndexationConfigurationConnection",
    items:  Array< {
      __typename: "AiIndexationConfiguration",
      id: string,
      name: string,
      vectorizerParametersID: string,
      vectorizerParameters?:  {
        __typename: "AiVectorizerParameters",
        id: string,
        name: string,
        aiLlmID: string,
        chunkSize: number,
        chunkOverlap: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      vectorialDbConfigID: string,
      vectorialDbConfig?:  {
        __typename: "AiVectorialDbConfig",
        id: string,
        name: string,
        apiKey: string,
        indexName: string,
        nameSpace: string,
        score: number,
        numberOfSimilarities: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiIndexationConfigurationsByVectorizerParametersIDAndIdQueryVariables = {
  vectorizerParametersID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiIndexationConfigurationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiIndexationConfigurationsByVectorizerParametersIDAndIdQuery = {
  aiIndexationConfigurationsByVectorizerParametersIDAndId?:  {
    __typename: "ModelAiIndexationConfigurationConnection",
    items:  Array< {
      __typename: "AiIndexationConfiguration",
      id: string,
      name: string,
      vectorizerParametersID: string,
      vectorizerParameters?:  {
        __typename: "AiVectorizerParameters",
        id: string,
        name: string,
        aiLlmID: string,
        chunkSize: number,
        chunkOverlap: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      vectorialDbConfigID: string,
      vectorialDbConfig?:  {
        __typename: "AiVectorialDbConfig",
        id: string,
        name: string,
        apiKey: string,
        indexName: string,
        nameSpace: string,
        score: number,
        numberOfSimilarities: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiIndexationConfigurationsByVectorialDbConfigIDAndIdQueryVariables = {
  vectorialDbConfigID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiIndexationConfigurationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiIndexationConfigurationsByVectorialDbConfigIDAndIdQuery = {
  aiIndexationConfigurationsByVectorialDbConfigIDAndId?:  {
    __typename: "ModelAiIndexationConfigurationConnection",
    items:  Array< {
      __typename: "AiIndexationConfiguration",
      id: string,
      name: string,
      vectorizerParametersID: string,
      vectorizerParameters?:  {
        __typename: "AiVectorizerParameters",
        id: string,
        name: string,
        aiLlmID: string,
        chunkSize: number,
        chunkOverlap: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      vectorialDbConfigID: string,
      vectorialDbConfig?:  {
        __typename: "AiVectorialDbConfig",
        id: string,
        name: string,
        apiKey: string,
        indexName: string,
        nameSpace: string,
        score: number,
        numberOfSimilarities: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiWebsocketQueryVariables = {
  id: string,
};

export type GetAiWebsocketQuery = {
  getAiWebsocket?:  {
    __typename: "AiWebsocket",
    id: string,
    name: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiWebsocketsQueryVariables = {
  filter?: ModelAiWebsocketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiWebsocketsQuery = {
  listAiWebsockets?:  {
    __typename: "ModelAiWebsocketConnection",
    items:  Array< {
      __typename: "AiWebsocket",
      id: string,
      name: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiTaskTypesQueryVariables = {
  id: string,
};

export type GetAiTaskTypesQuery = {
  getAiTaskTypes?:  {
    __typename: "AiTaskTypes",
    id: string,
    types: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiTaskTypesQueryVariables = {
  filter?: ModelAiTaskTypesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiTaskTypesQuery = {
  listAiTaskTypes?:  {
    __typename: "ModelAiTaskTypesConnection",
    items:  Array< {
      __typename: "AiTaskTypes",
      id: string,
      types: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiProcessQueryVariables = {
  id: string,
};

export type GetAiProcessQuery = {
  getAiProcess?:  {
    __typename: "AiProcess",
    id: string,
    tebeDeleted: boolean,
    name: string,
    taskTypeID: string,
    taskType?:  {
      __typename: "AiTaskTypes",
      id: string,
      types: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    aiConfigID: string,
    aiConfig?:  {
      __typename: "AiConfiguration",
      id: string,
      name: string,
      aiParametersID: string,
      aiParameters?:  {
        __typename: "AiParameters",
        id: string,
        name: string,
        role: string,
        companyID: string,
        conversationPurpose: string,
        conversationType: string,
        prePrompt: string,
        postPrompt: string,
        llmID: string,
        chatMemory: number,
        responseTemperature: number,
        responseLanguage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tools?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    usedIn?:  {
      __typename: "ModelAiProcessAiSettingsConnection",
      items:  Array< {
        __typename: "AiProcessAiSettings",
        id: string,
        aiProcessId: string,
        aiSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    communicationSourceType: communicationSourceType,
    frontedWebsocketCommunicationSourceID?: string | null,
    frontedWebsocketCommunicationSource?:  {
      __typename: "AiWebsocket",
      id: string,
      name: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    backendQueueCommunicationSourceID?: string | null,
    backendQueueCommunicationSource?:  {
      __typename: "BackendQueue",
      id: string,
      name: string,
      url: string,
      usedIn?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiProcessesQueryVariables = {
  filter?: ModelAiProcessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiProcessesQuery = {
  listAiProcesses?:  {
    __typename: "ModelAiProcessConnection",
    items:  Array< {
      __typename: "AiProcess",
      id: string,
      tebeDeleted: boolean,
      name: string,
      taskTypeID: string,
      taskType?:  {
        __typename: "AiTaskTypes",
        id: string,
        types: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiConfigID: string,
      aiConfig?:  {
        __typename: "AiConfiguration",
        id: string,
        name: string,
        aiParametersID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      usedIn?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      communicationSourceType: communicationSourceType,
      frontedWebsocketCommunicationSourceID?: string | null,
      frontedWebsocketCommunicationSource?:  {
        __typename: "AiWebsocket",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendQueueCommunicationSourceID?: string | null,
      backendQueueCommunicationSource?:  {
        __typename: "BackendQueue",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiProcessesByTaskTypeIDAndIdQueryVariables = {
  taskTypeID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiProcessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiProcessesByTaskTypeIDAndIdQuery = {
  aiProcessesByTaskTypeIDAndId?:  {
    __typename: "ModelAiProcessConnection",
    items:  Array< {
      __typename: "AiProcess",
      id: string,
      tebeDeleted: boolean,
      name: string,
      taskTypeID: string,
      taskType?:  {
        __typename: "AiTaskTypes",
        id: string,
        types: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiConfigID: string,
      aiConfig?:  {
        __typename: "AiConfiguration",
        id: string,
        name: string,
        aiParametersID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      usedIn?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      communicationSourceType: communicationSourceType,
      frontedWebsocketCommunicationSourceID?: string | null,
      frontedWebsocketCommunicationSource?:  {
        __typename: "AiWebsocket",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendQueueCommunicationSourceID?: string | null,
      backendQueueCommunicationSource?:  {
        __typename: "BackendQueue",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiProcessesByAiConfigIDAndIdQueryVariables = {
  aiConfigID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiProcessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiProcessesByAiConfigIDAndIdQuery = {
  aiProcessesByAiConfigIDAndId?:  {
    __typename: "ModelAiProcessConnection",
    items:  Array< {
      __typename: "AiProcess",
      id: string,
      tebeDeleted: boolean,
      name: string,
      taskTypeID: string,
      taskType?:  {
        __typename: "AiTaskTypes",
        id: string,
        types: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiConfigID: string,
      aiConfig?:  {
        __typename: "AiConfiguration",
        id: string,
        name: string,
        aiParametersID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      usedIn?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      communicationSourceType: communicationSourceType,
      frontedWebsocketCommunicationSourceID?: string | null,
      frontedWebsocketCommunicationSource?:  {
        __typename: "AiWebsocket",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendQueueCommunicationSourceID?: string | null,
      backendQueueCommunicationSource?:  {
        __typename: "BackendQueue",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiProcessesByFrontedWebsocketCommunicationSourceIDAndIdQueryVariables = {
  frontedWebsocketCommunicationSourceID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiProcessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiProcessesByFrontedWebsocketCommunicationSourceIDAndIdQuery = {
  aiProcessesByFrontedWebsocketCommunicationSourceIDAndId?:  {
    __typename: "ModelAiProcessConnection",
    items:  Array< {
      __typename: "AiProcess",
      id: string,
      tebeDeleted: boolean,
      name: string,
      taskTypeID: string,
      taskType?:  {
        __typename: "AiTaskTypes",
        id: string,
        types: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiConfigID: string,
      aiConfig?:  {
        __typename: "AiConfiguration",
        id: string,
        name: string,
        aiParametersID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      usedIn?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      communicationSourceType: communicationSourceType,
      frontedWebsocketCommunicationSourceID?: string | null,
      frontedWebsocketCommunicationSource?:  {
        __typename: "AiWebsocket",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendQueueCommunicationSourceID?: string | null,
      backendQueueCommunicationSource?:  {
        __typename: "BackendQueue",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiProcessesByBackendQueueCommunicationSourceIDAndIdQueryVariables = {
  backendQueueCommunicationSourceID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiProcessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiProcessesByBackendQueueCommunicationSourceIDAndIdQuery = {
  aiProcessesByBackendQueueCommunicationSourceIDAndId?:  {
    __typename: "ModelAiProcessConnection",
    items:  Array< {
      __typename: "AiProcess",
      id: string,
      tebeDeleted: boolean,
      name: string,
      taskTypeID: string,
      taskType?:  {
        __typename: "AiTaskTypes",
        id: string,
        types: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiConfigID: string,
      aiConfig?:  {
        __typename: "AiConfiguration",
        id: string,
        name: string,
        aiParametersID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      usedIn?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      communicationSourceType: communicationSourceType,
      frontedWebsocketCommunicationSourceID?: string | null,
      frontedWebsocketCommunicationSource?:  {
        __typename: "AiWebsocket",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendQueueCommunicationSourceID?: string | null,
      backendQueueCommunicationSource?:  {
        __typename: "BackendQueue",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiSettingsQueryVariables = {
  id: string,
};

export type GetAiSettingsQuery = {
  getAiSettings?:  {
    __typename: "AiSettings",
    id: string,
    name: string,
    balancerUrl: string,
    processes?:  {
      __typename: "ModelAiProcessAiSettingsConnection",
      items:  Array< {
        __typename: "AiProcessAiSettings",
        id: string,
        aiProcessId: string,
        aiSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiSettingsQueryVariables = {
  filter?: ModelAiSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiSettingsQuery = {
  listAiSettings?:  {
    __typename: "ModelAiSettingsConnection",
    items:  Array< {
      __typename: "AiSettings",
      id: string,
      name: string,
      balancerUrl: string,
      processes?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBackendQueueQueryVariables = {
  id: string,
};

export type GetBackendQueueQuery = {
  getBackendQueue?:  {
    __typename: "BackendQueue",
    id: string,
    name: string,
    url: string,
    usedIn?:  {
      __typename: "ModelBackendQueueBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendQueueBackendSettings",
        id: string,
        backendQueueId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBackendQueuesQueryVariables = {
  filter?: ModelBackendQueueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBackendQueuesQuery = {
  listBackendQueues?:  {
    __typename: "ModelBackendQueueConnection",
    items:  Array< {
      __typename: "BackendQueue",
      id: string,
      name: string,
      url: string,
      usedIn?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBackendTopicQueryVariables = {
  id: string,
};

export type GetBackendTopicQuery = {
  getBackendTopic?:  {
    __typename: "BackendTopic",
    id: string,
    name: string,
    arn: string,
    usedIn?:  {
      __typename: "ModelBackendTopicBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendTopicBackendSettings",
        id: string,
        backendTopicId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBackendTopicsQueryVariables = {
  filter?: ModelBackendTopicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBackendTopicsQuery = {
  listBackendTopics?:  {
    __typename: "ModelBackendTopicConnection",
    items:  Array< {
      __typename: "BackendTopic",
      id: string,
      name: string,
      arn: string,
      usedIn?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBackendDatabaseTypeQueryVariables = {
  id: string,
};

export type GetBackendDatabaseTypeQuery = {
  getBackendDatabaseType?:  {
    __typename: "BackendDatabaseType",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBackendDatabaseTypesQueryVariables = {
  filter?: ModelBackendDatabaseTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBackendDatabaseTypesQuery = {
  listBackendDatabaseTypes?:  {
    __typename: "ModelBackendDatabaseTypeConnection",
    items:  Array< {
      __typename: "BackendDatabaseType",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBackendDatabaseQueryVariables = {
  id: string,
};

export type GetBackendDatabaseQuery = {
  getBackendDatabase?:  {
    __typename: "BackendDatabase",
    id: string,
    name: string,
    backendDatabaseTypeID: string,
    type?:  {
      __typename: "BackendDatabaseType",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    reference: string,
    usedIn?:  {
      __typename: "ModelBackendDatabaseBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendDatabaseBackendSettings",
        id: string,
        backendDatabaseId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBackendDatabasesQueryVariables = {
  filter?: ModelBackendDatabaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBackendDatabasesQuery = {
  listBackendDatabases?:  {
    __typename: "ModelBackendDatabaseConnection",
    items:  Array< {
      __typename: "BackendDatabase",
      id: string,
      name: string,
      backendDatabaseTypeID: string,
      type?:  {
        __typename: "BackendDatabaseType",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      reference: string,
      usedIn?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BackendDatabasesByBackendDatabaseTypeIDAndIdQueryVariables = {
  backendDatabaseTypeID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBackendDatabaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BackendDatabasesByBackendDatabaseTypeIDAndIdQuery = {
  backendDatabasesByBackendDatabaseTypeIDAndId?:  {
    __typename: "ModelBackendDatabaseConnection",
    items:  Array< {
      __typename: "BackendDatabase",
      id: string,
      name: string,
      backendDatabaseTypeID: string,
      type?:  {
        __typename: "BackendDatabaseType",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      reference: string,
      usedIn?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBackendEndpointMethodQueryVariables = {
  id: string,
};

export type GetBackendEndpointMethodQuery = {
  getBackendEndpointMethod?:  {
    __typename: "BackendEndpointMethod",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBackendEndpointMethodsQueryVariables = {
  filter?: ModelBackendEndpointMethodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBackendEndpointMethodsQuery = {
  listBackendEndpointMethods?:  {
    __typename: "ModelBackendEndpointMethodConnection",
    items:  Array< {
      __typename: "BackendEndpointMethod",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBackendEndpointQueryVariables = {
  id: string,
};

export type GetBackendEndpointQuery = {
  getBackendEndpoint?:  {
    __typename: "BackendEndpoint",
    id: string,
    name: string,
    url: string,
    description: string,
    methodID?: string | null,
    method?:  {
      __typename: "BackendEndpointMethod",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parametersWIP?: string | null,
    usedInSettings?:  {
      __typename: "ModelBackendEndpointBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendEndpointBackendSettings",
        id: string,
        backendEndpointId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedInTool?:  {
      __typename: "ModelBackendEndpointAiApiToolConnection",
      items:  Array< {
        __typename: "BackendEndpointAiApiTool",
        id: string,
        aiApiToolId: string,
        backendEndpointId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBackendEndpointsQueryVariables = {
  filter?: ModelBackendEndpointFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBackendEndpointsQuery = {
  listBackendEndpoints?:  {
    __typename: "ModelBackendEndpointConnection",
    items:  Array< {
      __typename: "BackendEndpoint",
      id: string,
      name: string,
      url: string,
      description: string,
      methodID?: string | null,
      method?:  {
        __typename: "BackendEndpointMethod",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      parametersWIP?: string | null,
      usedInSettings?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BackendEndpointsByMethodIDAndIdQueryVariables = {
  methodID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBackendEndpointFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BackendEndpointsByMethodIDAndIdQuery = {
  backendEndpointsByMethodIDAndId?:  {
    __typename: "ModelBackendEndpointConnection",
    items:  Array< {
      __typename: "BackendEndpoint",
      id: string,
      name: string,
      url: string,
      description: string,
      methodID?: string | null,
      method?:  {
        __typename: "BackendEndpointMethod",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      parametersWIP?: string | null,
      usedInSettings?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBackendSettingsQueryVariables = {
  id: string,
};

export type GetBackendSettingsQuery = {
  getBackendSettings?:  {
    __typename: "BackendSettings",
    id: string,
    name: string,
    region: string,
    secretName: string,
    endpoints?:  {
      __typename: "ModelBackendEndpointBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendEndpointBackendSettings",
        id: string,
        backendEndpointId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    databases?:  {
      __typename: "ModelBackendDatabaseBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendDatabaseBackendSettings",
        id: string,
        backendDatabaseId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    queues?:  {
      __typename: "ModelBackendQueueBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendQueueBackendSettings",
        id: string,
        backendQueueId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    topics?:  {
      __typename: "ModelBackendTopicBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendTopicBackendSettings",
        id: string,
        backendTopicId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBackendSettingsQueryVariables = {
  filter?: ModelBackendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBackendSettingsQuery = {
  listBackendSettings?:  {
    __typename: "ModelBackendSettingsConnection",
    items:  Array< {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFrontendComponentQueryVariables = {
  id: string,
};

export type GetFrontendComponentQuery = {
  getFrontendComponent?:  {
    __typename: "FrontendComponent",
    id: string,
    name: string,
    description: string,
    usedInSettings?:  {
      __typename: "ModelFrontendComponentFrontendSettingsConnection",
      items:  Array< {
        __typename: "FrontendComponentFrontendSettings",
        id: string,
        frontendComponentId: string,
        frontendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedInTool?:  {
      __typename: "ModelFrontendComponentAiRenderToolConnection",
      items:  Array< {
        __typename: "FrontendComponentAiRenderTool",
        id: string,
        aiRenderToolId: string,
        frontendComponentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFrontendComponentsQueryVariables = {
  filter?: ModelFrontendComponentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFrontendComponentsQuery = {
  listFrontendComponents?:  {
    __typename: "ModelFrontendComponentConnection",
    items:  Array< {
      __typename: "FrontendComponent",
      id: string,
      name: string,
      description: string,
      usedInSettings?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFrontendSettingsQueryVariables = {
  id: string,
};

export type GetFrontendSettingsQuery = {
  getFrontendSettings?:  {
    __typename: "FrontendSettings",
    id: string,
    name: string,
    domain: string,
    cssS3Url?: string | null,
    components?:  {
      __typename: "ModelFrontendComponentFrontendSettingsConnection",
      items:  Array< {
        __typename: "FrontendComponentFrontendSettings",
        id: string,
        frontendComponentId: string,
        frontendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFrontendSettingsQueryVariables = {
  filter?: ModelFrontendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFrontendSettingsQuery = {
  listFrontendSettings?:  {
    __typename: "ModelFrontendSettingsConnection",
    items:  Array< {
      __typename: "FrontendSettings",
      id: string,
      name: string,
      domain: string,
      cssS3Url?: string | null,
      components?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetApplicationStageCognitoUserPoolQueryVariables = {
  id: string,
};

export type GetApplicationStageCognitoUserPoolQuery = {
  getApplicationStageCognitoUserPool?:  {
    __typename: "ApplicationStageCognitoUserPool",
    id: string,
    name: string,
    userPoolId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListApplicationStageCognitoUserPoolsQueryVariables = {
  filter?: ModelApplicationStageCognitoUserPoolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApplicationStageCognitoUserPoolsQuery = {
  listApplicationStageCognitoUserPools?:  {
    __typename: "ModelApplicationStageCognitoUserPoolConnection",
    items:  Array< {
      __typename: "ApplicationStageCognitoUserPool",
      id: string,
      name: string,
      userPoolId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetApplicationStageQueryVariables = {
  id: string,
};

export type GetApplicationStageQuery = {
  getApplicationStage?:  {
    __typename: "ApplicationStage",
    id: string,
    name: string,
    aiSettingsID: string,
    aiSettings?:  {
      __typename: "AiSettings",
      id: string,
      name: string,
      balancerUrl: string,
      processes?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    backendSettingsID: string,
    backendSettings?:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    frontendSettingsID: string,
    frontendSettings?:  {
      __typename: "FrontendSettings",
      id: string,
      name: string,
      domain: string,
      cssS3Url?: string | null,
      components?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    cognitoUserPoolID: string,
    cognitoUserPool?:  {
      __typename: "ApplicationStageCognitoUserPool",
      id: string,
      name: string,
      userPoolId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListApplicationStagesQueryVariables = {
  filter?: ModelApplicationStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApplicationStagesQuery = {
  listApplicationStages?:  {
    __typename: "ModelApplicationStageConnection",
    items:  Array< {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationStagesByNameQueryVariables = {
  name: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationStagesByNameQuery = {
  applicationStagesByName?:  {
    __typename: "ModelApplicationStageConnection",
    items:  Array< {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationStagesByAiSettingsIDAndIdQueryVariables = {
  aiSettingsID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationStagesByAiSettingsIDAndIdQuery = {
  applicationStagesByAiSettingsIDAndId?:  {
    __typename: "ModelApplicationStageConnection",
    items:  Array< {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationStagesByBackendSettingsIDAndIdQueryVariables = {
  backendSettingsID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationStagesByBackendSettingsIDAndIdQuery = {
  applicationStagesByBackendSettingsIDAndId?:  {
    __typename: "ModelApplicationStageConnection",
    items:  Array< {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationStagesByFrontendSettingsIDAndIdQueryVariables = {
  frontendSettingsID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationStagesByFrontendSettingsIDAndIdQuery = {
  applicationStagesByFrontendSettingsIDAndId?:  {
    __typename: "ModelApplicationStageConnection",
    items:  Array< {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationStagesByCognitoUserPoolIDAndIdQueryVariables = {
  cognitoUserPoolID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationStagesByCognitoUserPoolIDAndIdQuery = {
  applicationStagesByCognitoUserPoolIDAndId?:  {
    __typename: "ModelApplicationStageConnection",
    items:  Array< {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetApplicationAiServerSnapshotReferenceQueryVariables = {
  id: string,
};

export type GetApplicationAiServerSnapshotReferenceQuery = {
  getApplicationAiServerSnapshotReference?:  {
    __typename: "ApplicationAiServerSnapshotReference",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListApplicationAiServerSnapshotReferencesQueryVariables = {
  filter?: ModelApplicationAiServerSnapshotReferenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApplicationAiServerSnapshotReferencesQuery = {
  listApplicationAiServerSnapshotReferences?:  {
    __typename: "ModelApplicationAiServerSnapshotReferenceConnection",
    items:  Array< {
      __typename: "ApplicationAiServerSnapshotReference",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetApplicationQueryVariables = {
  id: string,
};

export type GetApplicationQuery = {
  getApplication?:  {
    __typename: "Application",
    id: string,
    url: string,
    name: string,
    version: string,
    devStageID?: string | null,
    DEV?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    stagingStageID?: string | null,
    STAGING?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    prodStageID?: string | null,
    PROD?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    aiServerSnapshotReferenceID: string,
    aiServerSnapshotReference?:  {
      __typename: "ApplicationAiServerSnapshotReference",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListApplicationsQueryVariables = {
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListApplicationsQuery = {
  listApplications?:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      url: string,
      name: string,
      version: string,
      devStageID?: string | null,
      DEV?:  {
        __typename: "ApplicationStage",
        id: string,
        name: string,
        aiSettingsID: string,
        backendSettingsID: string,
        frontendSettingsID: string,
        cognitoUserPoolID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      stagingStageID?: string | null,
      STAGING?:  {
        __typename: "ApplicationStage",
        id: string,
        name: string,
        aiSettingsID: string,
        backendSettingsID: string,
        frontendSettingsID: string,
        cognitoUserPoolID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      prodStageID?: string | null,
      PROD?:  {
        __typename: "ApplicationStage",
        id: string,
        name: string,
        aiSettingsID: string,
        backendSettingsID: string,
        frontendSettingsID: string,
        cognitoUserPoolID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiServerSnapshotReferenceID: string,
      aiServerSnapshotReference?:  {
        __typename: "ApplicationAiServerSnapshotReference",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationsByDevStageIDAndIdQueryVariables = {
  devStageID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationsByDevStageIDAndIdQuery = {
  applicationsByDevStageIDAndId?:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      url: string,
      name: string,
      version: string,
      devStageID?: string | null,
      DEV?:  {
        __typename: "ApplicationStage",
        id: string,
        name: string,
        aiSettingsID: string,
        backendSettingsID: string,
        frontendSettingsID: string,
        cognitoUserPoolID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      stagingStageID?: string | null,
      STAGING?:  {
        __typename: "ApplicationStage",
        id: string,
        name: string,
        aiSettingsID: string,
        backendSettingsID: string,
        frontendSettingsID: string,
        cognitoUserPoolID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      prodStageID?: string | null,
      PROD?:  {
        __typename: "ApplicationStage",
        id: string,
        name: string,
        aiSettingsID: string,
        backendSettingsID: string,
        frontendSettingsID: string,
        cognitoUserPoolID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiServerSnapshotReferenceID: string,
      aiServerSnapshotReference?:  {
        __typename: "ApplicationAiServerSnapshotReference",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationsByStagingStageIDAndIdQueryVariables = {
  stagingStageID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationsByStagingStageIDAndIdQuery = {
  applicationsByStagingStageIDAndId?:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      url: string,
      name: string,
      version: string,
      devStageID?: string | null,
      DEV?:  {
        __typename: "ApplicationStage",
        id: string,
        name: string,
        aiSettingsID: string,
        backendSettingsID: string,
        frontendSettingsID: string,
        cognitoUserPoolID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      stagingStageID?: string | null,
      STAGING?:  {
        __typename: "ApplicationStage",
        id: string,
        name: string,
        aiSettingsID: string,
        backendSettingsID: string,
        frontendSettingsID: string,
        cognitoUserPoolID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      prodStageID?: string | null,
      PROD?:  {
        __typename: "ApplicationStage",
        id: string,
        name: string,
        aiSettingsID: string,
        backendSettingsID: string,
        frontendSettingsID: string,
        cognitoUserPoolID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiServerSnapshotReferenceID: string,
      aiServerSnapshotReference?:  {
        __typename: "ApplicationAiServerSnapshotReference",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationsByProdStageIDAndIdQueryVariables = {
  prodStageID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationsByProdStageIDAndIdQuery = {
  applicationsByProdStageIDAndId?:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      url: string,
      name: string,
      version: string,
      devStageID?: string | null,
      DEV?:  {
        __typename: "ApplicationStage",
        id: string,
        name: string,
        aiSettingsID: string,
        backendSettingsID: string,
        frontendSettingsID: string,
        cognitoUserPoolID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      stagingStageID?: string | null,
      STAGING?:  {
        __typename: "ApplicationStage",
        id: string,
        name: string,
        aiSettingsID: string,
        backendSettingsID: string,
        frontendSettingsID: string,
        cognitoUserPoolID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      prodStageID?: string | null,
      PROD?:  {
        __typename: "ApplicationStage",
        id: string,
        name: string,
        aiSettingsID: string,
        backendSettingsID: string,
        frontendSettingsID: string,
        cognitoUserPoolID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiServerSnapshotReferenceID: string,
      aiServerSnapshotReference?:  {
        __typename: "ApplicationAiServerSnapshotReference",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ApplicationsByAiServerSnapshotReferenceIDAndIdQueryVariables = {
  aiServerSnapshotReferenceID: string,
  id?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ApplicationsByAiServerSnapshotReferenceIDAndIdQuery = {
  applicationsByAiServerSnapshotReferenceIDAndId?:  {
    __typename: "ModelApplicationConnection",
    items:  Array< {
      __typename: "Application",
      id: string,
      url: string,
      name: string,
      version: string,
      devStageID?: string | null,
      DEV?:  {
        __typename: "ApplicationStage",
        id: string,
        name: string,
        aiSettingsID: string,
        backendSettingsID: string,
        frontendSettingsID: string,
        cognitoUserPoolID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      stagingStageID?: string | null,
      STAGING?:  {
        __typename: "ApplicationStage",
        id: string,
        name: string,
        aiSettingsID: string,
        backendSettingsID: string,
        frontendSettingsID: string,
        cognitoUserPoolID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      prodStageID?: string | null,
      PROD?:  {
        __typename: "ApplicationStage",
        id: string,
        name: string,
        aiSettingsID: string,
        backendSettingsID: string,
        frontendSettingsID: string,
        cognitoUserPoolID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiServerSnapshotReferenceID: string,
      aiServerSnapshotReference?:  {
        __typename: "ApplicationAiServerSnapshotReference",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBackendEndpointAiApiToolQueryVariables = {
  id: string,
};

export type GetBackendEndpointAiApiToolQuery = {
  getBackendEndpointAiApiTool?:  {
    __typename: "BackendEndpointAiApiTool",
    id: string,
    aiApiToolId: string,
    backendEndpointId: string,
    aiApiTool:  {
      __typename: "AiApiTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      endpoint?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendEndpoint:  {
      __typename: "BackendEndpoint",
      id: string,
      name: string,
      url: string,
      description: string,
      methodID?: string | null,
      method?:  {
        __typename: "BackendEndpointMethod",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      parametersWIP?: string | null,
      usedInSettings?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBackendEndpointAiApiToolsQueryVariables = {
  filter?: ModelBackendEndpointAiApiToolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBackendEndpointAiApiToolsQuery = {
  listBackendEndpointAiApiTools?:  {
    __typename: "ModelBackendEndpointAiApiToolConnection",
    items:  Array< {
      __typename: "BackendEndpointAiApiTool",
      id: string,
      aiApiToolId: string,
      backendEndpointId: string,
      aiApiTool:  {
        __typename: "AiApiTool",
        id: string,
        name: string,
        func: string,
        useCases: string,
        description: string,
        payload?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      backendEndpoint:  {
        __typename: "BackendEndpoint",
        id: string,
        name: string,
        url: string,
        description: string,
        methodID?: string | null,
        parametersWIP?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BackendEndpointAiApiToolsByAiApiToolIdQueryVariables = {
  aiApiToolId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBackendEndpointAiApiToolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BackendEndpointAiApiToolsByAiApiToolIdQuery = {
  backendEndpointAiApiToolsByAiApiToolId?:  {
    __typename: "ModelBackendEndpointAiApiToolConnection",
    items:  Array< {
      __typename: "BackendEndpointAiApiTool",
      id: string,
      aiApiToolId: string,
      backendEndpointId: string,
      aiApiTool:  {
        __typename: "AiApiTool",
        id: string,
        name: string,
        func: string,
        useCases: string,
        description: string,
        payload?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      backendEndpoint:  {
        __typename: "BackendEndpoint",
        id: string,
        name: string,
        url: string,
        description: string,
        methodID?: string | null,
        parametersWIP?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BackendEndpointAiApiToolsByBackendEndpointIdQueryVariables = {
  backendEndpointId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBackendEndpointAiApiToolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BackendEndpointAiApiToolsByBackendEndpointIdQuery = {
  backendEndpointAiApiToolsByBackendEndpointId?:  {
    __typename: "ModelBackendEndpointAiApiToolConnection",
    items:  Array< {
      __typename: "BackendEndpointAiApiTool",
      id: string,
      aiApiToolId: string,
      backendEndpointId: string,
      aiApiTool:  {
        __typename: "AiApiTool",
        id: string,
        name: string,
        func: string,
        useCases: string,
        description: string,
        payload?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      backendEndpoint:  {
        __typename: "BackendEndpoint",
        id: string,
        name: string,
        url: string,
        description: string,
        methodID?: string | null,
        parametersWIP?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiApiToolAiToolGroupQueryVariables = {
  id: string,
};

export type GetAiApiToolAiToolGroupQuery = {
  getAiApiToolAiToolGroup?:  {
    __typename: "AiApiToolAiToolGroup",
    id: string,
    aiApiToolId: string,
    aiToolGroupId: string,
    aiApiTool:  {
      __typename: "AiApiTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      endpoint?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiApiToolAiToolGroupsQueryVariables = {
  filter?: ModelAiApiToolAiToolGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiApiToolAiToolGroupsQuery = {
  listAiApiToolAiToolGroups?:  {
    __typename: "ModelAiApiToolAiToolGroupConnection",
    items:  Array< {
      __typename: "AiApiToolAiToolGroup",
      id: string,
      aiApiToolId: string,
      aiToolGroupId: string,
      aiApiTool:  {
        __typename: "AiApiTool",
        id: string,
        name: string,
        func: string,
        useCases: string,
        description: string,
        payload?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      aiToolGroup:  {
        __typename: "AiToolGroup",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiApiToolAiToolGroupsByAiApiToolIdQueryVariables = {
  aiApiToolId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiApiToolAiToolGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiApiToolAiToolGroupsByAiApiToolIdQuery = {
  aiApiToolAiToolGroupsByAiApiToolId?:  {
    __typename: "ModelAiApiToolAiToolGroupConnection",
    items:  Array< {
      __typename: "AiApiToolAiToolGroup",
      id: string,
      aiApiToolId: string,
      aiToolGroupId: string,
      aiApiTool:  {
        __typename: "AiApiTool",
        id: string,
        name: string,
        func: string,
        useCases: string,
        description: string,
        payload?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      aiToolGroup:  {
        __typename: "AiToolGroup",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiApiToolAiToolGroupsByAiToolGroupIdQueryVariables = {
  aiToolGroupId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiApiToolAiToolGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiApiToolAiToolGroupsByAiToolGroupIdQuery = {
  aiApiToolAiToolGroupsByAiToolGroupId?:  {
    __typename: "ModelAiApiToolAiToolGroupConnection",
    items:  Array< {
      __typename: "AiApiToolAiToolGroup",
      id: string,
      aiApiToolId: string,
      aiToolGroupId: string,
      aiApiTool:  {
        __typename: "AiApiTool",
        id: string,
        name: string,
        func: string,
        useCases: string,
        description: string,
        payload?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      aiToolGroup:  {
        __typename: "AiToolGroup",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFrontendComponentAiRenderToolQueryVariables = {
  id: string,
};

export type GetFrontendComponentAiRenderToolQuery = {
  getFrontendComponentAiRenderTool?:  {
    __typename: "FrontendComponentAiRenderTool",
    id: string,
    aiRenderToolId: string,
    frontendComponentId: string,
    aiRenderTool:  {
      __typename: "AiRenderTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      action: string,
      component?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    frontendComponent:  {
      __typename: "FrontendComponent",
      id: string,
      name: string,
      description: string,
      usedInSettings?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFrontendComponentAiRenderToolsQueryVariables = {
  filter?: ModelFrontendComponentAiRenderToolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFrontendComponentAiRenderToolsQuery = {
  listFrontendComponentAiRenderTools?:  {
    __typename: "ModelFrontendComponentAiRenderToolConnection",
    items:  Array< {
      __typename: "FrontendComponentAiRenderTool",
      id: string,
      aiRenderToolId: string,
      frontendComponentId: string,
      aiRenderTool:  {
        __typename: "AiRenderTool",
        id: string,
        name: string,
        func: string,
        useCases: string,
        description: string,
        payload?: string | null,
        action: string,
        createdAt: string,
        updatedAt: string,
      },
      frontendComponent:  {
        __typename: "FrontendComponent",
        id: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FrontendComponentAiRenderToolsByAiRenderToolIdQueryVariables = {
  aiRenderToolId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFrontendComponentAiRenderToolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FrontendComponentAiRenderToolsByAiRenderToolIdQuery = {
  frontendComponentAiRenderToolsByAiRenderToolId?:  {
    __typename: "ModelFrontendComponentAiRenderToolConnection",
    items:  Array< {
      __typename: "FrontendComponentAiRenderTool",
      id: string,
      aiRenderToolId: string,
      frontendComponentId: string,
      aiRenderTool:  {
        __typename: "AiRenderTool",
        id: string,
        name: string,
        func: string,
        useCases: string,
        description: string,
        payload?: string | null,
        action: string,
        createdAt: string,
        updatedAt: string,
      },
      frontendComponent:  {
        __typename: "FrontendComponent",
        id: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FrontendComponentAiRenderToolsByFrontendComponentIdQueryVariables = {
  frontendComponentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFrontendComponentAiRenderToolFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FrontendComponentAiRenderToolsByFrontendComponentIdQuery = {
  frontendComponentAiRenderToolsByFrontendComponentId?:  {
    __typename: "ModelFrontendComponentAiRenderToolConnection",
    items:  Array< {
      __typename: "FrontendComponentAiRenderTool",
      id: string,
      aiRenderToolId: string,
      frontendComponentId: string,
      aiRenderTool:  {
        __typename: "AiRenderTool",
        id: string,
        name: string,
        func: string,
        useCases: string,
        description: string,
        payload?: string | null,
        action: string,
        createdAt: string,
        updatedAt: string,
      },
      frontendComponent:  {
        __typename: "FrontendComponent",
        id: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiRenderToolAiToolGroupQueryVariables = {
  id: string,
};

export type GetAiRenderToolAiToolGroupQuery = {
  getAiRenderToolAiToolGroup?:  {
    __typename: "AiRenderToolAiToolGroup",
    id: string,
    aiRenderToolId: string,
    aiToolGroupId: string,
    aiRenderTool:  {
      __typename: "AiRenderTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      action: string,
      component?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiRenderToolAiToolGroupsQueryVariables = {
  filter?: ModelAiRenderToolAiToolGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiRenderToolAiToolGroupsQuery = {
  listAiRenderToolAiToolGroups?:  {
    __typename: "ModelAiRenderToolAiToolGroupConnection",
    items:  Array< {
      __typename: "AiRenderToolAiToolGroup",
      id: string,
      aiRenderToolId: string,
      aiToolGroupId: string,
      aiRenderTool:  {
        __typename: "AiRenderTool",
        id: string,
        name: string,
        func: string,
        useCases: string,
        description: string,
        payload?: string | null,
        action: string,
        createdAt: string,
        updatedAt: string,
      },
      aiToolGroup:  {
        __typename: "AiToolGroup",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiRenderToolAiToolGroupsByAiRenderToolIdQueryVariables = {
  aiRenderToolId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiRenderToolAiToolGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiRenderToolAiToolGroupsByAiRenderToolIdQuery = {
  aiRenderToolAiToolGroupsByAiRenderToolId?:  {
    __typename: "ModelAiRenderToolAiToolGroupConnection",
    items:  Array< {
      __typename: "AiRenderToolAiToolGroup",
      id: string,
      aiRenderToolId: string,
      aiToolGroupId: string,
      aiRenderTool:  {
        __typename: "AiRenderTool",
        id: string,
        name: string,
        func: string,
        useCases: string,
        description: string,
        payload?: string | null,
        action: string,
        createdAt: string,
        updatedAt: string,
      },
      aiToolGroup:  {
        __typename: "AiToolGroup",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiRenderToolAiToolGroupsByAiToolGroupIdQueryVariables = {
  aiToolGroupId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiRenderToolAiToolGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiRenderToolAiToolGroupsByAiToolGroupIdQuery = {
  aiRenderToolAiToolGroupsByAiToolGroupId?:  {
    __typename: "ModelAiRenderToolAiToolGroupConnection",
    items:  Array< {
      __typename: "AiRenderToolAiToolGroup",
      id: string,
      aiRenderToolId: string,
      aiToolGroupId: string,
      aiRenderTool:  {
        __typename: "AiRenderTool",
        id: string,
        name: string,
        func: string,
        useCases: string,
        description: string,
        payload?: string | null,
        action: string,
        createdAt: string,
        updatedAt: string,
      },
      aiToolGroup:  {
        __typename: "AiToolGroup",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiToolGroupAiConfigurationQueryVariables = {
  id: string,
};

export type GetAiToolGroupAiConfigurationQuery = {
  getAiToolGroupAiConfiguration?:  {
    __typename: "AiToolGroupAiConfiguration",
    id: string,
    aiToolGroupId: string,
    aiConfigurationId: string,
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiConfiguration:  {
      __typename: "AiConfiguration",
      id: string,
      name: string,
      aiParametersID: string,
      aiParameters?:  {
        __typename: "AiParameters",
        id: string,
        name: string,
        role: string,
        companyID: string,
        conversationPurpose: string,
        conversationType: string,
        prePrompt: string,
        postPrompt: string,
        llmID: string,
        chatMemory: number,
        responseTemperature: number,
        responseLanguage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tools?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiToolGroupAiConfigurationsQueryVariables = {
  filter?: ModelAiToolGroupAiConfigurationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiToolGroupAiConfigurationsQuery = {
  listAiToolGroupAiConfigurations?:  {
    __typename: "ModelAiToolGroupAiConfigurationConnection",
    items:  Array< {
      __typename: "AiToolGroupAiConfiguration",
      id: string,
      aiToolGroupId: string,
      aiConfigurationId: string,
      aiToolGroup:  {
        __typename: "AiToolGroup",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      aiConfiguration:  {
        __typename: "AiConfiguration",
        id: string,
        name: string,
        aiParametersID: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiToolGroupAiConfigurationsByAiToolGroupIdQueryVariables = {
  aiToolGroupId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiToolGroupAiConfigurationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiToolGroupAiConfigurationsByAiToolGroupIdQuery = {
  aiToolGroupAiConfigurationsByAiToolGroupId?:  {
    __typename: "ModelAiToolGroupAiConfigurationConnection",
    items:  Array< {
      __typename: "AiToolGroupAiConfiguration",
      id: string,
      aiToolGroupId: string,
      aiConfigurationId: string,
      aiToolGroup:  {
        __typename: "AiToolGroup",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      aiConfiguration:  {
        __typename: "AiConfiguration",
        id: string,
        name: string,
        aiParametersID: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiToolGroupAiConfigurationsByAiConfigurationIdQueryVariables = {
  aiConfigurationId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiToolGroupAiConfigurationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiToolGroupAiConfigurationsByAiConfigurationIdQuery = {
  aiToolGroupAiConfigurationsByAiConfigurationId?:  {
    __typename: "ModelAiToolGroupAiConfigurationConnection",
    items:  Array< {
      __typename: "AiToolGroupAiConfiguration",
      id: string,
      aiToolGroupId: string,
      aiConfigurationId: string,
      aiToolGroup:  {
        __typename: "AiToolGroup",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      aiConfiguration:  {
        __typename: "AiConfiguration",
        id: string,
        name: string,
        aiParametersID: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAiProcessAiSettingsQueryVariables = {
  id: string,
};

export type GetAiProcessAiSettingsQuery = {
  getAiProcessAiSettings?:  {
    __typename: "AiProcessAiSettings",
    id: string,
    aiProcessId: string,
    aiSettingsId: string,
    aiProcess:  {
      __typename: "AiProcess",
      id: string,
      tebeDeleted: boolean,
      name: string,
      taskTypeID: string,
      taskType?:  {
        __typename: "AiTaskTypes",
        id: string,
        types: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiConfigID: string,
      aiConfig?:  {
        __typename: "AiConfiguration",
        id: string,
        name: string,
        aiParametersID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      usedIn?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      communicationSourceType: communicationSourceType,
      frontedWebsocketCommunicationSourceID?: string | null,
      frontedWebsocketCommunicationSource?:  {
        __typename: "AiWebsocket",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendQueueCommunicationSourceID?: string | null,
      backendQueueCommunicationSource?:  {
        __typename: "BackendQueue",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiSettings:  {
      __typename: "AiSettings",
      id: string,
      name: string,
      balancerUrl: string,
      processes?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAiProcessAiSettingsQueryVariables = {
  filter?: ModelAiProcessAiSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAiProcessAiSettingsQuery = {
  listAiProcessAiSettings?:  {
    __typename: "ModelAiProcessAiSettingsConnection",
    items:  Array< {
      __typename: "AiProcessAiSettings",
      id: string,
      aiProcessId: string,
      aiSettingsId: string,
      aiProcess:  {
        __typename: "AiProcess",
        id: string,
        tebeDeleted: boolean,
        name: string,
        taskTypeID: string,
        aiConfigID: string,
        communicationSourceType: communicationSourceType,
        frontedWebsocketCommunicationSourceID?: string | null,
        backendQueueCommunicationSourceID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      aiSettings:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiProcessAiSettingsByAiProcessIdQueryVariables = {
  aiProcessId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiProcessAiSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiProcessAiSettingsByAiProcessIdQuery = {
  aiProcessAiSettingsByAiProcessId?:  {
    __typename: "ModelAiProcessAiSettingsConnection",
    items:  Array< {
      __typename: "AiProcessAiSettings",
      id: string,
      aiProcessId: string,
      aiSettingsId: string,
      aiProcess:  {
        __typename: "AiProcess",
        id: string,
        tebeDeleted: boolean,
        name: string,
        taskTypeID: string,
        aiConfigID: string,
        communicationSourceType: communicationSourceType,
        frontedWebsocketCommunicationSourceID?: string | null,
        backendQueueCommunicationSourceID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      aiSettings:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AiProcessAiSettingsByAiSettingsIdQueryVariables = {
  aiSettingsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAiProcessAiSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AiProcessAiSettingsByAiSettingsIdQuery = {
  aiProcessAiSettingsByAiSettingsId?:  {
    __typename: "ModelAiProcessAiSettingsConnection",
    items:  Array< {
      __typename: "AiProcessAiSettings",
      id: string,
      aiProcessId: string,
      aiSettingsId: string,
      aiProcess:  {
        __typename: "AiProcess",
        id: string,
        tebeDeleted: boolean,
        name: string,
        taskTypeID: string,
        aiConfigID: string,
        communicationSourceType: communicationSourceType,
        frontedWebsocketCommunicationSourceID?: string | null,
        backendQueueCommunicationSourceID?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      aiSettings:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBackendQueueBackendSettingsQueryVariables = {
  id: string,
};

export type GetBackendQueueBackendSettingsQuery = {
  getBackendQueueBackendSettings?:  {
    __typename: "BackendQueueBackendSettings",
    id: string,
    backendQueueId: string,
    backendSettingsId: string,
    backendQueue:  {
      __typename: "BackendQueue",
      id: string,
      name: string,
      url: string,
      usedIn?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBackendQueueBackendSettingsQueryVariables = {
  filter?: ModelBackendQueueBackendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBackendQueueBackendSettingsQuery = {
  listBackendQueueBackendSettings?:  {
    __typename: "ModelBackendQueueBackendSettingsConnection",
    items:  Array< {
      __typename: "BackendQueueBackendSettings",
      id: string,
      backendQueueId: string,
      backendSettingsId: string,
      backendQueue:  {
        __typename: "BackendQueue",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      },
      backendSettings:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BackendQueueBackendSettingsByBackendQueueIdQueryVariables = {
  backendQueueId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBackendQueueBackendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BackendQueueBackendSettingsByBackendQueueIdQuery = {
  backendQueueBackendSettingsByBackendQueueId?:  {
    __typename: "ModelBackendQueueBackendSettingsConnection",
    items:  Array< {
      __typename: "BackendQueueBackendSettings",
      id: string,
      backendQueueId: string,
      backendSettingsId: string,
      backendQueue:  {
        __typename: "BackendQueue",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      },
      backendSettings:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BackendQueueBackendSettingsByBackendSettingsIdQueryVariables = {
  backendSettingsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBackendQueueBackendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BackendQueueBackendSettingsByBackendSettingsIdQuery = {
  backendQueueBackendSettingsByBackendSettingsId?:  {
    __typename: "ModelBackendQueueBackendSettingsConnection",
    items:  Array< {
      __typename: "BackendQueueBackendSettings",
      id: string,
      backendQueueId: string,
      backendSettingsId: string,
      backendQueue:  {
        __typename: "BackendQueue",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      },
      backendSettings:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBackendTopicBackendSettingsQueryVariables = {
  id: string,
};

export type GetBackendTopicBackendSettingsQuery = {
  getBackendTopicBackendSettings?:  {
    __typename: "BackendTopicBackendSettings",
    id: string,
    backendTopicId: string,
    backendSettingsId: string,
    backendTopic:  {
      __typename: "BackendTopic",
      id: string,
      name: string,
      arn: string,
      usedIn?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBackendTopicBackendSettingsQueryVariables = {
  filter?: ModelBackendTopicBackendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBackendTopicBackendSettingsQuery = {
  listBackendTopicBackendSettings?:  {
    __typename: "ModelBackendTopicBackendSettingsConnection",
    items:  Array< {
      __typename: "BackendTopicBackendSettings",
      id: string,
      backendTopicId: string,
      backendSettingsId: string,
      backendTopic:  {
        __typename: "BackendTopic",
        id: string,
        name: string,
        arn: string,
        createdAt: string,
        updatedAt: string,
      },
      backendSettings:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BackendTopicBackendSettingsByBackendTopicIdQueryVariables = {
  backendTopicId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBackendTopicBackendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BackendTopicBackendSettingsByBackendTopicIdQuery = {
  backendTopicBackendSettingsByBackendTopicId?:  {
    __typename: "ModelBackendTopicBackendSettingsConnection",
    items:  Array< {
      __typename: "BackendTopicBackendSettings",
      id: string,
      backendTopicId: string,
      backendSettingsId: string,
      backendTopic:  {
        __typename: "BackendTopic",
        id: string,
        name: string,
        arn: string,
        createdAt: string,
        updatedAt: string,
      },
      backendSettings:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BackendTopicBackendSettingsByBackendSettingsIdQueryVariables = {
  backendSettingsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBackendTopicBackendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BackendTopicBackendSettingsByBackendSettingsIdQuery = {
  backendTopicBackendSettingsByBackendSettingsId?:  {
    __typename: "ModelBackendTopicBackendSettingsConnection",
    items:  Array< {
      __typename: "BackendTopicBackendSettings",
      id: string,
      backendTopicId: string,
      backendSettingsId: string,
      backendTopic:  {
        __typename: "BackendTopic",
        id: string,
        name: string,
        arn: string,
        createdAt: string,
        updatedAt: string,
      },
      backendSettings:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBackendDatabaseBackendSettingsQueryVariables = {
  id: string,
};

export type GetBackendDatabaseBackendSettingsQuery = {
  getBackendDatabaseBackendSettings?:  {
    __typename: "BackendDatabaseBackendSettings",
    id: string,
    backendDatabaseId: string,
    backendSettingsId: string,
    backendDatabase:  {
      __typename: "BackendDatabase",
      id: string,
      name: string,
      backendDatabaseTypeID: string,
      type?:  {
        __typename: "BackendDatabaseType",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      reference: string,
      usedIn?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBackendDatabaseBackendSettingsQueryVariables = {
  filter?: ModelBackendDatabaseBackendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBackendDatabaseBackendSettingsQuery = {
  listBackendDatabaseBackendSettings?:  {
    __typename: "ModelBackendDatabaseBackendSettingsConnection",
    items:  Array< {
      __typename: "BackendDatabaseBackendSettings",
      id: string,
      backendDatabaseId: string,
      backendSettingsId: string,
      backendDatabase:  {
        __typename: "BackendDatabase",
        id: string,
        name: string,
        backendDatabaseTypeID: string,
        reference: string,
        createdAt: string,
        updatedAt: string,
      },
      backendSettings:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BackendDatabaseBackendSettingsByBackendDatabaseIdQueryVariables = {
  backendDatabaseId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBackendDatabaseBackendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BackendDatabaseBackendSettingsByBackendDatabaseIdQuery = {
  backendDatabaseBackendSettingsByBackendDatabaseId?:  {
    __typename: "ModelBackendDatabaseBackendSettingsConnection",
    items:  Array< {
      __typename: "BackendDatabaseBackendSettings",
      id: string,
      backendDatabaseId: string,
      backendSettingsId: string,
      backendDatabase:  {
        __typename: "BackendDatabase",
        id: string,
        name: string,
        backendDatabaseTypeID: string,
        reference: string,
        createdAt: string,
        updatedAt: string,
      },
      backendSettings:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BackendDatabaseBackendSettingsByBackendSettingsIdQueryVariables = {
  backendSettingsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBackendDatabaseBackendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BackendDatabaseBackendSettingsByBackendSettingsIdQuery = {
  backendDatabaseBackendSettingsByBackendSettingsId?:  {
    __typename: "ModelBackendDatabaseBackendSettingsConnection",
    items:  Array< {
      __typename: "BackendDatabaseBackendSettings",
      id: string,
      backendDatabaseId: string,
      backendSettingsId: string,
      backendDatabase:  {
        __typename: "BackendDatabase",
        id: string,
        name: string,
        backendDatabaseTypeID: string,
        reference: string,
        createdAt: string,
        updatedAt: string,
      },
      backendSettings:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBackendEndpointBackendSettingsQueryVariables = {
  id: string,
};

export type GetBackendEndpointBackendSettingsQuery = {
  getBackendEndpointBackendSettings?:  {
    __typename: "BackendEndpointBackendSettings",
    id: string,
    backendEndpointId: string,
    backendSettingsId: string,
    backendEndpoint:  {
      __typename: "BackendEndpoint",
      id: string,
      name: string,
      url: string,
      description: string,
      methodID?: string | null,
      method?:  {
        __typename: "BackendEndpointMethod",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      parametersWIP?: string | null,
      usedInSettings?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBackendEndpointBackendSettingsQueryVariables = {
  filter?: ModelBackendEndpointBackendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBackendEndpointBackendSettingsQuery = {
  listBackendEndpointBackendSettings?:  {
    __typename: "ModelBackendEndpointBackendSettingsConnection",
    items:  Array< {
      __typename: "BackendEndpointBackendSettings",
      id: string,
      backendEndpointId: string,
      backendSettingsId: string,
      backendEndpoint:  {
        __typename: "BackendEndpoint",
        id: string,
        name: string,
        url: string,
        description: string,
        methodID?: string | null,
        parametersWIP?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      backendSettings:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BackendEndpointBackendSettingsByBackendEndpointIdQueryVariables = {
  backendEndpointId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBackendEndpointBackendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BackendEndpointBackendSettingsByBackendEndpointIdQuery = {
  backendEndpointBackendSettingsByBackendEndpointId?:  {
    __typename: "ModelBackendEndpointBackendSettingsConnection",
    items:  Array< {
      __typename: "BackendEndpointBackendSettings",
      id: string,
      backendEndpointId: string,
      backendSettingsId: string,
      backendEndpoint:  {
        __typename: "BackendEndpoint",
        id: string,
        name: string,
        url: string,
        description: string,
        methodID?: string | null,
        parametersWIP?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      backendSettings:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BackendEndpointBackendSettingsByBackendSettingsIdQueryVariables = {
  backendSettingsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBackendEndpointBackendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BackendEndpointBackendSettingsByBackendSettingsIdQuery = {
  backendEndpointBackendSettingsByBackendSettingsId?:  {
    __typename: "ModelBackendEndpointBackendSettingsConnection",
    items:  Array< {
      __typename: "BackendEndpointBackendSettings",
      id: string,
      backendEndpointId: string,
      backendSettingsId: string,
      backendEndpoint:  {
        __typename: "BackendEndpoint",
        id: string,
        name: string,
        url: string,
        description: string,
        methodID?: string | null,
        parametersWIP?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      backendSettings:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFrontendComponentFrontendSettingsQueryVariables = {
  id: string,
};

export type GetFrontendComponentFrontendSettingsQuery = {
  getFrontendComponentFrontendSettings?:  {
    __typename: "FrontendComponentFrontendSettings",
    id: string,
    frontendComponentId: string,
    frontendSettingsId: string,
    frontendComponent:  {
      __typename: "FrontendComponent",
      id: string,
      name: string,
      description: string,
      usedInSettings?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    frontendSettings:  {
      __typename: "FrontendSettings",
      id: string,
      name: string,
      domain: string,
      cssS3Url?: string | null,
      components?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFrontendComponentFrontendSettingsQueryVariables = {
  filter?: ModelFrontendComponentFrontendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFrontendComponentFrontendSettingsQuery = {
  listFrontendComponentFrontendSettings?:  {
    __typename: "ModelFrontendComponentFrontendSettingsConnection",
    items:  Array< {
      __typename: "FrontendComponentFrontendSettings",
      id: string,
      frontendComponentId: string,
      frontendSettingsId: string,
      frontendComponent:  {
        __typename: "FrontendComponent",
        id: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      },
      frontendSettings:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FrontendComponentFrontendSettingsByFrontendComponentIdQueryVariables = {
  frontendComponentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFrontendComponentFrontendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FrontendComponentFrontendSettingsByFrontendComponentIdQuery = {
  frontendComponentFrontendSettingsByFrontendComponentId?:  {
    __typename: "ModelFrontendComponentFrontendSettingsConnection",
    items:  Array< {
      __typename: "FrontendComponentFrontendSettings",
      id: string,
      frontendComponentId: string,
      frontendSettingsId: string,
      frontendComponent:  {
        __typename: "FrontendComponent",
        id: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      },
      frontendSettings:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FrontendComponentFrontendSettingsByFrontendSettingsIdQueryVariables = {
  frontendSettingsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFrontendComponentFrontendSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FrontendComponentFrontendSettingsByFrontendSettingsIdQuery = {
  frontendComponentFrontendSettingsByFrontendSettingsId?:  {
    __typename: "ModelFrontendComponentFrontendSettingsConnection",
    items:  Array< {
      __typename: "FrontendComponentFrontendSettings",
      id: string,
      frontendComponentId: string,
      frontendSettingsId: string,
      frontendComponent:  {
        __typename: "FrontendComponent",
        id: string,
        name: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      },
      frontendSettings:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAiClientCompanySubscriptionVariables = {
  filter?: ModelSubscriptionAiClientCompanyFilterInput | null,
};

export type OnCreateAiClientCompanySubscription = {
  onCreateAiClientCompany?:  {
    __typename: "AiClientCompany",
    id: string,
    name: string,
    business: string,
    values: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiClientCompanySubscriptionVariables = {
  filter?: ModelSubscriptionAiClientCompanyFilterInput | null,
};

export type OnUpdateAiClientCompanySubscription = {
  onUpdateAiClientCompany?:  {
    __typename: "AiClientCompany",
    id: string,
    name: string,
    business: string,
    values: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiClientCompanySubscriptionVariables = {
  filter?: ModelSubscriptionAiClientCompanyFilterInput | null,
};

export type OnDeleteAiClientCompanySubscription = {
  onDeleteAiClientCompany?:  {
    __typename: "AiClientCompany",
    id: string,
    name: string,
    business: string,
    values: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiLlmSubscriptionVariables = {
  filter?: ModelSubscriptionAiLlmFilterInput | null,
};

export type OnCreateAiLlmSubscription = {
  onCreateAiLlm?:  {
    __typename: "AiLlm",
    id: string,
    name: string,
    input: Array< string >,
    output: Array< string >,
    description: string,
    available: boolean,
    maxTokens?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiLlmSubscriptionVariables = {
  filter?: ModelSubscriptionAiLlmFilterInput | null,
};

export type OnUpdateAiLlmSubscription = {
  onUpdateAiLlm?:  {
    __typename: "AiLlm",
    id: string,
    name: string,
    input: Array< string >,
    output: Array< string >,
    description: string,
    available: boolean,
    maxTokens?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiLlmSubscriptionVariables = {
  filter?: ModelSubscriptionAiLlmFilterInput | null,
};

export type OnDeleteAiLlmSubscription = {
  onDeleteAiLlm?:  {
    __typename: "AiLlm",
    id: string,
    name: string,
    input: Array< string >,
    output: Array< string >,
    description: string,
    available: boolean,
    maxTokens?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiVectorialDbConfigSubscriptionVariables = {
  filter?: ModelSubscriptionAiVectorialDbConfigFilterInput | null,
};

export type OnCreateAiVectorialDbConfigSubscription = {
  onCreateAiVectorialDbConfig?:  {
    __typename: "AiVectorialDbConfig",
    id: string,
    name: string,
    apiKey: string,
    indexName: string,
    nameSpace: string,
    score: number,
    numberOfSimilarities: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiVectorialDbConfigSubscriptionVariables = {
  filter?: ModelSubscriptionAiVectorialDbConfigFilterInput | null,
};

export type OnUpdateAiVectorialDbConfigSubscription = {
  onUpdateAiVectorialDbConfig?:  {
    __typename: "AiVectorialDbConfig",
    id: string,
    name: string,
    apiKey: string,
    indexName: string,
    nameSpace: string,
    score: number,
    numberOfSimilarities: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiVectorialDbConfigSubscriptionVariables = {
  filter?: ModelSubscriptionAiVectorialDbConfigFilterInput | null,
};

export type OnDeleteAiVectorialDbConfigSubscription = {
  onDeleteAiVectorialDbConfig?:  {
    __typename: "AiVectorialDbConfig",
    id: string,
    name: string,
    apiKey: string,
    indexName: string,
    nameSpace: string,
    score: number,
    numberOfSimilarities: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiVectorizerParametersSubscriptionVariables = {
  filter?: ModelSubscriptionAiVectorizerParametersFilterInput | null,
};

export type OnCreateAiVectorizerParametersSubscription = {
  onCreateAiVectorizerParameters?:  {
    __typename: "AiVectorizerParameters",
    id: string,
    name: string,
    aiLlmID: string,
    aiLlm?:  {
      __typename: "AiLlm",
      id: string,
      name: string,
      input: Array< string >,
      output: Array< string >,
      description: string,
      available: boolean,
      maxTokens?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chunkSize: number,
    chunkOverlap: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiVectorizerParametersSubscriptionVariables = {
  filter?: ModelSubscriptionAiVectorizerParametersFilterInput | null,
};

export type OnUpdateAiVectorizerParametersSubscription = {
  onUpdateAiVectorizerParameters?:  {
    __typename: "AiVectorizerParameters",
    id: string,
    name: string,
    aiLlmID: string,
    aiLlm?:  {
      __typename: "AiLlm",
      id: string,
      name: string,
      input: Array< string >,
      output: Array< string >,
      description: string,
      available: boolean,
      maxTokens?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chunkSize: number,
    chunkOverlap: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiVectorizerParametersSubscriptionVariables = {
  filter?: ModelSubscriptionAiVectorizerParametersFilterInput | null,
};

export type OnDeleteAiVectorizerParametersSubscription = {
  onDeleteAiVectorizerParameters?:  {
    __typename: "AiVectorizerParameters",
    id: string,
    name: string,
    aiLlmID: string,
    aiLlm?:  {
      __typename: "AiLlm",
      id: string,
      name: string,
      input: Array< string >,
      output: Array< string >,
      description: string,
      available: boolean,
      maxTokens?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chunkSize: number,
    chunkOverlap: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiParametersSubscriptionVariables = {
  filter?: ModelSubscriptionAiParametersFilterInput | null,
};

export type OnCreateAiParametersSubscription = {
  onCreateAiParameters?:  {
    __typename: "AiParameters",
    id: string,
    name: string,
    role: string,
    companyID: string,
    company?:  {
      __typename: "AiClientCompany",
      id: string,
      name: string,
      business: string,
      values: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversationPurpose: string,
    conversationType: string,
    prePrompt: string,
    postPrompt: string,
    llmID: string,
    llm?:  {
      __typename: "AiLlm",
      id: string,
      name: string,
      input: Array< string >,
      output: Array< string >,
      description: string,
      available: boolean,
      maxTokens?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatMemory: number,
    responseTemperature: number,
    responseLanguage: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiParametersSubscriptionVariables = {
  filter?: ModelSubscriptionAiParametersFilterInput | null,
};

export type OnUpdateAiParametersSubscription = {
  onUpdateAiParameters?:  {
    __typename: "AiParameters",
    id: string,
    name: string,
    role: string,
    companyID: string,
    company?:  {
      __typename: "AiClientCompany",
      id: string,
      name: string,
      business: string,
      values: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversationPurpose: string,
    conversationType: string,
    prePrompt: string,
    postPrompt: string,
    llmID: string,
    llm?:  {
      __typename: "AiLlm",
      id: string,
      name: string,
      input: Array< string >,
      output: Array< string >,
      description: string,
      available: boolean,
      maxTokens?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatMemory: number,
    responseTemperature: number,
    responseLanguage: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiParametersSubscriptionVariables = {
  filter?: ModelSubscriptionAiParametersFilterInput | null,
};

export type OnDeleteAiParametersSubscription = {
  onDeleteAiParameters?:  {
    __typename: "AiParameters",
    id: string,
    name: string,
    role: string,
    companyID: string,
    company?:  {
      __typename: "AiClientCompany",
      id: string,
      name: string,
      business: string,
      values: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    conversationPurpose: string,
    conversationType: string,
    prePrompt: string,
    postPrompt: string,
    llmID: string,
    llm?:  {
      __typename: "AiLlm",
      id: string,
      name: string,
      input: Array< string >,
      output: Array< string >,
      description: string,
      available: boolean,
      maxTokens?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatMemory: number,
    responseTemperature: number,
    responseLanguage: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiApiToolSubscriptionVariables = {
  filter?: ModelSubscriptionAiApiToolFilterInput | null,
};

export type OnCreateAiApiToolSubscription = {
  onCreateAiApiTool?:  {
    __typename: "AiApiTool",
    id: string,
    name: string,
    func: string,
    useCases: string,
    description: string,
    payload?: string | null,
    endpoint?:  {
      __typename: "ModelBackendEndpointAiApiToolConnection",
      items:  Array< {
        __typename: "BackendEndpointAiApiTool",
        id: string,
        aiApiToolId: string,
        backendEndpointId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiApiToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiApiToolAiToolGroup",
        id: string,
        aiApiToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiApiToolSubscriptionVariables = {
  filter?: ModelSubscriptionAiApiToolFilterInput | null,
};

export type OnUpdateAiApiToolSubscription = {
  onUpdateAiApiTool?:  {
    __typename: "AiApiTool",
    id: string,
    name: string,
    func: string,
    useCases: string,
    description: string,
    payload?: string | null,
    endpoint?:  {
      __typename: "ModelBackendEndpointAiApiToolConnection",
      items:  Array< {
        __typename: "BackendEndpointAiApiTool",
        id: string,
        aiApiToolId: string,
        backendEndpointId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiApiToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiApiToolAiToolGroup",
        id: string,
        aiApiToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiApiToolSubscriptionVariables = {
  filter?: ModelSubscriptionAiApiToolFilterInput | null,
};

export type OnDeleteAiApiToolSubscription = {
  onDeleteAiApiTool?:  {
    __typename: "AiApiTool",
    id: string,
    name: string,
    func: string,
    useCases: string,
    description: string,
    payload?: string | null,
    endpoint?:  {
      __typename: "ModelBackendEndpointAiApiToolConnection",
      items:  Array< {
        __typename: "BackendEndpointAiApiTool",
        id: string,
        aiApiToolId: string,
        backendEndpointId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiApiToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiApiToolAiToolGroup",
        id: string,
        aiApiToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiRenderToolSubscriptionVariables = {
  filter?: ModelSubscriptionAiRenderToolFilterInput | null,
};

export type OnCreateAiRenderToolSubscription = {
  onCreateAiRenderTool?:  {
    __typename: "AiRenderTool",
    id: string,
    name: string,
    func: string,
    useCases: string,
    description: string,
    payload?: string | null,
    action: string,
    component?:  {
      __typename: "ModelFrontendComponentAiRenderToolConnection",
      items:  Array< {
        __typename: "FrontendComponentAiRenderTool",
        id: string,
        aiRenderToolId: string,
        frontendComponentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiRenderToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiRenderToolAiToolGroup",
        id: string,
        aiRenderToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiRenderToolSubscriptionVariables = {
  filter?: ModelSubscriptionAiRenderToolFilterInput | null,
};

export type OnUpdateAiRenderToolSubscription = {
  onUpdateAiRenderTool?:  {
    __typename: "AiRenderTool",
    id: string,
    name: string,
    func: string,
    useCases: string,
    description: string,
    payload?: string | null,
    action: string,
    component?:  {
      __typename: "ModelFrontendComponentAiRenderToolConnection",
      items:  Array< {
        __typename: "FrontendComponentAiRenderTool",
        id: string,
        aiRenderToolId: string,
        frontendComponentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiRenderToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiRenderToolAiToolGroup",
        id: string,
        aiRenderToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiRenderToolSubscriptionVariables = {
  filter?: ModelSubscriptionAiRenderToolFilterInput | null,
};

export type OnDeleteAiRenderToolSubscription = {
  onDeleteAiRenderTool?:  {
    __typename: "AiRenderTool",
    id: string,
    name: string,
    func: string,
    useCases: string,
    description: string,
    payload?: string | null,
    action: string,
    component?:  {
      __typename: "ModelFrontendComponentAiRenderToolConnection",
      items:  Array< {
        __typename: "FrontendComponentAiRenderTool",
        id: string,
        aiRenderToolId: string,
        frontendComponentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiRenderToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiRenderToolAiToolGroup",
        id: string,
        aiRenderToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiToolGroupSubscriptionVariables = {
  filter?: ModelSubscriptionAiToolGroupFilterInput | null,
};

export type OnCreateAiToolGroupSubscription = {
  onCreateAiToolGroup?:  {
    __typename: "AiToolGroup",
    id: string,
    name: string,
    apiTools?:  {
      __typename: "ModelAiApiToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiApiToolAiToolGroup",
        id: string,
        aiApiToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    renderTools?:  {
      __typename: "ModelAiRenderToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiRenderToolAiToolGroup",
        id: string,
        aiRenderToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiToolGroupAiConfigurationConnection",
      items:  Array< {
        __typename: "AiToolGroupAiConfiguration",
        id: string,
        aiToolGroupId: string,
        aiConfigurationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiToolGroupSubscriptionVariables = {
  filter?: ModelSubscriptionAiToolGroupFilterInput | null,
};

export type OnUpdateAiToolGroupSubscription = {
  onUpdateAiToolGroup?:  {
    __typename: "AiToolGroup",
    id: string,
    name: string,
    apiTools?:  {
      __typename: "ModelAiApiToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiApiToolAiToolGroup",
        id: string,
        aiApiToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    renderTools?:  {
      __typename: "ModelAiRenderToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiRenderToolAiToolGroup",
        id: string,
        aiRenderToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiToolGroupAiConfigurationConnection",
      items:  Array< {
        __typename: "AiToolGroupAiConfiguration",
        id: string,
        aiToolGroupId: string,
        aiConfigurationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiToolGroupSubscriptionVariables = {
  filter?: ModelSubscriptionAiToolGroupFilterInput | null,
};

export type OnDeleteAiToolGroupSubscription = {
  onDeleteAiToolGroup?:  {
    __typename: "AiToolGroup",
    id: string,
    name: string,
    apiTools?:  {
      __typename: "ModelAiApiToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiApiToolAiToolGroup",
        id: string,
        aiApiToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    renderTools?:  {
      __typename: "ModelAiRenderToolAiToolGroupConnection",
      items:  Array< {
        __typename: "AiRenderToolAiToolGroup",
        id: string,
        aiRenderToolId: string,
        aiToolGroupId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedIn?:  {
      __typename: "ModelAiToolGroupAiConfigurationConnection",
      items:  Array< {
        __typename: "AiToolGroupAiConfiguration",
        id: string,
        aiToolGroupId: string,
        aiConfigurationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiConfigurationSubscriptionVariables = {
  filter?: ModelSubscriptionAiConfigurationFilterInput | null,
};

export type OnCreateAiConfigurationSubscription = {
  onCreateAiConfiguration?:  {
    __typename: "AiConfiguration",
    id: string,
    name: string,
    aiParametersID: string,
    aiParameters?:  {
      __typename: "AiParameters",
      id: string,
      name: string,
      role: string,
      companyID: string,
      company?:  {
        __typename: "AiClientCompany",
        id: string,
        name: string,
        business: string,
        values: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversationPurpose: string,
      conversationType: string,
      prePrompt: string,
      postPrompt: string,
      llmID: string,
      llm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatMemory: number,
      responseTemperature: number,
      responseLanguage: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tools?:  {
      __typename: "ModelAiToolGroupAiConfigurationConnection",
      items:  Array< {
        __typename: "AiToolGroupAiConfiguration",
        id: string,
        aiToolGroupId: string,
        aiConfigurationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiConfigurationSubscriptionVariables = {
  filter?: ModelSubscriptionAiConfigurationFilterInput | null,
};

export type OnUpdateAiConfigurationSubscription = {
  onUpdateAiConfiguration?:  {
    __typename: "AiConfiguration",
    id: string,
    name: string,
    aiParametersID: string,
    aiParameters?:  {
      __typename: "AiParameters",
      id: string,
      name: string,
      role: string,
      companyID: string,
      company?:  {
        __typename: "AiClientCompany",
        id: string,
        name: string,
        business: string,
        values: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversationPurpose: string,
      conversationType: string,
      prePrompt: string,
      postPrompt: string,
      llmID: string,
      llm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatMemory: number,
      responseTemperature: number,
      responseLanguage: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tools?:  {
      __typename: "ModelAiToolGroupAiConfigurationConnection",
      items:  Array< {
        __typename: "AiToolGroupAiConfiguration",
        id: string,
        aiToolGroupId: string,
        aiConfigurationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiConfigurationSubscriptionVariables = {
  filter?: ModelSubscriptionAiConfigurationFilterInput | null,
};

export type OnDeleteAiConfigurationSubscription = {
  onDeleteAiConfiguration?:  {
    __typename: "AiConfiguration",
    id: string,
    name: string,
    aiParametersID: string,
    aiParameters?:  {
      __typename: "AiParameters",
      id: string,
      name: string,
      role: string,
      companyID: string,
      company?:  {
        __typename: "AiClientCompany",
        id: string,
        name: string,
        business: string,
        values: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      conversationPurpose: string,
      conversationType: string,
      prePrompt: string,
      postPrompt: string,
      llmID: string,
      llm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatMemory: number,
      responseTemperature: number,
      responseLanguage: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    tools?:  {
      __typename: "ModelAiToolGroupAiConfigurationConnection",
      items:  Array< {
        __typename: "AiToolGroupAiConfiguration",
        id: string,
        aiToolGroupId: string,
        aiConfigurationId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiIndexationConfigurationSubscriptionVariables = {
  filter?: ModelSubscriptionAiIndexationConfigurationFilterInput | null,
};

export type OnCreateAiIndexationConfigurationSubscription = {
  onCreateAiIndexationConfiguration?:  {
    __typename: "AiIndexationConfiguration",
    id: string,
    name: string,
    vectorizerParametersID: string,
    vectorizerParameters?:  {
      __typename: "AiVectorizerParameters",
      id: string,
      name: string,
      aiLlmID: string,
      aiLlm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chunkSize: number,
      chunkOverlap: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    vectorialDbConfigID: string,
    vectorialDbConfig?:  {
      __typename: "AiVectorialDbConfig",
      id: string,
      name: string,
      apiKey: string,
      indexName: string,
      nameSpace: string,
      score: number,
      numberOfSimilarities: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiIndexationConfigurationSubscriptionVariables = {
  filter?: ModelSubscriptionAiIndexationConfigurationFilterInput | null,
};

export type OnUpdateAiIndexationConfigurationSubscription = {
  onUpdateAiIndexationConfiguration?:  {
    __typename: "AiIndexationConfiguration",
    id: string,
    name: string,
    vectorizerParametersID: string,
    vectorizerParameters?:  {
      __typename: "AiVectorizerParameters",
      id: string,
      name: string,
      aiLlmID: string,
      aiLlm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chunkSize: number,
      chunkOverlap: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    vectorialDbConfigID: string,
    vectorialDbConfig?:  {
      __typename: "AiVectorialDbConfig",
      id: string,
      name: string,
      apiKey: string,
      indexName: string,
      nameSpace: string,
      score: number,
      numberOfSimilarities: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiIndexationConfigurationSubscriptionVariables = {
  filter?: ModelSubscriptionAiIndexationConfigurationFilterInput | null,
};

export type OnDeleteAiIndexationConfigurationSubscription = {
  onDeleteAiIndexationConfiguration?:  {
    __typename: "AiIndexationConfiguration",
    id: string,
    name: string,
    vectorizerParametersID: string,
    vectorizerParameters?:  {
      __typename: "AiVectorizerParameters",
      id: string,
      name: string,
      aiLlmID: string,
      aiLlm?:  {
        __typename: "AiLlm",
        id: string,
        name: string,
        input: Array< string >,
        output: Array< string >,
        description: string,
        available: boolean,
        maxTokens?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chunkSize: number,
      chunkOverlap: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    vectorialDbConfigID: string,
    vectorialDbConfig?:  {
      __typename: "AiVectorialDbConfig",
      id: string,
      name: string,
      apiKey: string,
      indexName: string,
      nameSpace: string,
      score: number,
      numberOfSimilarities: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiWebsocketSubscriptionVariables = {
  filter?: ModelSubscriptionAiWebsocketFilterInput | null,
};

export type OnCreateAiWebsocketSubscription = {
  onCreateAiWebsocket?:  {
    __typename: "AiWebsocket",
    id: string,
    name: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiWebsocketSubscriptionVariables = {
  filter?: ModelSubscriptionAiWebsocketFilterInput | null,
};

export type OnUpdateAiWebsocketSubscription = {
  onUpdateAiWebsocket?:  {
    __typename: "AiWebsocket",
    id: string,
    name: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiWebsocketSubscriptionVariables = {
  filter?: ModelSubscriptionAiWebsocketFilterInput | null,
};

export type OnDeleteAiWebsocketSubscription = {
  onDeleteAiWebsocket?:  {
    __typename: "AiWebsocket",
    id: string,
    name: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiTaskTypesSubscriptionVariables = {
  filter?: ModelSubscriptionAiTaskTypesFilterInput | null,
};

export type OnCreateAiTaskTypesSubscription = {
  onCreateAiTaskTypes?:  {
    __typename: "AiTaskTypes",
    id: string,
    types: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiTaskTypesSubscriptionVariables = {
  filter?: ModelSubscriptionAiTaskTypesFilterInput | null,
};

export type OnUpdateAiTaskTypesSubscription = {
  onUpdateAiTaskTypes?:  {
    __typename: "AiTaskTypes",
    id: string,
    types: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiTaskTypesSubscriptionVariables = {
  filter?: ModelSubscriptionAiTaskTypesFilterInput | null,
};

export type OnDeleteAiTaskTypesSubscription = {
  onDeleteAiTaskTypes?:  {
    __typename: "AiTaskTypes",
    id: string,
    types: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiProcessSubscriptionVariables = {
  filter?: ModelSubscriptionAiProcessFilterInput | null,
};

export type OnCreateAiProcessSubscription = {
  onCreateAiProcess?:  {
    __typename: "AiProcess",
    id: string,
    tebeDeleted: boolean,
    name: string,
    taskTypeID: string,
    taskType?:  {
      __typename: "AiTaskTypes",
      id: string,
      types: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    aiConfigID: string,
    aiConfig?:  {
      __typename: "AiConfiguration",
      id: string,
      name: string,
      aiParametersID: string,
      aiParameters?:  {
        __typename: "AiParameters",
        id: string,
        name: string,
        role: string,
        companyID: string,
        conversationPurpose: string,
        conversationType: string,
        prePrompt: string,
        postPrompt: string,
        llmID: string,
        chatMemory: number,
        responseTemperature: number,
        responseLanguage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tools?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    usedIn?:  {
      __typename: "ModelAiProcessAiSettingsConnection",
      items:  Array< {
        __typename: "AiProcessAiSettings",
        id: string,
        aiProcessId: string,
        aiSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    communicationSourceType: communicationSourceType,
    frontedWebsocketCommunicationSourceID?: string | null,
    frontedWebsocketCommunicationSource?:  {
      __typename: "AiWebsocket",
      id: string,
      name: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    backendQueueCommunicationSourceID?: string | null,
    backendQueueCommunicationSource?:  {
      __typename: "BackendQueue",
      id: string,
      name: string,
      url: string,
      usedIn?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiProcessSubscriptionVariables = {
  filter?: ModelSubscriptionAiProcessFilterInput | null,
};

export type OnUpdateAiProcessSubscription = {
  onUpdateAiProcess?:  {
    __typename: "AiProcess",
    id: string,
    tebeDeleted: boolean,
    name: string,
    taskTypeID: string,
    taskType?:  {
      __typename: "AiTaskTypes",
      id: string,
      types: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    aiConfigID: string,
    aiConfig?:  {
      __typename: "AiConfiguration",
      id: string,
      name: string,
      aiParametersID: string,
      aiParameters?:  {
        __typename: "AiParameters",
        id: string,
        name: string,
        role: string,
        companyID: string,
        conversationPurpose: string,
        conversationType: string,
        prePrompt: string,
        postPrompt: string,
        llmID: string,
        chatMemory: number,
        responseTemperature: number,
        responseLanguage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tools?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    usedIn?:  {
      __typename: "ModelAiProcessAiSettingsConnection",
      items:  Array< {
        __typename: "AiProcessAiSettings",
        id: string,
        aiProcessId: string,
        aiSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    communicationSourceType: communicationSourceType,
    frontedWebsocketCommunicationSourceID?: string | null,
    frontedWebsocketCommunicationSource?:  {
      __typename: "AiWebsocket",
      id: string,
      name: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    backendQueueCommunicationSourceID?: string | null,
    backendQueueCommunicationSource?:  {
      __typename: "BackendQueue",
      id: string,
      name: string,
      url: string,
      usedIn?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiProcessSubscriptionVariables = {
  filter?: ModelSubscriptionAiProcessFilterInput | null,
};

export type OnDeleteAiProcessSubscription = {
  onDeleteAiProcess?:  {
    __typename: "AiProcess",
    id: string,
    tebeDeleted: boolean,
    name: string,
    taskTypeID: string,
    taskType?:  {
      __typename: "AiTaskTypes",
      id: string,
      types: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    aiConfigID: string,
    aiConfig?:  {
      __typename: "AiConfiguration",
      id: string,
      name: string,
      aiParametersID: string,
      aiParameters?:  {
        __typename: "AiParameters",
        id: string,
        name: string,
        role: string,
        companyID: string,
        conversationPurpose: string,
        conversationType: string,
        prePrompt: string,
        postPrompt: string,
        llmID: string,
        chatMemory: number,
        responseTemperature: number,
        responseLanguage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tools?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    usedIn?:  {
      __typename: "ModelAiProcessAiSettingsConnection",
      items:  Array< {
        __typename: "AiProcessAiSettings",
        id: string,
        aiProcessId: string,
        aiSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    communicationSourceType: communicationSourceType,
    frontedWebsocketCommunicationSourceID?: string | null,
    frontedWebsocketCommunicationSource?:  {
      __typename: "AiWebsocket",
      id: string,
      name: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    backendQueueCommunicationSourceID?: string | null,
    backendQueueCommunicationSource?:  {
      __typename: "BackendQueue",
      id: string,
      name: string,
      url: string,
      usedIn?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionAiSettingsFilterInput | null,
};

export type OnCreateAiSettingsSubscription = {
  onCreateAiSettings?:  {
    __typename: "AiSettings",
    id: string,
    name: string,
    balancerUrl: string,
    processes?:  {
      __typename: "ModelAiProcessAiSettingsConnection",
      items:  Array< {
        __typename: "AiProcessAiSettings",
        id: string,
        aiProcessId: string,
        aiSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionAiSettingsFilterInput | null,
};

export type OnUpdateAiSettingsSubscription = {
  onUpdateAiSettings?:  {
    __typename: "AiSettings",
    id: string,
    name: string,
    balancerUrl: string,
    processes?:  {
      __typename: "ModelAiProcessAiSettingsConnection",
      items:  Array< {
        __typename: "AiProcessAiSettings",
        id: string,
        aiProcessId: string,
        aiSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionAiSettingsFilterInput | null,
};

export type OnDeleteAiSettingsSubscription = {
  onDeleteAiSettings?:  {
    __typename: "AiSettings",
    id: string,
    name: string,
    balancerUrl: string,
    processes?:  {
      __typename: "ModelAiProcessAiSettingsConnection",
      items:  Array< {
        __typename: "AiProcessAiSettings",
        id: string,
        aiProcessId: string,
        aiSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBackendQueueSubscriptionVariables = {
  filter?: ModelSubscriptionBackendQueueFilterInput | null,
};

export type OnCreateBackendQueueSubscription = {
  onCreateBackendQueue?:  {
    __typename: "BackendQueue",
    id: string,
    name: string,
    url: string,
    usedIn?:  {
      __typename: "ModelBackendQueueBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendQueueBackendSettings",
        id: string,
        backendQueueId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBackendQueueSubscriptionVariables = {
  filter?: ModelSubscriptionBackendQueueFilterInput | null,
};

export type OnUpdateBackendQueueSubscription = {
  onUpdateBackendQueue?:  {
    __typename: "BackendQueue",
    id: string,
    name: string,
    url: string,
    usedIn?:  {
      __typename: "ModelBackendQueueBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendQueueBackendSettings",
        id: string,
        backendQueueId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBackendQueueSubscriptionVariables = {
  filter?: ModelSubscriptionBackendQueueFilterInput | null,
};

export type OnDeleteBackendQueueSubscription = {
  onDeleteBackendQueue?:  {
    __typename: "BackendQueue",
    id: string,
    name: string,
    url: string,
    usedIn?:  {
      __typename: "ModelBackendQueueBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendQueueBackendSettings",
        id: string,
        backendQueueId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBackendTopicSubscriptionVariables = {
  filter?: ModelSubscriptionBackendTopicFilterInput | null,
};

export type OnCreateBackendTopicSubscription = {
  onCreateBackendTopic?:  {
    __typename: "BackendTopic",
    id: string,
    name: string,
    arn: string,
    usedIn?:  {
      __typename: "ModelBackendTopicBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendTopicBackendSettings",
        id: string,
        backendTopicId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBackendTopicSubscriptionVariables = {
  filter?: ModelSubscriptionBackendTopicFilterInput | null,
};

export type OnUpdateBackendTopicSubscription = {
  onUpdateBackendTopic?:  {
    __typename: "BackendTopic",
    id: string,
    name: string,
    arn: string,
    usedIn?:  {
      __typename: "ModelBackendTopicBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendTopicBackendSettings",
        id: string,
        backendTopicId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBackendTopicSubscriptionVariables = {
  filter?: ModelSubscriptionBackendTopicFilterInput | null,
};

export type OnDeleteBackendTopicSubscription = {
  onDeleteBackendTopic?:  {
    __typename: "BackendTopic",
    id: string,
    name: string,
    arn: string,
    usedIn?:  {
      __typename: "ModelBackendTopicBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendTopicBackendSettings",
        id: string,
        backendTopicId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBackendDatabaseTypeSubscriptionVariables = {
  filter?: ModelSubscriptionBackendDatabaseTypeFilterInput | null,
};

export type OnCreateBackendDatabaseTypeSubscription = {
  onCreateBackendDatabaseType?:  {
    __typename: "BackendDatabaseType",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBackendDatabaseTypeSubscriptionVariables = {
  filter?: ModelSubscriptionBackendDatabaseTypeFilterInput | null,
};

export type OnUpdateBackendDatabaseTypeSubscription = {
  onUpdateBackendDatabaseType?:  {
    __typename: "BackendDatabaseType",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBackendDatabaseTypeSubscriptionVariables = {
  filter?: ModelSubscriptionBackendDatabaseTypeFilterInput | null,
};

export type OnDeleteBackendDatabaseTypeSubscription = {
  onDeleteBackendDatabaseType?:  {
    __typename: "BackendDatabaseType",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBackendDatabaseSubscriptionVariables = {
  filter?: ModelSubscriptionBackendDatabaseFilterInput | null,
};

export type OnCreateBackendDatabaseSubscription = {
  onCreateBackendDatabase?:  {
    __typename: "BackendDatabase",
    id: string,
    name: string,
    backendDatabaseTypeID: string,
    type?:  {
      __typename: "BackendDatabaseType",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    reference: string,
    usedIn?:  {
      __typename: "ModelBackendDatabaseBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendDatabaseBackendSettings",
        id: string,
        backendDatabaseId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBackendDatabaseSubscriptionVariables = {
  filter?: ModelSubscriptionBackendDatabaseFilterInput | null,
};

export type OnUpdateBackendDatabaseSubscription = {
  onUpdateBackendDatabase?:  {
    __typename: "BackendDatabase",
    id: string,
    name: string,
    backendDatabaseTypeID: string,
    type?:  {
      __typename: "BackendDatabaseType",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    reference: string,
    usedIn?:  {
      __typename: "ModelBackendDatabaseBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendDatabaseBackendSettings",
        id: string,
        backendDatabaseId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBackendDatabaseSubscriptionVariables = {
  filter?: ModelSubscriptionBackendDatabaseFilterInput | null,
};

export type OnDeleteBackendDatabaseSubscription = {
  onDeleteBackendDatabase?:  {
    __typename: "BackendDatabase",
    id: string,
    name: string,
    backendDatabaseTypeID: string,
    type?:  {
      __typename: "BackendDatabaseType",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    reference: string,
    usedIn?:  {
      __typename: "ModelBackendDatabaseBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendDatabaseBackendSettings",
        id: string,
        backendDatabaseId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBackendEndpointMethodSubscriptionVariables = {
  filter?: ModelSubscriptionBackendEndpointMethodFilterInput | null,
};

export type OnCreateBackendEndpointMethodSubscription = {
  onCreateBackendEndpointMethod?:  {
    __typename: "BackendEndpointMethod",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBackendEndpointMethodSubscriptionVariables = {
  filter?: ModelSubscriptionBackendEndpointMethodFilterInput | null,
};

export type OnUpdateBackendEndpointMethodSubscription = {
  onUpdateBackendEndpointMethod?:  {
    __typename: "BackendEndpointMethod",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBackendEndpointMethodSubscriptionVariables = {
  filter?: ModelSubscriptionBackendEndpointMethodFilterInput | null,
};

export type OnDeleteBackendEndpointMethodSubscription = {
  onDeleteBackendEndpointMethod?:  {
    __typename: "BackendEndpointMethod",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBackendEndpointSubscriptionVariables = {
  filter?: ModelSubscriptionBackendEndpointFilterInput | null,
};

export type OnCreateBackendEndpointSubscription = {
  onCreateBackendEndpoint?:  {
    __typename: "BackendEndpoint",
    id: string,
    name: string,
    url: string,
    description: string,
    methodID?: string | null,
    method?:  {
      __typename: "BackendEndpointMethod",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parametersWIP?: string | null,
    usedInSettings?:  {
      __typename: "ModelBackendEndpointBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendEndpointBackendSettings",
        id: string,
        backendEndpointId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedInTool?:  {
      __typename: "ModelBackendEndpointAiApiToolConnection",
      items:  Array< {
        __typename: "BackendEndpointAiApiTool",
        id: string,
        aiApiToolId: string,
        backendEndpointId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBackendEndpointSubscriptionVariables = {
  filter?: ModelSubscriptionBackendEndpointFilterInput | null,
};

export type OnUpdateBackendEndpointSubscription = {
  onUpdateBackendEndpoint?:  {
    __typename: "BackendEndpoint",
    id: string,
    name: string,
    url: string,
    description: string,
    methodID?: string | null,
    method?:  {
      __typename: "BackendEndpointMethod",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parametersWIP?: string | null,
    usedInSettings?:  {
      __typename: "ModelBackendEndpointBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendEndpointBackendSettings",
        id: string,
        backendEndpointId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedInTool?:  {
      __typename: "ModelBackendEndpointAiApiToolConnection",
      items:  Array< {
        __typename: "BackendEndpointAiApiTool",
        id: string,
        aiApiToolId: string,
        backendEndpointId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBackendEndpointSubscriptionVariables = {
  filter?: ModelSubscriptionBackendEndpointFilterInput | null,
};

export type OnDeleteBackendEndpointSubscription = {
  onDeleteBackendEndpoint?:  {
    __typename: "BackendEndpoint",
    id: string,
    name: string,
    url: string,
    description: string,
    methodID?: string | null,
    method?:  {
      __typename: "BackendEndpointMethod",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    parametersWIP?: string | null,
    usedInSettings?:  {
      __typename: "ModelBackendEndpointBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendEndpointBackendSettings",
        id: string,
        backendEndpointId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedInTool?:  {
      __typename: "ModelBackendEndpointAiApiToolConnection",
      items:  Array< {
        __typename: "BackendEndpointAiApiTool",
        id: string,
        aiApiToolId: string,
        backendEndpointId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBackendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionBackendSettingsFilterInput | null,
};

export type OnCreateBackendSettingsSubscription = {
  onCreateBackendSettings?:  {
    __typename: "BackendSettings",
    id: string,
    name: string,
    region: string,
    secretName: string,
    endpoints?:  {
      __typename: "ModelBackendEndpointBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendEndpointBackendSettings",
        id: string,
        backendEndpointId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    databases?:  {
      __typename: "ModelBackendDatabaseBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendDatabaseBackendSettings",
        id: string,
        backendDatabaseId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    queues?:  {
      __typename: "ModelBackendQueueBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendQueueBackendSettings",
        id: string,
        backendQueueId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    topics?:  {
      __typename: "ModelBackendTopicBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendTopicBackendSettings",
        id: string,
        backendTopicId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBackendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionBackendSettingsFilterInput | null,
};

export type OnUpdateBackendSettingsSubscription = {
  onUpdateBackendSettings?:  {
    __typename: "BackendSettings",
    id: string,
    name: string,
    region: string,
    secretName: string,
    endpoints?:  {
      __typename: "ModelBackendEndpointBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendEndpointBackendSettings",
        id: string,
        backendEndpointId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    databases?:  {
      __typename: "ModelBackendDatabaseBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendDatabaseBackendSettings",
        id: string,
        backendDatabaseId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    queues?:  {
      __typename: "ModelBackendQueueBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendQueueBackendSettings",
        id: string,
        backendQueueId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    topics?:  {
      __typename: "ModelBackendTopicBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendTopicBackendSettings",
        id: string,
        backendTopicId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBackendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionBackendSettingsFilterInput | null,
};

export type OnDeleteBackendSettingsSubscription = {
  onDeleteBackendSettings?:  {
    __typename: "BackendSettings",
    id: string,
    name: string,
    region: string,
    secretName: string,
    endpoints?:  {
      __typename: "ModelBackendEndpointBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendEndpointBackendSettings",
        id: string,
        backendEndpointId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    databases?:  {
      __typename: "ModelBackendDatabaseBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendDatabaseBackendSettings",
        id: string,
        backendDatabaseId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    queues?:  {
      __typename: "ModelBackendQueueBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendQueueBackendSettings",
        id: string,
        backendQueueId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    topics?:  {
      __typename: "ModelBackendTopicBackendSettingsConnection",
      items:  Array< {
        __typename: "BackendTopicBackendSettings",
        id: string,
        backendTopicId: string,
        backendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFrontendComponentSubscriptionVariables = {
  filter?: ModelSubscriptionFrontendComponentFilterInput | null,
};

export type OnCreateFrontendComponentSubscription = {
  onCreateFrontendComponent?:  {
    __typename: "FrontendComponent",
    id: string,
    name: string,
    description: string,
    usedInSettings?:  {
      __typename: "ModelFrontendComponentFrontendSettingsConnection",
      items:  Array< {
        __typename: "FrontendComponentFrontendSettings",
        id: string,
        frontendComponentId: string,
        frontendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedInTool?:  {
      __typename: "ModelFrontendComponentAiRenderToolConnection",
      items:  Array< {
        __typename: "FrontendComponentAiRenderTool",
        id: string,
        aiRenderToolId: string,
        frontendComponentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFrontendComponentSubscriptionVariables = {
  filter?: ModelSubscriptionFrontendComponentFilterInput | null,
};

export type OnUpdateFrontendComponentSubscription = {
  onUpdateFrontendComponent?:  {
    __typename: "FrontendComponent",
    id: string,
    name: string,
    description: string,
    usedInSettings?:  {
      __typename: "ModelFrontendComponentFrontendSettingsConnection",
      items:  Array< {
        __typename: "FrontendComponentFrontendSettings",
        id: string,
        frontendComponentId: string,
        frontendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedInTool?:  {
      __typename: "ModelFrontendComponentAiRenderToolConnection",
      items:  Array< {
        __typename: "FrontendComponentAiRenderTool",
        id: string,
        aiRenderToolId: string,
        frontendComponentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFrontendComponentSubscriptionVariables = {
  filter?: ModelSubscriptionFrontendComponentFilterInput | null,
};

export type OnDeleteFrontendComponentSubscription = {
  onDeleteFrontendComponent?:  {
    __typename: "FrontendComponent",
    id: string,
    name: string,
    description: string,
    usedInSettings?:  {
      __typename: "ModelFrontendComponentFrontendSettingsConnection",
      items:  Array< {
        __typename: "FrontendComponentFrontendSettings",
        id: string,
        frontendComponentId: string,
        frontendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    usedInTool?:  {
      __typename: "ModelFrontendComponentAiRenderToolConnection",
      items:  Array< {
        __typename: "FrontendComponentAiRenderTool",
        id: string,
        aiRenderToolId: string,
        frontendComponentId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFrontendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionFrontendSettingsFilterInput | null,
};

export type OnCreateFrontendSettingsSubscription = {
  onCreateFrontendSettings?:  {
    __typename: "FrontendSettings",
    id: string,
    name: string,
    domain: string,
    cssS3Url?: string | null,
    components?:  {
      __typename: "ModelFrontendComponentFrontendSettingsConnection",
      items:  Array< {
        __typename: "FrontendComponentFrontendSettings",
        id: string,
        frontendComponentId: string,
        frontendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFrontendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionFrontendSettingsFilterInput | null,
};

export type OnUpdateFrontendSettingsSubscription = {
  onUpdateFrontendSettings?:  {
    __typename: "FrontendSettings",
    id: string,
    name: string,
    domain: string,
    cssS3Url?: string | null,
    components?:  {
      __typename: "ModelFrontendComponentFrontendSettingsConnection",
      items:  Array< {
        __typename: "FrontendComponentFrontendSettings",
        id: string,
        frontendComponentId: string,
        frontendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFrontendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionFrontendSettingsFilterInput | null,
};

export type OnDeleteFrontendSettingsSubscription = {
  onDeleteFrontendSettings?:  {
    __typename: "FrontendSettings",
    id: string,
    name: string,
    domain: string,
    cssS3Url?: string | null,
    components?:  {
      __typename: "ModelFrontendComponentFrontendSettingsConnection",
      items:  Array< {
        __typename: "FrontendComponentFrontendSettings",
        id: string,
        frontendComponentId: string,
        frontendSettingsId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateApplicationStageCognitoUserPoolSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationStageCognitoUserPoolFilterInput | null,
};

export type OnCreateApplicationStageCognitoUserPoolSubscription = {
  onCreateApplicationStageCognitoUserPool?:  {
    __typename: "ApplicationStageCognitoUserPool",
    id: string,
    name: string,
    userPoolId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateApplicationStageCognitoUserPoolSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationStageCognitoUserPoolFilterInput | null,
};

export type OnUpdateApplicationStageCognitoUserPoolSubscription = {
  onUpdateApplicationStageCognitoUserPool?:  {
    __typename: "ApplicationStageCognitoUserPool",
    id: string,
    name: string,
    userPoolId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteApplicationStageCognitoUserPoolSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationStageCognitoUserPoolFilterInput | null,
};

export type OnDeleteApplicationStageCognitoUserPoolSubscription = {
  onDeleteApplicationStageCognitoUserPool?:  {
    __typename: "ApplicationStageCognitoUserPool",
    id: string,
    name: string,
    userPoolId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateApplicationStageSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationStageFilterInput | null,
};

export type OnCreateApplicationStageSubscription = {
  onCreateApplicationStage?:  {
    __typename: "ApplicationStage",
    id: string,
    name: string,
    aiSettingsID: string,
    aiSettings?:  {
      __typename: "AiSettings",
      id: string,
      name: string,
      balancerUrl: string,
      processes?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    backendSettingsID: string,
    backendSettings?:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    frontendSettingsID: string,
    frontendSettings?:  {
      __typename: "FrontendSettings",
      id: string,
      name: string,
      domain: string,
      cssS3Url?: string | null,
      components?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    cognitoUserPoolID: string,
    cognitoUserPool?:  {
      __typename: "ApplicationStageCognitoUserPool",
      id: string,
      name: string,
      userPoolId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateApplicationStageSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationStageFilterInput | null,
};

export type OnUpdateApplicationStageSubscription = {
  onUpdateApplicationStage?:  {
    __typename: "ApplicationStage",
    id: string,
    name: string,
    aiSettingsID: string,
    aiSettings?:  {
      __typename: "AiSettings",
      id: string,
      name: string,
      balancerUrl: string,
      processes?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    backendSettingsID: string,
    backendSettings?:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    frontendSettingsID: string,
    frontendSettings?:  {
      __typename: "FrontendSettings",
      id: string,
      name: string,
      domain: string,
      cssS3Url?: string | null,
      components?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    cognitoUserPoolID: string,
    cognitoUserPool?:  {
      __typename: "ApplicationStageCognitoUserPool",
      id: string,
      name: string,
      userPoolId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteApplicationStageSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationStageFilterInput | null,
};

export type OnDeleteApplicationStageSubscription = {
  onDeleteApplicationStage?:  {
    __typename: "ApplicationStage",
    id: string,
    name: string,
    aiSettingsID: string,
    aiSettings?:  {
      __typename: "AiSettings",
      id: string,
      name: string,
      balancerUrl: string,
      processes?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    backendSettingsID: string,
    backendSettings?:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    frontendSettingsID: string,
    frontendSettings?:  {
      __typename: "FrontendSettings",
      id: string,
      name: string,
      domain: string,
      cssS3Url?: string | null,
      components?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    cognitoUserPoolID: string,
    cognitoUserPool?:  {
      __typename: "ApplicationStageCognitoUserPool",
      id: string,
      name: string,
      userPoolId: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateApplicationAiServerSnapshotReferenceSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationAiServerSnapshotReferenceFilterInput | null,
};

export type OnCreateApplicationAiServerSnapshotReferenceSubscription = {
  onCreateApplicationAiServerSnapshotReference?:  {
    __typename: "ApplicationAiServerSnapshotReference",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateApplicationAiServerSnapshotReferenceSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationAiServerSnapshotReferenceFilterInput | null,
};

export type OnUpdateApplicationAiServerSnapshotReferenceSubscription = {
  onUpdateApplicationAiServerSnapshotReference?:  {
    __typename: "ApplicationAiServerSnapshotReference",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteApplicationAiServerSnapshotReferenceSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationAiServerSnapshotReferenceFilterInput | null,
};

export type OnDeleteApplicationAiServerSnapshotReferenceSubscription = {
  onDeleteApplicationAiServerSnapshotReference?:  {
    __typename: "ApplicationAiServerSnapshotReference",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnCreateApplicationSubscription = {
  onCreateApplication?:  {
    __typename: "Application",
    id: string,
    url: string,
    name: string,
    version: string,
    devStageID?: string | null,
    DEV?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    stagingStageID?: string | null,
    STAGING?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    prodStageID?: string | null,
    PROD?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    aiServerSnapshotReferenceID: string,
    aiServerSnapshotReference?:  {
      __typename: "ApplicationAiServerSnapshotReference",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnUpdateApplicationSubscription = {
  onUpdateApplication?:  {
    __typename: "Application",
    id: string,
    url: string,
    name: string,
    version: string,
    devStageID?: string | null,
    DEV?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    stagingStageID?: string | null,
    STAGING?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    prodStageID?: string | null,
    PROD?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    aiServerSnapshotReferenceID: string,
    aiServerSnapshotReference?:  {
      __typename: "ApplicationAiServerSnapshotReference",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteApplicationSubscriptionVariables = {
  filter?: ModelSubscriptionApplicationFilterInput | null,
};

export type OnDeleteApplicationSubscription = {
  onDeleteApplication?:  {
    __typename: "Application",
    id: string,
    url: string,
    name: string,
    version: string,
    devStageID?: string | null,
    DEV?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    stagingStageID?: string | null,
    STAGING?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    prodStageID?: string | null,
    PROD?:  {
      __typename: "ApplicationStage",
      id: string,
      name: string,
      aiSettingsID: string,
      aiSettings?:  {
        __typename: "AiSettings",
        id: string,
        name: string,
        balancerUrl: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendSettingsID: string,
      backendSettings?:  {
        __typename: "BackendSettings",
        id: string,
        name: string,
        region: string,
        secretName: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      frontendSettingsID: string,
      frontendSettings?:  {
        __typename: "FrontendSettings",
        id: string,
        name: string,
        domain: string,
        cssS3Url?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      cognitoUserPoolID: string,
      cognitoUserPool?:  {
        __typename: "ApplicationStageCognitoUserPool",
        id: string,
        name: string,
        userPoolId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    aiServerSnapshotReferenceID: string,
    aiServerSnapshotReference?:  {
      __typename: "ApplicationAiServerSnapshotReference",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBackendEndpointAiApiToolSubscriptionVariables = {
  filter?: ModelSubscriptionBackendEndpointAiApiToolFilterInput | null,
};

export type OnCreateBackendEndpointAiApiToolSubscription = {
  onCreateBackendEndpointAiApiTool?:  {
    __typename: "BackendEndpointAiApiTool",
    id: string,
    aiApiToolId: string,
    backendEndpointId: string,
    aiApiTool:  {
      __typename: "AiApiTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      endpoint?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendEndpoint:  {
      __typename: "BackendEndpoint",
      id: string,
      name: string,
      url: string,
      description: string,
      methodID?: string | null,
      method?:  {
        __typename: "BackendEndpointMethod",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      parametersWIP?: string | null,
      usedInSettings?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBackendEndpointAiApiToolSubscriptionVariables = {
  filter?: ModelSubscriptionBackendEndpointAiApiToolFilterInput | null,
};

export type OnUpdateBackendEndpointAiApiToolSubscription = {
  onUpdateBackendEndpointAiApiTool?:  {
    __typename: "BackendEndpointAiApiTool",
    id: string,
    aiApiToolId: string,
    backendEndpointId: string,
    aiApiTool:  {
      __typename: "AiApiTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      endpoint?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendEndpoint:  {
      __typename: "BackendEndpoint",
      id: string,
      name: string,
      url: string,
      description: string,
      methodID?: string | null,
      method?:  {
        __typename: "BackendEndpointMethod",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      parametersWIP?: string | null,
      usedInSettings?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBackendEndpointAiApiToolSubscriptionVariables = {
  filter?: ModelSubscriptionBackendEndpointAiApiToolFilterInput | null,
};

export type OnDeleteBackendEndpointAiApiToolSubscription = {
  onDeleteBackendEndpointAiApiTool?:  {
    __typename: "BackendEndpointAiApiTool",
    id: string,
    aiApiToolId: string,
    backendEndpointId: string,
    aiApiTool:  {
      __typename: "AiApiTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      endpoint?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendEndpoint:  {
      __typename: "BackendEndpoint",
      id: string,
      name: string,
      url: string,
      description: string,
      methodID?: string | null,
      method?:  {
        __typename: "BackendEndpointMethod",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      parametersWIP?: string | null,
      usedInSettings?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiApiToolAiToolGroupSubscriptionVariables = {
  filter?: ModelSubscriptionAiApiToolAiToolGroupFilterInput | null,
};

export type OnCreateAiApiToolAiToolGroupSubscription = {
  onCreateAiApiToolAiToolGroup?:  {
    __typename: "AiApiToolAiToolGroup",
    id: string,
    aiApiToolId: string,
    aiToolGroupId: string,
    aiApiTool:  {
      __typename: "AiApiTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      endpoint?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiApiToolAiToolGroupSubscriptionVariables = {
  filter?: ModelSubscriptionAiApiToolAiToolGroupFilterInput | null,
};

export type OnUpdateAiApiToolAiToolGroupSubscription = {
  onUpdateAiApiToolAiToolGroup?:  {
    __typename: "AiApiToolAiToolGroup",
    id: string,
    aiApiToolId: string,
    aiToolGroupId: string,
    aiApiTool:  {
      __typename: "AiApiTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      endpoint?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiApiToolAiToolGroupSubscriptionVariables = {
  filter?: ModelSubscriptionAiApiToolAiToolGroupFilterInput | null,
};

export type OnDeleteAiApiToolAiToolGroupSubscription = {
  onDeleteAiApiToolAiToolGroup?:  {
    __typename: "AiApiToolAiToolGroup",
    id: string,
    aiApiToolId: string,
    aiToolGroupId: string,
    aiApiTool:  {
      __typename: "AiApiTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      endpoint?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFrontendComponentAiRenderToolSubscriptionVariables = {
  filter?: ModelSubscriptionFrontendComponentAiRenderToolFilterInput | null,
};

export type OnCreateFrontendComponentAiRenderToolSubscription = {
  onCreateFrontendComponentAiRenderTool?:  {
    __typename: "FrontendComponentAiRenderTool",
    id: string,
    aiRenderToolId: string,
    frontendComponentId: string,
    aiRenderTool:  {
      __typename: "AiRenderTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      action: string,
      component?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    frontendComponent:  {
      __typename: "FrontendComponent",
      id: string,
      name: string,
      description: string,
      usedInSettings?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFrontendComponentAiRenderToolSubscriptionVariables = {
  filter?: ModelSubscriptionFrontendComponentAiRenderToolFilterInput | null,
};

export type OnUpdateFrontendComponentAiRenderToolSubscription = {
  onUpdateFrontendComponentAiRenderTool?:  {
    __typename: "FrontendComponentAiRenderTool",
    id: string,
    aiRenderToolId: string,
    frontendComponentId: string,
    aiRenderTool:  {
      __typename: "AiRenderTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      action: string,
      component?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    frontendComponent:  {
      __typename: "FrontendComponent",
      id: string,
      name: string,
      description: string,
      usedInSettings?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFrontendComponentAiRenderToolSubscriptionVariables = {
  filter?: ModelSubscriptionFrontendComponentAiRenderToolFilterInput | null,
};

export type OnDeleteFrontendComponentAiRenderToolSubscription = {
  onDeleteFrontendComponentAiRenderTool?:  {
    __typename: "FrontendComponentAiRenderTool",
    id: string,
    aiRenderToolId: string,
    frontendComponentId: string,
    aiRenderTool:  {
      __typename: "AiRenderTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      action: string,
      component?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    frontendComponent:  {
      __typename: "FrontendComponent",
      id: string,
      name: string,
      description: string,
      usedInSettings?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiRenderToolAiToolGroupSubscriptionVariables = {
  filter?: ModelSubscriptionAiRenderToolAiToolGroupFilterInput | null,
};

export type OnCreateAiRenderToolAiToolGroupSubscription = {
  onCreateAiRenderToolAiToolGroup?:  {
    __typename: "AiRenderToolAiToolGroup",
    id: string,
    aiRenderToolId: string,
    aiToolGroupId: string,
    aiRenderTool:  {
      __typename: "AiRenderTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      action: string,
      component?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiRenderToolAiToolGroupSubscriptionVariables = {
  filter?: ModelSubscriptionAiRenderToolAiToolGroupFilterInput | null,
};

export type OnUpdateAiRenderToolAiToolGroupSubscription = {
  onUpdateAiRenderToolAiToolGroup?:  {
    __typename: "AiRenderToolAiToolGroup",
    id: string,
    aiRenderToolId: string,
    aiToolGroupId: string,
    aiRenderTool:  {
      __typename: "AiRenderTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      action: string,
      component?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiRenderToolAiToolGroupSubscriptionVariables = {
  filter?: ModelSubscriptionAiRenderToolAiToolGroupFilterInput | null,
};

export type OnDeleteAiRenderToolAiToolGroupSubscription = {
  onDeleteAiRenderToolAiToolGroup?:  {
    __typename: "AiRenderToolAiToolGroup",
    id: string,
    aiRenderToolId: string,
    aiToolGroupId: string,
    aiRenderTool:  {
      __typename: "AiRenderTool",
      id: string,
      name: string,
      func: string,
      useCases: string,
      description: string,
      payload?: string | null,
      action: string,
      component?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiToolGroupAiConfigurationSubscriptionVariables = {
  filter?: ModelSubscriptionAiToolGroupAiConfigurationFilterInput | null,
};

export type OnCreateAiToolGroupAiConfigurationSubscription = {
  onCreateAiToolGroupAiConfiguration?:  {
    __typename: "AiToolGroupAiConfiguration",
    id: string,
    aiToolGroupId: string,
    aiConfigurationId: string,
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiConfiguration:  {
      __typename: "AiConfiguration",
      id: string,
      name: string,
      aiParametersID: string,
      aiParameters?:  {
        __typename: "AiParameters",
        id: string,
        name: string,
        role: string,
        companyID: string,
        conversationPurpose: string,
        conversationType: string,
        prePrompt: string,
        postPrompt: string,
        llmID: string,
        chatMemory: number,
        responseTemperature: number,
        responseLanguage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tools?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiToolGroupAiConfigurationSubscriptionVariables = {
  filter?: ModelSubscriptionAiToolGroupAiConfigurationFilterInput | null,
};

export type OnUpdateAiToolGroupAiConfigurationSubscription = {
  onUpdateAiToolGroupAiConfiguration?:  {
    __typename: "AiToolGroupAiConfiguration",
    id: string,
    aiToolGroupId: string,
    aiConfigurationId: string,
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiConfiguration:  {
      __typename: "AiConfiguration",
      id: string,
      name: string,
      aiParametersID: string,
      aiParameters?:  {
        __typename: "AiParameters",
        id: string,
        name: string,
        role: string,
        companyID: string,
        conversationPurpose: string,
        conversationType: string,
        prePrompt: string,
        postPrompt: string,
        llmID: string,
        chatMemory: number,
        responseTemperature: number,
        responseLanguage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tools?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiToolGroupAiConfigurationSubscriptionVariables = {
  filter?: ModelSubscriptionAiToolGroupAiConfigurationFilterInput | null,
};

export type OnDeleteAiToolGroupAiConfigurationSubscription = {
  onDeleteAiToolGroupAiConfiguration?:  {
    __typename: "AiToolGroupAiConfiguration",
    id: string,
    aiToolGroupId: string,
    aiConfigurationId: string,
    aiToolGroup:  {
      __typename: "AiToolGroup",
      id: string,
      name: string,
      apiTools?:  {
        __typename: "ModelAiApiToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      renderTools?:  {
        __typename: "ModelAiRenderToolAiToolGroupConnection",
        nextToken?: string | null,
      } | null,
      usedIn?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiConfiguration:  {
      __typename: "AiConfiguration",
      id: string,
      name: string,
      aiParametersID: string,
      aiParameters?:  {
        __typename: "AiParameters",
        id: string,
        name: string,
        role: string,
        companyID: string,
        conversationPurpose: string,
        conversationType: string,
        prePrompt: string,
        postPrompt: string,
        llmID: string,
        chatMemory: number,
        responseTemperature: number,
        responseLanguage: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      tools?:  {
        __typename: "ModelAiToolGroupAiConfigurationConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAiProcessAiSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionAiProcessAiSettingsFilterInput | null,
};

export type OnCreateAiProcessAiSettingsSubscription = {
  onCreateAiProcessAiSettings?:  {
    __typename: "AiProcessAiSettings",
    id: string,
    aiProcessId: string,
    aiSettingsId: string,
    aiProcess:  {
      __typename: "AiProcess",
      id: string,
      tebeDeleted: boolean,
      name: string,
      taskTypeID: string,
      taskType?:  {
        __typename: "AiTaskTypes",
        id: string,
        types: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiConfigID: string,
      aiConfig?:  {
        __typename: "AiConfiguration",
        id: string,
        name: string,
        aiParametersID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      usedIn?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      communicationSourceType: communicationSourceType,
      frontedWebsocketCommunicationSourceID?: string | null,
      frontedWebsocketCommunicationSource?:  {
        __typename: "AiWebsocket",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendQueueCommunicationSourceID?: string | null,
      backendQueueCommunicationSource?:  {
        __typename: "BackendQueue",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiSettings:  {
      __typename: "AiSettings",
      id: string,
      name: string,
      balancerUrl: string,
      processes?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAiProcessAiSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionAiProcessAiSettingsFilterInput | null,
};

export type OnUpdateAiProcessAiSettingsSubscription = {
  onUpdateAiProcessAiSettings?:  {
    __typename: "AiProcessAiSettings",
    id: string,
    aiProcessId: string,
    aiSettingsId: string,
    aiProcess:  {
      __typename: "AiProcess",
      id: string,
      tebeDeleted: boolean,
      name: string,
      taskTypeID: string,
      taskType?:  {
        __typename: "AiTaskTypes",
        id: string,
        types: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiConfigID: string,
      aiConfig?:  {
        __typename: "AiConfiguration",
        id: string,
        name: string,
        aiParametersID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      usedIn?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      communicationSourceType: communicationSourceType,
      frontedWebsocketCommunicationSourceID?: string | null,
      frontedWebsocketCommunicationSource?:  {
        __typename: "AiWebsocket",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendQueueCommunicationSourceID?: string | null,
      backendQueueCommunicationSource?:  {
        __typename: "BackendQueue",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiSettings:  {
      __typename: "AiSettings",
      id: string,
      name: string,
      balancerUrl: string,
      processes?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAiProcessAiSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionAiProcessAiSettingsFilterInput | null,
};

export type OnDeleteAiProcessAiSettingsSubscription = {
  onDeleteAiProcessAiSettings?:  {
    __typename: "AiProcessAiSettings",
    id: string,
    aiProcessId: string,
    aiSettingsId: string,
    aiProcess:  {
      __typename: "AiProcess",
      id: string,
      tebeDeleted: boolean,
      name: string,
      taskTypeID: string,
      taskType?:  {
        __typename: "AiTaskTypes",
        id: string,
        types: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      aiConfigID: string,
      aiConfig?:  {
        __typename: "AiConfiguration",
        id: string,
        name: string,
        aiParametersID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      usedIn?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      communicationSourceType: communicationSourceType,
      frontedWebsocketCommunicationSourceID?: string | null,
      frontedWebsocketCommunicationSource?:  {
        __typename: "AiWebsocket",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      backendQueueCommunicationSourceID?: string | null,
      backendQueueCommunicationSource?:  {
        __typename: "BackendQueue",
        id: string,
        name: string,
        url: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    aiSettings:  {
      __typename: "AiSettings",
      id: string,
      name: string,
      balancerUrl: string,
      processes?:  {
        __typename: "ModelAiProcessAiSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBackendQueueBackendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionBackendQueueBackendSettingsFilterInput | null,
};

export type OnCreateBackendQueueBackendSettingsSubscription = {
  onCreateBackendQueueBackendSettings?:  {
    __typename: "BackendQueueBackendSettings",
    id: string,
    backendQueueId: string,
    backendSettingsId: string,
    backendQueue:  {
      __typename: "BackendQueue",
      id: string,
      name: string,
      url: string,
      usedIn?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBackendQueueBackendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionBackendQueueBackendSettingsFilterInput | null,
};

export type OnUpdateBackendQueueBackendSettingsSubscription = {
  onUpdateBackendQueueBackendSettings?:  {
    __typename: "BackendQueueBackendSettings",
    id: string,
    backendQueueId: string,
    backendSettingsId: string,
    backendQueue:  {
      __typename: "BackendQueue",
      id: string,
      name: string,
      url: string,
      usedIn?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBackendQueueBackendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionBackendQueueBackendSettingsFilterInput | null,
};

export type OnDeleteBackendQueueBackendSettingsSubscription = {
  onDeleteBackendQueueBackendSettings?:  {
    __typename: "BackendQueueBackendSettings",
    id: string,
    backendQueueId: string,
    backendSettingsId: string,
    backendQueue:  {
      __typename: "BackendQueue",
      id: string,
      name: string,
      url: string,
      usedIn?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBackendTopicBackendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionBackendTopicBackendSettingsFilterInput | null,
};

export type OnCreateBackendTopicBackendSettingsSubscription = {
  onCreateBackendTopicBackendSettings?:  {
    __typename: "BackendTopicBackendSettings",
    id: string,
    backendTopicId: string,
    backendSettingsId: string,
    backendTopic:  {
      __typename: "BackendTopic",
      id: string,
      name: string,
      arn: string,
      usedIn?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBackendTopicBackendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionBackendTopicBackendSettingsFilterInput | null,
};

export type OnUpdateBackendTopicBackendSettingsSubscription = {
  onUpdateBackendTopicBackendSettings?:  {
    __typename: "BackendTopicBackendSettings",
    id: string,
    backendTopicId: string,
    backendSettingsId: string,
    backendTopic:  {
      __typename: "BackendTopic",
      id: string,
      name: string,
      arn: string,
      usedIn?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBackendTopicBackendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionBackendTopicBackendSettingsFilterInput | null,
};

export type OnDeleteBackendTopicBackendSettingsSubscription = {
  onDeleteBackendTopicBackendSettings?:  {
    __typename: "BackendTopicBackendSettings",
    id: string,
    backendTopicId: string,
    backendSettingsId: string,
    backendTopic:  {
      __typename: "BackendTopic",
      id: string,
      name: string,
      arn: string,
      usedIn?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBackendDatabaseBackendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionBackendDatabaseBackendSettingsFilterInput | null,
};

export type OnCreateBackendDatabaseBackendSettingsSubscription = {
  onCreateBackendDatabaseBackendSettings?:  {
    __typename: "BackendDatabaseBackendSettings",
    id: string,
    backendDatabaseId: string,
    backendSettingsId: string,
    backendDatabase:  {
      __typename: "BackendDatabase",
      id: string,
      name: string,
      backendDatabaseTypeID: string,
      type?:  {
        __typename: "BackendDatabaseType",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      reference: string,
      usedIn?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBackendDatabaseBackendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionBackendDatabaseBackendSettingsFilterInput | null,
};

export type OnUpdateBackendDatabaseBackendSettingsSubscription = {
  onUpdateBackendDatabaseBackendSettings?:  {
    __typename: "BackendDatabaseBackendSettings",
    id: string,
    backendDatabaseId: string,
    backendSettingsId: string,
    backendDatabase:  {
      __typename: "BackendDatabase",
      id: string,
      name: string,
      backendDatabaseTypeID: string,
      type?:  {
        __typename: "BackendDatabaseType",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      reference: string,
      usedIn?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBackendDatabaseBackendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionBackendDatabaseBackendSettingsFilterInput | null,
};

export type OnDeleteBackendDatabaseBackendSettingsSubscription = {
  onDeleteBackendDatabaseBackendSettings?:  {
    __typename: "BackendDatabaseBackendSettings",
    id: string,
    backendDatabaseId: string,
    backendSettingsId: string,
    backendDatabase:  {
      __typename: "BackendDatabase",
      id: string,
      name: string,
      backendDatabaseTypeID: string,
      type?:  {
        __typename: "BackendDatabaseType",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      reference: string,
      usedIn?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBackendEndpointBackendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionBackendEndpointBackendSettingsFilterInput | null,
};

export type OnCreateBackendEndpointBackendSettingsSubscription = {
  onCreateBackendEndpointBackendSettings?:  {
    __typename: "BackendEndpointBackendSettings",
    id: string,
    backendEndpointId: string,
    backendSettingsId: string,
    backendEndpoint:  {
      __typename: "BackendEndpoint",
      id: string,
      name: string,
      url: string,
      description: string,
      methodID?: string | null,
      method?:  {
        __typename: "BackendEndpointMethod",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      parametersWIP?: string | null,
      usedInSettings?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBackendEndpointBackendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionBackendEndpointBackendSettingsFilterInput | null,
};

export type OnUpdateBackendEndpointBackendSettingsSubscription = {
  onUpdateBackendEndpointBackendSettings?:  {
    __typename: "BackendEndpointBackendSettings",
    id: string,
    backendEndpointId: string,
    backendSettingsId: string,
    backendEndpoint:  {
      __typename: "BackendEndpoint",
      id: string,
      name: string,
      url: string,
      description: string,
      methodID?: string | null,
      method?:  {
        __typename: "BackendEndpointMethod",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      parametersWIP?: string | null,
      usedInSettings?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBackendEndpointBackendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionBackendEndpointBackendSettingsFilterInput | null,
};

export type OnDeleteBackendEndpointBackendSettingsSubscription = {
  onDeleteBackendEndpointBackendSettings?:  {
    __typename: "BackendEndpointBackendSettings",
    id: string,
    backendEndpointId: string,
    backendSettingsId: string,
    backendEndpoint:  {
      __typename: "BackendEndpoint",
      id: string,
      name: string,
      url: string,
      description: string,
      methodID?: string | null,
      method?:  {
        __typename: "BackendEndpointMethod",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      parametersWIP?: string | null,
      usedInSettings?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelBackendEndpointAiApiToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    backendSettings:  {
      __typename: "BackendSettings",
      id: string,
      name: string,
      region: string,
      secretName: string,
      endpoints?:  {
        __typename: "ModelBackendEndpointBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      databases?:  {
        __typename: "ModelBackendDatabaseBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      queues?:  {
        __typename: "ModelBackendQueueBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      topics?:  {
        __typename: "ModelBackendTopicBackendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFrontendComponentFrontendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionFrontendComponentFrontendSettingsFilterInput | null,
};

export type OnCreateFrontendComponentFrontendSettingsSubscription = {
  onCreateFrontendComponentFrontendSettings?:  {
    __typename: "FrontendComponentFrontendSettings",
    id: string,
    frontendComponentId: string,
    frontendSettingsId: string,
    frontendComponent:  {
      __typename: "FrontendComponent",
      id: string,
      name: string,
      description: string,
      usedInSettings?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    frontendSettings:  {
      __typename: "FrontendSettings",
      id: string,
      name: string,
      domain: string,
      cssS3Url?: string | null,
      components?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFrontendComponentFrontendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionFrontendComponentFrontendSettingsFilterInput | null,
};

export type OnUpdateFrontendComponentFrontendSettingsSubscription = {
  onUpdateFrontendComponentFrontendSettings?:  {
    __typename: "FrontendComponentFrontendSettings",
    id: string,
    frontendComponentId: string,
    frontendSettingsId: string,
    frontendComponent:  {
      __typename: "FrontendComponent",
      id: string,
      name: string,
      description: string,
      usedInSettings?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    frontendSettings:  {
      __typename: "FrontendSettings",
      id: string,
      name: string,
      domain: string,
      cssS3Url?: string | null,
      components?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFrontendComponentFrontendSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionFrontendComponentFrontendSettingsFilterInput | null,
};

export type OnDeleteFrontendComponentFrontendSettingsSubscription = {
  onDeleteFrontendComponentFrontendSettings?:  {
    __typename: "FrontendComponentFrontendSettings",
    id: string,
    frontendComponentId: string,
    frontendSettingsId: string,
    frontendComponent:  {
      __typename: "FrontendComponent",
      id: string,
      name: string,
      description: string,
      usedInSettings?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      usedInTool?:  {
        __typename: "ModelFrontendComponentAiRenderToolConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    frontendSettings:  {
      __typename: "FrontendSettings",
      id: string,
      name: string,
      domain: string,
      cssS3Url?: string | null,
      components?:  {
        __typename: "ModelFrontendComponentFrontendSettingsConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
