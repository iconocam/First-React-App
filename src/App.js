import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer"


function Header() {
  return (<h1>Simple React Application</h1>);
}

function Content(props) {
  return (<p style= {{color: props.color}}>{props.text}</p>);
}





function App() {
  return (
    <>
    <Header />
    <Content color="blue" text="Sniper get down!!"/>
    <Footer />
    
    
    
    </>
  );
}

export default App;
