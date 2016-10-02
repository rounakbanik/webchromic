<h1><a href='https://chrome.google.com/webstore/detail/webchromic/hofmklehbhdhdfacdnponnljibgepigj'>Webchromic</a></h1>

<p>Webchromic is a Google Chrome Extension that brings you the latest and the best comics from the internet to your home page.</p>

<p>The extension is finally available on the Google App Store. Find it <a href='https://chrome.google.com/webstore/detail/webchromic/hofmklehbhdhdfacdnponnljibgepigj'>here</a><p>

<p>Feel free to add your own comics by forking the repository. I am also accepting pull requests. However, if you explicitly want 
me to add a particular comic, please contact on <a href='https://www.facebook.com/rounak.banik'>Facebook or e-mail me at
rounakbanik@gmail.com</p>

<h2>How to add your own comic</h2>
<ol>
	<li>Fork/Download this repository</li>
	<li>Open the manifest.json file. Add the URL of the webcomic in the permissions array. Make sure you add a coma after every website except the last</li>
	<li>Add the same URL to content_security_policy.</li>
	<li>Open webchromic.html. Add a link to the mySideNav div. Make sure you give it a class. For this example, I'll assume the class is xyz-mlink</li>
	<li>Go to the comic's website. Right click on the comic and choose 'Inspect Element'. Find out the id or class which uniquely identifies the image.</li>
	<li>Create a JSON object with url, key (the id/class mentioned in the previous step), prestr (default it to an empty string), scale
		(use scale(1) if you do not want to resize) and margin, in pixels.</li>
	<li>Open js/contentscript.js and add the object to the websites array.</li>
	<li>At the bottom of the script, add an jQuery event listener for your newly created link. It'll be of the form:
		$('xyz-mlink').click(*your object*, HTMLParser).</li>
</ol>

<h2>Screenshots</h2>

![alt tag](https://github.com/rounakbanik/webchromic/blob/master/screenshots/1.png)
<br>
![alt tag](https://github.com/rounakbanik/webchromic/blob/master/screenshots/2.png)
<br>
![alt tag](https://github.com/rounakbanik/webchromic/blob/master/screenshots/3.png)
<br>
![alt tag](https://github.com/rounakbanik/webchromic/blob/master/screenshots/4.png)
