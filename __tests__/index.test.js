import { createList, createTree, filterPath } from '../src/index.js';
import { list } from './fixtures/list.js';

const entrypoint = 'App.jsx';
const target = 'hooks/useAuth';

const tree = createTree(list, entrypoint);

it('Creating tree from list', () => {
  expect(tree).toMatchSnapshot();
});

it('Creating list from tree', () => {
  expect(createList(tree)).toMatchSnapshot();
});

it('Filtering tree by input component', () => {
  expect(filterPath(list, entrypoint, target)).toMatchSnapshot();
});
