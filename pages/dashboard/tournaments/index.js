import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import DashboardLayout from '../../../src/layouts/dashboard/DashboardLayout'

const Index = () => (
  <DashboardLayout>
    <Card.Group style={{ justifyContent: 'center', margin: 0 }}>
      {new Array.fill(16).map((s,i) => (
        <Card style={{ margin: '2rem;' key={i}}}>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/molly.png"
            />
            <Card.Header>Molly Thomas</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>
              Molly wants to add you to the group dasddasdad sdadsadsa
              dsdasdsadasd
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </DashboardLayout>
)

export default Index
