Code is available at: https://github.com/StackHack-Dev/benchmarks/tree/master/node-flask

# Flask
```
ab -n 10000 -c 100 http://127.0.0.1:5000/
This is ApacheBench, Version 2.3 <$Revision: 1807734 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient)
Completed 1000 requests
Completed 2000 requests
Completed 3000 requests
Completed 4000 requests
Completed 5000 requests
Completed 6000 requests
Completed 7000 requests
Completed 8000 requests
Completed 9000 requests
Completed 10000 requests
Finished 10000 requests


Server Software:        Werkzeug/0.16.0
Server Hostname:        127.0.0.1
Server Port:            5000

Document Path:          /
Document Length:        13 bytes

Concurrency Level:      100
Time taken for tests:   14.198 seconds
Complete requests:      10000
Failed requests:        0
Total transferred:      1670000 bytes
HTML transferred:       130000 bytes
Requests per second:    704.35 [#/sec] (mean)
Time per request:       141.976 [ms] (mean)
Time per request:       1.420 [ms] (mean, across all concurrent requests)
Transfer rate:          114.87 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   10 172.0      0    3045
Processing:    75  131 140.9    121    1863
Waiting:       74  131 140.9    120    1863
Total:         75  141 221.2    121    3167

Percentage of the requests served within a certain time (ms)
  50%    121
  66%    123
  75%    125
  80%    127
  90%    131
  95%    151
  98%    172
  99%   1785
 100%   3167 (longest request)
```

# Node
```
ab -n 1000 -c 100 http://localhost:2011/
This is ApacheBench, Version 2.3 <$Revision: 1807734 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            2011

Document Path:          /
Document Length:        4 bytes

Concurrency Level:      100
Time taken for tests:   87.739 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      202000 bytes
HTML transferred:       4000 bytes
Requests per second:    11.40 [#/sec] (mean)
Time per request:       8773.867 [ms] (mean)
Time per request:       87.739 [ms] (mean, across all concurrent requests)
Transfer rate:          2.25 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    1   1.5      0       9
Processing:   454 8405 3548.1   8158   19425
Waiting:      442 8404 3548.3   8157   19425
Total:        463 8405 3547.2   8159   19425

Percentage of the requests served within a certain time (ms)
  50%   8159
  66%   9191
  75%  11030
  80%  11854
  90%  14302
  95%  14561
  98%  14666
  99%  14698
 100%  19425 (longest request)
```
