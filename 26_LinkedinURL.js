const linkedInRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

const inputUrl = 'https://www.linkedin.com/in/john_doe123';

if (linkedInRegex.test(inputUrl)) {
  console.log(`The LinkedIn profile URL ${inputUrl} is valid.`);
} else {
  console.log(`The LinkedIn profile URL ${inputUrl} is not valid.`);
}