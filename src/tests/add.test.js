const add = (a,b) => a + b;

test ("should add 2 numbers", () => {
  const result = add(4,3);

  expect(result).toBe(7); 
});