import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
export const Search = ({ onSearch }: { onSearch: any }) => {
  const [findQuery, setFindQuery] = useState("");
  const [whereQuery, setWhereQuery] = useState("");

  // const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // const response = await axios.get(`http://localhost:300/api/search`, {
      //   params: {
      //     find: findQuery,
      //     where: whereQuery,
      //   },
      // });

      // const data = response.data;
      // console.log("data ", data);
      onSearch({ findQuery, whereQuery });
      // navigate('/another-component', { state: { responseData: data } });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <form className="main-search-wrap fl-wrap half-column">
      <div className="main-search-item">
        <span className="search-tag">Find</span>
        <input
          type="text"
          className="form-control radius"
          placeholder="Nail salons, plumbers, takeout..."
          onChange={(e) => setFindQuery(e.target.value)}
        />
      </div>
      <div className="main-search-item">
        <span className="search-tag">Where</span>
        <input
          type="text"
          className="form-control"
          placeholder="San Francisco, CA"
          onChange={(e) => setWhereQuery(e.target.value)}
        />
      </div>
      <div className="main-search-button">
        <button
          className="btn full-width theme-bg text-white"
          type="button"
          onClick={handleSubmit}
        >
          Search<i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
};

export default Search;
