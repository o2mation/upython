cd src
npm run build
cp dist/* ../docs -rf
cp dist/* ../../o2mation.github.io -rf
rm dist -rf