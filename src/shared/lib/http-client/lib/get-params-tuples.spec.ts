import { getParamsTuples } from './get-params-tuples';

describe('get-params-tuples', () => {
  it('simple params', () => {
    const params = { a: '1', b: '2', c: '3', d: '4' };
    const paramsTuples = [
      ['a', '1'],
      ['b', '2'],
      ['c', '3'],
      ['d', '4'],
    ];
    expect(getParamsTuples(params)).toEqual(paramsTuples);
  });

  it('complex params', () => {
    const params = { a: ['1', '2'], b: ['3', '4'], c: ['5', '6'], d: ['7', '8'] };
    const paramsTuples = [
      ['a', '1'],
      ['a', '2'],
      ['b', '3'],
      ['b', '4'],
      ['c', '5'],
      ['c', '6'],
      ['d', '7'],
      ['d', '8'],
    ];
    expect(getParamsTuples(params)).toEqual(paramsTuples);
  });

  it('mixed params', () => {
    const params = { a: '1', b: ['2', '3'], c: '4', d: ['5', '6'] };
    const paramsTuples = [
      ['a', '1'],
      ['b', '2'],
      ['b', '3'],
      ['c', '4'],
      ['d', '5'],
      ['d', '6'],
    ];
    expect(getParamsTuples(params)).toEqual(paramsTuples);
  });
});
