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
import { getAiVectorialDbConfig } from "../graphql/queries";
import { updateAiVectorialDbConfig } from "../graphql/mutations";
const client = generateClient();
export default function AiVectorialDbConfigUpdateForm(props) {
  const {
    id: idProp,
    aiVectorialDbConfig: aiVectorialDbConfigModelProp,
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
    apiKey: "",
    indexName: "",
    nameSpace: "",
    score: "",
    numberOfSimilarities: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [apiKey, setApiKey] = React.useState(initialValues.apiKey);
  const [indexName, setIndexName] = React.useState(initialValues.indexName);
  const [nameSpace, setNameSpace] = React.useState(initialValues.nameSpace);
  const [score, setScore] = React.useState(initialValues.score);
  const [numberOfSimilarities, setNumberOfSimilarities] = React.useState(
    initialValues.numberOfSimilarities
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = aiVectorialDbConfigRecord
      ? { ...initialValues, ...aiVectorialDbConfigRecord }
      : initialValues;
    setName(cleanValues.name);
    setApiKey(cleanValues.apiKey);
    setIndexName(cleanValues.indexName);
    setNameSpace(cleanValues.nameSpace);
    setScore(cleanValues.score);
    setNumberOfSimilarities(cleanValues.numberOfSimilarities);
    setErrors({});
  };
  const [aiVectorialDbConfigRecord, setAiVectorialDbConfigRecord] =
    React.useState(aiVectorialDbConfigModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAiVectorialDbConfig.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAiVectorialDbConfig
        : aiVectorialDbConfigModelProp;
      setAiVectorialDbConfigRecord(record);
    };
    queryData();
  }, [idProp, aiVectorialDbConfigModelProp]);
  React.useEffect(resetStateValues, [aiVectorialDbConfigRecord]);
  const validations = {
    name: [{ type: "Required" }],
    apiKey: [{ type: "Required" }],
    indexName: [{ type: "Required" }],
    nameSpace: [{ type: "Required" }],
    score: [{ type: "Required" }],
    numberOfSimilarities: [{ type: "Required" }],
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
          apiKey,
          indexName,
          nameSpace,
          score,
          numberOfSimilarities,
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
            query: updateAiVectorialDbConfig.replaceAll("__typename", ""),
            variables: {
              input: {
                id: aiVectorialDbConfigRecord.id,
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
      {...getOverrideProps(overrides, "AiVectorialDbConfigUpdateForm")}
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
              apiKey,
              indexName,
              nameSpace,
              score,
              numberOfSimilarities,
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
        label="Api key"
        isRequired={true}
        isReadOnly={false}
        value={apiKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              apiKey: value,
              indexName,
              nameSpace,
              score,
              numberOfSimilarities,
            };
            const result = onChange(modelFields);
            value = result?.apiKey ?? value;
          }
          if (errors.apiKey?.hasError) {
            runValidationTasks("apiKey", value);
          }
          setApiKey(value);
        }}
        onBlur={() => runValidationTasks("apiKey", apiKey)}
        errorMessage={errors.apiKey?.errorMessage}
        hasError={errors.apiKey?.hasError}
        {...getOverrideProps(overrides, "apiKey")}
      ></TextField>
      <TextField
        label="Index name"
        isRequired={true}
        isReadOnly={false}
        value={indexName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              apiKey,
              indexName: value,
              nameSpace,
              score,
              numberOfSimilarities,
            };
            const result = onChange(modelFields);
            value = result?.indexName ?? value;
          }
          if (errors.indexName?.hasError) {
            runValidationTasks("indexName", value);
          }
          setIndexName(value);
        }}
        onBlur={() => runValidationTasks("indexName", indexName)}
        errorMessage={errors.indexName?.errorMessage}
        hasError={errors.indexName?.hasError}
        {...getOverrideProps(overrides, "indexName")}
      ></TextField>
      <TextField
        label="Name space"
        isRequired={true}
        isReadOnly={false}
        value={nameSpace}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              apiKey,
              indexName,
              nameSpace: value,
              score,
              numberOfSimilarities,
            };
            const result = onChange(modelFields);
            value = result?.nameSpace ?? value;
          }
          if (errors.nameSpace?.hasError) {
            runValidationTasks("nameSpace", value);
          }
          setNameSpace(value);
        }}
        onBlur={() => runValidationTasks("nameSpace", nameSpace)}
        errorMessage={errors.nameSpace?.errorMessage}
        hasError={errors.nameSpace?.hasError}
        {...getOverrideProps(overrides, "nameSpace")}
      ></TextField>
      <TextField
        label="Score"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={score}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              apiKey,
              indexName,
              nameSpace,
              score: value,
              numberOfSimilarities,
            };
            const result = onChange(modelFields);
            value = result?.score ?? value;
          }
          if (errors.score?.hasError) {
            runValidationTasks("score", value);
          }
          setScore(value);
        }}
        onBlur={() => runValidationTasks("score", score)}
        errorMessage={errors.score?.errorMessage}
        hasError={errors.score?.hasError}
        {...getOverrideProps(overrides, "score")}
      ></TextField>
      <TextField
        label="Number of similarities"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={numberOfSimilarities}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              apiKey,
              indexName,
              nameSpace,
              score,
              numberOfSimilarities: value,
            };
            const result = onChange(modelFields);
            value = result?.numberOfSimilarities ?? value;
          }
          if (errors.numberOfSimilarities?.hasError) {
            runValidationTasks("numberOfSimilarities", value);
          }
          setNumberOfSimilarities(value);
        }}
        onBlur={() =>
          runValidationTasks("numberOfSimilarities", numberOfSimilarities)
        }
        errorMessage={errors.numberOfSimilarities?.errorMessage}
        hasError={errors.numberOfSimilarities?.hasError}
        {...getOverrideProps(overrides, "numberOfSimilarities")}
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
          isDisabled={!(idProp || aiVectorialDbConfigModelProp)}
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
              !(idProp || aiVectorialDbConfigModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
