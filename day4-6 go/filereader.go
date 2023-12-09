package main

import (
	"os"
	"strings"
)

func ReadInput() []string {
	input, err := os.ReadFile("./input.txt")

	if err != nil {
		panic(err)
	}

	inputSlice := strings.Split(string(input), "\n")
	inputSlice = inputSlice[:len(inputSlice)-1]
	return inputSlice
}
