import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<ITextareaProps> = ({ name, label, ...rest }) => {
  return (
    <Container className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </Container>
  );
};

export default Textarea;
