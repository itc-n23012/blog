import Link from 'next/link'
const UsersList = ({ users }) => {
  return (
    <div>
      <h1>ユーザーリスト</h1>
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {index + 1}.{user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default UsersList
export async function getStaticProps () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return {
    props: {
      users
    }
  }
}
