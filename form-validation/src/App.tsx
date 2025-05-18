import type { FormEvent } from "react"

function App() {
  function formSubmitHandler(event: FormEvent) {
    
  }

  return (
  <>
    <form action="" noValidate onSubmit={formSubmitHandler}>
      <input type="text" required />
      <button type="submit">submit</button>
    </form>
  </>
  )
}

export default App
