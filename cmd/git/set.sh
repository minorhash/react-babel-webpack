dir=$(pwd)
str=${dir: -19}
echo $str

git remote set-url origin git@github.com:minorhash/$str.git

