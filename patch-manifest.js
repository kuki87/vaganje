const fs = require('fs');
const f = 'android/app/src/main/AndroidManifest.xml';
let x = fs.readFileSync(f, 'utf8');
if (!x.includes('android.permission.CAMERA')) {
  x = x.replace('</manifest>', '    <uses-permission android:name="android.permission.CAMERA" />\n</manifest>');
  fs.writeFileSync(f, x);
}
console.log(x.includes('android.permission.CAMERA') ? 'CAMERA permission OK' : 'PATCH FAILED');
