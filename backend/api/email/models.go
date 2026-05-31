package email

type contactFormPayload struct {
	Name        string `json:"name"`
	Email       string `json:"email"`
	PhoneNumber string `json:"phone_number"`
	Reason      string `json:"reason"`
	Subject     string `json:"subject"`
	Msg         string `json:"message"`
}
