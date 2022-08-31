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
    <Card shadow='sm' p='lg' radius='md' withBorder mt='lg'>
      <Title order={3}>Enviar comentário</Title>
      <TextInput
        mt='lg'
        label='Nome:'
        ref={nameEl}
        error={errorName ? 'Campo obrigatório' : null}
      />
      <TextInput
        mt='sm'
        label='Email:'
        ref={emailEl}
        error={errorEmail ? 'Campo obrigatório' : null}
      />
      <Textarea
        mt='sm'
        label='Comentário:'
        ref={commentEl}
        error={errorComment ? 'Campo obrigatório' : null}
      />
      <Checkbox
        mt='sm'
        label='Salvar meu e-mail e nome para os próximos comentários'
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
          Comentário enviado para moderação
        </Text>
      )}
    </Card>
  )
}

export default CommentsForm
