import React from 'react'
 

const listitems=[
	{id:1,name:"item one"},
	{id:2,name:"item two"},
	{id:3,name:"item three"}
	
];
function ListEleent(props){
   listitems.map((listitem)=>{
	console.log(listitems);
   });
	//todo :  making sure that we are getting items of lists
	
	// return <InputField type="checkbox" {...props} />; 
	return null;
}
export default ListEleent;