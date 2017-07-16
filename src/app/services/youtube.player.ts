/**
 * Created by Haimov on 22/06/2017.
 */
export class youTubePlayerService {
  id: string;
  // src: string;
  private player: YT.Player;
  private ytEvent: YT.PlayerEvent;

  constructor() {
  }
  idSet(id){
    this.id = id;
  }
  onStateChange(event) {
    this.ytEvent = event.data;
    console.log('changed!');
  }
  savePlayer(player: YT.Player) {
    this.player = player;
    console.log('saved!');
  }
  playVideo() {
    this.player.playVideo();
  }
  pauseVideo() {
    this.player.pauseVideo();
  }
  loadVideo(id:string) {
    this.player.loadVideoById(id);
  }
  startOver() {
    this.player.stopVideo();
    this.player.playVideo();
  }

}
