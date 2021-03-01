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

const ForgetForm = () => (
  <>
    <Header as="h2" color="teal" textAlign="center">
      <Image
        style={{ marginTop: '2px' }}
        src="/media/logo.svg"
        size="tiny"
        verticalAlign="top"
      />
      Obnova hesla
    </Header>
    <Form size="large">
      <Segment stacked>
        <Form.Input
          fluid
          icon="mail"
          iconPosition="left"
          placeholder="E-mail"
        />
        <Button color="teal" fluid size="large">
          Obnovit
        </Button>
      </Segment>
    </Form>
    <Message>
      Máte účet?
      <Link href="/">
        <a> Přihlásit</a>
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

export default ForgetForm
