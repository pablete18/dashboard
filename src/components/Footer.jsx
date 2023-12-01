import { MovieTable } from "./MovieTable"


export const Footer = () => {
  return (
    <div>
        <MovieTable />
			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
						<span>Copyright &copy; Dashboard 2021</span>
					</div>
				</div>
			</footer>
			
    </div>
  )
}
