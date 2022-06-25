# nuwe
Nuwe Stuff: API implementing and endpoint that converts CSV files to JSON

Usage, initialize API:

git clone https://github.com/anumerico/nuwe.git \
cd nuwe\
npm install\
node nuwe.js

Test, in an other terminal type:

cd nuwe\
cd test\
curl -X POST -F "file=@*`FILENAME`*.csv" http://localhost:9000/upload-csv

