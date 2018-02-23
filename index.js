var recipes = {
  olive_oil: "2 table spoons",
  onion: "1 medium",
  oregano: "1 teaspoon"
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = object.asssign({key:value})
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
