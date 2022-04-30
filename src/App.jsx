
import { useEffect, useState } from "react";
import { ColoredMessage as CM } from "./ components/ColoredMessage";

export const App = () => {

  const [num , setNum] = useState(0);

  useEffect(() => {
    alert();
  },[num])

  const onClickButton = () => {
    setNum((prev)=>prev + 1);
  };
  
	return (
		<>
			<h1 style={{color: "red"}}>こんにちは</h1>
      <CM color = "blue">お元気ですか？</CM>
      <CM color = "pink">元気です</CM>
			<button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
		</>
	);
};

