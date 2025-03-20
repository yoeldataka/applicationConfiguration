/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BackendSettings } from "../API.ts";
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
export declare type BackendQueueCreateFormInputValues = {
    name?: string;
    url?: string;
    usedIn?: BackendSettings[];
};
export declare type BackendQueueCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    usedIn?: ValidationFunction<BackendSettings>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BackendQueueCreateFormOverridesProps = {
    BackendQueueCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    usedIn?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BackendQueueCreateFormProps = React.PropsWithChildren<{
    overrides?: BackendQueueCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BackendQueueCreateFormInputValues) => BackendQueueCreateFormInputValues;
    onSuccess?: (fields: BackendQueueCreateFormInputValues) => void;
    onError?: (fields: BackendQueueCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BackendQueueCreateFormInputValues) => BackendQueueCreateFormInputValues;
    onValidate?: BackendQueueCreateFormValidationValues;
} & React.CSSProperties>;
export default function BackendQueueCreateForm(props: BackendQueueCreateFormProps): React.ReactElement;
