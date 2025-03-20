/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiSettings, ApplicationStage, ApplicationStageCognitoUserPool, BackendSettings, FrontendSettings } from "../API.ts";
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
export declare type ApplicationStageUpdateFormInputValues = {
    name?: string;
    aiSettings?: AiSettings;
    backendSettings?: BackendSettings;
    frontendSettings?: FrontendSettings;
    cognitoUserPool?: ApplicationStageCognitoUserPool;
};
export declare type ApplicationStageUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    aiSettings?: ValidationFunction<AiSettings>;
    backendSettings?: ValidationFunction<BackendSettings>;
    frontendSettings?: ValidationFunction<FrontendSettings>;
    cognitoUserPool?: ValidationFunction<ApplicationStageCognitoUserPool>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ApplicationStageUpdateFormOverridesProps = {
    ApplicationStageUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    aiSettings?: PrimitiveOverrideProps<AutocompleteProps>;
    backendSettings?: PrimitiveOverrideProps<AutocompleteProps>;
    frontendSettings?: PrimitiveOverrideProps<AutocompleteProps>;
    cognitoUserPool?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ApplicationStageUpdateFormProps = React.PropsWithChildren<{
    overrides?: ApplicationStageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    applicationStage?: ApplicationStage;
    onSubmit?: (fields: ApplicationStageUpdateFormInputValues) => ApplicationStageUpdateFormInputValues;
    onSuccess?: (fields: ApplicationStageUpdateFormInputValues) => void;
    onError?: (fields: ApplicationStageUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ApplicationStageUpdateFormInputValues) => ApplicationStageUpdateFormInputValues;
    onValidate?: ApplicationStageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ApplicationStageUpdateForm(props: ApplicationStageUpdateFormProps): React.ReactElement;
