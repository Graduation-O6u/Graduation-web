// import React, { useState } from "react";
// import { Form, Button, FormControl } from "react-bootstrap";
// import "./findjob.css"
// const Search = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (event) => {
//     event.preventDefault();
//     // Implement your search functionality here
//     console.log("Searching for:", searchQuery);
//   };

//   return (
//     <Form inline onSubmit={handleSearch}  className="search-box" >
//       <FormControl
//         type="text"
//         placeholder="job Title or keyword | Location"

//       />
//       <Button variant="outline-success" type="submit" className="submit"><i class="fa fa-search"></i></Button>
//     </Form>
//   );
// };

// export default Search;
import React, { useState } from "react";
import "./findjob.css";
import { SEARCH_USER } from "../../../../../constants";
const Search = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (event) => {
    event.preventDefault();

    console.log("Searching for:", searchQuery);
  };
  return (
    <form onSubmit={handleSearch} className="search-box">
      <input
        type="text"
        placeholder="job Title or keyword | Location"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="text-inp"
      />
      <button type="submit" className="submit">
        <i class="fa fa-search"></i>
      </button>
    </form>
  );
};

export default Search;
