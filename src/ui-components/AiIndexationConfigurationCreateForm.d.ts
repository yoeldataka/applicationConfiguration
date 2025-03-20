/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiVectorialDbConfig, AiVectorizerParameters } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AiIndexationConfigurationCreateFormInputValues = {
    name?: string;
    vectorizerParameters?: AiVectorizerParameters;
    vectorialDbConfig?: AiVectorialDbConfig;
};
export declare type AiIndexationConfigurationCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    vectorizerParameters?: ValidationFunction<AiVectorizerParameters>;
    vectorialDbConfig?: ValidationFunction<AiVectorialDbConfig>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiIndexationConfigurationCreateFormOverridesProps = {
    AiIndexationConfigurationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    vectorizerParameters?: PrimitiveOverrideProps<AutocompleteProps>;
    vectorialDbConfig?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AiIndexationConfigurationCreateFormProps = React.PropsWithChildren<{
    overrides?: AiIndexationConfigurationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AiIndexationConfigurationCreateFormInputValues) => AiIndexationConfigurationCreateFormInputValues;
    onSuccess?: (fields: AiIndexationConfigurationCreateFormInputValues) => void;
    onError?: (fields: AiIndexationConfigurationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiIndexationConfigurationCreateFormInputValues) => AiIndexationConfigurationCreateFormInputValues;
    onValidate?: AiIndexationConfigurationCreateFormValidationValues;
} & React.CSSProperties>;
export default function AiIndexationConfigurationCreateForm(props: AiIndexationConfigurationCreateFormProps): React.ReactElement;
