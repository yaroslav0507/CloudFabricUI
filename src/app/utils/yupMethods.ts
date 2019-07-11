import * as yup from 'yup';
import { phoneNumberIsValid, resolvePath } from './commonFunctions';

const getInputName = (path: string) => {
  const name = path.split('.').pop();
  const splitByCapitalLetters = name && name.match(/[A-Z]+[^A-Z]*|[^A-Z]+/g);
  let inputName = splitByCapitalLetters ? splitByCapitalLetters.join(' ') : 'field';
  inputName = `${inputName[0].toUpperCase()}${inputName.substring(1)}`;
  return inputName;
};

const schemas = [
  yup.string,
  yup.number,
  yup.object,
];

schemas.forEach(schema => {
  yup.addMethod(schema, 'isRequired', function(validationSchema: any, fieldName?: string) {
    return this.test(
      'conditional-required',
      `Field is required`,
      function(value: string | number) {
        const { path = '', createError } = this;

        const valueIsMissing = value !== 0 && !value;

        if (valueIsMissing && resolvePath(validationSchema, path)) {
          return createError({
            path,
            message: `${fieldName || getInputName(path)} is required`
          });
        }

        return true;
      }
    );
  });
});

yup.addMethod(yup.string, 'phone', function(fieldName?: string) {
  return this.test(
    'phone-number',
    'Phone number is invalid',
    function(value: string) {
      const { path = '', createError } = this;

      if (value && !phoneNumberIsValid(value)) {
        const name = fieldName || getInputName(path);
        const message = value.length < 12 ? `${name} is too short` : `${name} is invalid`;

        return createError({
          path,
          message
        });
      }

      return true;
    }
  );
});
