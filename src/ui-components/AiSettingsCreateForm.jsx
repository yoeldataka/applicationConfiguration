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
import { listAiProcesses } from "../graphql/queries";
import {
  createAiProcessAiSettings,
  createAiSettings,
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
export default function AiSettingsCreateForm(props) {
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
    balancerUrl: "",
    processes: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [balancerUrl, setBalancerUrl] = React.useState(
    initialValues.balancerUrl
  );
  const [processes, setProcesses] = React.useState(initialValues.processes);
  const [processesLoading, setProcessesLoading] = React.useState(false);
  const [processesRecords, setProcessesRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setBalancerUrl(initialValues.balancerUrl);
    setProcesses(initialValues.processes);
    setCurrentProcessesValue(undefined);
    setCurrentProcessesDisplayValue("");
    setErrors({});
  };
  const [currentProcessesDisplayValue, setCurrentProcessesDisplayValue] =
    React.useState("");
  const [currentProcessesValue, setCurrentProcessesValue] =
    React.useState(undefined);
  const processesRef = React.createRef();
  const getIDValue = {
    processes: (r) => JSON.stringify({ id: r?.id }),
  };
  const processesIdSet = new Set(
    Array.isArray(processes)
      ? processes.map((r) => getIDValue.processes?.(r))
      : getIDValue.processes?.(processes)
  );
  const getDisplayValue = {
    processes: (r) => `${r?.tebeDeleted ? r?.tebeDeleted + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    balancerUrl: [{ type: "Required" }],
    processes: [],
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
  const fetchProcessesRecords = async (value) => {
    setProcessesLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { tebeDeleted: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listAiProcesses.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAiProcesses?.items;
      var loaded = result.filter(
        (item) => !processesIdSet.has(getIDValue.processes?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setProcessesRecords(newOptions.slice(0, autocompleteLength));
    setProcessesLoading(false);
  };
  React.useEffect(() => {
    fetchProcessesRecords("");
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
          balancerUrl,
          processes,
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
            balancerUrl: modelFields.balancerUrl,
          };
          const aiSettings = (
            await client.graphql({
              query: createAiSettings.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createAiSettings;
          const promises = [];
          promises.push(
            ...processes.reduce((promises, aiProcess) => {
              promises.push(
                client.graphql({
                  query: createAiProcessAiSettings.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      aiSettingsId: aiSettings.id,
                      aiProcessId: aiProcess.id,
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
      {...getOverrideProps(overrides, "AiSettingsCreateForm")}
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
              balancerUrl,
              processes,
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
        label="Balancer url"
        isRequired={true}
        isReadOnly={false}
        value={balancerUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              balancerUrl: value,
              processes,
            };
            const result = onChange(modelFields);
            value = result?.balancerUrl ?? value;
          }
          if (errors.balancerUrl?.hasError) {
            runValidationTasks("balancerUrl", value);
          }
          setBalancerUrl(value);
        }}
        onBlur={() => runValidationTasks("balancerUrl", balancerUrl)}
        errorMessage={errors.balancerUrl?.errorMessage}
        hasError={errors.balancerUrl?.hasError}
        {...getOverrideProps(overrides, "balancerUrl")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              balancerUrl,
              processes: values,
            };
            const result = onChange(modelFields);
            values = result?.processes ?? values;
          }
          setProcesses(values);
          setCurrentProcessesValue(undefined);
          setCurrentProcessesDisplayValue("");
        }}
        currentFieldValue={currentProcessesValue}
        label={"Processes"}
        items={processes}
        hasError={errors?.processes?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("processes", currentProcessesValue)
        }
        errorMessage={errors?.processes?.errorMessage}
        getBadgeText={getDisplayValue.processes}
        setFieldValue={(model) => {
          setCurrentProcessesDisplayValue(
            model ? getDisplayValue.processes(model) : ""
          );
          setCurrentProcessesValue(model);
        }}
        inputFieldRef={processesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Processes"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AiProcess"
          value={currentProcessesDisplayValue}
          options={processesRecords.map((r) => ({
            id: getIDValue.processes?.(r),
            label: getDisplayValue.processes?.(r),
          }))}
          isLoading={processesLoading}
          onSelect={({ id, label }) => {
            setCurrentProcessesValue(
              processesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentProcessesDisplayValue(label);
            runValidationTasks("processes", label);
          }}
          onClear={() => {
            setCurrentProcessesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchProcessesRecords(value);
            if (errors.processes?.hasError) {
              runValidationTasks("processes", value);
            }
            setCurrentProcessesDisplayValue(value);
            setCurrentProcessesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("processes", currentProcessesDisplayValue)
          }
          errorMessage={errors.processes?.errorMessage}
          hasError={errors.processes?.hasError}
          ref={processesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "processes")}
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
