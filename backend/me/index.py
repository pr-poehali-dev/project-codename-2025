import json
import os
from datetime import datetime
import psycopg2


CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Session-Id',
}


def handler(event: dict, context) -> dict:
    """Проверяет сессию и возвращает данные текущего пользователя БукЛайн."""

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {**CORS, 'Access-Control-Max-Age': '86400'}, 'body': ''}

    headers = event.get('headers') or {}
    session_id = headers.get('X-Session-Id') or headers.get('x-session-id') or ''

    if not session_id:
        return {'statusCode': 401, 'headers': {**CORS}, 'body': json.dumps({'error': 'Не авторизован'})}

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

    cur.execute(
        '''SELECT u.id, u.email, u.name FROM bookline_sessions s
           JOIN bookline_users u ON u.id = s.user_id
           WHERE s.id = %s AND s.expires_at > %s''',
        (session_id, datetime.utcnow())
    )
    row = cur.fetchone()
    cur.close()
    conn.close()

    if not row:
        return {'statusCode': 401, 'headers': {**CORS}, 'body': json.dumps({'error': 'Сессия не найдена или устарела'})}

    user_id, email, name = row
    return {
        'statusCode': 200,
        'headers': {**CORS, 'Content-Type': 'application/json'},
        'body': json.dumps({'user': {'id': user_id, 'email': email, 'name': name}})
    }
