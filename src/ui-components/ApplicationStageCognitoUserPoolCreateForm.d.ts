/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ApplicationStageCognitoUserPoolCreateFormInputValues = {
    name?: string;
    userPoolId?: string;
};
export declare type ApplicationStageCognitoUserPoolCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    userPoolId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ApplicationStageCognitoUserPoolCreateFormOverridesProps = {
    ApplicationStageCognitoUserPoolCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    userPoolId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ApplicationStageCognitoUserPoolCreateFormProps = React.PropsWithChildren<{
    overrides?: ApplicationStageCognitoUserPoolCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ApplicationStageCognitoUserPoolCreateFormInputValues) => ApplicationStageCognitoUserPoolCreateFormInputValues;
    onSuccess?: (fields: ApplicationStageCognitoUserPoolCreateFormInputValues) => void;
    onError?: (fields: ApplicationStageCognitoUserPoolCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ApplicationStageCognitoUserPoolCreateFormInputValues) => ApplicationStageCognitoUserPoolCreateFormInputValues;
    onValidate?: ApplicationStageCognitoUserPoolCreateFormValidationValues;
} & React.CSSProperties>;
export default function ApplicationStageCognitoUserPoolCreateForm(props: ApplicationStageCognitoUserPoolCreateFormProps): React.ReactElement;
