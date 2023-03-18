import "./Search.scss"

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find the user"/>
      </div>
      <div className="userChat">
        <div>
          <img src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
        </div>
        <div className="userChatInfo">
          <span>Jimmy</span>
        </div>
      </div>
    </div>
  )
}

export default Search;
