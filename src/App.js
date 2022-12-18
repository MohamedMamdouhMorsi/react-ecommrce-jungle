
import Iapp from './componets/Iapp';
function App() {
  let product = {};
  const onProductClick =(p)=>{
    product = p;
  }
  return (
    <div className="App">
      <Iapp />
    </div>
  );
}

export default App;
