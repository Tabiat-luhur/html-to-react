import "./home.css"
import Navbar from "../../component/navbar/Navbar"
import JumboTron from "../../component/jumboTron/JumboTron"
import Konten from "../../component/konten/Konten"

export default function Home() {
  return (
    <div>
      <>
      <Navbar/>
      <div className="homeWrapper">
        <JumboTron />
        <Konten />
      </div>
      </>
    </div>
  )
}
