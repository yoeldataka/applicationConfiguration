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
import { getApplicationStageCognitoUserPool } from "../graphql/queries";
import { updateApplicationStageCognitoUserPool } from "../graphql/mutations";
const client = generateClient();
export default function ApplicationStageCognitoUserPoolUpdateForm(props) {
  const {
    id: idProp,
    applicationStageCognitoUserPool: applicationStageCognitoUserPoolModelProp,
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
    userPoolId: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [userPoolId, setUserPoolId] = React.useState(initialValues.userPoolId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = applicationStageCognitoUserPoolRecord
      ? { ...initialValues, ...applicationStageCognitoUserPoolRecord }
      : initialValues;
    setName(cleanValues.name);
    setUserPoolId(cleanValues.userPoolId);
    setErrors({});
  };
  const [
    applicationStageCognitoUserPoolRecord,
    setApplicationStageCognitoUserPoolRecord,
  ] = React.useState(applicationStageCognitoUserPoolModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getApplicationStageCognitoUserPool.replaceAll(
                "__typename",
                ""
              ),
              variables: { id: idProp },
            })
          )?.data?.getApplicationStageCognitoUserPool
        : applicationStageCognitoUserPoolModelProp;
      setApplicationStageCognitoUserPoolRecord(record);
    };
    queryData();
  }, [idProp, applicationStageCognitoUserPoolModelProp]);
  React.useEffect(resetStateValues, [applicationStageCognitoUserPoolRecord]);
  const validations = {
    name: [{ type: "Required" }],
    userPoolId: [{ type: "Required" }],
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
          userPoolId,
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
            query: updateApplicationStageCognitoUserPool.replaceAll(
              "__typename",
              ""
            ),
            variables: {
              input: {
                id: applicationStageCognitoUserPoolRecord.id,
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
      {...getOverrideProps(
        overrides,
        "ApplicationStageCognitoUserPoolUpdateForm"
      )}
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
              userPoolId,
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
        label="User pool id"
        isRequired={true}
        isReadOnly={false}
        value={userPoolId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              userPoolId: value,
            };
            const result = onChange(modelFields);
            value = result?.userPoolId ?? value;
          }
          if (errors.userPoolId?.hasError) {
            runValidationTasks("userPoolId", value);
          }
          setUserPoolId(value);
        }}
        onBlur={() => runValidationTasks("userPoolId", userPoolId)}
        errorMessage={errors.userPoolId?.errorMessage}
        hasError={errors.userPoolId?.hasError}
        {...getOverrideProps(overrides, "userPoolId")}
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
          isDisabled={!(idProp || applicationStageCognitoUserPoolModelProp)}
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
              !(idProp || applicationStageCognitoUserPoolModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
