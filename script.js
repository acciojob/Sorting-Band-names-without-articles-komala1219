//your code here
// let touristSpots = ['The Virupaksha Temple','Victoria Memorial','Tajmahal'];
// function removeArticle (str) {
//    let words=str.split(' ');
// 	if(words.length>1 &&(words[0].toLowerCase()==='a'||
// 						 words[0].toLowerCase()==='an'||words[0].toLowerCase()==='The')){
// 		words.splice(0,1);
// 	}
// 	return words.join(" ");
    
// }

// touristSpots.sort((a,b)=>{
// 	const bandA=removeArticle(a);
// 	const bandB=removeArticle(b);

// 	return bandA.localeCompare(bandB);
	
// })
// let ul=document.getElementById("band");

// touristSpots.forEach(band=>{
// 	let li=document.createElement('li');
// 	li.innerText=band;
// 	ul.appendChild(li);
// });




const touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function removeArticle(str) {
  const words = str.split(' ');

  if (words.length > 1 && (words[0].toLowerCase() === 'a' ||
                           words[0].toLowerCase() === 'an' ||
                           words[0].toLowerCase() === 'the')) {
    words.splice(0, 1);
  }

  return words.join(' ');
}

touristSpots.sort((spotA, spotB) => {
  const nameA = removeArticle(spotA);
  const nameB = removeArticle(spotB);

  return nameA.localeCompare(nameB);
});

const ul = document.getElementById('band');

touristSpots.forEach(spot => {
  const li = document.createElement('li');
  li.innerText = spot;
  ul.appendChild(li);
});
