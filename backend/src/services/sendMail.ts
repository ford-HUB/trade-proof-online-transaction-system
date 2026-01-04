import path from "path";
import fs from "fs"
import Handlebars from "handlebars";
import { mailerConfig } from "../config/mailer.config";
import 'dotenv/config';

export const sendMail = async (to: string, subject: string, template: string, variables: Record<string, any>): Promise<void> => {
    try {
        const templatePath = path.join(__dirname, '..', 'views', template);
        const templateSource = fs.readFileSync(templatePath, 'utf8');
        const compiledTemplate = Handlebars.compile(templateSource);
        const html = compiledTemplate(variables);

        const response = await mailerConfig.sendMail({
            from: process.env.MAILER_EMAIL,
            to,
            subject,
            html,
        });

        console.log('send mail response: ', response.accepted);
        return

    } catch (error) {
        console.log('send mail server failed: ', error)
    }
}