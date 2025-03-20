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
import { listFrontendComponents } from "../graphql/queries";
import {
  createFrontendComponentFrontendSettings,
  createFrontendSettings,
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
export default function FrontendSettingsCreateForm(props) {
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
    domain: "",
    cssS3Url: "",
    components: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [domain, setDomain] = React.useState(initialValues.domain);
  const [cssS3Url, setCssS3Url] = React.useState(initialValues.cssS3Url);
  const [components, setComponents] = React.useState(initialValues.components);
  const [componentsLoading, setComponentsLoading] = React.useState(false);
  const [componentsRecords, setComponentsRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDomain(initialValues.domain);
    setCssS3Url(initialValues.cssS3Url);
    setComponents(initialValues.components);
    setCurrentComponentsValue(undefined);
    setCurrentComponentsDisplayValue("");
    setErrors({});
  };
  const [currentComponentsDisplayValue, setCurrentComponentsDisplayValue] =
    React.useState("");
  const [currentComponentsValue, setCurrentComponentsValue] =
    React.useState(undefined);
  const componentsRef = React.createRef();
  const getIDValue = {
    components: (r) => JSON.stringify({ id: r?.id }),
  };
  const componentsIdSet = new Set(
    Array.isArray(components)
      ? components.map((r) => getIDValue.components?.(r))
      : getIDValue.components?.(components)
  );
  const getDisplayValue = {
    components: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    domain: [{ type: "Required" }],
    cssS3Url: [],
    components: [],
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
  const fetchComponentsRecords = async (value) => {
    setComponentsLoading(true);
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
          query: listFrontendComponents.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listFrontendComponents?.items;
      var loaded = result.filter(
        (item) => !componentsIdSet.has(getIDValue.components?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setComponentsRecords(newOptions.slice(0, autocompleteLength));
    setComponentsLoading(false);
  };
  React.useEffect(() => {
    fetchComponentsRecords("");
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
          domain,
          cssS3Url,
          components,
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
            domain: modelFields.domain,
            cssS3Url: modelFields.cssS3Url,
          };
          const frontendSettings = (
            await client.graphql({
              query: createFrontendSettings.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createFrontendSettings;
          const promises = [];
          promises.push(
            ...components.reduce((promises, frontendComponent) => {
              promises.push(
                client.graphql({
                  query: createFrontendComponentFrontendSettings.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      frontendSettingsId: frontendSettings.id,
                      frontendComponentId: frontendComponent.id,
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
      {...getOverrideProps(overrides, "FrontendSettingsCreateForm")}
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
              domain,
              cssS3Url,
              components,
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
        label="Domain"
        isRequired={true}
        isReadOnly={false}
        value={domain}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              domain: value,
              cssS3Url,
              components,
            };
            const result = onChange(modelFields);
            value = result?.domain ?? value;
          }
          if (errors.domain?.hasError) {
            runValidationTasks("domain", value);
          }
          setDomain(value);
        }}
        onBlur={() => runValidationTasks("domain", domain)}
        errorMessage={errors.domain?.errorMessage}
        hasError={errors.domain?.hasError}
        {...getOverrideProps(overrides, "domain")}
      ></TextField>
      <TextField
        label="Css s3 url"
        isRequired={false}
        isReadOnly={false}
        value={cssS3Url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              domain,
              cssS3Url: value,
              components,
            };
            const result = onChange(modelFields);
            value = result?.cssS3Url ?? value;
          }
          if (errors.cssS3Url?.hasError) {
            runValidationTasks("cssS3Url", value);
          }
          setCssS3Url(value);
        }}
        onBlur={() => runValidationTasks("cssS3Url", cssS3Url)}
        errorMessage={errors.cssS3Url?.errorMessage}
        hasError={errors.cssS3Url?.hasError}
        {...getOverrideProps(overrides, "cssS3Url")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              domain,
              cssS3Url,
              components: values,
            };
            const result = onChange(modelFields);
            values = result?.components ?? values;
          }
          setComponents(values);
          setCurrentComponentsValue(undefined);
          setCurrentComponentsDisplayValue("");
        }}
        currentFieldValue={currentComponentsValue}
        label={"Components"}
        items={components}
        hasError={errors?.components?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("components", currentComponentsValue)
        }
        errorMessage={errors?.components?.errorMessage}
        getBadgeText={getDisplayValue.components}
        setFieldValue={(model) => {
          setCurrentComponentsDisplayValue(
            model ? getDisplayValue.components(model) : ""
          );
          setCurrentComponentsValue(model);
        }}
        inputFieldRef={componentsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Components"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search FrontendComponent"
          value={currentComponentsDisplayValue}
          options={componentsRecords.map((r) => ({
            id: getIDValue.components?.(r),
            label: getDisplayValue.components?.(r),
          }))}
          isLoading={componentsLoading}
          onSelect={({ id, label }) => {
            setCurrentComponentsValue(
              componentsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentComponentsDisplayValue(label);
            runValidationTasks("components", label);
          }}
          onClear={() => {
            setCurrentComponentsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchComponentsRecords(value);
            if (errors.components?.hasError) {
              runValidationTasks("components", value);
            }
            setCurrentComponentsDisplayValue(value);
            setCurrentComponentsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("components", currentComponentsDisplayValue)
          }
          errorMessage={errors.components?.errorMessage}
          hasError={errors.components?.hasError}
          ref={componentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "components")}
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
