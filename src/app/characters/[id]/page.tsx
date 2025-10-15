import styles from "./page.module.css";
import Link from "next/link";
import type { Character } from "../../_type/character";
import { apiHouses } from "../../_api/axios";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({ params }: Props) => {
  const { id } = await params;

  return {
    title: `Casa ${id}`,
    description: `Personagens da casa ${id}`,
  };
};

export const generateStaticParams = async () => {
  const response = await apiHouses.get("/characters");
  const characters: Character[] = response.data;

  const uniqueHouses = Array.from(new Set(characters.map((c) => c.house)));

  return uniqueHouses.map((house) => ({
    id: house,
  }));
};

const Houses = async ({ params }: Props) => {
  const { id } = await params;

  const response = await apiHouses.get<Character[]>(`/characters/house/${id}`);
  const houseData = response.data || [];

  return (
    <>
      <header className={styles.header}>
        <div>
          <h1 className={styles.headerTitle}>Personagens de {id}</h1>
          <p className={styles.headerSubtitle}>
            Explore todos os estudantes da casa {id}
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.casasSection}>
          <h2>Estudantes de {id}</h2>
          {houseData.length > 0 ? (
            <ul className={styles.casasList}>
              {houseData.map((character: Character) => (
                <li key={character.id} className={styles.casaItem}>
                  <Link href={`/characters/character/${character.id}`}>
                    <figure className={styles.casaFigure}>
                      <Image
                        src={
                          character.image && character.image !== ""
                            ? character.image
                            : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                        }
                        alt={character.name}
                        width={200}
                        height={200}
                      />
                    </figure>
                    <h3 className={styles.casaName}>{character.name}</h3>
                    <p className={styles.casaActor}>{character.actor}</p>
                    <p className={styles.casaHouse}>{character.house}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum personagem encontrado nesta casa.</p>
          )}
        </section>
      </main>
    </>
  );
};

export default Houses;
