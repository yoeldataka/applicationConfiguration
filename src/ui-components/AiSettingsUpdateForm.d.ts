/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiProcess, AiSettings } from "../API.ts";
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
export declare type AiSettingsUpdateFormInputValues = {
    name?: string;
    balancerUrl?: string;
    processes?: AiProcess[];
};
export declare type AiSettingsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    balancerUrl?: ValidationFunction<string>;
    processes?: ValidationFunction<AiProcess>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiSettingsUpdateFormOverridesProps = {
    AiSettingsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    balancerUrl?: PrimitiveOverrideProps<TextFieldProps>;
    processes?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AiSettingsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AiSettingsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aiSettings?: AiSettings;
    onSubmit?: (fields: AiSettingsUpdateFormInputValues) => AiSettingsUpdateFormInputValues;
    onSuccess?: (fields: AiSettingsUpdateFormInputValues) => void;
    onError?: (fields: AiSettingsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiSettingsUpdateFormInputValues) => AiSettingsUpdateFormInputValues;
    onValidate?: AiSettingsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AiSettingsUpdateForm(props: AiSettingsUpdateFormProps): React.ReactElement;
