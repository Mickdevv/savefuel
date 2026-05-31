package email

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/Mickdevv/savefuel-backend/api"
)

func SendContactEmail(serverCfg *api.ServerConfig) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

		params := contactFormPayload{}

		defer r.Body.Close()

		fmt.Println("Decode email payload")

		err := json.NewDecoder(r.Body).Decode(&params)
		if err != nil {
			api.RespondWithError(w, http.StatusBadRequest, "Payload error, please try again later", err)
			return
		}

		fmt.Println("Send email")
		err = sendEmail(serverCfg, params)
		if err != nil {
			api.RespondWithError(w, http.StatusBadRequest, "Error sending email, please try again later", err)
			return
		}

		w.WriteHeader(http.StatusOK)
	}
}
