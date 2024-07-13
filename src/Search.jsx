import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";

function Search({ setSearch }) {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Form>
      <InputGroup className="my-3 m-auto w-50 ">
        <Form.Control
          type="text"
          className="border-4"
          onChange={handleInputChange}
          placeholder="Type Your Name"
        />
      </InputGroup>
    </Form>
  );
}

export default Search;
