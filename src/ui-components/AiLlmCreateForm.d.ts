/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AiLlmCreateFormInputValues = {
    name?: string;
    input?: string[];
    output?: string[];
    description?: string;
    available?: boolean;
    maxTokens?: number;
};
export declare type AiLlmCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    input?: ValidationFunction<string>;
    output?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    available?: ValidationFunction<boolean>;
    maxTokens?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiLlmCreateFormOverridesProps = {
    AiLlmCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    input?: PrimitiveOverrideProps<TextFieldProps>;
    output?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    available?: PrimitiveOverrideProps<SwitchFieldProps>;
    maxTokens?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AiLlmCreateFormProps = React.PropsWithChildren<{
    overrides?: AiLlmCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AiLlmCreateFormInputValues) => AiLlmCreateFormInputValues;
    onSuccess?: (fields: AiLlmCreateFormInputValues) => void;
    onError?: (fields: AiLlmCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiLlmCreateFormInputValues) => AiLlmCreateFormInputValues;
    onValidate?: AiLlmCreateFormValidationValues;
} & React.CSSProperties>;
export default function AiLlmCreateForm(props: AiLlmCreateFormProps): React.ReactElement;
