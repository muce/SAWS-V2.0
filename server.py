from flask import Flask
from flask import render_template


app = Flask(__name__)

@app.route('/')


def hello(name=None):
    return render_template('index.html', name="WindSpeed TEST")


def hello_world():
    return 'WindSpeed'
    
if __name__ == '__main__':
    app.run(debug=True)
