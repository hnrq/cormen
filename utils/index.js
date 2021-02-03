const generateRandomArray = (length = 10) => {
  const set = new Set();
  while (set.size !== length) set.add(Math.floor(Math.random() * length * 3));
  return Array.from(set);
}

module.exports = { 
  generateRandomArray
};