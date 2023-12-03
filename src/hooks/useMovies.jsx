import { useState, useEffect } from 'react';

function useMovies(url) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(url);
			const data = await res.json();
			setMovies(data.results);
		};
		fetchData();
	}, [url]);

	return [movies, setMovies];
}

export default useMovies;
