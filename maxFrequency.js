let str = 'abrakadabra'; 

// 1st way { timeComplexity:O(n) , Auxillary Space Taken: O(n) }

function maxFrequency (str) {

	let mySet = new Set(str);

	let myMap = new Map();

	for(let value of mySet){
		myMap.set(value,0)
	}

	for(let i=0; i<str.length; i++){
		myMap.set(str[i],myMap.get(str[i])+1)
	}
	
	let max = 0;
	let element;
	for(let [key,value] of myMap){
        if(value>max){
			max=value;
		    element = key;
		}
	}

	return element;


}
console.log(maxFrequency(str));

// 2nd way { timeComplexity:O(n) , Auxillary Space Taken: O(n) }

function maxFrequency (str) {

	let obj = {};

	for(let i=0; i<str.length; i++){
		obj[str[i]] = 0
	}

	for(let i=0; i<str.length; i++){

		obj[str[i]] = obj[str[i]] + 1;
	}

	let max = 0;
	let element;

	for(let key in obj){
		if(obj[key]>max){
			max=obj[key]
			element=key;
		}
	}

	return element;

    
}
console.log(maxFrequency());

