export default function ({identifier, name, platformFamily, index, enableJavascript=false}) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleIdentifier</key>
	<string>${identifier}</string>
	<key>CFBundleName</key>
	<string>${name}</string>
	<key>DocSetPlatformFamily</key>
	<string>${platformFamily}</string>
	<key>dashIndexFilePath</key>
	<string>${index}</string>
	<key>DashDocSetFamily</key>
	<string>dashtoc</string>
	<key>isDashDocset</key>
	<true/>
  <key>isJavaScriptEnabled</key>
  <${enableJavascript? 'true' : false}/>
</dict>
</plist>
`;
};
