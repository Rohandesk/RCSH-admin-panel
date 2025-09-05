// MUI Imports
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Util Imports
import { getSystemMode } from '@/@core/utils/serverHelpers'
// import { getSystemMode } from '@core'

// Style Imports
import "../app/globals.css"
import "../app/custom.css"

// Generated Icon CSS Imports
import '@/assets/iconify-icons/generated-icons.css'
// import '@/assets/'

export const metadata = {
  title: 'Juice - Plus',
  description:
    'Vuexy - MUI Next.js Admin Dashboard Template - is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.'
}

const RootLayout = async props => {
  const { children } = props

  // Vars
  const systemMode = await getSystemMode()
  const direction = 'ltr'

  return (
    <html id='__next' lang='en' dir={direction} className='h-full' suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/JP_Favicon.webp" />
      </head>
      <body className='h-full flex is-full min-bs-full flex-auto flex-col' suppressHydrationWarning>
        <InitColorSchemeScript attribute='data' defaultMode={systemMode} />
        {children}
        {/* <h1>Rohan jadhav</h1> */}
      </body>
    </html>
  )
}

export default RootLayout
