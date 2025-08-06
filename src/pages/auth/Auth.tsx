import { EyeOffOutline, EyeOutline } from '@/shared/ui/icons'
import { useState } from 'react'
import { TextField } from '@/shared/ui'

export function Auth() {
  const [passwordMode, setPasswordMode] = useState<boolean>(true)

  const toggleMode = () => {
    setPasswordMode(!passwordMode)
  }

  return (
    <>
      <h1>Auth Page</h1>
      <div
        style={{
          display: 'flex',
          width: '40vw',
          margin: '0 auto',
          flexDirection: 'column',
        }}
      >
        <div style={{ margin: '10px' }}>
          <TextField
            placeholder={'Search...'}
            search
            // errorMessage={'Some error occurred'}
            // disabled
          />
        </div>

        <div style={{ margin: '10px' }}>
          <TextField
            placeholder={'Enter email'}
            label={'Email'}
            // errorMessage={'Some error occurred'}
            // disabled
          />
        </div>

        <div style={{ margin: '10px' }}>
          <TextField
            type={passwordMode ? 'password' : 'text'}
            placeholder={'Enter password'}
            label={'Password'}
            iconEnd={passwordMode ? <EyeOffOutline /> : <EyeOutline />}
            onEndIconClick={toggleMode}
            // errorMessage={'Some error occurred'}
            // disabled
          />
        </div>
      </div>
    </>
  )
}
