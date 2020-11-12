touch index.html

cat > index.html <<- EOM
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
    <title>COMP.SE.200</title>
</head>
<body>
  <h1>Software testing assignment</h1>
  <p>This page includes links to test reports made for Tampere University course 'COMP.SE.200 Software Testing'. Testing and the reports were implemented with Jest. Travis CI was used for deployment and from there the generated reports were uploaded to Amazon S3 bucket. This page just contains links to those reports.</p>
  <ul> reports
EOM

reports=$(aws s3 ls s3://comp.se.200 --recursive | grep 'COMP.SE.200')

IFS=$'\n'
while IFS= read -r line; do
    timestamp=$(echo "$line" | awk '{print $1 " " $2}')
    url=$(echo "$line" | awk '{print $NF}') 
    echo "<li><a href="https://s3.amazonaws.com/comp.se.200/$url">$timestamp</a></li>" >> index.html
done <<< $reports

cat >> index.html <<- EOM
</ul>
</body>
</html>
EOM

aws s3 cp index.html s3://comp.se.200/index.html
