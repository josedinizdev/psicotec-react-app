import { transporter } from "./mailConnection.js"
import { con } from "./connection.js"

export async function enviar(email){
    await transporter.sendMail({
        from: "PSICOTEC <psicotecweb@gmail.com>",
        to: "psicotecweb@gmail.com",
        subject: `${email.autor}`,
        text:`${email.opiniao}`
    })
    
    const command = `
        INSERT INTO tb_emails(nm_autor, ds_opiniao, dt_envio)
             VALUES (?, ?, ?)`
    email.data = new Date();
    const [lines] = await con.query(command, [email.autor, email.opiniao, email.data])
    email.id = lines.insertId;

    return email
}


