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
  getApplicationStage,
  listAiSettings,
  listApplicationStageCognitoUserPools,
  listBackendSettings,
  listFrontendSettings,
} from "../graphql/queries";
import { updateApplicationStage } from "../graphql/mutations";
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
export default function ApplicationStageUpdateForm(props) {
  const {
    id: idProp,
    applicationStage: applicationStageModelProp,
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
    aiSettings: undefined,
    backendSettings: undefined,
    frontendSettings: undefined,
    cognitoUserPool: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [aiSettings, setAiSettings] = React.useState(initialValues.aiSettings);
  const [aiSettingsLoading, setAiSettingsLoading] = React.useState(false);
  const [aiSettingsRecords, setAiSettingsRecords] = React.useState([]);
  const [backendSettings, setBackendSettings] = React.useState(
    initialValues.backendSettings
  );
  const [backendSettingsLoading, setBackendSettingsLoading] =
    React.useState(false);
  const [backendSettingsRecords, setBackendSettingsRecords] = React.useState(
    []
  );
  const [frontendSettings, setFrontendSettings] = React.useState(
    initialValues.frontendSettings
  );
  const [frontendSettingsLoading, setFrontendSettingsLoading] =
    React.useState(false);
  const [frontendSettingsRecords, setFrontendSettingsRecords] = React.useState(
    []
  );
  const [cognitoUserPool, setCognitoUserPool] = React.useState(
    initialValues.cognitoUserPool
  );
  const [cognitoUserPoolLoading, setCognitoUserPoolLoading] =
    React.useState(false);
  const [cognitoUserPoolRecords, setCognitoUserPoolRecords] = React.useState(
    []
  );
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = applicationStageRecord
      ? {
          ...initialValues,
          ...applicationStageRecord,
          aiSettings,
          backendSettings,
          frontendSettings,
          cognitoUserPool,
        }
      : initialValues;
    setName(cleanValues.name);
    setAiSettings(cleanValues.aiSettings);
    setCurrentAiSettingsValue(undefined);
    setCurrentAiSettingsDisplayValue("");
    setBackendSettings(cleanValues.backendSettings);
    setCurrentBackendSettingsValue(undefined);
    setCurrentBackendSettingsDisplayValue("");
    setFrontendSettings(cleanValues.frontendSettings);
    setCurrentFrontendSettingsValue(undefined);
    setCurrentFrontendSettingsDisplayValue("");
    setCognitoUserPool(cleanValues.cognitoUserPool);
    setCurrentCognitoUserPoolValue(undefined);
    setCurrentCognitoUserPoolDisplayValue("");
    setErrors({});
  };
  const [applicationStageRecord, setApplicationStageRecord] = React.useState(
    applicationStageModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getApplicationStage.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getApplicationStage
        : applicationStageModelProp;
      const aiSettingsRecord = record ? await record.aiSettings : undefined;
      setAiSettings(aiSettingsRecord);
      const backendSettingsRecord = record
        ? await record.backendSettings
        : undefined;
      setBackendSettings(backendSettingsRecord);
      const frontendSettingsRecord = record
        ? await record.frontendSettings
        : undefined;
      setFrontendSettings(frontendSettingsRecord);
      const cognitoUserPoolRecord = record
        ? await record.cognitoUserPool
        : undefined;
      setCognitoUserPool(cognitoUserPoolRecord);
      setApplicationStageRecord(record);
    };
    queryData();
  }, [idProp, applicationStageModelProp]);
  React.useEffect(resetStateValues, [
    applicationStageRecord,
    aiSettings,
    backendSettings,
    frontendSettings,
    cognitoUserPool,
  ]);
  const [currentAiSettingsDisplayValue, setCurrentAiSettingsDisplayValue] =
    React.useState("");
  const [currentAiSettingsValue, setCurrentAiSettingsValue] =
    React.useState(undefined);
  const aiSettingsRef = React.createRef();
  const [
    currentBackendSettingsDisplayValue,
    setCurrentBackendSettingsDisplayValue,
  ] = React.useState("");
  const [currentBackendSettingsValue, setCurrentBackendSettingsValue] =
    React.useState(undefined);
  const backendSettingsRef = React.createRef();
  const [
    currentFrontendSettingsDisplayValue,
    setCurrentFrontendSettingsDisplayValue,
  ] = React.useState("");
  const [currentFrontendSettingsValue, setCurrentFrontendSettingsValue] =
    React.useState(undefined);
  const frontendSettingsRef = React.createRef();
  const [
    currentCognitoUserPoolDisplayValue,
    setCurrentCognitoUserPoolDisplayValue,
  ] = React.useState("");
  const [currentCognitoUserPoolValue, setCurrentCognitoUserPoolValue] =
    React.useState(undefined);
  const cognitoUserPoolRef = React.createRef();
  const getIDValue = {
    aiSettings: (r) => JSON.stringify({ id: r?.id }),
    backendSettings: (r) => JSON.stringify({ id: r?.id }),
    frontendSettings: (r) => JSON.stringify({ id: r?.id }),
    cognitoUserPool: (r) => JSON.stringify({ id: r?.id }),
  };
  const aiSettingsIdSet = new Set(
    Array.isArray(aiSettings)
      ? aiSettings.map((r) => getIDValue.aiSettings?.(r))
      : getIDValue.aiSettings?.(aiSettings)
  );
  const backendSettingsIdSet = new Set(
    Array.isArray(backendSettings)
      ? backendSettings.map((r) => getIDValue.backendSettings?.(r))
      : getIDValue.backendSettings?.(backendSettings)
  );
  const frontendSettingsIdSet = new Set(
    Array.isArray(frontendSettings)
      ? frontendSettings.map((r) => getIDValue.frontendSettings?.(r))
      : getIDValue.frontendSettings?.(frontendSettings)
  );
  const cognitoUserPoolIdSet = new Set(
    Array.isArray(cognitoUserPool)
      ? cognitoUserPool.map((r) => getIDValue.cognitoUserPool?.(r))
      : getIDValue.cognitoUserPool?.(cognitoUserPool)
  );
  const getDisplayValue = {
    aiSettings: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    backendSettings: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    frontendSettings: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    cognitoUserPool: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    aiSettings: [],
    backendSettings: [],
    frontendSettings: [],
    cognitoUserPool: [],
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
  const fetchAiSettingsRecords = async (value) => {
    setAiSettingsLoading(true);
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
          query: listAiSettings.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAiSettings?.items;
      var loaded = result.filter(
        (item) => !aiSettingsIdSet.has(getIDValue.aiSettings?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setAiSettingsRecords(newOptions.slice(0, autocompleteLength));
    setAiSettingsLoading(false);
  };
  const fetchBackendSettingsRecords = async (value) => {
    setBackendSettingsLoading(true);
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
          query: listBackendSettings.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listBackendSettings?.items;
      var loaded = result.filter(
        (item) => !backendSettingsIdSet.has(getIDValue.backendSettings?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setBackendSettingsRecords(newOptions.slice(0, autocompleteLength));
    setBackendSettingsLoading(false);
  };
  const fetchFrontendSettingsRecords = async (value) => {
    setFrontendSettingsLoading(true);
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
          query: listFrontendSettings.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listFrontendSettings?.items;
      var loaded = result.filter(
        (item) =>
          !frontendSettingsIdSet.has(getIDValue.frontendSettings?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setFrontendSettingsRecords(newOptions.slice(0, autocompleteLength));
    setFrontendSettingsLoading(false);
  };
  const fetchCognitoUserPoolRecords = async (value) => {
    setCognitoUserPoolLoading(true);
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
          query: listApplicationStageCognitoUserPools.replaceAll(
            "__typename",
            ""
          ),
          variables,
        })
      )?.data?.listApplicationStageCognitoUserPools?.items;
      var loaded = result.filter(
        (item) => !cognitoUserPoolIdSet.has(getIDValue.cognitoUserPool?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCognitoUserPoolRecords(newOptions.slice(0, autocompleteLength));
    setCognitoUserPoolLoading(false);
  };
  React.useEffect(() => {
    fetchAiSettingsRecords("");
    fetchBackendSettingsRecords("");
    fetchFrontendSettingsRecords("");
    fetchCognitoUserPoolRecords("");
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
          aiSettings: aiSettings ?? null,
          backendSettings: backendSettings ?? null,
          frontendSettings: frontendSettings ?? null,
          cognitoUserPool: cognitoUserPool ?? null,
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
            aiSettingsID: modelFields?.aiSettings?.id ?? null,
            backendSettingsID: modelFields?.backendSettings?.id ?? null,
            frontendSettingsID: modelFields?.frontendSettings?.id ?? null,
            cognitoUserPoolID: modelFields?.cognitoUserPool?.id ?? null,
          };
          await client.graphql({
            query: updateApplicationStage.replaceAll("__typename", ""),
            variables: {
              input: {
                id: applicationStageRecord.id,
                ...modelFieldsToSave,
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
      {...getOverrideProps(overrides, "ApplicationStageUpdateForm")}
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
              aiSettings,
              backendSettings,
              frontendSettings,
              cognitoUserPool,
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
              aiSettings: value,
              backendSettings,
              frontendSettings,
              cognitoUserPool,
            };
            const result = onChange(modelFields);
            value = result?.aiSettings ?? value;
          }
          setAiSettings(value);
          setCurrentAiSettingsValue(undefined);
          setCurrentAiSettingsDisplayValue("");
        }}
        currentFieldValue={currentAiSettingsValue}
        label={"Ai settings"}
        items={aiSettings ? [aiSettings] : []}
        hasError={errors?.aiSettings?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("aiSettings", currentAiSettingsValue)
        }
        errorMessage={errors?.aiSettings?.errorMessage}
        getBadgeText={getDisplayValue.aiSettings}
        setFieldValue={(model) => {
          setCurrentAiSettingsDisplayValue(
            model ? getDisplayValue.aiSettings(model) : ""
          );
          setCurrentAiSettingsValue(model);
        }}
        inputFieldRef={aiSettingsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Ai settings"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AiSettings"
          value={currentAiSettingsDisplayValue}
          options={aiSettingsRecords
            .filter((r) => !aiSettingsIdSet.has(getIDValue.aiSettings?.(r)))
            .map((r) => ({
              id: getIDValue.aiSettings?.(r),
              label: getDisplayValue.aiSettings?.(r),
            }))}
          isLoading={aiSettingsLoading}
          onSelect={({ id, label }) => {
            setCurrentAiSettingsValue(
              aiSettingsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAiSettingsDisplayValue(label);
            runValidationTasks("aiSettings", label);
          }}
          onClear={() => {
            setCurrentAiSettingsDisplayValue("");
          }}
          defaultValue={aiSettings}
          onChange={(e) => {
            let { value } = e.target;
            fetchAiSettingsRecords(value);
            if (errors.aiSettings?.hasError) {
              runValidationTasks("aiSettings", value);
            }
            setCurrentAiSettingsDisplayValue(value);
            setCurrentAiSettingsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("aiSettings", currentAiSettingsDisplayValue)
          }
          errorMessage={errors.aiSettings?.errorMessage}
          hasError={errors.aiSettings?.hasError}
          ref={aiSettingsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "aiSettings")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              aiSettings,
              backendSettings: value,
              frontendSettings,
              cognitoUserPool,
            };
            const result = onChange(modelFields);
            value = result?.backendSettings ?? value;
          }
          setBackendSettings(value);
          setCurrentBackendSettingsValue(undefined);
          setCurrentBackendSettingsDisplayValue("");
        }}
        currentFieldValue={currentBackendSettingsValue}
        label={"Backend settings"}
        items={backendSettings ? [backendSettings] : []}
        hasError={errors?.backendSettings?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "backendSettings",
            currentBackendSettingsValue
          )
        }
        errorMessage={errors?.backendSettings?.errorMessage}
        getBadgeText={getDisplayValue.backendSettings}
        setFieldValue={(model) => {
          setCurrentBackendSettingsDisplayValue(
            model ? getDisplayValue.backendSettings(model) : ""
          );
          setCurrentBackendSettingsValue(model);
        }}
        inputFieldRef={backendSettingsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Backend settings"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search BackendSettings"
          value={currentBackendSettingsDisplayValue}
          options={backendSettingsRecords
            .filter(
              (r) => !backendSettingsIdSet.has(getIDValue.backendSettings?.(r))
            )
            .map((r) => ({
              id: getIDValue.backendSettings?.(r),
              label: getDisplayValue.backendSettings?.(r),
            }))}
          isLoading={backendSettingsLoading}
          onSelect={({ id, label }) => {
            setCurrentBackendSettingsValue(
              backendSettingsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentBackendSettingsDisplayValue(label);
            runValidationTasks("backendSettings", label);
          }}
          onClear={() => {
            setCurrentBackendSettingsDisplayValue("");
          }}
          defaultValue={backendSettings}
          onChange={(e) => {
            let { value } = e.target;
            fetchBackendSettingsRecords(value);
            if (errors.backendSettings?.hasError) {
              runValidationTasks("backendSettings", value);
            }
            setCurrentBackendSettingsDisplayValue(value);
            setCurrentBackendSettingsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "backendSettings",
              currentBackendSettingsDisplayValue
            )
          }
          errorMessage={errors.backendSettings?.errorMessage}
          hasError={errors.backendSettings?.hasError}
          ref={backendSettingsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "backendSettings")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              aiSettings,
              backendSettings,
              frontendSettings: value,
              cognitoUserPool,
            };
            const result = onChange(modelFields);
            value = result?.frontendSettings ?? value;
          }
          setFrontendSettings(value);
          setCurrentFrontendSettingsValue(undefined);
          setCurrentFrontendSettingsDisplayValue("");
        }}
        currentFieldValue={currentFrontendSettingsValue}
        label={"Frontend settings"}
        items={frontendSettings ? [frontendSettings] : []}
        hasError={errors?.frontendSettings?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "frontendSettings",
            currentFrontendSettingsValue
          )
        }
        errorMessage={errors?.frontendSettings?.errorMessage}
        getBadgeText={getDisplayValue.frontendSettings}
        setFieldValue={(model) => {
          setCurrentFrontendSettingsDisplayValue(
            model ? getDisplayValue.frontendSettings(model) : ""
          );
          setCurrentFrontendSettingsValue(model);
        }}
        inputFieldRef={frontendSettingsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Frontend settings"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search FrontendSettings"
          value={currentFrontendSettingsDisplayValue}
          options={frontendSettingsRecords
            .filter(
              (r) =>
                !frontendSettingsIdSet.has(getIDValue.frontendSettings?.(r))
            )
            .map((r) => ({
              id: getIDValue.frontendSettings?.(r),
              label: getDisplayValue.frontendSettings?.(r),
            }))}
          isLoading={frontendSettingsLoading}
          onSelect={({ id, label }) => {
            setCurrentFrontendSettingsValue(
              frontendSettingsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentFrontendSettingsDisplayValue(label);
            runValidationTasks("frontendSettings", label);
          }}
          onClear={() => {
            setCurrentFrontendSettingsDisplayValue("");
          }}
          defaultValue={frontendSettings}
          onChange={(e) => {
            let { value } = e.target;
            fetchFrontendSettingsRecords(value);
            if (errors.frontendSettings?.hasError) {
              runValidationTasks("frontendSettings", value);
            }
            setCurrentFrontendSettingsDisplayValue(value);
            setCurrentFrontendSettingsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "frontendSettings",
              currentFrontendSettingsDisplayValue
            )
          }
          errorMessage={errors.frontendSettings?.errorMessage}
          hasError={errors.frontendSettings?.hasError}
          ref={frontendSettingsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "frontendSettings")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              aiSettings,
              backendSettings,
              frontendSettings,
              cognitoUserPool: value,
            };
            const result = onChange(modelFields);
            value = result?.cognitoUserPool ?? value;
          }
          setCognitoUserPool(value);
          setCurrentCognitoUserPoolValue(undefined);
          setCurrentCognitoUserPoolDisplayValue("");
        }}
        currentFieldValue={currentCognitoUserPoolValue}
        label={"Cognito user pool"}
        items={cognitoUserPool ? [cognitoUserPool] : []}
        hasError={errors?.cognitoUserPool?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "cognitoUserPool",
            currentCognitoUserPoolValue
          )
        }
        errorMessage={errors?.cognitoUserPool?.errorMessage}
        getBadgeText={getDisplayValue.cognitoUserPool}
        setFieldValue={(model) => {
          setCurrentCognitoUserPoolDisplayValue(
            model ? getDisplayValue.cognitoUserPool(model) : ""
          );
          setCurrentCognitoUserPoolValue(model);
        }}
        inputFieldRef={cognitoUserPoolRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Cognito user pool"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ApplicationStageCognitoUserPool"
          value={currentCognitoUserPoolDisplayValue}
          options={cognitoUserPoolRecords
            .filter(
              (r) => !cognitoUserPoolIdSet.has(getIDValue.cognitoUserPool?.(r))
            )
            .map((r) => ({
              id: getIDValue.cognitoUserPool?.(r),
              label: getDisplayValue.cognitoUserPool?.(r),
            }))}
          isLoading={cognitoUserPoolLoading}
          onSelect={({ id, label }) => {
            setCurrentCognitoUserPoolValue(
              cognitoUserPoolRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCognitoUserPoolDisplayValue(label);
            runValidationTasks("cognitoUserPool", label);
          }}
          onClear={() => {
            setCurrentCognitoUserPoolDisplayValue("");
          }}
          defaultValue={cognitoUserPool}
          onChange={(e) => {
            let { value } = e.target;
            fetchCognitoUserPoolRecords(value);
            if (errors.cognitoUserPool?.hasError) {
              runValidationTasks("cognitoUserPool", value);
            }
            setCurrentCognitoUserPoolDisplayValue(value);
            setCurrentCognitoUserPoolValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "cognitoUserPool",
              currentCognitoUserPoolDisplayValue
            )
          }
          errorMessage={errors.cognitoUserPool?.errorMessage}
          hasError={errors.cognitoUserPool?.hasError}
          ref={cognitoUserPoolRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "cognitoUserPool")}
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
          isDisabled={!(idProp || applicationStageModelProp)}
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
              !(idProp || applicationStageModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
