#!/usr/bin/env osascript -l JavaScript
ObjC.import("stdlib");
const app = Application.currentApplication();
app.includeStandardAdditions = true;
const alfredMatcher = (str) => str.replace (/[-()_.:]/g, " ");

//──────────────────────────────────────────────────────────────────────────────

const jsonArray = app.doShellScript("zsh scripts/nvim-recent-files.sh")
	.replace(/.*?(?=\/)/, "") // remove terminal characters
	.split("\r")
	.slice(1) // more things to remove due to terminal characters
	.map(filepath => {

		const fileName = filepath.split("/").pop();
		const twoParents = filepath.replace(/.*\/(.*\/.*)\/.*$/, "$1");

		return {
			"title": fileName,
			"match": alfredMatcher (fileName),
			"subtitle": "▸ " + twoParents,
			"type": "file:skipcheck",
			"icon": {
				"type": "fileicon",
				"path": filepath,
			},
			"arg": filepath,
		};
	});

JSON.stringify({ items: jsonArray });
