import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gsap from 'gsap';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import Field from './Field';
import Label from './Label';
import Input from './Input';
import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';
import { validate } from '../../helpers/validate';

const StyledForm = styled.form`
  margin: 20px 0;
  @media (min-width: 600px) {
    margin: 50px auto;
    width: 80%;
  }
  @media (min-width: 1024px) {
    margin: 0;
    width: 100%;
  }
`;

const TextArea = styled(Input)`
  height: 200px;
  resize: none;
`;

const StyledButton = styled(Button)`
  margin: 20px 0 20px auto;
`;

const ErrorMessage = styled(Paragraph)`
  color: red;
`;

const Form = ({ newsletter, formAction }) => {
  const animeForm = useRef(null);

  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    _replyto: '',
    message: '',
  });

  const [result, setResult] = useState(null);

  const updateForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError(false);
  };

  const handleSubmit = async e => {
    const errorMessage = validate(form, newsletter);
    if (errorMessage) {
      e.preventDefault();
      setError(errorMessage);
      return;
    }

    if (newsletter) {
      e.preventDefault();
      const newsletterResult = await addToMailchimp(form._replyto);
      // setResult(newsletterResult.msg);
      setResult(newsletterResult.result);

      console.log(result);
    }
  };

  useEffect(() => {
    !newsletter &&
      gsap.fromTo(
        animeForm.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, delay: 1.5, duration: 0.6 }
      );
  }, [newsletter]);

  return (
    <StyledForm
      action={error ? null : formAction}
      method="POST"
      onSubmit={handleSubmit}
      ref={animeForm}
    >
      <Field>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="_replyto" onChange={updateForm} />
      </Field>
      {!newsletter && (
        <Field>
          <Label htmlFor="message">Your message</Label>
          <TextArea
            as="textarea"
            name="message"
            id="message"
            type="text"
            onChange={updateForm}
          />
        </Field>
      )}
      <StyledButton big={newsletter} type="submit">
        {newsletter ? 'Subscribe' : 'Send'}
      </StyledButton>
      {error && (
        <ErrorMessage small align="right">
          {error}
        </ErrorMessage>
      )}
      {result && (
        <Paragraph align="right">
          {result === 'success'
            ? 'Thanks for subscribing!'
            : 'You already subscribe our list.'}
        </Paragraph>
      )}
    </StyledForm>
  );
};

const { bool, string } = PropTypes;

Form.propTypes = {
  newsletter: bool,
  formAction: string,
};

export default Form;
