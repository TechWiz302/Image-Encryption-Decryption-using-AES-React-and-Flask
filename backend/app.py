from flask import Flask, jsonify, request, send_file
from flask_cors import CORS
from Crypto.Cipher import AES
from Crypto.Hash import SHA256
from Crypto import Random
from werkzeug.utils import secure_filename
from PIL import Image
import os

app = Flask(__name__)
CORS(app)

@app.route("/encrypted_download", methods=["POST"])
def encrypted_download():
    if request.method == "POST":
        try:
            key = request.form['key']
            file = request.files['file']
            filename = secure_filename(file.filename)
            file.save(filename)

            imageRes = encrypt_image(key, filename)

            return jsonify({"image": imageRes})
        except Exception as e:
            return jsonify({"error": str(e)})

def encrypt_image(key, file):
    imageRes = ""
    password = SHA256.new(key.encode("utf-8")).digest()

    if file.lower().endswith(('.png', '.jpg', '.jpeg')):
        img = Image.open(file)
        data = img.tobytes()

        cfb_cipher = AES.new(password, AES.MODE_CFB, b"This is an IV456")
        encrypted_data = cfb_cipher.encrypt(data)

        encrypted_img = Image.frombytes(img.mode, img.size, encrypted_data)
        encrypted_filename = "encrypted.png"
        encrypted_img.save(encrypted_filename)

        imageRes = encrypted_filename

    return imageRes

@app.route("/decrypted_download", methods=["POST"])
def decrypted_download():
    if request.method == "POST":
        try:
            key = request.form['key']
            file = request.files['file']
            filename = secure_filename(file.filename)
            file.save(filename)

            imageRes = decrypt_image(key, filename)

            return jsonify({"image": imageRes})
        except Exception as e:
            return jsonify({"error": str(e)})

def decrypt_image(key, file):
    imageRes = ""
    password = SHA256.new(key.encode("utf-8")).digest()

    if file.lower().endswith(('.png', '.jpg', '.jpeg')):
        enc_img = Image.open(file)
        enc_data = enc_img.tobytes()

        cfb_cipher = AES.new(password, AES.MODE_CFB, b"This is an IV456")
        decrypted_data = cfb_cipher.decrypt(enc_data)

        decrypted_img = Image.frombytes(enc_img.mode, enc_img.size, decrypted_data)
        decrypted_filename = "decrypted.png"
        decrypted_img.save(decrypted_filename)

        imageRes = decrypted_filename

    return imageRes

@app.route("/encImage", methods=["GET"])
def encImage():
    try:
        return send_file("encrypted.png", as_attachment=True)
    except Exception as e:
        return jsonify({"error": str(e)})
    
@app.route("/decImage", methods=["GET"])
def decImage():
    try:
        return send_file("decrypted.png", as_attachment=True)
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route("/")
def index():
    return "Hello World!"

if __name__ == '__main__':
    app.run(debug=True)
