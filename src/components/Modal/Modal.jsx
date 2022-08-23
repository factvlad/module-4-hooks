import { Component } from "react";
import { createPortal } from "react-dom";
import s from "./modal.module.css"

const modalRoot = document.querySelector("#modal-root")

class Modal extends Component {

  state = {
    goods: {},
  }

  componentDidMount() {
    window.addEventListener("keydown", this.onCloseModal)
    this.fetchGoodsById(this.props.id)
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.onCloseModal);
  }

  fetchGoodsById(id) {
    fetch(`https://62becfba0bc9b125615fd0f7.mockapi.io/api/products/${id}`)
      .then((result) => result.json())
      .then((goods) =>
        this.setState({
          goods
        })
      )
  }



  onCloseModal = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };
  render() {
    const { goods } = this.state

    return createPortal
      (
        <div
          style={ {
            position: "fixed",
            top: "0",
            left: "0",
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          } }
        >
          { Object.keys(goods).length ?
            <div className={s.wrapper}>
              <span>{ goods.name }</span>
              <span>{ goods.description }</span>
              <span>{ goods.price }</span>
              <span>{ goods.createdAt }</span>
            </div> :
            <h1>Goods not found</h1> }
        </div>
        , modalRoot

      );
  }
}

export default Modal;
