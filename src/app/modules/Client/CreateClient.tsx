import React, {useState} from 'react';
import ImageCloud from '../../../images/Cloud.svg';
import styled from 'styled-components';
import {Button, Grid, Typography} from '@material-ui/core';
import {TextInput} from '../../shared/inputs/TextInput/TextInput';

const FirstCloud = styled(ImageCloud)`
  position: absolute;
  left: 14%;
  top: 25%;
`;

const SecondCloud = styled(ImageCloud)`
  position: absolute;
  left: 50%;
  top: 45%;
`;

const CreateClientForm = styled.div`
  padding: 28px 40px 40px;
  border: 1px solid #E3E5E5;
  background-color: #F8F8F8;
  border-radius: 4px;
  position: absolute;
  max-width: 100%;
  width: 620px;
  height: 148px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const FormWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const CreateClient: React.FC = () => {
  const [clientName, setClientName] = useState('');

  return (
    <div>
      <FirstCloud/>
      <SecondCloud/>
      <CreateClientForm>
        <Typography variant="headline">
          Create a New Client
        </Typography>

        <FormWrapper>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={10}>
              <TextInput
                value={clientName}
                adornment="Name: "
                onChange={({target: {value}}) => setClientName(value)}
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <Button
                disabled={!clientName}
                color="primary"
                variant="contained"
                fullWidth
              >
                Add
              </Button>
            </Grid>
          </Grid>

        </FormWrapper>
      </CreateClientForm>
    </div>
  );
};
