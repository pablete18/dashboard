import { ContentRowMovies } from "./ContentRowMovies";
import { LastMovieInDb } from "./LastMovieInDb";
import { GenresInDb } from "./GenresInDb";
export const ContentRowTop = () => {
  return (
 
<div className="container-fluid">
	<ContentRowMovies />
	<LastMovieInDb />
	<GenresInDb />

</div>
    
  )
}
