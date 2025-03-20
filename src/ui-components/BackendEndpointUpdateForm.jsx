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
  backendEndpointAiApiToolsByBackendEndpointId,
  backendEndpointBackendSettingsByBackendEndpointId,
  getBackendEndpoint,
  listAiApiTools,
  listBackendEndpointAiApiTools,
  listBackendEndpointBackendSettings,
  listBackendEndpointMethods,
  listBackendSettings,
} from "../graphql/queries";
import { generateClient } from "aws-amplify/api";
import {
  createBackendEndpointAiApiTool,
  createBackendEndpointBackendSettings,
  deleteBackendEndpointAiApiTool,
  deleteBackendEndpointBackendSettings,
  updateBackendEndpoint,
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
export default function BackendEndpointUpdateForm(props) {
  const {
    id: idProp,
    backendEndpoint: backendEndpointModelProp,
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
    url: "",
    description: "",
    method: undefined,
    parametersWIP: "",
    usedInSettings: [],
    usedInTool: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [url, setUrl] = React.useState(initialValues.url);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [method, setMethod] = React.useState(initialValues.method);
  const [methodLoading, setMethodLoading] = React.useState(false);
  const [methodRecords, setMethodRecords] = React.useState([]);
  const [parametersWIP, setParametersWIP] = React.useState(
    initialValues.parametersWIP
  );
  const [usedInSettings, setUsedInSettings] = React.useState(
    initialValues.usedInSettings
  );
  const [usedInSettingsLoading, setUsedInSettingsLoading] =
    React.useState(false);
  const [usedInSettingsRecords, setUsedInSettingsRecords] = React.useState([]);
  const [usedInTool, setUsedInTool] = React.useState(initialValues.usedInTool);
  const [usedInToolLoading, setUsedInToolLoading] = React.useState(false);
  const [usedInToolRecords, setUsedInToolRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = backendEndpointRecord
      ? {
          ...initialValues,
          ...backendEndpointRecord,
          method,
          usedInSettings: linkedUsedInSettings,
          usedInTool: linkedUsedInTool,
        }
      : initialValues;
    setName(cleanValues.name);
    setUrl(cleanValues.url);
    setDescription(cleanValues.description);
    setMethod(cleanValues.method);
    setCurrentMethodValue(undefined);
    setCurrentMethodDisplayValue("");
    setParametersWIP(cleanValues.parametersWIP);
    setUsedInSettings(cleanValues.usedInSettings ?? []);
    setCurrentUsedInSettingsValue(undefined);
    setCurrentUsedInSettingsDisplayValue("");
    setUsedInTool(cleanValues.usedInTool ?? []);
    setCurrentUsedInToolValue(undefined);
    setCurrentUsedInToolDisplayValue("");
    setErrors({});
  };
  const [backendEndpointRecord, setBackendEndpointRecord] = React.useState(
    backendEndpointModelProp
  );
  const [linkedUsedInSettings, setLinkedUsedInSettings] = React.useState([]);
  const canUnlinkUsedInSettings = false;
  const [linkedUsedInTool, setLinkedUsedInTool] = React.useState([]);
  const canUnlinkUsedInTool = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBackendEndpoint.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBackendEndpoint
        : backendEndpointModelProp;
      const methodRecord = record ? await record.method : undefined;
      setMethod(methodRecord);
      const linkedUsedInSettings = record
        ? (
            await client.graphql({
              query:
                backendEndpointBackendSettingsByBackendEndpointId.replaceAll(
                  "__typename",
                  ""
                ),
              variables: {
                backendEndpointId: record.id,
              },
            })
          ).data.backendEndpointBackendSettingsByBackendEndpointId.items.map(
            (t) => t.backendSettings
          )
        : [];
      setLinkedUsedInSettings(linkedUsedInSettings);
      const linkedUsedInTool = record
        ? (
            await client.graphql({
              query: backendEndpointAiApiToolsByBackendEndpointId.replaceAll(
                "__typename",
                ""
              ),
              variables: {
                backendEndpointId: record.id,
              },
            })
          ).data.backendEndpointAiApiToolsByBackendEndpointId.items.map(
            (t) => t.aiApiTool
          )
        : [];
      setLinkedUsedInTool(linkedUsedInTool);
      setBackendEndpointRecord(record);
    };
    queryData();
  }, [idProp, backendEndpointModelProp]);
  React.useEffect(resetStateValues, [
    backendEndpointRecord,
    method,
    linkedUsedInSettings,
    linkedUsedInTool,
  ]);
  const [currentMethodDisplayValue, setCurrentMethodDisplayValue] =
    React.useState("");
  const [currentMethodValue, setCurrentMethodValue] = React.useState(undefined);
  const methodRef = React.createRef();
  const [
    currentUsedInSettingsDisplayValue,
    setCurrentUsedInSettingsDisplayValue,
  ] = React.useState("");
  const [currentUsedInSettingsValue, setCurrentUsedInSettingsValue] =
    React.useState(undefined);
  const usedInSettingsRef = React.createRef();
  const [currentUsedInToolDisplayValue, setCurrentUsedInToolDisplayValue] =
    React.useState("");
  const [currentUsedInToolValue, setCurrentUsedInToolValue] =
    React.useState(undefined);
  const usedInToolRef = React.createRef();
  const getIDValue = {
    method: (r) => JSON.stringify({ id: r?.id }),
    usedInSettings: (r) => JSON.stringify({ id: r?.id }),
    usedInTool: (r) => JSON.stringify({ id: r?.id }),
  };
  const methodIdSet = new Set(
    Array.isArray(method)
      ? method.map((r) => getIDValue.method?.(r))
      : getIDValue.method?.(method)
  );
  const usedInSettingsIdSet = new Set(
    Array.isArray(usedInSettings)
      ? usedInSettings.map((r) => getIDValue.usedInSettings?.(r))
      : getIDValue.usedInSettings?.(usedInSettings)
  );
  const usedInToolIdSet = new Set(
    Array.isArray(usedInTool)
      ? usedInTool.map((r) => getIDValue.usedInTool?.(r))
      : getIDValue.usedInTool?.(usedInTool)
  );
  const getDisplayValue = {
    method: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    usedInSettings: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    usedInTool: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    url: [{ type: "Required" }],
    description: [{ type: "Required" }],
    method: [],
    parametersWIP: [],
    usedInSettings: [],
    usedInTool: [],
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
  const fetchMethodRecords = async (value) => {
    setMethodLoading(true);
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
          query: listBackendEndpointMethods.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listBackendEndpointMethods?.items;
      var loaded = result.filter(
        (item) => !methodIdSet.has(getIDValue.method?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setMethodRecords(newOptions.slice(0, autocompleteLength));
    setMethodLoading(false);
  };
  const fetchUsedInSettingsRecords = async (value) => {
    setUsedInSettingsLoading(true);
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
          query: listBackendSettings.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listBackendSettings?.items;
      var loaded = result.filter(
        (item) => !usedInSettingsIdSet.has(getIDValue.usedInSettings?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setUsedInSettingsRecords(newOptions.slice(0, autocompleteLength));
    setUsedInSettingsLoading(false);
  };
  const fetchUsedInToolRecords = async (value) => {
    setUsedInToolLoading(true);
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
          query: listAiApiTools.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAiApiTools?.items;
      var loaded = result.filter(
        (item) => !usedInToolIdSet.has(getIDValue.usedInTool?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setUsedInToolRecords(newOptions.slice(0, autocompleteLength));
    setUsedInToolLoading(false);
  };
  React.useEffect(() => {
    fetchMethodRecords("");
    fetchUsedInSettingsRecords("");
    fetchUsedInToolRecords("");
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
          url,
          description,
          method: method ?? null,
          parametersWIP: parametersWIP ?? null,
          usedInSettings: usedInSettings ?? null,
          usedInTool: usedInTool ?? null,
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
          const usedInSettingsToLinkMap = new Map();
          const usedInSettingsToUnLinkMap = new Map();
          const usedInSettingsMap = new Map();
          const linkedUsedInSettingsMap = new Map();
          usedInSettings.forEach((r) => {
            const count = usedInSettingsMap.get(getIDValue.usedInSettings?.(r));
            const newCount = count ? count + 1 : 1;
            usedInSettingsMap.set(getIDValue.usedInSettings?.(r), newCount);
          });
          linkedUsedInSettings.forEach((r) => {
            const count = linkedUsedInSettingsMap.get(
              getIDValue.usedInSettings?.(r)
            );
            const newCount = count ? count + 1 : 1;
            linkedUsedInSettingsMap.set(
              getIDValue.usedInSettings?.(r),
              newCount
            );
          });
          linkedUsedInSettingsMap.forEach((count, id) => {
            const newCount = usedInSettingsMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                usedInSettingsToUnLinkMap.set(id, diffCount);
              }
            } else {
              usedInSettingsToUnLinkMap.set(id, count);
            }
          });
          usedInSettingsMap.forEach((count, id) => {
            const originalCount = linkedUsedInSettingsMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                usedInSettingsToLinkMap.set(id, diffCount);
              }
            } else {
              usedInSettingsToLinkMap.set(id, count);
            }
          });
          usedInSettingsToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const backendEndpointBackendSettingsRecords = (
              await client.graphql({
                query: listBackendEndpointBackendSettings.replaceAll(
                  "__typename",
                  ""
                ),
                variables: {
                  filter: {
                    and: [
                      { backendSettingsId: { eq: recordKeys.id } },
                      { backendEndpointId: { eq: backendEndpointRecord.id } },
                    ],
                  },
                },
              })
            )?.data?.listBackendEndpointBackendSettings?.items;
            for (let i = 0; i < count; i++) {
              promises.push(
                client.graphql({
                  query: deleteBackendEndpointBackendSettings.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      id: backendEndpointBackendSettingsRecords[i].id,
                    },
                  },
                })
              );
            }
          });
          usedInSettingsToLinkMap.forEach((count, id) => {
            const backendSettingsToLink = usedInSettingsRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                client.graphql({
                  query: createBackendEndpointBackendSettings.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      backendEndpointId: backendEndpointRecord.id,
                      backendSettingsId: backendSettingsToLink.id,
                    },
                  },
                })
              );
            }
          });
          const usedInToolToLinkMap = new Map();
          const usedInToolToUnLinkMap = new Map();
          const usedInToolMap = new Map();
          const linkedUsedInToolMap = new Map();
          usedInTool.forEach((r) => {
            const count = usedInToolMap.get(getIDValue.usedInTool?.(r));
            const newCount = count ? count + 1 : 1;
            usedInToolMap.set(getIDValue.usedInTool?.(r), newCount);
          });
          linkedUsedInTool.forEach((r) => {
            const count = linkedUsedInToolMap.get(getIDValue.usedInTool?.(r));
            const newCount = count ? count + 1 : 1;
            linkedUsedInToolMap.set(getIDValue.usedInTool?.(r), newCount);
          });
          linkedUsedInToolMap.forEach((count, id) => {
            const newCount = usedInToolMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                usedInToolToUnLinkMap.set(id, diffCount);
              }
            } else {
              usedInToolToUnLinkMap.set(id, count);
            }
          });
          usedInToolMap.forEach((count, id) => {
            const originalCount = linkedUsedInToolMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                usedInToolToLinkMap.set(id, diffCount);
              }
            } else {
              usedInToolToLinkMap.set(id, count);
            }
          });
          usedInToolToUnLinkMap.forEach(async (count, id) => {
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
                      { aiApiToolId: { eq: recordKeys.id } },
                      { backendEndpointId: { eq: backendEndpointRecord.id } },
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
          usedInToolToLinkMap.forEach((count, id) => {
            const aiApiToolToLink = usedInToolRecords.find((r) =>
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
                      backendEndpointId: backendEndpointRecord.id,
                      aiApiToolId: aiApiToolToLink.id,
                    },
                  },
                })
              );
            }
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            url: modelFields.url,
            description: modelFields.description,
            methodID: modelFields?.method?.id ?? null,
            parametersWIP: modelFields.parametersWIP ?? null,
          };
          promises.push(
            client.graphql({
              query: updateBackendEndpoint.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: backendEndpointRecord.id,
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
      {...getOverrideProps(overrides, "BackendEndpointUpdateForm")}
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
              url,
              description,
              method,
              parametersWIP,
              usedInSettings,
              usedInTool,
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
        label="Url"
        isRequired={true}
        isReadOnly={false}
        value={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              url: value,
              description,
              method,
              parametersWIP,
              usedInSettings,
              usedInTool,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
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
              url,
              description: value,
              method,
              parametersWIP,
              usedInSettings,
              usedInTool,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              url,
              description,
              method: value,
              parametersWIP,
              usedInSettings,
              usedInTool,
            };
            const result = onChange(modelFields);
            value = result?.method ?? value;
          }
          setMethod(value);
          setCurrentMethodValue(undefined);
          setCurrentMethodDisplayValue("");
        }}
        currentFieldValue={currentMethodValue}
        label={"Method"}
        items={method ? [method] : []}
        hasError={errors?.method?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("method", currentMethodValue)
        }
        errorMessage={errors?.method?.errorMessage}
        getBadgeText={getDisplayValue.method}
        setFieldValue={(model) => {
          setCurrentMethodDisplayValue(
            model ? getDisplayValue.method(model) : ""
          );
          setCurrentMethodValue(model);
        }}
        inputFieldRef={methodRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Method"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search BackendEndpointMethod"
          value={currentMethodDisplayValue}
          options={methodRecords
            .filter((r) => !methodIdSet.has(getIDValue.method?.(r)))
            .map((r) => ({
              id: getIDValue.method?.(r),
              label: getDisplayValue.method?.(r),
            }))}
          isLoading={methodLoading}
          onSelect={({ id, label }) => {
            setCurrentMethodValue(
              methodRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentMethodDisplayValue(label);
            runValidationTasks("method", label);
          }}
          onClear={() => {
            setCurrentMethodDisplayValue("");
          }}
          defaultValue={method}
          onChange={(e) => {
            let { value } = e.target;
            fetchMethodRecords(value);
            if (errors.method?.hasError) {
              runValidationTasks("method", value);
            }
            setCurrentMethodDisplayValue(value);
            setCurrentMethodValue(undefined);
          }}
          onBlur={() => runValidationTasks("method", currentMethodDisplayValue)}
          errorMessage={errors.method?.errorMessage}
          hasError={errors.method?.hasError}
          ref={methodRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "method")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Parameters wip"
        isRequired={false}
        isReadOnly={false}
        value={parametersWIP}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              url,
              description,
              method,
              parametersWIP: value,
              usedInSettings,
              usedInTool,
            };
            const result = onChange(modelFields);
            value = result?.parametersWIP ?? value;
          }
          if (errors.parametersWIP?.hasError) {
            runValidationTasks("parametersWIP", value);
          }
          setParametersWIP(value);
        }}
        onBlur={() => runValidationTasks("parametersWIP", parametersWIP)}
        errorMessage={errors.parametersWIP?.errorMessage}
        hasError={errors.parametersWIP?.hasError}
        {...getOverrideProps(overrides, "parametersWIP")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              url,
              description,
              method,
              parametersWIP,
              usedInSettings: values,
              usedInTool,
            };
            const result = onChange(modelFields);
            values = result?.usedInSettings ?? values;
          }
          setUsedInSettings(values);
          setCurrentUsedInSettingsValue(undefined);
          setCurrentUsedInSettingsDisplayValue("");
        }}
        currentFieldValue={currentUsedInSettingsValue}
        label={"Used in settings"}
        items={usedInSettings}
        hasError={errors?.usedInSettings?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("usedInSettings", currentUsedInSettingsValue)
        }
        errorMessage={errors?.usedInSettings?.errorMessage}
        getBadgeText={getDisplayValue.usedInSettings}
        setFieldValue={(model) => {
          setCurrentUsedInSettingsDisplayValue(
            model ? getDisplayValue.usedInSettings(model) : ""
          );
          setCurrentUsedInSettingsValue(model);
        }}
        inputFieldRef={usedInSettingsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Used in settings"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search BackendSettings"
          value={currentUsedInSettingsDisplayValue}
          options={usedInSettingsRecords.map((r) => ({
            id: getIDValue.usedInSettings?.(r),
            label: getDisplayValue.usedInSettings?.(r),
          }))}
          isLoading={usedInSettingsLoading}
          onSelect={({ id, label }) => {
            setCurrentUsedInSettingsValue(
              usedInSettingsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUsedInSettingsDisplayValue(label);
            runValidationTasks("usedInSettings", label);
          }}
          onClear={() => {
            setCurrentUsedInSettingsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchUsedInSettingsRecords(value);
            if (errors.usedInSettings?.hasError) {
              runValidationTasks("usedInSettings", value);
            }
            setCurrentUsedInSettingsDisplayValue(value);
            setCurrentUsedInSettingsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "usedInSettings",
              currentUsedInSettingsDisplayValue
            )
          }
          errorMessage={errors.usedInSettings?.errorMessage}
          hasError={errors.usedInSettings?.hasError}
          ref={usedInSettingsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "usedInSettings")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              url,
              description,
              method,
              parametersWIP,
              usedInSettings,
              usedInTool: values,
            };
            const result = onChange(modelFields);
            values = result?.usedInTool ?? values;
          }
          setUsedInTool(values);
          setCurrentUsedInToolValue(undefined);
          setCurrentUsedInToolDisplayValue("");
        }}
        currentFieldValue={currentUsedInToolValue}
        label={"Used in tool"}
        items={usedInTool}
        hasError={errors?.usedInTool?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("usedInTool", currentUsedInToolValue)
        }
        errorMessage={errors?.usedInTool?.errorMessage}
        getBadgeText={getDisplayValue.usedInTool}
        setFieldValue={(model) => {
          setCurrentUsedInToolDisplayValue(
            model ? getDisplayValue.usedInTool(model) : ""
          );
          setCurrentUsedInToolValue(model);
        }}
        inputFieldRef={usedInToolRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Used in tool"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AiApiTool"
          value={currentUsedInToolDisplayValue}
          options={usedInToolRecords.map((r) => ({
            id: getIDValue.usedInTool?.(r),
            label: getDisplayValue.usedInTool?.(r),
          }))}
          isLoading={usedInToolLoading}
          onSelect={({ id, label }) => {
            setCurrentUsedInToolValue(
              usedInToolRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUsedInToolDisplayValue(label);
            runValidationTasks("usedInTool", label);
          }}
          onClear={() => {
            setCurrentUsedInToolDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchUsedInToolRecords(value);
            if (errors.usedInTool?.hasError) {
              runValidationTasks("usedInTool", value);
            }
            setCurrentUsedInToolDisplayValue(value);
            setCurrentUsedInToolValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("usedInTool", currentUsedInToolDisplayValue)
          }
          errorMessage={errors.usedInTool?.errorMessage}
          hasError={errors.usedInTool?.hasError}
          ref={usedInToolRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "usedInTool")}
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
          isDisabled={!(idProp || backendEndpointModelProp)}
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
              !(idProp || backendEndpointModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
