import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ItemType } from "rc-menu/lib/interface";
import {
  faHouse,
  faPlaneDeparture,
  faCar,
  faMagnet,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const menuItem: ItemType[] = [
  {
    key: 1,
    label: (
      <div onClick={() => {}}>
        <FontAwesomeIcon icon={faHouse} /> Stays
      </div>
    ),
  },
  {
    key: 2,
    label: (
      <>
        {" "}
        <FontAwesomeIcon icon={faPlaneDeparture} /> Flight{" "}
        <Link to="/flight"></Link>
      </>
    ),
  },
  {
    key: 3,
    label: (
      <>
        {" "}
        <FontAwesomeIcon icon={faCar} /> Car Rentals
        {/* <Link to="/car-rental"> Car Rentals</Link> */}
      </>
    ),
  },
  {
    key: 4,
    label: (
      <>
        {" "}
        <FontAwesomeIcon icon={faMagnet} /> Attractions
      </>
    ),
  },
  {
    key: 5,
    label: (
      <>
        {" "}
        <FontAwesomeIcon icon={faCar} /> Airport taxis
      </>
    ),
  },
  {
    key: 6,
    label: (
      <>
        {" "}
        <FontAwesomeIcon icon={faFlag} /> Tk
      </>
    ),
  },
];
