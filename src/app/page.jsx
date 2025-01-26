import Link from "next/link";
import styles from "./homepage.module.css";
import CardLatest from "./Components/CardLatest/CardLatest"
import CardPanelCentre from "./Components/CardPanelCentre/cardPanelCentre";



export default function Home() {
  return (
    <> 
      <CardLatest/>
      <CardPanelCentre/>

    </>
  );
}
