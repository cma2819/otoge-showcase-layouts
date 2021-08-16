import { SpotifyPlayingTrack } from "./external/nodecg-spotify-widget/spotifyPlayingTrack";
import { SpotifyStatus } from "./external/nodecg-spotify-widget/spotifyStatus";
import { SpotifyTokens } from "./external/nodecg-spotify-widget/spotifyTokens";
import { SpotifyUserData } from "./external/nodecg-spotify-widget/spotifyUserData";
import { CreateNodecgInstance, CreateNodecgConstructor } from "ts-nodecg/browser";

type ReplicantMap = {
  spotifyPlayingTrack: SpotifyPlayingTrack,
  spotifyStatus: SpotifyStatus,
  spotifyTokens: SpotifyTokens,
  spotifyUserData: SpotifyUserData
};

type SpotifyWidgetInstance = CreateNodecgInstance<
  'nodecg-spotify-widget',
  {},
  ReplicantMap,
  {},
  true
>

type SpotifyWidgetConstructor = CreateNodecgConstructor<
  'nodecg-spotify-widget',
  {},
  ReplicantMap,
  {},
  true
>

export {
  SpotifyWidgetInstance,
  SpotifyWidgetConstructor
}