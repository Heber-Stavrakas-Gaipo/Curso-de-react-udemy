import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.handlePClick = this.handlePClick.bind(this); //método necessário para usar a requisição this dentro das respectivas funções
  //   this.handleSwitchName = this.handleSwitchName.bind(this);
  //   // a função handleACLick não utiliza esses métodos pois é uma arrow function, que não possui this internamente, sendo assim obrigada a buscar no seu pai e caindo apenas no this.state

  //   this.state = {
  //     name: "Héber Stavrakas Gaipo" ,
  //     counter: 1,
  //   };
  // }

  // handlePClick() {
  //   const {name} = this.state;
  //   console.log(`<p> clicado e o nome é ${name}`)
  // }

  // handleSwitchName() {
  //   this.setState({name: 'Heber'})
  // }

  // handleAClick = (event) => {
  //   event.preventDefault(); //desabilitar a ação padrão da tag a que é o href
  //   const {counter} = this.state
  //   this.setState({counter: counter + 1})
  // }

  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: "Título 1",
        body: "Corpo 1"
      },
      {
        id: 2,
        title: "Título 2",
        body: "Corpo 2"
      },
      {
        id: 3,
        title: "Título 3",
        body: "Corpo 3"
      },
    ]
  };

  timeoutUpdate = null;

  componentDidMount() {
    this.handleTimeOut();
  }

  componentDidUpdate() {
    this.handleTimeOut()
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeOut = () => {
    const {posts, counter} = this.state
    posts[0].title = "O título mudou!"

    setTimeout(() => {
      this.setState({posts, counter: counter + 1});
    }, 1000)
  }

  render() {
    const {posts, counter} = this.state;

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handleSwitchName}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
          <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
