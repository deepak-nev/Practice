import React,{createRef} from 'react'

class App extends React.Component{
  constructor(){
    super();
    this.nameRef=createRef();
  }
  componentDidMount(){
   // console.warn(this.inputRef.current.value="100")
  }
  getChange(){
    console.warn(this.nameRef.current.value)
    this.nameRef.current.style.color="red"
    this.nameRef.current.style.backgroundColor="black"
    
  }

  render(){
    return(
      <div>
      <h2>Use Ref hooks</h2>
      <input type="text" placeholder='Enter your name' ref={this.nameRef}></input>
      <button onClick={()=>this.getChange()}>Click me</button>
      </div>
    )
    
  }
  
}

export default App
