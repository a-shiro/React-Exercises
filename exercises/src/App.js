import "./App.css";
import { ExerciseSection } from "./components/ExerciseSection";

function App() {
  return (
    <div>
      <div className="label-box">
        <label>Select Exercise</label>
        <select
          onChange={(event) => {
            document.querySelectorAll("section").forEach((section) => {
              section.className = "";
              section.classList.add("hidden");
            });

            const section = document.getElementById(event.target.value);
            const visibility = section.classList[0];

            section.classList.remove(visibility);
            section.classList.add(
              visibility === "hidden" ? "visible" : "hidden"
            );
          }}
        >
          <option>---</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </select>
      </div>

      <div className="exercise-box">
        <ExerciseSection />
      </div>
    </div>
  );
}

export default App;
