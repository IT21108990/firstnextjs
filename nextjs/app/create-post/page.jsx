'use client'
import {Component, useState} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Form from '@Components/Form'

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false)
    const [Post, setPost] = useState({
        prompt: '',
        tag: '',
    })

    const createPrompt = async (e) => {
    
    }

  return (
    <Form
        type="Create"
        Post={Post}
        setPost={setPost}
        submitting={submitting}
        setSubmitting={setSubmitting}
    />
  )
}

export default CreatePrompt