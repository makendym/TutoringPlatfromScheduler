import "./App.css";
import Calendar from "./components/Calendar";
import Schedule from "./components/Schedule";
function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Computer Science Tutoring</h1>
        <p>Tutoring appointment scheduling</p>
      </div>{" "}
      <Schedule/>
    </div>
  );
}

export default App;
