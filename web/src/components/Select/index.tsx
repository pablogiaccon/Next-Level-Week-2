import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>
}

const Select: React.FC<ISelectProps> = ({ name, label, options,  ...rest }) => {
  return (
    <Container className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest} >

        <option value="" disabled defaultValue="" hidden>Selecione uma opção</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
