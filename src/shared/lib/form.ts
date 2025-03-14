import { ControllerProps, FieldValues, useForm } from "react-hook-form";

export const useAppForm = useForm;

export type FormItemProps<T extends FieldValues> = ControllerProps<T>;
