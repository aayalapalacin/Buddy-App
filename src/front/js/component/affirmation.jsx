import React from "react";

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
};
function affirmation() {
  return (
    <div>
      `${who[whoIndex]} ${action[actionIndex]} ${what[whatIndex]} $
      {when[whenIndex]}`;
      <input
        id="eGenerator"
        type="button"
        value="Excuse Generator"
        onclick={generateExcuse}
      />
    </div>
  );
}

export default affirmation;
