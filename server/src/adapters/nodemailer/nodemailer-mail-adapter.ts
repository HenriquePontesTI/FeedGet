import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "651ab28c54cf0e",
      pass: "412f0d32fe66b3"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData): Promise<void> {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: "Henrique Pontes <henrique.pontes021@gmail.com",
            subject,
            html: body
        })
    }
}