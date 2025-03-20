/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BackendQueue, BackendSettings } from "../API.ts";
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
export declare type BackendQueueUpdateFormInputValues = {
    name?: string;
    url?: string;
    usedIn?: BackendSettings[];
};
export declare type BackendQueueUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    usedIn?: ValidationFunction<BackendSettings>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BackendQueueUpdateFormOverridesProps = {
    BackendQueueUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    usedIn?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BackendQueueUpdateFormProps = React.PropsWithChildren<{
    overrides?: BackendQueueUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    backendQueue?: BackendQueue;
    onSubmit?: (fields: BackendQueueUpdateFormInputValues) => BackendQueueUpdateFormInputValues;
    onSuccess?: (fields: BackendQueueUpdateFormInputValues) => void;
    onError?: (fields: BackendQueueUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BackendQueueUpdateFormInputValues) => BackendQueueUpdateFormInputValues;
    onValidate?: BackendQueueUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BackendQueueUpdateForm(props: BackendQueueUpdateFormProps): React.ReactElement;
