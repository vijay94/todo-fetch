const axios = require("axios");
const { getTodo } = require("./todo.service");
jest.mock("axios");

describe("Todo service", () => {

    it("should return todo data", async () => {
        const expectedTodo = {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false
        };
        jest.spyOn(axios, "get").mockResolvedValueOnce({
            data: expectedTodo
        });
        const todo = await getTodo(1);
        
        expect(todo).toBe(expectedTodo);
    });

    it("should throw exception when api fails", async () => {
        jest.spyOn(axios, "get").mockRejectedValueOnce();
        
        expect(async () => {
            await getTodo(1);
        }).rejects.toMatchObject(new Error("Unable To get Todo Data"));
    });
});