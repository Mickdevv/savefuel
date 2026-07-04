package email

import (
	"fmt"
	"log"
	"net/smtp"

	"github.com/Mickdevv/savefuel-backend/api"
)

func sendEmail(serverCfg *api.ServerConfig, email contactFormPayload) error {
	smtpAuth := smtp.PlainAuth("", serverCfg.EMAIL_HOST_USER, serverCfg.EMAIL_HOST_PASSWORD, serverCfg.EMAIL_HOST)

	to := []string{serverCfg.EMAIL_HOST_USER}
	msg := []byte(fmt.Sprintf(
		"From: %s\r\nTo: %s\r\nSubject: %s\r\n\r\n%s\r\n",
		serverCfg.EMAIL_HOST_USER,
		email.Email,
		email.Reason,
		email.Msg,
	))

	err := smtp.SendMail(serverCfg.EMAIL_HOST+":"+serverCfg.EMAIL_PORT, smtpAuth, serverCfg.EMAIL_HOST_USER, to, msg)
	if err != nil {
		log.Println("Error sending email to staff")
		return err
	}

	// Confirmation email for user
	// to := []string{email.Email}
	// msg := []byte(fmt.Sprintf(
	// 	"From: %s\r\nTo: %s\r\nSubject: %s\r\n\r\n%s\r\n",
	// 	serverCfg.EMAIL_HOST_USER,
	// 	email.Email,
	// 	"Save-fuel.eu confirmation",
	// 	"Thank you for contacting us. Our team will review your message and get back to you as soon as we can.\r\n",
	// ))
	//
	// err := smtp.SendMail(serverCfg.EMAIL_HOST+":"+serverCfg.EMAIL_PORT, smtpAuth, serverCfg.EMAIL_HOST_USER, to, msg)
	// if err != nil {
	// 	log.Println("Error sending email to user")
	// 	return err
	// }
	// Email to contact@save-fuel.eu
	return nil
}
