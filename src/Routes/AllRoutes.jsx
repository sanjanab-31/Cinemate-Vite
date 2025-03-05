import {Routes, Route} from 'react-router-dom';
import {MovieList, Moviedetails, Search, PageNotFound} from '../Pages';

export const AllRoutes =() => {
    return (
        <>
            <Routes>
                <Route path="\" element={<MovieList />} />
                <Route path="search" element={<Search />} />
                <Route path="movie/:id" element={<Moviedetails />} />
                <Route path="*" element={<PageNotFound />} />
                <Route pathh="movies/top" element={<MovieList />} />
                <Route path="movies/popular" element={<MovieList />} />
                <Route path="movies/upcoming" element={<MovieList />} />
            </Routes>
        </>
    )
}