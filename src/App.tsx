import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen text-4xl">
        <h1>This is the main heading</h1>
        <button>This button</button> <br />
        <button>This button with long text</button>
        <p>Mia Khalifa is my first love</p>
      </main>
    </>
  );
};

export default App;
