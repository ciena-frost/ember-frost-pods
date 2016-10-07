export default function () {
  const duration = 200
  this.transition(
    this.hasClass('liquid-pods'),
    this.toValue(true),
    this.use('explode', {
      pick: '.pod',
      use: ['to-left', {duration}]
    })
  )
}
