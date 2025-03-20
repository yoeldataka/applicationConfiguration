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
export declare type AiTaskTypesCreateFormInputValues = {
    types?: string;
};
export declare type AiTaskTypesCreateFormValidationValues = {
    types?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiTaskTypesCreateFormOverridesProps = {
    AiTaskTypesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    types?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AiTaskTypesCreateFormProps = React.PropsWithChildren<{
    overrides?: AiTaskTypesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AiTaskTypesCreateFormInputValues) => AiTaskTypesCreateFormInputValues;
    onSuccess?: (fields: AiTaskTypesCreateFormInputValues) => void;
    onError?: (fields: AiTaskTypesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiTaskTypesCreateFormInputValues) => AiTaskTypesCreateFormInputValues;
    onValidate?: AiTaskTypesCreateFormValidationValues;
} & React.CSSProperties>;
export default function AiTaskTypesCreateForm(props: AiTaskTypesCreateFormProps): React.ReactElement;
