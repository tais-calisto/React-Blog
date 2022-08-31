import React, { useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import comments from '../services/comments'
import {
  Card,
  TextInput,
  Title,
  Textarea,
  Button,
  Checkbox,
} from '@mantine/core'

const CommentsForm = () => {
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorComment, setErrorComment] = useState(false)
  const [localStorage, setlocalStorage] = useState(null)
  const [showSuccessMessage, setshowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  const { postId: slug } = useParams()

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

      comments(commentObj)

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
    <Card
      shadow='sm'
      p='lg'
      radius='md'
      withBorder
      style={{ marginTop: '3rem' }}
    >
      <Title order={3}>Comentários</Title>
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
        mt='sm'
        onClick={() => {
          handleCommentSubmission()
        }}
      >
        Enviar
      </Button>
    </Card>
  )
}

export default CommentsForm
