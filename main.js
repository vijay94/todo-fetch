const { getTodo } = require("./services/todo.service");

const getEvenTodos =  async () => {
    const apis = Array.from(Array(20).keys()).map((key) => getTodo((key + 1) * 2));
    try {
        const todoData = await Promise.all(apis);
        return todoData;
    } catch(exception) {
        console.error("Exception getting todo data", exception);
        return undefined;
    }
};

module.exports = {
    getEvenTodos
};