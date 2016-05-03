export default function () {
  this.get('/dummy-records', function (db) {
    return {
      data: db['dummy-records'].map(attrs => {
        return {
          type: 'dummy-records',
          id: attrs.id,
          attributes: attrs
        }
      })
    }
  })

  this.passthrough()
}
