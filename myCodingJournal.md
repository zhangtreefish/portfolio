4/30/2015: found the map not displayed. Ask the coach and pointed to the fact that the helper.js had been modified:
-    var lat = placeData.geometry.location.k;  // latitude from the place service
-    var lon = placeData.geometry.location.D;  // longitude from the place service
+    var lat = placeData.geometry.location.lat();  // latitude from the place service
+    var lon = placeData.geometry.location.lng();  // longitude from the place service
I thought I forked the repo after Dec. 12, 2014 which was when Cameron made the change :https://github.com/udacity/frontend-nanodegree-resume/commit/563a0cf7513c96ea3b2cdd0bbd148c07067512d1
I may have remembered wrong. Is there a way to find out when I forked?
I changed the helper.js in local directory; I wish to copy the change to gh-pages, so I entered
git merge master origin/gh-pages
and got a merge conflict.

Instead of doing pulling and pushing, I decided to remove gh-pages from both local and remote and start anew.
at project directory master branch git prompt:
$git branch -D gh-pages //remove local
$git branch -rd origin.ghpages //remove remote
$git checkout --orphan gh-pages

at gh-pages branch:
$git status
$git commit -m "initial commit"
$git push -f origin gh-pages

Result: The remote gitHub page then was updated.



