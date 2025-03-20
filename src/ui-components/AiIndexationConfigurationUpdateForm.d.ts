/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiIndexationConfiguration, AiVectorialDbConfig, AiVectorizerParameters } from "../API.ts";
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
export declare type AiIndexationConfigurationUpdateFormInputValues = {
    name?: string;
    vectorizerParameters?: AiVectorizerParameters;
    vectorialDbConfig?: AiVectorialDbConfig;
};
export declare type AiIndexationConfigurationUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    vectorizerParameters?: ValidationFunction<AiVectorizerParameters>;
    vectorialDbConfig?: ValidationFunction<AiVectorialDbConfig>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiIndexationConfigurationUpdateFormOverridesProps = {
    AiIndexationConfigurationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    vectorizerParameters?: PrimitiveOverrideProps<AutocompleteProps>;
    vectorialDbConfig?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AiIndexationConfigurationUpdateFormProps = React.PropsWithChildren<{
    overrides?: AiIndexationConfigurationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aiIndexationConfiguration?: AiIndexationConfiguration;
    onSubmit?: (fields: AiIndexationConfigurationUpdateFormInputValues) => AiIndexationConfigurationUpdateFormInputValues;
    onSuccess?: (fields: AiIndexationConfigurationUpdateFormInputValues) => void;
    onError?: (fields: AiIndexationConfigurationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiIndexationConfigurationUpdateFormInputValues) => AiIndexationConfigurationUpdateFormInputValues;
    onValidate?: AiIndexationConfigurationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AiIndexationConfigurationUpdateForm(props: AiIndexationConfigurationUpdateFormProps): React.ReactElement;
