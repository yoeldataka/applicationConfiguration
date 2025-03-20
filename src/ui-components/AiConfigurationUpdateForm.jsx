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
  aiToolGroupAiConfigurationsByAiConfigurationId,
  getAiConfiguration,
  listAiParameters,
  listAiToolGroupAiConfigurations,
  listAiToolGroups,
} from "../graphql/queries";
import { generateClient } from "aws-amplify/api";
import {
  createAiToolGroupAiConfiguration,
  deleteAiToolGroupAiConfiguration,
  updateAiConfiguration,
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
export default function AiConfigurationUpdateForm(props) {
  const {
    id: idProp,
    aiConfiguration: aiConfigurationModelProp,
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
    aiParameters: undefined,
    tools: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [aiParameters, setAiParameters] = React.useState(
    initialValues.aiParameters
  );
  const [aiParametersLoading, setAiParametersLoading] = React.useState(false);
  const [aiParametersRecords, setAiParametersRecords] = React.useState([]);
  const [tools, setTools] = React.useState(initialValues.tools);
  const [toolsLoading, setToolsLoading] = React.useState(false);
  const [toolsRecords, setToolsRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = aiConfigurationRecord
      ? {
          ...initialValues,
          ...aiConfigurationRecord,
          aiParameters,
          tools: linkedTools,
        }
      : initialValues;
    setName(cleanValues.name);
    setAiParameters(cleanValues.aiParameters);
    setCurrentAiParametersValue(undefined);
    setCurrentAiParametersDisplayValue("");
    setTools(cleanValues.tools ?? []);
    setCurrentToolsValue(undefined);
    setCurrentToolsDisplayValue("");
    setErrors({});
  };
  const [aiConfigurationRecord, setAiConfigurationRecord] = React.useState(
    aiConfigurationModelProp
  );
  const [linkedTools, setLinkedTools] = React.useState([]);
  const canUnlinkTools = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAiConfiguration.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAiConfiguration
        : aiConfigurationModelProp;
      const aiParametersRecord = record ? await record.aiParameters : undefined;
      setAiParameters(aiParametersRecord);
      const linkedTools = record
        ? (
            await client.graphql({
              query: aiToolGroupAiConfigurationsByAiConfigurationId.replaceAll(
                "__typename",
                ""
              ),
              variables: {
                aiConfigurationId: record.id,
              },
            })
          ).data.aiToolGroupAiConfigurationsByAiConfigurationId.items.map(
            (t) => t.aiToolGroup
          )
        : [];
      setLinkedTools(linkedTools);
      setAiConfigurationRecord(record);
    };
    queryData();
  }, [idProp, aiConfigurationModelProp]);
  React.useEffect(resetStateValues, [
    aiConfigurationRecord,
    aiParameters,
    linkedTools,
  ]);
  const [currentAiParametersDisplayValue, setCurrentAiParametersDisplayValue] =
    React.useState("");
  const [currentAiParametersValue, setCurrentAiParametersValue] =
    React.useState(undefined);
  const aiParametersRef = React.createRef();
  const [currentToolsDisplayValue, setCurrentToolsDisplayValue] =
    React.useState("");
  const [currentToolsValue, setCurrentToolsValue] = React.useState(undefined);
  const toolsRef = React.createRef();
  const getIDValue = {
    aiParameters: (r) => JSON.stringify({ id: r?.id }),
    tools: (r) => JSON.stringify({ id: r?.id }),
  };
  const aiParametersIdSet = new Set(
    Array.isArray(aiParameters)
      ? aiParameters.map((r) => getIDValue.aiParameters?.(r))
      : getIDValue.aiParameters?.(aiParameters)
  );
  const toolsIdSet = new Set(
    Array.isArray(tools)
      ? tools.map((r) => getIDValue.tools?.(r))
      : getIDValue.tools?.(tools)
  );
  const getDisplayValue = {
    aiParameters: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    tools: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    aiParameters: [],
    tools: [],
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
  const fetchAiParametersRecords = async (value) => {
    setAiParametersLoading(true);
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
          query: listAiParameters.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAiParameters?.items;
      var loaded = result.filter(
        (item) => !aiParametersIdSet.has(getIDValue.aiParameters?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setAiParametersRecords(newOptions.slice(0, autocompleteLength));
    setAiParametersLoading(false);
  };
  const fetchToolsRecords = async (value) => {
    setToolsLoading(true);
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
        (item) => !toolsIdSet.has(getIDValue.tools?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setToolsRecords(newOptions.slice(0, autocompleteLength));
    setToolsLoading(false);
  };
  React.useEffect(() => {
    fetchAiParametersRecords("");
    fetchToolsRecords("");
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
          aiParameters: aiParameters ?? null,
          tools: tools ?? null,
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
          const toolsToLinkMap = new Map();
          const toolsToUnLinkMap = new Map();
          const toolsMap = new Map();
          const linkedToolsMap = new Map();
          tools.forEach((r) => {
            const count = toolsMap.get(getIDValue.tools?.(r));
            const newCount = count ? count + 1 : 1;
            toolsMap.set(getIDValue.tools?.(r), newCount);
          });
          linkedTools.forEach((r) => {
            const count = linkedToolsMap.get(getIDValue.tools?.(r));
            const newCount = count ? count + 1 : 1;
            linkedToolsMap.set(getIDValue.tools?.(r), newCount);
          });
          linkedToolsMap.forEach((count, id) => {
            const newCount = toolsMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                toolsToUnLinkMap.set(id, diffCount);
              }
            } else {
              toolsToUnLinkMap.set(id, count);
            }
          });
          toolsMap.forEach((count, id) => {
            const originalCount = linkedToolsMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                toolsToLinkMap.set(id, diffCount);
              }
            } else {
              toolsToLinkMap.set(id, count);
            }
          });
          toolsToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const aiToolGroupAiConfigurationRecords = (
              await client.graphql({
                query: listAiToolGroupAiConfigurations.replaceAll(
                  "__typename",
                  ""
                ),
                variables: {
                  filter: {
                    and: [
                      { aiToolGroupId: { eq: recordKeys.id } },
                      { aiConfigurationId: { eq: aiConfigurationRecord.id } },
                    ],
                  },
                },
              })
            )?.data?.listAiToolGroupAiConfigurations?.items;
            for (let i = 0; i < count; i++) {
              promises.push(
                client.graphql({
                  query: deleteAiToolGroupAiConfiguration.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      id: aiToolGroupAiConfigurationRecords[i].id,
                    },
                  },
                })
              );
            }
          });
          toolsToLinkMap.forEach((count, id) => {
            const aiToolGroupToLink = toolsRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                client.graphql({
                  query: createAiToolGroupAiConfiguration.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      aiConfigurationId: aiConfigurationRecord.id,
                      aiToolGroupId: aiToolGroupToLink.id,
                    },
                  },
                })
              );
            }
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            aiParametersID: modelFields?.aiParameters?.id ?? null,
          };
          promises.push(
            client.graphql({
              query: updateAiConfiguration.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: aiConfigurationRecord.id,
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
      {...getOverrideProps(overrides, "AiConfigurationUpdateForm")}
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
              aiParameters,
              tools,
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
              name,
              aiParameters: value,
              tools,
            };
            const result = onChange(modelFields);
            value = result?.aiParameters ?? value;
          }
          setAiParameters(value);
          setCurrentAiParametersValue(undefined);
          setCurrentAiParametersDisplayValue("");
        }}
        currentFieldValue={currentAiParametersValue}
        label={"Ai parameters"}
        items={aiParameters ? [aiParameters] : []}
        hasError={errors?.aiParameters?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("aiParameters", currentAiParametersValue)
        }
        errorMessage={errors?.aiParameters?.errorMessage}
        getBadgeText={getDisplayValue.aiParameters}
        setFieldValue={(model) => {
          setCurrentAiParametersDisplayValue(
            model ? getDisplayValue.aiParameters(model) : ""
          );
          setCurrentAiParametersValue(model);
        }}
        inputFieldRef={aiParametersRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Ai parameters"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AiParameters"
          value={currentAiParametersDisplayValue}
          options={aiParametersRecords
            .filter((r) => !aiParametersIdSet.has(getIDValue.aiParameters?.(r)))
            .map((r) => ({
              id: getIDValue.aiParameters?.(r),
              label: getDisplayValue.aiParameters?.(r),
            }))}
          isLoading={aiParametersLoading}
          onSelect={({ id, label }) => {
            setCurrentAiParametersValue(
              aiParametersRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAiParametersDisplayValue(label);
            runValidationTasks("aiParameters", label);
          }}
          onClear={() => {
            setCurrentAiParametersDisplayValue("");
          }}
          defaultValue={aiParameters}
          onChange={(e) => {
            let { value } = e.target;
            fetchAiParametersRecords(value);
            if (errors.aiParameters?.hasError) {
              runValidationTasks("aiParameters", value);
            }
            setCurrentAiParametersDisplayValue(value);
            setCurrentAiParametersValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("aiParameters", currentAiParametersDisplayValue)
          }
          errorMessage={errors.aiParameters?.errorMessage}
          hasError={errors.aiParameters?.hasError}
          ref={aiParametersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "aiParameters")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              aiParameters,
              tools: values,
            };
            const result = onChange(modelFields);
            values = result?.tools ?? values;
          }
          setTools(values);
          setCurrentToolsValue(undefined);
          setCurrentToolsDisplayValue("");
        }}
        currentFieldValue={currentToolsValue}
        label={"Tools"}
        items={tools}
        hasError={errors?.tools?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("tools", currentToolsValue)
        }
        errorMessage={errors?.tools?.errorMessage}
        getBadgeText={getDisplayValue.tools}
        setFieldValue={(model) => {
          setCurrentToolsDisplayValue(
            model ? getDisplayValue.tools(model) : ""
          );
          setCurrentToolsValue(model);
        }}
        inputFieldRef={toolsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Tools"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AiToolGroup"
          value={currentToolsDisplayValue}
          options={toolsRecords.map((r) => ({
            id: getIDValue.tools?.(r),
            label: getDisplayValue.tools?.(r),
          }))}
          isLoading={toolsLoading}
          onSelect={({ id, label }) => {
            setCurrentToolsValue(
              toolsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentToolsDisplayValue(label);
            runValidationTasks("tools", label);
          }}
          onClear={() => {
            setCurrentToolsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchToolsRecords(value);
            if (errors.tools?.hasError) {
              runValidationTasks("tools", value);
            }
            setCurrentToolsDisplayValue(value);
            setCurrentToolsValue(undefined);
          }}
          onBlur={() => runValidationTasks("tools", currentToolsDisplayValue)}
          errorMessage={errors.tools?.errorMessage}
          hasError={errors.tools?.hasError}
          ref={toolsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tools")}
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
          isDisabled={!(idProp || aiConfigurationModelProp)}
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
              !(idProp || aiConfigurationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
