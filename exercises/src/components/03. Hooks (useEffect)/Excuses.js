import { useState, useEffect } from "react";

export const Excuses = () => {
  const [excuse, setExcuse] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (category) {
      fetch(`https://excuser-three.vercel.app/v1/excuse/${category}`)
        .then((res) => res.json())
        .then((data) => setExcuse(data[0].excuse));
    }
  }, [category]);

  return (
    <div>
      <h1>Choose a category of excuse</h1>
      <button
        onClick={() => {
          setCategory("party");
        }}
      >
        Party
      </button>
      <button
        onClick={() => {
          setCategory("family");
        }}
      >
        Family
      </button>
      <button
        onClick={() => {
          setCategory("office");
        }}
      >
        Office
      </button>
      <h1>Excuse: {excuse}</h1>
    </div>
  );
};
