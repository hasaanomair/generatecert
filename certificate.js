document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-button').addEventListener('click', function() {
        const username = document.getElementById('username').value;

        const certificateContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Certificate</title>
                <style>
                    body {
                        background-color: #3498db;
                        font-family: Arial, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                    }
                    .certificate-box {
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 5px;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
                        width: 300px;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <div class="certificate-box">
                    <h2>Certificate of Membership</h2>
                    <p>This is to certify that</p>
                    <h3>${username}</h3>
                    <p>has been granted membership on ${new Date().toLocaleDateString()}.</p>
                </div>
            </body>
            </html>
        `;

        const filename = `${username}_certificate.html`;

        const blob = new Blob([certificateContent], { type: 'text/html' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    });
});
