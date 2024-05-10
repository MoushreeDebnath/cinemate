
import { useSearchParams } from 'react-router-dom';
import { Card } from '../components';
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';

export const Search = ({apipath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data:movies} = useFetch(apipath,queryTerm);

  //page title
  useTitle(`Search for the ${queryTerm}`)

  return (
    <main>
      <section>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ? `No result found for '${queryTerm}'` : `result for '${queryTerm}'`}</p>
      </section>
    <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-start flex-wrap">
        {
          movies.map((movie)=>(
            <Card key={movie.id} movie={movie}/>
          ))
        }
      </div>
    </section>
  </main>
  )
}
