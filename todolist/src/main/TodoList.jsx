import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  //임시 데이터를 생성
  // todoItems 임시 데이터를 가지고
  // TodoItem리스트를 생성하는 코드
  const todoItems = [
    { text: "오늘할일", checked: false },
    { text: "오늘약속", checked: true },
    { text: "과제", checked: false },
    { text: "숙제", checked: true },
    { text: "HomeWork", checked: false }
  ];
  //todoItems(배열)을 순회하면서 각각의 요소를 item 변수에 담고
  //item 변수에 담긴 데이터를 TodoItem에게 text변수에 담아서
  //전달 하면서 TodoItem을 리스트 개수만큼 생성하고
  //todoList에 담기
  const todoList = todoItems.map(({ text, checked }) => (
    <TodoItem text={text} checked={checked} />
  ));
  return (
    <div>
      <b></b>
      {todoList}
    </div>
  );
};

export default TodoList;
