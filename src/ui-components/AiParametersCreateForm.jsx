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
import { listAiClientCompanies, listAiLlms } from "../graphql/queries";
import { createAiParameters } from "../graphql/mutations";
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
export default function AiParametersCreateForm(props) {
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
    role: "",
    company: undefined,
    conversationPurpose: "",
    conversationType: "",
    prePrompt: "",
    postPrompt: "",
    llm: undefined,
    chatMemory: "",
    responseTemperature: "",
    responseLanguage: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [role, setRole] = React.useState(initialValues.role);
  const [company, setCompany] = React.useState(initialValues.company);
  const [companyLoading, setCompanyLoading] = React.useState(false);
  const [companyRecords, setCompanyRecords] = React.useState([]);
  const [conversationPurpose, setConversationPurpose] = React.useState(
    initialValues.conversationPurpose
  );
  const [conversationType, setConversationType] = React.useState(
    initialValues.conversationType
  );
  const [prePrompt, setPrePrompt] = React.useState(initialValues.prePrompt);
  const [postPrompt, setPostPrompt] = React.useState(initialValues.postPrompt);
  const [llm, setLlm] = React.useState(initialValues.llm);
  const [llmLoading, setLlmLoading] = React.useState(false);
  const [llmRecords, setLlmRecords] = React.useState([]);
  const [chatMemory, setChatMemory] = React.useState(initialValues.chatMemory);
  const [responseTemperature, setResponseTemperature] = React.useState(
    initialValues.responseTemperature
  );
  const [responseLanguage, setResponseLanguage] = React.useState(
    initialValues.responseLanguage
  );
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setRole(initialValues.role);
    setCompany(initialValues.company);
    setCurrentCompanyValue(undefined);
    setCurrentCompanyDisplayValue("");
    setConversationPurpose(initialValues.conversationPurpose);
    setConversationType(initialValues.conversationType);
    setPrePrompt(initialValues.prePrompt);
    setPostPrompt(initialValues.postPrompt);
    setLlm(initialValues.llm);
    setCurrentLlmValue(undefined);
    setCurrentLlmDisplayValue("");
    setChatMemory(initialValues.chatMemory);
    setResponseTemperature(initialValues.responseTemperature);
    setResponseLanguage(initialValues.responseLanguage);
    setErrors({});
  };
  const [currentCompanyDisplayValue, setCurrentCompanyDisplayValue] =
    React.useState("");
  const [currentCompanyValue, setCurrentCompanyValue] =
    React.useState(undefined);
  const companyRef = React.createRef();
  const [currentLlmDisplayValue, setCurrentLlmDisplayValue] =
    React.useState("");
  const [currentLlmValue, setCurrentLlmValue] = React.useState(undefined);
  const llmRef = React.createRef();
  const getIDValue = {
    company: (r) => JSON.stringify({ id: r?.id }),
    llm: (r) => JSON.stringify({ id: r?.id }),
  };
  const companyIdSet = new Set(
    Array.isArray(company)
      ? company.map((r) => getIDValue.company?.(r))
      : getIDValue.company?.(company)
  );
  const llmIdSet = new Set(
    Array.isArray(llm)
      ? llm.map((r) => getIDValue.llm?.(r))
      : getIDValue.llm?.(llm)
  );
  const getDisplayValue = {
    company: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    llm: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    role: [{ type: "Required" }],
    company: [],
    conversationPurpose: [{ type: "Required" }],
    conversationType: [{ type: "Required" }],
    prePrompt: [{ type: "Required" }],
    postPrompt: [{ type: "Required" }],
    llm: [],
    chatMemory: [{ type: "Required" }],
    responseTemperature: [{ type: "Required" }],
    responseLanguage: [{ type: "Required" }],
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
  const fetchCompanyRecords = async (value) => {
    setCompanyLoading(true);
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
          query: listAiClientCompanies.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAiClientCompanies?.items;
      var loaded = result.filter(
        (item) => !companyIdSet.has(getIDValue.company?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCompanyRecords(newOptions.slice(0, autocompleteLength));
    setCompanyLoading(false);
  };
  const fetchLlmRecords = async (value) => {
    setLlmLoading(true);
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
        (item) => !llmIdSet.has(getIDValue.llm?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setLlmRecords(newOptions.slice(0, autocompleteLength));
    setLlmLoading(false);
  };
  React.useEffect(() => {
    fetchCompanyRecords("");
    fetchLlmRecords("");
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
          role,
          company,
          conversationPurpose,
          conversationType,
          prePrompt,
          postPrompt,
          llm,
          chatMemory,
          responseTemperature,
          responseLanguage,
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
            role: modelFields.role,
            companyID: modelFields?.company?.id,
            conversationPurpose: modelFields.conversationPurpose,
            conversationType: modelFields.conversationType,
            prePrompt: modelFields.prePrompt,
            postPrompt: modelFields.postPrompt,
            llmID: modelFields?.llm?.id,
            chatMemory: modelFields.chatMemory,
            responseTemperature: modelFields.responseTemperature,
            responseLanguage: modelFields.responseLanguage,
          };
          await client.graphql({
            query: createAiParameters.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "AiParametersCreateForm")}
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
              role,
              company,
              conversationPurpose,
              conversationType,
              prePrompt,
              postPrompt,
              llm,
              chatMemory,
              responseTemperature,
              responseLanguage,
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
        label="Role"
        isRequired={true}
        isReadOnly={false}
        value={role}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              role: value,
              company,
              conversationPurpose,
              conversationType,
              prePrompt,
              postPrompt,
              llm,
              chatMemory,
              responseTemperature,
              responseLanguage,
            };
            const result = onChange(modelFields);
            value = result?.role ?? value;
          }
          if (errors.role?.hasError) {
            runValidationTasks("role", value);
          }
          setRole(value);
        }}
        onBlur={() => runValidationTasks("role", role)}
        errorMessage={errors.role?.errorMessage}
        hasError={errors.role?.hasError}
        {...getOverrideProps(overrides, "role")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              role,
              company: value,
              conversationPurpose,
              conversationType,
              prePrompt,
              postPrompt,
              llm,
              chatMemory,
              responseTemperature,
              responseLanguage,
            };
            const result = onChange(modelFields);
            value = result?.company ?? value;
          }
          setCompany(value);
          setCurrentCompanyValue(undefined);
          setCurrentCompanyDisplayValue("");
        }}
        currentFieldValue={currentCompanyValue}
        label={"Company"}
        items={company ? [company] : []}
        hasError={errors?.company?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("company", currentCompanyValue)
        }
        errorMessage={errors?.company?.errorMessage}
        getBadgeText={getDisplayValue.company}
        setFieldValue={(model) => {
          setCurrentCompanyDisplayValue(
            model ? getDisplayValue.company(model) : ""
          );
          setCurrentCompanyValue(model);
        }}
        inputFieldRef={companyRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Company"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AiClientCompany"
          value={currentCompanyDisplayValue}
          options={companyRecords
            .filter((r) => !companyIdSet.has(getIDValue.company?.(r)))
            .map((r) => ({
              id: getIDValue.company?.(r),
              label: getDisplayValue.company?.(r),
            }))}
          isLoading={companyLoading}
          onSelect={({ id, label }) => {
            setCurrentCompanyValue(
              companyRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCompanyDisplayValue(label);
            runValidationTasks("company", label);
          }}
          onClear={() => {
            setCurrentCompanyDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchCompanyRecords(value);
            if (errors.company?.hasError) {
              runValidationTasks("company", value);
            }
            setCurrentCompanyDisplayValue(value);
            setCurrentCompanyValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("company", currentCompanyDisplayValue)
          }
          errorMessage={errors.company?.errorMessage}
          hasError={errors.company?.hasError}
          ref={companyRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "company")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Conversation purpose"
        isRequired={true}
        isReadOnly={false}
        value={conversationPurpose}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              role,
              company,
              conversationPurpose: value,
              conversationType,
              prePrompt,
              postPrompt,
              llm,
              chatMemory,
              responseTemperature,
              responseLanguage,
            };
            const result = onChange(modelFields);
            value = result?.conversationPurpose ?? value;
          }
          if (errors.conversationPurpose?.hasError) {
            runValidationTasks("conversationPurpose", value);
          }
          setConversationPurpose(value);
        }}
        onBlur={() =>
          runValidationTasks("conversationPurpose", conversationPurpose)
        }
        errorMessage={errors.conversationPurpose?.errorMessage}
        hasError={errors.conversationPurpose?.hasError}
        {...getOverrideProps(overrides, "conversationPurpose")}
      ></TextField>
      <TextField
        label="Conversation type"
        isRequired={true}
        isReadOnly={false}
        value={conversationType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              role,
              company,
              conversationPurpose,
              conversationType: value,
              prePrompt,
              postPrompt,
              llm,
              chatMemory,
              responseTemperature,
              responseLanguage,
            };
            const result = onChange(modelFields);
            value = result?.conversationType ?? value;
          }
          if (errors.conversationType?.hasError) {
            runValidationTasks("conversationType", value);
          }
          setConversationType(value);
        }}
        onBlur={() => runValidationTasks("conversationType", conversationType)}
        errorMessage={errors.conversationType?.errorMessage}
        hasError={errors.conversationType?.hasError}
        {...getOverrideProps(overrides, "conversationType")}
      ></TextField>
      <TextField
        label="Pre prompt"
        isRequired={true}
        isReadOnly={false}
        value={prePrompt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              role,
              company,
              conversationPurpose,
              conversationType,
              prePrompt: value,
              postPrompt,
              llm,
              chatMemory,
              responseTemperature,
              responseLanguage,
            };
            const result = onChange(modelFields);
            value = result?.prePrompt ?? value;
          }
          if (errors.prePrompt?.hasError) {
            runValidationTasks("prePrompt", value);
          }
          setPrePrompt(value);
        }}
        onBlur={() => runValidationTasks("prePrompt", prePrompt)}
        errorMessage={errors.prePrompt?.errorMessage}
        hasError={errors.prePrompt?.hasError}
        {...getOverrideProps(overrides, "prePrompt")}
      ></TextField>
      <TextField
        label="Post prompt"
        isRequired={true}
        isReadOnly={false}
        value={postPrompt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              role,
              company,
              conversationPurpose,
              conversationType,
              prePrompt,
              postPrompt: value,
              llm,
              chatMemory,
              responseTemperature,
              responseLanguage,
            };
            const result = onChange(modelFields);
            value = result?.postPrompt ?? value;
          }
          if (errors.postPrompt?.hasError) {
            runValidationTasks("postPrompt", value);
          }
          setPostPrompt(value);
        }}
        onBlur={() => runValidationTasks("postPrompt", postPrompt)}
        errorMessage={errors.postPrompt?.errorMessage}
        hasError={errors.postPrompt?.hasError}
        {...getOverrideProps(overrides, "postPrompt")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              role,
              company,
              conversationPurpose,
              conversationType,
              prePrompt,
              postPrompt,
              llm: value,
              chatMemory,
              responseTemperature,
              responseLanguage,
            };
            const result = onChange(modelFields);
            value = result?.llm ?? value;
          }
          setLlm(value);
          setCurrentLlmValue(undefined);
          setCurrentLlmDisplayValue("");
        }}
        currentFieldValue={currentLlmValue}
        label={"Llm"}
        items={llm ? [llm] : []}
        hasError={errors?.llm?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("llm", currentLlmValue)
        }
        errorMessage={errors?.llm?.errorMessage}
        getBadgeText={getDisplayValue.llm}
        setFieldValue={(model) => {
          setCurrentLlmDisplayValue(model ? getDisplayValue.llm(model) : "");
          setCurrentLlmValue(model);
        }}
        inputFieldRef={llmRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Llm"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AiLlm"
          value={currentLlmDisplayValue}
          options={llmRecords
            .filter((r) => !llmIdSet.has(getIDValue.llm?.(r)))
            .map((r) => ({
              id: getIDValue.llm?.(r),
              label: getDisplayValue.llm?.(r),
            }))}
          isLoading={llmLoading}
          onSelect={({ id, label }) => {
            setCurrentLlmValue(
              llmRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentLlmDisplayValue(label);
            runValidationTasks("llm", label);
          }}
          onClear={() => {
            setCurrentLlmDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchLlmRecords(value);
            if (errors.llm?.hasError) {
              runValidationTasks("llm", value);
            }
            setCurrentLlmDisplayValue(value);
            setCurrentLlmValue(undefined);
          }}
          onBlur={() => runValidationTasks("llm", currentLlmDisplayValue)}
          errorMessage={errors.llm?.errorMessage}
          hasError={errors.llm?.hasError}
          ref={llmRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "llm")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Chat memory"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={chatMemory}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              role,
              company,
              conversationPurpose,
              conversationType,
              prePrompt,
              postPrompt,
              llm,
              chatMemory: value,
              responseTemperature,
              responseLanguage,
            };
            const result = onChange(modelFields);
            value = result?.chatMemory ?? value;
          }
          if (errors.chatMemory?.hasError) {
            runValidationTasks("chatMemory", value);
          }
          setChatMemory(value);
        }}
        onBlur={() => runValidationTasks("chatMemory", chatMemory)}
        errorMessage={errors.chatMemory?.errorMessage}
        hasError={errors.chatMemory?.hasError}
        {...getOverrideProps(overrides, "chatMemory")}
      ></TextField>
      <TextField
        label="Response temperature"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={responseTemperature}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              role,
              company,
              conversationPurpose,
              conversationType,
              prePrompt,
              postPrompt,
              llm,
              chatMemory,
              responseTemperature: value,
              responseLanguage,
            };
            const result = onChange(modelFields);
            value = result?.responseTemperature ?? value;
          }
          if (errors.responseTemperature?.hasError) {
            runValidationTasks("responseTemperature", value);
          }
          setResponseTemperature(value);
        }}
        onBlur={() =>
          runValidationTasks("responseTemperature", responseTemperature)
        }
        errorMessage={errors.responseTemperature?.errorMessage}
        hasError={errors.responseTemperature?.hasError}
        {...getOverrideProps(overrides, "responseTemperature")}
      ></TextField>
      <TextField
        label="Response language"
        isRequired={true}
        isReadOnly={false}
        value={responseLanguage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              role,
              company,
              conversationPurpose,
              conversationType,
              prePrompt,
              postPrompt,
              llm,
              chatMemory,
              responseTemperature,
              responseLanguage: value,
            };
            const result = onChange(modelFields);
            value = result?.responseLanguage ?? value;
          }
          if (errors.responseLanguage?.hasError) {
            runValidationTasks("responseLanguage", value);
          }
          setResponseLanguage(value);
        }}
        onBlur={() => runValidationTasks("responseLanguage", responseLanguage)}
        errorMessage={errors.responseLanguage?.errorMessage}
        hasError={errors.responseLanguage?.hasError}
        {...getOverrideProps(overrides, "responseLanguage")}
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
