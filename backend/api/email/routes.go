package email

import (
	"net/http"

	"github.com/Mickdevv/savefuel-backend/api"
)

func RegisterRoutes(mux *http.ServeMux, serverCfg *api.ServerConfig) {
	mux.HandleFunc("POST /api/email/contact", SendContactEmail(serverCfg))
}
