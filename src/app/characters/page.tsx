import styles from './page.module.css';
import Link from 'next/link';
import type { Character } from '@/app/type/character';
import { apiHouses } from '@/app/api/axios';
import Loading from '@/app/components/Loading';
import { Suspense } from 'react';
import Image from 'next/image';

const HousesAll = async () => {
    const all = await apiHouses.get<Character[]>('/characters');
    const gryffindorRes = await apiHouses.get<Character[]>('/characters/house/gryffindor');
    const slytherinRes = await apiHouses.get<Character[]>('/characters/house/slytherin');
    const ravenclawRes = await apiHouses.get<Character[]>('/characters/house/ravenclaw');
    const hufflepuffRes = await apiHouses.get<Character[]>('/characters/house/hufflepuff');
    const studentsRes = await apiHouses.get<Character[]>('/characters/students');
    const staffRes = await apiHouses.get<Character[]>('/characters/staff');

    const sections = [
        { id: 'students', label: 'Estudantes', data: studentsRes.data },
        { id: 'staff', label: 'Staff', data: staffRes.data },
        { id: 'gryffindor', label: 'Gryffindor', data: gryffindorRes.data },
        { id: 'slytherin', label: 'Slytherin', data: slytherinRes.data },
        { id: 'ravenclaw', label: 'Ravenclaw', data: ravenclawRes.data },
        { id: 'hufflepuff', label: 'Hufflepuff', data: hufflepuffRes.data },
        { id: 'all', label: 'Todos', data: all.data },
    ];

    const renderCharacters = (characters: Character[]) => (
        <ul className={styles.casasList}>
            {characters.map((character) => (
                <li key={character.id} className={styles.casaItem}>
                    <Link href={`/characters/character/${character.id}`}>
                        <figure className={styles.casaFigure}>
                            <Image
                                src={
                                    character.image && character.image !== ''
                                        ? character.image
                                        : 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'
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
    );

    return (
        <>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.headerTitle}>Personagens de Hogwarts</h1>
                    <p className={styles.headerSubtitle}>
                        Explore todos os estudantes e staff
                    </p>
                </div>
            </header>

            <nav>
                <ul className={styles.menuContainer}>
                    {sections.map((section) => (
                        <li key={section.id} className={styles.menuItem}>
                            <a href={`#${section.id}`} className={styles.filterLink}>
                                {section.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <main className={styles.main}>
                {sections.map((section) => (
                    <section key={section.id} id={section.id} className={styles.casasSection}>
                        <h2>{section.label}</h2>
                        {renderCharacters(section.data)}
                    </section>
                ))}
            </main>
        </>
    );
};

export default function PageWrapper() {
    return (
        <Suspense fallback={<Loading />}>
            <HousesAll />
        </Suspense>
    );
}
