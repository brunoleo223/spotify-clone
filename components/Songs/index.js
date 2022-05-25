import { useRecoilValue } from "recoil";
import { playlistState } from '../../atoms/playlistAtom';
import Song from '../Song';

function Songs() {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className="text-white px-8 space-y-1 pb-28 flex flex-col">
      {playlist?.tracks.items.map((track, i) => (
        <div>
          <Song key={track.track.id} track={track} order={i} />
        </div>
      ))}

    </div>
  )
}

export default Songs