import React from 'react'
import { useEffect, useState } from 'react'
const Main = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/independent?status=true')
            .then(response => response.json())
            .then(data => {
                // Set the fetched data to state
                setCountries(data)
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to fetch data only once on component mount

    return (
        <main className='bg-DarkModeBackground px-12 py-5 space-y-7'>
            <nav className='flex justify-between'>
                <input type="text"
                    placeholder='Search for a country...'
                    className='w-2/5 h-14 px-5 bg-DarkBlueDarkModeElements'
                />
                <select name='Filter By Region' id=""
                    className='bg-DarkModeElements px-3 text-DarkModeText'
                >
                    <option value="Filter By Region">Filter By Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </nav>
            <section
                className='grid grid-cols-4 space-y-4 space-x-6 items-center justify-center justify-items-center justify-self-center'
            >
                {countries.map(country => (
                    <div
                        key={country.cca3}
                        className='h-80 bg-DarkBlueDarkModeElements max-w-64 '
                    >
                        <img
                            src={country.flags.png}
                            alt=""
                            className=' h-36'
                        />
                        <div className='p-3'>
                            <p className='text-DarkModeText text-xl py-3'>{country.name.common}</p>
                            <ul>
                                <li className='text-WhiteDarkModeText'>Population: <span className=' text-DarkWhite'>{country.population}</span></li>
                                <li className='text-WhiteDarkModeText'>Region: <span className=' text-DarkWhite'>{country.continents}</span></li>
                                <li className='text-WhiteDarkModeText'>Capital: <span className=' text-DarkWhite'>{country.capital}</span></li>
                            </ul>
                        </div>
                    </div>
                ))
                }
            </section>
        </main>
    )
}

export default Main