/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BackendSettings, BackendTopic } from "../API.ts";
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
export declare type BackendTopicUpdateFormInputValues = {
    name?: string;
    arn?: string;
    usedIn?: BackendSettings[];
};
export declare type BackendTopicUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    arn?: ValidationFunction<string>;
    usedIn?: ValidationFunction<BackendSettings>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BackendTopicUpdateFormOverridesProps = {
    BackendTopicUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    arn?: PrimitiveOverrideProps<TextFieldProps>;
    usedIn?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BackendTopicUpdateFormProps = React.PropsWithChildren<{
    overrides?: BackendTopicUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    backendTopic?: BackendTopic;
    onSubmit?: (fields: BackendTopicUpdateFormInputValues) => BackendTopicUpdateFormInputValues;
    onSuccess?: (fields: BackendTopicUpdateFormInputValues) => void;
    onError?: (fields: BackendTopicUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BackendTopicUpdateFormInputValues) => BackendTopicUpdateFormInputValues;
    onValidate?: BackendTopicUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BackendTopicUpdateForm(props: BackendTopicUpdateFormProps): React.ReactElement;
