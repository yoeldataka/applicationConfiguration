/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiApiTool, AiConfiguration, AiRenderTool, AiToolGroup } from "../API.ts";
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
export declare type AiToolGroupUpdateFormInputValues = {
    name?: string;
    apiTools?: AiApiTool[];
    renderTools?: AiRenderTool[];
    usedIn?: AiConfiguration[];
};
export declare type AiToolGroupUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    apiTools?: ValidationFunction<AiApiTool>;
    renderTools?: ValidationFunction<AiRenderTool>;
    usedIn?: ValidationFunction<AiConfiguration>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiToolGroupUpdateFormOverridesProps = {
    AiToolGroupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    apiTools?: PrimitiveOverrideProps<AutocompleteProps>;
    renderTools?: PrimitiveOverrideProps<AutocompleteProps>;
    usedIn?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AiToolGroupUpdateFormProps = React.PropsWithChildren<{
    overrides?: AiToolGroupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aiToolGroup?: AiToolGroup;
    onSubmit?: (fields: AiToolGroupUpdateFormInputValues) => AiToolGroupUpdateFormInputValues;
    onSuccess?: (fields: AiToolGroupUpdateFormInputValues) => void;
    onError?: (fields: AiToolGroupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiToolGroupUpdateFormInputValues) => AiToolGroupUpdateFormInputValues;
    onValidate?: AiToolGroupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AiToolGroupUpdateForm(props: AiToolGroupUpdateFormProps): React.ReactElement;
