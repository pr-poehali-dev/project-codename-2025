import json
import os
import secrets
import hashlib
from datetime import datetime, timedelta
import psycopg2


CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
}


def hash_password(password: str) -> str:
    return hashlib.sha256(password.encode()).hexdigest()


def ok(data: dict) -> dict:
    return {'statusCode': 200, 'headers': {**CORS, 'Content-Type': 'application/json'}, 'body': json.dumps(data)}


def err(status: int, message: str) -> dict:
    return {'statusCode': status, 'headers': {**CORS, 'Content-Type': 'application/json'}, 'body': json.dumps({'error': message})}


def handler(event: dict, context) -> dict:
    """Регистрация и вход пользователей БукЛайн. POST /register или POST /login по полю action."""

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {**CORS, 'Access-Control-Max-Age': '86400'}, 'body': ''}

    body = json.loads(event.get('body') or '{}')
    action = body.get('action', '')
    email = (body.get('email') or '').strip().lower()
    password = (body.get('password') or '').strip()
    name = (body.get('name') or '').strip()

    if not email or '@' not in email:
        return err(400, 'Введите корректный email')
    if not password or len(password) < 6:
        return err(400, 'Пароль должен быть не менее 6 символов')

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

    if action == 'register':
        cur.execute('SELECT id FROM bookline_users WHERE email = %s', (email,))
        if cur.fetchone():
            cur.close(); conn.close()
            return err(409, 'Пользователь с таким email уже существует')

        pw_hash = hash_password(password)
        cur.execute(
            'INSERT INTO bookline_users (email, name, password_hash) VALUES (%s, %s, %s) RETURNING id',
            (email, name or None, pw_hash)
        )
        user_id = cur.fetchone()[0]

    elif action == 'login':
        pw_hash = hash_password(password)
        cur.execute('SELECT id, name FROM bookline_users WHERE email = %s AND password_hash = %s', (email, pw_hash))
        row = cur.fetchone()
        if not row:
            cur.close(); conn.close()
            return err(401, 'Неверный email или пароль')
        user_id, name = row

    else:
        cur.close(); conn.close()
        return err(400, 'Неверное действие. Используйте register или login')

    session_id = secrets.token_hex(32)
    expires_at = datetime.utcnow() + timedelta(days=30)
    cur.execute(
        'INSERT INTO bookline_sessions (id, user_id, expires_at) VALUES (%s, %s, %s)',
        (session_id, user_id, expires_at)
    )
    conn.commit()
    cur.close()
    conn.close()

    return ok({'session_id': session_id, 'user': {'id': user_id, 'email': email, 'name': name}})
