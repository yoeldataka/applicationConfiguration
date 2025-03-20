/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiRenderTool, FrontendComponent, FrontendSettings } from "../API.ts";
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
export declare type FrontendComponentUpdateFormInputValues = {
    name?: string;
    description?: string;
    usedInSettings?: FrontendSettings[];
    usedInTool?: AiRenderTool[];
};
export declare type FrontendComponentUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    usedInSettings?: ValidationFunction<FrontendSettings>;
    usedInTool?: ValidationFunction<AiRenderTool>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FrontendComponentUpdateFormOverridesProps = {
    FrontendComponentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    usedInSettings?: PrimitiveOverrideProps<AutocompleteProps>;
    usedInTool?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type FrontendComponentUpdateFormProps = React.PropsWithChildren<{
    overrides?: FrontendComponentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    frontendComponent?: FrontendComponent;
    onSubmit?: (fields: FrontendComponentUpdateFormInputValues) => FrontendComponentUpdateFormInputValues;
    onSuccess?: (fields: FrontendComponentUpdateFormInputValues) => void;
    onError?: (fields: FrontendComponentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FrontendComponentUpdateFormInputValues) => FrontendComponentUpdateFormInputValues;
    onValidate?: FrontendComponentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FrontendComponentUpdateForm(props: FrontendComponentUpdateFormProps): React.ReactElement;
