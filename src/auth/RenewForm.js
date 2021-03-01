import React from 'react'
import { Form, Segment, Button, Header, Image, Icon } from 'semantic-ui-react'

const RenewForm = () => (
  <>
    <Header as="h2" color="teal" textAlign="center">
      <Image
        style={{ marginTop: '2px' }}
        src="/media/logo.svg"
        size="tiny"
        verticalAlign="top"
      />
      Nové heslo
    </Header>
    <Form size="large">
      <Segment stacked>
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Nové heslo"
          type="password"
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Nové heslo znovu"
          type="password"
        />
        <Button color="teal" fluid size="large">
          Uložit
        </Button>
      </Segment>
    </Form>
  </>
)

export default RenewForm
