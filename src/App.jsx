import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/zmatheuspro.png",
      name: "Matheus Ferreira",
      role: "FullStack Developer",
    },
    publishedAt: new Date("2022-09-11 06:00:00"),
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no Ignite ReactJs, da Rocketseat. O nome do projeto é Ignite Feed 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/ignitefeed",
        href: "https://jane.design/ignitefeed",
      },
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    publishedAt: new Date("2022-09-11 09:00:00"),
    content: [
      {
        type: "paragraph",
        content: "Salve galeraa 👋",
      },
    ],
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => (
              <Post key={post.id} {...post} />
            ))
          }
        </main>
      </div>
    </div>
  );
}
