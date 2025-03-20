/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiLlm } from "../API.ts";
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
export declare type AiVectorizerParametersCreateFormInputValues = {
    name?: string;
    aiLlm?: AiLlm;
    chunkSize?: number;
    chunkOverlap?: string;
};
export declare type AiVectorizerParametersCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    aiLlm?: ValidationFunction<AiLlm>;
    chunkSize?: ValidationFunction<number>;
    chunkOverlap?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiVectorizerParametersCreateFormOverridesProps = {
    AiVectorizerParametersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    aiLlm?: PrimitiveOverrideProps<AutocompleteProps>;
    chunkSize?: PrimitiveOverrideProps<TextFieldProps>;
    chunkOverlap?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AiVectorizerParametersCreateFormProps = React.PropsWithChildren<{
    overrides?: AiVectorizerParametersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AiVectorizerParametersCreateFormInputValues) => AiVectorizerParametersCreateFormInputValues;
    onSuccess?: (fields: AiVectorizerParametersCreateFormInputValues) => void;
    onError?: (fields: AiVectorizerParametersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiVectorizerParametersCreateFormInputValues) => AiVectorizerParametersCreateFormInputValues;
    onValidate?: AiVectorizerParametersCreateFormValidationValues;
} & React.CSSProperties>;
export default function AiVectorizerParametersCreateForm(props: AiVectorizerParametersCreateFormProps): React.ReactElement;
