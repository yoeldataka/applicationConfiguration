/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BackendDatabase, BackendEndpoint, BackendQueue, BackendTopic } from "../API.ts";
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
export declare type BackendSettingsCreateFormInputValues = {
    name?: string;
    region?: string;
    secretName?: string;
    endpoints?: BackendEndpoint[];
    databases?: BackendDatabase[];
    queues?: BackendQueue[];
    topics?: BackendTopic[];
};
export declare type BackendSettingsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    region?: ValidationFunction<string>;
    secretName?: ValidationFunction<string>;
    endpoints?: ValidationFunction<BackendEndpoint>;
    databases?: ValidationFunction<BackendDatabase>;
    queues?: ValidationFunction<BackendQueue>;
    topics?: ValidationFunction<BackendTopic>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BackendSettingsCreateFormOverridesProps = {
    BackendSettingsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<TextFieldProps>;
    secretName?: PrimitiveOverrideProps<TextFieldProps>;
    endpoints?: PrimitiveOverrideProps<AutocompleteProps>;
    databases?: PrimitiveOverrideProps<AutocompleteProps>;
    queues?: PrimitiveOverrideProps<AutocompleteProps>;
    topics?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BackendSettingsCreateFormProps = React.PropsWithChildren<{
    overrides?: BackendSettingsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BackendSettingsCreateFormInputValues) => BackendSettingsCreateFormInputValues;
    onSuccess?: (fields: BackendSettingsCreateFormInputValues) => void;
    onError?: (fields: BackendSettingsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BackendSettingsCreateFormInputValues) => BackendSettingsCreateFormInputValues;
    onValidate?: BackendSettingsCreateFormValidationValues;
} & React.CSSProperties>;
export default function BackendSettingsCreateForm(props: BackendSettingsCreateFormProps): React.ReactElement;
