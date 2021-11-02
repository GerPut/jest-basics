const reverseString = require('./reversestring')

//Check if function exist
test('reverseString function exists', () => {
    expect(reverseString).toBeDefined()
});

//Test if function work and reverses the string
test('String reverses', () => {
    expect(reverseString('red')).toEqual('der');
});

test('String reverses with uppercase', () => {
    expect(reverseString('Red')).toEqual('der');
});