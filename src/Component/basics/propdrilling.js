//Prop drilling is a term used to describe the process of passing down props (short for properties) through multiple levels of React components in order to reach a child component that needs to use that data. Prop drilling can make code harder to manage, as it requires many components to be aware of the data being passed down, even if they don't need it.
function App() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <Header count={count} />
        <Main count={count} setCount={setCount} />
        <Footer count={count} />
      </div>
    );
  }
  
  function Header(props) {
    return (
      <header>
        <h1>My App</h1>
        <p>Count: {props.count}</p>
      </header>
    );
  }
  
  function Main(props) {
    return (
      <main>
        <p>Count: {props.count}</p>
        <button onClick={() => props.setCount(props.count + 1)}>Increment</button>
      </main>
    );
  }
  
  function Footer(props) {
    return (
      <footer>
        <p>Count: {props.count}</p>
      </footer>
    );
  }
  