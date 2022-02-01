from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(__name__)

@app.route('/home')
@app.route('/')
def index():
  return render_template("index.html")

@app.route('/blog', methods=["POST", "GET"])
def blog():
  if request.method == "POST":
    return
  if request.method == "GET":
    return render_template("blog.html")

app.run(host="0.0.0.0", port=8080, debug=True)