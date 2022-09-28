package main

import "strings"
import "strconv"
import "fmt"
import "log"

type Item struct {
  name string
  cost int
  currency string 
}

func input() string {
  return `crocks: 8$
shoes: 27$
perfume: 91$
macbook: 1499$`
}

func parseItem(line string) (*Item, error) {
  // crocks: 8$
  item := strings.Split(line, ": ")
  price := strings.Split(item[1], "$")

  cost, err := strconv.Atoi(price[0])

  if err != nil {
    return nil, err
  }

  return &Item {
    name: item[0],
    cost: cost,
    currency: "$",
  }, nil
}

func main() {
  items := []*Item{}

  for _, i := range strings.Split(input(), "\n") {
    item, err := parseItem(i)
    
    if err != nil {
      log.Fatal("ooooooops! can't process input") 
    } 

    items = append(items, item)
  }

  totalCost := 0

  for _, i := range items {
    item := *i;
    totalCost += item.cost

    fmt.Printf("Cost of %s = %d%s\n", item.name, item.cost, item.currency)
  }
  
  fmt.Printf("\n ***** Hence, total bill = %d ***** \n", totalCost)
}
