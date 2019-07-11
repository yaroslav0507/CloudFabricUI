import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Modal } from '../Modal';
import { Typography } from '@material-ui/core';

interface IAlertDialogProps {
  title: string;
  content: JSX.Element | string;
  open: boolean;
  hideCancelButton?: boolean;
  cancelButtonText?: string;
  submitButtonText?: string;
  submitButtonDisabled?: boolean;
  hideCloseIcon?: boolean;
  handleSubmit?(): Promise<void> | void | undefined;
  handleClose(): void;
}

export class AlertDialog extends React.Component<IAlertDialogProps> {
  render() {
    const {
      open, title, content, cancelButtonText, submitButtonDisabled, hideCloseIcon,
      submitButtonText, hideCancelButton, handleSubmit, handleClose
    } = this.props;

    return (
      <Modal
        open={open}
        onClose={() => handleClose()}
        hideCloseIcon={hideCloseIcon}
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>

        <DialogContent style={{minWidth: 300, overflow: 'visible'}}>
          {typeof content === 'string' ? (
            <Typography
              variant="subtitle1"
              style={{whiteSpace: 'pre-line'}}
            >
              {content}
            </Typography>
          ) : (
            <div>
              {content}
            </div>
          )}
        </DialogContent>

        {(!hideCancelButton || handleSubmit) && (
          <DialogActions>
            {hideCancelButton ? '' : (
              <Button
                onClick={() => handleClose()}
                color="primary"
              >
                {cancelButtonText || 'Cancel'}
              </Button>
            )}

            {handleSubmit ? (
              <Button
                disabled={submitButtonDisabled}
                type="submit"
                size="medium"
                variant="contained"
                onClick={() => handleSubmit()}
                color="primary"
                autoFocus
              >
                {submitButtonText || 'Continue'}
              </Button>
            ) : ''}
          </DialogActions>
        )}
      </Modal>
    );
  }
}
