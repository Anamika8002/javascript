/*
1. Create a variable that can hold a number of NFT's.
2. Create an object inside your mintNFT function that willl hold the metadata values will be passed to the function as parameters. when the NFT is ready, you will store it in the variable you create in Step 1.
3. Your ListNFTs() function will print all of your NFTs metadata to the console.
4. for good measure, getTotalSupply() should return the number of NFT'S you have created. 
*/

const NFTs=[] //Array variable to hold many data.

function mintNFT(_name,course){
    const NFT={ // object inside mintNFT function 
        "name":_name,
        "course":course
    }
NFTs.push(NFT); //push is a built in function to store objects into array.
console.log("Person : "+_name);
}


function listNFTs(){  //to print all NFTs metadata
    for(let i=0; i,NFTs.length; i++){ //iteration to print all one by one
        console.log("\nName : "+NFTs[i]._name);
        console.log("Course : "+NFTs[i].course);
    }
}

function getTotalSupply(){ //to print all NFT'S created.
    console.log(NFTs.length);
}

//Passing parameters to function
mintNFT("Satyam","CSE");
mintNFT("Anamika","BBA");

//calling functions 
listNFTs(); //to run looop and print all metadata
getTotalSupply(); //To print no. of NFT'S we created.
