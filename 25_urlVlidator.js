const urlRegex = /^(https?:\/\/[a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[a-zA-Z0-9+&@#\/%=~_|])(\.[a-zA-Z0-9+&@#\/%?=~_|]{2,})$/;

const inputUrl = 'https://arzo.com';

if (urlRegex.test(inputUrl)) {
  console.log(`The URL ${inputUrl} is valid.`);
} else {
  console.log(`The URL ${inputUrl} is not valid.`);
}