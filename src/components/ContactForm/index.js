import React from "react";

// need to add logic for form submit
function ContactForm() {

    return (
        <div className="myForm">
            <form id="email-form" action="https://formspress.io/xknqqwdl" method="POST">
                <div className="form-group">
                    <label for="form-name">Name</label>
                    <input type="text" name="name" className="form-control" id="form-name"  placeholder="Your Name"></input>
                </div>
                <div className="form-group">
                    <label for="form-email">Email</label>
                    <input type="email" name="replyEmail" className="form-control" id="form-email" placeholder="email@you.com"></input>
                </div><div className="form-group">
                    <label for="message">Message</label>
                    <textarea className="form-control" name="messageBody" id="form-body" rows="3"></textarea>
                </div>
            </form>
            <center><button type="submit" className="btn btn-secondary btn-sm" id="submit">SUBMIT</button></center>
            <p id="form-status"></p>
        </div>
    )
}

export default ContactForm;