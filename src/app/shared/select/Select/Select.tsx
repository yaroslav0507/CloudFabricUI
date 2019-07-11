import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {default as MUISelect} from '@material-ui/core/Select';
import { WithStyles } from '@material-ui/core';
import { selectStyles } from './selectStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import FormHelperText from '@material-ui/core/FormHelperText';

export interface ISelectProps<T> extends WithStyles<typeof selectStyles> {
  value: any;
  name?: string;
  options: T[];
  optionsToHide?: T[];
  helperText?: React.ReactNode;
  label?: string;
  error?: boolean;
  required?: boolean;
  shrink?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  displayError?: boolean;
  disableUnderline?: boolean;
  multiple?: boolean;
  multiline?: boolean;
  renderValue?(selected: any): any;
  onBlur?(): void;
  onChange?(value: any): void;
}

export class SelectBase<T> extends React.Component<ISelectProps<T>> {
  static defaultProps = {
    shrink: true,
    fullWidth: true
  };

  shouldComponentUpdate(nextProps: ISelectProps<T>) {
    return nextProps.value !== this.props.value
      || nextProps.options !== this.props.options
      || nextProps.error !== this.props.error
      || nextProps.displayError !== this.props.displayError;
  }

  render() {
    const {
      value,
      name,
      label,
      options,
      optionsToHide,
      shrink,
      onChange,
      onBlur,
      disabled,
      disableUnderline,
      required,
      error,
      fullWidth,
      classes,
      helperText,
      displayError,
      multiple = false,
      multiline = false,
      renderValue,
      ...restProps
    } = this.props;

    const errorRequired = displayError && required && !(value || value === 0);
    const errorRequiredText = errorRequired && `${label} is required`;

    const optionsFormatted = options && options.map((option: any) => {
      if (typeof option === 'string' || typeof option === 'number') {
        return {
          value: option,
          label: option
        };
      } else {
        const keys = Object.keys(option);

        return {
          value: option[keys[0]],
          label: option[keys[1]]
        };
      }
    });

    const selectedValue = (typeof value !== 'undefined' && value !== null) ? value : '';

    const isOptionHidden = (option) => {
      return optionsToHide && optionsToHide.indexOf(option) >= 0;
    };

    return (
      <FormControl
        {...restProps}
        error={error || errorRequired}
        fullWidth={fullWidth}
        data-error={error}
      >
        {label && (
          <InputLabel
            shrink={shrink}
            htmlFor="select-input"
          >
            {label} {required && '*'}
          </InputLabel>
        )}

        <MUISelect
          multiple={multiple}
          multiline={multiline}
          renderValue={renderValue}
          name={name}
          value={selectedValue}
          disabled={disabled}
          onChange={(event) => onChange && onChange(event.target.value)}
          onBlur={() => onBlur && onBlur()}
          classes={{
            selectMenu: classes.input,
            icon: disabled ? classes.hidden : classes.icon
          }}
          disableUnderline={error ? false : disableUnderline}
        >
          {optionsFormatted && optionsFormatted.map((option, index) => {
            if (typeof option === 'string') {
              return (
                <MenuItem
                  key={index}
                  value={option}
                  data-hidden={isOptionHidden(option)}
                >
                  {option}
                </MenuItem>
              );
            } else {
              return (
                <MenuItem
                  key={index}
                  value={option.value}
                  data-hidden={isOptionHidden(option.value)}
                >
                  {option.label}
                </MenuItem>
              );
            }
          })}
        </MUISelect>

        <FormHelperText>{helperText || errorRequiredText}</FormHelperText>
      </FormControl>
    );
  }
}

export const Select = withStyles(selectStyles)(SelectBase);
