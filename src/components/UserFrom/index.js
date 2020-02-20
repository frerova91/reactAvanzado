import React, { Fragment } from "react";
import { useInputValue } from "../hooks/useImputValue";
import { Form, Input, Button, Title } from "./style";

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  return (
    <Fragment>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input placeholder="Email" {...email} />
        <Input placeholder="Password" type="password" {...password} />
        <Button>{title}</Button>
      </Form>
    </Fragment>
  );
};
