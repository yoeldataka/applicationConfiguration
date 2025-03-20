/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiApiTool, BackendEndpoint, BackendEndpointMethod, BackendSettings } from "../API.ts";
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
export declare type BackendEndpointUpdateFormInputValues = {
    name?: string;
    url?: string;
    description?: string;
    method?: BackendEndpointMethod;
    parametersWIP?: string;
    usedInSettings?: BackendSettings[];
    usedInTool?: AiApiTool[];
};
export declare type BackendEndpointUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    method?: ValidationFunction<BackendEndpointMethod>;
    parametersWIP?: ValidationFunction<string>;
    usedInSettings?: ValidationFunction<BackendSettings>;
    usedInTool?: ValidationFunction<AiApiTool>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BackendEndpointUpdateFormOverridesProps = {
    BackendEndpointUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    method?: PrimitiveOverrideProps<AutocompleteProps>;
    parametersWIP?: PrimitiveOverrideProps<TextFieldProps>;
    usedInSettings?: PrimitiveOverrideProps<AutocompleteProps>;
    usedInTool?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BackendEndpointUpdateFormProps = React.PropsWithChildren<{
    overrides?: BackendEndpointUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    backendEndpoint?: BackendEndpoint;
    onSubmit?: (fields: BackendEndpointUpdateFormInputValues) => BackendEndpointUpdateFormInputValues;
    onSuccess?: (fields: BackendEndpointUpdateFormInputValues) => void;
    onError?: (fields: BackendEndpointUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BackendEndpointUpdateFormInputValues) => BackendEndpointUpdateFormInputValues;
    onValidate?: BackendEndpointUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BackendEndpointUpdateForm(props: BackendEndpointUpdateFormProps): React.ReactElement;
