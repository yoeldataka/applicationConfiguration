/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiRenderTool, FrontendSettings } from "../API.ts";
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
export declare type FrontendComponentCreateFormInputValues = {
    name?: string;
    description?: string;
    usedInSettings?: FrontendSettings[];
    usedInTool?: AiRenderTool[];
};
export declare type FrontendComponentCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    usedInSettings?: ValidationFunction<FrontendSettings>;
    usedInTool?: ValidationFunction<AiRenderTool>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FrontendComponentCreateFormOverridesProps = {
    FrontendComponentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    usedInSettings?: PrimitiveOverrideProps<AutocompleteProps>;
    usedInTool?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type FrontendComponentCreateFormProps = React.PropsWithChildren<{
    overrides?: FrontendComponentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FrontendComponentCreateFormInputValues) => FrontendComponentCreateFormInputValues;
    onSuccess?: (fields: FrontendComponentCreateFormInputValues) => void;
    onError?: (fields: FrontendComponentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FrontendComponentCreateFormInputValues) => FrontendComponentCreateFormInputValues;
    onValidate?: FrontendComponentCreateFormValidationValues;
} & React.CSSProperties>;
export default function FrontendComponentCreateForm(props: FrontendComponentCreateFormProps): React.ReactElement;
