import React from 'react';
import Dialog, {DialogProps} from '@material-ui/core/Dialog';
import IconClearInput from '../../../images/outline-clear-24px.svg';
import IconButton from '@material-ui/core/IconButton';

interface IAlertDialogProps extends DialogProps {
  classes?: any;
  hideCloseIcon?: boolean;
  open: boolean;
  onClose(): void;
}

export class Modal extends React.Component<IAlertDialogProps> {
  render() {
    const {hideCloseIcon, ...props} = this.props;

    return (
      <Dialog {...props}>
        <div style={{padding: 15}}>
          {!hideCloseIcon && (
            <span className="close-dialog">
              <IconButton
                aria-label="Close modal window"
                onClick={() => this.props.onClose()}
              >
                <IconClearInput/>
              </IconButton>
            </span>
          )}

          {this.props.children}
        </div>
      </Dialog>
    );
  }
}
