import React from 'react';
import {DatePicker} from 'material-ui-pickers';
import { IconButton, InputAdornment, withStyles, WithStyles } from '@material-ui/core';
import { selectDateStyles } from './selectDateStyles';
import classNames from 'classnames';
import moment, { Moment } from 'moment';
import { formatDateISO } from '../../../utils/commonFunctions';
import IconDate from '../../../../../src/images/outline-date_range-24px.svg';
import { ITextInputOwnProps, TextInput } from '../../inputs/TextInput/TextInput';

export interface ISelectDateProps extends WithStyles<typeof selectDateStyles>, ITextInputOwnProps {
  label: string;
  name?: string;
  value?: string;
  error?: boolean;
  helperText?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onChange?(event: any): void;
}

export const SelectDate = withStyles(selectDateStyles)(class Picker extends React.Component<ISelectDateProps> {
  static defaultProps = {
    shrink: true
  };

  picker: any;

  shouldComponentUpdate(nextProps: ISelectDateProps) {
    return nextProps.value !== this.props.value ||
      nextProps.disabled !== this.props.disabled ||
      nextProps.displayError !== this.props.displayError ||
      nextProps.error !== this.props.error;
  }

  render() {
    const {label, name, value, shrink, classes, disabled, className, onChange, ...otherProps} = this.props;

    const selectedDate = value ? formatDateISO(value) : null;

    const DatePickerIcon = () => !disabled && (
      <InputAdornment
        position="end"
        classes={{root: classes.adornment}}
      >
        <IconButton onClick={() => this.picker.open()}>
          <IconDate className="icon-grey" width={18}/>
        </IconButton>
      </InputAdornment>
    );

    return (
      <div className={classNames([classes.root, className])}>
        <DatePicker
          {...otherProps}
          keyboard
          clearable
          disableOpenOnEnter
          // @ts-ignore
          label={label}
          format="MM/DD/YYYY"
          placeholder="mm/dd/yyyy"
          value={selectedDate}
          animateYearScrolling={false}
          ref={(node) => { this.picker = node; }}
          onChange={(date: Moment) => {
            if (!onChange) {
              return;
            }

            const dateValue = date ? moment.utc(date.format('YYYY-MM-DD')).toISOString() : null;

            onChange({target: {value: dateValue, name}});
          }}
          // handle clearing outside => pass plain array if you are not controlling value outside
          mask={(date: Date) => (date ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
          margin="none"
          disabled={disabled}
          InputAdornmentProps={{component: DatePickerIcon}}
          InputLabelProps={{shrink}}
          TextFieldComponent={TextInput}
          minDate="0001-01-01T00:00:00Z"
        />
      </div>
    );
  }
});
