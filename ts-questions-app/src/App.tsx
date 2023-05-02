import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import QuestionForm from './components/QuestionForm'

interface Props {
  onSubmit: (name: string, question: string) => void;
}
function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  <QuestionForm />
</div>
  )
}

export default App
