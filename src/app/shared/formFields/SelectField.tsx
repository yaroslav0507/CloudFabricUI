import React from 'react';
import { FieldProps } from 'formik';
import { ISelectProps, Select } from '../select/Select/Select';
import { resolvePath } from '../../utils/commonFunctions';

export interface ISelectFieldProps extends FieldProps, ISelectProps<any> {}

export const SelectField = ({ field, form, onChange, ...rest }: ISelectFieldProps) => {
  const error = resolvePath(form.errors, field.name);
  const touched = resolvePath(form.touched, field.name);

  return (
    <Select
      {...field}
      {...rest}
      onChange={(value: any) => onChange ? onChange({
        target: {
          value,
          name: field.name
        }
      }) : form.setFieldValue(field.name, value)}
      onBlur={() => form.setFieldTouched(field.name)}
      error={!!error && !!touched}
      helperText={touched && error || ''}
    />
  );
};
