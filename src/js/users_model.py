import json
import mysql.connector

class Users:
    def __init__(self):
        try:
            self.con = mysql.connector.connect(host="localhost", user="root", passwd="A1b3c29f7", database="pupsiki")
            print("Successfully connected to the database!")
            self.cur = self.con.cursor(dictionary=True)
        except mysql.connector.Error as e:
            print("Failed to connect to the database:", str(e))

    def get_all_users(self):
        try:
            self.cur.execute("SELECT * FROM user")
            result = self.cur.fetchall()
            if self.cur.rowcount == 0:
                return {"message": "There are no users", "error": "Not Found", "status_code": 404}
            return {"data": result, "status_code": 200}
        except mysql.connector.Error as e:
            return {"message": str(e), "error": "Database Error", "status_code": 500}

    def get_user_by_id(self, id):
        if not str(id).isdigit():
            return {"message": "Invalid user id", "error": "Bad Request", "status_code": 400}
        try:
            self.cur.execute("SELECT * FROM user WHERE id = %s", (id,))
            result = self.cur.fetchall()
            if self.cur.rowcount == 0:
                return {"message": "There is no user with such id", "error": "Not Found", "status_code": 404}
            return {"data": result, "status_code": 200}
        except mysql.connector.Error as e:
            return {"message": str(e), "error": "Database Error", "status_code": 500}

    def add_user(self, data):
        data = dict(data)
        required_keys = {'id', 'username', 'email', 'password', 'isBanned'}
        if not required_keys.issubset(data):
            return {"message": "Invalid or missing keys", "error": "Bad Request", "status_code": 400}
        try:
            query = "INSERT INTO user (Id, Username, Email, Password, IsBanned) VALUES (%s, %s, %s, %s, %s)"
            values = (data['id'], data['username'], data['email'], data['password'], data['isBanned'])
            self.cur.execute(query, values)
            self.con.commit()
            if self.cur.rowcount > 0:
                return {"message": "Successfully added to database", "status_code": 200}
            else:
                return {"message": "User was not added to database", "error": "Not Acceptable", "status_code": 406}
        except mysql.connector.Error as e:
            self.con.rollback()
            return {"message": "Failed to add user: " + str(e), "error": "Database Error", "status_code": 500}


    def update_user(self, data):
        data = dict(data)
        if 'id' not in data:
            return {"message": "Missing user id", "error": "Bad Request", "status_code": 400}
        user_id = data['id']
        del data['id']
        if not data:
            return {"message": "No data provided to update", "error": "Bad Request", "status_code": 400}
        set_clause = ', '.join([f"{key} = %s" for key in data])
        values = list(data.values())
        values.append(user_id)
        try:
            query = f"UPDATE user SET {set_clause} WHERE Id = %s"
            self.cur.execute(query, values)
            self.con.commit()

            if self.cur.rowcount > 0:
                return {"message": "Successfully updated user", "status_code": 200}
            else:
                return {"message": "No changes made to user", "error": "Not Found", "status_code": 404}
        except mysql.connector.Error as e:
            self.con.rollback()
            return {"message": "Failed to update user: " + str(e), "error": "Database Error", "status_code": 500}

    def delete_user(self, id):
        if not str(id).isdigit():
            return {"message": "Invalid user id", "error": "Bad Request", "status_code": 400}
        try:
            self.cur.execute("DELETE FROM user WHERE Id = %s", (id,))
            self.con.commit()

            if self.cur.rowcount > 0:
                return {"message": "User was successfully deleted", "status_code": 200}
            else:
                return {"message": "Nothing to delete", "error": "Not Found", "status_code": 404}
        except Exception as e:
            self.con.rollback()
            return {"message": "Failed to delete user", "error": str(e), "status_code": 500}

    def ban_user(self, id):
        return self._update_ban_status(id, True)

    def unban_user(self, id):
        return self._update_ban_status(id, False)

    def _update_ban_status(self, id, ban_status):
        if not str(id).isdigit():
            return {"message": "Invalid user id", "error": "Bad Request", "status_code": 400}
        try:
            query = "UPDATE user SET IsBanned = %s WHERE Id = %s"
            self.cur.execute(query, (ban_status, id))
            self.con.commit()

            if self.cur.rowcount > 0:
                action = "banned" if ban_status else "unbanned"
                return {"message": f"User was successfully {action}", "status_code": 200}
            else:
                return {"message": "No user found with the given id", "error": "Not Found", "status_code": 404}
        except mysql.connector.Error as e:
            self.con.rollback()
            return {"message": f"Failed to update ban status: {str(e)}", "error": "Database Error", "status_code": 500}
