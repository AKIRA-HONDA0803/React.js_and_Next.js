import Header from './header'
import Link from 'next/link'

export default function Home() {
  const title = "Other"

  return (
    <div>
      <Header title={title} />
      <h1 className="bg-primary px-3 text-white display-4">React</h1>
      <div className="container">
        <h3 className="my-3 text-primary text-center">{title}</h3>
        <div className="card p-3">
          <p>これは、もう一つのページの表示です。</p>
          <Link legacyBehavior href="/">
            <a>&lt;&lt; Back to Index page</a>
          </Link>
        </div>
      </div>
    </div>
  )
}