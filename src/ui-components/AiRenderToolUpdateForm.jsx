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
  aiRenderToolAiToolGroupsByAiRenderToolId,
  frontendComponentAiRenderToolsByAiRenderToolId,
  getAiRenderTool,
  listAiRenderToolAiToolGroups,
  listAiToolGroups,
  listFrontendComponentAiRenderTools,
  listFrontendComponents,
} from "../graphql/queries";
import { generateClient } from "aws-amplify/api";
import {
  createAiRenderToolAiToolGroup,
  createFrontendComponentAiRenderTool,
  deleteAiRenderToolAiToolGroup,
  deleteFrontendComponentAiRenderTool,
  updateAiRenderTool,
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
export default function AiRenderToolUpdateForm(props) {
  const {
    id: idProp,
    aiRenderTool: aiRenderToolModelProp,
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
    action: "",
    component: [],
    usedIn: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [func, setFunc] = React.useState(initialValues.func);
  const [useCases, setUseCases] = React.useState(initialValues.useCases);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [payload, setPayload] = React.useState(initialValues.payload);
  const [action, setAction] = React.useState(initialValues.action);
  const [component, setComponent] = React.useState(initialValues.component);
  const [componentLoading, setComponentLoading] = React.useState(false);
  const [componentRecords, setComponentRecords] = React.useState([]);
  const [usedIn, setUsedIn] = React.useState(initialValues.usedIn);
  const [usedInLoading, setUsedInLoading] = React.useState(false);
  const [usedInRecords, setUsedInRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = aiRenderToolRecord
      ? {
          ...initialValues,
          ...aiRenderToolRecord,
          component: linkedComponent,
          usedIn: linkedUsedIn,
        }
      : initialValues;
    setName(cleanValues.name);
    setFunc(cleanValues.func);
    setUseCases(cleanValues.useCases);
    setDescription(cleanValues.description);
    setPayload(cleanValues.payload);
    setAction(cleanValues.action);
    setComponent(cleanValues.component ?? []);
    setCurrentComponentValue(undefined);
    setCurrentComponentDisplayValue("");
    setUsedIn(cleanValues.usedIn ?? []);
    setCurrentUsedInValue(undefined);
    setCurrentUsedInDisplayValue("");
    setErrors({});
  };
  const [aiRenderToolRecord, setAiRenderToolRecord] = React.useState(
    aiRenderToolModelProp
  );
  const [linkedComponent, setLinkedComponent] = React.useState([]);
  const canUnlinkComponent = false;
  const [linkedUsedIn, setLinkedUsedIn] = React.useState([]);
  const canUnlinkUsedIn = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAiRenderTool.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAiRenderTool
        : aiRenderToolModelProp;
      const linkedComponent = record
        ? (
            await client.graphql({
              query: frontendComponentAiRenderToolsByAiRenderToolId.replaceAll(
                "__typename",
                ""
              ),
              variables: {
                aiRenderToolId: record.id,
              },
            })
          ).data.frontendComponentAiRenderToolsByAiRenderToolId.items.map(
            (t) => t.frontendComponent
          )
        : [];
      setLinkedComponent(linkedComponent);
      const linkedUsedIn = record
        ? (
            await client.graphql({
              query: aiRenderToolAiToolGroupsByAiRenderToolId.replaceAll(
                "__typename",
                ""
              ),
              variables: {
                aiRenderToolId: record.id,
              },
            })
          ).data.aiRenderToolAiToolGroupsByAiRenderToolId.items.map(
            (t) => t.aiToolGroup
          )
        : [];
      setLinkedUsedIn(linkedUsedIn);
      setAiRenderToolRecord(record);
    };
    queryData();
  }, [idProp, aiRenderToolModelProp]);
  React.useEffect(resetStateValues, [
    aiRenderToolRecord,
    linkedComponent,
    linkedUsedIn,
  ]);
  const [currentComponentDisplayValue, setCurrentComponentDisplayValue] =
    React.useState("");
  const [currentComponentValue, setCurrentComponentValue] =
    React.useState(undefined);
  const componentRef = React.createRef();
  const [currentUsedInDisplayValue, setCurrentUsedInDisplayValue] =
    React.useState("");
  const [currentUsedInValue, setCurrentUsedInValue] = React.useState(undefined);
  const usedInRef = React.createRef();
  const getIDValue = {
    component: (r) => JSON.stringify({ id: r?.id }),
    usedIn: (r) => JSON.stringify({ id: r?.id }),
  };
  const componentIdSet = new Set(
    Array.isArray(component)
      ? component.map((r) => getIDValue.component?.(r))
      : getIDValue.component?.(component)
  );
  const usedInIdSet = new Set(
    Array.isArray(usedIn)
      ? usedIn.map((r) => getIDValue.usedIn?.(r))
      : getIDValue.usedIn?.(usedIn)
  );
  const getDisplayValue = {
    component: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    usedIn: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    func: [{ type: "Required" }],
    useCases: [{ type: "Required" }],
    description: [{ type: "Required" }],
    payload: [],
    action: [{ type: "Required" }],
    component: [
      { type: "Required", validationMessage: "FrontendComponent is required." },
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
  const fetchComponentRecords = async (value) => {
    setComponentLoading(true);
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
          query: listFrontendComponents.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listFrontendComponents?.items;
      var loaded = result.filter(
        (item) => !componentIdSet.has(getIDValue.component?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setComponentRecords(newOptions.slice(0, autocompleteLength));
    setComponentLoading(false);
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
    fetchComponentRecords("");
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
          action,
          component,
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
          const componentToLinkMap = new Map();
          const componentToUnLinkMap = new Map();
          const componentMap = new Map();
          const linkedComponentMap = new Map();
          component.forEach((r) => {
            const count = componentMap.get(getIDValue.component?.(r));
            const newCount = count ? count + 1 : 1;
            componentMap.set(getIDValue.component?.(r), newCount);
          });
          linkedComponent.forEach((r) => {
            const count = linkedComponentMap.get(getIDValue.component?.(r));
            const newCount = count ? count + 1 : 1;
            linkedComponentMap.set(getIDValue.component?.(r), newCount);
          });
          linkedComponentMap.forEach((count, id) => {
            const newCount = componentMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                componentToUnLinkMap.set(id, diffCount);
              }
            } else {
              componentToUnLinkMap.set(id, count);
            }
          });
          componentMap.forEach((count, id) => {
            const originalCount = linkedComponentMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                componentToLinkMap.set(id, diffCount);
              }
            } else {
              componentToLinkMap.set(id, count);
            }
          });
          componentToUnLinkMap.forEach(async (count, id) => {
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
                      { frontendComponentId: { eq: recordKeys.id } },
                      { aiRenderToolId: { eq: aiRenderToolRecord.id } },
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
          componentToLinkMap.forEach((count, id) => {
            const frontendComponentToLink = componentRecords.find((r) =>
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
                      aiRenderToolId: aiRenderToolRecord.id,
                      frontendComponentId: frontendComponentToLink.id,
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
            const aiRenderToolAiToolGroupRecords = (
              await client.graphql({
                query: listAiRenderToolAiToolGroups.replaceAll(
                  "__typename",
                  ""
                ),
                variables: {
                  filter: {
                    and: [
                      { aiToolGroupId: { eq: recordKeys.id } },
                      { aiRenderToolId: { eq: aiRenderToolRecord.id } },
                    ],
                  },
                },
              })
            )?.data?.listAiRenderToolAiToolGroups?.items;
            for (let i = 0; i < count; i++) {
              promises.push(
                client.graphql({
                  query: deleteAiRenderToolAiToolGroup.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      id: aiRenderToolAiToolGroupRecords[i].id,
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
                  query: createAiRenderToolAiToolGroup.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      aiRenderToolId: aiRenderToolRecord.id,
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
            action: modelFields.action,
          };
          promises.push(
            client.graphql({
              query: updateAiRenderTool.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: aiRenderToolRecord.id,
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
      {...getOverrideProps(overrides, "AiRenderToolUpdateForm")}
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
              action,
              component,
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
              action,
              component,
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
              action,
              component,
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
              action,
              component,
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
              action,
              component,
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
      <TextField
        label="Action"
        isRequired={true}
        isReadOnly={false}
        value={action}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              func,
              useCases,
              description,
              payload,
              action: value,
              component,
              usedIn,
            };
            const result = onChange(modelFields);
            value = result?.action ?? value;
          }
          if (errors.action?.hasError) {
            runValidationTasks("action", value);
          }
          setAction(value);
        }}
        onBlur={() => runValidationTasks("action", action)}
        errorMessage={errors.action?.errorMessage}
        hasError={errors.action?.hasError}
        {...getOverrideProps(overrides, "action")}
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
              action,
              component: values,
              usedIn,
            };
            const result = onChange(modelFields);
            values = result?.component ?? values;
          }
          setComponent(values);
          setCurrentComponentValue(undefined);
          setCurrentComponentDisplayValue("");
        }}
        currentFieldValue={currentComponentValue}
        label={"Component"}
        items={component}
        hasError={errors?.component?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("component", currentComponentValue)
        }
        errorMessage={errors?.component?.errorMessage}
        getBadgeText={getDisplayValue.component}
        setFieldValue={(model) => {
          setCurrentComponentDisplayValue(
            model ? getDisplayValue.component(model) : ""
          );
          setCurrentComponentValue(model);
        }}
        inputFieldRef={componentRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Component"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search FrontendComponent"
          value={currentComponentDisplayValue}
          options={componentRecords.map((r) => ({
            id: getIDValue.component?.(r),
            label: getDisplayValue.component?.(r),
          }))}
          isLoading={componentLoading}
          onSelect={({ id, label }) => {
            setCurrentComponentValue(
              componentRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentComponentDisplayValue(label);
            runValidationTasks("component", label);
          }}
          onClear={() => {
            setCurrentComponentDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchComponentRecords(value);
            if (errors.component?.hasError) {
              runValidationTasks("component", value);
            }
            setCurrentComponentDisplayValue(value);
            setCurrentComponentValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("component", currentComponentDisplayValue)
          }
          errorMessage={errors.component?.errorMessage}
          hasError={errors.component?.hasError}
          ref={componentRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "component")}
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
              action,
              component,
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
          isDisabled={!(idProp || aiRenderToolModelProp)}
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
              !(idProp || aiRenderToolModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
