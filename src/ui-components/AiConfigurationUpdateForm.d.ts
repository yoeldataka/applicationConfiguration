/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiConfiguration, AiParameters, AiToolGroup } from "../API.ts";
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
export declare type AiConfigurationUpdateFormInputValues = {
    name?: string;
    aiParameters?: AiParameters;
    tools?: AiToolGroup[];
};
export declare type AiConfigurationUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    aiParameters?: ValidationFunction<AiParameters>;
    tools?: ValidationFunction<AiToolGroup>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiConfigurationUpdateFormOverridesProps = {
    AiConfigurationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    aiParameters?: PrimitiveOverrideProps<AutocompleteProps>;
    tools?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AiConfigurationUpdateFormProps = React.PropsWithChildren<{
    overrides?: AiConfigurationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aiConfiguration?: AiConfiguration;
    onSubmit?: (fields: AiConfigurationUpdateFormInputValues) => AiConfigurationUpdateFormInputValues;
    onSuccess?: (fields: AiConfigurationUpdateFormInputValues) => void;
    onError?: (fields: AiConfigurationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiConfigurationUpdateFormInputValues) => AiConfigurationUpdateFormInputValues;
    onValidate?: AiConfigurationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AiConfigurationUpdateForm(props: AiConfigurationUpdateFormProps): React.ReactElement;
