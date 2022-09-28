// const a = [];
// const b = a;
//
// b.push(1);
//
// console.log(a);

// enum TSEnum {
//   Foo,
//   Bar,
//   Baz
// }

type Foo = {
  bar?: string;
}

function doSomething(foo: Foo): boolean {
  if (foo.bar) {
    return true;
  } else {
    return false;
  }
}
