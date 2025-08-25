import { apiHouses } from "@/app/api/axios";
import { Character, CharacterDetail } from "@/app/type/character";
import styles from './page.module.css'
import Image from "next/image";

type Props = {
    params: {
        id: string;
    };
};

export const generateMetadata = async ({ params }: Props) => {
    const { id } = await params

    return {
        title: id,
        description: id
    };
}

export const generateStaticParams = async () => {
    const response = await apiHouses.get('/characters');
    const houses = response.data

    return houses.map((house: Character) => ({
        id: house.id,
    }));
}

const CharacterId = async ({ params }: Props) => {
    const { id } = await params;

    const response = await apiHouses.get<CharacterDetail[]>(`/character/${id}`);
    const character = response.data[0];

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <h1>{character.name}</h1>
                <p>
                    {character.hogwartsStudent ? 'Estudante de Hogwarts' : ''}{" "}
                    {character.hogwartsStaff ? 'Staff de Hogwarts' : ''}
                </p>
                <p>Casa: {character.house || "Desconhecida"}</p>
                <p>Status: {character.alive ? "Vivo" : "Falecido"}</p>
            </header>

            <section className={styles.section}>
                <Image
                    src={
                        character.image ||
                        "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                    }
                    alt={character.name}
                    className={styles.characterImage}
                    width={200}
                    height={200}
                />
            </section>

            <section className={styles.section}>
                <h2>Informações Pessoais</h2>
                <ul>
                    <li>Nome alternativo: {character.alternate_names}</li>
                    <li>Data de nascimento: {character.dateOfBirth || "Desconhecida"}</li>
                    <li>Gênero: {character.gender}</li>
                    <li>Cor dos olhos: {character.eyeColour}</li>
                    <li>Cor do cabelo: {character.hairColour}</li>
                    <li>Espécie: {character.species}</li>
                    <li>Ascendência: {character.ancestry || "Desconhecida"}</li>
                    <li>Patrono: {character.patronus || "Desconhecido"}</li>
                    <li>Varinha: Wood: {character.wand.wood} , Core:  {character.wand.core}</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2>Informações do Mago</h2>
                <ul>
                    <li>É bruxo(a): {character.wizard ? "Sim" : "Não"}</li>
                    <li>Ator/atriz: {character.actor || "Desconhecido"}</li>
                </ul>
            </section>
        </main>
    );
};

export default CharacterId;
