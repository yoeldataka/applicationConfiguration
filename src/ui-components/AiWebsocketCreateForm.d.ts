/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AiWebsocketCreateFormInputValues = {
    name?: string;
    url?: string;
};
export declare type AiWebsocketCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiWebsocketCreateFormOverridesProps = {
    AiWebsocketCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AiWebsocketCreateFormProps = React.PropsWithChildren<{
    overrides?: AiWebsocketCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AiWebsocketCreateFormInputValues) => AiWebsocketCreateFormInputValues;
    onSuccess?: (fields: AiWebsocketCreateFormInputValues) => void;
    onError?: (fields: AiWebsocketCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiWebsocketCreateFormInputValues) => AiWebsocketCreateFormInputValues;
    onValidate?: AiWebsocketCreateFormValidationValues;
} & React.CSSProperties>;
export default function AiWebsocketCreateForm(props: AiWebsocketCreateFormProps): React.ReactElement;
