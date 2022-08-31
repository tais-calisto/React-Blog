import React from 'react'
import { Navbar, Text, Input, NavLink, Space, Button } from '@mantine/core'
import { Link, useLocation } from 'react-router-dom'

const Newsletter = () => {
  return (
    <>
      <Navbar.Section>
        <Text>Assine nossa newsletter: </Text>
        <Space h='lg' />
        <Input placeholder='Seu melhor email' />
        <Space h='lg' />
        <Button variant='light' color='gold'>
          Assinar
        </Button>
      </Navbar.Section>
    </>
  )
}

export default Newsletter
