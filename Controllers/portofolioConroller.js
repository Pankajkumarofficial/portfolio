const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport')

// Transport
const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth: {
            api_key: process.env.API_SENDGRID
        }
    })
)

const sendEmailConroller = (req, res) => {
    try {
        const { name, email, msg } = req.body;
        if (!name || !email || !msg) {
            return res.status(500).send({
                success: false,
                message: "Please provide all fields"
            })
        }

        // email matter
        transporter.sendMail({
            to: "pankajkumar05658@gmail.com",
            from: "pankajkumar05658@gmail.com",
            subject: "Thanks for contacting us",
            html: `
            <h5>Detail Information</h5>
            <ul>
                <li>Name: ${name}</li>
                <li>Email: ${email}</li>
                <li>Message: ${msg}</li>
            </ul
            `,
        })

        return res.status(200).send({
            success: true,
            message: 'Your message send successfully'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: true,
            message: 'send Email API error',
            error
        })
    }
}

module.exports = { sendEmailConroller }