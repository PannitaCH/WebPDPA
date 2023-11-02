document.addEventListener('DOMContentLoaded', function () {
    // Check if the user has previously accepted cookies
    if (!localStorage.getItem('cookieConsent')) {
        // Show the cookie consent widget
        document.getElementById('cookieConsent').style.display = 'block';

        // Add event listener to the "Accept Cookies" button
        document.getElementById('acceptCookies').addEventListener('click', function () {
            // Set a flag in localStorage indicating that the user has accepted cookies
            localStorage.setItem('cookieConsent', true);

            // Hide the cookie consent widget
            document.getElementById('cookieConsent').style.display = 'none';
        });

        // Add event listener to the "Customize Cookies" button
        document.getElementById('customizeCookies').addEventListener('click', function () {
            // Show the cookie settings
            document.getElementById('cookieSettings').style.display = 'block';
        });

        // Add event listener to the "Save Settings" button
        document.getElementById('saveSettings').addEventListener('click', function () {
            // Save the user's cookie customization settings (you can implement this part based on your needs)

            // Hide the cookie settings
            document.getElementById('cookieSettings').style.display = 'none';
        });
    }
});
