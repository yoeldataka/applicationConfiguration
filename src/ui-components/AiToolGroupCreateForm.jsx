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
  listAiApiTools,
  listAiConfigurations,
  listAiRenderTools,
} from "../graphql/queries";
import {
  createAiApiToolAiToolGroup,
  createAiRenderToolAiToolGroup,
  createAiToolGroup,
  createAiToolGroupAiConfiguration,
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
export default function AiToolGroupCreateForm(props) {
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
    apiTools: [],
    renderTools: [],
    usedIn: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [apiTools, setApiTools] = React.useState(initialValues.apiTools);
  const [apiToolsLoading, setApiToolsLoading] = React.useState(false);
  const [apiToolsRecords, setApiToolsRecords] = React.useState([]);
  const [renderTools, setRenderTools] = React.useState(
    initialValues.renderTools
  );
  const [renderToolsLoading, setRenderToolsLoading] = React.useState(false);
  const [renderToolsRecords, setRenderToolsRecords] = React.useState([]);
  const [usedIn, setUsedIn] = React.useState(initialValues.usedIn);
  const [usedInLoading, setUsedInLoading] = React.useState(false);
  const [usedInRecords, setUsedInRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setApiTools(initialValues.apiTools);
    setCurrentApiToolsValue(undefined);
    setCurrentApiToolsDisplayValue("");
    setRenderTools(initialValues.renderTools);
    setCurrentRenderToolsValue(undefined);
    setCurrentRenderToolsDisplayValue("");
    setUsedIn(initialValues.usedIn);
    setCurrentUsedInValue(undefined);
    setCurrentUsedInDisplayValue("");
    setErrors({});
  };
  const [currentApiToolsDisplayValue, setCurrentApiToolsDisplayValue] =
    React.useState("");
  const [currentApiToolsValue, setCurrentApiToolsValue] =
    React.useState(undefined);
  const apiToolsRef = React.createRef();
  const [currentRenderToolsDisplayValue, setCurrentRenderToolsDisplayValue] =
    React.useState("");
  const [currentRenderToolsValue, setCurrentRenderToolsValue] =
    React.useState(undefined);
  const renderToolsRef = React.createRef();
  const [currentUsedInDisplayValue, setCurrentUsedInDisplayValue] =
    React.useState("");
  const [currentUsedInValue, setCurrentUsedInValue] = React.useState(undefined);
  const usedInRef = React.createRef();
  const getIDValue = {
    apiTools: (r) => JSON.stringify({ id: r?.id }),
    renderTools: (r) => JSON.stringify({ id: r?.id }),
    usedIn: (r) => JSON.stringify({ id: r?.id }),
  };
  const apiToolsIdSet = new Set(
    Array.isArray(apiTools)
      ? apiTools.map((r) => getIDValue.apiTools?.(r))
      : getIDValue.apiTools?.(apiTools)
  );
  const renderToolsIdSet = new Set(
    Array.isArray(renderTools)
      ? renderTools.map((r) => getIDValue.renderTools?.(r))
      : getIDValue.renderTools?.(renderTools)
  );
  const usedInIdSet = new Set(
    Array.isArray(usedIn)
      ? usedIn.map((r) => getIDValue.usedIn?.(r))
      : getIDValue.usedIn?.(usedIn)
  );
  const getDisplayValue = {
    apiTools: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    renderTools: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    usedIn: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    apiTools: [],
    renderTools: [],
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
  const fetchApiToolsRecords = async (value) => {
    setApiToolsLoading(true);
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
        (item) => !apiToolsIdSet.has(getIDValue.apiTools?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setApiToolsRecords(newOptions.slice(0, autocompleteLength));
    setApiToolsLoading(false);
  };
  const fetchRenderToolsRecords = async (value) => {
    setRenderToolsLoading(true);
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
        (item) => !renderToolsIdSet.has(getIDValue.renderTools?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setRenderToolsRecords(newOptions.slice(0, autocompleteLength));
    setRenderToolsLoading(false);
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
          query: listAiConfigurations.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAiConfigurations?.items;
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
    fetchApiToolsRecords("");
    fetchRenderToolsRecords("");
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
          apiTools,
          renderTools,
          usedIn,
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
          };
          const aiToolGroup = (
            await client.graphql({
              query: createAiToolGroup.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createAiToolGroup;
          const promises = [];
          promises.push(
            ...apiTools.reduce((promises, aiApiTool) => {
              promises.push(
                client.graphql({
                  query: createAiApiToolAiToolGroup.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      aiToolGroupId: aiToolGroup.id,
                      aiApiToolId: aiApiTool.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          promises.push(
            ...renderTools.reduce((promises, aiRenderTool) => {
              promises.push(
                client.graphql({
                  query: createAiRenderToolAiToolGroup.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      aiToolGroupId: aiToolGroup.id,
                      aiRenderToolId: aiRenderTool.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          promises.push(
            ...usedIn.reduce((promises, aiConfiguration) => {
              promises.push(
                client.graphql({
                  query: createAiToolGroupAiConfiguration.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      aiToolGroupId: aiToolGroup.id,
                      aiConfigurationId: aiConfiguration.id,
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
      {...getOverrideProps(overrides, "AiToolGroupCreateForm")}
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
              apiTools,
              renderTools,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              apiTools: values,
              renderTools,
              usedIn,
            };
            const result = onChange(modelFields);
            values = result?.apiTools ?? values;
          }
          setApiTools(values);
          setCurrentApiToolsValue(undefined);
          setCurrentApiToolsDisplayValue("");
        }}
        currentFieldValue={currentApiToolsValue}
        label={"Api tools"}
        items={apiTools}
        hasError={errors?.apiTools?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("apiTools", currentApiToolsValue)
        }
        errorMessage={errors?.apiTools?.errorMessage}
        getBadgeText={getDisplayValue.apiTools}
        setFieldValue={(model) => {
          setCurrentApiToolsDisplayValue(
            model ? getDisplayValue.apiTools(model) : ""
          );
          setCurrentApiToolsValue(model);
        }}
        inputFieldRef={apiToolsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Api tools"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AiApiTool"
          value={currentApiToolsDisplayValue}
          options={apiToolsRecords.map((r) => ({
            id: getIDValue.apiTools?.(r),
            label: getDisplayValue.apiTools?.(r),
          }))}
          isLoading={apiToolsLoading}
          onSelect={({ id, label }) => {
            setCurrentApiToolsValue(
              apiToolsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentApiToolsDisplayValue(label);
            runValidationTasks("apiTools", label);
          }}
          onClear={() => {
            setCurrentApiToolsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchApiToolsRecords(value);
            if (errors.apiTools?.hasError) {
              runValidationTasks("apiTools", value);
            }
            setCurrentApiToolsDisplayValue(value);
            setCurrentApiToolsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("apiTools", currentApiToolsDisplayValue)
          }
          errorMessage={errors.apiTools?.errorMessage}
          hasError={errors.apiTools?.hasError}
          ref={apiToolsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "apiTools")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              apiTools,
              renderTools: values,
              usedIn,
            };
            const result = onChange(modelFields);
            values = result?.renderTools ?? values;
          }
          setRenderTools(values);
          setCurrentRenderToolsValue(undefined);
          setCurrentRenderToolsDisplayValue("");
        }}
        currentFieldValue={currentRenderToolsValue}
        label={"Render tools"}
        items={renderTools}
        hasError={errors?.renderTools?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("renderTools", currentRenderToolsValue)
        }
        errorMessage={errors?.renderTools?.errorMessage}
        getBadgeText={getDisplayValue.renderTools}
        setFieldValue={(model) => {
          setCurrentRenderToolsDisplayValue(
            model ? getDisplayValue.renderTools(model) : ""
          );
          setCurrentRenderToolsValue(model);
        }}
        inputFieldRef={renderToolsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Render tools"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AiRenderTool"
          value={currentRenderToolsDisplayValue}
          options={renderToolsRecords.map((r) => ({
            id: getIDValue.renderTools?.(r),
            label: getDisplayValue.renderTools?.(r),
          }))}
          isLoading={renderToolsLoading}
          onSelect={({ id, label }) => {
            setCurrentRenderToolsValue(
              renderToolsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentRenderToolsDisplayValue(label);
            runValidationTasks("renderTools", label);
          }}
          onClear={() => {
            setCurrentRenderToolsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchRenderToolsRecords(value);
            if (errors.renderTools?.hasError) {
              runValidationTasks("renderTools", value);
            }
            setCurrentRenderToolsDisplayValue(value);
            setCurrentRenderToolsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("renderTools", currentRenderToolsDisplayValue)
          }
          errorMessage={errors.renderTools?.errorMessage}
          hasError={errors.renderTools?.hasError}
          ref={renderToolsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "renderTools")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              apiTools,
              renderTools,
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
          placeholder="Search AiConfiguration"
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
