#!/usr/bin/env bash

printf "Start\nStart the build...\n"

yarn docs:build

printf "\nCheck the presence of branches...\n"

LIST_BRANCH=( $(git branch | sed 's/^..//') )

if ! printf '%s\n' "${LIST_BRANCH[@]}" | grep -x -q "master"; then 
	echo "No branch found master"
	exit 0
fi

if ! printf '%s\n' "${LIST_BRANCH[@]}" | grep -x -q "dev"; then 
	echo "No branch found dev"
	exit 0
fi

BRANCH=$(git branch | sed -n '/\* /s///p')

if [ "$BRANCH" == "dev" ]; then
    printf "\nMake commit...\n"

	RESULT=( $(git status --porcelain | awk -F "src/" '/^\s*$/ {next;} {print $2}'| grep -v '^$') )
    RESULT=${RESULT[@]:0:2}

    if [[ -z "$RESULT" ]]; then
	    MESSAGE="Update. Time $(date +"%H:%M %m.%d.%Y")."
    else
	    MESSAGE="Update $RESULT. Time $(date +"%H:%M %m.%d.%Y")."
    fi

	git add . && git commit -m "$MESSAGE"

    printf "\nPush master...\n"

	git push origin dev && git checkout master && git pull origin dev && git push origin master && git checkout dev
else
	echo "!!! Switch a repository to a branch dev !!!"
	exit 0
fi

printf "\nEnd."