
1. In ResumeBuilder.js I built four JSONs, each one representing a different resume section. 

2. I then iterated through each JSON and "append"ed its information to index.html in the correct section, after "replace"ing the placeholder string in helper.js.
 
3. I added an interactive map by use of "append" of the googleMap string to `<div id=”mapDiv”>`.

4. I made sure that all of my codes for adding elements to the resume were within functions, and that all the functions were encapsulated within the respective objects, as required by Object-Oriented Programming.

5. To update gh-page: 

* first go to gh-pages; (1)

* I used *git rebase master* to fast-forward gh-pages to master;

* then *git push origin gh-pages* to push. 

(1) While trying to git checkout gh-pages, get error message "error: The following untracked working tree files would be overwritten by checkout". Googled and found the following: http://stackoverflow.com/questions/17404316/the-following-untracked-working-tree-files-would-be-overwritten-by-merge-but-i

Solution: 

git add * 

git stash

git pull

 To track all files.

