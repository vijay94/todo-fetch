const { getEvenTodos } = require("./main");

(async () => {
    console.table(await getEvenTodos());
})();