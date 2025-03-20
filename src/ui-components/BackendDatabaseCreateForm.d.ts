/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BackendDatabaseType, BackendSettings } from "../API.ts";
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
export declare type BackendDatabaseCreateFormInputValues = {
    name?: string;
    type?: BackendDatabaseType;
    reference?: string;
    usedIn?: BackendSettings[];
};
export declare type BackendDatabaseCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    type?: ValidationFunction<BackendDatabaseType>;
    reference?: ValidationFunction<string>;
    usedIn?: ValidationFunction<BackendSettings>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BackendDatabaseCreateFormOverridesProps = {
    BackendDatabaseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<AutocompleteProps>;
    reference?: PrimitiveOverrideProps<TextFieldProps>;
    usedIn?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BackendDatabaseCreateFormProps = React.PropsWithChildren<{
    overrides?: BackendDatabaseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BackendDatabaseCreateFormInputValues) => BackendDatabaseCreateFormInputValues;
    onSuccess?: (fields: BackendDatabaseCreateFormInputValues) => void;
    onError?: (fields: BackendDatabaseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BackendDatabaseCreateFormInputValues) => BackendDatabaseCreateFormInputValues;
    onValidate?: BackendDatabaseCreateFormValidationValues;
} & React.CSSProperties>;
export default function BackendDatabaseCreateForm(props: BackendDatabaseCreateFormProps): React.ReactElement;
