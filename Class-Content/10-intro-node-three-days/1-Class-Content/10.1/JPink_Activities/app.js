/*
https://en.wikipedia.org/wiki/Node.js
Q: What the hell is Node.js really?
A: Node.js is an open-source, cross-platform JavaScript runtime environment for developing a diverse variety of tools and applications.
Although Node.js is not a JavaScript framework,[3] many of its basic modules are written in JavaScript, and developers can write new modules
in JavaScript. The runtime environment interprets JavaScript using Google's V8 JavaScript engine.
Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput
and scalability in Web applications with many input/output operations, as well as for real-time Web applications
(e.g., real-time communication programs and browser games).

Node.js was built on the Google V8 JavaScript engine since it was open-source under the BSD license, extremely fast,
and proficient with internet fundamentals like HTTP, DNS, TCP.[24] Also, JavaScript was a well-known language,
making Node.js immediately accessible to the entire web development community.
V8 is the JavaScript execution engine built for Google Chrome and open-sourced by Google in 2008. Written in C++,
V8 compiles JavaScript source code to native machine code instead of interpreting it in real time.

TL;DNR: Node.js is a JavaScript an asynchronous runtime environment that can run on any platform. The engine compiles code to native
machine language instead of compiling code in real time.

To run this file, open terminal and type : run file.js
*/
//1. Simple demonstration of running a javascipt file via the command license


//2. The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched.
// Notice that the first to arguments are the absolute paths to both node and the file to execute. You computer knows these paths because
// the path to 'node' has been added to you enviromental variables on you computer and the path to the second file is know to the local file system
// when executed.


//3. Any subsequest arguments passed in after the file name are added to the process.argv array and can be accessed as you would as array
//Run in Terminal: node file.js Eddie Vedder

//4. The Node.js runtime allows you to include other files and packages by assigning them to JS variables, so there is no need for <scipt>
// tags anymore to require JS files.

//5. Any variable that is exported from the included file can be
//  accessed and assigned to a JS variable
