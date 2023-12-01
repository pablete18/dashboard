import { ContentRowItemMovie } from "./ContentRowItemMovie"

const data =[//definimos la valores de la prop, en un array de objetos, se hace en el elemento padre
	{
	id: crypto.randomUUID(),
	color: "primary",
	title : "Movies in Data Baseo",
	value : 21,
	icon : "fa-film"
},
{
	id: crypto.randomUUID(),
	color : "success",
	title : "Total awards",
	value : 79,
	icon : "fa-award"
},
{
	id: crypto.randomUUID(),
	color : "warning",
	title : "Actors quantity",
	value : 49,
	icon : "fa-user"
}
];

export const ContentRowMovies = () => {
  return (
   
   
	<div className="row">
	{//se abre llave porque va con codigo js
		data.map(({color,title,value,icon,id}) =><ContentRowItemMovie   key ={id} color={color} title ={title}value ={value} icon= {[icon]}/>)//se mapea el contenido de del archivo hijo
	}
					
	</div>
   
  )
}
