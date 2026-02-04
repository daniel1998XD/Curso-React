export default function TabButton({ children, isSelected, ...props }) {
//neste caso o ...props serve para pegar todos os parametros de uma tag
//por exemplo onClick, className, etc, não precisando passar um por um


    // function handleClick(){
    //     console.log("Hello world!")
    // }
  return (
    <li>
      <button className={isSelected ? 'active': undefined} {...props}>{children}</button>
       {/* a props dos parametros é chamada com os 3 pontinhos */}
    </li>
  );
}
