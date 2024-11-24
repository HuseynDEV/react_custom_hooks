import { useEffect, useState } from 'react';
import { fetchUsers, User } from './utils';
import SearchBar from './SearchBar';
import { useDebounce } from './useDebounce';
// import { useDebounce } from './useDebounce';



export default function App() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState<User[]>([]);


  const debouncedSearch = useDebounce(search)

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const users = await fetchUsers(search);
      setUsers(users);

      setLoading(false);
    };
    loadUsers();
  }, [debouncedSearch]);

  return (
    <div className='tutorial'>
      <SearchBar onChange={setSearch} />
      {loading && <div>Loading...</div>}
      {!loading &&
        users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </div>
  );
}