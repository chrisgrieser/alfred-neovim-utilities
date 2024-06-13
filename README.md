# Neovim Utilities for Alfred
![Download count](https://img.shields.io/github/downloads/chrisgrieser/alfred-neovim-utilities/total?label=Total%20Downloads&style=plastic)
![Last release version](https://img.shields.io/github/v/release/chrisgrieser/alfred-neovim-utilities?label=Latest%20Release&style=plastic)

Search [neovim plugins](https://neovimcraft.com/) and [online
:help](https://neovim.io/doc/) of Neovim and plugins via [Alfred](https://www.alfredapp.com/).

![Showcase help search](https://github.com/chrisgrieser/alfred-neovim-utilities/assets/73286100/5c0fc2a3-bcd2-4f29-b67b-e0a2d813e4d6)
![Showcase plugin search](https://github.com/chrisgrieser/alfred-neovim-utilities/assets/73286100/c519b303-729b-4df2-aa28-76b107f29b5e)

## Commands
- `:h`: Searches the Neovim [online :help](https://neovim.io/doc/). 
	+ Groups synonyms together, for example, `:w` and `:write` both get one
	  item.
	+ <kbd>⏎</kbd>: Open the respective help.
	+ <kbd>⌥⏎</kbd>: Copy the help URL to the clipboard.
- `vp`: Searches [awesome-neovim](https://github.com/rockerBOO/awesome-neovim)
  for Neovim plugins. Mnemonic: `[v]im [p]lugins`.
	+ <kbd>⏎</kbd>: Open the GitHub repo.
	+ <kbd>⌘⏎</kbd>: Open the `:help` in the browser (vimdoc converted to HTML).
	+ <kbd>⌥⏎</kbd>: Copy the GitHub URL to the clipboard.
- `ip`: Search for plugins (and Mason tools) installed locally on your device.
  Mnemonic: `[i]installed [p]lugins`. 
	+ The modifiers (<kbd>⌘⌥⌃⇧</kbd>) from the plugin-search also apply for this command.
	+ In addition, <kbd>fn⏎</kbd>: Open the local directory of the plugin in Finder.
- `mason`: Search for tools available via [mason.nvim](https://github.com/williamboman/mason.nvim).
- `:old`: Displays and searches your `:oldfiles`. Opens them in the system's
  default editor for the respective filetype. (To open them directly in Neovim,
  you need a Neovim GUI with `Open With…` capability, such as
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
- Plugin database [awesome-neovim](https://github.com/rockerBOO/awesome-neovim).
- Logo by [@thomascannon](https://github.com/neovim/neovim/issues/43#issuecomment-35811450).
- Vimdoc to HTML conversion by [@xaizek](https://github.com/xaizek/vimdoc2html).
- Preview pane by
  [@mr-pennyworth](https://github.com/mr-pennyworth/alfred-extra-pane).

<!-- vale Google.FirstPerson = NO -->
## About the developer
In my day job, I am a sociologist studying the social mechanisms underlying the
digital economy. For my PhD project, I investigate the governance of the app
economy and how software ecosystems manage the tension between innovation and
compatibility. If you are interested in this subject, feel free to get in touch.

- [Academic Website](https://chris-grieser.de/)
- [Mastodon](https://pkm.social/@pseudometa)
- [ResearchGate](https://www.researchgate.net/profile/Christopher-Grieser)
- [LinkedIn](https://www.linkedin.com/in/christopher-grieser-ba693b17a/)

__Blog__  
I also occasionally blog about vim: [Nano Tips for Vim](https://nanotipsforvim.prose.sh/)

<a href='https://ko-fi.com/Y8Y86SQ91' target='_blank'>
<img
	height='36'
	style='border:0px;height:36px;'
	src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3'
	border='0'
	alt='Buy Me a Coffee at ko-fi.com'
/></a>
