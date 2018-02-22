var recipes = {
  olive_oil: "2 table spoons",
  onion: "1 medium",
  oregano: "1 teaspoon"
}

function updateObjectWithKeyAndValue(object, key, value) {
  object.assign({key: value})
  return object
}
