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
export declare type AiVectorialDbConfigCreateFormInputValues = {
    name?: string;
    apiKey?: string;
    indexName?: string;
    nameSpace?: string;
    score?: number;
    numberOfSimilarities?: number;
};
export declare type AiVectorialDbConfigCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    apiKey?: ValidationFunction<string>;
    indexName?: ValidationFunction<string>;
    nameSpace?: ValidationFunction<string>;
    score?: ValidationFunction<number>;
    numberOfSimilarities?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiVectorialDbConfigCreateFormOverridesProps = {
    AiVectorialDbConfigCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    apiKey?: PrimitiveOverrideProps<TextFieldProps>;
    indexName?: PrimitiveOverrideProps<TextFieldProps>;
    nameSpace?: PrimitiveOverrideProps<TextFieldProps>;
    score?: PrimitiveOverrideProps<TextFieldProps>;
    numberOfSimilarities?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AiVectorialDbConfigCreateFormProps = React.PropsWithChildren<{
    overrides?: AiVectorialDbConfigCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AiVectorialDbConfigCreateFormInputValues) => AiVectorialDbConfigCreateFormInputValues;
    onSuccess?: (fields: AiVectorialDbConfigCreateFormInputValues) => void;
    onError?: (fields: AiVectorialDbConfigCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiVectorialDbConfigCreateFormInputValues) => AiVectorialDbConfigCreateFormInputValues;
    onValidate?: AiVectorialDbConfigCreateFormValidationValues;
} & React.CSSProperties>;
export default function AiVectorialDbConfigCreateForm(props: AiVectorialDbConfigCreateFormProps): React.ReactElement;
