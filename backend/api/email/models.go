package email

type contactFormPayload struct {
	Name        string `json:"name"`
	Company     string `json:"company"`
	Email       string `json:"email"`
	PhoneNumber string `json:"phone_number"`
	Reason      string `json:"reason"`
	Msg         string `json:"message"`
}
