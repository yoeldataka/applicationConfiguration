/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getAiTaskTypes } from "../graphql/queries";
import { updateAiTaskTypes } from "../graphql/mutations";
const client = generateClient();
export default function AiTaskTypesUpdateForm(props) {
  const {
    id: idProp,
    aiTaskTypes: aiTaskTypesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    types: "",
  };
  const [types, setTypes] = React.useState(initialValues.types);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = aiTaskTypesRecord
      ? { ...initialValues, ...aiTaskTypesRecord }
      : initialValues;
    setTypes(cleanValues.types);
    setErrors({});
  };
  const [aiTaskTypesRecord, setAiTaskTypesRecord] =
    React.useState(aiTaskTypesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAiTaskTypes.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAiTaskTypes
        : aiTaskTypesModelProp;
      setAiTaskTypesRecord(record);
    };
    queryData();
  }, [idProp, aiTaskTypesModelProp]);
  React.useEffect(resetStateValues, [aiTaskTypesRecord]);
  const validations = {
    types: [{ type: "Required" }],
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
          types,
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
            query: updateAiTaskTypes.replaceAll("__typename", ""),
            variables: {
              input: {
                id: aiTaskTypesRecord.id,
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
      {...getOverrideProps(overrides, "AiTaskTypesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Types"
        isRequired={true}
        isReadOnly={false}
        value={types}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              types: value,
            };
            const result = onChange(modelFields);
            value = result?.types ?? value;
          }
          if (errors.types?.hasError) {
            runValidationTasks("types", value);
          }
          setTypes(value);
        }}
        onBlur={() => runValidationTasks("types", types)}
        errorMessage={errors.types?.errorMessage}
        hasError={errors.types?.hasError}
        {...getOverrideProps(overrides, "types")}
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
          isDisabled={!(idProp || aiTaskTypesModelProp)}
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
              !(idProp || aiTaskTypesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
