/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BackendDatabase, BackendDatabaseType, BackendSettings } from "../API.ts";
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
export declare type BackendDatabaseUpdateFormInputValues = {
    name?: string;
    type?: BackendDatabaseType;
    reference?: string;
    usedIn?: BackendSettings[];
};
export declare type BackendDatabaseUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    type?: ValidationFunction<BackendDatabaseType>;
    reference?: ValidationFunction<string>;
    usedIn?: ValidationFunction<BackendSettings>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BackendDatabaseUpdateFormOverridesProps = {
    BackendDatabaseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<AutocompleteProps>;
    reference?: PrimitiveOverrideProps<TextFieldProps>;
    usedIn?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BackendDatabaseUpdateFormProps = React.PropsWithChildren<{
    overrides?: BackendDatabaseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    backendDatabase?: BackendDatabase;
    onSubmit?: (fields: BackendDatabaseUpdateFormInputValues) => BackendDatabaseUpdateFormInputValues;
    onSuccess?: (fields: BackendDatabaseUpdateFormInputValues) => void;
    onError?: (fields: BackendDatabaseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BackendDatabaseUpdateFormInputValues) => BackendDatabaseUpdateFormInputValues;
    onValidate?: BackendDatabaseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BackendDatabaseUpdateForm(props: BackendDatabaseUpdateFormProps): React.ReactElement;
