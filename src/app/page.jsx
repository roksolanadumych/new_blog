import Link from "next/link";
import styles from "./homepage.module.css";
import CardLatest from "./Components/CardLatest/CardLatest"
import CardPanelCentre from "./Components/CardPanelCentre/CardPanelCentre";
import CardPanelLeft from "./Components/CardPanelLeft/CardPanelLeft";
import Cardpanelright from "./Components/Cardpanelright/Cardpanelright";
import HeadSection from "./Components/HeadSection/HeadSection";
import HighlightSection from "./Components/HighlightSection/HighlightSection";



export default function Home() {
  return (
    <> 
      <CardLatest/>
      <CardPanelCentre/>
      <CardPanelLeft/>
      <Cardpanelright/>
      <HeadSection/>
      <HighlightSection/>
      <Navigation/>

    </>
  );
}