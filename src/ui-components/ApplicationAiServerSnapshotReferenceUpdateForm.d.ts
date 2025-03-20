/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ApplicationAiServerSnapshotReference } from "../API.ts";
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
export declare type ApplicationAiServerSnapshotReferenceUpdateFormInputValues = {
    name?: string;
};
export declare type ApplicationAiServerSnapshotReferenceUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ApplicationAiServerSnapshotReferenceUpdateFormOverridesProps = {
    ApplicationAiServerSnapshotReferenceUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ApplicationAiServerSnapshotReferenceUpdateFormProps = React.PropsWithChildren<{
    overrides?: ApplicationAiServerSnapshotReferenceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    applicationAiServerSnapshotReference?: ApplicationAiServerSnapshotReference;
    onSubmit?: (fields: ApplicationAiServerSnapshotReferenceUpdateFormInputValues) => ApplicationAiServerSnapshotReferenceUpdateFormInputValues;
    onSuccess?: (fields: ApplicationAiServerSnapshotReferenceUpdateFormInputValues) => void;
    onError?: (fields: ApplicationAiServerSnapshotReferenceUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ApplicationAiServerSnapshotReferenceUpdateFormInputValues) => ApplicationAiServerSnapshotReferenceUpdateFormInputValues;
    onValidate?: ApplicationAiServerSnapshotReferenceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ApplicationAiServerSnapshotReferenceUpdateForm(props: ApplicationAiServerSnapshotReferenceUpdateFormProps): React.ReactElement;
