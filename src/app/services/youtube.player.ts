/**
 * Created by Haimov on 22/06/2017.
 */
export class youTubePlayerService {
  id: string;
  private player: YT.Player;
  private ytEvent: YT.PlayerEvent;

  constructor() {
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player: YT.Player) {
    this.player = player;
    console.log(this.player);
  }

  playVideo() {
    console.log(this.player);
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
}
