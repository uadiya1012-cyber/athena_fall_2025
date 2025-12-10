from http.server import HTTPServer, BaseHTTPRequestHandler
import json
from urllib.parse import urlparse, parse_qs
import database

class TaskAPIHandler(BaseHTTPRequestHandler):
    def _set_headers(self, status=200):
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_OPTIONS(self):
        self._set_headers()

    def do_GET(self):
        if self.path == '/tasks':
            tasks = database.get_all_tasks()
            self._set_headers()
            self.wfile.write(json.dumps(tasks, default=str).encode())
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({'error': 'Not found'}).encode())

    def do_POST(self):
        if self.path == '/tasks':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode())
            title = data.get('title')
            description = data.get('description', '')
            if not title:
                self._set_headers(400)
                self.wfile.write(json.dumps({'error': 'Title is required'}).encode())
                return
            new_task = database.create_task(title, description)
            self._set_headers(201)
            self.wfile.write(json.dumps(new_task, default=str).encode())
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({'error': 'Not found'}).encode())

    def do_PUT(self):
        parsed_path = urlparse(self.path)
        if parsed_path.path.startswith('/tasks'):
            task_id = parsed_path.path.split('/') [-1]
            content_length = int(self.headers['Content-Length'])
            put_data = self.rfile.read(content_length)
            data = json.loads(put_data.decode())
            title = data.get('title')
            description = data.get('description', '')
            completed = data.get('completed', False)
            if not title:
                self._set_headers(400)
                self.wfile.write(json.dumps({'error': 'Title is required'}).encode())
                return
            updated_task = database.update_task(task_id, title, description, completed)
            if updated_task:
                self._set_headers()
                self.wfile.write(json.dumps(updated_task, default=str).encode())
            else:
                self._set_headers(404)
                self.wfile.write(json.dumps({'error': 'Not found'}).encode())
    
    def do_DELETE(self):
        parsed_path = urlparse(self.path)
        if parsed_path.path.startswith('/tasks'):
            task_id = parsed_path.path.split('/') [-1]
            database.delete_task(task_id)
            self._set_headers()
            self.wfile.write(json.dumps({'message': 'Task deleted'}).encode())
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({'error': 'Not found'}).encode())
    
def run_server(port=8000):
    server_address = ('', port)
    httpd = HTTPServer(server_address, TaskAPIHandler)
    print(f'Server is working on http://localhost:{port}')
    print(f'API endpoint: http://localhost:{port}/tasks')
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()