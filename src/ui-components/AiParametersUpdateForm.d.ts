/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiClientCompany, AiLlm, AiParameters } from "../API.ts";
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
export declare type AiParametersUpdateFormInputValues = {
    name?: string;
    role?: string;
    company?: AiClientCompany;
    conversationPurpose?: string;
    conversationType?: string;
    prePrompt?: string;
    postPrompt?: string;
    llm?: AiLlm;
    chatMemory?: number;
    responseTemperature?: number;
    responseLanguage?: string;
};
export declare type AiParametersUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
    company?: ValidationFunction<AiClientCompany>;
    conversationPurpose?: ValidationFunction<string>;
    conversationType?: ValidationFunction<string>;
    prePrompt?: ValidationFunction<string>;
    postPrompt?: ValidationFunction<string>;
    llm?: ValidationFunction<AiLlm>;
    chatMemory?: ValidationFunction<number>;
    responseTemperature?: ValidationFunction<number>;
    responseLanguage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiParametersUpdateFormOverridesProps = {
    AiParametersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<TextFieldProps>;
    company?: PrimitiveOverrideProps<AutocompleteProps>;
    conversationPurpose?: PrimitiveOverrideProps<TextFieldProps>;
    conversationType?: PrimitiveOverrideProps<TextFieldProps>;
    prePrompt?: PrimitiveOverrideProps<TextFieldProps>;
    postPrompt?: PrimitiveOverrideProps<TextFieldProps>;
    llm?: PrimitiveOverrideProps<AutocompleteProps>;
    chatMemory?: PrimitiveOverrideProps<TextFieldProps>;
    responseTemperature?: PrimitiveOverrideProps<TextFieldProps>;
    responseLanguage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AiParametersUpdateFormProps = React.PropsWithChildren<{
    overrides?: AiParametersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aiParameters?: AiParameters;
    onSubmit?: (fields: AiParametersUpdateFormInputValues) => AiParametersUpdateFormInputValues;
    onSuccess?: (fields: AiParametersUpdateFormInputValues) => void;
    onError?: (fields: AiParametersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiParametersUpdateFormInputValues) => AiParametersUpdateFormInputValues;
    onValidate?: AiParametersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AiParametersUpdateForm(props: AiParametersUpdateFormProps): React.ReactElement;
