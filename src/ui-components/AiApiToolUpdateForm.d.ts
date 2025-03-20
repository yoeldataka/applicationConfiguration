/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiApiTool, AiToolGroup, BackendEndpoint } from "../API.ts";
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
export declare type AiApiToolUpdateFormInputValues = {
    name?: string;
    func?: string;
    useCases?: string;
    description?: string;
    payload?: string;
    endpoint?: BackendEndpoint[];
    usedIn?: AiToolGroup[];
};
export declare type AiApiToolUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    func?: ValidationFunction<string>;
    useCases?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    payload?: ValidationFunction<string>;
    endpoint?: ValidationFunction<BackendEndpoint>;
    usedIn?: ValidationFunction<AiToolGroup>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiApiToolUpdateFormOverridesProps = {
    AiApiToolUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    func?: PrimitiveOverrideProps<TextFieldProps>;
    useCases?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    payload?: PrimitiveOverrideProps<TextFieldProps>;
    endpoint?: PrimitiveOverrideProps<AutocompleteProps>;
    usedIn?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AiApiToolUpdateFormProps = React.PropsWithChildren<{
    overrides?: AiApiToolUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aiApiTool?: AiApiTool;
    onSubmit?: (fields: AiApiToolUpdateFormInputValues) => AiApiToolUpdateFormInputValues;
    onSuccess?: (fields: AiApiToolUpdateFormInputValues) => void;
    onError?: (fields: AiApiToolUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiApiToolUpdateFormInputValues) => AiApiToolUpdateFormInputValues;
    onValidate?: AiApiToolUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AiApiToolUpdateForm(props: AiApiToolUpdateFormProps): React.ReactElement;
