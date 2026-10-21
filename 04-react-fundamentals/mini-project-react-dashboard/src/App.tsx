import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/button";

type Article = {
  id: number;
  title: string;
  category: string;
  description: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: "Mengenal React",
    category: "Programming",
    description: "Belajar membuat antarmuka menggunakan component.",
  },
  {
    id: 2,
    title: "Dasar TypeScript",
    category: "Technology",
    description: "Memahami tipe data agar kode lebih terstruktur.",
  },
  {
    id: 3,
    title: "Belajar GitHub",
    category: "Development",
    description: "Mengenal branch dan Pull Request.",
  },
];

function App() {
  const [showArticles, setShowArticles] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <header>
        <h1>Article Dashboard</h1>
        <p>Kelola dan baca artikel pilihanmu.</p>
      </header>

      <section>
        <h2>Artikel Terbaru</h2>

        <input
          type="text"
          placeholder="Cari judul artikel..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="search-input"
        />

        {showArticles &&
          (filteredArticles.length > 0 ? (
            <div className="article-list">
              {filteredArticles.map((article) => (
                <Card
                  key={article.id}
                  title={article.title}
                  category={article.category}
                  description={article.description}
                />
              ))}
            </div>
          ) : (
            <p className="empty-message">Artikel tidak ditemukan.</p>
          ))}
      </section>

      <Button
        label={showArticles ? "Sembunyikan artikel" : "Tampilkan artikel"}
        onClick={() => setShowArticles(!showArticles)}
      />
    </main>
  );
}

export default App;