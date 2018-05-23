const crypto = require('crypto');
function hash(password, cb) {
    const salt = crypto.randomBytes(128).toString('base64');
    const hash = crypto.pbkdf2(password, salt, 10000, 512, 'sha512', cb);
    return hash;
}
// Imagine that loop below is real requests to some route
for (let i = 0; i < 50; i++) {
    hash('tips_tricks', (error, hash) => {});
}