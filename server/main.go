package main

import (
	"log"
	"net/http"

	"./routes"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {
	r := mux.NewRouter()

	routes.RegisterRoutes(r)

	handler := cors.Default().Handler(r)

	log.Fatal(http.ListenAndServe(":8080", handler))
}
