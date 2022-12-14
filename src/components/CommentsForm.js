import React, { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import comments from '../services/comments'
import {
  Card,
  TextInput,
  Title,
  Textarea,
  Button,
  Checkbox,
  Text,
} from '@mantine/core'

const CommentsForm = () => {
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorComment, setErrorComment] = useState(false)
  const [showSuccessMessage, setshowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  const { postId: slug } = useParams()

  useEffect(() => {
    const name = window.localStorage.getItem('name')
    const email = window.localStorage.getItem('email')
    if (name && email) {
      storeDataEl.current.checked = true
      nameEl.current.value = name
      emailEl.current.value = email
    }
  }, [])

  const handleCommentSubmission = () => {
    if (!nameEl.current.value) {
      setErrorName(true)
    }
    if (!emailEl.current.value) {
      setErrorEmail(true)
    }
    if (!commentEl.current.value) {
      setErrorComment(true)
    }

    if (
      nameEl.current.value &&
      emailEl.current.value &&
      commentEl.current.value
    ) {
      const { value: name } = nameEl.current
      const { value: email } = emailEl.current
      const { value: comment } = commentEl.current
      const { checked: storeData } = storeDataEl.current

      const commentObj = {
        name,
        email,
        comment,
        slug,
      }

      const submitComment = comments(commentObj)

      if (submitComment) {
        setshowSuccessMessage(true)
      }

      if (storeData) {
        window.localStorage.setItem('name', name)
        window.localStorage.setItem('email', email)
      } else {
        window.localStorage.removeItem('name', name)
        window.localStorage.removeItem('email', email)
      }
    }
  }

  return (
    <Card m='xl' shadow='sm' p='lg' radius='md' withBorder mt='lg'>
      <Title style={{ color: '#9E7451' }} order={3}>
        Enviar coment??rio
      </Title>
      <TextInput
        mt='lg'
        label='Nome:'
        ref={nameEl}
        error={errorName ? 'Campo obrigat??rio' : null}
      />
      <TextInput
        mt='sm'
        label='Email:'
        ref={emailEl}
        error={errorEmail ? 'Campo obrigat??rio' : null}
      />
      <Textarea
        mt='sm'
        label='Coment??rio:'
        ref={commentEl}
        error={errorComment ? 'Campo obrigat??rio' : null}
      />
      <Checkbox
        mt='sm'
        label='Salvar meu e-mail e nome para os pr??ximos coment??rios'
        ref={storeDataEl}
      />
      <Button
        variant='light'
        mt='sm'
        onClick={() => {
          handleCommentSubmission()
        }}
      >
        Enviar
      </Button>
      {showSuccessMessage && (
        <Text size='md' mt='sm'>
          Coment??rio enviado para modera????o
        </Text>
      )}
    </Card>
  )
}

export default CommentsForm
