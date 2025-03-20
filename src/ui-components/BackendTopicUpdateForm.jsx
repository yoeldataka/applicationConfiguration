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
import {
  backendTopicBackendSettingsByBackendTopicId,
  getBackendTopic,
  listBackendSettings,
  listBackendTopicBackendSettings,
} from "../graphql/queries";
import { generateClient } from "aws-amplify/api";
import {
  createBackendTopicBackendSettings,
  deleteBackendTopicBackendSettings,
  updateBackendTopic,
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
export default function BackendTopicUpdateForm(props) {
  const {
    id: idProp,
    backendTopic: backendTopicModelProp,
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
    arn: "",
    usedIn: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [arn, setArn] = React.useState(initialValues.arn);
  const [usedIn, setUsedIn] = React.useState(initialValues.usedIn);
  const [usedInLoading, setUsedInLoading] = React.useState(false);
  const [usedInRecords, setUsedInRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = backendTopicRecord
      ? { ...initialValues, ...backendTopicRecord, usedIn: linkedUsedIn }
      : initialValues;
    setName(cleanValues.name);
    setArn(cleanValues.arn);
    setUsedIn(cleanValues.usedIn ?? []);
    setCurrentUsedInValue(undefined);
    setCurrentUsedInDisplayValue("");
    setErrors({});
  };
  const [backendTopicRecord, setBackendTopicRecord] = React.useState(
    backendTopicModelProp
  );
  const [linkedUsedIn, setLinkedUsedIn] = React.useState([]);
  const canUnlinkUsedIn = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBackendTopic.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBackendTopic
        : backendTopicModelProp;
      const linkedUsedIn = record
        ? (
            await client.graphql({
              query: backendTopicBackendSettingsByBackendTopicId.replaceAll(
                "__typename",
                ""
              ),
              variables: {
                backendTopicId: record.id,
              },
            })
          ).data.backendTopicBackendSettingsByBackendTopicId.items.map(
            (t) => t.backendSettings
          )
        : [];
      setLinkedUsedIn(linkedUsedIn);
      setBackendTopicRecord(record);
    };
    queryData();
  }, [idProp, backendTopicModelProp]);
  React.useEffect(resetStateValues, [backendTopicRecord, linkedUsedIn]);
  const [currentUsedInDisplayValue, setCurrentUsedInDisplayValue] =
    React.useState("");
  const [currentUsedInValue, setCurrentUsedInValue] = React.useState(undefined);
  const usedInRef = React.createRef();
  const getIDValue = {
    usedIn: (r) => JSON.stringify({ id: r?.id }),
  };
  const usedInIdSet = new Set(
    Array.isArray(usedIn)
      ? usedIn.map((r) => getIDValue.usedIn?.(r))
      : getIDValue.usedIn?.(usedIn)
  );
  const getDisplayValue = {
    usedIn: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    arn: [{ type: "Required" }],
    usedIn: [],
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
  const fetchUsedInRecords = async (value) => {
    setUsedInLoading(true);
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
        (item) => !usedInIdSet.has(getIDValue.usedIn?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setUsedInRecords(newOptions.slice(0, autocompleteLength));
    setUsedInLoading(false);
  };
  React.useEffect(() => {
    fetchUsedInRecords("");
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
          arn,
          usedIn: usedIn ?? null,
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
          const promises = [];
          const usedInToLinkMap = new Map();
          const usedInToUnLinkMap = new Map();
          const usedInMap = new Map();
          const linkedUsedInMap = new Map();
          usedIn.forEach((r) => {
            const count = usedInMap.get(getIDValue.usedIn?.(r));
            const newCount = count ? count + 1 : 1;
            usedInMap.set(getIDValue.usedIn?.(r), newCount);
          });
          linkedUsedIn.forEach((r) => {
            const count = linkedUsedInMap.get(getIDValue.usedIn?.(r));
            const newCount = count ? count + 1 : 1;
            linkedUsedInMap.set(getIDValue.usedIn?.(r), newCount);
          });
          linkedUsedInMap.forEach((count, id) => {
            const newCount = usedInMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                usedInToUnLinkMap.set(id, diffCount);
              }
            } else {
              usedInToUnLinkMap.set(id, count);
            }
          });
          usedInMap.forEach((count, id) => {
            const originalCount = linkedUsedInMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                usedInToLinkMap.set(id, diffCount);
              }
            } else {
              usedInToLinkMap.set(id, count);
            }
          });
          usedInToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const backendTopicBackendSettingsRecords = (
              await client.graphql({
                query: listBackendTopicBackendSettings.replaceAll(
                  "__typename",
                  ""
                ),
                variables: {
                  filter: {
                    and: [
                      { backendSettingsId: { eq: recordKeys.id } },
                      { backendTopicId: { eq: backendTopicRecord.id } },
                    ],
                  },
                },
              })
            )?.data?.listBackendTopicBackendSettings?.items;
            for (let i = 0; i < count; i++) {
              promises.push(
                client.graphql({
                  query: deleteBackendTopicBackendSettings.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      id: backendTopicBackendSettingsRecords[i].id,
                    },
                  },
                })
              );
            }
          });
          usedInToLinkMap.forEach((count, id) => {
            const backendSettingsToLink = usedInRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                client.graphql({
                  query: createBackendTopicBackendSettings.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      backendTopicId: backendTopicRecord.id,
                      backendSettingsId: backendSettingsToLink.id,
                    },
                  },
                })
              );
            }
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            arn: modelFields.arn,
          };
          promises.push(
            client.graphql({
              query: updateBackendTopic.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: backendTopicRecord.id,
                  ...modelFieldsToSave,
                },
              },
            })
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "BackendTopicUpdateForm")}
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
              arn,
              usedIn,
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
        label="Arn"
        isRequired={true}
        isReadOnly={false}
        value={arn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              arn: value,
              usedIn,
            };
            const result = onChange(modelFields);
            value = result?.arn ?? value;
          }
          if (errors.arn?.hasError) {
            runValidationTasks("arn", value);
          }
          setArn(value);
        }}
        onBlur={() => runValidationTasks("arn", arn)}
        errorMessage={errors.arn?.errorMessage}
        hasError={errors.arn?.hasError}
        {...getOverrideProps(overrides, "arn")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              arn,
              usedIn: values,
            };
            const result = onChange(modelFields);
            values = result?.usedIn ?? values;
          }
          setUsedIn(values);
          setCurrentUsedInValue(undefined);
          setCurrentUsedInDisplayValue("");
        }}
        currentFieldValue={currentUsedInValue}
        label={"Used in"}
        items={usedIn}
        hasError={errors?.usedIn?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("usedIn", currentUsedInValue)
        }
        errorMessage={errors?.usedIn?.errorMessage}
        getBadgeText={getDisplayValue.usedIn}
        setFieldValue={(model) => {
          setCurrentUsedInDisplayValue(
            model ? getDisplayValue.usedIn(model) : ""
          );
          setCurrentUsedInValue(model);
        }}
        inputFieldRef={usedInRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Used in"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search BackendSettings"
          value={currentUsedInDisplayValue}
          options={usedInRecords.map((r) => ({
            id: getIDValue.usedIn?.(r),
            label: getDisplayValue.usedIn?.(r),
          }))}
          isLoading={usedInLoading}
          onSelect={({ id, label }) => {
            setCurrentUsedInValue(
              usedInRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUsedInDisplayValue(label);
            runValidationTasks("usedIn", label);
          }}
          onClear={() => {
            setCurrentUsedInDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchUsedInRecords(value);
            if (errors.usedIn?.hasError) {
              runValidationTasks("usedIn", value);
            }
            setCurrentUsedInDisplayValue(value);
            setCurrentUsedInValue(undefined);
          }}
          onBlur={() => runValidationTasks("usedIn", currentUsedInDisplayValue)}
          errorMessage={errors.usedIn?.errorMessage}
          hasError={errors.usedIn?.hasError}
          ref={usedInRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "usedIn")}
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
          isDisabled={!(idProp || backendTopicModelProp)}
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
              !(idProp || backendTopicModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
