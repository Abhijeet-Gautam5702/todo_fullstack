import React from "react";

export default function DisplayList({ items, fetchData }) {
  async function markTodoAsComplete(item) {

    await fetch(`http://localhost:3000/user/todos/${item.id}`, {
      method: "PUT",
    });
    await fetchData();
  }

  return (
    <div>
      {items &&
        items.map((item) => {
          return (
            <div key={Math.random()}>
              <h2>{`${item.title} (id: ${item.id})`}</h2>
              <p>{item.description}</p>
              {item.completed == false ? (
                <button onClick={() => markTodoAsComplete(item)}>
                  Mark Completed
                </button>
              ) : (
                <p>Completed</p>
              )}
            </div>
          );
        })}
    </div>
  );
}
