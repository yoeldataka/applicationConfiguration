/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BackendSettings } from "../API.ts";
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
export declare type BackendTopicCreateFormInputValues = {
    name?: string;
    arn?: string;
    usedIn?: BackendSettings[];
};
export declare type BackendTopicCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    arn?: ValidationFunction<string>;
    usedIn?: ValidationFunction<BackendSettings>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BackendTopicCreateFormOverridesProps = {
    BackendTopicCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    arn?: PrimitiveOverrideProps<TextFieldProps>;
    usedIn?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BackendTopicCreateFormProps = React.PropsWithChildren<{
    overrides?: BackendTopicCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BackendTopicCreateFormInputValues) => BackendTopicCreateFormInputValues;
    onSuccess?: (fields: BackendTopicCreateFormInputValues) => void;
    onError?: (fields: BackendTopicCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BackendTopicCreateFormInputValues) => BackendTopicCreateFormInputValues;
    onValidate?: BackendTopicCreateFormValidationValues;
} & React.CSSProperties>;
export default function BackendTopicCreateForm(props: BackendTopicCreateFormProps): React.ReactElement;
