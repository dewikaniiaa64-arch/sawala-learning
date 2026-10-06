// "Database" sementara
let articles = [
    { id: 1, judul: 'Belajar Node.js', penulis: 'Budi', isi: 'Node.js adalah runtime JavaScript...' },
    { id: 2, judul: 'Belajar Express', penulis: 'Siti', isi: 'Express adalah framework web...' }
];
let nextId = 3;

// GET /articles — ambil semua
export const getArticles = (req, res) => {
    res.json(articles);
};

// GET /articles/:id — ambil satu
export const getArticleById = (req, res) => {
    const id = Number(req.params.id);
    const article = articles.find(a => a.id === id);

    if (!article) {
        return res.status(404).json({ error: 'Artikel tidak ditemukan' });
    }

    res.json(article);
};

// POST /articles — buat baru
export const createArticle = (req, res) => {
    const { judul, penulis, isi } = req.body;

    if (!judul || !penulis || !isi) {
        return res.status(400).json({ error: 'Judul, penulis, dan isi wajib diisi' });
    }

    const articleBaru = { id: nextId++, judul, penulis, isi };
    articles.push(articleBaru);

    res.status(201).json(articleBaru);
};

// PUT /articles/:id — update
export const updateArticle = (req, res) => {
    const id = Number(req.params.id);
    const article = articles.find(a => a.id === id);

    if (!article) {
        return res.status(404).json({ error: 'Artikel tidak ditemukan' });
    }

    const { judul, penulis, isi } = req.body;
    if (judul) article.judul = judul;
    if (penulis) article.penulis = penulis;
    if (isi) article.isi = isi;

    res.json(article);
};

// DELETE /articles/:id — hapus
export const deleteArticle = (req, res) => {
    const id = Number(req.params.id);
    const index = articles.findIndex(a => a.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Artikel tidak ditemukan' });
    }

    articles.splice(index, 1);
    res.sendStatus(204);
};