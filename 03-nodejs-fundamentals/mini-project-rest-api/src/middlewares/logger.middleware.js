// Middleware untuk mencatat setiap request yang masuk
export const logger = (req, res, next) => {
    const waktu = new Date().toISOString();
    console.log(`[${waktu}] ${req.method} ${req.url}`);
    next();
};