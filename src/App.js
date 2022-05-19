import "./App.css";
import SearchForm from "./components/SearchForm/SearchForm";
import ThemeHeader from "./components/ThemeHeader/ThemeHeader";

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
      <ThemeHeader />
      <SearchForm />
    </div>
  );
}

export default App;
