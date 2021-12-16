import Todo from './components/Todo';


function App() {
  return (
    <div className="p-4 bg-gray-800 h-screen">
      <h1 className="text-3xl font-bold text-gray-100">My Todos</h1>
      <Todo text="learn React"/>
      <Todo text="Master React"/>
      <Todo text="Become Good At React"/>
    </div>
  );
}

export default App;
