import React from 'react'
import { Navbar, NavLink, Title } from '@mantine/core'
import { Link } from 'react-router-dom'

import { useGlobalContext } from '../utils/context'

const Categories = () => {
  const { categories } = useGlobalContext()

  if (categories) {
    return (
      <>
        <Title order={3} align='center' style={{ color: '#9E7451' }}>
          Categorias
        </Title>
        <Navbar.Section mt='md' grow>
          {categories.map((category) => {
            return (
              <NavLink
                key={category.id}
                label={category.name}
                component={Link}
                to={`category/${category.link}`}
                variant='subtle'
                color='gray'
                active
              />
            )
          })}
        </Navbar.Section>
      </>
    )
  }
}

export default Categories
