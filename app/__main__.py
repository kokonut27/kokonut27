from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/home')
@app.route('/')
def index():
  return render_template("index.html")

app.run(host="0.0.0.0", port=8080)
