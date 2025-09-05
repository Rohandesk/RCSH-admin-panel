// Component Imports
// import Login from '@/views/Login'
import Login from "@/app/page"

// Server Action Imports
import { getServerMode } from '@/@core/utils/serverHelpers'

export const metadata = {
  title: 'Login',
  description: 'Login to your account'
}

const LoginPage = async () => {
  // Vars
  const mode = await getServerMode()

  return <Login mode={mode} />
}

export default LoginPage
