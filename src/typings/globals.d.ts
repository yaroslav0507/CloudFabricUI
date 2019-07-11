declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

import { StringSchema, NumberSchema, ObjectSchema } from 'yup';

declare module 'yup' {
  interface StringSchema {
    phone(fieldName?: string): StringSchema;
    isRequired(validationSchema: any, fieldName?: string): StringSchema;
  }

  interface NumberSchema {
    isRequired(validationSchema: any, fieldName?: string): NumberSchema;
  }

  interface ObjectSchema<T> {
    isRequired(validationSchema: any, fieldName?: string): ObjectSchema<T>;
  }
}
