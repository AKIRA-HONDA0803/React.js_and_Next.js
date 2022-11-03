// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// https://localhost:3000/api/helloにアクセスすると表示
import apidata from '../../components/data'

export default function handler(req, res) {
  let id = req.query.id
  if (id == undefined) { id = 0 }
  if (id >= apidata.length) { id = 0 }
  res.json(apidata[id])
}


// 本書での元の書き方は下記のようだ
// export default (req, res) => {
//   res.statusCode = 200
//   res.json({ name: 'John Doe'})
// }