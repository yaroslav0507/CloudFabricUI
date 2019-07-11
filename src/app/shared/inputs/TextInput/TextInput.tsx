import { InputAdornment, TextField } from '@material-ui/core';
import React from 'react';
import { StandardTextFieldProps } from '@material-ui/core/TextField';
import {shouldUpdate} from 'recompose';

export interface ITextInputOwnProps {
  adornment?: any;
  shrink?: boolean;
  required?: boolean;
  displayError?: boolean;
}

export interface ITextInputProps extends ITextInputOwnProps, StandardTextFieldProps {}

const TextInputBase = (
  {shrink, fullWidth = true, helperText, displayError = false, adornment, ...otherProps}: ITextInputProps
) => {
  const {required, value, label, error} = otherProps;

  const errorRequired = displayError && required && !(value || value === 0);
  const errorRequiredText = errorRequired && `${label} is required`;

  return (
    <TextField
      {...otherProps}
      variant="outlined"
      fullWidth={fullWidth}
      value={value || value === 0 ? value : ''}
      error={error || errorRequired}
      helperText={helperText || errorRequiredText}
      data-error={error}
      InputProps={adornment && {
        startAdornment: (
          <InputAdornment position="start">
            {adornment}
          </InputAdornment>
        ),
      }}
    />
  );
};

const checkPropsChange = (props: ITextInputProps, nextProps: ITextInputProps) => {
  return (
    nextProps.value !== props.value ||
    nextProps.error !== props.error ||
    nextProps.disabled !== props.disabled ||
    nextProps.helperText !== props.helperText ||
    nextProps.required !== props.required ||
    nextProps.type !== props.type
  );
};

export const TextInput = shouldUpdate(checkPropsChange)(TextInputBase);
