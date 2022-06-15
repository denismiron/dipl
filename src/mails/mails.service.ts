import { Injectable } from "@nestjs/common";

require("dotenv").config();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");




@Injectable()
export class MailsService {
  async sendMail(dto) {
    try {
      const transport = nodemailer.createTransport({
          pool: true,
          service: "Gmail",
          auth: {
            type: "OAuth2",
            user: "bistroobedbufet2022@gmail.com",
            clientId: "27599866872-h9kr6tngbbu79di57ss24mtv28b8u128.apps.googleusercontent.com",
            clientSecret: "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",
            refreshToken: "1//04KjoESb_osefCgYIARAAGAQSNwF-L9IreDDwzwkGB81PsLDsOEOBH0QguZlWVrTriJBCoWYCI-FVg7I9jGhTLS8fY8Ysyf9HYDI",
            accessToken: "ya29.a0ARrdaM-KZBUFQKcnRV5sGb6LccR-iJ8z8zjM1L3GBo7IunkzeNRJ4N5tUzHq6r2SoZVYzDrJjxgcaI9_IXD4nKkiUionqJ9eahOyJSAhcU7YbXPHW-GbcFg9T42gIFewAibUOX5ePeIA4vft5ax9DMaLXCOE"
          }
        },
        {
          from: `Mail test <bistroobedbufet2022@gmail.com>`
        });
      transport.verify((error, success) => {
        if (error) return console.log(error);
        console.log("Server is ready to take our messages: ", success);
        transport.on("token", token => {
          console.log("A new access token was generated");
          console.log("User: %s", token.user);
          console.log("Access Token: %s", token.accessToken);
          console.log("Expires: %s", new Date(token.expires));
        });
      });
      const mailOptions = {
        to: "ze3ebruhattr@gmail.com",
        subject: "Order",
        text: `Hi`,
        html: `<h1>Пришёл новый заказ </h1>
        <ul>
            <li>Номер телефона - ${dto.phone}</li>
            <li>Имя - ${dto.name}</li>
            <li>Меню - ${dto.menu}</li>
        </ul> 
`
      };
      const mailer = await transport.sendMail(mailOptions);
      return mailer;
    } catch (error) {
      return error;
    }
  }
}
