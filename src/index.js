import filterDeep from 'deepdash/filterDeep';

export function filterPath(modules, entrypoint, target) {
  const tree = createTree(modules, entrypoint);

  const foundPaths = filterDeep(
    tree,
    (node) => node.name.includes(target),
    { childrenPath: ['children'] },
  );

  return createList(foundPaths);
}

export function createTree(list, entrypoint) {
  function create(children) {
    if (children === 0) {
      return null;
    }

    return children.map((modulePath) => ({
      name: modulePath,
      children: create(list[modulePath]),
    }));
  }

  return {
    name: entrypoint,
    children: create(list[entrypoint]),
  };
}

export function createList(tree) {
  const result = {};

  function traverse(node) {
    if (!node) return;

    result[node.name] = node.children.map((c) => c.name);

    node.children.forEach((n) => traverse(n));
  }

  traverse(tree);

  return result;
}
