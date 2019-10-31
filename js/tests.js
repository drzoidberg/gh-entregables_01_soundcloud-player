let scopeDecoded = 'user-read-private user-read-email';
let scopeEncoded = 'user-read-private%20user-read-email';

console.log(`encoded: ${encodeURIComponent(scopeDecoded)}`);
console.log(`decoded: ${decodeURIComponent(scopeEncoded)}`);