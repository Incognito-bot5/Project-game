package routes

import (
	"./handlers"
	"github.com/gorilla/mux"
)

func RegisterRoutes(r *mux.Router) {
	r.HandleFunc("/api/register", handlers.RegisterUser).Methods("POST")
	r.HandleFunc("/api/login", handlers.LoginUser).Methods("POST")
	r.HandleFunc("/api/leaderboard", handlers.GetLeaderboard).Methods("GET")
	r.HandleFunc("/api/game/start", handlers.StartGame).Methods("POST")
	r.HandleFunc("/api/game/draw", handlers.DrawCard).Methods("POST")
}
