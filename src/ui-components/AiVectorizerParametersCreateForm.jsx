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
import { listAiLlms } from "../graphql/queries";
import { createAiVectorizerParameters } from "../graphql/mutations";
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
export default function AiVectorizerParametersCreateForm(props) {
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
    aiLlm: undefined,
    chunkSize: "",
    chunkOverlap: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [aiLlm, setAiLlm] = React.useState(initialValues.aiLlm);
  const [aiLlmLoading, setAiLlmLoading] = React.useState(false);
  const [aiLlmRecords, setAiLlmRecords] = React.useState([]);
  const [chunkSize, setChunkSize] = React.useState(initialValues.chunkSize);
  const [chunkOverlap, setChunkOverlap] = React.useState(
    initialValues.chunkOverlap
  );
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setAiLlm(initialValues.aiLlm);
    setCurrentAiLlmValue(undefined);
    setCurrentAiLlmDisplayValue("");
    setChunkSize(initialValues.chunkSize);
    setChunkOverlap(initialValues.chunkOverlap);
    setErrors({});
  };
  const [currentAiLlmDisplayValue, setCurrentAiLlmDisplayValue] =
    React.useState("");
  const [currentAiLlmValue, setCurrentAiLlmValue] = React.useState(undefined);
  const aiLlmRef = React.createRef();
  const getIDValue = {
    aiLlm: (r) => JSON.stringify({ id: r?.id }),
  };
  const aiLlmIdSet = new Set(
    Array.isArray(aiLlm)
      ? aiLlm.map((r) => getIDValue.aiLlm?.(r))
      : getIDValue.aiLlm?.(aiLlm)
  );
  const getDisplayValue = {
    aiLlm: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    aiLlm: [],
    chunkSize: [{ type: "Required" }],
    chunkOverlap: [{ type: "Required" }],
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
  const fetchAiLlmRecords = async (value) => {
    setAiLlmLoading(true);
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
          query: listAiLlms.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAiLlms?.items;
      var loaded = result.filter(
        (item) => !aiLlmIdSet.has(getIDValue.aiLlm?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setAiLlmRecords(newOptions.slice(0, autocompleteLength));
    setAiLlmLoading(false);
  };
  React.useEffect(() => {
    fetchAiLlmRecords("");
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
          aiLlm,
          chunkSize,
          chunkOverlap,
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
            aiLlmID: modelFields?.aiLlm?.id,
            chunkSize: modelFields.chunkSize,
            chunkOverlap: modelFields.chunkOverlap,
          };
          await client.graphql({
            query: createAiVectorizerParameters.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "AiVectorizerParametersCreateForm")}
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
              aiLlm,
              chunkSize,
              chunkOverlap,
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
              aiLlm: value,
              chunkSize,
              chunkOverlap,
            };
            const result = onChange(modelFields);
            value = result?.aiLlm ?? value;
          }
          setAiLlm(value);
          setCurrentAiLlmValue(undefined);
          setCurrentAiLlmDisplayValue("");
        }}
        currentFieldValue={currentAiLlmValue}
        label={"Ai llm"}
        items={aiLlm ? [aiLlm] : []}
        hasError={errors?.aiLlm?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("aiLlm", currentAiLlmValue)
        }
        errorMessage={errors?.aiLlm?.errorMessage}
        getBadgeText={getDisplayValue.aiLlm}
        setFieldValue={(model) => {
          setCurrentAiLlmDisplayValue(
            model ? getDisplayValue.aiLlm(model) : ""
          );
          setCurrentAiLlmValue(model);
        }}
        inputFieldRef={aiLlmRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Ai llm"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AiLlm"
          value={currentAiLlmDisplayValue}
          options={aiLlmRecords
            .filter((r) => !aiLlmIdSet.has(getIDValue.aiLlm?.(r)))
            .map((r) => ({
              id: getIDValue.aiLlm?.(r),
              label: getDisplayValue.aiLlm?.(r),
            }))}
          isLoading={aiLlmLoading}
          onSelect={({ id, label }) => {
            setCurrentAiLlmValue(
              aiLlmRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAiLlmDisplayValue(label);
            runValidationTasks("aiLlm", label);
          }}
          onClear={() => {
            setCurrentAiLlmDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchAiLlmRecords(value);
            if (errors.aiLlm?.hasError) {
              runValidationTasks("aiLlm", value);
            }
            setCurrentAiLlmDisplayValue(value);
            setCurrentAiLlmValue(undefined);
          }}
          onBlur={() => runValidationTasks("aiLlm", currentAiLlmDisplayValue)}
          errorMessage={errors.aiLlm?.errorMessage}
          hasError={errors.aiLlm?.hasError}
          ref={aiLlmRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "aiLlm")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Chunk size"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={chunkSize}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              aiLlm,
              chunkSize: value,
              chunkOverlap,
            };
            const result = onChange(modelFields);
            value = result?.chunkSize ?? value;
          }
          if (errors.chunkSize?.hasError) {
            runValidationTasks("chunkSize", value);
          }
          setChunkSize(value);
        }}
        onBlur={() => runValidationTasks("chunkSize", chunkSize)}
        errorMessage={errors.chunkSize?.errorMessage}
        hasError={errors.chunkSize?.hasError}
        {...getOverrideProps(overrides, "chunkSize")}
      ></TextField>
      <TextField
        label="Chunk overlap"
        isRequired={true}
        isReadOnly={false}
        value={chunkOverlap}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              aiLlm,
              chunkSize,
              chunkOverlap: value,
            };
            const result = onChange(modelFields);
            value = result?.chunkOverlap ?? value;
          }
          if (errors.chunkOverlap?.hasError) {
            runValidationTasks("chunkOverlap", value);
          }
          setChunkOverlap(value);
        }}
        onBlur={() => runValidationTasks("chunkOverlap", chunkOverlap)}
        errorMessage={errors.chunkOverlap?.errorMessage}
        hasError={errors.chunkOverlap?.hasError}
        {...getOverrideProps(overrides, "chunkOverlap")}
      ></TextField>
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
