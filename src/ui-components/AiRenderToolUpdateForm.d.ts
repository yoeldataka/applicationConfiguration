/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiRenderTool, AiToolGroup, FrontendComponent } from "../API.ts";
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
export declare type AiRenderToolUpdateFormInputValues = {
    name?: string;
    func?: string;
    useCases?: string;
    description?: string;
    payload?: string;
    action?: string;
    component?: FrontendComponent[];
    usedIn?: AiToolGroup[];
};
export declare type AiRenderToolUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    func?: ValidationFunction<string>;
    useCases?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    payload?: ValidationFunction<string>;
    action?: ValidationFunction<string>;
    component?: ValidationFunction<FrontendComponent>;
    usedIn?: ValidationFunction<AiToolGroup>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiRenderToolUpdateFormOverridesProps = {
    AiRenderToolUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    func?: PrimitiveOverrideProps<TextFieldProps>;
    useCases?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    payload?: PrimitiveOverrideProps<TextFieldProps>;
    action?: PrimitiveOverrideProps<TextFieldProps>;
    component?: PrimitiveOverrideProps<AutocompleteProps>;
    usedIn?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AiRenderToolUpdateFormProps = React.PropsWithChildren<{
    overrides?: AiRenderToolUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aiRenderTool?: AiRenderTool;
    onSubmit?: (fields: AiRenderToolUpdateFormInputValues) => AiRenderToolUpdateFormInputValues;
    onSuccess?: (fields: AiRenderToolUpdateFormInputValues) => void;
    onError?: (fields: AiRenderToolUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiRenderToolUpdateFormInputValues) => AiRenderToolUpdateFormInputValues;
    onValidate?: AiRenderToolUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AiRenderToolUpdateForm(props: AiRenderToolUpdateFormProps): React.ReactElement;
