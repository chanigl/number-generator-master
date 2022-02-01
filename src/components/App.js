import Square from './Square'

const initArrayNumner = () => {
  const array = [];
  for (let i = 0; i < 32; i++) {
    array.push(i);
  }
  return array;
}

const App = () => {
  const arrayNumber = initArrayNumner();

  return (
    arrayNumber.map(item =>
       <Square key={item} number={item} />
    )
  );
}


export default App;
