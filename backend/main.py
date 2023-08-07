from art import *
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# test github actions
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET')
    return response

@app.route("/generate-aa", methods=["GET"])
def aa_generator():
    text = request.args.get("text")
    mode = request.args.get("mode")
    aa_li = create_aa(text, mode)
    return jsonify(
        aa = aa_li
    )

def create_aa(text, mode):
    aa_li = []
    for _ in range(5):
        aa_li.append(text2art(text, mode))
    return aa_li
