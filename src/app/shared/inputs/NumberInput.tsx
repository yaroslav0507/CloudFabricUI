import React from 'react';
import {shouldUpdate} from 'recompose';
import NumberFormat, { NumberFormatValues } from 'react-number-format';
import { ITextInputProps, TextInput } from './TextInput/TextInput';

interface INumberInputProps extends ITextInputProps {
  shrink?: boolean;
  allowNegative?: boolean;
  decimalScale?: number;
  prefix?: string;
  suffix?: string;
  removeThousandSeparator?: boolean;
  onChange?(event: {target: {value: any}}): void;
}

const NumberInputBase = (props: INumberInputProps) => {
  function NumberFormatCustom(numberInputProps: any) {
    const {
      inputRef, onChange, decimalScale, suffix, allowNegative, removeThousandSeparator, ...other
    } = numberInputProps;

    const thousandSeparator = removeThousandSeparator ? '' : true;

    const onValueChange = ({floatValue}: NumberFormatValues) => {
      onChange({
        target: {
          value: floatValue === undefined ? null : floatValue
        },
      });
    };

    const decimals = decimalScale ? decimalScale : suffix === '%' ? 2 : undefined;

    return (
      <NumberFormat
        {...other}
        suffix={suffix}
        ref={inputRef}
        decimalScale={decimals}
        allowNegative={!!allowNegative}
        fixedDecimalScale={!!decimals}
        onValueChange={values => onValueChange(values)}
        thousandSeparator={thousandSeparator}
        customInput={TextInput}
      />
    );
  }

  return NumberFormatCustom(props);
};

const checkPropsChange = (props: ITextInputProps, nextProps: ITextInputProps) => {
  return true || (
    nextProps.value !== props.value ||
    nextProps.error !== props.error ||
    nextProps.disabled !== props.disabled ||
    nextProps.displayError !== props.displayError
  );
};

export const NumberInput = shouldUpdate(checkPropsChange)(NumberInputBase);
