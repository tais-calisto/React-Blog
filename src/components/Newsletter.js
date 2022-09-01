import React from 'react'
import {
  Navbar,
  Title,
  Input,
  Space,
  Button,
  Text,
  Center,
} from '@mantine/core'

const Newsletter = () => {
  return (
    <>
      <Navbar.Section>
        <Title order={3} align='center' style={{ color: '#9E7451' }}>
          Participe de nossa Newsletter
        </Title>
        <Text align='center' size='sm' color='dimmed'>
          {`E mantenha-se atualizado(a) com conteúdos de qualidade:`}
        </Text>
        <Space h='lg' />
        <Input placeholder='Seu melhor email' />
        <Space h='lg' />
        <Center>
          <Button variant='light' color='gold'>
            Participar
          </Button>
        </Center>
      </Navbar.Section>
    </>
  )
}

export default Newsletter
