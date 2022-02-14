import { BsFillHouseFill, BsJournalAlbum } from "react-icons/bs";
import { BiPulse } from "react-icons/bi";
import { FaBroadcastTower, FaMicrophoneAlt, FaPodcast } from "react-icons/fa";
import ArtistList from "./ArtistList";
import AlbumList from "./AlbumList";

const MenuList = [
  {
    id: 1,
    icon: <BsFillHouseFill />,
    name: "Home",
  },
  {
    id: 2,
    icon: <BiPulse />,
    name: "Discover",
  },
  {
    id: 3,
    icon: <FaBroadcastTower />,
    name: "Radio",
  },
  {
    id: 4,
    icon: <FaMicrophoneAlt />,
    name: "Artist",
    compo:<ArtistList/>
  },
  {
    id: 5,
    icon: <BsJournalAlbum />,
    name: "Albums",
    compo:<AlbumList/>

  },
  {
    id: 6,
    icon: <FaPodcast />,
    name: "Podcasts",
  },
];

export { MenuList };
