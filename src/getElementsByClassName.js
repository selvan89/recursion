// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(className, node){
	var result = [];

	//modified the original function definition to take in a node
	node = node || document.body

	//create an array with a list of the current node's classes
	var classes = node.className.split(" ");
	console.log(classes);
	if (classes.indexOf(className) != -1){
		result.push(node);
	}

	if(node.children){
		for(var i = 0; i < node.children.length; i++){
			result = result.concat(getElementsByClassName(className, node.children[i]));
		}
	}
	return result;
}


