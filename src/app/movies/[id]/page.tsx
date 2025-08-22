import { apiMovies } from "@/app/api/axios";
import style from "./page.module.css";
import type { Movie, MovieDetail } from "@/app/type/Movie";

type Props = {
    params: {
        id: string;
    }
};

export const generateMetadata = async ({ params }: Props) => {
    const { id } = await params
    const response = await apiMovies.get<MovieDetail>("", { params: { i: id } });
    const movie = response.data;

    return {
        title: movie.Title,
        description: movie.Plot,
    };
}

export const generateStaticParams = async () => {
    const response = await apiMovies.get('', { params: { s: 'Harry Potter' } });
    const movies = response.data.Search

    return movies.map((movie: Movie) => ({
        id: movie.imdbID,
    }));
}

const Movie = async ({ params }: Props) => {
    const { id } = await params;
    const response = await apiMovies.get<MovieDetail>("", { params: { i: id } });
    const movie = response.data;

    return (
        <article className={style.movieArticle}>
            <header className={style.movieHeader}>
                <figure className={style.movieFigure}>
                    <img
                        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
                        alt={movie.Title}
                    />
                </figure>
                <div className={style.movieInfo}>
                    <h1 className={style.movieTitle}>{movie.Title} ({movie.Year})</h1>
                    <h2 className={style.moviePlot}>{movie.Plot}</h2>
                </div>
            </header>

            <section className={style.movieDetails}>
                <Detail label="Released" value={movie.Released} />
                <Detail label="Runtime" value={movie.Runtime} />
                <Detail label="Genre" value={movie.Genre} />
                <Detail label="Director" value={movie.Director} />
                <Detail label="Writer" value={movie.Writer} />
                <Detail label="Actors" value={movie.Actors} />
                <Detail label="Language" value={movie.Language} />
                <Detail label="Country" value={movie.Country} />
                <Detail label="Awards" value={movie.Awards} />
                <Detail label="BoxOffice" value={movie.BoxOffice} />
                <Detail label="Metascore" value={movie.Metascore} />
                <Detail label="IMDB Rating" value={movie.imdbRating} />
            </section>
        </article>
    );
};

const Detail = ({ label, value }: { label: string; value: string }) => (
    <p className={style.detailItem}>
        <strong>{label}:</strong> {value !== "N/A" ? value : "-"}
    </p>
);

export default Movie;
