// import { animate, Promise } from "liquid-fire";

export default function () {
  this.transition(
    this.hasClass('liquid-pods'),
    this.use('toLeft') // TODO Explode animation
  )
}
