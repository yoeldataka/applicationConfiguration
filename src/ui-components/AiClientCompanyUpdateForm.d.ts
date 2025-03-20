/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiClientCompany } from "../API.ts";
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
export declare type AiClientCompanyUpdateFormInputValues = {
    name?: string;
    business?: string;
    values?: string;
};
export declare type AiClientCompanyUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    business?: ValidationFunction<string>;
    values?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiClientCompanyUpdateFormOverridesProps = {
    AiClientCompanyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    business?: PrimitiveOverrideProps<TextFieldProps>;
    values?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AiClientCompanyUpdateFormProps = React.PropsWithChildren<{
    overrides?: AiClientCompanyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aiClientCompany?: AiClientCompany;
    onSubmit?: (fields: AiClientCompanyUpdateFormInputValues) => AiClientCompanyUpdateFormInputValues;
    onSuccess?: (fields: AiClientCompanyUpdateFormInputValues) => void;
    onError?: (fields: AiClientCompanyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiClientCompanyUpdateFormInputValues) => AiClientCompanyUpdateFormInputValues;
    onValidate?: AiClientCompanyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AiClientCompanyUpdateForm(props: AiClientCompanyUpdateFormProps): React.ReactElement;
