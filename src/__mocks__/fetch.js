// Mocking a Fetch API. Since Fetch is a global function attached to the window object to mock it, we can attach it to the global object.
export default function() {
  return Promise.resolve({
    json: () => {
      Promise.resolve([
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz"
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv"
        }
      ]);
    }
  });
}
