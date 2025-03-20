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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import {
  listBackendDatabases,
  listBackendEndpoints,
  listBackendQueues,
  listBackendTopics,
} from "../graphql/queries";
import {
  createBackendDatabaseBackendSettings,
  createBackendEndpointBackendSettings,
  createBackendQueueBackendSettings,
  createBackendSettings,
  createBackendTopicBackendSettings,
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
export default function BackendSettingsCreateForm(props) {
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
    name: "",
    region: "",
    secretName: "",
    endpoints: [],
    databases: [],
    queues: [],
    topics: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [region, setRegion] = React.useState(initialValues.region);
  const [secretName, setSecretName] = React.useState(initialValues.secretName);
  const [endpoints, setEndpoints] = React.useState(initialValues.endpoints);
  const [endpointsLoading, setEndpointsLoading] = React.useState(false);
  const [endpointsRecords, setEndpointsRecords] = React.useState([]);
  const [databases, setDatabases] = React.useState(initialValues.databases);
  const [databasesLoading, setDatabasesLoading] = React.useState(false);
  const [databasesRecords, setDatabasesRecords] = React.useState([]);
  const [queues, setQueues] = React.useState(initialValues.queues);
  const [queuesLoading, setQueuesLoading] = React.useState(false);
  const [queuesRecords, setQueuesRecords] = React.useState([]);
  const [topics, setTopics] = React.useState(initialValues.topics);
  const [topicsLoading, setTopicsLoading] = React.useState(false);
  const [topicsRecords, setTopicsRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setRegion(initialValues.region);
    setSecretName(initialValues.secretName);
    setEndpoints(initialValues.endpoints);
    setCurrentEndpointsValue(undefined);
    setCurrentEndpointsDisplayValue("");
    setDatabases(initialValues.databases);
    setCurrentDatabasesValue(undefined);
    setCurrentDatabasesDisplayValue("");
    setQueues(initialValues.queues);
    setCurrentQueuesValue(undefined);
    setCurrentQueuesDisplayValue("");
    setTopics(initialValues.topics);
    setCurrentTopicsValue(undefined);
    setCurrentTopicsDisplayValue("");
    setErrors({});
  };
  const [currentEndpointsDisplayValue, setCurrentEndpointsDisplayValue] =
    React.useState("");
  const [currentEndpointsValue, setCurrentEndpointsValue] =
    React.useState(undefined);
  const endpointsRef = React.createRef();
  const [currentDatabasesDisplayValue, setCurrentDatabasesDisplayValue] =
    React.useState("");
  const [currentDatabasesValue, setCurrentDatabasesValue] =
    React.useState(undefined);
  const databasesRef = React.createRef();
  const [currentQueuesDisplayValue, setCurrentQueuesDisplayValue] =
    React.useState("");
  const [currentQueuesValue, setCurrentQueuesValue] = React.useState(undefined);
  const queuesRef = React.createRef();
  const [currentTopicsDisplayValue, setCurrentTopicsDisplayValue] =
    React.useState("");
  const [currentTopicsValue, setCurrentTopicsValue] = React.useState(undefined);
  const topicsRef = React.createRef();
  const getIDValue = {
    endpoints: (r) => JSON.stringify({ id: r?.id }),
    databases: (r) => JSON.stringify({ id: r?.id }),
    queues: (r) => JSON.stringify({ id: r?.id }),
    topics: (r) => JSON.stringify({ id: r?.id }),
  };
  const endpointsIdSet = new Set(
    Array.isArray(endpoints)
      ? endpoints.map((r) => getIDValue.endpoints?.(r))
      : getIDValue.endpoints?.(endpoints)
  );
  const databasesIdSet = new Set(
    Array.isArray(databases)
      ? databases.map((r) => getIDValue.databases?.(r))
      : getIDValue.databases?.(databases)
  );
  const queuesIdSet = new Set(
    Array.isArray(queues)
      ? queues.map((r) => getIDValue.queues?.(r))
      : getIDValue.queues?.(queues)
  );
  const topicsIdSet = new Set(
    Array.isArray(topics)
      ? topics.map((r) => getIDValue.topics?.(r))
      : getIDValue.topics?.(topics)
  );
  const getDisplayValue = {
    endpoints: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    databases: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    queues: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    topics: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    region: [{ type: "Required" }],
    secretName: [{ type: "Required" }],
    endpoints: [],
    databases: [],
    queues: [],
    topics: [],
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
  const fetchEndpointsRecords = async (value) => {
    setEndpointsLoading(true);
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
          query: listBackendEndpoints.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listBackendEndpoints?.items;
      var loaded = result.filter(
        (item) => !endpointsIdSet.has(getIDValue.endpoints?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setEndpointsRecords(newOptions.slice(0, autocompleteLength));
    setEndpointsLoading(false);
  };
  const fetchDatabasesRecords = async (value) => {
    setDatabasesLoading(true);
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
          query: listBackendDatabases.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listBackendDatabases?.items;
      var loaded = result.filter(
        (item) => !databasesIdSet.has(getIDValue.databases?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setDatabasesRecords(newOptions.slice(0, autocompleteLength));
    setDatabasesLoading(false);
  };
  const fetchQueuesRecords = async (value) => {
    setQueuesLoading(true);
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
        (item) => !queuesIdSet.has(getIDValue.queues?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setQueuesRecords(newOptions.slice(0, autocompleteLength));
    setQueuesLoading(false);
  };
  const fetchTopicsRecords = async (value) => {
    setTopicsLoading(true);
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
          query: listBackendTopics.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listBackendTopics?.items;
      var loaded = result.filter(
        (item) => !topicsIdSet.has(getIDValue.topics?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setTopicsRecords(newOptions.slice(0, autocompleteLength));
    setTopicsLoading(false);
  };
  React.useEffect(() => {
    fetchEndpointsRecords("");
    fetchDatabasesRecords("");
    fetchQueuesRecords("");
    fetchTopicsRecords("");
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
          name,
          region,
          secretName,
          endpoints,
          databases,
          queues,
          topics,
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
            name: modelFields.name,
            region: modelFields.region,
            secretName: modelFields.secretName,
          };
          const backendSettings = (
            await client.graphql({
              query: createBackendSettings.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createBackendSettings;
          const promises = [];
          promises.push(
            ...endpoints.reduce((promises, backendEndpoint) => {
              promises.push(
                client.graphql({
                  query: createBackendEndpointBackendSettings.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      backendSettingsId: backendSettings.id,
                      backendEndpointId: backendEndpoint.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          promises.push(
            ...databases.reduce((promises, backendDatabase) => {
              promises.push(
                client.graphql({
                  query: createBackendDatabaseBackendSettings.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      backendSettingsId: backendSettings.id,
                      backendDatabaseId: backendDatabase.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          promises.push(
            ...queues.reduce((promises, backendQueue) => {
              promises.push(
                client.graphql({
                  query: createBackendQueueBackendSettings.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      backendSettingsId: backendSettings.id,
                      backendQueueId: backendQueue.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          promises.push(
            ...topics.reduce((promises, backendTopic) => {
              promises.push(
                client.graphql({
                  query: createBackendTopicBackendSettings.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      backendSettingsId: backendSettings.id,
                      backendTopicId: backendTopic.id,
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
      {...getOverrideProps(overrides, "BackendSettingsCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              region,
              secretName,
              endpoints,
              databases,
              queues,
              topics,
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
      <TextField
        label="Region"
        isRequired={true}
        isReadOnly={false}
        value={region}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              region: value,
              secretName,
              endpoints,
              databases,
              queues,
              topics,
            };
            const result = onChange(modelFields);
            value = result?.region ?? value;
          }
          if (errors.region?.hasError) {
            runValidationTasks("region", value);
          }
          setRegion(value);
        }}
        onBlur={() => runValidationTasks("region", region)}
        errorMessage={errors.region?.errorMessage}
        hasError={errors.region?.hasError}
        {...getOverrideProps(overrides, "region")}
      ></TextField>
      <TextField
        label="Secret name"
        isRequired={true}
        isReadOnly={false}
        value={secretName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              region,
              secretName: value,
              endpoints,
              databases,
              queues,
              topics,
            };
            const result = onChange(modelFields);
            value = result?.secretName ?? value;
          }
          if (errors.secretName?.hasError) {
            runValidationTasks("secretName", value);
          }
          setSecretName(value);
        }}
        onBlur={() => runValidationTasks("secretName", secretName)}
        errorMessage={errors.secretName?.errorMessage}
        hasError={errors.secretName?.hasError}
        {...getOverrideProps(overrides, "secretName")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              region,
              secretName,
              endpoints: values,
              databases,
              queues,
              topics,
            };
            const result = onChange(modelFields);
            values = result?.endpoints ?? values;
          }
          setEndpoints(values);
          setCurrentEndpointsValue(undefined);
          setCurrentEndpointsDisplayValue("");
        }}
        currentFieldValue={currentEndpointsValue}
        label={"Endpoints"}
        items={endpoints}
        hasError={errors?.endpoints?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("endpoints", currentEndpointsValue)
        }
        errorMessage={errors?.endpoints?.errorMessage}
        getBadgeText={getDisplayValue.endpoints}
        setFieldValue={(model) => {
          setCurrentEndpointsDisplayValue(
            model ? getDisplayValue.endpoints(model) : ""
          );
          setCurrentEndpointsValue(model);
        }}
        inputFieldRef={endpointsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Endpoints"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search BackendEndpoint"
          value={currentEndpointsDisplayValue}
          options={endpointsRecords.map((r) => ({
            id: getIDValue.endpoints?.(r),
            label: getDisplayValue.endpoints?.(r),
          }))}
          isLoading={endpointsLoading}
          onSelect={({ id, label }) => {
            setCurrentEndpointsValue(
              endpointsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentEndpointsDisplayValue(label);
            runValidationTasks("endpoints", label);
          }}
          onClear={() => {
            setCurrentEndpointsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchEndpointsRecords(value);
            if (errors.endpoints?.hasError) {
              runValidationTasks("endpoints", value);
            }
            setCurrentEndpointsDisplayValue(value);
            setCurrentEndpointsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("endpoints", currentEndpointsDisplayValue)
          }
          errorMessage={errors.endpoints?.errorMessage}
          hasError={errors.endpoints?.hasError}
          ref={endpointsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "endpoints")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              region,
              secretName,
              endpoints,
              databases: values,
              queues,
              topics,
            };
            const result = onChange(modelFields);
            values = result?.databases ?? values;
          }
          setDatabases(values);
          setCurrentDatabasesValue(undefined);
          setCurrentDatabasesDisplayValue("");
        }}
        currentFieldValue={currentDatabasesValue}
        label={"Databases"}
        items={databases}
        hasError={errors?.databases?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("databases", currentDatabasesValue)
        }
        errorMessage={errors?.databases?.errorMessage}
        getBadgeText={getDisplayValue.databases}
        setFieldValue={(model) => {
          setCurrentDatabasesDisplayValue(
            model ? getDisplayValue.databases(model) : ""
          );
          setCurrentDatabasesValue(model);
        }}
        inputFieldRef={databasesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Databases"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search BackendDatabase"
          value={currentDatabasesDisplayValue}
          options={databasesRecords.map((r) => ({
            id: getIDValue.databases?.(r),
            label: getDisplayValue.databases?.(r),
          }))}
          isLoading={databasesLoading}
          onSelect={({ id, label }) => {
            setCurrentDatabasesValue(
              databasesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentDatabasesDisplayValue(label);
            runValidationTasks("databases", label);
          }}
          onClear={() => {
            setCurrentDatabasesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchDatabasesRecords(value);
            if (errors.databases?.hasError) {
              runValidationTasks("databases", value);
            }
            setCurrentDatabasesDisplayValue(value);
            setCurrentDatabasesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("databases", currentDatabasesDisplayValue)
          }
          errorMessage={errors.databases?.errorMessage}
          hasError={errors.databases?.hasError}
          ref={databasesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "databases")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              region,
              secretName,
              endpoints,
              databases,
              queues: values,
              topics,
            };
            const result = onChange(modelFields);
            values = result?.queues ?? values;
          }
          setQueues(values);
          setCurrentQueuesValue(undefined);
          setCurrentQueuesDisplayValue("");
        }}
        currentFieldValue={currentQueuesValue}
        label={"Queues"}
        items={queues}
        hasError={errors?.queues?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("queues", currentQueuesValue)
        }
        errorMessage={errors?.queues?.errorMessage}
        getBadgeText={getDisplayValue.queues}
        setFieldValue={(model) => {
          setCurrentQueuesDisplayValue(
            model ? getDisplayValue.queues(model) : ""
          );
          setCurrentQueuesValue(model);
        }}
        inputFieldRef={queuesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Queues"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search BackendQueue"
          value={currentQueuesDisplayValue}
          options={queuesRecords.map((r) => ({
            id: getIDValue.queues?.(r),
            label: getDisplayValue.queues?.(r),
          }))}
          isLoading={queuesLoading}
          onSelect={({ id, label }) => {
            setCurrentQueuesValue(
              queuesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentQueuesDisplayValue(label);
            runValidationTasks("queues", label);
          }}
          onClear={() => {
            setCurrentQueuesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchQueuesRecords(value);
            if (errors.queues?.hasError) {
              runValidationTasks("queues", value);
            }
            setCurrentQueuesDisplayValue(value);
            setCurrentQueuesValue(undefined);
          }}
          onBlur={() => runValidationTasks("queues", currentQueuesDisplayValue)}
          errorMessage={errors.queues?.errorMessage}
          hasError={errors.queues?.hasError}
          ref={queuesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "queues")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              region,
              secretName,
              endpoints,
              databases,
              queues,
              topics: values,
            };
            const result = onChange(modelFields);
            values = result?.topics ?? values;
          }
          setTopics(values);
          setCurrentTopicsValue(undefined);
          setCurrentTopicsDisplayValue("");
        }}
        currentFieldValue={currentTopicsValue}
        label={"Topics"}
        items={topics}
        hasError={errors?.topics?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("topics", currentTopicsValue)
        }
        errorMessage={errors?.topics?.errorMessage}
        getBadgeText={getDisplayValue.topics}
        setFieldValue={(model) => {
          setCurrentTopicsDisplayValue(
            model ? getDisplayValue.topics(model) : ""
          );
          setCurrentTopicsValue(model);
        }}
        inputFieldRef={topicsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Topics"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search BackendTopic"
          value={currentTopicsDisplayValue}
          options={topicsRecords.map((r) => ({
            id: getIDValue.topics?.(r),
            label: getDisplayValue.topics?.(r),
          }))}
          isLoading={topicsLoading}
          onSelect={({ id, label }) => {
            setCurrentTopicsValue(
              topicsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentTopicsDisplayValue(label);
            runValidationTasks("topics", label);
          }}
          onClear={() => {
            setCurrentTopicsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchTopicsRecords(value);
            if (errors.topics?.hasError) {
              runValidationTasks("topics", value);
            }
            setCurrentTopicsDisplayValue(value);
            setCurrentTopicsValue(undefined);
          }}
          onBlur={() => runValidationTasks("topics", currentTopicsDisplayValue)}
          errorMessage={errors.topics?.errorMessage}
          hasError={errors.topics?.hasError}
          ref={topicsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "topics")}
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
