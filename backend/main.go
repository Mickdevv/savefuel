package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/Mickdevv/savefuel-backend/api"
	"github.com/Mickdevv/savefuel-backend/api/auth"
	"github.com/Mickdevv/savefuel-backend/api/document_categories"
	"github.com/Mickdevv/savefuel-backend/api/documents"
	"github.com/Mickdevv/savefuel-backend/api/email"
	"github.com/Mickdevv/savefuel-backend/internal/database"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func main() {
	godotenv.Load()

	dbURL := os.Getenv("DB_URL")
	dbConn, err := sql.Open("postgres", dbURL)
	if err != nil {
		log.Fatalf("Error connecting to the database: %s", err)
	}

	serverConfig := api.ServerConfig{
		JWT_SECRET:       os.Getenv("JWT_SECRET"),
		DB:               database.New(dbConn),
		STATIC_FILES_DIR: os.Getenv("STATIC_FILES_DIR"),

		EMAIL_HOST:          os.Getenv("EMAIL_HOST"),
		EMAIL_PORT:          os.Getenv("EMAIL_PORT"),
		EMAIL_HOST_USER:     os.Getenv("EMAIL_HOST_USER"),
		EMAIL_HOST_PASSWORD: os.Getenv("EMAIL_HOST_PASSWORD"),
		EMAIL_TO:            os.Getenv("EMAIL_TO"),
	}

	mux := http.NewServeMux()

	fsHandler := http.StripPrefix("/static", http.FileServer(http.Dir(os.Getenv("STATIC_FILES_DIR"))))
	mux.Handle("/static/", fsHandler)

	documents.RegisterRoutes(mux, &serverConfig)
	auth.RegisterRoutes(mux, &serverConfig)
	document_categories.RegisterRoutes(mux, &serverConfig)
	email.RegisterRoutes(mux, &serverConfig)

	serverPort := os.Getenv("SERVER_PORT")
	server := &http.Server{
		Addr:    ":" + serverPort,
		Handler: mux,
	}

	fmt.Println("Server listening on port", serverPort)
	log.Fatal(server.ListenAndServe())
}
