import "../App.css";
import { ExerciseSection } from "./ExerciseSection";

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
          <option value={1}>1. User Info</option>
          <option value={2}>2. Age Restricted</option>
          <option value={3}>3. Plantes</option>
          <option value={4}>4. Counter</option>
          <option value={5}>5. Hide Text</option>
          <option value={6}>6. Box Colors</option>
          <option value={7}>7. Todo List</option>
          <option value={8}>8. Age Prediction</option>
          <option value={9}>9. Random Cat Fact</option>
          <option value={10}>10. Random Excuses</option>
        </select>
      </div>

      <div className="exercise-box">
        <ExerciseSection />
      </div>
    </div>
  );
}

export default App;
