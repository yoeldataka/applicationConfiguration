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
  listAiVectorialDbConfigs,
  listAiVectorizerParameters,
} from "../graphql/queries";
import { createAiIndexationConfiguration } from "../graphql/mutations";
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
export default function AiIndexationConfigurationCreateForm(props) {
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
    vectorizerParameters: undefined,
    vectorialDbConfig: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [vectorizerParameters, setVectorizerParameters] = React.useState(
    initialValues.vectorizerParameters
  );
  const [vectorizerParametersLoading, setVectorizerParametersLoading] =
    React.useState(false);
  const [vectorizerParametersRecords, setVectorizerParametersRecords] =
    React.useState([]);
  const [vectorialDbConfig, setVectorialDbConfig] = React.useState(
    initialValues.vectorialDbConfig
  );
  const [vectorialDbConfigLoading, setVectorialDbConfigLoading] =
    React.useState(false);
  const [vectorialDbConfigRecords, setVectorialDbConfigRecords] =
    React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setVectorizerParameters(initialValues.vectorizerParameters);
    setCurrentVectorizerParametersValue(undefined);
    setCurrentVectorizerParametersDisplayValue("");
    setVectorialDbConfig(initialValues.vectorialDbConfig);
    setCurrentVectorialDbConfigValue(undefined);
    setCurrentVectorialDbConfigDisplayValue("");
    setErrors({});
  };
  const [
    currentVectorizerParametersDisplayValue,
    setCurrentVectorizerParametersDisplayValue,
  ] = React.useState("");
  const [
    currentVectorizerParametersValue,
    setCurrentVectorizerParametersValue,
  ] = React.useState(undefined);
  const vectorizerParametersRef = React.createRef();
  const [
    currentVectorialDbConfigDisplayValue,
    setCurrentVectorialDbConfigDisplayValue,
  ] = React.useState("");
  const [currentVectorialDbConfigValue, setCurrentVectorialDbConfigValue] =
    React.useState(undefined);
  const vectorialDbConfigRef = React.createRef();
  const getIDValue = {
    vectorizerParameters: (r) => JSON.stringify({ id: r?.id }),
    vectorialDbConfig: (r) => JSON.stringify({ id: r?.id }),
  };
  const vectorizerParametersIdSet = new Set(
    Array.isArray(vectorizerParameters)
      ? vectorizerParameters.map((r) => getIDValue.vectorizerParameters?.(r))
      : getIDValue.vectorizerParameters?.(vectorizerParameters)
  );
  const vectorialDbConfigIdSet = new Set(
    Array.isArray(vectorialDbConfig)
      ? vectorialDbConfig.map((r) => getIDValue.vectorialDbConfig?.(r))
      : getIDValue.vectorialDbConfig?.(vectorialDbConfig)
  );
  const getDisplayValue = {
    vectorizerParameters: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    vectorialDbConfig: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    vectorizerParameters: [],
    vectorialDbConfig: [],
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
  const fetchVectorizerParametersRecords = async (value) => {
    setVectorizerParametersLoading(true);
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
          query: listAiVectorizerParameters.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAiVectorizerParameters?.items;
      var loaded = result.filter(
        (item) =>
          !vectorizerParametersIdSet.has(
            getIDValue.vectorizerParameters?.(item)
          )
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setVectorizerParametersRecords(newOptions.slice(0, autocompleteLength));
    setVectorizerParametersLoading(false);
  };
  const fetchVectorialDbConfigRecords = async (value) => {
    setVectorialDbConfigLoading(true);
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
          query: listAiVectorialDbConfigs.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAiVectorialDbConfigs?.items;
      var loaded = result.filter(
        (item) =>
          !vectorialDbConfigIdSet.has(getIDValue.vectorialDbConfig?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setVectorialDbConfigRecords(newOptions.slice(0, autocompleteLength));
    setVectorialDbConfigLoading(false);
  };
  React.useEffect(() => {
    fetchVectorizerParametersRecords("");
    fetchVectorialDbConfigRecords("");
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
          vectorizerParameters,
          vectorialDbConfig,
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
            vectorizerParametersID: modelFields?.vectorizerParameters?.id,
            vectorialDbConfigID: modelFields?.vectorialDbConfig?.id,
          };
          await client.graphql({
            query: createAiIndexationConfiguration.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFieldsToSave,
              },
            },
          });
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
      {...getOverrideProps(overrides, "AiIndexationConfigurationCreateForm")}
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
              vectorizerParameters,
              vectorialDbConfig,
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
              vectorizerParameters: value,
              vectorialDbConfig,
            };
            const result = onChange(modelFields);
            value = result?.vectorizerParameters ?? value;
          }
          setVectorizerParameters(value);
          setCurrentVectorizerParametersValue(undefined);
          setCurrentVectorizerParametersDisplayValue("");
        }}
        currentFieldValue={currentVectorizerParametersValue}
        label={"Vectorizer parameters"}
        items={vectorizerParameters ? [vectorizerParameters] : []}
        hasError={errors?.vectorizerParameters?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "vectorizerParameters",
            currentVectorizerParametersValue
          )
        }
        errorMessage={errors?.vectorizerParameters?.errorMessage}
        getBadgeText={getDisplayValue.vectorizerParameters}
        setFieldValue={(model) => {
          setCurrentVectorizerParametersDisplayValue(
            model ? getDisplayValue.vectorizerParameters(model) : ""
          );
          setCurrentVectorizerParametersValue(model);
        }}
        inputFieldRef={vectorizerParametersRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Vectorizer parameters"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AiVectorizerParameters"
          value={currentVectorizerParametersDisplayValue}
          options={vectorizerParametersRecords
            .filter(
              (r) =>
                !vectorizerParametersIdSet.has(
                  getIDValue.vectorizerParameters?.(r)
                )
            )
            .map((r) => ({
              id: getIDValue.vectorizerParameters?.(r),
              label: getDisplayValue.vectorizerParameters?.(r),
            }))}
          isLoading={vectorizerParametersLoading}
          onSelect={({ id, label }) => {
            setCurrentVectorizerParametersValue(
              vectorizerParametersRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentVectorizerParametersDisplayValue(label);
            runValidationTasks("vectorizerParameters", label);
          }}
          onClear={() => {
            setCurrentVectorizerParametersDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchVectorizerParametersRecords(value);
            if (errors.vectorizerParameters?.hasError) {
              runValidationTasks("vectorizerParameters", value);
            }
            setCurrentVectorizerParametersDisplayValue(value);
            setCurrentVectorizerParametersValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "vectorizerParameters",
              currentVectorizerParametersDisplayValue
            )
          }
          errorMessage={errors.vectorizerParameters?.errorMessage}
          hasError={errors.vectorizerParameters?.hasError}
          ref={vectorizerParametersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "vectorizerParameters")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              vectorizerParameters,
              vectorialDbConfig: value,
            };
            const result = onChange(modelFields);
            value = result?.vectorialDbConfig ?? value;
          }
          setVectorialDbConfig(value);
          setCurrentVectorialDbConfigValue(undefined);
          setCurrentVectorialDbConfigDisplayValue("");
        }}
        currentFieldValue={currentVectorialDbConfigValue}
        label={"Vectorial db config"}
        items={vectorialDbConfig ? [vectorialDbConfig] : []}
        hasError={errors?.vectorialDbConfig?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "vectorialDbConfig",
            currentVectorialDbConfigValue
          )
        }
        errorMessage={errors?.vectorialDbConfig?.errorMessage}
        getBadgeText={getDisplayValue.vectorialDbConfig}
        setFieldValue={(model) => {
          setCurrentVectorialDbConfigDisplayValue(
            model ? getDisplayValue.vectorialDbConfig(model) : ""
          );
          setCurrentVectorialDbConfigValue(model);
        }}
        inputFieldRef={vectorialDbConfigRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Vectorial db config"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AiVectorialDbConfig"
          value={currentVectorialDbConfigDisplayValue}
          options={vectorialDbConfigRecords
            .filter(
              (r) =>
                !vectorialDbConfigIdSet.has(getIDValue.vectorialDbConfig?.(r))
            )
            .map((r) => ({
              id: getIDValue.vectorialDbConfig?.(r),
              label: getDisplayValue.vectorialDbConfig?.(r),
            }))}
          isLoading={vectorialDbConfigLoading}
          onSelect={({ id, label }) => {
            setCurrentVectorialDbConfigValue(
              vectorialDbConfigRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentVectorialDbConfigDisplayValue(label);
            runValidationTasks("vectorialDbConfig", label);
          }}
          onClear={() => {
            setCurrentVectorialDbConfigDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchVectorialDbConfigRecords(value);
            if (errors.vectorialDbConfig?.hasError) {
              runValidationTasks("vectorialDbConfig", value);
            }
            setCurrentVectorialDbConfigDisplayValue(value);
            setCurrentVectorialDbConfigValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "vectorialDbConfig",
              currentVectorialDbConfigDisplayValue
            )
          }
          errorMessage={errors.vectorialDbConfig?.errorMessage}
          hasError={errors.vectorialDbConfig?.hasError}
          ref={vectorialDbConfigRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "vectorialDbConfig")}
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
