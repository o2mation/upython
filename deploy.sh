cd src
npm run build
cp dist/* ../docs -rf
cp dist/* ../../o2mation.github.io -rf
rm dist -rf
git add .
git commit -am "update"
git push
cd ../../o2mation.github.io
git add .
git commit -am "update"
git push
