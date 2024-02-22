document.getElementById('contact-form').addEventListener('submit', function(event) {

    event.preventDefault();

    // Get mail-box form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    var mailtoLink = 'mailto:martincv941115@gmail.com'
                  + '?subject=' + encodeURIComponent(subject)
                  + '&body=' + encodeURIComponent('Name: ' + name + '\n'
                                                + 'Email: ' + email + '\n'
                                                + 'Subject: ' + subject + '\n'
                                                + 'Message: ' + message);

    // Open email client
    window.location.href = mailtoLink;

});