#!/usr/bin/env osascript -l JavaScript
ObjC.import("stdlib");
const app = Application.currentApplication();
app.includeStandardAdditions = true;

function alfredMatcher(str) {
	const clean = str.replace(/[-()_.:#/\\;,[\]]/g, " ");
	const camelCaseSeperated = str.replace(/([A-Z])/g, " $1");
	return [clean, camelCaseSeperated, str].join(" ");
}

function readFile(path) {
	const fm = $.NSFileManager.defaultManager;
	const data = fm.contentsAtPath(path);
	const str = $.NSString.alloc.initWithDataEncoding(data, $.NSUTF8StringEncoding);
	return ObjC.unwrap(str);
}

const fileExists = filePath => Application("Finder").exists(Path(filePath));

//──────────────────────────────────────────────────────────────────────────────

// generate recent files list
const oldfiles = app.doShellScript(`
	temp=/tmp/oldfiles.txt
	[[ -e "$temp" ]] && rm "$temp"
	nvim -c "redir > $temp | echo v:oldfiles | redir end | q" &>/dev/null
	tr "'" '"' < "$temp" # single quores invalid in JSON
`);

const jsonArray = JSON.parse(oldfiles)
	.filter(file => fileExists(file))
	.map(filepath => {
		const fileName = filepath.split("/").pop();
		const twoParents = filepath.replace(/.*\/(.*\/.*)\/.*$/, "$1");

		return {
			title: fileName,
			match: alfredMatcher(fileName),
			subtitle: "▸ " + twoParents,
			type: "file:skipcheck",
			icon: {
				type: "fileicon",
				path: filepath,
			},
			arg: filepath,
		};
	});

JSON.stringify({ items: jsonArray });
