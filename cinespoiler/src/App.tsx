import { tmdbNowPlayingMock } from './shared/mocks/tmdb.mock';
import MovieCard from './ui/components/components/MovieCard';

function App() {
  return (
    <section className="section">
      <div className="container d-flex f-direction-column g-5">
        <h1 className="title t-align-center">Welcome to Cine Spoilers</h1>
        <div className="g-layout g-layout--auto-fit-columns g-8">
          {tmdbNowPlayingMock.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;