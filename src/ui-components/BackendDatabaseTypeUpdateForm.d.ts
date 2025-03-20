/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BackendDatabaseType } from "../API.ts";
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
export declare type BackendDatabaseTypeUpdateFormInputValues = {
    name?: string;
};
export declare type BackendDatabaseTypeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BackendDatabaseTypeUpdateFormOverridesProps = {
    BackendDatabaseTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BackendDatabaseTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: BackendDatabaseTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    backendDatabaseType?: BackendDatabaseType;
    onSubmit?: (fields: BackendDatabaseTypeUpdateFormInputValues) => BackendDatabaseTypeUpdateFormInputValues;
    onSuccess?: (fields: BackendDatabaseTypeUpdateFormInputValues) => void;
    onError?: (fields: BackendDatabaseTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BackendDatabaseTypeUpdateFormInputValues) => BackendDatabaseTypeUpdateFormInputValues;
    onValidate?: BackendDatabaseTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BackendDatabaseTypeUpdateForm(props: BackendDatabaseTypeUpdateFormProps): React.ReactElement;
