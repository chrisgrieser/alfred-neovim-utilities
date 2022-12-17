#!/bin/zsh

temp=/tmp/oldfiles.txt
[[ -e "$temp" ]] && rm "$temp"
nvim -c "redir > $temp | silent oldfiles | redir end | q"

# only output existing files
cut -d" " -f2- "$temp" | while read -r line; do
	[[ ! -f "$line" ]] || echo "$line"
done
