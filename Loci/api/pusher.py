import pusher

pusher_client = pusher.Pusher(
  app_id='1710215',
  key='134af4bb28d2464c405e',
  secret='bc512e7a0766a7900f61',
  cluster='eu',
  ssl=True
)

pusher_client.trigger('chat', 'message', {'text': 'hello world'})
