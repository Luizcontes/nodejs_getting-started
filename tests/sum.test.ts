import sum from '../src/sum.ts';

test('adds two numbers', () => {
    expect(sum(2, 2)).toBe(4);
});

test('adds two numbers', () => {
    expect(sum(1, 2)).toBeGreaterThan(0);
});