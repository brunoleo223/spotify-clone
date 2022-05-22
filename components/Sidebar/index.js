import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  LogoutIcon
} from '@heroicons/react/outline';
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from 'react';
import useSpotify from '../../hooks/useSpotify'


function Sidebar() {
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const spotifyApi = useSpotify();

  useEffect(() => {
    
    if(spotifyApi.getAccessToken()){
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi])

  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide'>
      <div className='space-y-4'>
        <button onClick={() => signOut()} className='flex gap-2 items-center hover:text-white transition-all'>
          <LogoutIcon className='h-5 w-5' />
          <p>Logout</p>
        </button>


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

        {playlists.map((playlist) => {
          return (
            <p key={playlist.id} className='cursor-pointer hover:text-white'>{playlist.name}</p>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar;