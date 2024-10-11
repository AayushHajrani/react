import Header from "./components/Header";
import Todoitem from "./components/Todoitem";
import Button from "./components/Button";
import Counter from "./components/Counter";
import "./index.css";
function App() {
  return (
    <div className="todo-item">
      <Counter/>
      <Header />
      <Todoitem text="Sleep"/>
      <Todoitem text="Code"/>
      <Todoitem text="Repeat"/>
      <Button />
    </div>
  );
}

export default App;
