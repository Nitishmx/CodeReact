import Item from './Component/Item';
import ItemDate from './Component/ItemDate';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl text-green-600 text-center bg-slate-400">Welcome to react</h1>
      <Item name="nirma"/>
      <ItemDate day="20" month="june" year="1998"/>
      <Item name="SurfExcel"/>
      <ItemDate  day="22" month="july" year="1999"/>
      <Item name="Wheel"/>
      <ItemDate  day="23" month="August" year="2000"/>
    </div>
  );
}

export default App;
