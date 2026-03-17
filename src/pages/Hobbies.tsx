import "../styles/hobbies.scss";
import "../styles/custom.scss"
import SubtleLink from "../components/SubtleLink.tsx";
import {FigureImage} from "react-bootstrap";
import threeWiseMonkeys from "../assets/hobbies/3_WISE.jpeg";
import magicSmokeAlbumCover from "../assets/hobbies/Magic_Smoke_Album_Cover.jpg";

export default function Hobbies() {
  return (
    <div className="h-100 w-100 d-flex flex-column gap-5" id="music">
      <div className="hobbies-div">
        <h2>Music</h2>
        <p>
          <div className="d-flex flex-row gap-5">
            <div className="w-50">
              In my free time, I like to play piano. I am part of a band called <SubtleLink href="https://www.instagram.com/exhibitvoyage/" text="Voyage"/> where I play synth/piano.
              As I'm at Uni I unfortunately haven't played with them in a while. Nevertheless, we had some great gigs and I look forward to every opportunity I get to play.
              <br/><br/>
              We released a couple of albums, and my favourite is <SubtleLink href="https://open.spotify.com/album/2ZkYGAjbJUsCuUUZUUSE1y?si=lRLobUF6Q76xIwwVorgaOg" text="Magic Smoke"></SubtleLink>. Some of my favourite tracks
              here include&nbsp;
              <SubtleLink href="https://open.spotify.com/track/32wCJ1RFyEsThiDXwGnn8g?si=7fcf84577a7f4c09" text="Technical"/> for its synth-vibes,&nbsp;
              <SubtleLink href="https://open.spotify.com/track/4iVlFQDfRXOL39I9PJoRCb?si=272653bec6e047be" text="Wouldn't You"></SubtleLink> with it's rock style and synth parts and&nbsp;
              <SubtleLink href="https://open.spotify.com/track/7c4BtsmS3RoiteGt4A2Msd?si=873dfa042a834a7f" text="Kiss Goodbye"></SubtleLink> for being a banger.

              <div className="w-100 d-flex center-all mt-5">
                <div id="magic-smoke-album-cover" className="w-75 image-popup-info">
                  <FigureImage src={magicSmokeAlbumCover} className="w-100 h-100"/>
                </div>
              </div>
            </div>
            <div id="three-wise-photo" className="image-popup-info w-50">
              <FigureImage src={threeWiseMonkeys} className="w-100 h-100"/>
            </div>
          </div>
          <br/>
          I also dabble in some music technology, using DAWs and I made the soundtrack for my game <SubtleLink href="/projects/beardbarians" text="Beardbarians"/>, my favourite track being <SubtleLink href="https://open.spotify.com/track/1qtxFxHr5qX1N8bQ8llXN9?si=3838f18730fe4d63" text="The Bearded Pirates"></SubtleLink>
        </p>
      </div>

      <div className="hobbies-div" id="squash">
        <h2>Squash</h2>
        <p>
          <div className="d-flex flex-row gap-5">
            <FigureImage src="" className="w-100 h-100"/>
            <div className="w-50">
              I also love to play squash! I am part of the Men's 2s squash team at my university. I like squash because it combines reaction times, tactics and heavy exercise into a social sport, as well as
              being really fun :D
            </div>
          </div>
       </p>
      </div>
    </div>
  )
}