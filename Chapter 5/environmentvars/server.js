console.log('No value for DISPLAY_TEXT yet:', process.env.DISPLAY_TEXT);

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

console.log('Value for DISPLAY_TEXT:', process.env.DISPLAY_TEXT);

const app = require('http').createServer((req, res) => res.send('basic server!'));
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});