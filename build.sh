yarn build
rm -r ../service/dist
mkdir ../service/dist
mkdir ../service/dist/static
cp -R ./dist/* ../service/dist/static/
cp -R ./dist/index.html ../service/dist/