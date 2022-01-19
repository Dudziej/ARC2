import json
import redis
from datetime import datetime

r = redis.StrictRedis(host='localhost', port=6379, db=0)

with open('../Scrapper/data.json') as json_file:
    data = json.load(json_file)
    for obj in data:
        jako_string = json.dumps(obj)
        r.set(obj['id'], jako_string)

for key in r.keys():
    time_start = datetime.utcnow()
    obj = r.get(key)
    time_stop = datetime.utcnow()
    print('%.15f' % (time_stop - time_start).microseconds)
    print(json.loads(obj.decode('utf-8')))


time_start = datetime.utcnow()
print(json.loads(r.get('43437460').decode('utf-8')))
time_stop = datetime.utcnow()
print('%.15f' % (time_stop - time_start).microseconds)
