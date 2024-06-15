import json from "../parser";
import read from "../reader";
test("json fucntion work", async () => {
    let data = await read();
    let value = await json(data);
    let correct = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    expect(value).toEqual(correct);
})