/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const NFTs=[]

/*
This function will take some values as parameters. Create a NFT
object using the parameters passed to it for its metadata, 
and store it in the variable above.
*/

function mintNFT(_name,_movies,_earning) {
    const NFT = {
        name: _name,
        movies: _movies,
        earning: _earning,
    }
    NFTs.push(NFT);
    console.log("Actor_Name : ",_name);
}

/*
create a "loop" that will go through an "array" of NFT's
and print their metadata with console.log()
*/

function listNFTs() {
    for(let i=0;i<NFTs.length;i++){
        console.log("\nName :", NFTs[i].name);
        console.log("Movies_Made :", NFTs[i].movies);
        console.log("Earned :", NFTs[i].earning);
    }
}

// print the total number of NFTs we have minted to the console

function getTotalSupply() {
    console.log("\nTotal number of Actors : ",NFTs.length);
}

// call your functions 

mintNFT("Salman Khan","39","10Cr");
mintNFT("Akshay Kumar","59","80Cr");
mintNFT("Raj Babbar","7","15L");

listNFTs();
getTotalSupply();
