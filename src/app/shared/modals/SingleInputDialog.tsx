import React from 'react';
import { TextField } from '@material-ui/core';
import { AlertDialog } from './Alert/AlertDialog';
import { InputProps } from '@material-ui/core/Input';

interface ISingleInputDialogProps {
  value?: string;
  open: boolean;
  title: string;
  label: string;
  submitButtonText?: string;
  validationRegExp?: RegExp;
  inputProps?: Partial<InputProps>;
  inputComponent?: React.ComponentType<any>;
  onSubmit(value: string): void;
  onCancel(): void;
}

interface ISingleInputDialogState {
  value: string;
}

export class SingleInputDialog extends React.Component<ISingleInputDialogProps, ISingleInputDialogState> {
  state = {
    value: this.props.value || ''
  };

  get isValidInput(): boolean {
    if (this.props.validationRegExp) {
      return this.props.validationRegExp.test(this.state.value);
    }

    return true;
  }

  render() {
    const {open, title, label, inputComponent, submitButtonText, inputProps, onSubmit, onCancel} = this.props;

    const InputField = inputComponent ? inputComponent : TextField;

    const SingleInputDialogContent = (
      <InputField
        fullWidth
        label={label}
        value={this.state.value}
        onChange={(event) => this.setState({value: event.target.value})}
        InputProps={inputProps}
      />
    );

    return (
      <AlertDialog
        open={open}
        title={title}
        content={SingleInputDialogContent}
        handleSubmit={() => onSubmit(this.state.value)}
        handleClose={() => onCancel()}
        submitButtonText={submitButtonText || 'Save'}
        submitButtonDisabled={!this.state.value || !this.isValidInput}
      />
    );
  }
}
