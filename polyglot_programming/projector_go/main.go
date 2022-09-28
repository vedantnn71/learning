package main

import (
	"fmt"
	"log"

	"github.com/vedantnn71/learning_go/pkg/projector"
)

func main()  {
  opts, err := projector.GetOpts()

  if err != nil {
    log.Fatalf("Unable to get options %v", err)
  }

  config, err := projector.NewConfig(opts)

  if err != nil {
    log.Fatalf("Unable to get the config %v", err)
  }

  fmt.Printf("%+v", *config);
}
