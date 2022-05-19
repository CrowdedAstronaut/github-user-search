import "./App.css";
import SearchForm from "./components/SearchForm/SearchForm";

function handleChange(event) {
  // setSearchString(event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  // getImages(searchString);
}

function App() {
  return (
    <div className="container">
      <h1 className="site-title">devfinder</h1>
      <SearchForm />
    </div>
  );
}

export default App;
