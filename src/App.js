import { useState } from "react";
import Gallary from "./components/Gallary/Gallary";
import Modal from "./components/Modal/Modal";




const App = () => {
  // const [password, setId] = useState("")
  // const [state, setName] = useState("")
  // const [name, setPassword] = useState("")

  const [id, setId] = useState("")


  const onClick = (value) => setId(value)
  const onClose = () => setId("")

  return (
    <div>
      { !!id && <Modal onClose={ onClose } id={ id } /> }
      <Gallary onClick={ onClick } />
    </div>
  );
}

export default App;




// class App extends Component {
//   state = {
//     id: "",
//   }

//   onClick = (id) => {
//     this.setState({
//       id,
//     });
//   }
//   onClose = () => {
//     this.setState({
//       id: "",
//     });
//   }
//   render
//     () {
//     const { id } = this.state
//     console.log(this.state)
//     return (
//       <div>
//         { !!id && <Modal onClose={ this.onClose } id={ id } /> }
//         <Gallary onClick={ this.onClick } />
//       </div>
//     );
//   }
// }

// export default App;
