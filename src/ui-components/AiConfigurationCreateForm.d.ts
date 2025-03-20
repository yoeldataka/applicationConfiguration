/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiParameters, AiToolGroup } from "../API.ts";
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
export declare type AiConfigurationCreateFormInputValues = {
    name?: string;
    aiParameters?: AiParameters;
    tools?: AiToolGroup[];
};
export declare type AiConfigurationCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    aiParameters?: ValidationFunction<AiParameters>;
    tools?: ValidationFunction<AiToolGroup>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiConfigurationCreateFormOverridesProps = {
    AiConfigurationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    aiParameters?: PrimitiveOverrideProps<AutocompleteProps>;
    tools?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AiConfigurationCreateFormProps = React.PropsWithChildren<{
    overrides?: AiConfigurationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AiConfigurationCreateFormInputValues) => AiConfigurationCreateFormInputValues;
    onSuccess?: (fields: AiConfigurationCreateFormInputValues) => void;
    onError?: (fields: AiConfigurationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiConfigurationCreateFormInputValues) => AiConfigurationCreateFormInputValues;
    onValidate?: AiConfigurationCreateFormValidationValues;
} & React.CSSProperties>;
export default function AiConfigurationCreateForm(props: AiConfigurationCreateFormProps): React.ReactElement;
