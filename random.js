const words_length = 42812; // More performant to hardcode this.
const words_as_array = require("./words");

const random = () => {
    const random_word = words_as_array[Math.floor(Math.random() * words_length)];
    return random_word;
};

module.exports = random;