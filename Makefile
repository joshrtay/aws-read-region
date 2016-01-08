#
# Vars
#

BIN = ./node_modules/.bin

#
# Tasks
#

node_modules: package.json
	@npm install

test: node_modules
	@${BIN}/tape -r babel-register test/*

validate: node_modules
	@${BIN}/standard

.PHONY: test validate release
