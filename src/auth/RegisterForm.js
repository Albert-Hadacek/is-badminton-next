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
      Registrace rodiče
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
          icon="user"
          iconPosition="left"
          placeholder="Jméno a příjmení"
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Heslo"
          type="password"
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Heslo znovu"
          type="password"
        />

        <Button color="teal" fluid size="large">
          Registrovat
        </Button>
      </Segment>
    </Form>

    <Message>
      Máte účet?
      <Link href="/">
        <a> Přihlásit</a>
      </Link>
    </Message>
  </>
)

export default RegisterForm
