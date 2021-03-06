import styles from '../../styles/Listing.module.css'
import Link from 'next/link'

export const getStaticProps = async() => { //similar to useEffect. Runs at build time, as our app is built and component renders

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();

  return {
    props: {
      listings: data
    }
  }
}

const Listing = ({listings}) => {
  return (
    <div>
      <h1>All Listings</h1>
      {listings.map((user) => (
        <Link href={`/listing/${user.id}`} key={user.id}>
          <a className={styles.single}>
            <h3>
              {user.name}
            </h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Listing
