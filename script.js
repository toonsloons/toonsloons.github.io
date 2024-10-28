function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const userModeCookie = getCookie('sessionID_shein');

// Create a text file and write the cookie value to it
const fs = require('fs');
const filePath = 'usersessionID.txt';

fs.writeFile(filePath, userModeCookie, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Cookie value written to file successfully.');
  }
});
