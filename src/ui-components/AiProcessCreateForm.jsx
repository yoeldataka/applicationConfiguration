/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import {
  listAiConfigurations,
  listAiSettings,
  listAiTaskTypes,
  listAiWebsockets,
  listBackendQueues,
} from "../graphql/queries";
import {
  createAiProcess,
  createAiProcessAiSettings,
} from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function AiProcessCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    tebeDeleted: false,
    name: "",
    taskType: undefined,
    aiConfig: undefined,
    usedIn: [],
    communicationSourceType: "",
    frontedWebsocketCommunicationSource: undefined,
    backendQueueCommunicationSource: undefined,
  };
  const [tebeDeleted, setTebeDeleted] = React.useState(
    initialValues.tebeDeleted
  );
  const [name, setName] = React.useState(initialValues.name);
  const [taskType, setTaskType] = React.useState(initialValues.taskType);
  const [taskTypeLoading, setTaskTypeLoading] = React.useState(false);
  const [taskTypeRecords, setTaskTypeRecords] = React.useState([]);
  const [aiConfig, setAiConfig] = React.useState(initialValues.aiConfig);
  const [aiConfigLoading, setAiConfigLoading] = React.useState(false);
  const [aiConfigRecords, setAiConfigRecords] = React.useState([]);
  const [usedIn, setUsedIn] = React.useState(initialValues.usedIn);
  const [usedInLoading, setUsedInLoading] = React.useState(false);
  const [usedInRecords, setUsedInRecords] = React.useState([]);
  const [communicationSourceType, setCommunicationSourceType] = React.useState(
    initialValues.communicationSourceType
  );
  const [
    frontedWebsocketCommunicationSource,
    setFrontedWebsocketCommunicationSource,
  ] = React.useState(initialValues.frontedWebsocketCommunicationSource);
  const [
    frontedWebsocketCommunicationSourceLoading,
    setFrontedWebsocketCommunicationSourceLoading,
  ] = React.useState(false);
  const [
    frontedWebsocketCommunicationSourceRecords,
    setFrontedWebsocketCommunicationSourceRecords,
  ] = React.useState([]);
  const [backendQueueCommunicationSource, setBackendQueueCommunicationSource] =
    React.useState(initialValues.backendQueueCommunicationSource);
  const [
    backendQueueCommunicationSourceLoading,
    setBackendQueueCommunicationSourceLoading,
  ] = React.useState(false);
  const [
    backendQueueCommunicationSourceRecords,
    setBackendQueueCommunicationSourceRecords,
  ] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTebeDeleted(initialValues.tebeDeleted);
    setName(initialValues.name);
    setTaskType(initialValues.taskType);
    setCurrentTaskTypeValue(undefined);
    setCurrentTaskTypeDisplayValue("");
    setAiConfig(initialValues.aiConfig);
    setCurrentAiConfigValue(undefined);
    setCurrentAiConfigDisplayValue("");
    setUsedIn(initialValues.usedIn);
    setCurrentUsedInValue(undefined);
    setCurrentUsedInDisplayValue("");
    setCommunicationSourceType(initialValues.communicationSourceType);
    setFrontedWebsocketCommunicationSource(
      initialValues.frontedWebsocketCommunicationSource
    );
    setCurrentFrontedWebsocketCommunicationSourceValue(undefined);
    setCurrentFrontedWebsocketCommunicationSourceDisplayValue("");
    setBackendQueueCommunicationSource(
      initialValues.backendQueueCommunicationSource
    );
    setCurrentBackendQueueCommunicationSourceValue(undefined);
    setCurrentBackendQueueCommunicationSourceDisplayValue("");
    setErrors({});
  };
  const [currentTaskTypeDisplayValue, setCurrentTaskTypeDisplayValue] =
    React.useState("");
  const [currentTaskTypeValue, setCurrentTaskTypeValue] =
    React.useState(undefined);
  const taskTypeRef = React.createRef();
  const [currentAiConfigDisplayValue, setCurrentAiConfigDisplayValue] =
    React.useState("");
  const [currentAiConfigValue, setCurrentAiConfigValue] =
    React.useState(undefined);
  const aiConfigRef = React.createRef();
  const [currentUsedInDisplayValue, setCurrentUsedInDisplayValue] =
    React.useState("");
  const [currentUsedInValue, setCurrentUsedInValue] = React.useState(undefined);
  const usedInRef = React.createRef();
  const [
    currentFrontedWebsocketCommunicationSourceDisplayValue,
    setCurrentFrontedWebsocketCommunicationSourceDisplayValue,
  ] = React.useState("");
  const [
    currentFrontedWebsocketCommunicationSourceValue,
    setCurrentFrontedWebsocketCommunicationSourceValue,
  ] = React.useState(undefined);
  const frontedWebsocketCommunicationSourceRef = React.createRef();
  const [
    currentBackendQueueCommunicationSourceDisplayValue,
    setCurrentBackendQueueCommunicationSourceDisplayValue,
  ] = React.useState("");
  const [
    currentBackendQueueCommunicationSourceValue,
    setCurrentBackendQueueCommunicationSourceValue,
  ] = React.useState(undefined);
  const backendQueueCommunicationSourceRef = React.createRef();
  const getIDValue = {
    taskType: (r) => JSON.stringify({ id: r?.id }),
    aiConfig: (r) => JSON.stringify({ id: r?.id }),
    usedIn: (r) => JSON.stringify({ id: r?.id }),
    frontedWebsocketCommunicationSource: (r) => JSON.stringify({ id: r?.id }),
    backendQueueCommunicationSource: (r) => JSON.stringify({ id: r?.id }),
  };
  const taskTypeIdSet = new Set(
    Array.isArray(taskType)
      ? taskType.map((r) => getIDValue.taskType?.(r))
      : getIDValue.taskType?.(taskType)
  );
  const aiConfigIdSet = new Set(
    Array.isArray(aiConfig)
      ? aiConfig.map((r) => getIDValue.aiConfig?.(r))
      : getIDValue.aiConfig?.(aiConfig)
  );
  const usedInIdSet = new Set(
    Array.isArray(usedIn)
      ? usedIn.map((r) => getIDValue.usedIn?.(r))
      : getIDValue.usedIn?.(usedIn)
  );
  const frontedWebsocketCommunicationSourceIdSet = new Set(
    Array.isArray(frontedWebsocketCommunicationSource)
      ? frontedWebsocketCommunicationSource.map((r) =>
          getIDValue.frontedWebsocketCommunicationSource?.(r)
        )
      : getIDValue.frontedWebsocketCommunicationSource?.(
          frontedWebsocketCommunicationSource
        )
  );
  const backendQueueCommunicationSourceIdSet = new Set(
    Array.isArray(backendQueueCommunicationSource)
      ? backendQueueCommunicationSource.map((r) =>
          getIDValue.backendQueueCommunicationSource?.(r)
        )
      : getIDValue.backendQueueCommunicationSource?.(
          backendQueueCommunicationSource
        )
  );
  const getDisplayValue = {
    taskType: (r) => `${r?.types ? r?.types + " - " : ""}${r?.id}`,
    aiConfig: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    usedIn: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    frontedWebsocketCommunicationSource: (r) =>
      `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    backendQueueCommunicationSource: (r) =>
      `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    tebeDeleted: [{ type: "Required" }],
    name: [{ type: "Required" }],
    taskType: [],
    aiConfig: [],
    usedIn: [],
    communicationSourceType: [{ type: "Required" }],
    frontedWebsocketCommunicationSource: [],
    backendQueueCommunicationSource: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const fetchTaskTypeRecords = async (value) => {
    setTaskTypeLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ types: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listAiTaskTypes.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAiTaskTypes?.items;
      var loaded = result.filter(
        (item) => !taskTypeIdSet.has(getIDValue.taskType?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setTaskTypeRecords(newOptions.slice(0, autocompleteLength));
    setTaskTypeLoading(false);
  };
  const fetchAiConfigRecords = async (value) => {
    setAiConfigLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listAiConfigurations.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAiConfigurations?.items;
      var loaded = result.filter(
        (item) => !aiConfigIdSet.has(getIDValue.aiConfig?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setAiConfigRecords(newOptions.slice(0, autocompleteLength));
    setAiConfigLoading(false);
  };
  const fetchUsedInRecords = async (value) => {
    setUsedInLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listAiSettings.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAiSettings?.items;
      var loaded = result.filter(
        (item) => !usedInIdSet.has(getIDValue.usedIn?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setUsedInRecords(newOptions.slice(0, autocompleteLength));
    setUsedInLoading(false);
  };
  const fetchFrontedWebsocketCommunicationSourceRecords = async (value) => {
    setFrontedWebsocketCommunicationSourceLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listAiWebsockets.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAiWebsockets?.items;
      var loaded = result.filter(
        (item) =>
          !frontedWebsocketCommunicationSourceIdSet.has(
            getIDValue.frontedWebsocketCommunicationSource?.(item)
          )
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setFrontedWebsocketCommunicationSourceRecords(
      newOptions.slice(0, autocompleteLength)
    );
    setFrontedWebsocketCommunicationSourceLoading(false);
  };
  const fetchBackendQueueCommunicationSourceRecords = async (value) => {
    setBackendQueueCommunicationSourceLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listBackendQueues.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listBackendQueues?.items;
      var loaded = result.filter(
        (item) =>
          !backendQueueCommunicationSourceIdSet.has(
            getIDValue.backendQueueCommunicationSource?.(item)
          )
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setBackendQueueCommunicationSourceRecords(
      newOptions.slice(0, autocompleteLength)
    );
    setBackendQueueCommunicationSourceLoading(false);
  };
  React.useEffect(() => {
    fetchTaskTypeRecords("");
    fetchAiConfigRecords("");
    fetchUsedInRecords("");
    fetchFrontedWebsocketCommunicationSourceRecords("");
    fetchBackendQueueCommunicationSourceRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          tebeDeleted,
          name,
          taskType,
          aiConfig,
          usedIn,
          communicationSourceType,
          frontedWebsocketCommunicationSource,
          backendQueueCommunicationSource,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            tebeDeleted: modelFields.tebeDeleted,
            name: modelFields.name,
            taskTypeID: modelFields?.taskType?.id,
            aiConfigID: modelFields?.aiConfig?.id,
            communicationSourceType: modelFields.communicationSourceType,
            frontedWebsocketCommunicationSourceID:
              modelFields?.frontedWebsocketCommunicationSource?.id,
            backendQueueCommunicationSourceID:
              modelFields?.backendQueueCommunicationSource?.id,
          };
          const aiProcess = (
            await client.graphql({
              query: createAiProcess.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createAiProcess;
          const promises = [];
          promises.push(
            ...usedIn.reduce((promises, aiSettings) => {
              promises.push(
                client.graphql({
                  query: createAiProcessAiSettings.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      aiProcessId: aiProcess.id,
                      aiSettingsId: aiSettings.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AiProcessCreateForm")}
      {...rest}
    >
      <SwitchField
        label="Tebe deleted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={tebeDeleted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              tebeDeleted: value,
              name,
              taskType,
              aiConfig,
              usedIn,
              communicationSourceType,
              frontedWebsocketCommunicationSource,
              backendQueueCommunicationSource,
            };
            const result = onChange(modelFields);
            value = result?.tebeDeleted ?? value;
          }
          if (errors.tebeDeleted?.hasError) {
            runValidationTasks("tebeDeleted", value);
          }
          setTebeDeleted(value);
        }}
        onBlur={() => runValidationTasks("tebeDeleted", tebeDeleted)}
        errorMessage={errors.tebeDeleted?.errorMessage}
        hasError={errors.tebeDeleted?.hasError}
        {...getOverrideProps(overrides, "tebeDeleted")}
      ></SwitchField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tebeDeleted,
              name: value,
              taskType,
              aiConfig,
              usedIn,
              communicationSourceType,
              frontedWebsocketCommunicationSource,
              backendQueueCommunicationSource,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              tebeDeleted,
              name,
              taskType: value,
              aiConfig,
              usedIn,
              communicationSourceType,
              frontedWebsocketCommunicationSource,
              backendQueueCommunicationSource,
            };
            const result = onChange(modelFields);
            value = result?.taskType ?? value;
          }
          setTaskType(value);
          setCurrentTaskTypeValue(undefined);
          setCurrentTaskTypeDisplayValue("");
        }}
        currentFieldValue={currentTaskTypeValue}
        label={"Task type"}
        items={taskType ? [taskType] : []}
        hasError={errors?.taskType?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("taskType", currentTaskTypeValue)
        }
        errorMessage={errors?.taskType?.errorMessage}
        getBadgeText={getDisplayValue.taskType}
        setFieldValue={(model) => {
          setCurrentTaskTypeDisplayValue(
            model ? getDisplayValue.taskType(model) : ""
          );
          setCurrentTaskTypeValue(model);
        }}
        inputFieldRef={taskTypeRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Task type"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AiTaskTypes"
          value={currentTaskTypeDisplayValue}
          options={taskTypeRecords
            .filter((r) => !taskTypeIdSet.has(getIDValue.taskType?.(r)))
            .map((r) => ({
              id: getIDValue.taskType?.(r),
              label: getDisplayValue.taskType?.(r),
            }))}
          isLoading={taskTypeLoading}
          onSelect={({ id, label }) => {
            setCurrentTaskTypeValue(
              taskTypeRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentTaskTypeDisplayValue(label);
            runValidationTasks("taskType", label);
          }}
          onClear={() => {
            setCurrentTaskTypeDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchTaskTypeRecords(value);
            if (errors.taskType?.hasError) {
              runValidationTasks("taskType", value);
            }
            setCurrentTaskTypeDisplayValue(value);
            setCurrentTaskTypeValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("taskType", currentTaskTypeDisplayValue)
          }
          errorMessage={errors.taskType?.errorMessage}
          hasError={errors.taskType?.hasError}
          ref={taskTypeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "taskType")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              tebeDeleted,
              name,
              taskType,
              aiConfig: value,
              usedIn,
              communicationSourceType,
              frontedWebsocketCommunicationSource,
              backendQueueCommunicationSource,
            };
            const result = onChange(modelFields);
            value = result?.aiConfig ?? value;
          }
          setAiConfig(value);
          setCurrentAiConfigValue(undefined);
          setCurrentAiConfigDisplayValue("");
        }}
        currentFieldValue={currentAiConfigValue}
        label={"Ai config"}
        items={aiConfig ? [aiConfig] : []}
        hasError={errors?.aiConfig?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("aiConfig", currentAiConfigValue)
        }
        errorMessage={errors?.aiConfig?.errorMessage}
        getBadgeText={getDisplayValue.aiConfig}
        setFieldValue={(model) => {
          setCurrentAiConfigDisplayValue(
            model ? getDisplayValue.aiConfig(model) : ""
          );
          setCurrentAiConfigValue(model);
        }}
        inputFieldRef={aiConfigRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Ai config"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AiConfiguration"
          value={currentAiConfigDisplayValue}
          options={aiConfigRecords
            .filter((r) => !aiConfigIdSet.has(getIDValue.aiConfig?.(r)))
            .map((r) => ({
              id: getIDValue.aiConfig?.(r),
              label: getDisplayValue.aiConfig?.(r),
            }))}
          isLoading={aiConfigLoading}
          onSelect={({ id, label }) => {
            setCurrentAiConfigValue(
              aiConfigRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAiConfigDisplayValue(label);
            runValidationTasks("aiConfig", label);
          }}
          onClear={() => {
            setCurrentAiConfigDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchAiConfigRecords(value);
            if (errors.aiConfig?.hasError) {
              runValidationTasks("aiConfig", value);
            }
            setCurrentAiConfigDisplayValue(value);
            setCurrentAiConfigValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("aiConfig", currentAiConfigDisplayValue)
          }
          errorMessage={errors.aiConfig?.errorMessage}
          hasError={errors.aiConfig?.hasError}
          ref={aiConfigRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "aiConfig")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              tebeDeleted,
              name,
              taskType,
              aiConfig,
              usedIn: values,
              communicationSourceType,
              frontedWebsocketCommunicationSource,
              backendQueueCommunicationSource,
            };
            const result = onChange(modelFields);
            values = result?.usedIn ?? values;
          }
          setUsedIn(values);
          setCurrentUsedInValue(undefined);
          setCurrentUsedInDisplayValue("");
        }}
        currentFieldValue={currentUsedInValue}
        label={"Used in"}
        items={usedIn}
        hasError={errors?.usedIn?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("usedIn", currentUsedInValue)
        }
        errorMessage={errors?.usedIn?.errorMessage}
        getBadgeText={getDisplayValue.usedIn}
        setFieldValue={(model) => {
          setCurrentUsedInDisplayValue(
            model ? getDisplayValue.usedIn(model) : ""
          );
          setCurrentUsedInValue(model);
        }}
        inputFieldRef={usedInRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Used in"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AiSettings"
          value={currentUsedInDisplayValue}
          options={usedInRecords.map((r) => ({
            id: getIDValue.usedIn?.(r),
            label: getDisplayValue.usedIn?.(r),
          }))}
          isLoading={usedInLoading}
          onSelect={({ id, label }) => {
            setCurrentUsedInValue(
              usedInRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUsedInDisplayValue(label);
            runValidationTasks("usedIn", label);
          }}
          onClear={() => {
            setCurrentUsedInDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchUsedInRecords(value);
            if (errors.usedIn?.hasError) {
              runValidationTasks("usedIn", value);
            }
            setCurrentUsedInDisplayValue(value);
            setCurrentUsedInValue(undefined);
          }}
          onBlur={() => runValidationTasks("usedIn", currentUsedInDisplayValue)}
          errorMessage={errors.usedIn?.errorMessage}
          hasError={errors.usedIn?.hasError}
          ref={usedInRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "usedIn")}
        ></Autocomplete>
      </ArrayField>
      <SelectField
        label="Communication source type"
        placeholder="Please select an option"
        isDisabled={false}
        value={communicationSourceType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              tebeDeleted,
              name,
              taskType,
              aiConfig,
              usedIn,
              communicationSourceType: value,
              frontedWebsocketCommunicationSource,
              backendQueueCommunicationSource,
            };
            const result = onChange(modelFields);
            value = result?.communicationSourceType ?? value;
          }
          if (errors.communicationSourceType?.hasError) {
            runValidationTasks("communicationSourceType", value);
          }
          setCommunicationSourceType(value);
        }}
        onBlur={() =>
          runValidationTasks("communicationSourceType", communicationSourceType)
        }
        errorMessage={errors.communicationSourceType?.errorMessage}
        hasError={errors.communicationSourceType?.hasError}
        {...getOverrideProps(overrides, "communicationSourceType")}
      >
        <option
          children="Websocket"
          value="WEBSOCKET"
          {...getOverrideProps(overrides, "communicationSourceTypeoption0")}
        ></option>
        <option
          children="Backend queue"
          value="BACKEND_QUEUE"
          {...getOverrideProps(overrides, "communicationSourceTypeoption1")}
        ></option>
      </SelectField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              tebeDeleted,
              name,
              taskType,
              aiConfig,
              usedIn,
              communicationSourceType,
              frontedWebsocketCommunicationSource: value,
              backendQueueCommunicationSource,
            };
            const result = onChange(modelFields);
            value = result?.frontedWebsocketCommunicationSource ?? value;
          }
          setFrontedWebsocketCommunicationSource(value);
          setCurrentFrontedWebsocketCommunicationSourceValue(undefined);
          setCurrentFrontedWebsocketCommunicationSourceDisplayValue("");
        }}
        currentFieldValue={currentFrontedWebsocketCommunicationSourceValue}
        label={"Fronted websocket communication source"}
        items={
          frontedWebsocketCommunicationSource
            ? [frontedWebsocketCommunicationSource]
            : []
        }
        hasError={errors?.frontedWebsocketCommunicationSource?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "frontedWebsocketCommunicationSource",
            currentFrontedWebsocketCommunicationSourceValue
          )
        }
        errorMessage={errors?.frontedWebsocketCommunicationSource?.errorMessage}
        getBadgeText={getDisplayValue.frontedWebsocketCommunicationSource}
        setFieldValue={(model) => {
          setCurrentFrontedWebsocketCommunicationSourceDisplayValue(
            model
              ? getDisplayValue.frontedWebsocketCommunicationSource(model)
              : ""
          );
          setCurrentFrontedWebsocketCommunicationSourceValue(model);
        }}
        inputFieldRef={frontedWebsocketCommunicationSourceRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Fronted websocket communication source"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AiWebsocket"
          value={currentFrontedWebsocketCommunicationSourceDisplayValue}
          options={frontedWebsocketCommunicationSourceRecords
            .filter(
              (r) =>
                !frontedWebsocketCommunicationSourceIdSet.has(
                  getIDValue.frontedWebsocketCommunicationSource?.(r)
                )
            )
            .map((r) => ({
              id: getIDValue.frontedWebsocketCommunicationSource?.(r),
              label: getDisplayValue.frontedWebsocketCommunicationSource?.(r),
            }))}
          isLoading={frontedWebsocketCommunicationSourceLoading}
          onSelect={({ id, label }) => {
            setCurrentFrontedWebsocketCommunicationSourceValue(
              frontedWebsocketCommunicationSourceRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentFrontedWebsocketCommunicationSourceDisplayValue(label);
            runValidationTasks("frontedWebsocketCommunicationSource", label);
          }}
          onClear={() => {
            setCurrentFrontedWebsocketCommunicationSourceDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchFrontedWebsocketCommunicationSourceRecords(value);
            if (errors.frontedWebsocketCommunicationSource?.hasError) {
              runValidationTasks("frontedWebsocketCommunicationSource", value);
            }
            setCurrentFrontedWebsocketCommunicationSourceDisplayValue(value);
            setCurrentFrontedWebsocketCommunicationSourceValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "frontedWebsocketCommunicationSource",
              currentFrontedWebsocketCommunicationSourceDisplayValue
            )
          }
          errorMessage={
            errors.frontedWebsocketCommunicationSource?.errorMessage
          }
          hasError={errors.frontedWebsocketCommunicationSource?.hasError}
          ref={frontedWebsocketCommunicationSourceRef}
          labelHidden={true}
          {...getOverrideProps(
            overrides,
            "frontedWebsocketCommunicationSource"
          )}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              tebeDeleted,
              name,
              taskType,
              aiConfig,
              usedIn,
              communicationSourceType,
              frontedWebsocketCommunicationSource,
              backendQueueCommunicationSource: value,
            };
            const result = onChange(modelFields);
            value = result?.backendQueueCommunicationSource ?? value;
          }
          setBackendQueueCommunicationSource(value);
          setCurrentBackendQueueCommunicationSourceValue(undefined);
          setCurrentBackendQueueCommunicationSourceDisplayValue("");
        }}
        currentFieldValue={currentBackendQueueCommunicationSourceValue}
        label={"Backend queue communication source"}
        items={
          backendQueueCommunicationSource
            ? [backendQueueCommunicationSource]
            : []
        }
        hasError={errors?.backendQueueCommunicationSource?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "backendQueueCommunicationSource",
            currentBackendQueueCommunicationSourceValue
          )
        }
        errorMessage={errors?.backendQueueCommunicationSource?.errorMessage}
        getBadgeText={getDisplayValue.backendQueueCommunicationSource}
        setFieldValue={(model) => {
          setCurrentBackendQueueCommunicationSourceDisplayValue(
            model ? getDisplayValue.backendQueueCommunicationSource(model) : ""
          );
          setCurrentBackendQueueCommunicationSourceValue(model);
        }}
        inputFieldRef={backendQueueCommunicationSourceRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Backend queue communication source"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search BackendQueue"
          value={currentBackendQueueCommunicationSourceDisplayValue}
          options={backendQueueCommunicationSourceRecords
            .filter(
              (r) =>
                !backendQueueCommunicationSourceIdSet.has(
                  getIDValue.backendQueueCommunicationSource?.(r)
                )
            )
            .map((r) => ({
              id: getIDValue.backendQueueCommunicationSource?.(r),
              label: getDisplayValue.backendQueueCommunicationSource?.(r),
            }))}
          isLoading={backendQueueCommunicationSourceLoading}
          onSelect={({ id, label }) => {
            setCurrentBackendQueueCommunicationSourceValue(
              backendQueueCommunicationSourceRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentBackendQueueCommunicationSourceDisplayValue(label);
            runValidationTasks("backendQueueCommunicationSource", label);
          }}
          onClear={() => {
            setCurrentBackendQueueCommunicationSourceDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchBackendQueueCommunicationSourceRecords(value);
            if (errors.backendQueueCommunicationSource?.hasError) {
              runValidationTasks("backendQueueCommunicationSource", value);
            }
            setCurrentBackendQueueCommunicationSourceDisplayValue(value);
            setCurrentBackendQueueCommunicationSourceValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "backendQueueCommunicationSource",
              currentBackendQueueCommunicationSourceDisplayValue
            )
          }
          errorMessage={errors.backendQueueCommunicationSource?.errorMessage}
          hasError={errors.backendQueueCommunicationSource?.hasError}
          ref={backendQueueCommunicationSourceRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "backendQueueCommunicationSource")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
