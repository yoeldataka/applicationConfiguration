/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiProcess } from "../API.ts";
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
export declare type AiSettingsCreateFormInputValues = {
    name?: string;
    balancerUrl?: string;
    processes?: AiProcess[];
};
export declare type AiSettingsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    balancerUrl?: ValidationFunction<string>;
    processes?: ValidationFunction<AiProcess>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiSettingsCreateFormOverridesProps = {
    AiSettingsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    balancerUrl?: PrimitiveOverrideProps<TextFieldProps>;
    processes?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AiSettingsCreateFormProps = React.PropsWithChildren<{
    overrides?: AiSettingsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AiSettingsCreateFormInputValues) => AiSettingsCreateFormInputValues;
    onSuccess?: (fields: AiSettingsCreateFormInputValues) => void;
    onError?: (fields: AiSettingsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiSettingsCreateFormInputValues) => AiSettingsCreateFormInputValues;
    onValidate?: AiSettingsCreateFormValidationValues;
} & React.CSSProperties>;
export default function AiSettingsCreateForm(props: AiSettingsCreateFormProps): React.ReactElement;
