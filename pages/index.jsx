import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";


export default function Home({res}) {
  console.log(res)
  return (
    <Layout page="Crypto Watch - Home">
      <ul className="flex justify-around py-10">
        {res.map((crypto,idx)=>{
          const src=crypto.logo_url
          return <li key={idx} className="relative hover:shadow-md p-3 border border-red-300 rounded-3xl bg-red-100 md:w-auto flex-1 mx-1">
          <Link href={`/${crypto.id}?locale=us&lang=en-us`}>
          <a className="rounded-md">
            <div className="text-center">
            <Image 
              className="object-contain mx-auto mb-6 w-50 h-50" 
              loading="lazy" 
              width="50px"
              height="50px"
              unoptimized
              loader={() => src} 
              src={src} 
              alt={`${crypto.name} logo`} 
            />
            </div>
            <h2 className="text-xl mb-6 uppercase tracking-wider">
              {crypto.name}
            </h2>
            <h3 className="font-bold text-2xl mb-4">
              ${parseFloat(crypto.price).toFixed(2)}
            </h3>
            <p>
            Day : {" "}
            <span className="font-bold">
            {crypto["1d"].price_change_pct > 0 && "+"}
              {parseFloat(crypto["1d"].price_change_pct * 100).toFixed(2) + "% "}
            </span>
            {crypto["1d"].price_change_pct < 0 ? (<span className="text-red-500">&#x2798;</span>):(<span className="text-green-500">&#x279A;</span>)}
            </p>
            <p>
            Month : {" "}
            <span className="font-bold">
            {crypto["30d"].price_change_pct > 0 && "+"}
              {parseFloat(crypto["30d"].price_change_pct * 100).toFixed(2) + "% "}
            </span>
            {crypto["30d"].price_change_pct < 0 ? (<span className="text-red-500">&#x2798;</span>):(<span className="text-green-500">&#x279A;</span>)}
            </p>
            <p>
            Year : {" "}
            <span className="font-bold">
            {crypto["365d"].price_change_pct > 0 && "+"}
              {parseFloat(crypto["365d"].price_change_pct * 100).toFixed(2) + "% "}
            </span>
            {crypto["365d"].price_change_pct < 0 ? (<span className="text-red-500">&#x2798;</span>):(<span className="text-green-500">&#x279A;</span>)}
            </p>
          </a>
          </Link>
          </li>
        })}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(context){
  try {
    const res = await fetch("https://api.nomics.com/v1/currencies/ticker?key=045ede0837f54ad6330ec4f6a30aa814113557da&ids=BTC,ETH,XRP,LTC,DOGE&interval=1d,30d,365d&convert=USD&per-page=100&page=1").then(response => response.json())
    return {
     props: {res}
    }
  } catch (error) {    
    console.error(error)  
  }
}