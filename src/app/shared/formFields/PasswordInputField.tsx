import React from 'react';
import { FieldProps } from 'formik';
import { PasswordInput } from '../inputs/PasswordInput';
import { resolvePath } from '../../utils/commonFunctions';

export const PasswordInputField = ({ field, form, ...rest }: FieldProps) => {
  const error = resolvePath(form.errors, field.name);
  const touched = resolvePath(form.touched, field.name);

  return (
    <PasswordInput
      {...field}
      {...rest}
      error={!!error && !!touched}
      helperText={touched && error || ''}
    />
  );
};
