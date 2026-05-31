package api

import (
	"net/http"

	"github.com/Mickdevv/savefuel-backend/internal/database"
)

type ServerConfig struct {
	JWT_SECRET       string
	DB               *database.Queries
	STATIC_FILES_DIR string

	EMAIL_HOST          string
	EMAIL_PORT          string
	EMAIL_HOST_USER     string
	EMAIL_HOST_PASSWORD string
	EMAIL_TO            string
}

type AppHandler func(cfg *ServerConfig, w http.ResponseWriter, r *http.Request)

func WithCfg(cfg *ServerConfig, handler AppHandler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		handler(cfg, w, r)
	}
}
