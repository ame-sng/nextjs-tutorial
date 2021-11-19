export const getStaticPaths = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map((listing) => {
    return {
      params: {id: listing.id.toString()} //need to be a string as it is a route
    }
  })

  return {
      paths, //i.e. paths: paths
      fallback: false //will show 404 page if id doesn't exist
  }
  
}
export const getStaticProps = async(context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();
  
  return {
    props: {listing: data}
  }
}

const Details = ({listing}) => {
  return (
    <div>
      <h1>{listing.name}</h1>
      <p>{listing.email}</p>
      <p>{listing.website}</p>
    </div>
  )
}

export default Details
