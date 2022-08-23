import { Component } from "react";
import Gallary from "./components/Gallary/Gallary";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    id: "",
  }

  onClick = (id) => {
    this.setState({
      id,
    });
  }
  onClose = () => {
    this.setState({
      id: "",
    });
  }
  render
    () {
    const { id } = this.state
    return (
      <div>
        { !!id && <Modal onClose={ this.onClose } id={ id } /> }
        <Gallary  onClick={ this.onClick } />
      </div>
    );
  }
}

export default App;
