import Layout from '../components/layout'
import Link from 'next/link'
import MyImage from '../components/image'
import { useState } from 'react'

export default function Home() {
  const url ='./data.json'
  const [data, setData] = useState({message:'', data:[]})

  fetch(url)
    .then(res=> res.json())
    .then(res=> setData(res))

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
      <div className="alert alert-primary text-center">
        <h5 className="mb-4">{data.message}</h5>
        <table className="table bg-white">
          <thead className="table-dark">
            <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
          </thead>
          <tbody>
            {data.data.map((value, key)=> (
              <tr key={key}>
                <th>{value.name}</th>
                <td>{value.mail}</td>
                <td>{value.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <MyImage fname="image.jpg" size="300" />
        <Link legacyBehavior href="/other">
          <button className="btn btn-primary">
            go to Other &gt;&gt;
          </button>
        </Link> */}
      </div>
      </Layout>
    </div>
  )
}