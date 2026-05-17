function SearchBar({ search, setSearch, handleSearch }) {
  return (
    <div className='flex justify-center gap-4 mt-10'>
      <input
        type='text'
        placeholder='Search recipes...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='w-[400px] p-4 rounded-xl text-black outline-none'
      />

      <button
        onClick={handleSearch}
        className='bg-orange-500 px-6 rounded-xl hover:bg-orange-600'
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
