// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	//Conditions for the primitive types

	if(obj === null){
		return 'null';
	}

	else if(typeof obj === 'number'){
		return String(obj);
	}

	else if(typeof obj ==='string'){
		return '"' + obj + '"';
	}
	else if(obj === true){
		return 'true';
	}
	else if(obj === false){
		return 'false';
	}

	//Conditions for objects
	else if(Array.isArray(obj)){
		if(obj.length === 0){
			return '[]';
		}
		else{
			var result = '[';
			for(var i = 0; i < obj.length - 1; i++){
				result = result + stringifyJSON(obj[i]) + ',';
			}
			result = result + stringifyJSON(obj[obj.length-1]) + ']';
			return result;
		}
		
	}

	  else {
  	var keysArr = Object.keys(obj);
  	var len = keysArr.length;
  	if (len === 0) {
  		return '{}';
  	}
  	else {
  		var result = '{';
  		for (var i=0; i<len-1; i++) {
  			// Take care of the unstringifiableValues
  			if (typeof obj[keysArr[i]] === 'function' || obj[keysArr[i]] === undefined){
  				return '{}';
  			}
  			result = result + '"' + keysArr[i] + '":' + stringifyJSON(obj[keysArr[i]]) + ',';
  		}
  		result = result + '"' + keysArr[len-1] + '":' + stringifyJSON(obj[keysArr[len-1]]) + '}';
  		return result;
  	}
  }

};



