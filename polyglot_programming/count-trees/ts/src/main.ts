const getInput = (): string => {
  return `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
}

enum Thing {
  Tree,
  Snow
}

const things = getInput().
  split("\n").
  map(x => x.split("").map(x => x === "." ? Thing.Snow : Thing.Tree))

const colLen = things[0].length;
let treeCount = 0;


things.forEach((thingRow, index) => {
  if (thingRow[(index * 3) % colLen] === Thing.Tree) {
    treeCount++;
  }
});

console.log("Tree Count: ", treeCount);

