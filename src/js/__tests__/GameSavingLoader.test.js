import GameSavingLoader from "../GameSavingLoader";

test("GameSaving loading", async ()=>{
    let correct = {
        id: 9,
        created: 1546300800,
        userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 }
      }
    const gameSaving = await GameSavingLoader.load();
    expect(gameSaving).toEqual(correct);
})