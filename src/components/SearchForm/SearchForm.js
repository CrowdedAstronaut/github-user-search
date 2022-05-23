// import { SearchIcon } from "../AppIcons/AppIcons";
// import search from "../../assets/icons/icon-search.svg";
import "./SearchForm.css";

export default function SearchForm({
  handleChange,
  handleSubmit,
  searchString,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="form-horizontal"
    >
      <input
        className="form-input"
        type="text"
        placeholder="Search Github username..."
        name="searchString"
        required
        onChange={handleChange}
        value={searchString}
      />{" "}
      <button id="submit-btn" type="submit">
        {" "}
        Search{" "}
      </button>
    </form>
  );
}
