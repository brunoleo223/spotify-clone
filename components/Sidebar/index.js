import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon
} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-900'>
      <div className='space-y-4'>
        <button className='flex gap-2 items-center hover:text-white transition-all'>
          <HomeIcon className='h-5 w-5' />
          <p>Home</p>
        </button>

        <button className='flex gap-2 items-center hover:text-white transition-all'>
          <SearchIcon className='h-5 w-5' />
          <p>Search</p>
        </button>

        <button className='flex gap-2 items-center hover:text-white transition-all'>
          <LibraryIcon className='h-5 w-5' />
          <p>Your Library</p>
        </button>

        <hr className='border-t-[0.1px] border-gray-900' />

        <button className='flex gap-2 items-center hover:text-white transition-all'>
          <PlusCircleIcon className='h-5 w-5' />
          <p>Create Playlist</p>
        </button>

        <button className='flex gap-2 items-center hover:text-white transition-all'>
          <HeartIcon className='h-5 w-5' />
          <p>Liked Songs</p>
        </button>

        <button className='flex gap-2 items-center hover:text-white transition-all'>
          <RssIcon className='h-5 w-5' />
          <p>Your Episodes</p>
        </button>

        <hr className='border-t-[0.1px] border-gray-900' />

        <p className='cursor-pointer hover:text-white'>Playlist name...</p>
        <p className='cursor-pointer hover:text-white'>Playlist name...</p>
        <p className='cursor-pointer hover:text-white'>Playlist name...</p>
        <p className='cursor-pointer hover:text-white'>Playlist name...</p>
        <p className='cursor-pointer hover:text-white'>Playlist name...</p>
        <p className='cursor-pointer hover:text-white'>Playlist name...</p>
      </div>
    </div>
  )
}

export default Sidebar;