// export const ColoredMessage = (props) => {
//   console.log(props)
//   const contentStyle = {
//     color: props.color,
//     fontSize: "20px",
//   }

//   return <p style={contentStyle}>{props.children}</p>;
// };

//分割代入方法
// export const ColoredMessage = (props) => {
  
//   const {color, children} = props;

//   const contentStyle = {
//     color,
//     fontSize: "20px",
//   }

//   return <p style={contentStyle}>{children}</p>;
// };

export const ColoredMessage = ({color, children}) => {

  const contentStyle = {
    color,
    fontSize: "20px",
  }

  return <p style={contentStyle}>{children}</p>;
};
