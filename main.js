 var result = [];
		var alphabets=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var input=["a","f","g","h","l","k"];
		for(i=0; i < input.length; i++){
		   for(j = 0;j < alphabets.length; j++){
		     if(input[i] == alphabets[j])
		   result[i] = j+1;
		   }
		   }
		   document.write(result);