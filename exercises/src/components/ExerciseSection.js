import { User } from "./01. Components and Props/User";
import { Job } from "./01. Components and Props/Job";
import { AgeRestricted } from "./01. Components and Props/AgeRestricted";
import { Planets } from "./01. Components and Props/Planets";
import { Counter } from "./02. Hooks (useState)/Counter";
import { HiddenText } from "./02. Hooks (useState)/HiddenText";
import { BoxColors } from "./02. Hooks (useState)/BoxColors";
import { TodoList } from "./02. Hooks (useState)/TodoList";
import { AgePrediction } from "./03. Hooks (useEffect)/AgePrediction";
import { CatFact } from "./03. Hooks (useEffect)/CatFact";

export const ExerciseSection = () => {
  return (
    <div>
      <section className="hidden" id={1}>
        <div>
          <User name="Shiro" age={21} email="shiro@gmail.com" />
          <Job salary={90000} position="Junior Front-End" company="Google" />
        </div>
      </section>

      <section className="hidden" id={2}>
        <div>
          <AgeRestricted />
        </div>
      </section>

      <section className="hidden" id={3}>
        <div>
          <Planets />
        </div>
      </section>

      <section className="hidden" id={4}>
        <Counter />
      </section>

      <section className="hidden" id={5}>
        <HiddenText />
      </section>

      <section className="hidden" id={6}>
        <BoxColors />
      </section>

      <section className="hidden" id={7}>
        <TodoList />
      </section>

      <section className="hidden" id={8}>
        <AgePrediction />
      </section>

      <section className="hidden" id={9}>
        <CatFact />
      </section>
    </div>
  );
};
