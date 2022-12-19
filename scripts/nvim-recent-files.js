#!/usr/bin/env osascript -l JavaScript
ObjC.import("stdlib");
const app = Application.currentApplication();
app.includeStandardAdditions = true;

function alfredMatcher(str) {
	const clean = str.replace(/[-()_.:#/\\;,[\]]/g, " ");
	const camelCaseSeperated = str.replace(/([A-Z])/g, " $1");
	return [clean, camelCaseSeperated, str].join(" ");
}

const numOfOldFiles = 25;

//──────────────────────────────────────────────────────────────────────────────

const jsonArray = app
	.doShellScript("zsh scripts/nvim-recent-files.sh")
	.replace(/.*?(?=\/)/, "") // remove terminal characters
	.split("\r")
	.slice(1, numOfOldFiles) // more things to remove due to terminal characters
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
