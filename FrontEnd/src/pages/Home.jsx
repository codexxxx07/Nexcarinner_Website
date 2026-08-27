
import { UserButton } from '@clerk/clerk-react'
import { SignInButton, SignUpButton, useAuth } from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'




const Home = () => {
  const { isLoaded, isSignedIn } = useAuth()
  if (!isLoaded) {
    return <p>Loading...</p>
  }

  if (isSignedIn) {
    return <Navigate to="/app" replace />
  }


  return (
    <>
    <main style={{ padding: '32px' }}>
      <h1>Welcome to my app</h1>
      <br />

      <h2>Please sign in or create an account to continue.</h2>
<div className="auth-buttons">

        <SignInButton mode="redirect">
          <button type="button">Sign In</button>
        </SignInButton>
        <br />
        <br />

        <SignUpButton mode="redirect">
          <button type="button">Sign Up</button>
        </SignUpButton>
      </div>
    </main>
   

     
    </>
  )
}

export default Home
