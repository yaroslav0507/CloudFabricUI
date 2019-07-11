import React from 'react';
import { IconButton, InputAdornment, withStyles, WithStyles } from '@material-ui/core';
import classNames from 'classnames';
import { TimePicker } from 'material-ui-pickers';
import IconTime from '../../../../../src/images/outline-access_time-24px.svg';
import { selectDateStyles } from '../SelectDate/selectDateStyles';

interface ISelectTimeProps extends WithStyles<typeof selectDateStyles> {
  label: string;
  name?: string;
  value?: string;
  shrink?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?(event: any): void;
}

export const SelectTime = withStyles(selectDateStyles)(class Picker extends React.PureComponent<ISelectTimeProps> {
  static defaultProps = {
    shrink: true
  };

  picker: any;

  render() {
    const {label, value, classes, shrink, disabled, className, onChange} = this.props;

    const selectedDate = value ? new Date(value) : null;

    const TimePickerIcon = () => !disabled && (
      <InputAdornment
        position="end"
        classes={{root: classes.adornment}}
      >
        <IconButton onClick={() => this.picker.open()}>
          <IconTime className="icon-grey" width={18}/>
        </IconButton>
      </InputAdornment>
    );

    return (
      <div className={classNames([classes.root, className])}>
        <TimePicker
          keyboard
          // @ts-ignore
          label={label}
          value={selectedDate}
          ref={(node) => { this.picker = node; }}
          mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
          onChange={(date: string) => onChange && onChange({target: {value: date, name}})}
          disableOpenOnEnter
          disabled={disabled}
          InputAdornmentProps={{component: TimePickerIcon}}
          InputLabelProps={{shrink}}
        />
      </div>
    );
  }
});
