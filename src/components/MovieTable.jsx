import { Table } from 'react-bootstrap'
import { MovieTableItem } from './MovieTableItem'

const movies = [
    {
        id: crypto.randomUUID(),
        title: "Billy Eliot",
        length:123,
        rating: 5,
        genre: ["Drama","Comedia"],
        awards: 2
    },
    {
        id: crypto.randomUUID(),
        title: "Alicia en el pais de las maravillas",
        length:142,
        rating: 4.8,
        genre: ["Drama","Comedia","Accion"],
        awards: 2
    }
]
export const MovieTable = () => {
  return (
    <div>
         <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Duracion</th>
          <th>Rating</th>
          <th>Genero</th>
          <th>Premios</th>
        </tr>
      </thead>
     <tbody>
       {movies.map(({id,title,length,rating,genre,awards}) => <MovieTableItem key={id} title={title} length={length} rating={rating} genre={genre} awards={awards}/>)}
        
       </tbody>
    </Table>
    </div>
  )
}
