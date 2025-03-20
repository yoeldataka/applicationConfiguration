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
  frontendComponentAiRenderToolsByFrontendComponentId,
  frontendComponentFrontendSettingsByFrontendComponentId,
  getFrontendComponent,
  listAiRenderTools,
  listFrontendComponentAiRenderTools,
  listFrontendComponentFrontendSettings,
  listFrontendSettings,
} from "../graphql/queries";
import { generateClient } from "aws-amplify/api";
import {
  createFrontendComponentAiRenderTool,
  createFrontendComponentFrontendSettings,
  deleteFrontendComponentAiRenderTool,
  deleteFrontendComponentFrontendSettings,
  updateFrontendComponent,
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
export default function FrontendComponentUpdateForm(props) {
  const {
    id: idProp,
    frontendComponent: frontendComponentModelProp,
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
    description: "",
    usedInSettings: [],
    usedInTool: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
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
    const cleanValues = frontendComponentRecord
      ? {
          ...initialValues,
          ...frontendComponentRecord,
          usedInSettings: linkedUsedInSettings,
          usedInTool: linkedUsedInTool,
        }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setUsedInSettings(cleanValues.usedInSettings ?? []);
    setCurrentUsedInSettingsValue(undefined);
    setCurrentUsedInSettingsDisplayValue("");
    setUsedInTool(cleanValues.usedInTool ?? []);
    setCurrentUsedInToolValue(undefined);
    setCurrentUsedInToolDisplayValue("");
    setErrors({});
  };
  const [frontendComponentRecord, setFrontendComponentRecord] = React.useState(
    frontendComponentModelProp
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
              query: getFrontendComponent.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFrontendComponent
        : frontendComponentModelProp;
      const linkedUsedInSettings = record
        ? (
            await client.graphql({
              query:
                frontendComponentFrontendSettingsByFrontendComponentId.replaceAll(
                  "__typename",
                  ""
                ),
              variables: {
                frontendComponentId: record.id,
              },
            })
          ).data.frontendComponentFrontendSettingsByFrontendComponentId.items.map(
            (t) => t.frontendSettings
          )
        : [];
      setLinkedUsedInSettings(linkedUsedInSettings);
      const linkedUsedInTool = record
        ? (
            await client.graphql({
              query:
                frontendComponentAiRenderToolsByFrontendComponentId.replaceAll(
                  "__typename",
                  ""
                ),
              variables: {
                frontendComponentId: record.id,
              },
            })
          ).data.frontendComponentAiRenderToolsByFrontendComponentId.items.map(
            (t) => t.aiRenderTool
          )
        : [];
      setLinkedUsedInTool(linkedUsedInTool);
      setFrontendComponentRecord(record);
    };
    queryData();
  }, [idProp, frontendComponentModelProp]);
  React.useEffect(resetStateValues, [
    frontendComponentRecord,
    linkedUsedInSettings,
    linkedUsedInTool,
  ]);
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
    usedInSettings: (r) => JSON.stringify({ id: r?.id }),
    usedInTool: (r) => JSON.stringify({ id: r?.id }),
  };
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
    usedInSettings: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    usedInTool: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    description: [{ type: "Required" }],
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
          query: listFrontendSettings.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listFrontendSettings?.items;
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
          query: listAiRenderTools.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAiRenderTools?.items;
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
          description,
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
            const frontendComponentFrontendSettingsRecords = (
              await client.graphql({
                query: listFrontendComponentFrontendSettings.replaceAll(
                  "__typename",
                  ""
                ),
                variables: {
                  filter: {
                    and: [
                      { frontendSettingsId: { eq: recordKeys.id } },
                      {
                        frontendComponentId: { eq: frontendComponentRecord.id },
                      },
                    ],
                  },
                },
              })
            )?.data?.listFrontendComponentFrontendSettings?.items;
            for (let i = 0; i < count; i++) {
              promises.push(
                client.graphql({
                  query: deleteFrontendComponentFrontendSettings.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      id: frontendComponentFrontendSettingsRecords[i].id,
                    },
                  },
                })
              );
            }
          });
          usedInSettingsToLinkMap.forEach((count, id) => {
            const frontendSettingsToLink = usedInSettingsRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                client.graphql({
                  query: createFrontendComponentFrontendSettings.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      frontendComponentId: frontendComponentRecord.id,
                      frontendSettingsId: frontendSettingsToLink.id,
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
            const frontendComponentAiRenderToolRecords = (
              await client.graphql({
                query: listFrontendComponentAiRenderTools.replaceAll(
                  "__typename",
                  ""
                ),
                variables: {
                  filter: {
                    and: [
                      { aiRenderToolId: { eq: recordKeys.id } },
                      {
                        frontendComponentId: { eq: frontendComponentRecord.id },
                      },
                    ],
                  },
                },
              })
            )?.data?.listFrontendComponentAiRenderTools?.items;
            for (let i = 0; i < count; i++) {
              promises.push(
                client.graphql({
                  query: deleteFrontendComponentAiRenderTool.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      id: frontendComponentAiRenderToolRecords[i].id,
                    },
                  },
                })
              );
            }
          });
          usedInToolToLinkMap.forEach((count, id) => {
            const aiRenderToolToLink = usedInToolRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                client.graphql({
                  query: createFrontendComponentAiRenderTool.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      frontendComponentId: frontendComponentRecord.id,
                      aiRenderToolId: aiRenderToolToLink.id,
                    },
                  },
                })
              );
            }
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            description: modelFields.description,
          };
          promises.push(
            client.graphql({
              query: updateFrontendComponent.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: frontendComponentRecord.id,
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
      {...getOverrideProps(overrides, "FrontendComponentUpdateForm")}
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
              description,
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
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
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
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              description,
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
          placeholder="Search FrontendSettings"
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
              description,
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
          placeholder="Search AiRenderTool"
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
          isDisabled={!(idProp || frontendComponentModelProp)}
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
              !(idProp || frontendComponentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
