function findMatching(collection, name) {
  return collection.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}
function fuzzyMatch(collection, letters) {
  return collection.filter(function (driverName) {
    return driverName.startsWith(letters);
  })
}

function matchName(collection, name) {
  return collection.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
