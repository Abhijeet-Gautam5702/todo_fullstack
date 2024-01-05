import React, { useState } from "react";

export default function InputForm({ handleSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
  });

  function handleChange(e) {
    const ele = e.target;
    const key = ele.id;

    setFormData((prevFormData) => {
        // Do not mutate data
      return {
        ...prevFormData,
        [key]: ele.value,
      };
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        id="title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="desc"
        id="desc"
        value={formData.desc}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          const newTodo = formData;
          handleSubmit(newTodo);
          setFormData({ title: "", desc: "" });
        }}
      >
        Add todo
      </button>
    </div>
  );
}
