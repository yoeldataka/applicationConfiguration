/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BackendEndpointMethod } from "../API.ts";
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
export declare type BackendEndpointMethodUpdateFormInputValues = {
    name?: string;
};
export declare type BackendEndpointMethodUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BackendEndpointMethodUpdateFormOverridesProps = {
    BackendEndpointMethodUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BackendEndpointMethodUpdateFormProps = React.PropsWithChildren<{
    overrides?: BackendEndpointMethodUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    backendEndpointMethod?: BackendEndpointMethod;
    onSubmit?: (fields: BackendEndpointMethodUpdateFormInputValues) => BackendEndpointMethodUpdateFormInputValues;
    onSuccess?: (fields: BackendEndpointMethodUpdateFormInputValues) => void;
    onError?: (fields: BackendEndpointMethodUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BackendEndpointMethodUpdateFormInputValues) => BackendEndpointMethodUpdateFormInputValues;
    onValidate?: BackendEndpointMethodUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BackendEndpointMethodUpdateForm(props: BackendEndpointMethodUpdateFormProps): React.ReactElement;
