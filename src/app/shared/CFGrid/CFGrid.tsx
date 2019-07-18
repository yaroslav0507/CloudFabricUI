import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import styled from 'styled-components';

interface IXTableCell<T> {
  label?: any;
  key?: string;
  render?(item: T): any;
}

interface IXTableProps<M> {
  config: Array<IXTableCell<M>>;
  data: any[];
}

const CFGridHead = styled(TableHead)`
  background-color: #F8F8F8;
`;

export const CFGrid: React.FC<IXTableProps<any>> = (props) => {
  return (
    <Table>
      <CFGridHead>
        <TableRow>
          {props.config.map(item => (
            <TableCell>
              {item.label}
            </TableCell>
          ))}
        </TableRow>
      </CFGridHead>

      <TableBody>
        {props.data.map(row => (
          <TableRow>
            {props.config.map(config => (
              <TableCell>
                {
                  config.render ? config.render(row) : config.key && row[config.key]
                }
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
