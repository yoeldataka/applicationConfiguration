/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiApiTool, AiConfiguration, AiRenderTool } from "../API.ts";
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
export declare type AiToolGroupCreateFormInputValues = {
    name?: string;
    apiTools?: AiApiTool[];
    renderTools?: AiRenderTool[];
    usedIn?: AiConfiguration[];
};
export declare type AiToolGroupCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    apiTools?: ValidationFunction<AiApiTool>;
    renderTools?: ValidationFunction<AiRenderTool>;
    usedIn?: ValidationFunction<AiConfiguration>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiToolGroupCreateFormOverridesProps = {
    AiToolGroupCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    apiTools?: PrimitiveOverrideProps<AutocompleteProps>;
    renderTools?: PrimitiveOverrideProps<AutocompleteProps>;
    usedIn?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AiToolGroupCreateFormProps = React.PropsWithChildren<{
    overrides?: AiToolGroupCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AiToolGroupCreateFormInputValues) => AiToolGroupCreateFormInputValues;
    onSuccess?: (fields: AiToolGroupCreateFormInputValues) => void;
    onError?: (fields: AiToolGroupCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiToolGroupCreateFormInputValues) => AiToolGroupCreateFormInputValues;
    onValidate?: AiToolGroupCreateFormValidationValues;
} & React.CSSProperties>;
export default function AiToolGroupCreateForm(props: AiToolGroupCreateFormProps): React.ReactElement;
