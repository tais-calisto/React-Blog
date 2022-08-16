import React from 'react'
import { Navbar, Text, Input, NavLink, Space, Button } from '@mantine/core'
import { Link, useLocation } from 'react-router-dom'

const Newsletter = () => {
  return (
    <>
      <Navbar.Section>
        {/* Newsletter */}
        <Text>Assine nossa newsletter</Text>
        <Space h='lg' />
        <Input placeholder='Seu melhor email' />
        <Space h='lg' />
        <Button variant='light'>Assinar</Button>
      </Navbar.Section>
    </>
  )
}

export default Newsletter
