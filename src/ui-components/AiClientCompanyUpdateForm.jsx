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
import { getAiClientCompany } from "../graphql/queries";
import { updateAiClientCompany } from "../graphql/mutations";
const client = generateClient();
export default function AiClientCompanyUpdateForm(props) {
  const {
    id: idProp,
    aiClientCompany: aiClientCompanyModelProp,
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
    business: "",
    values: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [business, setBusiness] = React.useState(initialValues.business);
  const [values, setValues] = React.useState(initialValues.values);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = aiClientCompanyRecord
      ? { ...initialValues, ...aiClientCompanyRecord }
      : initialValues;
    setName(cleanValues.name);
    setBusiness(cleanValues.business);
    setValues(cleanValues.values);
    setErrors({});
  };
  const [aiClientCompanyRecord, setAiClientCompanyRecord] = React.useState(
    aiClientCompanyModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAiClientCompany.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAiClientCompany
        : aiClientCompanyModelProp;
      setAiClientCompanyRecord(record);
    };
    queryData();
  }, [idProp, aiClientCompanyModelProp]);
  React.useEffect(resetStateValues, [aiClientCompanyRecord]);
  const validations = {
    name: [{ type: "Required" }],
    business: [{ type: "Required" }],
    values: [{ type: "Required" }],
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
          business,
          values,
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
            query: updateAiClientCompany.replaceAll("__typename", ""),
            variables: {
              input: {
                id: aiClientCompanyRecord.id,
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
      {...getOverrideProps(overrides, "AiClientCompanyUpdateForm")}
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
              business,
              values,
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
        label="Business"
        isRequired={true}
        isReadOnly={false}
        value={business}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              business: value,
              values,
            };
            const result = onChange(modelFields);
            value = result?.business ?? value;
          }
          if (errors.business?.hasError) {
            runValidationTasks("business", value);
          }
          setBusiness(value);
        }}
        onBlur={() => runValidationTasks("business", business)}
        errorMessage={errors.business?.errorMessage}
        hasError={errors.business?.hasError}
        {...getOverrideProps(overrides, "business")}
      ></TextField>
      <TextField
        label="Values"
        isRequired={true}
        isReadOnly={false}
        value={values}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              business,
              values: value,
            };
            const result = onChange(modelFields);
            value = result?.values ?? value;
          }
          if (errors.values?.hasError) {
            runValidationTasks("values", value);
          }
          setValues(value);
        }}
        onBlur={() => runValidationTasks("values", values)}
        errorMessage={errors.values?.errorMessage}
        hasError={errors.values?.hasError}
        {...getOverrideProps(overrides, "values")}
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
          isDisabled={!(idProp || aiClientCompanyModelProp)}
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
              !(idProp || aiClientCompanyModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
