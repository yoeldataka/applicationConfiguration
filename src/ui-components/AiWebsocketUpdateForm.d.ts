/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AiWebsocket } from "../API.ts";
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
export declare type AiWebsocketUpdateFormInputValues = {
    name?: string;
    url?: string;
};
export declare type AiWebsocketUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AiWebsocketUpdateFormOverridesProps = {
    AiWebsocketUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AiWebsocketUpdateFormProps = React.PropsWithChildren<{
    overrides?: AiWebsocketUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aiWebsocket?: AiWebsocket;
    onSubmit?: (fields: AiWebsocketUpdateFormInputValues) => AiWebsocketUpdateFormInputValues;
    onSuccess?: (fields: AiWebsocketUpdateFormInputValues) => void;
    onError?: (fields: AiWebsocketUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AiWebsocketUpdateFormInputValues) => AiWebsocketUpdateFormInputValues;
    onValidate?: AiWebsocketUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AiWebsocketUpdateForm(props: AiWebsocketUpdateFormProps): React.ReactElement;
