import React from 'react'
import {
  Form,
  Segment,
  Button,
  Message,
  Header,
  Image,
} from 'semantic-ui-react'
import Link from 'next/link'

const RegisterForm = () => (
  <>
    <Header as="h2" color="teal" textAlign="center">
      <Image
        style={{ marginTop: '2px' }}
        src="/media/logo.svg"
        size="tiny"
        verticalAlign="top"
      />
      Přihlášení
    </Header>
    <Form size="large">
      <Segment stacked>
        <Form.Input
          fluid
          icon="mail"
          iconPosition="left"
          placeholder="E-mail"
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Heslo"
          type="password"
        />
        <Button color="teal" fluid size="large">
          Přihlásit
        </Button>
      </Segment>
    </Form>
    <Message>
      Zapomněli jste heslo?
      <Link href="/password-forget">
        <a> Obnovit</a>
      </Link>
    </Message>
    <Message>
      Nemáte účet?
      <Link href="/register">
        <a> Registrovat</a>
      </Link>
    </Message>
  </>
)

export default RegisterForm
