/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ApplicationAiServerSnapshotReference, ApplicationStage } from "../API.ts";
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
export declare type ApplicationCreateFormInputValues = {
    url?: string;
    name?: string;
    version?: string;
    DEV?: ApplicationStage;
    STAGING?: ApplicationStage;
    PROD?: ApplicationStage;
    aiServerSnapshotReference?: ApplicationAiServerSnapshotReference;
};
export declare type ApplicationCreateFormValidationValues = {
    url?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    version?: ValidationFunction<string>;
    DEV?: ValidationFunction<ApplicationStage>;
    STAGING?: ValidationFunction<ApplicationStage>;
    PROD?: ValidationFunction<ApplicationStage>;
    aiServerSnapshotReference?: ValidationFunction<ApplicationAiServerSnapshotReference>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ApplicationCreateFormOverridesProps = {
    ApplicationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    version?: PrimitiveOverrideProps<TextFieldProps>;
    DEV?: PrimitiveOverrideProps<AutocompleteProps>;
    STAGING?: PrimitiveOverrideProps<AutocompleteProps>;
    PROD?: PrimitiveOverrideProps<AutocompleteProps>;
    aiServerSnapshotReference?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ApplicationCreateFormProps = React.PropsWithChildren<{
    overrides?: ApplicationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ApplicationCreateFormInputValues) => ApplicationCreateFormInputValues;
    onSuccess?: (fields: ApplicationCreateFormInputValues) => void;
    onError?: (fields: ApplicationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ApplicationCreateFormInputValues) => ApplicationCreateFormInputValues;
    onValidate?: ApplicationCreateFormValidationValues;
} & React.CSSProperties>;
export default function ApplicationCreateForm(props: ApplicationCreateFormProps): React.ReactElement;
