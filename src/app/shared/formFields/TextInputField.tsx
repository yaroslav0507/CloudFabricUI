import React from 'react';
import { FieldProps } from 'formik';
import { TextInput } from '../inputs/TextInput/TextInput';
import { resolvePath } from '../../utils/commonFunctions';

export const TextInputField = ({ field, form, ...rest }: FieldProps) => {
  const error = resolvePath(form.errors, field.name);
  const touched = resolvePath(form.touched, field.name);

  return (
    <TextInput
      {...field}
      {...rest}
      error={!!error && !!touched}
      helperText={touched && error || ''}
    />
  );
};
