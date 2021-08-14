export default class ZtmEvent extends Event {
  constructor(
    eventType: string,
    timerTick: number,
    payload: Record<string, any>
  ) {
    super(eventType);
  }
}
