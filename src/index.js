
var PyFunctions = {

	val : '',

	input : function(inputvalue){
		this.val = inputvalue;
		return this;
	},

	output : function(){
		return parse(this.val);
	},

	parse : function(input){

	}

	

};


module.exports = PyFunctions;