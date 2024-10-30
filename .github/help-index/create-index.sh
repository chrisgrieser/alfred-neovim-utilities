#!/usr/bin/env zsh

mkdir -p "./tmp"
trap 'rm -rf "./tmp"' EXIT
cd "./tmp" || exit 1

#───────────────────────────────────────────────────────────────────────────────

# DOWNLOAD
# SIC without token, will hit rate limit when running on Github Actions
# (token set via GitHub Actions secrets)
repoTree="https://api.github.com/repos/neovim/neovim/git/trees/master?recursive=1"
baseRawURL="https://raw.githubusercontent.com/neovim/neovim/master/runtime/doc/"
curl "$repoTree" --silent --show-error --header "authorization: Bearer $GITHUB_TOKEN" |
	grep --extended-regexp --only-matching "runtime/doc/.*.txt" |
	cut -d/ -f3 |
	while read -r file; do
		echo "Downloading $file..."
		curl --silent --show-error "$baseRawURL$file" > "./$file"
	done

#───────────────────────────────────────────────────────────────────────────────
baseHelpURL="https://neovim.io/doc/user/"

# OPTIONS
vimoptions=$(grep --extended-regexp --only-matching "\*'[.A-Za-z-]{2,}'\*(.*'.*')?" options.txt |
	tr -d "*'" |
	while read -r line; do
		opt=$(echo "$line" | cut -d" " -f1)
		if [[ "$line" =~ " " ]]; then
			synonyms=",$(echo "$line" | cut -d" " -f2-)"
		else
			synonyms=""
		fi
		echo "${baseHelpURL}options.html#'$opt',$synonyms"
	done)
if [[ -z "$vimoptions" ]]; then
	echo "Vim options creation failed."
	exit 1
fi

# ANCHORS
anchors=$(grep --extended-regexp --only-matching --recursive "\*([()_.:A-Za-z-]+|[0-9E]+)\*(.*\*.*\*)?" |
	tr -d "*" |
	sed 's/txt:/html#/' |
	cut -c3- |
	while read -r line; do
		url=$(echo "$line" | cut -d" " -f1 | sed 's/:/%3A/')
		if [[ "$line" =~ " " ]]; then
			synonyms=",$(echo "$line" | cut -d" " -f2-)"
		else
			synonyms=""
		fi
		echo "${baseHelpURL}$url,$synonyms"
	done)
if [[ -z "$anchors" ]]; then
	echo "Anchors creation failed."
	exit 1
fi

# SECTIONS
sections=$(grep --extended-regexp --only-matching "\|[.0-9]*\|.*" usr_toc.txt |
	tr -d "|" |
	while read -r line; do
		file=$(echo "$line" | cut -c-2)
		title="$line"
		echo "${baseHelpURL}usr_$file.html#$title"
	done)
if [[ -z "$sections" ]]; then
	echo "Section creation failed."
	exit 1
fi

#───────────────────────────────────────────────────────────────────────────────

cd .. || exit 1
output=.github/help-index/neovim-help-index-urls.txt
echo "$vimoptions" > "$output"
echo "$anchors" >> "$output"
echo "$sections" >> "$output"
