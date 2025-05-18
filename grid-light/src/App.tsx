import { useState } from "react"

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(false));

  function toggleBox(index: number) {
    debugger
    setBoxes(boxes => {
      debugger
      let alt = [...boxes];
      alt[index] = !alt[index];
      return alt;
    })
  }

  return (<>
      <div className="boxes">
          {boxes.map((box, index) => <span className={`item ${box ? 'active' : ''}`} key={index} onClick={() => toggleBox(index)}></span>)}
      </div>
  </>)
}

export default App
