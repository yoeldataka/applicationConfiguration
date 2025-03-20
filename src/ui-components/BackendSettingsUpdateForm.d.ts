/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BackendDatabase, BackendEndpoint, BackendQueue, BackendSettings, BackendTopic } from "../API.ts";
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
export declare type BackendSettingsUpdateFormInputValues = {
    name?: string;
    region?: string;
    secretName?: string;
    endpoints?: BackendEndpoint[];
    databases?: BackendDatabase[];
    queues?: BackendQueue[];
    topics?: BackendTopic[];
};
export declare type BackendSettingsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    region?: ValidationFunction<string>;
    secretName?: ValidationFunction<string>;
    endpoints?: ValidationFunction<BackendEndpoint>;
    databases?: ValidationFunction<BackendDatabase>;
    queues?: ValidationFunction<BackendQueue>;
    topics?: ValidationFunction<BackendTopic>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BackendSettingsUpdateFormOverridesProps = {
    BackendSettingsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<TextFieldProps>;
    secretName?: PrimitiveOverrideProps<TextFieldProps>;
    endpoints?: PrimitiveOverrideProps<AutocompleteProps>;
    databases?: PrimitiveOverrideProps<AutocompleteProps>;
    queues?: PrimitiveOverrideProps<AutocompleteProps>;
    topics?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BackendSettingsUpdateFormProps = React.PropsWithChildren<{
    overrides?: BackendSettingsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    backendSettings?: BackendSettings;
    onSubmit?: (fields: BackendSettingsUpdateFormInputValues) => BackendSettingsUpdateFormInputValues;
    onSuccess?: (fields: BackendSettingsUpdateFormInputValues) => void;
    onError?: (fields: BackendSettingsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BackendSettingsUpdateFormInputValues) => BackendSettingsUpdateFormInputValues;
    onValidate?: BackendSettingsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BackendSettingsUpdateForm(props: BackendSettingsUpdateFormProps): React.ReactElement;
