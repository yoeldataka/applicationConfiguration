/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ApplicationStageCognitoUserPool } from "../API.ts";
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
export declare type ApplicationStageCognitoUserPoolUpdateFormInputValues = {
    name?: string;
    userPoolId?: string;
};
export declare type ApplicationStageCognitoUserPoolUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    userPoolId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ApplicationStageCognitoUserPoolUpdateFormOverridesProps = {
    ApplicationStageCognitoUserPoolUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    userPoolId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ApplicationStageCognitoUserPoolUpdateFormProps = React.PropsWithChildren<{
    overrides?: ApplicationStageCognitoUserPoolUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    applicationStageCognitoUserPool?: ApplicationStageCognitoUserPool;
    onSubmit?: (fields: ApplicationStageCognitoUserPoolUpdateFormInputValues) => ApplicationStageCognitoUserPoolUpdateFormInputValues;
    onSuccess?: (fields: ApplicationStageCognitoUserPoolUpdateFormInputValues) => void;
    onError?: (fields: ApplicationStageCognitoUserPoolUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ApplicationStageCognitoUserPoolUpdateFormInputValues) => ApplicationStageCognitoUserPoolUpdateFormInputValues;
    onValidate?: ApplicationStageCognitoUserPoolUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ApplicationStageCognitoUserPoolUpdateForm(props: ApplicationStageCognitoUserPoolUpdateFormProps): React.ReactElement;
