import React, {useState} from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import {RouteComponentProps} from 'react-router';
import styled from 'styled-components';
import {FormWrapper} from '../../../shared/components/components';
import {TextInput} from '../../../shared/inputs/TextInput/TextInput';
import {CFGrid} from '../../../shared/CFGrid/CFGrid';
import IconGear from '../../../../images/outline-settings-24px.svg';
import {LabelWithIcon} from '../../../shared/components/LabelWithIcon';

const PageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const FormBlockHeader = styled.div`
  font-size: 14px;
  display: flex;
  height: 100%;
  align-items: center;
`;

const AddNewVariableWrapper = styled(FormWrapper)`
  margin-bottom: 29px;
`;

export const ClientPage: React.FC<RouteComponentProps<{clientName: string}>> = ({ match }) => {
  const [variableName, setVariableName] = useState('');
  const [variableValue, setVariableValue] = useState('');

  return (
    <>
      <PageHeader>
        <Typography variant="headline">
          <b>{match.params.clientName}</b>
        </Typography>

        <Button
          variant="contained"
          color="secondary"
        >
          Preview
        </Button>
      </PageHeader>

      <AddNewVariableWrapper>
        <Grid container spacing={16}>
          <Grid item xs>
            <FormBlockHeader>New Variable</FormBlockHeader>
          </Grid>

          <Grid item xs={5}>
            <TextInput
              value={variableName}
              adornment="Name: "
              onChange={({target: {value}}) => setVariableName(value)}
            />
          </Grid>

          <Grid item xs={5}>
            <TextInput
              value={variableValue}
              adornment="Value: "
              onChange={({target: {value}}) => setVariableValue(value)}
            />
          </Grid>

          <Grid item xs={1}>
            <Button
              disabled={!variableName || !variableValue}
              color="primary"
              variant="contained"
              fullWidth
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </AddNewVariableWrapper>

      <CFGrid
        config={[{
          label: <LabelWithIcon label="Name" />,
          render: (row) => <LabelWithIcon label={row.name} icon={<IconGear/>}/>
        }, {
          label: 'Value',
          key: 'value'
        }]}
        data={[{
          name: 'Variable Name',
          value: 'Variable Value'
        }]}
      />
    </>
  );
};
