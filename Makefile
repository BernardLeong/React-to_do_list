all:

yarn:
	yarn start
g/init:
	git init
	git add README.md
	git commit -m "first commit"
	git remote add origin https://github.com/BernardLeong/React-to_do_list.git
	git push -u origin master
pmas:
	git add .
	git commit -m "Commit all files to master"
	git push origin master



