import React, {useState} from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import {RouteComponentProps} from 'react-router';
import styled from 'styled-components';
import {FormWrapper} from '../../../shared/components/components';
import {TextInput} from '../../../shared/inputs/TextInput/TextInput';
import {CFGrid} from '../../../shared/CFGrid/CFGrid';
import IconGear from '../../../../images/outline-settings-24px.svg';
import IconWeb from '../../../../images/baseline-web-24px.svg';
import IconLayers from '../../../../images/baseline-layers-24px.svg';
import {LabelWithIcon} from '../../../shared/components/LabelWithIcon';
import {EditableList} from './EditableList';
import {FormBlockHeader} from './styles';
import {mockApplicationsData, mockEnvironmentsData} from './mocks';

const PageHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const AddNewVariableWrapper = styled(FormWrapper)`
  margin-bottom: 29px;
`;

const GridWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
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
        <Grid container spacing={32}>
          <Grid item xs={6}>
            <Grid container spacing={16}>
              <Grid item xs={2}>
                <FormBlockHeader>New Variable</FormBlockHeader>
              </Grid>

              <Grid item xs={10}>
                <TextInput
                  value={variableName}
                  adornment="Name: "
                  onChange={({target: {value}}) => setVariableName(value)}
                />
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={6}>
            <Grid container spacing={16}>
              <Grid item xs={10}>
                <TextInput
                  value={variableValue}
                  adornment="Value: "
                  onChange={({target: {value}}) => setVariableValue(value)}
                />
              </Grid>

              <Grid item xs={2}>
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
          </Grid>
        </Grid>
      </AddNewVariableWrapper>

      <GridWrapper>
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
      </GridWrapper>

      <Grid container spacing={32}>
        <Grid item xs={6}>
          <EditableList
            title="Application"
            listItemIcon={<IconWeb/>}
            data={mockApplicationsData}
          />
        </Grid>

        <Grid item xs={6}>
          <EditableList
            title="Environment"
            listItemIcon={<IconLayers/>}
            data={mockEnvironmentsData}
          />
        </Grid>
      </Grid>
    </>
  );
};
