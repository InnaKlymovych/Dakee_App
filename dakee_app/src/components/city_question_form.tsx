export const CityQuestionForm = (data: any) => {
  const handleAddPlace = (e: any) => {
    e.preventDefault();

    const inputsContainer = document
      .querySelector("#advice-cities")
      ?.querySelector(".inputs-container");

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "City, Country";
    inputsContainer?.appendChild(input);
  };
  return (
    <form id="city-question-form">
      <div className="form-group">
        <label htmlFor="current_city">I currently live in:</label>
        <input
          name="current_city"
          placeholder="City, Country"
          id="current-city-input"
          type="text"
        />
      </div>

      <div id="advice-cities" className="form-group">
        <label htmlFor="">I can give advices for:</label>
        <div className="inputs-container">
          <input placeholder="City, Country" name="name" id="advices_for" type="name" />
        </div>
        <button id="add-city" onClick={handleAddPlace}>
          + Add another place
        </button>
      </div>
    </form>
  );
};

export default CityQuestionForm;
