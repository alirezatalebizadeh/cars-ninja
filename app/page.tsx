import { Hero, SearchBar, CustomFilter, CarCard } from '../components/index';
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types"
import { fetchCars } from '@/utils';




export default async function Home({ searchParams }: HomeProps) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit,
    model: searchParams.model || ""
  })
  {
    console.log(allCars);
  }

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;



  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-w-full " id="discover">
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="mt-12 w-full flex-between items-center flex-wrap gap-5">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {
                allCars?.map((car) => (
                  <CarCard car={car} />
                ))
              }
            </div>
          </section>
        ) : (
          <>
            <div className="home__error-container">
              <h2 className='text-black text-xl font-bold'>Oops , No result</h2>
              <p>{allCars?.message}</p>
            </div>
          </>
        )

        }

      </div>
    </main>
  );
}
