import logging
import webapp2

out = """YOHeader

%s

Session

%s"""
class Echo(sessions.BaseHandler):
  def get(self):
    self.response.headers['Content-Type'] = 'text/plain'
    self.response.write(out % (self.request, self.session))

app = webapp2.WSGIApplication([('/echo/.*', Echo)],
                              debug=True, config=sessions.config)
