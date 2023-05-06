import cohere
from dotenv import load_dotenv
import os
from os.path import join, dirname

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)
api_key = os.environ.get("API_KEY")

co = cohere.Client(api_key)


@app.route('/', methods=['POST'])
def call():
    prompt = request.form.get('prompt')
    res = co.generate(
        prompt=prompt,
        model="command-light-nightly",
        temperature=0.1,
        max_tokens=300,
    )[0]
    print(res)
    if res[0] == '\n':
        return res[1:]
    return res

@app.route('/friend', methods=['POST'])
def call_friend():
    prompt = request.form.get('prompt')
    res = co.generate(
        prompt=prompt,
        model="command-light-nightly",
        temperature=1,
        max_tokens=300,
    )[0]
    print(res)
    return jsonify(res)