/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { FrontendComponent, FrontendSettings } from "../API.ts";
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
export declare type FrontendSettingsUpdateFormInputValues = {
    name?: string;
    domain?: string;
    cssS3Url?: string;
    components?: FrontendComponent[];
};
export declare type FrontendSettingsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    domain?: ValidationFunction<string>;
    cssS3Url?: ValidationFunction<string>;
    components?: ValidationFunction<FrontendComponent>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FrontendSettingsUpdateFormOverridesProps = {
    FrontendSettingsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    domain?: PrimitiveOverrideProps<TextFieldProps>;
    cssS3Url?: PrimitiveOverrideProps<TextFieldProps>;
    components?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type FrontendSettingsUpdateFormProps = React.PropsWithChildren<{
    overrides?: FrontendSettingsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    frontendSettings?: FrontendSettings;
    onSubmit?: (fields: FrontendSettingsUpdateFormInputValues) => FrontendSettingsUpdateFormInputValues;
    onSuccess?: (fields: FrontendSettingsUpdateFormInputValues) => void;
    onError?: (fields: FrontendSettingsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FrontendSettingsUpdateFormInputValues) => FrontendSettingsUpdateFormInputValues;
    onValidate?: FrontendSettingsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FrontendSettingsUpdateForm(props: FrontendSettingsUpdateFormProps): React.ReactElement;
