# nuwe
Nuwe Stuff: API implementing and endpoint that converts CSV files to JSON

Usage, initialize API:

git clone https://github.com/anumerico/nuwe.git
cd nuwe
npm install
node nuwe.js

Test:

curl -X POST -F "file=@hurricanes.csv" http://localhost:9000/upload-csv

