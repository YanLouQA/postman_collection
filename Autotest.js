// Autotest for https://swapi.dev/ (website about "Star Wars")


// Character:

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("name");
});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Content-Type is present", function () { pm.response.to.have.header("Content-Type");
pm.expect(pm.response.headers.get("Content-Type")).to.eql("application/json");
});

pm.test("Test to check status code is not 404", () => {
  // change 404 to the response code you do not expect
  const expectedStatusCode = 404;

  pm.response.to.not.have.status(expectedStatusCode);
});


// Planet:

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

pm.test("API response contains the expected fields", () => {
  const response = pm.response.json();

  // the line below checks value of the name field is Endor (string).
  pm.expect(response).to.have.nested.property("name", "Endor");

  // the line below checks value of the rotation_period field is 18 (string).
  pm.expect(response).to.have.nested.property("rotation_period", "18");

  // the line below checks value of the orbital_period field is 402 (string).
  pm.expect(response).to.have.nested.property("orbital_period", "402");
});


// Starship:

pm.test("Starship is Sentinel-class landing craft", () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson.name).to.eql("Sentinel-class landing craft");
  pm.expect(responseJson.cost_in_credits).to.eql("240000");
});

pm.test("The response has all properties", () => {
    const responseJson = pm.response.json();
    pm.expect(responseJson.model).to.eql("Sentinel-class landing craft");
    pm.expect(responseJson.max_atmosphering_speed).to.eql("1000");
    pm.expect(responseJson.passengers).to.eql("75");
});

pm.test("Test data type of the response", () => {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.be.an("object");
    pm.expect(responseJson.name).to.be.a("string");
});
