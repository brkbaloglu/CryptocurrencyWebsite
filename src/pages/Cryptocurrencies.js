import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai'
function Cryptocurrencies() {

  const [data, setData] = useState(null)

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
        setData(response.data)
    }).catch((error) => {
        console.log(error)
    })
}, [])

// console.log(data)

    if (!data) return null


  return (
    <div>
      {data.map((currency) => {
        return(
          <div className='grid grid-cols-4 my-10'>
            <img className='w-[50px]' src={currency.image} alt="" />
            <h3 className=''>{currency.name}</h3>
            <p className=''>{currency.current_price}</p>
            {currency.price_change_percentage_24h < 0 ? (
                            <span className='flex items-center'>
                                <AiOutlineArrowDown className='text-red-700' />
                                {currency.price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                                <span className='flex items-center'>
                                    <AiOutlineArrowUp className='text-green-700' />
                                    {currency.price_change_percentage_24h.toFixed(2)}%
                                </span>
                            )}
          </div>
        )
      })}
      
    </div>
  )
}

export default Cryptocurrencies