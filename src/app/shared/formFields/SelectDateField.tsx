import React from 'react';
import { FieldProps } from 'formik';
import { ISelectDateProps, SelectDate } from '../select/SelectDate/SelectDate';
import { resolvePath } from '../../utils/commonFunctions';

interface ISelectFieldProps extends FieldProps, ISelectDateProps {}

export const SelectDateField = ({ field, form, ...rest }: ISelectFieldProps) => {
  const error = resolvePath(form.errors, field.name);
  const touched = resolvePath(form.touched, field.name);

  return (
    <SelectDate
      {...field}
      {...rest}
      error={!!error && !!touched}
      helperText={touched && error || ''}
    />
  );
};
