import Layout from '../components/layout'
import Link from 'next/link'
import MyImage from '../components/image'
import { useState } from 'react'
import useSWR from 'swr'

export default function Home() {
  // const url ='./data.json'
  // const [data, setData] = useState({message:'', data:[]})

  // fetch(url)
  //   .then(res=> res.json())
  //   .then(res=> setData(res))
  // const func = (...args) => fetch(...args).then(res => res.text())
  const fetcher = url => fetch(url).then(r => r.json())
  // const { data } = useSWR('/data.json', fetcher)
  // const { data, err } = useSWR('/data.txt', func)
  // const [ address, setAddress] = useState('/api/hello')
  const [pref, setPref] = useState({id:0, item:'name'})
  const [ address, setAddress ] = useState('/api/hello/' + pref.id + '/' + pref.item)
  const { data, err } = useSWR(address, fetcher)

  const onChange = (e)=> {
    // setAddress('/api/hello?id=' + e.target.value)
    pref.id = e.target.value
    setPref(pref)
    // setAddress('/api/hello/' + e.target.value)
    setAddress('/api/hello/' + pref.id + '/' + pref.item)
  }
  const onSelect = (e)=> {
    pref.item = e.target.value
    setPref(pref)
    setAddress(`/api/hello/` + pref.id + '/' + pref.item)
  }

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
      <div className="alert alert-primary text-center">
        <h5 className="mb-4">
          {/* {data.message} */}
          {/* {data != undefined ? data.message : 'error...' } */}
          {/* { data } */}
          { JSON.stringify(data) }
          </h5>
          <input type="number" className="form-control form-control-sm mb-2"
            onChange={onChange} />
          <select onChange={onSelect}
            className="form-control form-control-sm">
            <option value="name">Name</option>
            <option value="mail">Mail</option>
            <option value="age">Age</option>
          </select>
        {/* <table className="table bg-white">
          <thead className="table-dark">
            <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
          </thead>
          <tbody> */}
            {/* {data.data.map((value, key)=> ( */}
            {/* {data != undefined ? data.data.map((value, key)=> ( */}
              {/* <tr key={key}>
                <th>{value.name}</th>
                <td>{value.mail}</td>
                <td>{value.age}</td>
              </tr> */}
            {/* )) : <tr><th></th><td>no data.</td><td></td></tr>} */}
          {/* </tbody>
        </table> */}
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