package main

import "fmt"

func returnsError() error {
  return fmt.Errorf("This is an error with value %v", value)
}

type Foo struct {
  return fmt.Errorf("This is an error with value %v", value)
}

func (f *Foo) thisIsOnFoo() error {
  return fmt.Errorf("This is an error with value %v", value)
}

func CreateFoo(fail bool) (*Foo, error) {
  if fail {
    return Foo{}, fmt.Errorf("This is an error with the value ")
  }

  return &Foo{}, nil;
}

func main() {
  foo, err := CreateFoo(false);

  if err != nil {
    return nil, err
  }
}
