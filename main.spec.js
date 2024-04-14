const todoService = require("./services/todo.service");
const { getEvenTodos } = require("./main");

jest.mock("./services/todo.service.js");

describe("Main", () => {

    it("should get first 20 even todo", async () => {
        jest.spyOn(todoService, "getTodo").mockImplementation((todoId) => Promise.resolve({
            userId: 1,
            id: todoId,
            title: "quis ut nam facilis et officia qui",
            completed: todoId % 4 === 0
        }));
        
        const todoData = await getEvenTodos();

        expect(todoData.length).toBe(20);
    });
});