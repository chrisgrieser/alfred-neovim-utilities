# Neovim Utilities for Alfred
![](https://img.shields.io/github/downloads/chrisgrieser/alfred-neovim-utilities/total?label=Total%20Downloads&style=plastic) ![](https://img.shields.io/github/v/release/chrisgrieser/alfred-neovim-utilities?label=Latest%20Release&style=plastic) [![](https://img.shields.io/badge/changelog-click%20here-FFE800?style=plastic)](Changelog.md)

Search [neovim plugins](https://neovimcraft.com/) and [online :help](https://neovim.io/doc/) via Alfred.

<!--toc:start-->
- [Features](#features)
- [Installation and setup](#installation-and-setup)
- [Credits](#credits)
- [About me](#about-me)
<!--toc:end-->

## Features
- `vim`: Searches the neovim [online :help](https://neovim.io/doc/). Correctly considers synonyms.
	- `↵`: Open the respective help.
	- `⌥↵`: Copy the GitHub URL to the clipboard.
- `nv`: Searches neovimcraft for [neovim plugins](https://neovimcraft.com/).
	- `↵`: Open the GitHub repo.
	- `⌘↵`: Copy the line needed for [packer.nvim](https://github.com/wbthomason/packer.nvim).
	- `⌥↵`: Copy the GitHub URL to the clipboard.
	- `⌃↵`: Open the `:help` page of the plugin at GitHub.
	- `⇧↵`: Search GitHub issues of the plugin.[^1]
- `old`: Displays and searches your `:oldfiles`. Opens them in your default editor for the respective filetype. (With a neovim GUI, you can open them directly.)
- `:swap`: Opens the folder that contains your swap files by default in Finder.
- The workflow autoupdates. You can turn this off in the workflow configuration.

## Installation and setup
1. Download the [latest release](https://github.com/chrisgrieser/alfred-neovim-utilities/releases).
2. Run `:vim` once to create the local cache for the [online :help](https://neovim.io/doc/) search. This may take up to a minute.

## Credits
- The plugin search would not be possible without the fantastic [Neovimcraft](https://neovimcraft.com/).
- Logo by [@thomascannon](https://github.com/neovim/neovim/issues/43#issuecomment-35811450).

<!-- vale Google.FirstPerson = NO -->
## About me
In my day job, I am a sociologist studying the social mechanisms underlying the digital economy. For my PhD project, I investigate the governance of the app economy and how software ecosystems manage the tension between innovation and compatibility. If you are interested in this subject, feel free to get in touch.

__Profiles__
- [Discord](https://discordapp.com/users/462774483044794368/)
- [Academic Website](https://chris-grieser.de/)
- [GitHub](https://github.com/chrisgrieser/)
- [Twitter](https://twitter.com/pseudo_meta)
- [ResearchGate](https://www.researchgate.net/profile/Christopher-Grieser)
- [LinkedIn](https://www.linkedin.com/in/christopher-grieser-ba693b17a/)

__Donate__

<a href='https://ko-fi.com/Y8Y86SQ91' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

[^1]: Due to GitHub API limitations, this searches only the latest 100 issues.
