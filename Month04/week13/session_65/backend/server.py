from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import urllib.parse
from database import get_all_students, create_student, update_student, delete_student

class StudentHandler(BaseHTTPRequestHandler):
    
    def _set_headers(self, status_code=200):
        """Хариуны header тохируулах"""
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
    
    def do_OPTIONS(self):
        """CORS options хүсэлт"""
        self._set_headers(200)
    
    # TODO 5: do_GET()
    def do_GET(self):
        """
        GET хүсэлт - Бүх оюутнуудыг авах
        URL: GET /students
        """
        if self.path == '/students':
            try:
                # 1. database.get_all_students() дуудах
                students = get_all_students()
                
                # 2. JSON.dumps() ашиглах
                response = json.dumps(students, ensure_ascii=False)
                
                # 3. self._set_headers() дуудах
                self._set_headers(200)
                
                # 4. self.wfile.write() ашиглах
                self.wfile.write(response.encode('utf-8'))
                
            except Exception as e:
                error_response = {'error': str(e)}
                self._set_headers(500)
                self.wfile.write(json.dumps(error_response).encode('utf-8'))
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({'error': 'Not found'}).encode('utf-8'))
    
    # TODO 6: do_POST()
    def do_POST(self):
        """
        POST хүсэлт - Шинэ оюутан үүсгэх
        URL: POST /students
        Body: {"name": "...", "subject": "...", "grade": ...}
        """
        if self.path == '/students':
            try:
                # 1. content_length авах
                content_length = int(self.headers['Content-Length'])
                
                # 2. self.rfile.read() ашиглах
                body = self.rfile.read(content_length)
                
                # 3. json.loads() ашиглах
                data = json.loads(body.decode('utf-8'))
                
                # Шаардлагатай талбарууд шалгах
                if not all(key in data for key in ['name', 'subject', 'grade']):
                    self._set_headers(400)
                    self.wfile.write(json.dumps({'error': 'Missing required fields'}).encode('utf-8'))
                    return
                
                # Дүн 0-100 хооронд эсэх шалгах
                if not (0 <= data['grade'] <= 100):
                    self._set_headers(400)
                    self.wfile.write(json.dumps({'error': 'Grade must be between 0 and 100'}).encode('utf-8'))
                    return
                
                # 4. database.create_student() дуудах
                student = create_student(data['name'], data['subject'], data['grade'])
                
                # 5. Response буцаах
                self._set_headers(201)
                self.wfile.write(json.dumps(student, ensure_ascii=False).encode('utf-8'))
                
            except json.JSONDecodeError:
                self._set_headers(400)
                self.wfile.write(json.dumps({'error': 'Invalid JSON'}).encode('utf-8'))
            except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode('utf-8'))
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({'error': 'Not found'}).encode('utf-8'))
    
    # TODO 7: do_PUT()
    def do_PUT(self):
        """
        PUT хүсэлт - Оюутан шинэчлэх
        URL: PUT /students/{id}
        Body: {"name": "...", "subject": "...", "grade": ...}
        """
        if self.path.startswith('/students/'):
            try:
                # 1. URL-аас ID авах
                path_parts = self.path.split('/')
                if len(path_parts) != 3:
                    self._set_headers(400)
                    self.wfile.write(json.dumps({'error': 'Invalid URL format'}).encode('utf-8'))
                    return
                
                student_id = int(path_parts[2])
                
                # 2. Body унших
                content_length = int(self.headers['Content-Length'])
                body = self.rfile.read(content_length)
                data = json.loads(body.decode('utf-8'))
                
                # Шаардлагатай талбарууд шалгах
                if not all(key in data for key in ['name', 'subject', 'grade']):
                    self._set_headers(400)
                    self.wfile.write(json.dumps({'error': 'Missing required fields'}).encode('utf-8'))
                    return
                
                # Дүн 0-100 хооронд эсэх шалгах
                if not (0 <= data['grade'] <= 100):
                    self._set_headers(400)
                    self.wfile.write(json.dumps({'error': 'Grade must be between 0 and 100'}).encode('utf-8'))
                    return
                
                # 3. database.update_student() дуудах
                student = update_student(student_id, data['name'], data['subject'], data['grade'])
                
                if student is None:
                    self._set_headers(404)
                    self.wfile.write(json.dumps({'error': 'Student not found'}).encode('utf-8'))
                    return
                
                self._set_headers(200)
                self.wfile.write(json.dumps(student, ensure_ascii=False).encode('utf-8'))
                
            except ValueError:
                self._set_headers(400)
                self.wfile.write(json.dumps({'error': 'Invalid student ID'}).encode('utf-8'))
            except json.JSONDecodeError:
                self._set_headers(400)
                self.wfile.write(json.dumps({'error': 'Invalid JSON'}).encode('utf-8'))
            except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode('utf-8'))
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({'error': 'Not found'}).encode('utf-8'))
    
    # TODO 8: do_DELETE()
    def do_DELETE(self):
        """
        DELETE хүсэлт - Оюутан устгах
        URL: DELETE /students/{id}
        """
        if self.path.startswith('/students/'):
            try:
                # 1. URL-аас ID авах
                path_parts = self.path.split('/')
                if len(path_parts) != 3:
                    self._set_headers(400)
                    self.wfile.write(json.dumps({'error': 'Invalid URL format'}).encode('utf-8'))
                    return
                
                student_id = int(path_parts[2])
                
                # 2. database.delete_student() дуудах
                deleted = delete_student(student_id)
                
                if not deleted:
                    self._set_headers(404)
                    self.wfile.write(json.dumps({'error': 'Student not found'}).encode('utf-8'))
                    return
                
                # 3. Success message буцаах
                self._set_headers(200)
                self.wfile.write(json.dumps({'message': 'Student deleted successfully'}).encode('utf-8'))
                
            except ValueError:
                self._set_headers(400)
                self.wfile.write(json.dumps({'error': 'Invalid student ID'}).encode('utf-8'))
            except Exception as e:
                self._set_headers(500)
                self.wfile.write(json.dumps({'error': str(e)}).encode('utf-8'))
        else:
            self._set_headers(404)
            self.wfile.write(json.dumps({'error': 'Not found'}).encode('utf-8'))

def run_server():
    """Server эхлүүлэх"""
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, StudentHandler)
    print('Server running on http://localhost:8000')
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()