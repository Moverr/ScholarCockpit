import React from 'react'
 

const listitems=[
	{id:1,name:"item one"},
	{id:2,name:"item two"},
	{id:3,name:"item three"}
	
];
function ListEleent(props){
   
	let listItemsArray = [];
	listitems.map((listitem)=>{
	console.log(listitem);
	listItemsArray[] = <li key={listitem.id}>listitem.name</li>
   });
return listItemsArray;
}
export default ListEleent;