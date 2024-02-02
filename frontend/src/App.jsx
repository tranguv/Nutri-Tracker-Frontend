
import './App.css'
import SignIn from './components/sign_in/sign_in'

import { ChakraProvider } from "@chakra-ui/react"

function App() {
  
  return (
    <ChakraProvider>
      <SignIn />
    </ChakraProvider>
  )
}

export default App
