import './App.css';

function App() {
  const grid=(word)=>{
    const len=word.length
    return <>{new Array(6).fill(1).map((e,i)=><div className='flex' key={i}>
      {new Array(len).fill(1).map((e,j)=><div className='box' key={j}></div>)}
    </div>)}</>
  }
  return <div className='App'>{grid("Happy")}</div>
}

export default App;
