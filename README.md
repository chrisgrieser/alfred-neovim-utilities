# Neovim Utilities for Alfred
![GitHub downloads](https://img.shields.io/github/downloads/chrisgrieser/alfred-neovim-utilities/total?label=GitHub%20Downloads&style=plastic&logo=github)
![Alfred Gallery downloads](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fchrisgrieser%2F.config%2Frefs%2Fheads%2Fmain%2FAlfred.alfredpreferences%2Falfred-gallery-downloads.yaml&query=neovim-utilities&style=plastic&logo=alfred&label=Gallery%20Downloads&color=%235C1F87)
![Latest release](https://img.shields.io/github/v/release/chrisgrieser/alfred-neovim-utilities?label=Latest%20Release&style=plastic)

Search [neovim plugins](https://github.com/rockerBOO/awesome-neovim) and
the [online :help](https://neovim.io/doc/) via [Alfred](https://www.alfredapp.com/).

![Showcase help search](https://github.com/chrisgrieser/alfred-neovim-utilities/assets/73286100/5c0fc2a3-bcd2-4f29-b67b-e0a2d813e4d6)
![Showcase plugin search](https://github.com/chrisgrieser/alfred-neovim-utilities/assets/73286100/c519b303-729b-4df2-aa28-76b107f29b5e)

## Commands
- `:h`: Search the Neovim [online :help](https://neovim.io/doc/).
	+ <kbd>⏎</kbd>: Open the respective help.
	+ <kbd>⌥⏎</kbd>: Copy the help URL to the clipboard.
- `np`: Search [store.nvim](https://github.com/alex-popov-tech/store.nvim)
  for Neovim plugins (mnemonic: `[n]vim [p]lugins`).
	+ <kbd>⏎</kbd>: Open the GitHub repo.
	+ <kbd>⌘⏎</kbd>: Open the `:help` page in the browser (`vimdoc` converted to
	  HTML).
	+ <kbd>⌥⏎</kbd>: Copy the GitHub URL.
	+ <kbd>⌃⏎</kbd>: Copy installation snippet for `lazy.nvim`, if available.
- `ip`: Search for locally installed plugins and `mason.nvim` packages
  (mnemonic: `[i]installed [p]lugins`).
	+ The modifiers (<kbd>⌘⌥⌃⇧</kbd>) from the plugin-search also apply for this
	  command.
	+ In addition, <kbd>fn⏎</kbd>: Open the local directory of the plugin in
	  Finder.
- `mason`: Search for tools available via
  [mason.nvim](https://github.com/williamboman/mason.nvim).
- `:old`: Displays and searches your `:oldfiles`. Opens them in the system's
  default editor for the respective filetype. (To open them directly in Neovim,
  you need a Neovim GUI with the `Open With` capability, such as
  [Neovide](http://neovide.dev).)

> [!NOTE]
> All keywords are customizable in the workflow settings.

## Installation
- __Requirements:__ [Alfred 5.5](https://www.alfredapp.com/) (macOS only) with
  Powerpack.
- Download the [latest release from the Alfred
  Gallery](https://alfred.app/workflows/chrisgrieser/neovim-utilities/).
- For the preview pane, install
  [alfred-extra-pane](https://github.com/mr-pennyworth/alfred-extra-pane).

## Preview pane configuration
The demo screenshot uses the following
[configuration](https://github.com/mr-pennyworth/alfred-extra-pane?tab=readme-ov-file#configuration)
for the preview pane:

```json
[
	{
		"workflowUID": "*",
		"alignment": {
			"horizontal": { "placement": "right", "width": 450, "minHeight": 750 }
		}
	}
]
```

## Credits
- <!-- harper: ignore -->Plugin database provided by
  [@alex-popov-tech's store.nvim](https://github.com/alex-popov-tech/store.nvim)
- `vimdoc` to HTML conversion by [@xaizek's
  vimdoc2html](https://github.com/xaizek/vimdoc2html).
- Preview pane by [@mr-pennyworth's
  alfred-extra-pane](https://github.com/mr-pennyworth/alfred-extra-pane).
- Logo by
  [@thomascannon](https://github.com/neovim/neovim/issues/43#issuecomment-35811450).

## About the developer
In my day job, I am a sociologist studying the social mechanisms underlying the
digital economy. For my PhD project, I investigate the governance of the app
economy and how software ecosystems manage the tension between innovation and
compatibility. If you are interested in this subject, feel free to get in touch.

- [Website](https://chris-grieser.de/)
- [Mastodon](https://pkm.social/@pseudometa)
- [ResearchGate](https://www.researchgate.net/profile/Christopher-Grieser)
- [LinkedIn](https://www.linkedin.com/in/christopher-grieser-ba693b17a/)

<a href='https://ko-fi.com/Y8Y86SQ91' target='_blank'> <img height='36'
style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3'
border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
