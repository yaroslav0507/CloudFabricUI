import React from 'react';
import { FieldProps } from 'formik';
import { NumberInput } from '../inputs/NumberInput';
import { resolvePath } from '../../utils/commonFunctions';

interface INumberInputFieldProps extends FieldProps {
  error?: boolean;
  onChange?(e: {target: {value: any}}): void;
}

export const NumberInputField = ({ field, form, onChange, error, ...rest }: INumberInputFieldProps) => {
  const hasError = resolvePath(form.errors, field.name);
  const touched = resolvePath(form.touched, field.name);

  return (
    <NumberInput
      {...field}
      {...rest}
      onChange={(event) => onChange ? onChange(event) : form.setFieldValue(field.name, event.target.value)}
      error={!!hasError && !!touched || error}
      helperText={touched && hasError || ''}
    />
  );
};
