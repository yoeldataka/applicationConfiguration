/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiConfiguration, AiSettings, AiTaskTypes, AiWebsocket, BackendQueue } from "../API.ts";
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
export declare type AiProcessCreateFormInputValues = {
    tebeDeleted?: boolean;
    name?: string;
    taskType?: AiTaskTypes;
    aiConfig?: AiConfiguration;
    usedIn?: AiSettings[];
    communicationSourceType?: string;
    frontedWebsocketCommunicationSource?: AiWebsocket;
    backendQueueCommunicationSource?: BackendQueue;
};
export declare type AiProcessCreateFormValidationValues = {
    tebeDeleted?: ValidationFunction<boolean>;
    name?: ValidationFunction<string>;
    taskType?: ValidationFunction<AiTaskTypes>;
    aiConfig?: ValidationFunction<AiConfiguration>;
    usedIn?: ValidationFunction<AiSettings>;
    communicationSourceType?: ValidationFunction<string>;
    frontedWebsocketCommunicationSource?: ValidationFunction<AiWebsocket>;
    backendQueueCommunicationSource?: ValidationFunction<BackendQueue>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiProcessCreateFormOverridesProps = {
    AiProcessCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tebeDeleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    taskType?: PrimitiveOverrideProps<AutocompleteProps>;
    aiConfig?: PrimitiveOverrideProps<AutocompleteProps>;
    usedIn?: PrimitiveOverrideProps<AutocompleteProps>;
    communicationSourceType?: PrimitiveOverrideProps<SelectFieldProps>;
    frontedWebsocketCommunicationSource?: PrimitiveOverrideProps<AutocompleteProps>;
    backendQueueCommunicationSource?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AiProcessCreateFormProps = React.PropsWithChildren<{
    overrides?: AiProcessCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AiProcessCreateFormInputValues) => AiProcessCreateFormInputValues;
    onSuccess?: (fields: AiProcessCreateFormInputValues) => void;
    onError?: (fields: AiProcessCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiProcessCreateFormInputValues) => AiProcessCreateFormInputValues;
    onValidate?: AiProcessCreateFormValidationValues;
} & React.CSSProperties>;
export default function AiProcessCreateForm(props: AiProcessCreateFormProps): React.ReactElement;
