package main

import "encoding/json"

func Handler(event map[string]interface{}, context interface{}) (map[string]interface{}, error) {
	return map[string]interface{}{
		"statusCode": 200,
		"body":     `{"message":"Hello from RunFabric"}`,
	}, nil
}
