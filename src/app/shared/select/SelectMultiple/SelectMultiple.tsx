import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import { WithStyles } from '@material-ui/core';
import { selectMultipleStyles } from './selectMultipleStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import FormHelperText from '@material-ui/core/FormHelperText';

interface ISelectMultipleState {
  selected: string[];
}

interface ISelectMultipleProps extends WithStyles<typeof selectMultipleStyles> {
  error?: boolean;
  helperText?: React.ReactNode;
  label: string;
  data: any[];
  selected: string[];
  onSelect(data: any[]): void;
}

export class SelectMultipleBase extends React.Component<ISelectMultipleProps, ISelectMultipleState> {
  state = {
    selected: [] as string[]
  };

  componentDidMount() {
    if (this.props.selected) {
      this.setState({
        selected: this.props.selected
      });
    }
  }

  handleItemsSelect(event: any) {
    const selected = event.target.value;
    this.setState({selected});
    this.props.onSelect(selected);
  }

  renderNames(selected: string[]): string {
    return this.props.data
      .filter(item => selected.indexOf(item.id) > -1)
      .map(item => item.name)
      .join(', ');
  }

  render() {
    const {data, label, classes, error, helperText} = this.props;

    return (
      <FormControl
        error={error}
        required
        fullWidth
        className={classes.formControl}
      >
        <InputLabel htmlFor="select-multiple-checkbox">{label}</InputLabel>
        <Select
          multiple
          value={this.state.selected}
          onChange={(event) => this.handleItemsSelect(event)}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={(selected: string[]) => this.renderNames(selected)}
        >
          {data && data.map((item) => (
            <MenuItem
              key={item.id}
              value={item.id}
              classes={{root: classes.dropdownItem}}
            >
              <Checkbox
                color="primary"
                checked={this.state.selected.indexOf(item.id) > -1}
              />
              <ListItemText
                primary={item.name}
                classes={{root: classes.dropdownItemText, primary: classes.dropdownItemTextPrimary}}
              />
            </MenuItem>
          ))}
        </Select>

        {helperText && (<FormHelperText>{helperText}</FormHelperText>)}
      </FormControl>
    );
  }
}

export const SelectMultiple = withStyles(selectMultipleStyles)<ISelectMultipleProps>(SelectMultipleBase);
