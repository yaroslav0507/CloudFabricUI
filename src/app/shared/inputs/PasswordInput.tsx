import React from 'react';
import { ITextInputProps, TextInput } from './TextInput/TextInput';
import { InputAdornment, IconButton } from '@material-ui/core';
import IconVisibility from '../../../images/outline-visibility-24px.svg';
import IconVisibilityOff from '../../../images/outline-visibility_off-24px.svg';

interface IPasswordInputState {
  showPassword: boolean;
}

export class PasswordInput extends React.Component<ITextInputProps, IPasswordInputState> {
  state = {
    showPassword: false
  };

  handleClickShowPassword() {
    this.setState(state => ({
      showPassword: !state.showPassword
    }));
  }

  render() {
    const { showPassword } = this.state;

    return (
      <TextInput
        {...this.props}
        type={showPassword ? 'text' : 'password'}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="Toggle password visibility"
                onClick={() => this.handleClickShowPassword()}
                onMouseDown={(event) => event.preventDefault()}
              >
                {showPassword
                  ? <IconVisibilityOff className="icon-grey"/>
                  : <IconVisibility className="icon-grey"/>}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    );
  }
}
