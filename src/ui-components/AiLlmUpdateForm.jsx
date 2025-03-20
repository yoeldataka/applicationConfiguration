/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getAiLlm } from "../graphql/queries";
import { updateAiLlm } from "../graphql/mutations";
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
export default function AiLlmUpdateForm(props) {
  const {
    id: idProp,
    aiLlm: aiLlmModelProp,
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
    input: [],
    output: [],
    description: "",
    available: false,
    maxTokens: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [input, setInput] = React.useState(initialValues.input);
  const [output, setOutput] = React.useState(initialValues.output);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [available, setAvailable] = React.useState(initialValues.available);
  const [maxTokens, setMaxTokens] = React.useState(initialValues.maxTokens);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = aiLlmRecord
      ? { ...initialValues, ...aiLlmRecord }
      : initialValues;
    setName(cleanValues.name);
    setInput(cleanValues.input ?? []);
    setCurrentInputValue("");
    setOutput(cleanValues.output ?? []);
    setCurrentOutputValue("");
    setDescription(cleanValues.description);
    setAvailable(cleanValues.available);
    setMaxTokens(cleanValues.maxTokens);
    setErrors({});
  };
  const [aiLlmRecord, setAiLlmRecord] = React.useState(aiLlmModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAiLlm.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAiLlm
        : aiLlmModelProp;
      setAiLlmRecord(record);
    };
    queryData();
  }, [idProp, aiLlmModelProp]);
  React.useEffect(resetStateValues, [aiLlmRecord]);
  const [currentInputValue, setCurrentInputValue] = React.useState("");
  const inputRef = React.createRef();
  const [currentOutputValue, setCurrentOutputValue] = React.useState("");
  const outputRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    input: [{ type: "Required" }],
    output: [{ type: "Required" }],
    description: [{ type: "Required" }],
    available: [{ type: "Required" }],
    maxTokens: [],
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
          input,
          output,
          description,
          available,
          maxTokens: maxTokens ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
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
          await client.graphql({
            query: updateAiLlm.replaceAll("__typename", ""),
            variables: {
              input: {
                id: aiLlmRecord.id,
                ...modelFields,
              },
            },
          });
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
      {...getOverrideProps(overrides, "AiLlmUpdateForm")}
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
              input,
              output,
              description,
              available,
              maxTokens,
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
              input: values,
              output,
              description,
              available,
              maxTokens,
            };
            const result = onChange(modelFields);
            values = result?.input ?? values;
          }
          setInput(values);
          setCurrentInputValue("");
        }}
        currentFieldValue={currentInputValue}
        label={"Input"}
        items={input}
        hasError={errors?.input?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("input", currentInputValue)
        }
        errorMessage={errors?.input?.errorMessage}
        setFieldValue={setCurrentInputValue}
        inputFieldRef={inputRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Input"
          isRequired={true}
          isReadOnly={false}
          value={currentInputValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.input?.hasError) {
              runValidationTasks("input", value);
            }
            setCurrentInputValue(value);
          }}
          onBlur={() => runValidationTasks("input", currentInputValue)}
          errorMessage={errors.input?.errorMessage}
          hasError={errors.input?.hasError}
          ref={inputRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "input")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              input,
              output: values,
              description,
              available,
              maxTokens,
            };
            const result = onChange(modelFields);
            values = result?.output ?? values;
          }
          setOutput(values);
          setCurrentOutputValue("");
        }}
        currentFieldValue={currentOutputValue}
        label={"Output"}
        items={output}
        hasError={errors?.output?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("output", currentOutputValue)
        }
        errorMessage={errors?.output?.errorMessage}
        setFieldValue={setCurrentOutputValue}
        inputFieldRef={outputRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Output"
          isRequired={true}
          isReadOnly={false}
          value={currentOutputValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.output?.hasError) {
              runValidationTasks("output", value);
            }
            setCurrentOutputValue(value);
          }}
          onBlur={() => runValidationTasks("output", currentOutputValue)}
          errorMessage={errors.output?.errorMessage}
          hasError={errors.output?.hasError}
          ref={outputRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "output")}
        ></TextField>
      </ArrayField>
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
              input,
              output,
              description: value,
              available,
              maxTokens,
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
      <SwitchField
        label="Available"
        defaultChecked={false}
        isDisabled={false}
        isChecked={available}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              input,
              output,
              description,
              available: value,
              maxTokens,
            };
            const result = onChange(modelFields);
            value = result?.available ?? value;
          }
          if (errors.available?.hasError) {
            runValidationTasks("available", value);
          }
          setAvailable(value);
        }}
        onBlur={() => runValidationTasks("available", available)}
        errorMessage={errors.available?.errorMessage}
        hasError={errors.available?.hasError}
        {...getOverrideProps(overrides, "available")}
      ></SwitchField>
      <TextField
        label="Max tokens"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={maxTokens}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              input,
              output,
              description,
              available,
              maxTokens: value,
            };
            const result = onChange(modelFields);
            value = result?.maxTokens ?? value;
          }
          if (errors.maxTokens?.hasError) {
            runValidationTasks("maxTokens", value);
          }
          setMaxTokens(value);
        }}
        onBlur={() => runValidationTasks("maxTokens", maxTokens)}
        errorMessage={errors.maxTokens?.errorMessage}
        hasError={errors.maxTokens?.hasError}
        {...getOverrideProps(overrides, "maxTokens")}
      ></TextField>
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
          isDisabled={!(idProp || aiLlmModelProp)}
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
              !(idProp || aiLlmModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
