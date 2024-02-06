
import './App.css'
import SignIn from './components/sign_in/sign_in'
import SignUp from './components/sign_up/sign_up'
import { ChakraProvider } from "@chakra-ui/react"
import AuthForm from './components/Main-Template/main-template'
function App() {
  
  return (
    <ChakraProvider>
      <AuthForm children={<SignIn/>} />
      <AuthForm children={<SignUp/>}/>
    </ChakraProvider>
  )
}

export default App
