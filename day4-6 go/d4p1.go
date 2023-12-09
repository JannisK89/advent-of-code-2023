package main

import (
	"fmt"
	"slices"
	"strings"
)

func d4p1() {
	total := 0
	input := ReadInput()

	for _, line := range input {
		lineTotal := 0
		_, allNumbs, _ := strings.Cut(line, ":")
		winNumbs, myNumbs, _ := strings.Cut(allNumbs, "|")

		winNumbsSlice := strings.Split(strings.TrimSpace(winNumbs), " ")
		myNumbSlice := strings.Split(strings.TrimSpace(myNumbs), " ")

		for _, number := range myNumbSlice {
			if slices.Contains(winNumbsSlice, number) && number != "" {
				if lineTotal < 1 {
					lineTotal = 1
				} else {
					lineTotal *= 2
				}
			}
		}
		total += lineTotal
	}
	fmt.Printf("%d\n", total)
}
