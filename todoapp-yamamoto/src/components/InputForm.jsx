import React, { useState } from 'react'


export const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //タスクを追加する。
    setTaskList([
      ...taskList,//スプレッド構文(以前の配列の情報)
      {
        id: taskList.length,
        text: inputText,//追加する情報
        completede: false
      }
    ]);
    console.log(taskList);
    //入力した文字を消す
    setInputText("");
  }

  const handleChange = (e) => {
  setInputText(e.target.value);//inputに入力された文字を取得したものをsetInputTextが取ってきてる
  }

  return (
    <div className="inputForm">
      <form onSubmit={ handleSubmit }>
        <input type="text" onChange={ handleChange } value={ inputText }/>
        <button>
        <i className="fa-solid fa-plus fa-rotate-90"></i>
        </button>
      </form>
    </div>
  )
}
