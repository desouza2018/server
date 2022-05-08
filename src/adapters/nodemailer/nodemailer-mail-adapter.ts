import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c499d23231b1b8",
      pass: "89fff9d53517de"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
             to: 'Adelson de Souza <desouzaadelson2018@outlook.com>',
             subject,
             html: body
        });
    };
}
