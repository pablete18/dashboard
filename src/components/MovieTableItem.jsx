
import PropTypes from "prop-types";

export const MovieTableItem = (props) => {
  return (
   
        
        <tr>
          <td>{props.title}</td>
          <td>{props.length}</td>
          <td>{props.rating}</td>
          <td>
          <ul>
            {props.genre.map((genreItem, i) => {
               return <li key={i}>{genreItem}</li>
            })}
            </ul>
            </td>
          <td>{props.awards}</td>
        </tr>
       
   
  )
}

MovieTableItem.proptypes = {
    title: PropTypes.string,
    length: PropTypes.number,
    rating: PropTypes.number,
    genre: PropTypes.array,
    awards: PropTypes.number
}
