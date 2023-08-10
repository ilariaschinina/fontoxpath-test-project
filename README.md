# fontoxpath-test-project
Tiny project to report an inconsistent behaviour of Fontoxpath across browsers, Chrome and Firefox.
In a simple html document, fontoxpath is used to find elements that match the following queries: `//div` and `//*[name()='div']`.
On Chrome, both queries find and match all the divs in the document.
On Firefox, the very simple query "//div", fntoxpath returns an empty array, while the more convoluted query `//*[name()='div']`, matches the divs. 

## How to reproduce the bug
1. clone the project
2. run `npm install`
3. run `npx webpack --config webpack.config.js`
4. run `python3 -m SimpleHTTPServer 9000`
5. go to http://localhost:9000/dist/ on Chrome
6. open the console to see the matched nodes by fontoxpath using the 2 different queries: `//div`, `//*[name()='div']`
![image](https://github.com/ilariaschinina/fontoxpath-test-project/assets/54150499/189ce1d5-8e1f-47f8-a544-f66628e0016c)


7. go to http://localhost:9000/dist/ on Firefox
8. see how fontoxpath retunrs an empty array with `//div`, while with `//*[name()='div']` ti actually returns some nodes
![image](https://github.com/ilariaschinina/fontoxpath-test-project/assets/54150499/df982944-8e4f-461b-9c03-3b6d7294f517)
