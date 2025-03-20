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
export declare type AiClientCompanyCreateFormInputValues = {
    name?: string;
    business?: string;
    values?: string;
};
export declare type AiClientCompanyCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    business?: ValidationFunction<string>;
    values?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiClientCompanyCreateFormOverridesProps = {
    AiClientCompanyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    business?: PrimitiveOverrideProps<TextFieldProps>;
    values?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AiClientCompanyCreateFormProps = React.PropsWithChildren<{
    overrides?: AiClientCompanyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AiClientCompanyCreateFormInputValues) => AiClientCompanyCreateFormInputValues;
    onSuccess?: (fields: AiClientCompanyCreateFormInputValues) => void;
    onError?: (fields: AiClientCompanyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiClientCompanyCreateFormInputValues) => AiClientCompanyCreateFormInputValues;
    onValidate?: AiClientCompanyCreateFormValidationValues;
} & React.CSSProperties>;
export default function AiClientCompanyCreateForm(props: AiClientCompanyCreateFormProps): React.ReactElement;
