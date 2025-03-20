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
import {
  aiApiToolAiToolGroupsByAiApiToolId,
  backendEndpointAiApiToolsByAiApiToolId,
  getAiApiTool,
  listAiApiToolAiToolGroups,
  listAiToolGroups,
  listBackendEndpointAiApiTools,
  listBackendEndpoints,
} from "../graphql/queries";
import { generateClient } from "aws-amplify/api";
import {
  createAiApiToolAiToolGroup,
  createBackendEndpointAiApiTool,
  deleteAiApiToolAiToolGroup,
  deleteBackendEndpointAiApiTool,
  updateAiApiTool,
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
export default function AiApiToolUpdateForm(props) {
  const {
    id: idProp,
    aiApiTool: aiApiToolModelProp,
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
    func: "",
    useCases: "",
    description: "",
    payload: "",
    endpoint: [],
    usedIn: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [func, setFunc] = React.useState(initialValues.func);
  const [useCases, setUseCases] = React.useState(initialValues.useCases);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [payload, setPayload] = React.useState(initialValues.payload);
  const [endpoint, setEndpoint] = React.useState(initialValues.endpoint);
  const [endpointLoading, setEndpointLoading] = React.useState(false);
  const [endpointRecords, setEndpointRecords] = React.useState([]);
  const [usedIn, setUsedIn] = React.useState(initialValues.usedIn);
  const [usedInLoading, setUsedInLoading] = React.useState(false);
  const [usedInRecords, setUsedInRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = aiApiToolRecord
      ? {
          ...initialValues,
          ...aiApiToolRecord,
          endpoint: linkedEndpoint,
          usedIn: linkedUsedIn,
        }
      : initialValues;
    setName(cleanValues.name);
    setFunc(cleanValues.func);
    setUseCases(cleanValues.useCases);
    setDescription(cleanValues.description);
    setPayload(cleanValues.payload);
    setEndpoint(cleanValues.endpoint ?? []);
    setCurrentEndpointValue(undefined);
    setCurrentEndpointDisplayValue("");
    setUsedIn(cleanValues.usedIn ?? []);
    setCurrentUsedInValue(undefined);
    setCurrentUsedInDisplayValue("");
    setErrors({});
  };
  const [aiApiToolRecord, setAiApiToolRecord] =
    React.useState(aiApiToolModelProp);
  const [linkedEndpoint, setLinkedEndpoint] = React.useState([]);
  const canUnlinkEndpoint = false;
  const [linkedUsedIn, setLinkedUsedIn] = React.useState([]);
  const canUnlinkUsedIn = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAiApiTool.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAiApiTool
        : aiApiToolModelProp;
      const linkedEndpoint = record
        ? (
            await client.graphql({
              query: backendEndpointAiApiToolsByAiApiToolId.replaceAll(
                "__typename",
                ""
              ),
              variables: {
                aiApiToolId: record.id,
              },
            })
          ).data.backendEndpointAiApiToolsByAiApiToolId.items.map(
            (t) => t.backendEndpoint
          )
        : [];
      setLinkedEndpoint(linkedEndpoint);
      const linkedUsedIn = record
        ? (
            await client.graphql({
              query: aiApiToolAiToolGroupsByAiApiToolId.replaceAll(
                "__typename",
                ""
              ),
              variables: {
                aiApiToolId: record.id,
              },
            })
          ).data.aiApiToolAiToolGroupsByAiApiToolId.items.map(
            (t) => t.aiToolGroup
          )
        : [];
      setLinkedUsedIn(linkedUsedIn);
      setAiApiToolRecord(record);
    };
    queryData();
  }, [idProp, aiApiToolModelProp]);
  React.useEffect(resetStateValues, [
    aiApiToolRecord,
    linkedEndpoint,
    linkedUsedIn,
  ]);
  const [currentEndpointDisplayValue, setCurrentEndpointDisplayValue] =
    React.useState("");
  const [currentEndpointValue, setCurrentEndpointValue] =
    React.useState(undefined);
  const endpointRef = React.createRef();
  const [currentUsedInDisplayValue, setCurrentUsedInDisplayValue] =
    React.useState("");
  const [currentUsedInValue, setCurrentUsedInValue] = React.useState(undefined);
  const usedInRef = React.createRef();
  const getIDValue = {
    endpoint: (r) => JSON.stringify({ id: r?.id }),
    usedIn: (r) => JSON.stringify({ id: r?.id }),
  };
  const endpointIdSet = new Set(
    Array.isArray(endpoint)
      ? endpoint.map((r) => getIDValue.endpoint?.(r))
      : getIDValue.endpoint?.(endpoint)
  );
  const usedInIdSet = new Set(
    Array.isArray(usedIn)
      ? usedIn.map((r) => getIDValue.usedIn?.(r))
      : getIDValue.usedIn?.(usedIn)
  );
  const getDisplayValue = {
    endpoint: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    usedIn: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    func: [{ type: "Required" }],
    useCases: [{ type: "Required" }],
    description: [{ type: "Required" }],
    payload: [],
    endpoint: [
      { type: "Required", validationMessage: "BackendEndpoint is required." },
    ],
    usedIn: [],
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
  const fetchEndpointRecords = async (value) => {
    setEndpointLoading(true);
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
        (item) => !endpointIdSet.has(getIDValue.endpoint?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setEndpointRecords(newOptions.slice(0, autocompleteLength));
    setEndpointLoading(false);
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
          query: listAiToolGroups.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAiToolGroups?.items;
      var loaded = result.filter(
        (item) => !usedInIdSet.has(getIDValue.usedIn?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setUsedInRecords(newOptions.slice(0, autocompleteLength));
    setUsedInLoading(false);
  };
  React.useEffect(() => {
    fetchEndpointRecords("");
    fetchUsedInRecords("");
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
          func,
          useCases,
          description,
          payload: payload ?? null,
          endpoint,
          usedIn: usedIn ?? null,
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
          const promises = [];
          const endpointToLinkMap = new Map();
          const endpointToUnLinkMap = new Map();
          const endpointMap = new Map();
          const linkedEndpointMap = new Map();
          endpoint.forEach((r) => {
            const count = endpointMap.get(getIDValue.endpoint?.(r));
            const newCount = count ? count + 1 : 1;
            endpointMap.set(getIDValue.endpoint?.(r), newCount);
          });
          linkedEndpoint.forEach((r) => {
            const count = linkedEndpointMap.get(getIDValue.endpoint?.(r));
            const newCount = count ? count + 1 : 1;
            linkedEndpointMap.set(getIDValue.endpoint?.(r), newCount);
          });
          linkedEndpointMap.forEach((count, id) => {
            const newCount = endpointMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                endpointToUnLinkMap.set(id, diffCount);
              }
            } else {
              endpointToUnLinkMap.set(id, count);
            }
          });
          endpointMap.forEach((count, id) => {
            const originalCount = linkedEndpointMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                endpointToLinkMap.set(id, diffCount);
              }
            } else {
              endpointToLinkMap.set(id, count);
            }
          });
          endpointToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const backendEndpointAiApiToolRecords = (
              await client.graphql({
                query: listBackendEndpointAiApiTools.replaceAll(
                  "__typename",
                  ""
                ),
                variables: {
                  filter: {
                    and: [
                      { backendEndpointId: { eq: recordKeys.id } },
                      { aiApiToolId: { eq: aiApiToolRecord.id } },
                    ],
                  },
                },
              })
            )?.data?.listBackendEndpointAiApiTools?.items;
            for (let i = 0; i < count; i++) {
              promises.push(
                client.graphql({
                  query: deleteBackendEndpointAiApiTool.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      id: backendEndpointAiApiToolRecords[i].id,
                    },
                  },
                })
              );
            }
          });
          endpointToLinkMap.forEach((count, id) => {
            const backendEndpointToLink = endpointRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                client.graphql({
                  query: createBackendEndpointAiApiTool.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      aiApiToolId: aiApiToolRecord.id,
                      backendEndpointId: backendEndpointToLink.id,
                    },
                  },
                })
              );
            }
          });
          const usedInToLinkMap = new Map();
          const usedInToUnLinkMap = new Map();
          const usedInMap = new Map();
          const linkedUsedInMap = new Map();
          usedIn.forEach((r) => {
            const count = usedInMap.get(getIDValue.usedIn?.(r));
            const newCount = count ? count + 1 : 1;
            usedInMap.set(getIDValue.usedIn?.(r), newCount);
          });
          linkedUsedIn.forEach((r) => {
            const count = linkedUsedInMap.get(getIDValue.usedIn?.(r));
            const newCount = count ? count + 1 : 1;
            linkedUsedInMap.set(getIDValue.usedIn?.(r), newCount);
          });
          linkedUsedInMap.forEach((count, id) => {
            const newCount = usedInMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                usedInToUnLinkMap.set(id, diffCount);
              }
            } else {
              usedInToUnLinkMap.set(id, count);
            }
          });
          usedInMap.forEach((count, id) => {
            const originalCount = linkedUsedInMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                usedInToLinkMap.set(id, diffCount);
              }
            } else {
              usedInToLinkMap.set(id, count);
            }
          });
          usedInToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const aiApiToolAiToolGroupRecords = (
              await client.graphql({
                query: listAiApiToolAiToolGroups.replaceAll("__typename", ""),
                variables: {
                  filter: {
                    and: [
                      { aiToolGroupId: { eq: recordKeys.id } },
                      { aiApiToolId: { eq: aiApiToolRecord.id } },
                    ],
                  },
                },
              })
            )?.data?.listAiApiToolAiToolGroups?.items;
            for (let i = 0; i < count; i++) {
              promises.push(
                client.graphql({
                  query: deleteAiApiToolAiToolGroup.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      id: aiApiToolAiToolGroupRecords[i].id,
                    },
                  },
                })
              );
            }
          });
          usedInToLinkMap.forEach((count, id) => {
            const aiToolGroupToLink = usedInRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                client.graphql({
                  query: createAiApiToolAiToolGroup.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      aiApiToolId: aiApiToolRecord.id,
                      aiToolGroupId: aiToolGroupToLink.id,
                    },
                  },
                })
              );
            }
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            func: modelFields.func,
            useCases: modelFields.useCases,
            description: modelFields.description,
            payload: modelFields.payload ?? null,
          };
          promises.push(
            client.graphql({
              query: updateAiApiTool.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: aiApiToolRecord.id,
                  ...modelFieldsToSave,
                },
              },
            })
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AiApiToolUpdateForm")}
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
              func,
              useCases,
              description,
              payload,
              endpoint,
              usedIn,
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
        label="Func"
        isRequired={true}
        isReadOnly={false}
        value={func}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              func: value,
              useCases,
              description,
              payload,
              endpoint,
              usedIn,
            };
            const result = onChange(modelFields);
            value = result?.func ?? value;
          }
          if (errors.func?.hasError) {
            runValidationTasks("func", value);
          }
          setFunc(value);
        }}
        onBlur={() => runValidationTasks("func", func)}
        errorMessage={errors.func?.errorMessage}
        hasError={errors.func?.hasError}
        {...getOverrideProps(overrides, "func")}
      ></TextField>
      <TextField
        label="Use cases"
        isRequired={true}
        isReadOnly={false}
        value={useCases}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              func,
              useCases: value,
              description,
              payload,
              endpoint,
              usedIn,
            };
            const result = onChange(modelFields);
            value = result?.useCases ?? value;
          }
          if (errors.useCases?.hasError) {
            runValidationTasks("useCases", value);
          }
          setUseCases(value);
        }}
        onBlur={() => runValidationTasks("useCases", useCases)}
        errorMessage={errors.useCases?.errorMessage}
        hasError={errors.useCases?.hasError}
        {...getOverrideProps(overrides, "useCases")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              func,
              useCases,
              description: value,
              payload,
              endpoint,
              usedIn,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Payload"
        isRequired={false}
        isReadOnly={false}
        value={payload}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              func,
              useCases,
              description,
              payload: value,
              endpoint,
              usedIn,
            };
            const result = onChange(modelFields);
            value = result?.payload ?? value;
          }
          if (errors.payload?.hasError) {
            runValidationTasks("payload", value);
          }
          setPayload(value);
        }}
        onBlur={() => runValidationTasks("payload", payload)}
        errorMessage={errors.payload?.errorMessage}
        hasError={errors.payload?.hasError}
        {...getOverrideProps(overrides, "payload")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              func,
              useCases,
              description,
              payload,
              endpoint: values,
              usedIn,
            };
            const result = onChange(modelFields);
            values = result?.endpoint ?? values;
          }
          setEndpoint(values);
          setCurrentEndpointValue(undefined);
          setCurrentEndpointDisplayValue("");
        }}
        currentFieldValue={currentEndpointValue}
        label={"Endpoint"}
        items={endpoint}
        hasError={errors?.endpoint?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("endpoint", currentEndpointValue)
        }
        errorMessage={errors?.endpoint?.errorMessage}
        getBadgeText={getDisplayValue.endpoint}
        setFieldValue={(model) => {
          setCurrentEndpointDisplayValue(
            model ? getDisplayValue.endpoint(model) : ""
          );
          setCurrentEndpointValue(model);
        }}
        inputFieldRef={endpointRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Endpoint"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search BackendEndpoint"
          value={currentEndpointDisplayValue}
          options={endpointRecords.map((r) => ({
            id: getIDValue.endpoint?.(r),
            label: getDisplayValue.endpoint?.(r),
          }))}
          isLoading={endpointLoading}
          onSelect={({ id, label }) => {
            setCurrentEndpointValue(
              endpointRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentEndpointDisplayValue(label);
            runValidationTasks("endpoint", label);
          }}
          onClear={() => {
            setCurrentEndpointDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchEndpointRecords(value);
            if (errors.endpoint?.hasError) {
              runValidationTasks("endpoint", value);
            }
            setCurrentEndpointDisplayValue(value);
            setCurrentEndpointValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("endpoint", currentEndpointDisplayValue)
          }
          errorMessage={errors.endpoint?.errorMessage}
          hasError={errors.endpoint?.hasError}
          ref={endpointRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "endpoint")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              func,
              useCases,
              description,
              payload,
              endpoint,
              usedIn: values,
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
          placeholder="Search AiToolGroup"
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || aiApiToolModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || aiApiToolModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
