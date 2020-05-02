import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { Theme, makeStyles } from '@material-ui/core/styles';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import styles from 'assets/jss/material-kit-react/components/customInputStyle.js';

interface StyleProps {
  disabled: BaseCSSProperties;
  underline: BaseCSSProperties;
  underlineError: BaseCSSProperties;
  underlineSuccess: BaseCSSProperties;
  whiteUnderline: BaseCSSProperties;
  labelRoot: BaseCSSProperties;
  labelRootError: BaseCSSProperties;
  labelRootSuccess: BaseCSSProperties;
  formControl: BaseCSSProperties;
  input: BaseCSSProperties;
  whiteInput: BaseCSSProperties;
}

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export default function CustomInput(props: CustomInputProps) {
  const classes: PropsClasses = useStyles({} as StyleProps);
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success
  } = props;

  const labelClasses = classNames({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white
  });
  const marginTop = classNames(inputRootCustomClasses);
  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white
  });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + ' ' + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses
        }}
        id={id}
        {...inputProps}
      />
    </FormControl>
  );
}

type InputProps = { [key: string]: React.ReactNode };

type CustomInputProps = {
  labelText?: React.ReactNode;
  labelProps?: any;
  id?: string;
  inputProps?: InputProps;
  formControlProps?: { [key: string]: any };
  inputRootCustomClasses?: string;
  error?: boolean;
  success?: boolean;
  white?: boolean;
  [key: string]: any;
};
