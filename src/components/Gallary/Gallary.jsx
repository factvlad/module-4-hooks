import { useEffect, useState } from "react";


function Gallary({ onClick }) {

  const [goods, setGoods] = useState([])

  useEffect(() => {
    function fetchHeros() {
      fetch(`https://62becfba0bc9b125615fd0f7.mockapi.io/api/products`)
        .then((result) => result.json())
        .then((res) =>
          setGoods(
            prevGoods => [...prevGoods, ...res]
          )
        );
    }
    fetchHeros()
  }, [])

  return (
    <ol>
      { goods.map((item) => (
        <li key={ item.name } onClick={ () => onClick(item.id) }>
          { item.name } - { item.price }
        </li>
      )) }
    </ol>
  )
}

export default Gallary;

// class Gallary extends Component {
//   state = {
//     goods: [],
//   };

//   componentDidMount(){
//     this.fetchHeros()
//   }

//   fetchHeros() {
//     fetch(`https://62becfba0bc9b125615fd0f7.mockapi.io/api/products`)
//       .then((result) => result.json())
//       .then((goods) =>
//         this.setState({
//           goods
//         })
//       );
//   }

//   render() {
//     const { goods } = this.state;
//     return (
//       <ol>
//         {goods.map((item) => (
//           <li key={item.name} onClick={() => this.props.onClick(item.id)}>
//             {item.name} - {item.price}
//           </li>
//         ))}
//       </ol>
//     );
//   }
// }

// export default Gallary;
