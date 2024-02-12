/*
useState(), useEffect(), useParams(), useHistory() = hook ba ek ekta Function bolte pari
function ki kore? ek ba ekadik jinish tomake return kore
*/
const {friendId} = useParams();
const [friend, setFriend] = useState({});// useState ekadik jinish return kore. array, object etc.
const history = useHistory(); // she ekta value return kore ba dorkar onujai j kono kisu return korte pare


useEffect(()=>{
  const url = `https://jsonplaceholder.typicode.com/users/${friend}`
  fetch(url)
  .then(res => res.json())
  .then(data => setFriend(data))
}, [])

// or

const loadData = ()=>{()=>{
    const url = `https://jsonplaceholder.typicode.com/users/${friend}`
    fetch(url)
    .then(res => res.json())
    .then(data => setFriend(data))
  }
}


useEffect(loadData, [])