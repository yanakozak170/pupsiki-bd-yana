from app import app
from users_model import Users
from flask import request, jsonify

users = Users()

@app.route("/users")
def get_all_users():
    result = users.get_all_users()
    return jsonify(result), result.get('status_code', 200)

@app.route("/user/<id>")
def get_user_by_id(id):
    result = users.get_user_by_id(id)
    return jsonify(result), result.get('status_code', 200)

@app.route("/user/add", methods=["POST"])
def add_user():
    result = users.add_user(request.form)
    return jsonify(result), result.get('status_code', 200)

@app.route("/user/update", methods=["PATCH"])
def update_user():
    result = users.update_user(request.form)
    return jsonify(result), result.get('status_code', 200)

@app.route("/user/delete/<id>", methods=["DELETE"])
def delete_user(id):
    result = users.delete_user(id)
    return jsonify(result), result.get('status_code', 200)

@app.route("/user/ban/<id>", methods=["PATCH"])
def ban_user(id):
    result = users.ban_user(id)
    return jsonify(result), result.get('status_code', 200)

@app.route("/user/unban/<id>", methods=["PATCH"])
def unban_user(id):
    result = users.unban_user(id)
    return jsonify(result), result.get('status_code', 200)
