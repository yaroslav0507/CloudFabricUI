import React from 'react';
import moment, { Moment } from 'moment';
import NumberFormat from 'react-number-format';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import { AxiosResponse } from 'axios';

const TIME_ZONE = 'America/Chicago';
export const DATE_FORMAT = 'YYYY-MM-DD';

export const randomNumber = (floor: number, ceil: number) => Math.ceil(Math.random() * (ceil - floor) + floor);

export const roundCents = (value: number): string | 0 => {
  return value && (Math.round(value * 100) / 100).toFixed(2); // Rounding to the nearest cent
};

const getMoment = (dateString: string, timezone = TIME_ZONE): Moment => {
  const utcM = moment.utc(new Date(dateString));
  if (utcM.format().indexOf('00:00:00Z') !== -1) {
    return utcM;
  }
  if (timezone === 'local') {
    return moment(new Date(dateString));
  }
  return moment.tz(new Date(dateString), timezone);
};

const getLocalMoment = (dateString: string): Moment => {
  return getMoment(dateString, 'local');
};

interface IFormatDateOptions {
  emptyPlaceholder?: string;
  format?: string;
  getMoment?(dateString: string): Moment;
}

export const formatDate = (
  dateString?: string,
  options?: IFormatDateOptions 
): string => {
  const resultOptions = {
    emptyPlaceholder: '-',
    format: 'MM/DD/YYYY',
    getMoment,
    ...options
  };
  if (!dateString) {
    return resultOptions.emptyPlaceholder;
  }
  return resultOptions.getMoment(dateString).format(resultOptions.format);
};

export const formatDateISO = (dateString?: string, options?: IFormatDateOptions): string => {
  return formatDate(dateString, {
    ...options,
    format: DATE_FORMAT
  });
};

export const formatTime = (dateString: string, options?: IFormatDateOptions): string => {
  return formatDate(dateString, {
    ...options,
    format: 'h:mm a'
  });
};

export const formatLocalDate = (dateString: string, options?: IFormatDateOptions): string => {
  return formatDate(dateString, {
    ...options,
    getMoment: getLocalMoment
  });
};

export const formatLocalTime = (dateString: string, options?: IFormatDateOptions): string => {
  return formatTime(dateString, {
    ...options,
    getMoment: getLocalMoment
  });
};

export const formatSeconds = (seconds: number): string => {
  const value = (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/);
  return value ? value[0] : '';
};

export const formatBytes = (bytes: number, decimals: number = 2) => {
  if (!bytes) {
    return '0 Bytes';
  }

  const kb = 1024,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(kb));

  return `${parseFloat((bytes / Math.pow(kb, i)).toFixed(decimals))} ${sizes[i]}`;
};

export const formatCurrency = (value: number | null) => {
  const val = value !== Infinity ? value !== null ? value : '' : 0;

  return (
    <NumberFormat
      value={val}
      prefix="$"
      displayType={'text'}
      thousandSeparator
      decimalScale={2}
    />
  );
};

export const formatPercentage = (value: number) => {
  return (
    <NumberFormat
      value={value * 100}
      suffix="%"
      displayType={'text'}
      thousandSeparator
      decimalScale={2}
    />
  );
};

export const formatPhoneNumber = (phoneNumber: string): string => {
  const USNumber = phoneNumber && phoneNumber.replace(/\D+/g, '').match(/(\d{1})(\d{3})(\d{3})(\d{4})/);
  return USNumber ? `+${USNumber[1]} (${USNumber[2]}) ${USNumber[3]}-${USNumber[4]}` : phoneNumber;
};

export const hexToRGBA = (hex: string, alpha: number = 1) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const flattenArray = ([first, ...rest]): any[] => {
  if (first === undefined) {
    return [];
  } else if (!Array.isArray(first)) {
    return [first, ...flattenArray(rest)];
  } else {
    return [...flattenArray(first), ...flattenArray(rest)];
  }
};

export const resolvePath = (object: any, path: string) => {
  try {
    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    path = path.replace(/^\./, '');           // strip a leading dot
    const pathArray = path.split('.');
    for (let index = 0, n = pathArray.length; index < n; ++index) {
      const pathPart = pathArray[index];
      if (typeof object === 'object' && pathPart in object) {
        object = object[pathPart];
      } else {
        return;
      }
    }
    return object;
  } catch (e) {
    throw e;
  }
};

export const scrollToErrorInput = () => {
  setTimeout(() => {
    const errorField = document.querySelectorAll('[data-error="true"]')[0];

    if (errorField) {
      scrollIntoView(errorField, {
        scrollMode: 'if-needed',
        block: 'center',
        inline: 'center',
      });
    }
  }, 100);
};

export interface IBackEndErrorResponse {
  exception?: any;
  errors: {[key: string]: string[]};
  title: string;
  status: number;
  detail: string;
  instance: string;
}

export const formatBackEndErrors = (response: AxiosResponse<IBackEndErrorResponse>) => {
  let errorString = '';

  if (response && response.data && response.data.errors) {
    const {errors} = response.data;

    Object.keys(errors).forEach(key => {
      if (errors.hasOwnProperty(key) && errors[key].length) {
        errors[key].map(errorText => {
          errorString += `${errorText}\n`;
        });
      }
    });
  }

  return errorString;
};

export const phoneNumberIsValid = (phone: string) => {
  if (!phone) {
    return true;
  }

  let isValid = !!phone.match(/^\+1([2-9][0-9]{2})([2-9][0-9]{2})([0-9]{4})$/g);

  if (isValid && (phone[3] === '1' && phone[4] === '1' || phone[6] === '1' && phone[7] === '1')) {
    isValid = false;
  }

  return isValid;
};

export const toISOStringWithoutTimeZoneOffset = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}T00:00:00`;
};

export const parseJwt = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
};

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const monthNames = (amountOfLastMonths: number = 12): string[] => {
  const today = new Date();
  const result = [] as string[];

  for (let i = amountOfLastMonths; i > 0; i -= 1) {
    const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
    const month = months[d.getMonth()];
    result.push(month);
  }

  return result;
};
