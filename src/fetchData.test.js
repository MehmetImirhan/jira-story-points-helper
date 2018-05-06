import {
  getAccountId,
  getRapidViewId,
  addPointsByCategory,
  getStatusCategoryMap,
} from './fetchData';

test('getAccountId: "test.atlassian.net" => "test"', () => {
  expect(getAccountId('test.atlassian.net')).toBe('test');
});

test('getAccountId: "" => ""', () => {
  expect(getAccountId('')).toBe('');
});

test('getRapidViewId: "?rapidView=42" => "42"', () => {
  expect(getRapidViewId('?rapidView=42')).toBe('42');
});

test('getRapidViewId: "?whatever=whatever" => ""', () => {
  expect(getRapidViewId('?whatever=whatever')).toBe(null);
});

test('addPointsByCategory #1', () => {
  expect(addPointsByCategory({}, 'indeterminate', 3)).toEqual({
    indeterminate: 3,
  });
});

test('addPointsByCategory #2', () => {
  expect(addPointsByCategory({ indeterminate: 3 }, 'indeterminate', 2)).toEqual(
    {
      indeterminate: 5,
    }
  );
});

test('addPointsByCategory #3', () => {
  expect(addPointsByCategory({ indeterminate: 3 }, 'new', 1)).toEqual({
    indeterminate: 3,
    new: 1,
  });
});

test('addPointsByCategory #4', () => {
  expect(addPointsByCategory({ new: 2.6, done: 0.5 }, 'done', 0.3)).toEqual({
    new: 2.6,
    done: 0.8,
  });
});

test('getStatusCategoryMap', () => {
  expect(
    getStatusCategoryMap([
      {
        id: 104,
        mappedStatuses: [
          {
            id: '10200',
            statusCategory: { key: 'new' },
          },
          {
            id: '11004',
            statusCategory: { key: 'new' },
          },
          {
            id: '10600',
            statusCategory: { key: 'indeterminate' },
          },
          {
            id: '11005',
            statusCategory: { key: 'new' },
          },
        ],
      },
      {
        id: 105,
        mappedStatuses: [
          {
            id: '10401',
            statusCategory: { key: 'indeterminate' },
          },
          {
            id: '10300',
            statusCategory: { key: 'indeterminate' },
          },
        ],
      },
      {
        id: 134,
        mappedStatuses: [
          {
            id: '11704',
            statusCategory: { key: 'indeterminate' },
          },
        ],
      },
      {
        id: 109,
        mappedStatuses: [
          {
            id: '10501',
            statusCategory: { key: 'done' },
          },
        ],
      },
      {
        id: 111,
        mappedStatuses: [
          {
            id: '10201',
            statusCategory: { key: 'done' },
          },
          {
            id: '5',
            statusCategory: { key: 'done' },
          },
        ],
      },
    ])
  ).toEqual({
    '5': 'done',
    '10200': 'new',
    '10201': 'done',
    '10300': 'indeterminate',
    '10401': 'indeterminate',
    '10501': 'done',
    '10600': 'indeterminate',
    '11004': 'new',
    '11005': 'new',
    '11704': 'indeterminate',
  });
});
