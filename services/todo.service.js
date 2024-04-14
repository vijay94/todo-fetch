const axios = require("axios");

const TODO_URL = "https://jsonplaceholder.typicode.com/todos";

const getTodo = async (todoId) => {
    try {
        const { data: todo } = await axios.get(`${TODO_URL}/${todoId}`);
        return todo;
    } catch(exception) {
        console.log(`Exception occured during api call`, exception);
        throw new Error("Unable To get Todo Data");
    }
};

module.exports = {
    getTodo
}