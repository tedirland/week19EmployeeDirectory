import React from "react";


function SearchForm(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
                <div className="form-group">
                    <label htmlFor="search">Search:</label>
                    <input
                        // onChange={props.handleInputChange}
                        // value={props.value}
                        name="search"
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        id="search"
                    />
                    <br />
                    <button onClick={props.handleFormSubmit} className="btn btn-secondary btn-sm">
                        Search
        </button>
                </div>
            </form>
        </nav>
    );
}

export default SearchForm;
