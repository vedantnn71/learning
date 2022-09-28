import { Operation } from "../config";
import { Projector } from "../projector";

function getData() {
  return {
    projector: {
      "/": {
        "foo": "bar1",
        "fem": "is_great",
      },
      "/foo": {
        "foo": "bar2",
      },
      "/foo/bar": {
        "foo": "bar3",
      },
    }
  }
}

function getProjector(pwd: string, data = getData()): Projector {
  return new Projector({
    args: [],
    operation: Operation.Print,
    pwd,
    config: "Hello, fem",
  }, data);
}

test('getValueAll', function() {
  const proj = getProjector("/foo/bar");

  expect(proj.getValueAll()).toEqual({
    "fem": "is_great",
    "foo": "bar3",
  })
})

test('getValue', function() {
  let proj = getProjector("/foo/bar");
  expect(proj.getValue('foo')).toEqual("bar3");

  proj = getProjector("/foo");
  expect(proj.getValue("foo")).toEqual("bar1");
  expect(proj.getValue("fem")).toEqual("is_great");
})

test('setValue', function() {
  let data = getData();
  let proj = getProjector("/foo/bar");

  proj.setValue('foo', 'baz');
  expect(proj.getValue('foo')).toEqual('baz');

  proj.setValue('fem', 'is_better_than_great');
  expect(proj.getValue('fem')).toEqual('is_better_than_great');

  proj = getProjector('/', data);
  expect(proj.getValue('fem')).toEqual('is_great');
})

test('removeValue', function() {
  const proj = getProjector('/foo/bar');

  proj.removeValue('fem');
  expect(proj.getValue('fem')).toEqual('is_great');

  console.log('=======================================')
  proj.removeValue('foo');
  console.log(proj.getValueAll());
  console.log('=======================================')

  expect(proj.getValue('foo')).toEqual('bar2');
})
