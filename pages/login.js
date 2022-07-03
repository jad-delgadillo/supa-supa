import React from 'react'
import { useEffect } from 'react'
import { supabase } from '../utils/supabase'


const Login = () => {
  useEffect(() => {
    supabase.auth.signIn({
      provider: 'github'
    })
  }, [])
  return (
    <div>Loging in</div>
  )
}

export default Login