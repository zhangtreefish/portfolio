4/30/2015: found the map not diaplayed. Ask the coach and pointed to the fact that the helper.js had been modified:
-    var lat = placeData.geometry.location.k;  // latitude from the place service
-    var lon = placeData.geometry.location.D;  // longitude from the place service
+    var lat = placeData.geometry.location.lat();  // latitude from the place service
+    var lon = placeData.geometry.location.lng();  // longitude from the place service
I thought I forked the repo after Dec. 12, 2014 which was when Cameron made the change :https://github.com/udacity/frontend-nanodegree-resume/commit/563a0cf7513c96ea3b2cdd0bbd148c07067512d1
I may have remembered wrong. Is there a way to find out when I forked?
