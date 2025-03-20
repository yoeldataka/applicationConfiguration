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
  getApplication,
  listApplicationAiServerSnapshotReferences,
  listApplicationStages,
} from "../graphql/queries";
import { updateApplication } from "../graphql/mutations";
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
export default function ApplicationUpdateForm(props) {
  const {
    id: idProp,
    application: applicationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    url: "",
    name: "",
    version: "",
    DEV: undefined,
    STAGING: undefined,
    PROD: undefined,
    aiServerSnapshotReference: undefined,
  };
  const [url, setUrl] = React.useState(initialValues.url);
  const [name, setName] = React.useState(initialValues.name);
  const [version, setVersion] = React.useState(initialValues.version);
  const [DEV, setDEV] = React.useState(initialValues.DEV);
  const [DEVLoading, setDEVLoading] = React.useState(false);
  const [dEVRecords, setDEVRecords] = React.useState([]);
  const [STAGING, setSTAGING] = React.useState(initialValues.STAGING);
  const [STAGINGLoading, setSTAGINGLoading] = React.useState(false);
  const [sTAGINGRecords, setSTAGINGRecords] = React.useState([]);
  const [PROD, setPROD] = React.useState(initialValues.PROD);
  const [PRODLoading, setPRODLoading] = React.useState(false);
  const [pRODRecords, setPRODRecords] = React.useState([]);
  const [aiServerSnapshotReference, setAiServerSnapshotReference] =
    React.useState(initialValues.aiServerSnapshotReference);
  const [
    aiServerSnapshotReferenceLoading,
    setAiServerSnapshotReferenceLoading,
  ] = React.useState(false);
  const [
    aiServerSnapshotReferenceRecords,
    setAiServerSnapshotReferenceRecords,
  ] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = applicationRecord
      ? {
          ...initialValues,
          ...applicationRecord,
          DEV,
          STAGING,
          PROD,
          aiServerSnapshotReference,
        }
      : initialValues;
    setUrl(cleanValues.url);
    setName(cleanValues.name);
    setVersion(cleanValues.version);
    setDEV(cleanValues.DEV);
    setCurrentDEVValue(undefined);
    setCurrentDEVDisplayValue("");
    setSTAGING(cleanValues.STAGING);
    setCurrentSTAGINGValue(undefined);
    setCurrentSTAGINGDisplayValue("");
    setPROD(cleanValues.PROD);
    setCurrentPRODValue(undefined);
    setCurrentPRODDisplayValue("");
    setAiServerSnapshotReference(cleanValues.aiServerSnapshotReference);
    setCurrentAiServerSnapshotReferenceValue(undefined);
    setCurrentAiServerSnapshotReferenceDisplayValue("");
    setErrors({});
  };
  const [applicationRecord, setApplicationRecord] =
    React.useState(applicationModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getApplication.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getApplication
        : applicationModelProp;
      const DEVRecord = record ? await record.DEV : undefined;
      setDEV(DEVRecord);
      const STAGINGRecord = record ? await record.STAGING : undefined;
      setSTAGING(STAGINGRecord);
      const PRODRecord = record ? await record.PROD : undefined;
      setPROD(PRODRecord);
      const aiServerSnapshotReferenceRecord = record
        ? await record.aiServerSnapshotReference
        : undefined;
      setAiServerSnapshotReference(aiServerSnapshotReferenceRecord);
      setApplicationRecord(record);
    };
    queryData();
  }, [idProp, applicationModelProp]);
  React.useEffect(resetStateValues, [
    applicationRecord,
    DEV,
    STAGING,
    PROD,
    aiServerSnapshotReference,
  ]);
  const [currentDEVDisplayValue, setCurrentDEVDisplayValue] =
    React.useState("");
  const [currentDEVValue, setCurrentDEVValue] = React.useState(undefined);
  const DEVRef = React.createRef();
  const [currentSTAGINGDisplayValue, setCurrentSTAGINGDisplayValue] =
    React.useState("");
  const [currentSTAGINGValue, setCurrentSTAGINGValue] =
    React.useState(undefined);
  const STAGINGRef = React.createRef();
  const [currentPRODDisplayValue, setCurrentPRODDisplayValue] =
    React.useState("");
  const [currentPRODValue, setCurrentPRODValue] = React.useState(undefined);
  const PRODRef = React.createRef();
  const [
    currentAiServerSnapshotReferenceDisplayValue,
    setCurrentAiServerSnapshotReferenceDisplayValue,
  ] = React.useState("");
  const [
    currentAiServerSnapshotReferenceValue,
    setCurrentAiServerSnapshotReferenceValue,
  ] = React.useState(undefined);
  const aiServerSnapshotReferenceRef = React.createRef();
  const getIDValue = {
    DEV: (r) => JSON.stringify({ id: r?.id }),
    STAGING: (r) => JSON.stringify({ id: r?.id }),
    PROD: (r) => JSON.stringify({ id: r?.id }),
    aiServerSnapshotReference: (r) => JSON.stringify({ id: r?.id }),
  };
  const DEVIdSet = new Set(
    Array.isArray(DEV)
      ? DEV.map((r) => getIDValue.DEV?.(r))
      : getIDValue.DEV?.(DEV)
  );
  const STAGINGIdSet = new Set(
    Array.isArray(STAGING)
      ? STAGING.map((r) => getIDValue.STAGING?.(r))
      : getIDValue.STAGING?.(STAGING)
  );
  const PRODIdSet = new Set(
    Array.isArray(PROD)
      ? PROD.map((r) => getIDValue.PROD?.(r))
      : getIDValue.PROD?.(PROD)
  );
  const aiServerSnapshotReferenceIdSet = new Set(
    Array.isArray(aiServerSnapshotReference)
      ? aiServerSnapshotReference.map((r) =>
          getIDValue.aiServerSnapshotReference?.(r)
        )
      : getIDValue.aiServerSnapshotReference?.(aiServerSnapshotReference)
  );
  const getDisplayValue = {
    DEV: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    STAGING: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    PROD: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    aiServerSnapshotReference: (r) =>
      `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    url: [{ type: "Required" }],
    name: [{ type: "Required" }],
    version: [{ type: "Required" }],
    DEV: [],
    STAGING: [],
    PROD: [],
    aiServerSnapshotReference: [],
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
  const fetchDEVRecords = async (value) => {
    setDEVLoading(true);
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
          query: listApplicationStages.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listApplicationStages?.items;
      var loaded = result.filter(
        (item) => !DEVIdSet.has(getIDValue.DEV?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setDEVRecords(newOptions.slice(0, autocompleteLength));
    setDEVLoading(false);
  };
  const fetchSTAGINGRecords = async (value) => {
    setSTAGINGLoading(true);
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
          query: listApplicationStages.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listApplicationStages?.items;
      var loaded = result.filter(
        (item) => !STAGINGIdSet.has(getIDValue.STAGING?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setSTAGINGRecords(newOptions.slice(0, autocompleteLength));
    setSTAGINGLoading(false);
  };
  const fetchPRODRecords = async (value) => {
    setPRODLoading(true);
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
          query: listApplicationStages.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listApplicationStages?.items;
      var loaded = result.filter(
        (item) => !PRODIdSet.has(getIDValue.PROD?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setPRODRecords(newOptions.slice(0, autocompleteLength));
    setPRODLoading(false);
  };
  const fetchAiServerSnapshotReferenceRecords = async (value) => {
    setAiServerSnapshotReferenceLoading(true);
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
          query: listApplicationAiServerSnapshotReferences.replaceAll(
            "__typename",
            ""
          ),
          variables,
        })
      )?.data?.listApplicationAiServerSnapshotReferences?.items;
      var loaded = result.filter(
        (item) =>
          !aiServerSnapshotReferenceIdSet.has(
            getIDValue.aiServerSnapshotReference?.(item)
          )
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setAiServerSnapshotReferenceRecords(
      newOptions.slice(0, autocompleteLength)
    );
    setAiServerSnapshotReferenceLoading(false);
  };
  React.useEffect(() => {
    fetchDEVRecords("");
    fetchSTAGINGRecords("");
    fetchPRODRecords("");
    fetchAiServerSnapshotReferenceRecords("");
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
          url,
          name,
          version,
          DEV: DEV ?? null,
          STAGING: STAGING ?? null,
          PROD: PROD ?? null,
          aiServerSnapshotReference: aiServerSnapshotReference ?? null,
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
            url: modelFields.url,
            name: modelFields.name,
            version: modelFields.version,
            devStageID: modelFields?.DEV?.id ?? null,
            stagingStageID: modelFields?.STAGING?.id ?? null,
            prodStageID: modelFields?.PROD?.id ?? null,
            aiServerSnapshotReferenceID:
              modelFields?.aiServerSnapshotReference?.id ?? null,
          };
          await client.graphql({
            query: updateApplication.replaceAll("__typename", ""),
            variables: {
              input: {
                id: applicationRecord.id,
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
      {...getOverrideProps(overrides, "ApplicationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Url"
        isRequired={true}
        isReadOnly={false}
        value={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              url: value,
              name,
              version,
              DEV,
              STAGING,
              PROD,
              aiServerSnapshotReference,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              url,
              name: value,
              version,
              DEV,
              STAGING,
              PROD,
              aiServerSnapshotReference,
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
        label="Version"
        isRequired={true}
        isReadOnly={false}
        value={version}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              url,
              name,
              version: value,
              DEV,
              STAGING,
              PROD,
              aiServerSnapshotReference,
            };
            const result = onChange(modelFields);
            value = result?.version ?? value;
          }
          if (errors.version?.hasError) {
            runValidationTasks("version", value);
          }
          setVersion(value);
        }}
        onBlur={() => runValidationTasks("version", version)}
        errorMessage={errors.version?.errorMessage}
        hasError={errors.version?.hasError}
        {...getOverrideProps(overrides, "version")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              url,
              name,
              version,
              DEV: value,
              STAGING,
              PROD,
              aiServerSnapshotReference,
            };
            const result = onChange(modelFields);
            value = result?.DEV ?? value;
          }
          setDEV(value);
          setCurrentDEVValue(undefined);
          setCurrentDEVDisplayValue("");
        }}
        currentFieldValue={currentDEVValue}
        label={"Dev"}
        items={DEV ? [DEV] : []}
        hasError={errors?.DEV?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("DEV", currentDEVValue)
        }
        errorMessage={errors?.DEV?.errorMessage}
        getBadgeText={getDisplayValue.DEV}
        setFieldValue={(model) => {
          setCurrentDEVDisplayValue(model ? getDisplayValue.DEV(model) : "");
          setCurrentDEVValue(model);
        }}
        inputFieldRef={DEVRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Dev"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ApplicationStage"
          value={currentDEVDisplayValue}
          options={dEVRecords
            .filter((r) => !DEVIdSet.has(getIDValue.DEV?.(r)))
            .map((r) => ({
              id: getIDValue.DEV?.(r),
              label: getDisplayValue.DEV?.(r),
            }))}
          isLoading={DEVLoading}
          onSelect={({ id, label }) => {
            setCurrentDEVValue(
              dEVRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentDEVDisplayValue(label);
            runValidationTasks("DEV", label);
          }}
          onClear={() => {
            setCurrentDEVDisplayValue("");
          }}
          defaultValue={DEV}
          onChange={(e) => {
            let { value } = e.target;
            fetchDEVRecords(value);
            if (errors.DEV?.hasError) {
              runValidationTasks("DEV", value);
            }
            setCurrentDEVDisplayValue(value);
            setCurrentDEVValue(undefined);
          }}
          onBlur={() => runValidationTasks("DEV", currentDEVDisplayValue)}
          errorMessage={errors.DEV?.errorMessage}
          hasError={errors.DEV?.hasError}
          ref={DEVRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "DEV")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              url,
              name,
              version,
              DEV,
              STAGING: value,
              PROD,
              aiServerSnapshotReference,
            };
            const result = onChange(modelFields);
            value = result?.STAGING ?? value;
          }
          setSTAGING(value);
          setCurrentSTAGINGValue(undefined);
          setCurrentSTAGINGDisplayValue("");
        }}
        currentFieldValue={currentSTAGINGValue}
        label={"Staging"}
        items={STAGING ? [STAGING] : []}
        hasError={errors?.STAGING?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("STAGING", currentSTAGINGValue)
        }
        errorMessage={errors?.STAGING?.errorMessage}
        getBadgeText={getDisplayValue.STAGING}
        setFieldValue={(model) => {
          setCurrentSTAGINGDisplayValue(
            model ? getDisplayValue.STAGING(model) : ""
          );
          setCurrentSTAGINGValue(model);
        }}
        inputFieldRef={STAGINGRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Staging"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ApplicationStage"
          value={currentSTAGINGDisplayValue}
          options={sTAGINGRecords
            .filter((r) => !STAGINGIdSet.has(getIDValue.STAGING?.(r)))
            .map((r) => ({
              id: getIDValue.STAGING?.(r),
              label: getDisplayValue.STAGING?.(r),
            }))}
          isLoading={STAGINGLoading}
          onSelect={({ id, label }) => {
            setCurrentSTAGINGValue(
              sTAGINGRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentSTAGINGDisplayValue(label);
            runValidationTasks("STAGING", label);
          }}
          onClear={() => {
            setCurrentSTAGINGDisplayValue("");
          }}
          defaultValue={STAGING}
          onChange={(e) => {
            let { value } = e.target;
            fetchSTAGINGRecords(value);
            if (errors.STAGING?.hasError) {
              runValidationTasks("STAGING", value);
            }
            setCurrentSTAGINGDisplayValue(value);
            setCurrentSTAGINGValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("STAGING", currentSTAGINGDisplayValue)
          }
          errorMessage={errors.STAGING?.errorMessage}
          hasError={errors.STAGING?.hasError}
          ref={STAGINGRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "STAGING")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              url,
              name,
              version,
              DEV,
              STAGING,
              PROD: value,
              aiServerSnapshotReference,
            };
            const result = onChange(modelFields);
            value = result?.PROD ?? value;
          }
          setPROD(value);
          setCurrentPRODValue(undefined);
          setCurrentPRODDisplayValue("");
        }}
        currentFieldValue={currentPRODValue}
        label={"Prod"}
        items={PROD ? [PROD] : []}
        hasError={errors?.PROD?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("PROD", currentPRODValue)
        }
        errorMessage={errors?.PROD?.errorMessage}
        getBadgeText={getDisplayValue.PROD}
        setFieldValue={(model) => {
          setCurrentPRODDisplayValue(model ? getDisplayValue.PROD(model) : "");
          setCurrentPRODValue(model);
        }}
        inputFieldRef={PRODRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Prod"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ApplicationStage"
          value={currentPRODDisplayValue}
          options={pRODRecords
            .filter((r) => !PRODIdSet.has(getIDValue.PROD?.(r)))
            .map((r) => ({
              id: getIDValue.PROD?.(r),
              label: getDisplayValue.PROD?.(r),
            }))}
          isLoading={PRODLoading}
          onSelect={({ id, label }) => {
            setCurrentPRODValue(
              pRODRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentPRODDisplayValue(label);
            runValidationTasks("PROD", label);
          }}
          onClear={() => {
            setCurrentPRODDisplayValue("");
          }}
          defaultValue={PROD}
          onChange={(e) => {
            let { value } = e.target;
            fetchPRODRecords(value);
            if (errors.PROD?.hasError) {
              runValidationTasks("PROD", value);
            }
            setCurrentPRODDisplayValue(value);
            setCurrentPRODValue(undefined);
          }}
          onBlur={() => runValidationTasks("PROD", currentPRODDisplayValue)}
          errorMessage={errors.PROD?.errorMessage}
          hasError={errors.PROD?.hasError}
          ref={PRODRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "PROD")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              url,
              name,
              version,
              DEV,
              STAGING,
              PROD,
              aiServerSnapshotReference: value,
            };
            const result = onChange(modelFields);
            value = result?.aiServerSnapshotReference ?? value;
          }
          setAiServerSnapshotReference(value);
          setCurrentAiServerSnapshotReferenceValue(undefined);
          setCurrentAiServerSnapshotReferenceDisplayValue("");
        }}
        currentFieldValue={currentAiServerSnapshotReferenceValue}
        label={"Ai server snapshot reference"}
        items={aiServerSnapshotReference ? [aiServerSnapshotReference] : []}
        hasError={errors?.aiServerSnapshotReference?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "aiServerSnapshotReference",
            currentAiServerSnapshotReferenceValue
          )
        }
        errorMessage={errors?.aiServerSnapshotReference?.errorMessage}
        getBadgeText={getDisplayValue.aiServerSnapshotReference}
        setFieldValue={(model) => {
          setCurrentAiServerSnapshotReferenceDisplayValue(
            model ? getDisplayValue.aiServerSnapshotReference(model) : ""
          );
          setCurrentAiServerSnapshotReferenceValue(model);
        }}
        inputFieldRef={aiServerSnapshotReferenceRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Ai server snapshot reference"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ApplicationAiServerSnapshotReference"
          value={currentAiServerSnapshotReferenceDisplayValue}
          options={aiServerSnapshotReferenceRecords
            .filter(
              (r) =>
                !aiServerSnapshotReferenceIdSet.has(
                  getIDValue.aiServerSnapshotReference?.(r)
                )
            )
            .map((r) => ({
              id: getIDValue.aiServerSnapshotReference?.(r),
              label: getDisplayValue.aiServerSnapshotReference?.(r),
            }))}
          isLoading={aiServerSnapshotReferenceLoading}
          onSelect={({ id, label }) => {
            setCurrentAiServerSnapshotReferenceValue(
              aiServerSnapshotReferenceRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAiServerSnapshotReferenceDisplayValue(label);
            runValidationTasks("aiServerSnapshotReference", label);
          }}
          onClear={() => {
            setCurrentAiServerSnapshotReferenceDisplayValue("");
          }}
          defaultValue={aiServerSnapshotReference}
          onChange={(e) => {
            let { value } = e.target;
            fetchAiServerSnapshotReferenceRecords(value);
            if (errors.aiServerSnapshotReference?.hasError) {
              runValidationTasks("aiServerSnapshotReference", value);
            }
            setCurrentAiServerSnapshotReferenceDisplayValue(value);
            setCurrentAiServerSnapshotReferenceValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "aiServerSnapshotReference",
              currentAiServerSnapshotReferenceDisplayValue
            )
          }
          errorMessage={errors.aiServerSnapshotReference?.errorMessage}
          hasError={errors.aiServerSnapshotReference?.hasError}
          ref={aiServerSnapshotReferenceRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "aiServerSnapshotReference")}
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
          isDisabled={!(idProp || applicationModelProp)}
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
              !(idProp || applicationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
