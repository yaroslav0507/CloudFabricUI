import React from 'react';
import { FieldProps } from 'formik';
import { Checkbox, FormControlLabel } from '@material-ui/core';

interface ICheckboxFieldOwnProps extends FieldProps {
  label: string;
}

export const CheckboxField = ({ label, field, form, ...rest }: ICheckboxFieldOwnProps) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={field.value}
          onChange={field.onChange}
          id={field.name}
          {...rest}
        />
      }
      label={label}
    />
  );
};
