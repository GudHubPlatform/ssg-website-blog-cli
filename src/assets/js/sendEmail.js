export async function sendEmail(form, formName="Get in touch") {
    const sendRequest = async (form) => {
        const name = form.querySelector('input[name="name"]') ? form.querySelector('input[name="name"]').value || '' : '';
        const company = form.querySelector('input[name="company"]') ? form.querySelector('input[name="company"]').value || '' : '';
        const email = form.querySelector('input[name="email"]').value;
        const phone = form.querySelector('input[name="phone"]') ? form.querySelector('input[name="phone"]').value || '' : '';
        const message = form.querySelector('textarea[name="message"]') ? form.querySelector('textarea[name="message"]').value || '' : '';


        const template = {
            to: 'atlasiko',
            from: 'atlasiko',
            replyTo: email,
            subject: `LOREM ${formName}`,
            html: "<!DOCTYPE html>" +
                "<html>" +
                "<head>" +
                `<title>${formName}</title>` +
                "</head>" +
                "<body>" +
                "<ul>" +
                "<li><strong>" +
                `${formName}</strong>` +
                "</li>" +
                "<li> <strong>" +
                "Name: </strong>" + name +
                "</li>" +
                "<li> <strong>" +
                "Company: </strong>" + company +
                "</li>" +
                "<li> <strong>" +
                "Phone: </strong>" + phone +
                "</li>" +
                "<li> <strong>" +
                "Email: </strong>" + email +
                "</li>" +
                "<li> <strong>" +
                "Message: </strong>" + message +
                "</li>" +
                "<li> <strong>" +
                "Url: </strong>" + window.location.pathname +
                "</li>" +
                "</ul>" +
                "</body>" +
                "</html>"
        };

        try {
            const response = await fetch('https://development.gudhub.com/api/services/send-email', {
                method: 'POST',
                body: JSON.stringify(template),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (response.status == 200) {
                return {
                    status: 'success'
                }
            } else {
                return {
                    status: 'error'
                }
            }
        } catch (error) {
            return {
                status: 'error',
                error
            }
        }
    }

    const validate = (form) => {
        const emailInput = form.querySelector('input[name="email"]');
        const email = emailInput.value;
        const phoneInput = form.querySelector('input[name="phone"]');
        let errorEmail = false;
        let errorPhone = false;
        
        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!email.match(emailRegex)) {
            emailInput.classList.add('error');
            emailInput.parentElement.classList.add('error-input');
            errorEmail = true;
        } else {
            emailInput.classList.remove('error');
            emailInput.parentElement.classList.remove('error-input');
            errorEmail = false;
        }

        if (phoneInput && phoneInput.value) {
            const phone = phoneInput.value;
            let phoneRegex = /^[0-9 ()+-]+$/;
            if (!phone.match(phoneRegex)) {
                phoneInput.classList.add('error');
                phoneInput.parentElement.classList.add('error-input');
                errorPhone = true;
            } else {
                phoneInput.classList.remove('error');
                phoneInput.parentElement.classList.remove('error-input');
                errorPhone = false;
            }
        }
        if (errorPhone || errorEmail) {
            return false;
        } else {
            let errors = document.querySelectorAll('.error-input');
            if (errors.length) {
                for (let error in errors) {
                    errors[error].classList.remove('error-input');
                }
            }
        }

        return true;
    }

    if (validate(form)) {

        const response = await sendRequest(form);
        if (response.status == 'success') {
            form.classList.add('success');
            return true;
        } else {
            if (response.error) {
                console.error(response.error)
            }
            return false;
        }
    }

    

}
