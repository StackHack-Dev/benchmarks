import requests
import json
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    r = requests.get("https://jsonplaceholder.typicode.com/todos/1")
    data = json.dumps(r.json(), indent=2)
    d = r.json()
    id = d["id"]
    print(data)
    return "Done"