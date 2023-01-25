export const User = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  );
}