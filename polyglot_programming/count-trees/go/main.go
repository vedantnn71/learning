package main

import "fmt"
import "strings"

func getInput() string {
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

func main() {
  treeCount := 0;

  for r, line := range strings.Split(getInput(), "\n") {
    if string(line[r * 3 % len(line)]) == "#" {
      treeCount += 1
    }
  }

  fmt.Printf("treecount %v\n", treeCount)
}
