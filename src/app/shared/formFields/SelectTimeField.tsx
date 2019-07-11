import React from 'react';
import { FieldProps } from 'formik';
import { ISelectDateProps } from '../select/SelectDate/SelectDate';
import { resolvePath } from '../../utils/commonFunctions';
import { SelectTime } from '../select/SelectTime/SelectTime';

interface ISelectFieldProps extends FieldProps, ISelectDateProps {}

export const SelectTimeField = ({ field, form, ...rest }: ISelectFieldProps) => {
  const error = resolvePath(form.errors, field.name);
  const touched = resolvePath(form.touched, field.name);

  return (
    <SelectTime
      {...field}
      {...rest}
      error={!!error && !!touched}
      helperText={touched && error || ''}
    />
  );
};
