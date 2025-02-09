import { useState } from "react"
import { TextInput } from "flowbite-react"
export default function Auto3() {
  const [text, setText] = useState('')

  const handleClick = () => {
    alert(text)
  }
  return (
    <>
      <TextInput 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onClick={handleClick}
      />
    </>
  )
}