#!/usr/bin/env osascript -l JavaScript
ObjC.import("stdlib");
const app = Application.currentApplication();
app.includeStandardAdditions = true;
//──────────────────────────────────────────────────────────────────────────────

/** @param {string} str */
function alfredMatcher(str) {
	const clean = str.replace(/[-_./]/g, " ");
	const camelCaseSeparated = str.replace(/([A-Z])/g, " $1");
	return [clean, camelCaseSeparated, str].join(" ") + " ";
}

/** @param {string} url @return {string} */
function httpRequest(url) {
	const queryUrl = $.NSURL.URLWithString(url);
	const data = $.NSData.dataWithContentsOfURL(queryUrl);
	return $.NSString.alloc.initWithDataEncoding(data, $.NSUTF8StringEncoding).js;
}

// *   [smjonas/inc-rename.nvim (⭐601)](https://github.com/smjonas/inc-rename.nvim) - Provides an incremental LSP rename command based on Neovim's command-preview feature.
const mdLinkRegex = /\[(.+?) \(⭐(.+?)\)\]\((.+?)\) - (.*)/;

const fileExists = (/** @type {string} */ filePath) => Application("Finder").exists(Path(filePath));

//──────────────────────────────────────────────────────────────────────────────

// INFO Searching awesome-neovim instead of neovimcraft or dotfyle, since the
// the latter two only scrape awesome-neovim anyway

/** @type {AlfredRun} */
// biome-ignore lint/correctness/noUnusedVariables: Alfred run
function run() {
	// determine local plugins
	const pluginInstallPath = $.getenv("plugin_installation_path");
	let /** @type {string[]} */ installedPlugins = [];
	if (fileExists(pluginInstallPath)) {
		const shellCmd = `cd "${pluginInstallPath}" && grep --only-matching --no-filename --max-count=1 "http.*" ./*/.git/config`;
		installedPlugins = app
			.doShellScript(shellCmd)
			.split("\r")
			.map((remote) => {
				const ownerAndName = remote.split("/").slice(3, 5).join("/").slice(0, -4);
				return ownerAndName;
			});
	}

	// Using `trackawesomelist` over the raw markdown, as it includes star count
	const awesomeNeovimList =
		"https://raw.githubusercontent.com/trackawesomelist/trackawesomelist/main/content/rockerBOO/awesome-neovim/readme/README.md";

	const pluginsArr = httpRequest(awesomeNeovimList)
		.split("\n")
		.reduce((/** @type {AlfredItem[]} */ acc, line) => {
			if (!line.startsWith("*   [") || !line.includes("/")) return acc;

			const [_, repo, stars, url, desc] = line.match(mdLinkRegex) || [];
			if (!repo || !url) return acc;
			const [author, name] = repo.split("/");
			if (!name) return acc;
			const displayName = name.replaceAll("\\_", "_");
			const installedIcon = installedPlugins.includes(repo) ? " ✅" : "";
			const subtitle = ["⭐ " + stars, author, desc].join("  ·  ");

			acc.push({
				title: displayName + installedIcon,
				match: alfredMatcher(repo),
				subtitle: subtitle,
				arg: url,
				mods: {
					cmd: { arg: repo },
				},
				quicklookurl: url,
				uid: repo,
			});
			return acc;
		}, []);

	console.log("plugin count:", pluginsArr.length);
	return JSON.stringify({
		items: pluginsArr,
		cache: { seconds: 300, loosereload: true }, // faster, to update install icons
	});
}
