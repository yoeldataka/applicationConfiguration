/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Application, ApplicationAiServerSnapshotReference, ApplicationStage } from "../API.ts";
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
export declare type ApplicationUpdateFormInputValues = {
    url?: string;
    name?: string;
    version?: string;
    DEV?: ApplicationStage;
    STAGING?: ApplicationStage;
    PROD?: ApplicationStage;
    aiServerSnapshotReference?: ApplicationAiServerSnapshotReference;
};
export declare type ApplicationUpdateFormValidationValues = {
    url?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    version?: ValidationFunction<string>;
    DEV?: ValidationFunction<ApplicationStage>;
    STAGING?: ValidationFunction<ApplicationStage>;
    PROD?: ValidationFunction<ApplicationStage>;
    aiServerSnapshotReference?: ValidationFunction<ApplicationAiServerSnapshotReference>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ApplicationUpdateFormOverridesProps = {
    ApplicationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    version?: PrimitiveOverrideProps<TextFieldProps>;
    DEV?: PrimitiveOverrideProps<AutocompleteProps>;
    STAGING?: PrimitiveOverrideProps<AutocompleteProps>;
    PROD?: PrimitiveOverrideProps<AutocompleteProps>;
    aiServerSnapshotReference?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ApplicationUpdateFormProps = React.PropsWithChildren<{
    overrides?: ApplicationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    application?: Application;
    onSubmit?: (fields: ApplicationUpdateFormInputValues) => ApplicationUpdateFormInputValues;
    onSuccess?: (fields: ApplicationUpdateFormInputValues) => void;
    onError?: (fields: ApplicationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ApplicationUpdateFormInputValues) => ApplicationUpdateFormInputValues;
    onValidate?: ApplicationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ApplicationUpdateForm(props: ApplicationUpdateFormProps): React.ReactElement;
