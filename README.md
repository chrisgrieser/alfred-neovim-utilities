# Neovim Utilities for Alfred
![Download count](https://img.shields.io/github/downloads/chrisgrieser/alfred-neovim-utilities/total?label=Total%20Downloads&style=plastic)
![Last release version](https://img.shields.io/github/v/release/chrisgrieser/alfred-neovim-utilities?label=Latest%20Release&style=plastic)

Search [neovim plugins](https://neovimcraft.com/) and [online
:help](https://neovim.io/doc/) of neovim and plugins via [Alfred](https://www.alfredapp.com/).

![Demo 1](./assets/demo-help-search.png)
![Demo 2](./assets/demo-plugin-search.png)

## Features
- `:h`: Searches the neovim [online :help](https://neovim.io/doc/). Groups
  synonyms together, for example, `:w` and `:write` both get one item.
	+ <kbd>⏎</kbd>: Open the respective help.
	+ <kbd>⌥⏎</kbd>: Copy the help URL to the clipboard.
- `vp`: Searches [neovimcraft](https://neovimcraft.com/) for neovim plugins.
  Mnemonic: `[v]im [p]lugins`.
	+ <kbd>⏎</kbd>: Open the GitHub repo.
	+ <kbd>⌘⏎</kbd>: Open the `:help` in the browser (Vimdoc converted to HTML).
	+ <kbd>⌥⏎</kbd>: Copy the GitHub URL to the clipboard.
- `ip`: Search for plugins (and Mason tools) installed locally on your device.
  Mnemonic: `[i]installed [p]lugins`. The modifiers (<kbd>⌘⌥⌃⇧</kbd>) from the
  plugin-search also apply for this command. In addition:
	+ <kbd>fn⏎</kbd>: Open the local directory of the plugin in Finder.
- `mason`: Search for tools available via [mason.nvim](https://github.com/williamboman/mason.nvim).
- `:old`: Displays and searches your `:oldfiles`. Opens them in the system's
  default editor for the respective filetype. (To open them directly in neovim,
  you need a neovim GUI with `Open With…` capability though.)

> [!NOTE]
> All keywords are customizable in the settings.

## Installation
__Requirements:__ [Alfred 5](https://www.alfredapp.com/) (macOS only) with Powerpack.

Download the [latest release from the Alfred Gallery](https://alfred.app/workflows/chrisgrieser/neovim-utilities/).

## Credits
- The plugin search would not be possible without [Awesome Neovim](https://github.com/rockerBOO/awesome-neovim).
- Logo by [@thomascannon](https://github.com/neovim/neovim/issues/43#issuecomment-35811450).
- Vimdoc to HTML conversion by [@xaizek](https://github.com/xaizek/vimdoc2html).

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
