// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map((element) => element.toLowerCase());
}

function nameToAttributes() {
  return drivers.map((element) => {
    name = element.split(" ");
    return {firstName: name[0], lastName: name[1]};
  });
}

function attributesToPhrase() {

}
