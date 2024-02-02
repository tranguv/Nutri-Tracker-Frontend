
import './App.css'
import SignIn from './components/sign_in/sign_in'
import SignUp from './components/sign_up/sign_up'
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  
  return (
    <ChakraProvider>
      <SignUp />
    </ChakraProvider>
  )
}

export default App
