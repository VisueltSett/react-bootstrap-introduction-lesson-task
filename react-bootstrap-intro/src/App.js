import './App.css';
import Heading from'./components/Heading';
import Paragraph from'./components/Paragraph';

function App() {
  return (
    <div className="App">
      <Heading content="this is content" colour="pink" fontSize="48" />
      <Paragraph ptext="inside here you can write whatever you want and no-one will ever read it." 
      colour="violet" fontSize="16"/>
    </div>
  );
}

export default App;
