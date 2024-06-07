#!/usr/bin/env osascript -l JavaScript
ObjC.import("stdlib");
const app = Application.currentApplication();
app.includeStandardAdditions = true;
//──────────────────────────────────────────────────────────────────────────────

/** @param {string} url @return {string} */
function httpRequest(url) {
	// INFO JXA version does not work here
	return app.doShellScript(`curl -sL ${url}`);
}

/** @param {string} filepath @param {string} text */
function writeToFile(filepath, text) {
	const str = $.NSString.alloc.initWithUTF8String(text);
	str.writeToFileAtomicallyEncodingError(filepath, true, $.NSUTF8StringEncoding, null);
}

const fileExists = (/** @type {string} */ filePath) => Application("Finder").exists(Path(filePath));

const openFile = (/** @type {string} */ path) => Application("Finder").open(Path(path));

//──────────────────────────────────────────────────────────────────────────────

/** @type {AlfredRun} */
// biome-ignore lint/correctness/noUnusedVariables: Alfred run
function run(argv) {
	// file is already cached
	const repo = argv[0] || "ERROR";
	const vimdocPath = `/tmp/neovim-vimdocs-${repo.replace(/\//g, "_")}.txt`;
	const htmlPath = vimdocPath + ".html";
	if (fileExists(htmlPath)) {
		openFile(htmlPath);
		return;
	}

	// get file list
	const branch = JSON.parse(httpRequest(`https://api.github.com/repos/${repo}`)).default_branch;
	const worktreeUrl = `https://api.github.com/repos/${repo}/git/trees/${branch}?recursive=1`;
	const repoFiles = JSON.parse(httpRequest(worktreeUrl)).tree

	// find the doc file
	const docFile = repoFiles.find((/** @type {{ path: string; }} */ file) => {
		const isDoc = file.path.startsWith("doc/") && file.path.endsWith(".txt");
		const isChangelog = file.path.includes("change");
		const otherCruff = repo === "nvim-telescope/telescope.nvim" && file.path.endsWith("secret.txt");
		return isDoc && !isChangelog && !otherCruff;
	});
	if (!docFile) return "No :help found for this repo.";
	const docURL = `https://raw.githubusercontent.com/${repo}/${branch}/${docFile.path}`;

	// download vimdoc & convert to html
	writeToFile(vimdocPath, httpRequest(docURL));
	app.doShellScript(`python3 vimdoc2html/vimdoc2html.py "${vimdocPath}"`);
	openFile(htmlPath);
	return;
}
