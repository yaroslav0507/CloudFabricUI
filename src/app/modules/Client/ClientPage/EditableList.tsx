import React, {useState} from 'react';
import {Button, Typography} from '@material-ui/core';
import {TextInput} from '../../../shared/inputs/TextInput/TextInput';
import {FormBlockHeader} from './styles';
import styled from 'styled-components';
import {CFGrid} from '../../../shared/CFGrid/CFGrid';
import {LabelWithIcon} from '../../../shared/components/LabelWithIcon';

interface IEditableListProps {
  title: string;
  listItemIcon?: JSX.Element;
  data: any[];
}

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  padding: 0 10px;
  width: 100%;
`;

export const EditableList: React.FC<IEditableListProps> = (props) => {
  const [appName, setAppName] = useState('');

  return (
    <>
      <InputGroup>
        <FormBlockHeader>
          <Typography variant="headline">{props.title}s</Typography>
        </FormBlockHeader>

        <InputWrapper>
          <TextInput
            value={appName}
            adornment="Name: "
            onChange={({target: {value}}) => setAppName(value)}
          />
        </InputWrapper>

        <Button
          disabled={!appName}
          color="primary"
          variant="contained"
        >
          Add
        </Button>
      </InputGroup>

      <CFGrid
        config={[{
          label: <LabelWithIcon label={`${props.title} Name`}/>,
          render: (row) => <LabelWithIcon label={row.name} icon={props.listItemIcon}/>
        }]}
        data={props.data}
      />
    </>
  );
};
