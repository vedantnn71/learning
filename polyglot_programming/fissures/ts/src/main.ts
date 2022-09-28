function getInput(): string {
    return `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`
}

type Point = {
  x: number,
  y: number
}

type Line = {
  p1: Point,
  p2: Point
}

function isHorizontalOrVertical(line: Line) {
  return line.p1.x === line.p2.x || line.p1.y === line.p2.y;
}

function parsePoint(p: string) {
  const [x, y] = p.split(",");
  
  return {
    x: +x,
    y: +y
  }
}

function parseLine(line: string) {
  const [p1, p2] = line.split(" -> ");
  
  return {
    p1: parsePoint(p1),
    p2: parsePoint(p2)
  }
}


const lines = getInput()
  .split("\n")
  .map(x => parseLine(x))
  .filter(isHorizontalOrVertical)

console.log(lines);

