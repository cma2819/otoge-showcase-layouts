import { CreateNodecgInstance, CreateNodecgConstructor } from 'ts-nodecg/browser';
import { Configschema } from '../nodecg/generated/configschema';
import { MessageMap } from '../nodecg/messages';
import { ReplicantMap } from '../nodecg/replicants';
import { SpotifyWidgetConstructor, SpotifyWidgetInstance } from '../nodecg/spotify';

export type ShowcaseNodecgInstance = CreateNodecgInstance<
  'otoge-showcase-layouts',
  Configschema,
  ReplicantMap,
  MessageMap
>;

export type ShowcaseNodecgConstructor = CreateNodecgConstructor<
  'otoge-showcase-layouts',
  Configschema,
  ReplicantMap,
  MessageMap
>

declare global {
  const nodecg: ShowcaseNodecgInstance & SpotifyWidgetInstance;

  const NodeCG: ShowcaseNodecgConstructor & SpotifyWidgetConstructor;
}