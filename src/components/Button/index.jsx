import "./styles.css";

export const Button = ({text, onClick, disabled}) => (
  <button className="morePosts" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

// export class Button extends Component {
//     render() {
//         const {text, onClick, disabled} = this.props;
//         return (<button disabled={disabled} className='morePosts' onClick={onClick}>{text}</button>)
//     }
// }
