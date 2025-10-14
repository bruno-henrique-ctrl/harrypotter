import Link from "next/link";
import styles from "./page.module.css";
import { apiMovies } from "./_api/axios";
import { Movie } from "./_type/Movie";
import Image from "next/image";

const casasHogwarts = [
  {
    nome: "Gryffindor",
    fundador: "Godric Gryffindor",
    simbolo: "Leão",
    cores: "Vermelho e Dourado",
    curiosidade: "A Sala Comunal fica na torre mais alta da escola.",
  },
  {
    nome: "Slytherin",
    fundador: "Salazar Slytherin",
    simbolo: "Serpente",
    cores: "Verde e Prata",
    curiosidade:
      "É a casa mais ligada à Câmara Secreta e conhecida por seus alunos estratégicos.",
  },
  {
    nome: "Hufflepuff",
    fundador: "Helga Hufflepuff",
    simbolo: "Texugo",
    cores: "Amarelo e Preto",
    curiosidade:
      "Aceita todos os tipos de alunos e valoriza o trabalho duro e a lealdade.",
  },
  {
    nome: "Ravenclaw",
    fundador: "Rowena Ravenclaw",
    simbolo: "Águia",
    cores: "Azul e Prata",
    curiosidade:
      "Sua Sala Comunal exige que você resolva um enigma para entrar, valorizando a inteligência e criatividade.",
  },
];

const Home = async () => {
  const moviesApi = await apiMovies.get("", { params: { s: "Harry Potter" } });
  const movies: Movie[] = moviesApi.data.Search || [];

  return (
    <>
      <header className={styles.header}>
        <figure className={styles.logoFigure}>
          <Image
            src="https://www.freeiconspng.com/uploads/harry-potter-logo-png-11.png"
            alt="logo"
            width={200}
            height={200}
          />
        </figure>
      </header>

      <main className={styles.main}>
        <h1 className={styles.headerTitle}>
          Mundo Bruxo -– Tudo Sobre Harry Potter
        </h1>
        <h2 className={styles.headerSubtitle}>
          Para fãs que querem explorar cada canto do mundo mágico.
        </h2>
        <section className={styles.filmesSection}>
          <h2>Filmes</h2>
          <ul className={styles.filmesList}>
            {movies.map((movie, index) => (
              <li key={index} className={styles.filmesItem}>
                <Link href={`/movies/${movie.imdbID}`}>
                  <figure className={styles.filmesFigure}>
                    <Image
                      src={
                        movie.Poster !== "N/A"
                          ? movie.Poster
                          : "/placeholder.png"
                      }
                      alt={movie.Title}
                      width={200}
                      height={200}
                    />
                  </figure>
                  <h3 className={styles.filmesTitle}>{movie.Title}</h3>
                  <em className={styles.filmesYear}>{movie.Year}</em>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.casasSection}>
          <h2>Conheça as Casas de Hogwarts – Qual é a Sua?</h2>
          <ul className={styles.casasList}>
            {casasHogwarts.map((casa) => (
              <li key={casa.nome} className={styles.casaItem}>
                <Link href={`/characters/${casa.nome.toLowerCase()}`}>
                  <h3>{casa.nome}</h3>
                  <p>{casa.fundador}</p>
                  <p>{casa.simbolo}</p>
                  <p>{casa.cores}</p>
                  <p>{casa.curiosidade}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className={styles.outrosConteudos}>
          Outros Conteúdos em Breve...
        </div>
      </main>
    </>
  );
};

export default Home;
