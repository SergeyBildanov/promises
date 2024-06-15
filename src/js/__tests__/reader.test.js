import read from "../reader";
test("read function work", async () => {
    let buffer = await read();
    let bufferView = new Uint16Array(buffer);
    let string = bufferView.reduce((acc, item) => {
       return acc += String.fromCharCode(item);
    }, "");
    let correct = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    expect(string).toEqual(correct);
})