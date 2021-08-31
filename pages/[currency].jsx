import Image from "next/image";
import Layout from "../components/Layout";
import {AiFillRedditCircle,AiFillGithub} from 'react-icons/ai';
import {RiFilePaper2Line} from 'react-icons/ri'
import {GiWorld} from 'react-icons/gi';

export default function Currency({crypto}){
  console.log(crypto)
  const src=crypto.logo_url

  return (<Layout page={`${crypto.name}'s details`}>
  <div className="relative hover:shadow md p-8 border border-red-300 sm:rounded-3xl bg-red-100 md:w-auto flex-1 mx-5">
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
    <h2 className="text-2xl mb-6 uppercase tracking-wider">{crypto.name}</h2>
    <p>{crypto.description}</p>
    <h3 className="pt-10 pb-1 text-red-600">Usefull Links :</h3>
    <div className="flex justify-around">
    {crypto.website_url && 
    <p className="social_links text-red-600 relative hover:shadow-md p-3 border border-red-300 rounded-xl bg-red-200 md:w-auto flex-1 mx-1">
      <a href={crypto.website_url} target="_blank" rel="noreferrer">
        <GiWorld className="social_icons inline mr-2" size="1.75em"/> 
        Website
      </a>
    </p>}
    {crypto.whitepaper_url && 
    <p className="social_links text-red-600 relative hover:shadow-md p-3 border border-red-300 rounded-xl bg-red-200 md:w-auto flex-1 mx-1">
      <a href={crypto.whitepaper_url} target="_blank" rel="noreferrer">
        <RiFilePaper2Line className="social_icons inline mr-2" size="1.75em"/> 
        Whitepaper
      </a>
    </p>}
    {crypto.github_url && 
    <p className="social_links text-red-600 relative hover:shadow-md p-3 border border-red-300 rounded-xl bg-red-200 md:w-auto flex-1 mx-1">
      <a href={crypto.github_url} target="_blank" rel="noreferrer">
        <AiFillGithub className="social_icons inline mr-2" size="1.75em"/> 
        Github
      </a>
    </p>}
    {crypto.reddit_url && 
    <p className="social_links text-red-600 relative hover:shadow-md p-3 border border-red-300 rounded-xl bg-red-200 md:w-auto flex-1 mx-1">
      <a href={crypto.reddit_url} target="_blank" rel="noreferrer">
        <AiFillRedditCircle className="social_icons inline mr-2" size="1.75em"/> 
        Reddit
      </a>
    </p>}
    </div>
  </div>  
  <style jsx>
  {`
  p.social_links{
    cursor:pointer
  }
  `}
  </style>
  </Layout>)
}

export async function getServerSideProps({query}){
  // console.log(query)
  try {
    const res = await fetch(`https://api.nomics.com/v1/currencies?key=045ede0837f54ad6330ec4f6a30aa814113557da&ids=${query.currency}&interval=1d,30d,365d&convert=USD&attributes=id,name,logo_url,description,reddit_url,whitepaper_url,website_url,github_url`);
    const result = await res.json();

    return {
      props: {crypto: result[0]}
    }
  } catch (error) {
    console.error(error)
  }
}