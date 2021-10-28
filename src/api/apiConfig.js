const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'e4d0328c54a7d8b0e2210007882b3da7',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;