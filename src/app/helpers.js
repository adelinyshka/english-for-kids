function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function returnIdFromAudio(word) {
  return word.slice(8);
}

function createEnviromentForCategories(what, whereToAdd) {
  const containerFluid = document.createElement('div');
  containerFluid.classList.add('container-fluid');
  what.append(containerFluid);
  whereToAdd.classList.remove('d-none');
  containerFluid.append(whereToAdd);
}

export { shuffle, returnIdFromAudio, createEnviromentForCategories };
